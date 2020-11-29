class ProjectWizard {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {


    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isOpen = false;
        this.project = this.prop('project');
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {
        document.body.addEventListener('keydown', e => {
            if (this.isOpen) return;
            const pressedButton = e.which || e.keyCode;
            const F1ButtonKeyCode = 112;

            if (pressedButton === F1ButtonKeyCode) {
                e.preventDefault();
                this.isOpen = true;
            }
        });
    }

    analyzeText(searchText) {
        const keywords = searchText.trim().split(' ');

        const [type, typeValue] = keywords;

        let typeName = pluralize(type.ltrim('#'), 1);

        this.items = [];

        switch (type) {
            case 'meeting':
                this.listMeetings(typeValue);
                break;
            case 'task':
                this.listTasks(typeValue);
                break;
            case 'module':
                this.listModules(typeValue);
                break;
            case 'bug':
                this.listBugs(typeValue);
                break;
            case 'testSuit':
                this.listTestSuits(typeValue);
                break;
            case 'documentation':
            case 'document':
                this.listDocumentation(typeValue);
                break;
            case 'resource':
                this.listResources(typeValue);
                break;
            case 'members':
                this.listMembers(typeValue);
                break;
            case 'testSuit':
                this.listTestSuits(typeValue);
                break;

            default:
                break;
        }
    }
}