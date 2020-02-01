class UserChatRoomsPuzzlesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/chat-rooms-answers');
    }
}

DI.register({
    class: UserChatRoomsPuzzlesService,
    alias: 'userChatRoomsPuzzlesService',
});