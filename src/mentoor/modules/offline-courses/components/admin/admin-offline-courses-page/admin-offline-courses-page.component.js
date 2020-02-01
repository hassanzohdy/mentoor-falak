class AdminOfflineCoursesPage extends CRUD {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(adminOfflineCoursesService, adminUsersService) {
        super(adminOfflineCoursesService);
        this.adminUsersService = adminUsersService;
        this.name = 'offline-courses';
        this.title = trans('offline-courses-page');

        let days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

        this.crudOptions = {
            columns: ['ID', 'Image', 'Course name', 'Cost', 'Level', 'Sort order', 'Display', 'Control'],
            heading: 'course',
            dataSchema: {
                name: null,
                cost: 0,
                description: '',
                content: '',
                requirements: '',
                address: '',
                level: '',
                whenTo: {
                    subscribe: '',
                    notSubscribe: '',
                },
                instructor: {
                    id: 1,
                },
                time: {
                    startDate: null,
                    sessionsPerWeek: 1,
                    length: 12, // 12 weeks
                    duration: 6, // 6 hours
                    days: {},
                }
            },
        };
        // append the days
        for (let day of days) {
            this.crudOptions.dataSchema.time.days[day] = {
                from: null, // Starting hour
                to: null, // Ending hour
            };
        }

        this.tableHeading = "Courses";

        this.levels = ['Beginner', 'Advanced'];
    }
}