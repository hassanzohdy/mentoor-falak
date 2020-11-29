class ChatRoomsPanel {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, meService, chatRoomsService) {
        this.user = user;
        this.router = router;
        this.meService = meService;
        this.chatRoomsService = chatRoomsService;

        this.chatRooms = [];
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.input = '';
        this.lastSentMessage = null;
        this.openedRoom = null;
        this.chatRoomsAreOpened = false;
        this.openRoomsList = null;
        if (!userSocket) return;

        userSocket.chatRooms = this;

        userSocket.on('chat-rooms.new-message', data => {
            this.lastSentMessage = data;
            let { roomId, message } = data;

            for (let chatRoom of this.chatRooms) {
                if (chatRoom.id != roomId) continue;

                if (message.createdBy) {
                    message.sender = message.createdBy;
                }

                chatRoom.messages.push(message);

                if ((!this.openedRoom || this.openedRoom.id != chatRoom) && message.sender.id != this.user.id) {
                    this.increaseUnseenNotifications(roomId);
                    // add new notification
                    // this.meService.newNotification({
                    //     for: 'message',
                    //     extra: {
                    //         roomId: chatRoom.id,
                    //     }
                    // }).then(response => {
                    //     this.user.update(response.user);
                    //     this.detectChanges();
                    // });
                }
            }

            if (Is.empty(this.chatRooms)) {
                this.increaseUnseenNotifications(roomId);
            }
        });
    }

    navigateToChatRoomsPage() {
        this.close();
        this.router.navigateTo('/chat-rooms');
    }

    increaseUnseenNotifications(roomId) {
        if (!this.user.unseenRoomsNotifications.rooms[roomId]) {
            this.user.unseenRoomsNotifications.rooms[roomId] = 0;
        }

        this.user.unseenRoomsNotifications.total++;
        this.user.unseenRoomsNotifications.rooms[roomId]++;

        this.detectChanges();
    }

    playSound() {
        if (!this.lastSentMessage) return;

        if (! userInThePage() || !this.chatRoomsAreOpened || !this.openedRoom || this.lastSentMessage.roomId != this.openedRoom.id) {
            playAudio(Sounds.MESSAGE);
        }
    }

    openChatRooms() {
        if (!this.user.isLoggedIn() || Is.empty(this.user.chatRoomsIds)) {
            return this.router.navigateTo('/chat-rooms');
        }

        this.meService.chatRooms().then(response => {
            this.isLoading = false;
            this.chatRooms = response.chatRooms.map(room => {
                room.messages = [];

                return room;
            });
        });

        this.isLoading = true;

        this.chatRoomsAreOpened = true;

        setTimeout(() => {
            document.documentElement.classList.add('c-r');
        }, 600);
    }

    close() {
        this.chatRoomsAreOpened = false;

        document.documentElement.classList.remove('c-r');
    }

    async openRoom(room) {
        this.openedRoom = room;
        this.input = '';
        this.isLoadingMessages = true;
        if (Is.empty(room.messages)) {
            this.isLoadingMessages = true;
        } else {
            this.isLoadingMessages = false;
            this.clearUnseenNotifications();
            this.scrolled = false;
        }

        this.openRoomsList = false;

        let response = await this.chatRoomsService.messages(this.openedRoom.id);

        this.openedRoom.messages = response.messages.map(message => {
            if (Is.empty(message.sender)) {
                message.sender = message.createdBy;
            }

            return message;
        });

        this.clearUnseenNotifications(false);

        this.scrolled = false;

        this.isLoadingMessages = false;
    }

    clearUnseenNotifications(detect = true) {
        let room = this.openedRoom;
        if (Object.get(this.user, `unseenRoomsNotifications.rooms.${room.id}`)) {
            this.user.unseenRoomsNotifications.total -= this.user.unseenRoomsNotifications.rooms[room.id];
            this.user.unseenRoomsNotifications.rooms[room.id] = 0;
        }

        if (detect) {
            this.detectChanges();
        }
    }

    sendMessage(input, e) {
        if (e.keyCode != 13 || !this.input) return;

        if (e.shiftKey) return;

        e.preventDefault();

        let message = this.input;

        let messageObject = {
            message,
            sender: this.user.info,
            createdBy: this.user.info,
            createdAt: {
                format: new Date,
                timestamp: Date.now() / 1000,
            },
        };

        // this.openedRoom.messages.push();

        this.clearUnseenNotifications(false);

        this.input = '';

        // reset to English again
        this.writingIsArabic = false;

        userSocket.trigger(`chat-rooms.new-message`, {
            message: messageObject,
            roomId: this.openedRoom.id,
        });

        // send the message
        this.chatRoomsService.sendMessage(this.openedRoom.id, { message });
    }

    scrollToLastMessage() {
        // if (this.scrolled) return;
        this.messagesList.scrollTop = this.messagesList.scrollHeight;

        this.scrolled = true;
    }

    /**
     * Get proper message formatted time
     * 
     * @param   {object} time
     * @returns string  
     */
    formatDate(time) {
        let date = new Date(time.timestamp * 1000),
            hours = date.getHours(),
            minutes = date.getMinutes();

        // type coercion :P
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (hours < 10) {
            hours = '0' + hours;
        }

        return `${hours}:${minutes}`;
    }
}