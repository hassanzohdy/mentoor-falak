// DO NOT uncomment the imported lines, as they won't work...for the time being.
// import moment from 'moment'; 
// import {Days, getDayName} from APP_SRC + '/shared/helpers/date';

class CalendarPage {
    /**
     * Constructor
     */
    constructor(user, calendarService, shoppingMallService, meService, todoListService) {
        this.name = 'calendar';
        this.title = 'Calendar';
        this.dateFormat = 'DD-MM-YYYY';

        this.user = user;
        this.todoListService = todoListService;
        this.meService = meService;
        this.calendarService = calendarService;
        this.shoppingMallService = shoppingMallService;
        this.todoItems = []; // to cache the todo items

        this.buildCalendar();

        this.statusList = {
            active: true,
            completed: false,
            failed: false,
            autoFailed: false,
        }
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    async init() {
        this.newStatus = null;
        this.currentScheduleItem = null;
        this.isLoading = true;
        let { records } = await this.calendarService.list();
        this.originalCalendar = records;

        this.distributeCalendarSchedule();

        this.isLoading = false;
    }

    statusList(scheduleItem) {
        return {
            basic: scheduleItem.status == 'basic',
            active: scheduleItem.status == 'active',
            completed: scheduleItem.status == 'completed',
            failed: scheduleItem.status == 'failed',
            autoFailed: scheduleItem.status == 'autoFailed',
        }
    }

    updateStatus(value, status) {
        this.statusList[status] = value;
        this.distributeCalendarSchedule();
    }

    distributeCalendarSchedule() {
        this.calendar = this.originalCalendar.filter(schedule => this.statusList[schedule.status] === true).map(schedule => {
            schedule.date = moment(schedule.deadline, 'DD-MM-YYYY HH:II');
            schedule.viewDetails = false;
            return schedule;
        });

        for (let week in this.calendarOptions.weeks) {
            let weekDays = this.calendarOptions.weeks[week];

            for (let day of weekDays) {
                day.schedule = this.calendar.filter(schedule => schedule.date.format(this.dateFormat) == day.date);
            }
        }
    }

    /**
     * Unlock the todo list
     */
    async unlock() {
        if (!this.user.isLoggedIn()) return alert('This feature is available for registered users only.');

        if (this.user.gold < FLAGS.shoppingMall.todo) return alert('Insufficient gold.');

        this.isLoading = true;

        try {
            playAudio(Sounds.PAY_COINS);
            let response = await this.shoppingMallService.purchase('calendar');
            this.user.update(response.user);
            this.originalCalendar = response.item;
        } catch (response) {
        } finally {
            this.isLoading = false;
        }
    }

    openAddModal(type) {
        if (type == 'todo' && !this.user.shoppingMall.includes('todo')) return alert('Unlock todo first.');

        this.data = {
            subject: null,
            deadline: null,
            notes: null,
            type,
        };

        if (type == 'todo') {
            this.todoListService.list().then(({ records }) => {
                for (let category of records.categories) {
                    let items = category.items.filter(item => !item.done);
                    for (let item of items) {
                        this.todoItems.push({
                            text: `[${category.name}] ${item.item}`,
                            value: item.id,
                        });
                    }
                }

                this.todoDropdownList.updateItems(this.todoItems);
            });
        }
        this.add = type;
    }

    /**
     * Submit new schedule
     */
    async submit(form) {
        if (!this.id) {
            let response = await this.calendarService.create(form);

            this.originalCalendar.push(response.record);
        } else {
            let response = await this.calendarService.create(form);

            this.originalCalendar.push(response.record);
        }

        this.distributeCalendarSchedule();

        this.scheduleModal.close();
    }

    /**
     * Build the calendar
     */
    buildCalendar() {
        // set the currents 
        let today = moment();

        this.calendarOptions = {
            days: Object.keys(Days),
            today: {
                time: today,
                date: today.format(this.dateFormat),
                day: getDayName(today.day()),
                dayNumber: Number(today.format('D')),
                month: today.format('MMMM'),
            },
        };

        this.initializeCalendar(moment().startOf('month'));
    }

    changeScheduleStatus() {
        this.calendarService.changeStatus(this.currentScheduleItem.id, this.newStatus);

        this.currentScheduleItem.status = this.newStatus;
    }

    initializeCalendar(month) {
        const generateWeeks = () => {
            let weeks = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
            };

            const resolveFirstWeek = () => {
                let weekDays = weeks[1];
                if (currentDay > 7) {
                    currentMonth = currentMonth.clone().subtract(1, 'months').endOf('month').day(Days.Sun);

                    // in that case the first day of the week i.e Saturday will start from the previous month
                    while (currentDay <= this.calendarOptions.previous.lastDayNumber) {
                        weekDays.push(getDayDetails(currentMonth, 1, false));

                        currentDay++;

                        currentMonth = currentMonth.add(1, 'days');
                    }

                    // reset the current day to first day of the current month
                    currentDay = 1;
                }

                // continue adding rest of the days
                resolveWeek(1);
            };

            const resolveWeek = weekNumber => {
                // return;
                let weekDays = weeks[weekNumber];
                while (weekDays.length < 7) {
                    weekDays.push(getDayDetails(currentMonth, weekNumber, true));

                    currentDay++;

                    currentMonth = currentMonth.add(1, 'days');
                }
            }

            const getDayDetails = (month, week, editable) => {
                let day = {
                    week,
                    editable,
                    schedule: [],
                    name: getDayName(month.day()),
                    number: Number(month.format('D')),
                    date: month.format(this.dateFormat),
                    month: month.format('MMMM'),
                };

                if (month.format(this.dateFormat) == this.calendarOptions.today.date) {
                    this.calendarOptions.current.week = week;
                    day.editable = true;
                    this.calendarOptions.isCalendarOfThisMonth = true;
                }
                return day;
            };

            const resolveLastWeek = () => {
                let weekDays = weeks[5];
                while (currentDay <= this.calendarOptions.current.lastDayNumber && weekDays.length < 7) {
                    weekDays.push(getDayDetails(currentMonth, 5, true));

                    currentDay++;

                    currentMonth = currentMonth.add(1, 'days');
                };
                resolveWeek(5);
            };

            // the extra week that the month may contain more days that should be displayed to complete the month
            // this usually happens because the first day of the week "Saturday" of the month may start from the previous mounth 
            const resolveExtraWeek = () => {
                if (currentDay > this.calendarOptions.current.lastDayNumber) {
                    delete weeks[6];
                    return;
                }

                let weekDays = weeks[6];

                while (currentDay <= this.calendarOptions.current.lastDayNumber) {
                    weekDays.push(getDayDetails(currentMonth, 6, currentDay <= this.calendarOptions.current.lastDayNumber));

                    currentDay++;

                    currentMonth = currentMonth.add(1, 'days');
                }

                // reset again current day
                currentDay = 1;

                // complete the rest of that last extra week
                while (weekDays.length < 7) {
                    weekDays.push(getDayDetails(currentMonth, 6, false));

                    currentDay++;

                    currentMonth = currentMonth.add(1, 'days');
                }
            };

            let currentDay = this.calendarOptions.current.firstDayOfTheWeek;

            resolveFirstWeek();
            resolveWeek(2);
            resolveWeek(3);
            resolveWeek(4);
            resolveLastWeek();
            resolveExtraWeek();

            return weeks;
        }

        this.collectCurrentMonthInfo(month);
        this.collectPreviousMonthInfo();
        this.collectLastMonthInfo();

        let currentMonth = this.calendarOptions.current.month.clone();

        this.calendarOptions.weeks = generateWeeks();

        this.calendarOptions.isCalendarOfThisMonth = this.calendarOptions.current.month.format('MM YYYY') == this.calendarOptions.today.time.format('MM YYYY');
    }

