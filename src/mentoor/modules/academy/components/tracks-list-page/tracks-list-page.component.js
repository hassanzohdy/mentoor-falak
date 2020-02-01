class TracksListPage {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(tracksService, cache) {
        this.name = 'tracks';
        this.title = 'Academy';
        this.cache = cache;
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

        let {records: tracks} = await this.tracksService.list();

        this.tracks = collect(tracks).sortBy('sortOrder').toArray();

        // this.cache.set('tracks', this.tracks);

        this.shareTracks();

        this.isLoading = false;
    }

    /**
     * Share tracks using the shareable package so we won't make the user wait to get response from back end
     */
    shareTracks() {
        for (let track of this.tracks) {
            // this.cache.set('track-' + track.id, track);
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}