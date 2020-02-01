class EinsteinAdminPuzzles extends CRUD {
    /**
     * {@inheritdoc}
     */
    constructor(einsteinCategoriesService, router, adminEinsteinPuzzlesService) {
        super(adminEinsteinPuzzlesService);
        this.einsteinCategoriesService = einsteinCategoriesService;
        this.name = 'admin-puzzles';
        this.title = trans('puzzles');
        this.crudOptions = {
            columns: ['ID', 'Title', 'Level', 'Public', 'Reward', 'Duration', 'Control'],
            heading: 'puzzles',
        };
        this.router = router;
    }

    async init() {
        this.resetData();
        
        this.isLoading = true;
        this.items = null;
        this.categoryId = this.router.params.categoryId;
        let { record: category } = await this.einsteinCategoriesService.get(this.categoryId);
        this.items = category.puzzles;
        this.tableHeading = `${category.name} Puzzles`;
        this.isLoading = false;
    }
}