    collectCurrentMonthInfo(currentMonth) {
        this.calendarOptions.current = {
            week: null,
            monthName: currentMonth.format('MMMM'),
            yearMonth: currentMonth.format('MMMM YYYY'),
            day: getDayName(moment().day()),
            dayNumber: Number(moment().format('D')),
            month: currentMonth,
            firstDayOfTheWeek: Number(currentMonth.clone().day(Days.Sun).format('D')),
            lastDayNumber: Number(currentMonth.clone().endOf('month').format('D')),
        };
    }

    collectPreviousMonthInfo() {
        let previousMonth = this.calendarOptions.current.month.clone().subtract(1, 'months').startOf('month');

        this.calendarOptions.previous = {
            month: previousMonth,
            lastDayNumber: previousMonth.endOf('month').format('D'),
        };
    }

    collectLastMonthInfo() {
        let nextMonth = this.calendarOptions.current.month.clone().add(1, 'months').startOf('month');

        this.calendarOptions.next = {
            month: nextMonth,
            lastDayNumber: nextMonth.endOf('month').format('D'),
        };
    }

    displayPreviousMonth() {
        this.initializeCalendar(this.calendarOptions.current.month.subtract(1, 'months'));
        this.distributeCalendarSchedule();
    }

    displayNextMonth() {
        this.initializeCalendar(this.calendarOptions.current.month.add(1, 'months'));
        this.distributeCalendarSchedule();
    }
}