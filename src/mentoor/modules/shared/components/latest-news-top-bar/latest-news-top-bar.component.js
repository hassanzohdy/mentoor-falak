class LatestNewsTopBar {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, seenService) {
        this.user = user;
        this.router = router;
        this.seenService = seenService;
    }
    
    /**
     * Mark as seen
     */
    markAsSeen() {
        this.seenService.markAsSeen(this.user.seen.latest).then(response => {
            this.user.update(response.user);
        });
        
        this.user.seen[this.user.seen.latest] = true;
        this.user.seen.latest = null;

        this.detectChanges();
    }

    /**
     * Go to `latest` page
     */
    goToLatest() {
        this.router.navigateTo('/projects/help');
    }
}