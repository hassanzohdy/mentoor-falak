class AdminEinsteinPuzzlesService extends Endpoint.Service {
    /**
     * {@inheritDoc} 
     */
    boot() {
        this.setRoute('/admin/einstein-chamber/puzzles');
    }
}

DI.register({
    class: AdminEinsteinPuzzlesService,
    alias: 'adminEinsteinPuzzlesService',
});