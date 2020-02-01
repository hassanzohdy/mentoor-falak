class ChatRoomModal {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, chatRoomsService) { 
        this.user = user;
        this.chatRoomsService = chatRoomsService;

        this.defaultSchema = {
            name: null,
            image: null,
            rules: null,
            category: 'programming',
            isPublic: true,
            description: null,
            acceptanceCriteria: null,
            acceptanceCost: 0,
            language: 'all',
            size: null,
        };
    }
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.errors = {};
        this.cost = null;
        this.isLoading = false;
        this.maxMembers = null;
        this.isValidForm = true;
        this.formHandler = null;
        this.modal = null;
        this.onSave = this.inputs.getEvent('save');
        this.close = this.inputs.getEvent('close');
        this.sizes = Object.keys(FLAGS.chatRooms.sizes);
        this.room = this.inputs.getProp('room', this.defaultSchema);
    }

    setCurrentSize(currentSize) {
        this.cost = FLAGS.chatRooms.sizes[currentSize].cost;
        this.maxMembers = FLAGS.chatRooms.sizes[currentSize].maxMembers;

        if (this.user.gold < this.cost) {
            this.formHandler.addError('cost', null, `Insufficient gold.`);
        } else {
            this.formHandler.removeError('cost');
        }   
    }

    /**
     * Submit form post
     */
    async submit(form) {
        this.isSending = true; 

        try {
            let response = this.room.id ? await this.chatRoomsService.update(this.room.id, form) : await this.chatRoomsService.create(form);

            if (response.user.gold != this.user.gold) {
                playAudio(Sounds.PAY_COINS);
            }

            this.user.update(response.user);
            this.onSave(response.record);
            this.modal.close();
        } catch (e) {
            echo(e);
        }
    }
}