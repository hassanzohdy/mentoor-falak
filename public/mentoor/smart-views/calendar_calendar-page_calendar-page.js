_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {cbepdvmLZ:'gold-icon',cRwkvG3jb:'flk-mdb-checkbox',cyJFn_tGA:'flk-mdb-checkbox',coLA7Ymzq:'flk-mdb-checkbox',caMhNnp7n:'flk-mdb-checkbox',cMM6FezTl:'gold-icon',ctkOWPvHb:'layout',cpXmStZOw:'flk-alert',cnxWIX3Fn:'flk-datepicker',cSqaw2WOQ:'flk-modal',cw8_QNzrT:'flk-dropdown-list',c3ipBTI6F:'flk-datepicker',cpNzOrJjK:'flk-modal',cqiLKo9Xb:'flk-dropdown-list',cjJXWcsBN:'flk-datepicker',c1cAubWkC:'flk-modal',ccJKjrhPR:'flk-alert'},
                render: function (component) {
                    let cmpmQ1J = this._lc('ctkOWPvHb', {parent:component,content:(layout) => {let eljKE8f = eo('h1');
text(`Calendar`);
ec('h1');
let el0QiGi = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let elZ2V1J = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let el2OKym = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cndocAs = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('stIaSxb', cndocAs);
let cnd7Ff0 = !(cndocAs);
this.setState('steSUV1', cnd7Ff0);
if (cndocAs) { 
let cndsqmC = ! Is.empty(FLAGS.shoppingMall);
this.setState('stC6FzT', cndsqmC);
if (cndsqmC) { 
let elwr5Yr = eo('div','WYof',null,`class`,`m-t-4 text-center`);
let elQhZc0 = eo('button','aPuf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpsb52 = this._lc('cbepdvmLZ', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'stC6FzT'});
let elvAvo5 = eo('div','uy_f',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let elEWUYM = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let elLc25V = eo('div',null,null,`class`,`col m-t-4`);
let elgdMlL = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let el7noB8 = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Basic`);
ec('button');
let elN7SN_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elTOilb = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Todo`);
let cndgU_2 = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('stxayC3', cndgU_2);
if (cndgU_2) { 
let ela9k7T = eo('i','nJGf',null,`class`,`${fas('lock')} ml-2 icon`);
ec('i');
}ec('button');
let elhCbUX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let elQkUbQ = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let elFDJ61 = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let elUdhYa = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmp7tpU = this._lc('cRwkvG3jb', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmpVcjF = this._lc('cyJFn_tGA', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpla3l = this._lc('coLA7Ymzq', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmpiKCW = this._lc('caMhNnp7n', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let elTiRVt = eo('div',null,null,`class`,`col`);
let elq9BOY = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elmbhg5 = eo('div',null,null,`class`,`symbol`);
let eltuq7J = eo('i',null,null,`class`,`circle basic`);
ec('i');
let eluiHjq = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cnd1nnn = component.user.total.calendar.basic;
this.setState('stiW9DV', cnd1nnn);
if (cnd1nnn) { 
let ely4w5a = eo('strong','VWWf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let el701aY = eo('div',null,null,`class`,`symbol`);
let elArH9t = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elQx5pJ = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cnd27N0 = component.user.total.calendar.todo;
this.setState('stLEKhU', cnd27N0);
if (cnd27N0) { 
let elrFPt1 = eo('strong','8FGf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let el6LtD1 = eo('div',null,null,`class`,`symbol`);
let elxgw0F = eo('i',null,null,`class`,`circle task`);
ec('i');
let els8z0Y = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndN2Nd = component.user.total.calendar.task;
this.setState('stx7QNq', cndN2Nd);
if (cndN2Nd) { 
let eloGsoe = eo('strong','Xh2f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elO33LF = eo('div',null,null,`class`,`symbol`);
let elAgnaY = eo('i',null,null,`class`,`${fas('hourglass-half')} icon`);
ec('i');
let elVq3x6 = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cnd8ugI = component.user.total.calendar.active;
this.setState('stL0b3n', cnd8ugI);
if (cnd8ugI) { 
let eld1Nhm = eo('strong','ydlf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let elFpBp9 = eo('div',null,null,`class`,`symbol`);
let elbiHFT = eo('i',null,null,`class`,`${fas('check')} icon`);
ec('i');
let elFiqll = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cndrAIj = component.user.total.calendar.completed;
this.setState('stthyIF', cndrAIj);
if (cndrAIj) { 
let el6mUbh = eo('strong','K_gf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let el5JrnJ = eo('div',null,null,`class`,`symbol`);
let elWXFu_ = eo('i',null,null,`class`,`${fas('frown-open')} icon`);
ec('i');
let elltyUW = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndbMUx = component.user.total.calendar.failed;
this.setState('sth1_6K', cndbMUx);
if (cndbMUx) { 
let el76Jgj = eo('strong','Galf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let elrjQfV = eo('div',null,null,`class`,`symbol`);
let elQrEja = eo('i',null,null,`class`,`${fas('frown')} icon`);
ec('i');
let elWKTSR = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cnddXaQ = component.user.total.calendar.autoFailed;
this.setState('st4drY3', cnddXaQ);
if (cnddXaQ) { 
let elmS71C = eo('strong','f5ff',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let eliWGLR = eo('section',null,null,`id`,`calendar`);
let elrvKAD = eo('div',null,null,`class`,`columns`);
let elGrMIw = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let elQyIHy = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left')} mr-2 pointer icon`);
ec('i');
let elIoIJd = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let elmcVfw = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right')} ml-2 pointer icon`);
ec('i');
ec('h3');
ec('div');
let eljNqU6 = eo('div',null,null,`class`,`columns`);
let eleKzYK = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iiyy7e = 'MChSaC3' + i;
let elajlKP = eo('div','m8zidvxxruE8' + i+iiyy7e,null,`class`,`block column column-8 heading ${cls({current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth})}`);
text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iikJSA = 'o9Ithhc' + week;
let elsLJeS = eo('div','vZQajeFJFLQs' + week+iikJSA,null,`class`,`columns`);
let elePQk5 = eo('div','dRtff'+iikJSA,null,`class`,`block column column-8 heading week-num ${cls({current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth})}`);
text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let iiwLXG = 'DaXaAP9' + i;
let elImV7v = eo('div','aDRIWAnPeu_p' + i+iikJSA+iiwLXG,null,`class`,`block column column-8 day ${cls({locked: !day.editable})}`);
let elP2eh9 = eo('span','MeEff'+iikJSA+iiwLXG,null,`class`,`number ${cls({current: day.date == component.calendarOptions.today.date})}`);
text(day.number);
ec('span');
let cndAawU = day.month != component.calendarOptions.current.monthName;
this.setState('stkZDtm', cndAawU);
if (cndAawU) { 
let elkdGy3 = eo('span','jx7ff'+iikJSA+iiwLXG,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iiRI2V = 'L4gVGU3' + i;
let elDNDr1 = eo('div','GIyff'+iikJSA+iiwLXG+iiRI2V,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elItAIx = eo('div','siHff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`label pointer`);
let elBSjs_ = eo('span','0czff'+iikJSA+iiwLXG+iiRI2V);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndpocs = scheduleItem.status == 'active';
this.setState('stRTOYj', cndpocs);
let cnd2XJE = scheduleItem.status == 'completed';
this.setState('stArQ34', cnd2XJE);
let cndIHAL = scheduleItem.status == 'failed';
this.setState('stZDb6a', cndIHAL);
let cndFxDM = scheduleItem.status == 'autoFailed';
this.setState('stDrWnR', cndFxDM);
if (cndpocs) { 
let elf0HcC = eo('i','fKGff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half')} icon icon`);
ec('i');
}else if (cnd2XJE) { 
let eltK11m = eo('i','6PZff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check')} icon icon`);
ec('i');
}else if (cndIHAL) { 
let elaU6hy = eo('i','8yLff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open')} icon icon`);
ec('i');
}else if (cndFxDM) { 
let eld9DzP = eo('i','0gSff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown')} icon icon`);
ec('i');
}ec('div');
let elWVcET = eo('div','vIMff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`details ${cls({open: scheduleItem.viewDetails})}`);
let el6Pgev = eo('div','kWfff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`info`);
let el1OFcg = eo('div','TuIff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let elOLUA_ = eo('div','S0eff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`date detail`);
let elC_Wfs = eo('strong','5OTff'+iikJSA+iiwLXG+iiRI2V);
text(`Ends at:`);
ec('strong');
let elcZaxA = eo('span','sDqff'+iikJSA+iiwLXG+iiRI2V);
text(scheduleItem.deadline);
ec('span');
ec('div');
let elFdTg9 = eo('div','euVff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`type detail`);
let el8_ILx = eo('strong','jLkff'+iikJSA+iiwLXG+iiRI2V);
text(`Type:`);
ec('strong');
let el3LkEN = eo('span','xFMff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let elatppY = eo('div','85mff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`status detail`);
let eldcugA = eo('strong','0BSff'+iikJSA+iiwLXG+iiRI2V);
text(`Status:`);
ec('strong');
let cndsDyz = scheduleItem.status == 'active';
this.setState('stwvZl1', cndsDyz);
let cndeeg5 = scheduleItem.status == 'completed';
this.setState('stnV5M4', cndeeg5);
let cndHEI3 = scheduleItem.status == 'failed';
this.setState('st9AybP', cndHEI3);
let cndjs0U = scheduleItem.status == 'autoFailed';
this.setState('stLcXzp', cndjs0U);
if (cndsDyz) { 
let el53h44 = eo('i','MrRff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half')} v-middle icon`);
ec('i');
}else if (cndeeg5) { 
let elLtJqr = eo('i','Bbbff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check')} v-middle icon`);
ec('i');
}else if (cndHEI3) { 
let el34oiR = eo('i','T5sff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open')} v-middle icon`);
ec('i');
}else if (cndjs0U) { 
let elgNiJh = eo('i','p_Qff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown')} v-middle icon`);
ec('i');
}let elXQZuj = eo('span','Sbjff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cndYaoF = scheduleItem.notes;
this.setState('stYGktH', cndYaoF);
let cndMdIi = scheduleItem.todo;
this.setState('sttWfbD', cndMdIi);
if (cndYaoF) { 
let elsioZI = eo('p','UvFff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`notes`);
text(`❝`);
let eldYLOC = eo('span','aBlff'+iikJSA+iiwLXG+iiRI2V);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cnd1ws7 = scheduleItem.task;
this.setState('stZmHLv', cnd1ws7);
let cndZNPY = cndMdIi;
this.setState('stg0Y5u', cndZNPY);
if (cnd1ws7) { 
let el7zlNw = eo('div','j78ff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`custom-type task-details`);
let elQVNrY = eo('h4','ywaff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let elYbd7V = eo('div','NyTff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`detail title`);
let elTB4Oa = eo('strong','OcKff'+iikJSA+iiwLXG+iiRI2V);
text(`Title:`);
ec('strong');
let eldnA3b = eo('span','GG6ff'+iikJSA+iiwLXG+iiRI2V);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elYk_0d = eo('div','_szff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`detail ends-at`);
let elbXAAp = eo('strong','7SHff'+iikJSA+iiwLXG+iiRI2V);
text(`Ends at:`);
ec('strong');
let elx9UY_ = eo('span','We7ff'+iikJSA+iiwLXG+iiRI2V);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let el3LD5E = eo('div','p0xff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`detail reward`);
let elpgWGE = eo('strong','TpCff'+iikJSA+iiwLXG+iiRI2V);
text(`Reward:`);
ec('strong');
let cmpxETQ = this._lc('cMM6FezTl', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'stZmHLv',insideLoop:true,index:"" +iikJSA+iiwLXG+iiRI2V});
let el4wf0s = eo('span','gzoff'+iikJSA+iiwLXG+iiRI2V,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let elXhdns = eo('a','PpNff'+iikJSA+iiwLXG+iiRI2V,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cndZNPY) { 
let el9YxcH = eo('div','eqnff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`custom-type todo-details`);
let elYpRoM = eo('h4','GyTff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let elTpbHQ = eo('div','w9aff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`detail title`);
let eluEmzG = eo('strong','4HDff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let el5Ixok = eo('span','8MFff'+iikJSA+iiwLXG+iiRI2V);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let elhewVL = eo('div','fEnff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`detail category`);
let el5xbBo = eo('strong','EDuff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let elIzPY8 = eo('span','dFjff'+iikJSA+iiwLXG+iiRI2V);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cndtQD7 = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('stBircL', cndtQD7);
if (cndtQD7) { 
let elsJ6SO = eo('div','4G7ff'+iikJSA+iiwLXG+iiRI2V,null,`class`,`text-center m-t-1`);
let elX0mtV = eo('button','JOTff'+iikJSA+iiwLXG+iiRI2V,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let elkxZSw = eo('button','ZBrff'+iikJSA+iiwLXG+iiRI2V,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cnd6zbO = component.confirm;
this.setState('sth7Wdi', cnd6zbO);
if (cnd6zbO) { 
let cmpPhta = this._lc('cpXmStZOw', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'sth7Wdi'});
}let cndgd1Y = component.add == 'basic';
this.setState('stinHug', cndgd1Y);
if (cndgd1Y) { 
component.scheduleModal = this._lc('cSqaw2WOQ', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elp90Wh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elp90Wh.formHandler) {
                    window.cfrmdlr = elp90Wh.formHandler = new FormHandler(elp90Wh, component);
                } else {
                    window.cfrmdlr = elp90Wh.formHandler;
                }
            component.date = this._lc('cnxWIX3Fn', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stinHug'});
let elupmS6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elp90Wh.formHandler.getError(`subject`) })}`);
let elvOY73 = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let eljB6LK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwdLSQ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elp90Wh.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elp90Wh.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cnd1Rl3 = elp90Wh.formHandler.getError(`subject`);
this.setState('stKIquI', cnd1Rl3);
if (cnd1Rl3) { 
let elKNiHf = eo('div','X1sf',null,`class`,`alert alert-danger`);
text(elp90Wh.formHandler.getError(`subject`));
ec('div');
}ec('div');
let ellvTpe = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elp90Wh.formHandler.getError(`notes`) })}`);
let elXXLKl = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elpFfPI = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elSfxtB = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let el4ZGVs = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'stinHug'});
}let cndaXuB = component.add == 'task';
this.setState('stzeuqQ', cndaXuB);
if (cndaXuB) { 
component.scheduleModal = this._lc('cpNzOrJjK', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elLAnnk = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elLAnnk.formHandler) {
                    window.cfrmdlr = elLAnnk.formHandler = new FormHandler(elLAnnk, component);
                } else {
                    window.cfrmdlr = elLAnnk.formHandler;
                }
            let cmpfsIL = this._lc('cw8_QNzrT', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'stzeuqQ'});
component.date = this._lc('c3ipBTI6F', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stzeuqQ'});
let elUFKyC = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elLAnnk.formHandler.getError(`subject`) })}`);
let elGhaZN = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elHHnLi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRpu47 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elLAnnk.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elLAnnk.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elRpu47.value = fval(component.data.subject);
let cnd4obU = elLAnnk.formHandler.getError(`subject`);
this.setState('stkJTj2', cnd4obU);
if (cnd4obU) { 
let el_rLtb = eo('div','ToGf',null,`class`,`alert alert-danger`);
text(elLAnnk.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elzfi_D = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elLAnnk.formHandler.getError(`notes`) })}`);
let elajHOJ = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elaB7Lh = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elNapoO = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let el96zeo = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'stzeuqQ'});
}let cndHA7R = component.add == 'todo';
this.setState('stvSGfc', cndHA7R);
if (cndHA7R) { 
component.scheduleModal = this._lc('c1cAubWkC', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let el_85Lv = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_85Lv.formHandler) {
                    window.cfrmdlr = el_85Lv.formHandler = new FormHandler(el_85Lv, component);
                } else {
                    window.cfrmdlr = el_85Lv.formHandler;
                }
            component.todoDropdownList = this._lc('cqiLKo9Xb', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'stvSGfc'});
component.date = this._lc('cjJXWcsBN', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stvSGfc'});
let elSHfD4 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_85Lv.formHandler.getError(`subject`) })}`);
let el5QVQV = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elAZ_dS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPSCW1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_85Lv.formHandler.addError(`subject`, 'required', trans('validation.required'));}return el_85Lv.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elPSCW1.value = fval(component.data.subject);
let cndE9PG = el_85Lv.formHandler.getError(`subject`);
this.setState('st8YSsI', cndE9PG);
if (cndE9PG) { 
let elEjCCW = eo('div','gStf',null,`class`,`alert alert-danger`);
text(el_85Lv.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elBW3F6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_85Lv.formHandler.getError(`notes`) })}`);
let el7Vqd4 = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elV2mJX = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let el3uOxe = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let el2dwir = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'stvSGfc'});
}let cndyGuG = component.newStatus;
this.setState('st6jCvM', cndyGuG);
if (cndyGuG) { 
let cmpKBBp = this._lc('ccJKjrhPR', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'st6jCvM'});
}
                    this.isReadyToGo();
                }
        });