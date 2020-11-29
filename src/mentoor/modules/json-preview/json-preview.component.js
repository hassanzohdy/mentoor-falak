class JsonPreview {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(http) {
        this.http = http;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.json = this.prop('json');

        this.collapsed = this.prop('collapsed', true);

        if (!this.json) {
            let jsonFile = this.prop('file');
            this.http.get(jsonFile).then(response => {
                this.json = response.data;
                this.ready();
            });
        }
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
        if (!this.json) return;

        if (this.jsonPreview.rendered) return;

        this.jsonPreview.rendered = true;

        var jsonViewer = new JSONViewer();

        this.jsonPreview.appendChild(jsonViewer.getContainer());

        jsonViewer.showJSON(this.json, -1, 1); // 1 menas collapse first level
    }
}