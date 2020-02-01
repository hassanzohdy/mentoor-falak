class ProjectBugsPage extends Project {
    /**
    * Constructor
    * Put your required dependencies in the constructor parameters list  
    */
    constructor(projectBugsService) {
        super(projectBugsService);
        this.name = 'project-details-bugs';
        this.prependName = 'Bugs';
        this.itemKey = 'bugs';
        this.audioInputName = 'record';
        this.query = {
            bugs: true,
        };

    }

    onProjectLoad() {
        this.filterOptions = {
            assignees: [],
            testers: [],
            priorities: [],
            modules: [],
            sprints: [],
        };

        this.filteredData = Object.clone(this.filterOptions);

        this.project.bugs.forEach(bug => {
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

            Array.pushOnce(this.filterOptions.priorities, bug.priority);
        });

        this.sortBugsByStatus(this.project.bugs);
    }

    sortBugsByStatus(bugs) {
        bugs = collect(bugs).map(bug => {
            bug.canBeModified = this.project.isHigherAuthority ||
                bug.createdBy.id == this.user.id ||
                this.userIsTeamLeaderOf('softwareTesting');

            return bug;
        }).groupBy('status').all();
        this.oldBugs = {};

        if (this.bugs) {
            this.oldBugs = Object.clone(this.bugs);
        }

        this.bugs = {};

        const defaultDisplay = false;

        for (let status in bugs) {
            this.bugs[status] = {
                bugs: bugs[status].toArray(),
                opened: this.oldBugs[status] && !Is.undefined(this.oldBugs[status].opened) ? this.oldBugs[status].opened : defaultDisplay,
            };
        }

        this.bugs = Object.sort(this.bugs);
    }

    filterBy(key, selectedValue) {
        if (Is.array(selectedValue)) {
            selectedValue = collect(selectedValue).pluck('value').toArray();
            this.filteredData[key] = selectedValue;
            return this.filter();
        }
    }

    filter() {
        let bugs = this.project.bugs.filter(bug => {
            let filtered = true;

            if (!Is.empty(this.filteredData.priorities)) {
                filtered &= this.filteredData.priorities.includes(bug.priority);
            }

            if (!Is.empty(this.filteredData.assignees)) {
                let found = false;
                for (let assignee of bug.assignee) {
                    if (this.filteredData.assignees.includes(String(assignee.id))) {
                        found = true;
                        break;
                    }
                }

                filtered &= found;
            }

            if (!Is.empty(this.filteredData.testers)) {
                filtered &= this.filteredData.testers.includes(String(bug.tester.id));
            }

            if (!Is.empty(this.filteredData.modules)) {
                filtered &= bug.module && this.filteredData.modules.includes(String(bug.module.id));
            }

            if (!Is.empty(this.filteredData.sprints)) {
                filtered &= this.filteredData.sprints.includes(String(bug.sprint.id));
            }

            return filtered;
        });

        this.sortBugsByStatus(bugs);
    }

    onRemove(   ) {
        this.onProjectLoad();
    }

    onSubmit(record) {
        if (this.currentType == 'add') {
            Object.get(this.project, this.itemKey).unshift(record);
        } else {
            Object.set(this.project, this.itemKey + '.' + this.index, record);
        }

        this.onProjectLoad();
    }
}