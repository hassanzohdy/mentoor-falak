class ChatRoomsService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/chat-rooms');
    }

    /**
     * Request join for room
     * 
     * @parma   {number} roomId
     * @Param   {mixed} data
     * @returns Promise
     */
    joinRoom(roomId, data) {
        return this.endpoint.post(this.path('/join/' + roomId), data);
    }

    /**
     * Get room join requests
     * 
     * @param {number} roomId 
     */
    getJoinRequests(roomId) {
        return this.endpoint.get(this.path('/requests/' + roomId));
    }

    /**
     * Approve join request
     * 
     * @param   {number} roomRequestId
     * @returns Promise
     */
    approveJoinRequest(roomId, roomRequestId) {
        return this.endpoint.patch(this.path(`/requests/${roomId}/approve/${roomRequestId}`));
    }

    /**
     * Decline join request
     * 
     * @param   {number} roomRequestId
     * @returns Promise
     */
    declineJoinRequest(roomId, roomRequestId) {
        return this.endpoint.patch(this.path(`/requests/${roomId}/decline/${roomRequestId}`));
    }

    /**
     * Get chat room messages
     * 
     * @param   {number} roomId
     * @returns Promise
     */
    messages(roomId) {
        return this.endpoint.get(this.path(`/messages/${roomId}`));
    }

    sendMessage(roomId, data) {
        return this.endpoint.post(this.path(`/messages/${roomId}/message`), data);
    }
}

DI.register({
    class: ChatRoomsService,
    alias: 'chatRoomsService',
});