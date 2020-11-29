class ProjectTestEnvironmentsPage extends Project {
    // @macro(loadModules)
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectTestEnvironmentsService) {
        super(projectTestEnvironmentsService);
        this.name = 'project-details-test-environments';
        this.prependName = 'Test ENvironments';
        this.itemKey = 'testEnvironments';
        this.query = {
            testEnvironments: true,
        };

        this.deviceTypes = DEVICE_TYPES;

        this.operatingSystems = OPERATING_SYSTEMS;

        this.browsers = BROWSERS_LIST;
    }


    displayDeviceInfo(record) {
        let deviceInfo = '';

        if (record.deviceBrand) {
            deviceInfo += record.deviceBrand;

            if (record.deviceModel) {
                deviceInfo += ' ' + record.deviceModel
            }
        }

        if (record.deviceType) {
            if (!deviceInfo) {
                return record.deviceType;
            } else {
                deviceInfo += ' (' + record.deviceType + ')';
            }
        }

        return deviceInfo;
    }

    displayBrowserInfo(record) {
        if (!record.browser) return 'N/a';  
        return getBrowserName(record) + (record.browserVersion ? (' ' + record.browserVersion) : '');
    }

    displayOperatingSystemInfo(record) {
        if (!record.operatingSystem) return 'N/a';
        return record.operatingSystem + (record.operatingSystemVersion ? (' ' + record.operatingSystemVersion) : '');
    }
}