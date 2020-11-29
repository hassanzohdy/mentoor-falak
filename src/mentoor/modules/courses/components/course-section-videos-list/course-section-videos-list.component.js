class CourseSectionVideosList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, courseVideosService) {
        this.user = user;
        this.courseVideosService = courseVideosService;
    }


    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.handler.observe('videos').onChange('videos', this.prepareVideos.bind(this));

        this.course = this.prop('course');

        this.prepareVideos(this.prop('videos'));

        this.isViewer = this.prop('isViewer');
        this.edit = this.event('edit');
    }

    delete(videoId) {
        this.videosList.splice(this.videoIndex, 1);

        this.index = null;

        this.event('delete')(videoId)
    }

    markAsWatched(video) {
        this.course.completedVideos.push(video.id);
        
        this.event('watched')()

        this.courseVideosService.markAsWatched(this.course.id, video.id);
    }

    openVideo(video) {
        this.isModalOpen = true;
        this.currentVideo = video;

        this.courseVideosService.increaseViews(video.id);
    }

    draggableVideos(sectionsContainer) {
        if (! this.prop('controllable')) return;
        if (sectionsContainer.draggable) return;

        sectionsContainer.draggable = true;

        Sortable.create(sectionsContainer, {
            sort: true,
            onEnd: e => {
                let [currentVideo] = this.videosList.splice(e.oldIndex, 1);

                this.videosList.splice(e.newIndex, 0, currentVideo);

                let ordering = [];

                this.videosList.map((video, index) => {
                    ordering.push({
                        id: video.id,
                        order: index + 1,
                    });
                });

                this.courseVideosService.order(ordering);
            },
        });
    }

    prepareVideos(videos) {
        this.videosList = videos;
        this.videosList.forEach(video => {
            let minutes = String(video.duration.minutes).padStart(2, '0'),
                seconds = String(video.duration.seconds).padStart(2, '0');

            video.durationText = minutes + ':' + seconds;
        });

        this.videosList = collect(this.videosList).sortBy('order').toArray();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() { }
}