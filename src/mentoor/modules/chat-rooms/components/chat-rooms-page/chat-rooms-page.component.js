class ChatRoomsPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, chatRoomsService, meService) {
        this.user = user;
        this.chatRoomsService = chatRoomsService;
        this.meService = meService;

        this.name = 'chat-rooms';
        this.title = 'Chat rooms';
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.errors = {};
        this.isLoading = true;
        this.isSending = false;
        this.confirmJoin = false;
        this.joiningRoom = false;
        this.openAcceptanceCriteriaModal = false;

        let response = await this.chatRoomsService.list();
        this.chatRooms = response.records;

        this.isLoading = false;
    }

    /**
     * Send the chat rooms answer 
     * 
     * @param  {HTMLFormElement} form
     */
    submitAcceptanceCriteria(form) {
        this.currentForm = form;
        this.acceptanceModal.close();
        this.confirmJoin = true;
    }

    async joinRoom() {
        this.isSending = true;
        this.confirmJoin = null;
        let response = await this.chatRoomsService.joinRoom(this.joiningRoom.id, this.currentForm);

        this.joiningRoom = response.record;
        this.chatRooms[this.currentIndex] = response.record;
        this.user.update(response.user);
        this.isSending = false;
        this.joiningRoom = null;
    }

    userIsMemberOf(room) {
        return Array.get(room.members, member => member.id == this.user.id) != null;
    }

    userIsModeratorOf(room) {
        for (let member of room.members) {
            if (member.id == this.user.id && member.role != 'member') return true;
        }

        return false;
    }

    confirmingRoom(room, index) {
        this.joiningRoom = room;
        this.currentIndex = index;
        if (room.acceptanceCriteria) {
            this.openAcceptanceCriteriaModal = true;
        } else {
            this.confirmJoin = true;
        }
    }

    async getRoomRequests(room, index) {
        this.currentRoom = room;
        this.currentIndex = index;
        this.openRoomRequests = true;
        this.isLoadingRequests = true;
        this.roomRequests = [];

        let response = await this.chatRoomsService.getJoinRequests(room.id);

        this.roomRequests = response.roomRequests;

        this.isLoadingRequests = false;
    }

    approveRequest(roomRequest, index) {
        return this.applyActionToRoomRequest(roomRequest, index, 'approve');
    }

    declineRequest(roomRequest, index) {
        return this.applyActionToRoomRequest(roomRequest, index, 'decline');
    }

    applyActionToRoomRequest(roomRequest, index, status) {
        if (confirm('Are you sure ?') === false) return;

        delete this.roomRequests[index];

        this.roomRequests = Array.reset(this.roomRequests);

        let method = status == 'approve' ? 'approveJoinRequest' : 'declineJoinRequest';

        this.chatRoomsService[method](this.currentRoom.id, roomRequest.id).then(response => {
            this.chatRooms[this.currentIndex] = response.record;
        });
    }
    
    userIsRequestingToJoin(room) {
        return room.requests.includes(this.user.id);
    }
}