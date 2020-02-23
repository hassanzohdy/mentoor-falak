_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {cyKIdvHZB:'gold-icon',c4C6Pgfw9:'flk-mdb-checkbox',cwds2lP6I:'flk-mdb-checkbox',cu0AXSN3j:'flk-mdb-checkbox',cKB7j9TXy:'flk-mdb-checkbox',cqT7GI9g4:'gold-icon',cYP2CI1yg:'layout',ciCioZGvY:'flk-alert',cZYS2Zz7P:'flk-datepicker',cCAhuOIFR:'flk-modal',c7Wxe7NUk:'flk-dropdown-list',cMNCLKZO5:'flk-datepicker',c4oBocXJD:'flk-modal',clMaYezeK:'flk-dropdown-list',csE1VFe2z:'flk-datepicker',cjlnsfHFO:'flk-modal',cyGPiMoFN:'flk-alert'},
                render: function (component) {
                    let cmp9TEQ = this._lc('cYP2CI1yg', {parent:component,content:(layout) => {let elUJlAW = eo('h1');
text(`Calendar`);
ec('h1');
let elUMx5P = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let elAN0WW = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let elwGWVR = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cndoP2w = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('stTi0ms', cndoP2w);
let cnd3Uqa = !(cndoP2w);
this.setState('stmk3oL', cnd3Uqa);
if (cndoP2w) { 
let cndbG6X = ! Is.empty(FLAGS.shoppingMall);
this.setState('st5FtqV', cndbG6X);
if (cndbG6X) { 
let elmo7Kr = eo('div','hFpf',null,`class`,`m-t-4 text-center`);
let elI16e8 = eo('button','NaIf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpnx0j = this._lc('cyKIdvHZB', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'st5FtqV'});
let elM_bO7 = eo('div','8D3f',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let elmDDb3 = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let elKFG3x = eo('div',null,null,`class`,`col m-t-4`);
let el5MZAo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let elpOjiW = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Basic`);
ec('button');
let elfxhCX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elmFGun = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Todo`);
let cndLIoy = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('stC02nM', cndLIoy);
if (cndLIoy) { 
let ellYXPw = eo('i','Tq5f',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
}ec('button');
let eleLqeg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let elJ5I8a = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let el9sUHf = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let elak0_O = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmposkr = this._lc('c4C6Pgfw9', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmp6uay = this._lc('cwds2lP6I', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpj7Es = this._lc('cu0AXSN3j', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmpEuij = this._lc('cKB7j9TXy', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let elrONWW = eo('div',null,null,`class`,`col`);
let elQPLkl = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elxw12J = eo('div',null,null,`class`,`symbol`);
let elyppDy = eo('i',null,null,`class`,`circle basic`);
ec('i');
let elb0Rg6 = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cnd5b2g = component.user.total.calendar.basic;
this.setState('stCboi8', cnd5b2g);
if (cnd5b2g) { 
let elf1n_h = eo('strong','xylf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let elj8EWm = eo('div',null,null,`class`,`symbol`);
let el9E64O = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elc8Rai = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cndVSP_ = component.user.total.calendar.todo;
this.setState('stRw8tZ', cndVSP_);
if (cndVSP_) { 
let el618LZ = eo('strong','m59f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elqKqJV = eo('div',null,null,`class`,`symbol`);
let el7OGNC = eo('i',null,null,`class`,`circle task`);
ec('i');
let elxBy2k = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cnd4clb = component.user.total.calendar.task;
this.setState('stm7dS4', cnd4clb);
if (cnd4clb) { 
let eldqdee = eo('strong','a_Cf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elDI_yG = eo('div',null,null,`class`,`symbol`);
let el4U6EV = eo('i',null,null,`class`,`${fas('hourglass-half') + ' icon'}`);
ec('i');
let el7XZq9 = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cndAL5H = component.user.total.calendar.active;
this.setState('st4rtLN', cndAL5H);
if (cndAL5H) { 
let elvPW9x = eo('strong','JiTf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let eloJ4oj = eo('div',null,null,`class`,`symbol`);
let elqcCnA = eo('i',null,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
let elIglCN = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cnd2YBE = component.user.total.calendar.completed;
this.setState('stDbCPU', cnd2YBE);
if (cnd2YBE) { 
let elLTnRI = eo('strong','mMlf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let elo1snY = eo('div',null,null,`class`,`symbol`);
let el9YOF0 = eo('i',null,null,`class`,`${fas('frown-open') + ' icon'}`);
ec('i');
let elNyhaT = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndJywD = component.user.total.calendar.failed;
this.setState('st0A_sN', cndJywD);
if (cndJywD) { 
let el1Ec4y = eo('strong','tnuf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let elYzP_6 = eo('div',null,null,`class`,`symbol`);
let eltxtHk = eo('i',null,null,`class`,`${fas('frown') + ' icon'}`);
ec('i');
let elSEHNU = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cndBA7u = component.user.total.calendar.autoFailed;
this.setState('stc0wJA', cndBA7u);
if (cndBA7u) { 
let elox56K = eo('strong','dBlf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let elFYDCE = eo('section',null,null,`id`,`calendar`);
let el68iqv = eo('div',null,null,`class`,`columns`);
let el96Fuy = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let elxaRfH = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left') + ' mr-2 pointer icon'}`);
ec('i');
let elzqLzd = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let elYw6Y8 = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right') + ' ml-2 pointer icon'}`);
ec('i');
ec('h3');
ec('div');
let elSu6op = eo('div',null,null,`class`,`columns`);
let el3Jjpr = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iiHQdG = 'WrEPnlI' + i;
let el52sKU = eo('div','J8_qRqbm0eEU' + i+iiHQdG,null,`class`,`block column column-8 heading`);
el52sKU.cls = {current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in el52sKU.cls) {
                el52sKU.classList.toggle(className, el52sKU.cls[className]);
            }  
            text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iiA9v4 = 'L8F_p2M' + week;
let elm5P01 = eo('div','ob4cdGPQabsF' + week+iiA9v4,null,`class`,`columns`);
let elBbnrD = eo('div','qJFff'+iiA9v4,null,`class`,`block column column-8 heading week-num`);
elBbnrD.cls = {current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elBbnrD.cls) {
                elBbnrD.classList.toggle(className, elBbnrD.cls[className]);
            }  
            text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let ii0spT = '6Qml1QN' + i;
let elnd2RA = eo('div','K5Ykiv5tquQJ' + i+iiA9v4+ii0spT,null,`class`,`block column column-8 day`);
elnd2RA.cls = {locked: !day.editable};

            for (let className in elnd2RA.cls) {
                elnd2RA.classList.toggle(className, elnd2RA.cls[className]);
            }  
            let elaXKQV = eo('span','3jAff'+iiA9v4+ii0spT,null,`class`,`number`);
elaXKQV.cls = {current: day.date == component.calendarOptions.today.date};

            for (let className in elaXKQV.cls) {
                elaXKQV.classList.toggle(className, elaXKQV.cls[className]);
            }  
            text(day.number);
ec('span');
let cndWiyG = day.month != component.calendarOptions.current.monthName;
this.setState('stq9sh_', cndWiyG);
if (cndWiyG) { 
let elNY41z = eo('span','R4Jff'+iiA9v4+ii0spT,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iiX0UF = 'SW6PrFn' + i;
let elADV1S = eo('div','_z2ff'+iiA9v4+ii0spT+iiX0UF,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elI1FD2 = eo('div','l3dff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`label pointer`);
let elJydMq = eo('span','coSff'+iiA9v4+ii0spT+iiX0UF);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndNnrw = scheduleItem.status == 'active';
this.setState('sttucGI', cndNnrw);
let cnd2nCm = scheduleItem.status == 'completed';
this.setState('stV_gHF', cnd2nCm);
let cnd1xTD = scheduleItem.status == 'failed';
this.setState('stpthHM', cnd1xTD);
let cndw8kx = scheduleItem.status == 'autoFailed';
this.setState('stI2p3x', cndw8kx);
if (cndNnrw) { 
let el25jH6 = eo('i','IxCff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' icon icon'}`);
ec('i');
}else if (cnd2nCm) { 
let el3vtLh = eo('i','2Byff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' icon icon'}`);
ec('i');
}else if (cnd1xTD) { 
let eluTcvY = eo('i','O75ff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' icon icon'}`);
ec('i');
}else if (cndw8kx) { 
let el9Lchk = eo('i','AkDff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' icon icon'}`);
ec('i');
}ec('div');
let elbrvYR = eo('div','_NTff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`details`);
elbrvYR.cls = {open: scheduleItem.viewDetails};

            for (let className in elbrvYR.cls) {
                elbrvYR.classList.toggle(className, elbrvYR.cls[className]);
            }  
            let el50kql = eo('div','Ar1ff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`info`);
let elhzLEp = eo('div','YF1ff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let el5JBfK = eo('div','8jDff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`date detail`);
let elh6Bsm = eo('strong','oAvff'+iiA9v4+ii0spT+iiX0UF);
text(`Ends at:`);
ec('strong');
let elRGrQ1 = eo('span','kOiff'+iiA9v4+ii0spT+iiX0UF);
text(scheduleItem.deadline);
ec('span');
ec('div');
let eljZPGn = eo('div','eOoff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`type detail`);
let el1BT0K = eo('strong','aOuff'+iiA9v4+ii0spT+iiX0UF);
text(`Type:`);
ec('strong');
let elYntnD = eo('span','h87ff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let el36saf = eo('div','Rzbff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`status detail`);
let elQxeR_ = eo('strong','hllff'+iiA9v4+ii0spT+iiX0UF);
text(`Status:`);
ec('strong');
let cndlPzJ = scheduleItem.status == 'active';
this.setState('stwrn3a', cndlPzJ);
let cndX69H = scheduleItem.status == 'completed';
this.setState('stEnLkC', cndX69H);
let cndMq6o = scheduleItem.status == 'failed';
this.setState('stVoB0g', cndMq6o);
let cndLQUj = scheduleItem.status == 'autoFailed';
this.setState('stBALPd', cndLQUj);
if (cndlPzJ) { 
let el3BOdW = eo('i','8X3ff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' v-middle icon'}`);
ec('i');
}else if (cndX69H) { 
let elEchTm = eo('i','W8uff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' v-middle icon'}`);
ec('i');
}else if (cndMq6o) { 
let el3CrK8 = eo('i','xtjff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' v-middle icon'}`);
ec('i');
}else if (cndLQUj) { 
let el32zOh = eo('i','dAdff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' v-middle icon'}`);
ec('i');
}let elEy9EB = eo('span','wCqff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cnd2zrS = scheduleItem.notes;
this.setState('stkfv5M', cnd2zrS);
let cndLJ2J = scheduleItem.todo;
this.setState('stVXHhi', cndLJ2J);
if (cnd2zrS) { 
let elvAovh = eo('p','B4Xff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`notes`);
text(`❝`);
let elCH030 = eo('span','8piff'+iiA9v4+ii0spT+iiX0UF);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cnds7f_ = scheduleItem.task;
this.setState('stMJieC', cnds7f_);
let cndrFrn = cndLJ2J;
this.setState('stkTVIl', cndrFrn);
if (cnds7f_) { 
let elVDuK7 = eo('div','XGNff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`custom-type task-details`);
let elKTqmD = eo('h4','ObDff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let elkrx5u = eo('div','bTjff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`detail title`);
let el8gMX_ = eo('strong','tGHff'+iiA9v4+ii0spT+iiX0UF);
text(`Title:`);
ec('strong');
let elVjLVk = eo('span','xGVff'+iiA9v4+ii0spT+iiX0UF);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elaWCpN = eo('div','Y7Lff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`detail ends-at`);
let elupR_J = eo('strong','Wv0ff'+iiA9v4+ii0spT+iiX0UF);
text(`Ends at:`);
ec('strong');
let el11L4Z = eo('span','eKXff'+iiA9v4+ii0spT+iiX0UF);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let ellzVnf = eo('div','f_Xff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`detail reward`);
let el1coAu = eo('strong','3Wyff'+iiA9v4+ii0spT+iiX0UF);
text(`Reward:`);
ec('strong');
let cmp4LT6 = this._lc('cqT7GI9g4', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'stMJieC',insideLoop:true,index:"" +iiA9v4+ii0spT+iiX0UF});
let elV9fQ8 = eo('span','vyiff'+iiA9v4+ii0spT+iiX0UF,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let elPpRRF = eo('a','58sff'+iiA9v4+ii0spT+iiX0UF,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cndrFrn) { 
let elg369D = eo('div','Dqrff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`custom-type todo-details`);
let eltCJB4 = eo('h4','bebff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let elNZ6Zz = eo('div','Ybpff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`detail title`);
let elZW7j_ = eo('strong','Bjwff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let el8xIL9 = eo('span','xJjff'+iiA9v4+ii0spT+iiX0UF);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let elqqMIq = eo('div','u7Dff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`detail category`);
let elKHxEH = eo('strong','Dg4ff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let elnF5qt = eo('span','cYQff'+iiA9v4+ii0spT+iiX0UF);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cndoRg9 = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('sthwm_N', cndoRg9);
if (cndoRg9) { 
let elpApwa = eo('div','4vlff'+iiA9v4+ii0spT+iiX0UF,null,`class`,`text-center m-t-1`);
let elTJEr5 = eo('button','6kiff'+iiA9v4+ii0spT+iiX0UF,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let el7Zjdn = eo('button','xWZff'+iiA9v4+ii0spT+iiX0UF,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
text(`Failed`);
ec('button');
ec('div');
}ec('div');
ec('div');
ec('div');
}
ec('div');
}
ec('div');
}
ec('div');
ec('section');
}}});
let cndtanS = component.confirm;
this.setState('st0zuex', cndtanS);
if (cndtanS) { 
let cmpvHjQ = this._lc('ciCioZGvY', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'st0zuex'});
}let cnd4Ko1 = component.add == 'basic';
this.setState('stO9Be9', cnd4Ko1);
if (cnd4Ko1) { 
component.scheduleModal = this._lc('cCAhuOIFR', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elglBkg = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elglBkg.formHandler) {
                    window.cfrmdlr = elglBkg.formHandler = new FormHandler(elglBkg, component);
                } else {
                    window.cfrmdlr = elglBkg.formHandler;
                }
            component.date = this._lc('cZYS2Zz7P', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stO9Be9'});
let elzwZUr = eo('div',null,null,`class`,`form-group`);
elzwZUr.cls = {'group-error': !!elglBkg.formHandler.getError(`subject`) };

            for (let className in elzwZUr.cls) {
                elzwZUr.classList.toggle(className, elzwZUr.cls[className]);
            }  
            let eliXAwa = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elgBlbG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elEXEAn = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elglBkg.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elglBkg.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cndntQH = elglBkg.formHandler.getError(`subject`);
this.setState('stKS5GH', cndntQH);
if (cndntQH) { 
let elnDVxT = eo('div','2r4f',null,`class`,`alert alert-danger`);
text(elglBkg.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elD_q_4 = eo('div',null,null,`class`,`form-group`);
elD_q_4.cls = {'group-error': !!elglBkg.formHandler.getError(`notes`) };

            for (let className in elD_q_4.cls) {
                elD_q_4.classList.toggle(className, elD_q_4.cls[className]);
            }  
            let elZeRc9 = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let el27Yrm = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let eldz154 = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let el7d2in = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'stO9Be9'});
}let cndMYl9 = component.add == 'task';
this.setState('stl4J6H', cndMYl9);
if (cndMYl9) { 
component.scheduleModal = this._lc('c4oBocXJD', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elJzvCo = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elJzvCo.formHandler) {
                    window.cfrmdlr = elJzvCo.formHandler = new FormHandler(elJzvCo, component);
                } else {
                    window.cfrmdlr = elJzvCo.formHandler;
                }
            let cmpGXck = this._lc('c7Wxe7NUk', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'stl4J6H'});
component.date = this._lc('cMNCLKZO5', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stl4J6H'});
let elnmlcO = eo('div',null,null,`class`,`form-group`);
elnmlcO.cls = {'group-error': !!elJzvCo.formHandler.getError(`subject`) };

            for (let className in elnmlcO.cls) {
                elnmlcO.classList.toggle(className, elnmlcO.cls[className]);
            }  
            let elKmTFa = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elG7Exu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8KqyW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJzvCo.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elJzvCo.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
el8KqyW.value = fval(component.data.subject);
let cndOTwt = elJzvCo.formHandler.getError(`subject`);
this.setState('stnpLnS', cndOTwt);
if (cndOTwt) { 
let elkegLu = eo('div','DJ3f',null,`class`,`alert alert-danger`);
text(elJzvCo.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elGIwAw = eo('div',null,null,`class`,`form-group`);
elGIwAw.cls = {'group-error': !!elJzvCo.formHandler.getError(`notes`) };

            for (let className in elGIwAw.cls) {
                elGIwAw.classList.toggle(className, elGIwAw.cls[className]);
            }  
            let elcttM2 = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elSBhYb = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elJ3YCU = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elgtThL = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'stl4J6H'});
}let cndEgS2 = component.add == 'todo';
this.setState('st9zRG_', cndEgS2);
if (cndEgS2) { 
component.scheduleModal = this._lc('cjlnsfHFO', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elHRclW = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHRclW.formHandler) {
                    window.cfrmdlr = elHRclW.formHandler = new FormHandler(elHRclW, component);
                } else {
                    window.cfrmdlr = elHRclW.formHandler;
                }
            component.todoDropdownList = this._lc('clMaYezeK', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'st9zRG_'});
component.date = this._lc('csE1VFe2z', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'st9zRG_'});
let eluB4KI = eo('div',null,null,`class`,`form-group`);
eluB4KI.cls = {'group-error': !!elHRclW.formHandler.getError(`subject`) };

            for (let className in eluB4KI.cls) {
                eluB4KI.classList.toggle(className, eluB4KI.cls[className]);
            }  
            let elWM41p = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elJZabY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elr0Tr0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elHRclW.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elHRclW.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elr0Tr0.value = fval(component.data.subject);
let cndcWoB = elHRclW.formHandler.getError(`subject`);
this.setState('stFVdoj', cndcWoB);
if (cndcWoB) { 
let elcxbe8 = eo('div','5Hgf',null,`class`,`alert alert-danger`);
text(elHRclW.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elQpJzu = eo('div',null,null,`class`,`form-group`);
elQpJzu.cls = {'group-error': !!elHRclW.formHandler.getError(`notes`) };

            for (let className in elQpJzu.cls) {
                elQpJzu.classList.toggle(className, elQpJzu.cls[className]);
            }  
            let el1JSdR = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elIkbpD = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elIuGkH = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elzanve = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'st9zRG_'});
}let cndcQKg = component.newStatus;
this.setState('stjJSUe', cndcQKg);
if (cndcQKg) { 
let cmp7Vek = this._lc('cyGPiMoFN', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'stjJSUe'});
}
                    this.isReadyToGo();
                }
        });