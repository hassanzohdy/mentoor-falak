class TracksListPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(db, shareable, tracksService) {
        this.name = 'tracks';
        this.title = 'Academy';
        this.db = db;
        this.shareable = shareable;
        this.tracksService = tracksService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;
        this.tracks = [];

        // if (this.cache.has('tracks')) {
        //     this.tracks = this.cache.get('tracks');
        //     this.isLoading = false;
        //     this.shareTracks();
        // }

        
        this.db.get('tracks', e => {
            return this.tracksService.list();
        }, this.db.recache).then(response => {
            let {records: tracks} = response;
    
            this.tracks = collect(tracks).sortBy('sortOrder').toArray();
    
            // this.cache.set('tracks', this.tracks);
    
            this.shareTracks();
    
            this.isLoading = false;
        });

    }

    /**
     * Share tracks using the shareable package so we won't make the user wait to get response from back end
     */
    shareTracks() {
        for (let track of this.tracks) {
            this.db.set('track-' + track.slug, track);
            this.shareable.share('track-' + track.slug, track);
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}