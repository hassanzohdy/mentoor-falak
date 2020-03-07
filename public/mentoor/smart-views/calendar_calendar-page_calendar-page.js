_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {c5l3OzOt8:'gold-icon',cwvtGD46Q:'flk-mdb-checkbox',czNh6lknz:'flk-mdb-checkbox',cffWECUKk:'flk-mdb-checkbox',cntt3HypU:'flk-mdb-checkbox',c_O1UV2Ie:'gold-icon',cHkJLuMMA:'layout',cigcw2EzC:'flk-alert',chHI0vo8_:'flk-datepicker',cXRHljwR9:'flk-modal',cILNIEqg3:'flk-dropdown-list',cMAAC_gv0:'flk-datepicker',cnmZeQenW:'flk-modal',cjpeVI6tB:'flk-dropdown-list',cpWtrTN5N:'flk-datepicker',cxVEScPiL:'flk-modal',cIYK7uQWp:'flk-alert'},
                render: function (component) {
                    let cmpC0zu = this._lc('cHkJLuMMA', {parent:component,content:(layout) => {let elHv3zR = eo('h1');
text(`Calendar`);
ec('h1');
let elciCYR = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let el4QJrM = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let elerdno = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cndgiDf = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('st5gkc5', cndgiDf);
let cndSqxj = !(cndgiDf);
this.setState('stCGgSo', cndSqxj);
if (cndgiDf) { 
let cndcAPo = ! Is.empty(FLAGS.shoppingMall);
this.setState('stVM7mI', cndcAPo);
if (cndcAPo) { 
let elj6pmq = eo('div','z1Rf',null,`class`,`m-t-4 text-center`);
let elaOMl7 = eo('button','F8Bf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpDw61 = this._lc('c5l3OzOt8', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'stVM7mI'});
let elplrFh = eo('div','nCyf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let el3zuEn = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let elTqxXW = eo('div',null,null,`class`,`col m-t-4`);
let el_egc1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let elszWMW = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Basic`);
ec('button');
let elngmJw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elobWUR = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Todo`);
let cnd4KSx = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('stJjctT', cnd4KSx);
if (cnd4KSx) { 
let elhJh9z = eo('i','LX2f',null,`class`,`${fas('lock')} ml-2 icon`);
ec('i');
}ec('button');
let elXz_cp = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let el4BLDY = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let elTqMTU = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let elOgwdR = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmp4XBL = this._lc('cwvtGD46Q', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmpLsop = this._lc('czNh6lknz', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmp6BgI = this._lc('cffWECUKk', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmplsGC = this._lc('cntt3HypU', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let elARCsP = eo('div',null,null,`class`,`col`);
let elEBCAO = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elpGskI = eo('div',null,null,`class`,`symbol`);
let elME9ru = eo('i',null,null,`class`,`circle basic`);
ec('i');
let elVhabb = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cndY27l = component.user.total.calendar.basic;
this.setState('staO4lb', cndY27l);
if (cndY27l) { 
let elyt9jI = eo('strong','XRLf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let elC2USO = eo('div',null,null,`class`,`symbol`);
let elLBeDH = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elkjuBT = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cndmsP2 = component.user.total.calendar.todo;
this.setState('stJpZvW', cndmsP2);
if (cndmsP2) { 
let elZVWiS = eo('strong','_6Wf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elQoIpA = eo('div',null,null,`class`,`symbol`);
let el0glLp = eo('i',null,null,`class`,`circle task`);
ec('i');
let elZNHKj = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndjcb_ = component.user.total.calendar.task;
this.setState('sta1zp5', cndjcb_);
if (cndjcb_) { 
let elwFJvb = eo('strong','iYMf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elwsAvk = eo('div',null,null,`class`,`symbol`);
let elhu0EV = eo('i',null,null,`class`,`${fas('hourglass-half')} icon`);
ec('i');
let elpuzfa = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cndTkFP = component.user.total.calendar.active;
this.setState('stnBfrs', cndTkFP);
if (cndTkFP) { 
let elyu8AB = eo('strong','QTFf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let el4IX_7 = eo('div',null,null,`class`,`symbol`);
let el76qCs = eo('i',null,null,`class`,`${fas('check')} icon`);
ec('i');
let elWjSID = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cndH4Rk = component.user.total.calendar.completed;
this.setState('stHW3z3', cndH4Rk);
if (cndH4Rk) { 
let eldcTrW = eo('strong','qyLf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let el4fEIU = eo('div',null,null,`class`,`symbol`);
let elwgPVB = eo('i',null,null,`class`,`${fas('frown-open')} icon`);
ec('i');
let elAFTZK = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndBFP3 = component.user.total.calendar.failed;
this.setState('stnDywA', cndBFP3);
if (cndBFP3) { 
let elmmXuA = eo('strong','LxIf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let elJc658 = eo('div',null,null,`class`,`symbol`);
let elF3CrA = eo('i',null,null,`class`,`${fas('frown')} icon`);
ec('i');
let el4XXBT = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cndS17D = component.user.total.calendar.autoFailed;
this.setState('stduAWU', cndS17D);
if (cndS17D) { 
let elpRu3F = eo('strong','mMyf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let eluyW7d = eo('section',null,null,`id`,`calendar`);
let elgw61T = eo('div',null,null,`class`,`columns`);
let elK5znk = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let elAqN8v = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left')} mr-2 pointer icon`);
ec('i');
let elhG4Ro = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let el6iu8W = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right')} ml-2 pointer icon`);
ec('i');
ec('h3');
ec('div');
let elq3BQv = eo('div',null,null,`class`,`columns`);
let elLLC0s = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iiikG6 = 'Nwoc7FM' + i;
let elvFKBX = eo('div','KlPh8BQiESsf' + i+iiikG6,null,`class`,`block column column-8 heading ${cls({current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth})}`);
text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iiQMTl = '0atZEOi' + week;
let elybp52 = eo('div','qKIzGXdvHwVz' + week+iiQMTl,null,`class`,`columns`);
let el1JsK1 = eo('div','N0Gff'+iiQMTl,null,`class`,`block column column-8 heading week-num ${cls({current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth})}`);
text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let ii_Yb1 = 'jsr4fxx' + i;
let el82nbA = eo('div','4DvIvwYxPqI8' + i+iiQMTl+ii_Yb1,null,`class`,`block column column-8 day ${cls({locked: !day.editable})}`);
let elMYS_C = eo('span','VP8ff'+iiQMTl+ii_Yb1,null,`class`,`number ${cls({current: day.date == component.calendarOptions.today.date})}`);
text(day.number);
ec('span');
let cndzvWK = day.month != component.calendarOptions.current.monthName;
this.setState('sthxA_4', cndzvWK);
if (cndzvWK) { 
let elwfswy = eo('span','8c7ff'+iiQMTl+ii_Yb1,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iiMOe4 = 'sIZ7xdx' + i;
let elPGHN8 = eo('div','85kff'+iiQMTl+ii_Yb1+iiMOe4,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elmKJV2 = eo('div','wo7ff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`label pointer`);
let elghtw6 = eo('span','2Vqff'+iiQMTl+ii_Yb1+iiMOe4);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndGUi5 = scheduleItem.status == 'active';
this.setState('st62R5o', cndGUi5);
let cndNUvE = scheduleItem.status == 'completed';
this.setState('stRFwZR', cndNUvE);
let cndTv_H = scheduleItem.status == 'failed';
this.setState('stoK6hD', cndTv_H);
let cndMX4s = scheduleItem.status == 'autoFailed';
this.setState('stwHSN5', cndMX4s);
if (cndGUi5) { 
let elij_3X = eo('i','E8Xff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half')} icon icon`);
ec('i');
}else if (cndNUvE) { 
let eliIbBG = eo('i','TBIff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check')} icon icon`);
ec('i');
}else if (cndTv_H) { 
let elxaLSF = eo('i','bTDff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open')} icon icon`);
ec('i');
}else if (cndMX4s) { 
let elMRwlb = eo('i','Tq5ff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown')} icon icon`);
ec('i');
}ec('div');
let elxSQnH = eo('div','wxqff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`details ${cls({open: scheduleItem.viewDetails})}`);
let elQl9lU = eo('div','rO1ff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`info`);
let elKMTTz = eo('div','VMwff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let el3UeZQ = eo('div','U5Zff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`date detail`);
let eluEMXK = eo('strong','6ERff'+iiQMTl+ii_Yb1+iiMOe4);
text(`Ends at:`);
ec('strong');
let elXePlb = eo('span','04Qff'+iiQMTl+ii_Yb1+iiMOe4);
text(scheduleItem.deadline);
ec('span');
ec('div');
let elQJP7U = eo('div','eBdff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`type detail`);
let elFhwJh = eo('strong','AGzff'+iiQMTl+ii_Yb1+iiMOe4);
text(`Type:`);
ec('strong');
let elyCRiO = eo('span','pDpff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let elHhb6G = eo('div','RkVff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`status detail`);
let elQwOO0 = eo('strong','liKff'+iiQMTl+ii_Yb1+iiMOe4);
text(`Status:`);
ec('strong');
let cndW1AP = scheduleItem.status == 'active';
this.setState('st0qArN', cndW1AP);
let cnd27cC = scheduleItem.status == 'completed';
this.setState('stnf5tQ', cnd27cC);
let cndwyMK = scheduleItem.status == 'failed';
this.setState('stWQ8x4', cndwyMK);
let cndR1Tj = scheduleItem.status == 'autoFailed';
this.setState('stAdPnD', cndR1Tj);
if (cndW1AP) { 
let el_0Sm9 = eo('i','O4Fff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half')} v-middle icon`);
ec('i');
}else if (cnd27cC) { 
let elJZvBq = eo('i','4i7ff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check')} v-middle icon`);
ec('i');
}else if (cndwyMK) { 
let elgGhBs = eo('i','0ykff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open')} v-middle icon`);
ec('i');
}else if (cndR1Tj) { 
let ela0qHq = eo('i','wdpff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown')} v-middle icon`);
ec('i');
}let elZkgnP = eo('span','XW6ff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cndsUvt = scheduleItem.notes;
this.setState('stgn6LG', cndsUvt);
let cndfaJH = scheduleItem.todo;
this.setState('st5xR3C', cndfaJH);
if (cndsUvt) { 
let elUec1K = eo('p','yn6ff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`notes`);
text(`❝`);
let elZr8I1 = eo('span','mAUff'+iiQMTl+ii_Yb1+iiMOe4);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cndfiiR = scheduleItem.task;
this.setState('stcficZ', cndfiiR);
let cnd3vF4 = cndfaJH;
this.setState('stP8sFH', cnd3vF4);
if (cndfiiR) { 
let elHmale = eo('div','MZ_ff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`custom-type task-details`);
let elY7fMn = eo('h4','TeYff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let elJyq6p = eo('div','j1Hff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`detail title`);
let elDvVE8 = eo('strong','g_gff'+iiQMTl+ii_Yb1+iiMOe4);
text(`Title:`);
ec('strong');
let el__DL1 = eo('span','sBTff'+iiQMTl+ii_Yb1+iiMOe4);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elpFsGF = eo('div','Hkrff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`detail ends-at`);
let elImnIB = eo('strong','ezKff'+iiQMTl+ii_Yb1+iiMOe4);
text(`Ends at:`);
ec('strong');
let el0Fx8I = eo('span','49fff'+iiQMTl+ii_Yb1+iiMOe4);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let el1c5W4 = eo('div','X8Pff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`detail reward`);
let elMmVFb = eo('strong','ZZQff'+iiQMTl+ii_Yb1+iiMOe4);
text(`Reward:`);
ec('strong');
let cmpUdkX = this._lc('c_O1UV2Ie', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'stcficZ',insideLoop:true,index:"" +iiQMTl+ii_Yb1+iiMOe4});
let elwkR_Q = eo('span','j1fff'+iiQMTl+ii_Yb1+iiMOe4,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let elwOlwO = eo('a','mLsff'+iiQMTl+ii_Yb1+iiMOe4,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cnd3vF4) { 
let ele5sX0 = eo('div','novff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`custom-type todo-details`);
let elaiqpF = eo('h4','rQ0ff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let eloh8k2 = eo('div','0YTff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`detail title`);
let elXVLAh = eo('strong','LuAff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let elliGz2 = eo('span','29uff'+iiQMTl+ii_Yb1+iiMOe4);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let elP2YXU = eo('div','zwOff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`detail category`);
let elSJuux = eo('strong','5Chff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let elHiktI = eo('span','FbLff'+iiQMTl+ii_Yb1+iiMOe4);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cndb0ww = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('stIrmSm', cndb0ww);
if (cndb0ww) { 
let el2I2YN = eo('div','f0Bff'+iiQMTl+ii_Yb1+iiMOe4,null,`class`,`text-center m-t-1`);
let elJzezw = eo('button','QlYff'+iiQMTl+ii_Yb1+iiMOe4,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let elussJu = eo('button','hgyff'+iiQMTl+ii_Yb1+iiMOe4,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cnd1PvD = component.confirm;
this.setState('stLfkNi', cnd1PvD);
if (cnd1PvD) { 
let cmpBRLg = this._lc('cigcw2EzC', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stLfkNi'});
}let cndpXgC = component.add == 'basic';
this.setState('stjpdCI', cndpXgC);
if (cndpXgC) { 
component.scheduleModal = this._lc('cXRHljwR9', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elWuKaU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elWuKaU.formHandler) {
                    window.cfrmdlr = elWuKaU.formHandler = new FormHandler(elWuKaU, component);
                } else {
                    window.cfrmdlr = elWuKaU.formHandler;
                }
            component.date = this._lc('chHI0vo8_', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stjpdCI'});
let eljmsFc = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elWuKaU.formHandler.getError(`subject`) })}`);
let elXYI2U = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elWX6iy = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWVa8Q = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elWuKaU.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elWuKaU.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cndT6dp = elWuKaU.formHandler.getError(`subject`);
this.setState('st5YR2i', cndT6dp);
if (cndT6dp) { 
let elgpl6Q = eo('div','nGvf',null,`class`,`alert alert-danger`);
text(elWuKaU.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elulhx5 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elWuKaU.formHandler.getError(`notes`) })}`);
let elRXONk = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elmNYM3 = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elun8lL = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let eltEz2y = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'stjpdCI'});
}let cndAZDw = component.add == 'task';
this.setState('stKKGjl', cndAZDw);
if (cndAZDw) { 
component.scheduleModal = this._lc('cnmZeQenW', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elV6pQ8 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elV6pQ8.formHandler) {
                    window.cfrmdlr = elV6pQ8.formHandler = new FormHandler(elV6pQ8, component);
                } else {
                    window.cfrmdlr = elV6pQ8.formHandler;
                }
            let cmpAuzI = this._lc('cILNIEqg3', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'stKKGjl'});
component.date = this._lc('cMAAC_gv0', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stKKGjl'});
let el4Qzv7 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elV6pQ8.formHandler.getError(`subject`) })}`);
let elY9v29 = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let eluW40b = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8iQSV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elV6pQ8.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elV6pQ8.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
el8iQSV.value = fval(component.data.subject);
let cndxzZE = elV6pQ8.formHandler.getError(`subject`);
this.setState('st3kQfE', cndxzZE);
if (cndxzZE) { 
let elApZQX = eo('div','y_gf',null,`class`,`alert alert-danger`);
text(elV6pQ8.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elZ4BRi = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elV6pQ8.formHandler.getError(`notes`) })}`);
let el1bbqK = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elyhM3F = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let eltFznV = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elE1Ptk = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'stKKGjl'});
}let cndcWxy = component.add == 'todo';
this.setState('stcI0qs', cndcWxy);
if (cndcWxy) { 
component.scheduleModal = this._lc('cxVEScPiL', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elzlg_g = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elzlg_g.formHandler) {
                    window.cfrmdlr = elzlg_g.formHandler = new FormHandler(elzlg_g, component);
                } else {
                    window.cfrmdlr = elzlg_g.formHandler;
                }
            component.todoDropdownList = this._lc('cjpeVI6tB', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'stcI0qs'});
component.date = this._lc('cpWtrTN5N', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stcI0qs'});
let elASoIa = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elzlg_g.formHandler.getError(`subject`) })}`);
let elrg32q = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elttK7g = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwTfP7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzlg_g.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elzlg_g.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elwTfP7.value = fval(component.data.subject);
let cndEh7D = elzlg_g.formHandler.getError(`subject`);
this.setState('stcxQ7B', cndEh7D);
if (cndEh7D) { 
let elGgE0_ = eo('div','tE4f',null,`class`,`alert alert-danger`);
text(elzlg_g.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elRocvK = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elzlg_g.formHandler.getError(`notes`) })}`);
let eleB2un = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elOdYTG = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elazAcd = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elT4YqZ = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'stcI0qs'});
}let cndyRbb = component.newStatus;
this.setState('stXcpe9', cndyRbb);
if (cndyRbb) { 
let cmpWF0N = this._lc('cIYK7uQWp', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'stXcpe9'});
}
                    this.isReadyToGo();
                }
        });