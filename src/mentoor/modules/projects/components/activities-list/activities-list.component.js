class ActivitiesList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(activitiesService) {
        this.activitiesService = activitiesService;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.type = this.prop('type');
        this.typeId = this.prop('typeId');
        this.project = this.prop('project', {});

        this.isLoading = true;

        const { records } = await this.activitiesService.list({
            project: this.project.id,
            type: this.type,
            typeId: this.typeId
        });

        this.activities = records;

        this.isLoading = false;
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    displayData(data) { 
        if (Is.empty(data)) return 'None';

        if (Is.string(data)) {
            return data.readMoreChars(60);
        } else if (Is.array(data)) {
            return data.map(item => {
                if (Is.scalar(item)) return item;

                if (item.name) return item.name;
                if (item.title) return item.title;
            }).join(' | ');
        } else if (Is.plainObject(data)) {
            if (data.name) return data.name;
            if (data.title) return data.title;
        }
    }
}