class BugModal {
    // @macro(loadSprints, loadModules, loadComponents, loadTestEnvironments)
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(projectBugsService) {
        this.service = projectBugsService;
        this.priorities = PRIORITIES;
        this.statuses = BUGS_STATUSES;
        this.departments = [
            'backend',
            'frontend',
            'mobile',
        ];

        this.severities = [
            'showstopper',
            'critical',
            'major',
            'minor',
        ];

        this.classifications = [
            'security',
            'crash',
            'dataLoss',
            'performance',
            'uiUsability',
            'feature',
            'enhancement',
            'function',
            'other',
        ];

        this.reproducibleOptions = [
            'always',
            'rarely',
            'sometimes',
            'unable',
            'neverTried',
            'notApplicable',
        ];

        // New


        this.devices = [
            'desktop',
            'tablet',
            'mobile',
        ];

        this.mobileOS = [
            {
                text: 'Andriod',
                value: 'andriod',
                image: assets('images/andriod.png'),
            },
            {
                text: 'iOS',
                value: 'ios',
                image: assets('images/ios.svg'),
            },
        ];

        this.desktopOperatingSystems = [
            {
                text: 'Windows 7',
                value: 'windows-7',
                image: assets('images/windows-7.webp'),
            },
            {
                text: 'Windows 10',
                value: 'windows-10',
                image: assets('images/windows-10.png'),
            },
            {
                text: 'Ubuntu',
                value: 'ubuntu',
                image: assets('images/ubuntu.svg'),
            },
            {
                text: 'MacOS',
                value: 'mac',
                image: assets('images/mac.png'),
            },
        ];

        this.browsers = [
            {
                text: 'Google Chrome',
                value: 'chrome',
                image: assets('images/chrome.png'),
            },
            {
                text: 'Firefox',
                value: 'firefox',
                image: assets('images/firefox.png'),
            },
            {
                text: 'Edge',
                value: 'edge',
                image: assets('images/edge.png'),
            },
            {
                text: 'Safari',
                value: 'safari',
                image: assets('images/safari.svg'),
            },
            {
                text: 'Opera',
                value: 'opera',
                image: assets('images/opera.png'),
            },
        ];
    }

    setTestEnvironment(testEnvironment) {
        for (let key of [, 'deviceType', 'deviceBrand', 'deviceModel', 'operatingSystem', 'operatingSystemVersion', 'browser', 'browserVersion', 'applicationVersion']) {
            this.record[key] = testEnvironment[key];
        }

        this.detectChanges();
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.isValidForm = true;
        this.isSending = false;
        this.record = this.inputs.getProp('record');
        this.project = this.inputs.getProp('project');
        this.modalHeading = this.record.id ? 'Edit Bug' : 'Add New Bug';

        this.projectMembers = this.project.members.map(member => member.member);

        if (! this.record.id && this.project.currentSprint) {
            this.record.sprint = this.project.currentSprint;
        }

    }

    async submit(form) {
        this.isSending = true;

        this.detectChanges();

        let updatedRecord;

        if (this.recordAudio.recordData) {
            let formData = new FormData(form);
            formData.append('record', this.recordAudio.recordData);
            form = formData;
        }

        if (! this.record.id) {
            let { record } = await this.service.create(form);

            updatedRecord = record;
        } else {    
            let { record } = await this.service.update(this.record.id, form);

            updatedRecord = record;
        }

        this.inputs.getEvent('save')(updatedRecord);
        this.modal.close();

        // this.isSending = false;
    }
}