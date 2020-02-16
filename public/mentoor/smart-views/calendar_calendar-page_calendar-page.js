_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {ctWjtQN8k:'gold-icon',c9xTe3_4r:'flk-mdb-checkbox',cgpBPtr6r:'flk-mdb-checkbox',cISKGCG1n:'flk-mdb-checkbox',cuwOBqs9q:'flk-mdb-checkbox',cUJZblVIp:'gold-icon',c2iyGaHL8:'layout',c63vKGOnQ:'flk-alert',cNMCbNUxO:'flk-datepicker',cQvqe6jsj:'flk-modal',coLv5GSsb:'flk-dropdown-list',cP7VPxH00:'flk-datepicker',cjvf0aKGB:'flk-modal',cAYSMXN_N:'flk-dropdown-list',c5UjJB5PQ:'flk-datepicker',ck2g4e8q2:'flk-modal',c40b_ETnr:'flk-alert'},
                render: function (component) {
                    let cmpNtWb = this._lc('c2iyGaHL8', {parent:component,content:(layout) => {let elfcMts = eo('h1');
text(`Calendar`);
ec('h1');
let elI4Z9A = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let elQamEE = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let eljYIXt = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cndnaIi = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('stccnEY', cndnaIi);
let cndQHfE = !(cndnaIi);
this.setState('stuLIyz', cndQHfE);
if (cndnaIi) { 
let cndylu0 = ! Is.empty(FLAGS.shoppingMall);
this.setState('stW1Ze4', cndylu0);
if (cndylu0) { 
let elt2dgd = eo('div','HyXf',null,`class`,`m-t-4 text-center`);
let elaZwR9 = eo('button','c89f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpgl1Q = this._lc('ctWjtQN8k', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'stW1Ze4'});
let el3Dti4 = eo('div','zg8f',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let elSQpWZ = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let elQK4zf = eo('div',null,null,`class`,`col m-t-4`);
let el_iG8y = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let el5PJkW = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Basic`);
ec('button');
let elDH6JI = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elHEboR = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Todo`);
let cndoHc2 = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('stTk5ZI', cndoHc2);
if (cndoHc2) { 
let elp90o6 = eo('i','p7Zf',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
}ec('button');
let elSjO7d = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let elQHXXm = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let elpf7_i = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let el1vwIz = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmp7G0J = this._lc('c9xTe3_4r', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmp0qJJ = this._lc('cgpBPtr6r', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpFLo4 = this._lc('cISKGCG1n', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmp16P8 = this._lc('cuwOBqs9q', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let ely7fn0 = eo('div',null,null,`class`,`col`);
let el6RIlU = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elYkYIf = eo('div',null,null,`class`,`symbol`);
let el9lqwM = eo('i',null,null,`class`,`circle basic`);
ec('i');
let elh03Bg = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cndZQFQ = component.user.total.calendar.basic;
this.setState('stjgzeC', cndZQFQ);
if (cndZQFQ) { 
let elzDo5v = eo('strong','PAKf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let elqM86H = eo('div',null,null,`class`,`symbol`);
let elRt6Mx = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elMlQSE = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cndx8YE = component.user.total.calendar.todo;
this.setState('st61XpI', cndx8YE);
if (cndx8YE) { 
let elAXedU = eo('strong','nx7f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elYYE1T = eo('div',null,null,`class`,`symbol`);
let el1dBfd = eo('i',null,null,`class`,`circle task`);
ec('i');
let el8YdTS = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndhAoL = component.user.total.calendar.task;
this.setState('stHR_0O', cndhAoL);
if (cndhAoL) { 
let elecEgc = eo('strong','T_uf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elgH_Db = eo('div',null,null,`class`,`symbol`);
let elmN0NV = eo('i',null,null,`class`,`${fas('hourglass-half') + ' icon'}`);
ec('i');
let elllT6n = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cndBERu = component.user.total.calendar.active;
this.setState('stoN1Kl', cndBERu);
if (cndBERu) { 
let elMKkxk = eo('strong','n19f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let eljE2Ng = eo('div',null,null,`class`,`symbol`);
let elSK7NL = eo('i',null,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
let elV7hhm = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cndYfn9 = component.user.total.calendar.completed;
this.setState('striPZJ', cndYfn9);
if (cndYfn9) { 
let elb0jlX = eo('strong','bPFf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let eljejqH = eo('div',null,null,`class`,`symbol`);
let elcTrE7 = eo('i',null,null,`class`,`${fas('frown-open') + ' icon'}`);
ec('i');
let el0fQTg = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndnxLe = component.user.total.calendar.failed;
this.setState('stAI5j6', cndnxLe);
if (cndnxLe) { 
let el0bVy1 = eo('strong','8nif',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let el23VLM = eo('div',null,null,`class`,`symbol`);
let elTqqcA = eo('i',null,null,`class`,`${fas('frown') + ' icon'}`);
ec('i');
let elMTAF7 = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cndrL9u = component.user.total.calendar.autoFailed;
this.setState('stTtNlq', cndrL9u);
if (cndrL9u) { 
let elW3CDk = eo('strong','oijf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let elbqM_B = eo('section',null,null,`id`,`calendar`);
let elaQApf = eo('div',null,null,`class`,`columns`);
let elPeZxe = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let elVcxqu = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left') + ' mr-2 pointer icon'}`);
ec('i');
let elmiZxw = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let elgHqeo = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right') + ' ml-2 pointer icon'}`);
ec('i');
ec('h3');
ec('div');
let eldguTW = eo('div',null,null,`class`,`columns`);
let elzhjeR = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let ii3nFr = 'yd7_yUs' + i;
let elkLU0P = eo('div','7dQWy39F2479' + i+ii3nFr,null,`class`,`block column column-8 heading`);
elkLU0P.cls = {current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elkLU0P.cls) {
                elkLU0P.classList.toggle(className, elkLU0P.cls[className]);
            }  
            text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iiQT4W = 'rJy1SB9' + week;
let elG_dAv = eo('div','ylyIpaJo2djV' + week+iiQT4W,null,`class`,`columns`);
let elTIrSs = eo('div','GwBff'+iiQT4W,null,`class`,`block column column-8 heading week-num`);
elTIrSs.cls = {current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elTIrSs.cls) {
                elTIrSs.classList.toggle(className, elTIrSs.cls[className]);
            }  
            text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let iiuX89 = 'BGOx00G' + i;
let elV6fyl = eo('div','F5RJNOYMAqd9' + i+iiQT4W+iiuX89,null,`class`,`block column column-8 day`);
elV6fyl.cls = {locked: !day.editable};

            for (let className in elV6fyl.cls) {
                elV6fyl.classList.toggle(className, elV6fyl.cls[className]);
            }  
            let el9d6MJ = eo('span','ee7ff'+iiQT4W+iiuX89,null,`class`,`number`);
el9d6MJ.cls = {current: day.date == component.calendarOptions.today.date};

            for (let className in el9d6MJ.cls) {
                el9d6MJ.classList.toggle(className, el9d6MJ.cls[className]);
            }  
            text(day.number);
ec('span');
let cndwLMf = day.month != component.calendarOptions.current.monthName;
this.setState('stGLzhQ', cndwLMf);
if (cndwLMf) { 
let elVp0Nt = eo('span','LAgff'+iiQT4W+iiuX89,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iiZDra = 'jzz_MXz' + i;
let elsBV3J = eo('div','a0dff'+iiQT4W+iiuX89+iiZDra,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elh7515 = eo('div','NOIff'+iiQT4W+iiuX89+iiZDra,null,`class`,`label pointer`);
let elFZOuQ = eo('span','fUcff'+iiQT4W+iiuX89+iiZDra);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndqNTF = scheduleItem.status == 'active';
this.setState('st75O9A', cndqNTF);
let cnd8vzr = scheduleItem.status == 'completed';
this.setState('stdFvq_', cnd8vzr);
let cnd4l4k = scheduleItem.status == 'failed';
this.setState('stkjntD', cnd4l4k);
let cnd0sZq = scheduleItem.status == 'autoFailed';
this.setState('stuvf2n', cnd0sZq);
if (cndqNTF) { 
let elahdHV = eo('i','jL1ff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' icon icon'}`);
ec('i');
}else if (cnd8vzr) { 
let el0bh0U = eo('i','yVoff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' icon icon'}`);
ec('i');
}else if (cnd4l4k) { 
let elvk3jW = eo('i','eJqff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' icon icon'}`);
ec('i');
}else if (cnd0sZq) { 
let elrqaZZ = eo('i','B_Wff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' icon icon'}`);
ec('i');
}ec('div');
let elXOQ_F = eo('div','Gazff'+iiQT4W+iiuX89+iiZDra,null,`class`,`details`);
elXOQ_F.cls = {open: scheduleItem.viewDetails};

            for (let className in elXOQ_F.cls) {
                elXOQ_F.classList.toggle(className, elXOQ_F.cls[className]);
            }  
            let el4PlbZ = eo('div','TpEff'+iiQT4W+iiuX89+iiZDra,null,`class`,`info`);
let eluvfnv = eo('div','z4Mff'+iiQT4W+iiuX89+iiZDra,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let elGHYfA = eo('div','mywff'+iiQT4W+iiuX89+iiZDra,null,`class`,`date detail`);
let el7wUCT = eo('strong','sMeff'+iiQT4W+iiuX89+iiZDra);
text(`Ends at:`);
ec('strong');
let eld9N_I = eo('span','OHUff'+iiQT4W+iiuX89+iiZDra);
text(scheduleItem.deadline);
ec('span');
ec('div');
let elVhfDU = eo('div','9Cfff'+iiQT4W+iiuX89+iiZDra,null,`class`,`type detail`);
let el7JoNx = eo('strong','KLvff'+iiQT4W+iiuX89+iiZDra);
text(`Type:`);
ec('strong');
let elBgSOI = eo('span','J8Eff'+iiQT4W+iiuX89+iiZDra,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let el_D9D0 = eo('div','fvPff'+iiQT4W+iiuX89+iiZDra,null,`class`,`status detail`);
let elKPpKq = eo('strong','LImff'+iiQT4W+iiuX89+iiZDra);
text(`Status:`);
ec('strong');
let cndhCZp = scheduleItem.status == 'active';
this.setState('stY00xo', cndhCZp);
let cndUfS2 = scheduleItem.status == 'completed';
this.setState('stlhg9e', cndUfS2);
let cndqjhD = scheduleItem.status == 'failed';
this.setState('stpM8NW', cndqjhD);
let cndxePs = scheduleItem.status == 'autoFailed';
this.setState('stycXwy', cndxePs);
if (cndhCZp) { 
let elDtYTv = eo('i','1_Eff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' v-middle icon'}`);
ec('i');
}else if (cndUfS2) { 
let eljPoF_ = eo('i','bPiff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' v-middle icon'}`);
ec('i');
}else if (cndqjhD) { 
let el2TUhu = eo('i','j56ff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' v-middle icon'}`);
ec('i');
}else if (cndxePs) { 
let el5D8RK = eo('i','ZM_ff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' v-middle icon'}`);
ec('i');
}let elrkuZQ = eo('span','x48ff'+iiQT4W+iiuX89+iiZDra,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cndPCFg = scheduleItem.notes;
this.setState('stzr8Wi', cndPCFg);
let cndBKrz = scheduleItem.todo;
this.setState('stWteGO', cndBKrz);
if (cndPCFg) { 
let elo2EBC = eo('p','RICff'+iiQT4W+iiuX89+iiZDra,null,`class`,`notes`);
text(`❝`);
let el0tY12 = eo('span','ub1ff'+iiQT4W+iiuX89+iiZDra);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cndMf3m = scheduleItem.task;
this.setState('stDyX67', cndMf3m);
let cndZi7H = cndBKrz;
this.setState('st3etSs', cndZi7H);
if (cndMf3m) { 
let elUGBPD = eo('div','sahff'+iiQT4W+iiuX89+iiZDra,null,`class`,`custom-type task-details`);
let elMLfDP = eo('h4','XgGff'+iiQT4W+iiuX89+iiZDra,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let el496v6 = eo('div','qVlff'+iiQT4W+iiuX89+iiZDra,null,`class`,`detail title`);
let el9JzeF = eo('strong','ju9ff'+iiQT4W+iiuX89+iiZDra);
text(`Title:`);
ec('strong');
let elbYIKG = eo('span','XQ_ff'+iiQT4W+iiuX89+iiZDra);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elCzoMK = eo('div','Rmhff'+iiQT4W+iiuX89+iiZDra,null,`class`,`detail ends-at`);
let el9odPs = eo('strong','qyEff'+iiQT4W+iiuX89+iiZDra);
text(`Ends at:`);
ec('strong');
let elXjWYu = eo('span','GtAff'+iiQT4W+iiuX89+iiZDra);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let el3OoOA = eo('div','7CMff'+iiQT4W+iiuX89+iiZDra,null,`class`,`detail reward`);
let elcz8Fi = eo('strong','6XPff'+iiQT4W+iiuX89+iiZDra);
text(`Reward:`);
ec('strong');
let cmp9EEw = this._lc('cUJZblVIp', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'stDyX67',insideLoop:true,index:"" +iiQT4W+iiuX89+iiZDra});
let elXLxip = eo('span','4n4ff'+iiQT4W+iiuX89+iiZDra,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let el1RVKP = eo('a','bVSff'+iiQT4W+iiuX89+iiZDra,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cndZi7H) { 
let elQiYDG = eo('div','l4rff'+iiQT4W+iiuX89+iiZDra,null,`class`,`custom-type todo-details`);
let el0kfkx = eo('h4','Ikhff'+iiQT4W+iiuX89+iiZDra,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let elVrEKv = eo('div','sIpff'+iiQT4W+iiuX89+iiZDra,null,`class`,`detail title`);
let elbZOHW = eo('strong','ZEKff'+iiQT4W+iiuX89+iiZDra,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let elh9AMY = eo('span','IT9ff'+iiQT4W+iiuX89+iiZDra);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let elyMYLI = eo('div','aIQff'+iiQT4W+iiuX89+iiZDra,null,`class`,`detail category`);
let elMUyIl = eo('strong','Qe2ff'+iiQT4W+iiuX89+iiZDra,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let el_lxv5 = eo('span','nPlff'+iiQT4W+iiuX89+iiZDra);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cnd5E3O = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('st8sauu', cnd5E3O);
if (cnd5E3O) { 
let elkfGAD = eo('div','Zv_ff'+iiQT4W+iiuX89+iiZDra,null,`class`,`text-center m-t-1`);
let elUsEZD = eo('button','EfNff'+iiQT4W+iiuX89+iiZDra,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let elULoWd = eo('button','bzsff'+iiQT4W+iiuX89+iiZDra,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cndxQJa = component.confirm;
this.setState('stzJCoW', cndxQJa);
if (cndxQJa) { 
let cmpfmEV = this._lc('c63vKGOnQ', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stzJCoW'});
}let cndPDoZ = component.add == 'basic';
this.setState('strQNWG', cndPDoZ);
if (cndPDoZ) { 
component.scheduleModal = this._lc('cQvqe6jsj', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elvsBXO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvsBXO.formHandler) {
                    window.cfrmdlr = elvsBXO.formHandler = new FormHandler(elvsBXO, component);
                } else {
                    window.cfrmdlr = elvsBXO.formHandler;
                }
            component.date = this._lc('cNMCbNUxO', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'strQNWG'});
let el3hZpa = eo('div',null,null,`class`,`form-group`);
el3hZpa.cls = {'group-error': !!elvsBXO.formHandler.getError(`subject`) };

            for (let className in el3hZpa.cls) {
                el3hZpa.classList.toggle(className, el3hZpa.cls[className]);
            }  
            let eleO14l = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elMAHc7 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGhxGw = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvsBXO.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elvsBXO.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cnd212f = elvsBXO.formHandler.getError(`subject`);
this.setState('stkdYV4', cnd212f);
if (cnd212f) { 
let elAvs55 = eo('div','Ispf',null,`class`,`alert alert-danger`);
text(elvsBXO.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elG3UQ2 = eo('div',null,null,`class`,`form-group`);
elG3UQ2.cls = {'group-error': !!elvsBXO.formHandler.getError(`notes`) };

            for (let className in elG3UQ2.cls) {
                elG3UQ2.classList.toggle(className, elG3UQ2.cls[className]);
            }  
            let elB0Dcy = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elndgMK = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elrtm7T = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let elSTsE7 = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'strQNWG'});
}let cndSSwD = component.add == 'task';
this.setState('stR6R1W', cndSSwD);
if (cndSSwD) { 
component.scheduleModal = this._lc('cjvf0aKGB', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elVbIMp = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elVbIMp.formHandler) {
                    window.cfrmdlr = elVbIMp.formHandler = new FormHandler(elVbIMp, component);
                } else {
                    window.cfrmdlr = elVbIMp.formHandler;
                }
            let cmprrhE = this._lc('coLv5GSsb', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'stR6R1W'});
component.date = this._lc('cP7VPxH00', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stR6R1W'});
let elSYgos = eo('div',null,null,`class`,`form-group`);
elSYgos.cls = {'group-error': !!elVbIMp.formHandler.getError(`subject`) };

            for (let className in elSYgos.cls) {
                elSYgos.classList.toggle(className, elSYgos.cls[className]);
            }  
            let elHbo1W = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elexgJq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCGyFJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVbIMp.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elVbIMp.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elCGyFJ.value = fval(component.data.subject);
let cndCttq = elVbIMp.formHandler.getError(`subject`);
this.setState('st_DNFn', cndCttq);
if (cndCttq) { 
let eldEv6a = eo('div','Uc5f',null,`class`,`alert alert-danger`);
text(elVbIMp.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el6zmV5 = eo('div',null,null,`class`,`form-group`);
el6zmV5.cls = {'group-error': !!elVbIMp.formHandler.getError(`notes`) };

            for (let className in el6zmV5.cls) {
                el6zmV5.classList.toggle(className, el6zmV5.cls[className]);
            }  
            let elR4aPR = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elKR3ow = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elPIPWZ = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elmmpZX = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'stR6R1W'});
}let cndDSaO = component.add == 'todo';
this.setState('stZQjVt', cndDSaO);
if (cndDSaO) { 
component.scheduleModal = this._lc('ck2g4e8q2', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elF10aE = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elF10aE.formHandler) {
                    window.cfrmdlr = elF10aE.formHandler = new FormHandler(elF10aE, component);
                } else {
                    window.cfrmdlr = elF10aE.formHandler;
                }
            component.todoDropdownList = this._lc('cAYSMXN_N', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'stZQjVt'});
component.date = this._lc('c5UjJB5PQ', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stZQjVt'});
let elxyMZO = eo('div',null,null,`class`,`form-group`);
elxyMZO.cls = {'group-error': !!elF10aE.formHandler.getError(`subject`) };

            for (let className in elxyMZO.cls) {
                elxyMZO.classList.toggle(className, elxyMZO.cls[className]);
            }  
            let elF5Vkv = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let eldt6R9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1Xhkt = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elF10aE.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elF10aE.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
el1Xhkt.value = fval(component.data.subject);
let cndWcyt = elF10aE.formHandler.getError(`subject`);
this.setState('stINrkI', cndWcyt);
if (cndWcyt) { 
let el95GX8 = eo('div','S_sf',null,`class`,`alert alert-danger`);
text(elF10aE.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el_KKt7 = eo('div',null,null,`class`,`form-group`);
el_KKt7.cls = {'group-error': !!elF10aE.formHandler.getError(`notes`) };

            for (let className in el_KKt7.cls) {
                el_KKt7.classList.toggle(className, el_KKt7.cls[className]);
            }  
            let el7C0gm = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let el8zo2x = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let eluC722 = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let ellX9g_ = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'stZQjVt'});
}let cndjlTi = component.newStatus;
this.setState('stUZq36', cndjlTi);
if (cndjlTi) { 
let cmpNmgd = this._lc('c40b_ETnr', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'stUZq36'});
}
                    this.isReadyToGo();
                }
        });