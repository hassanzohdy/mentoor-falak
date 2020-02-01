class ChatRoomsPuzzlesAnswersPage  extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(userChatRoomsPuzzlesService) {
        super(userChatRoomsPuzzlesService);
        this.name = 'chat-rooms-answers';
        this.crudOptions = {
            columns: ['#', 'User', 'Created at', 'View'],
            heading: 'View answer'
        }
        this.answerStatus = ['pending', 'approved', 'rejected'];
        this.tableHeading = 'Chat Rooms answers';

        // this.recordable = true;
        // this.recordName = 'recordNote';
    }
}