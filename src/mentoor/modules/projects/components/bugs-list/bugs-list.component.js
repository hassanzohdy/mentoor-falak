class BugsList {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, projectBugsService) {
        this.user = user;
        this.projectBugsService = projectBugsService;

        this.panelsStatus = {}; // opened closed
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.isLoading = true;

        this.bugsList = [];

        this.paginationInfo = {};

        this.project = this.prop('project');

        this.currentPage = 1;

        this.defaultFilterOptions = {
            projects: [],
            priorities: [],
            statuses: [],
            assignees: [],
            testers: [],
            page: this.currentPage,
        };

        this.filterOptions = Object.clone(this.defaultFilterOptions);

        this.filterOptions.statuses = this.user.get('projectSettings.bugs.list.statuses', []);

        this.filters = {};

        if (this.project) {
            this.filterOptions.projects.push(this.project.id);
        } else {
            this.filterOptions.me = true;
        }

        this.mandatoryData = {
            me: true,
            project: this.project ? this.project.id : null,
        };

        this.filter();

        this.projectBugsService.getFilters(this.mandatoryData).then(response => {
            this.filters = response.filters;
        });
    }

    editBug(bug, index) {
        this.bug = bug;
        this.index = index;
        this.editingBug = true;
    }
    
    confirmRemoving(record, index) {
        this.record = record;

        this.index = index;

        this.confirmDelete = true;
    }

    addBug(bug) {
        this.bugsList.unshift(bug);
        
        this.sortBugsByStatus();
    }

    remove() {
        this.projectBugsService.delete(this.record.id);

        this.bugsList.splice(this.index, 1);
        
        this.sortBugsByStatus();

        this.event('remove', this.record);

        this.index = null;
        this.record = null;
    }

    onSave(bug) {
        this.bug = bug;

        this.bugsList[this.index] = bug; 
        
        this.editingBug = false;
        
        this.sortBugsByStatus();
    }

    resetFilter() {
        this.filterOptions = Object.clone(this.defaultFilterOptions);        

        if (this.project) {
            this.filterOptions.projects.push(this.project.id);
        } else {
            this.filterOptions.me = true;
        }

        this.paginate(1);
    }

    paginate(page) {
        this.currentPage = page;
        this.filterOptions.page = page;

        this.filter();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    prepareBugs() {
        this.bugs.forEach(bug => {
            for (let assignee of bug.assignee) {
                if (!Array.get(this.filterOptions.assignees, filteredAssignee => filteredAssignee.id == assignee.id)) {
                    this.filterOptions.assignees.push(assignee);
                }
            }

            if (!Array.get(this.filterOptions.testers, item => item.id == bug.tester.id)) {
                this.filterOptions.testers.push(bug.tester);
            }

            if (bug.module.id && !Array.get(this.filterOptions.modules, item => item.id == bug.module.id)) {
                this.filterOptions.modules.push(bug.module);
            }

            if (bug.sprint.id && !Array.get(this.filterOptions.sprints, item => item.id == bug.sprint.id)) {
                this.filterOptions.sprints.push(bug.sprint);
            }

            if (bug.priority) {
                Array.pushOnce(this.filterOptions.priorities, bug.priority);
            }
        });

        this.sortBugsByStatus(this.bugs);
    }

    sortBugsByStatus() {
        let bugsList = collect(this.bugsList).map(bug => {
            bug.canBeModified = bug.project.is.higherAuthority ||
                bug.createdBy.id == this.user.id;

            return bug;
        }).groupBy('status').all();

        this.bugs = {};

        const defaultDisplay = false;

        for (let status in bugsList) {
            this.bugs[status] = {
                bugs: bugsList[status].toArray(),
                opened: this.panelsStatus[status || defaultDisplay],
            };
        }

        this.bugs = Object.sort(this.bugs);

        this.detectChanges();
    }

    togglePanel(status, bugsOptions) {
        bugsOptions.opened = ! bugsOptions.opened; 

        this.panelsStatus[status] = bugsOptions.opened;

        this.detectChanges();
    }

    filterBy(key, selectedValue) {
        if (Is.array(selectedValue)) {
            selectedValue = collect(selectedValue).pluck('value').toArray();
            this.filterOptions[key] = selectedValue;
            return this.filter();
        }
    }

    loadMoreBugs() {
        this.filterOptions.page = ++this.currentPage;

        this.filter(true);
    }

    async filter(appendData) {
        if (this.currentPage > 1) {
            this.isPaginating = true;
        }

        const { records, paginationInfo } = await this.projectBugsService.list(this.filterOptions);

        this.bugsList = (appendData ? this.bugsList.concat(records) : records).map((bug, index) => {
            bug.originalIndex = index;
            return bug;
        });

        this.paginationInfo = paginationInfo;

        this.isPaginating = false;

        this.isLoading = false;

        this.sortBugsByStatus();
    }
}