_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {cS2QwkZrs:'gold-icon',cXkaObFxg:'flk-mdb-checkbox',cGXrJlGf2:'flk-mdb-checkbox',cWoZBU53n:'flk-mdb-checkbox',cPuMdHLVN:'flk-mdb-checkbox',cSKb0t98C:'gold-icon',cfe7nuwU2:'layout',cwBhta5ab:'flk-alert',cIobwdMML:'flk-datepicker',cMvDq4oIW:'flk-modal',cyfi_kQdu:'flk-dropdown-list',cocjK45a0:'flk-datepicker',cHObApho3:'flk-modal',ciVqQoXCf:'flk-dropdown-list',ct3jSLCY5:'flk-datepicker',cZU9owUZq:'flk-modal',caG0qdrhq:'flk-alert'},
                render: function (component) {
                    let cmpwj5r = this._lc('cfe7nuwU2', {parent:component,content:(layout) => {let el9e7Tr = eo('h1');
text(`Calendar`);
ec('h1');
let elL9voR = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let elc68dc = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let elNFTlm = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cndU4qN = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('stmnueW', cndU4qN);
let cnd2xQ4 = !(cndU4qN);
this.setState('sta75F9', cnd2xQ4);
if (cndU4qN) { 
let cndH2fm = ! Is.empty(FLAGS.shoppingMall);
this.setState('stBBfOb', cndH2fm);
if (cndH2fm) { 
let elF0cQs = eo('div','bmjf',null,`class`,`m-t-4 text-center`);
let eloRI4a = eo('button','mvxf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpLQ0j = this._lc('cS2QwkZrs', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'stBBfOb'});
let elc11Yt = eo('div','zEOf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let elIGCdP = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let elWcO0m = eo('div',null,null,`class`,`col m-t-4`);
let elcf0Q0 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let elwvZ4i = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Basic`);
ec('button');
let el0zZ1s = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elMAeVP = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Todo`);
let cndyzfI = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('sty7Hn4', cndyzfI);
if (cndyzfI) { 
let el8A5NQ = eo('i','FQlf',null,`class`,`${fas('lock')} ml-2 icon`);
ec('i');
}ec('button');
let elXa1Cl = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let elD0qME = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let eljk8fU = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let elTC39c = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmp8Gpr = this._lc('cXkaObFxg', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmpTzZz = this._lc('cGXrJlGf2', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpMtor = this._lc('cWoZBU53n', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmptJ0z = this._lc('cPuMdHLVN', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let elf285H = eo('div',null,null,`class`,`col`);
let eltFJq4 = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elUkuDf = eo('div',null,null,`class`,`symbol`);
let elrk9Cz = eo('i',null,null,`class`,`circle basic`);
ec('i');
let elMffG2 = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cnd3LKh = component.user.total.calendar.basic;
this.setState('stb21w4', cnd3LKh);
if (cnd3LKh) { 
let el1u3Gs = eo('strong','iNZf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let elapLs2 = eo('div',null,null,`class`,`symbol`);
let elapKNV = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elH4i2z = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cndo8HN = component.user.total.calendar.todo;
this.setState('stpe4Gx', cndo8HN);
if (cndo8HN) { 
let elXuNmH = eo('strong','03sf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elwESh0 = eo('div',null,null,`class`,`symbol`);
let elPVlJH = eo('i',null,null,`class`,`circle task`);
ec('i');
let elSXS1m = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndi4aP = component.user.total.calendar.task;
this.setState('stMY45o', cndi4aP);
if (cndi4aP) { 
let elX1HFN = eo('strong','Hqlf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elQTc0I = eo('div',null,null,`class`,`symbol`);
let elK55ro = eo('i',null,null,`class`,`${fas('hourglass-half')} icon`);
ec('i');
let elB6mUN = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cndJDCb = component.user.total.calendar.active;
this.setState('stDz6YQ', cndJDCb);
if (cndJDCb) { 
let elKOIsF = eo('strong','jrUf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let elN_QBi = eo('div',null,null,`class`,`symbol`);
let elS6nwj = eo('i',null,null,`class`,`${fas('check')} icon`);
ec('i');
let el8kJhq = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cndlYMa = component.user.total.calendar.completed;
this.setState('stSySkj', cndlYMa);
if (cndlYMa) { 
let elj9aCI = eo('strong','GxSf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let elhsmN6 = eo('div',null,null,`class`,`symbol`);
let elaW7Fo = eo('i',null,null,`class`,`${fas('frown-open')} icon`);
ec('i');
let eluW8r7 = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndIfGg = component.user.total.calendar.failed;
this.setState('stmzLZu', cndIfGg);
if (cndIfGg) { 
let eljiuux = eo('strong','5YOf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let el8iQ_5 = eo('div',null,null,`class`,`symbol`);
let elqCFd5 = eo('i',null,null,`class`,`${fas('frown')} icon`);
ec('i');
let elJM6HU = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cnd1hvj = component.user.total.calendar.autoFailed;
this.setState('stYQzJ5', cnd1hvj);
if (cnd1hvj) { 
let elVjele = eo('strong','3xEf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let el4k5KJ = eo('section',null,null,`id`,`calendar`);
let elH0QTE = eo('div',null,null,`class`,`columns`);
let el6SPSN = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let el7gxNA = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left')} mr-2 pointer icon`);
ec('i');
let elloZt6 = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let el9TkGL = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right')} ml-2 pointer icon`);
ec('i');
ec('h3');
ec('div');
let elq8kDz = eo('div',null,null,`class`,`columns`);
let elgt9U2 = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iil5kt = 'LAb49IA' + i;
let el5vnED = eo('div','3y_IonFrRH7C' + i+iil5kt,null,`class`,`block column column-8 heading ${cls({current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth})}`);
text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iin6eT = 'UWQ2ifa' + week;
let elh51Tq = eo('div','VPGUc_Bva69b' + week+iin6eT,null,`class`,`columns`);
let eljL4dY = eo('div','jFuff'+iin6eT,null,`class`,`block column column-8 heading week-num ${cls({current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth})}`);
text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let iiNiYd = 'JUkaHRP' + i;
let elFn_Jl = eo('div','A7wwnPGTCcBX' + i+iin6eT+iiNiYd,null,`class`,`block column column-8 day ${cls({locked: !day.editable})}`);
let elu0GZA = eo('span','jyPff'+iin6eT+iiNiYd,null,`class`,`number ${cls({current: day.date == component.calendarOptions.today.date})}`);
text(day.number);
ec('span');
let cndBmwM = day.month != component.calendarOptions.current.monthName;
this.setState('st3Oj3s', cndBmwM);
if (cndBmwM) { 
let elrZhgy = eo('span','O7Uff'+iin6eT+iiNiYd,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iijpmh = 'rQNNhBJ' + i;
let elQ9u3C = eo('div','iR5ff'+iin6eT+iiNiYd+iijpmh,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elqOTHZ = eo('div','jLPff'+iin6eT+iiNiYd+iijpmh,null,`class`,`label pointer`);
let elqXJtM = eo('span','Q6Bff'+iin6eT+iiNiYd+iijpmh);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndA58R = scheduleItem.status == 'active';
this.setState('stVe1ZI', cndA58R);
let cndFbR1 = scheduleItem.status == 'completed';
this.setState('sthGesy', cndFbR1);
let cnd3K1h = scheduleItem.status == 'failed';
this.setState('st1mCPf', cnd3K1h);
let cndCBJ6 = scheduleItem.status == 'autoFailed';
this.setState('stdef05', cndCBJ6);
if (cndA58R) { 
let el3FwiG = eo('i','Eceff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half')} icon icon`);
ec('i');
}else if (cndFbR1) { 
let elH7pGI = eo('i','eEiff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check')} icon icon`);
ec('i');
}else if (cnd3K1h) { 
let elkjSqr = eo('i','sjlff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open')} icon icon`);
ec('i');
}else if (cndCBJ6) { 
let elHR9OH = eo('i','VRYff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown')} icon icon`);
ec('i');
}ec('div');
let elU1UlH = eo('div','I2bff'+iin6eT+iiNiYd+iijpmh,null,`class`,`details ${cls({open: scheduleItem.viewDetails})}`);
let elvBlIb = eo('div','zfUff'+iin6eT+iiNiYd+iijpmh,null,`class`,`info`);
let el6RYXI = eo('div','BtAff'+iin6eT+iiNiYd+iijpmh,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let elBMcSG = eo('div','zOiff'+iin6eT+iiNiYd+iijpmh,null,`class`,`date detail`);
let elD4evV = eo('strong','hD0ff'+iin6eT+iiNiYd+iijpmh);
text(`Ends at:`);
ec('strong');
let elhm6Gt = eo('span','nCQff'+iin6eT+iiNiYd+iijpmh);
text(scheduleItem.deadline);
ec('span');
ec('div');
let ell0mXZ = eo('div','Gu0ff'+iin6eT+iiNiYd+iijpmh,null,`class`,`type detail`);
let elB3CSd = eo('strong','wKbff'+iin6eT+iiNiYd+iijpmh);
text(`Type:`);
ec('strong');
let elpk7UX = eo('span','9Hsff'+iin6eT+iiNiYd+iijpmh,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let elSRbJK = eo('div','DVgff'+iin6eT+iiNiYd+iijpmh,null,`class`,`status detail`);
let elZU5Em = eo('strong','w9dff'+iin6eT+iiNiYd+iijpmh);
text(`Status:`);
ec('strong');
let cndBrPc = scheduleItem.status == 'active';
this.setState('stvkPLq', cndBrPc);
let cndo25k = scheduleItem.status == 'completed';
this.setState('st2uORY', cndo25k);
let cndC1eP = scheduleItem.status == 'failed';
this.setState('stOMy7T', cndC1eP);
let cndA5YU = scheduleItem.status == 'autoFailed';
this.setState('stFIQZl', cndA5YU);
if (cndBrPc) { 
let eldNNgn = eo('i','OY3ff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half')} v-middle icon`);
ec('i');
}else if (cndo25k) { 
let elkVaID = eo('i','ehBff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check')} v-middle icon`);
ec('i');
}else if (cndC1eP) { 
let elzX1xM = eo('i','cmhff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open')} v-middle icon`);
ec('i');
}else if (cndA5YU) { 
let elv03yw = eo('i','ouLff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown')} v-middle icon`);
ec('i');
}let el_SLj9 = eo('span','ihQff'+iin6eT+iiNiYd+iijpmh,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cnd_bwy = scheduleItem.notes;
this.setState('stE1axO', cnd_bwy);
let cndvU8O = scheduleItem.todo;
this.setState('stWHfvw', cndvU8O);
if (cnd_bwy) { 
let elbbZLk = eo('p','a6Wff'+iin6eT+iiNiYd+iijpmh,null,`class`,`notes`);
text(`❝`);
let elBk_ky = eo('span','Ns1ff'+iin6eT+iiNiYd+iijpmh);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cndRErG = scheduleItem.task;
this.setState('stERr1D', cndRErG);
let cndalnD = cndvU8O;
this.setState('stdk4DD', cndalnD);
if (cndRErG) { 
let el8MTEV = eo('div','Mneff'+iin6eT+iiNiYd+iijpmh,null,`class`,`custom-type task-details`);
let elMcXOH = eo('h4','Iwbff'+iin6eT+iiNiYd+iijpmh,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let el1MD3Y = eo('div','tgJff'+iin6eT+iiNiYd+iijpmh,null,`class`,`detail title`);
let elmj9YA = eo('strong','g0dff'+iin6eT+iiNiYd+iijpmh);
text(`Title:`);
ec('strong');
let elD0PKq = eo('span','5Asff'+iin6eT+iiNiYd+iijpmh);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elWG1Fe = eo('div','QhKff'+iin6eT+iiNiYd+iijpmh,null,`class`,`detail ends-at`);
let elDaVor = eo('strong','9fkff'+iin6eT+iiNiYd+iijpmh);
text(`Ends at:`);
ec('strong');
let elT_zSa = eo('span','ri8ff'+iin6eT+iiNiYd+iijpmh);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let elx5BTh = eo('div','jJDff'+iin6eT+iiNiYd+iijpmh,null,`class`,`detail reward`);
let el26Ng_ = eo('strong','fTOff'+iin6eT+iiNiYd+iijpmh);
text(`Reward:`);
ec('strong');
let cmpSMUt = this._lc('cSKb0t98C', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'stERr1D',insideLoop:true,index:"" +iin6eT+iiNiYd+iijpmh});
let el_dcbj = eo('span','gLFff'+iin6eT+iiNiYd+iijpmh,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let elM7Klx = eo('a','q_zff'+iin6eT+iiNiYd+iijpmh,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cndalnD) { 
let el0406L = eo('div','fhBff'+iin6eT+iiNiYd+iijpmh,null,`class`,`custom-type todo-details`);
let elbN51x = eo('h4','aSxff'+iin6eT+iiNiYd+iijpmh,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let elRi8OZ = eo('div','UIdff'+iin6eT+iiNiYd+iijpmh,null,`class`,`detail title`);
let elZRdDt = eo('strong','rZLff'+iin6eT+iiNiYd+iijpmh,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let elM1vBL = eo('span','Ebtff'+iin6eT+iiNiYd+iijpmh);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let el_Qpjw = eo('div','NX1ff'+iin6eT+iiNiYd+iijpmh,null,`class`,`detail category`);
let elODEji = eo('strong','iTWff'+iin6eT+iiNiYd+iijpmh,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let elEMX7j = eo('span','jhRff'+iin6eT+iiNiYd+iijpmh);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cndI_Pz = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('stUduvl', cndI_Pz);
if (cndI_Pz) { 
let elLK9HT = eo('div','OlQff'+iin6eT+iiNiYd+iijpmh,null,`class`,`text-center m-t-1`);
let elEzRR5 = eo('button','JuKff'+iin6eT+iiNiYd+iijpmh,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let elN1O_K = eo('button','Hv6ff'+iin6eT+iiNiYd+iijpmh,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cndJkgC = component.confirm;
this.setState('stIYEhT', cndJkgC);
if (cndJkgC) { 
let cmp1o9X = this._lc('cwBhta5ab', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stIYEhT'});
}let cndyT5N = component.add == 'basic';
this.setState('stzorOl', cndyT5N);
if (cndyT5N) { 
component.scheduleModal = this._lc('cMvDq4oIW', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elfgQtE = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfgQtE.formHandler) {
                    window.cfrmdlr = elfgQtE.formHandler = new FormHandler(elfgQtE, component);
                } else {
                    window.cfrmdlr = elfgQtE.formHandler;
                }
            component.date = this._lc('cIobwdMML', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stzorOl'});
let el4oqnN = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elfgQtE.formHandler.getError(`subject`) })}`);
let elSiTBG = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elEcZ83 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKmhkq = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfgQtE.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elfgQtE.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cndb0mT = elfgQtE.formHandler.getError(`subject`);
this.setState('stlPOJP', cndb0mT);
if (cndb0mT) { 
let elyZd1A = eo('div','3TGf',null,`class`,`alert alert-danger`);
text(elfgQtE.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elkFE3Z = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elfgQtE.formHandler.getError(`notes`) })}`);
let elcmem3 = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let el8hS0m = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let el1l4tE = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let elc2gyQ = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'stzorOl'});
}let cndaDUd = component.add == 'task';
this.setState('styoPsg', cndaDUd);
if (cndaDUd) { 
component.scheduleModal = this._lc('cHObApho3', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let els5RVF = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! els5RVF.formHandler) {
                    window.cfrmdlr = els5RVF.formHandler = new FormHandler(els5RVF, component);
                } else {
                    window.cfrmdlr = els5RVF.formHandler;
                }
            let cmpYhsD = this._lc('cyfi_kQdu', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'styoPsg'});
component.date = this._lc('cocjK45a0', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'styoPsg'});
let elc3FFN = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!els5RVF.formHandler.getError(`subject`) })}`);
let elejViN = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elIXbOr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elF43Hr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return els5RVF.formHandler.addError(`subject`, 'required', trans('validation.required'));}return els5RVF.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elF43Hr.value = fval(component.data.subject);
let cndFff7 = els5RVF.formHandler.getError(`subject`);
this.setState('st0EtS5', cndFff7);
if (cndFff7) { 
let elQU60h = eo('div','KAyf',null,`class`,`alert alert-danger`);
text(els5RVF.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elJaawF = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!els5RVF.formHandler.getError(`notes`) })}`);
let elC0G8W = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elyuW4s = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let eljN4tc = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elw1OPb = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'styoPsg'});
}let cnd_tPE = component.add == 'todo';
this.setState('stCrb39', cnd_tPE);
if (cnd_tPE) { 
component.scheduleModal = this._lc('cZU9owUZq', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elhudjK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elhudjK.formHandler) {
                    window.cfrmdlr = elhudjK.formHandler = new FormHandler(elhudjK, component);
                } else {
                    window.cfrmdlr = elhudjK.formHandler;
                }
            component.todoDropdownList = this._lc('ciVqQoXCf', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'stCrb39'});
component.date = this._lc('ct3jSLCY5', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stCrb39'});
let elIyBfe = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elhudjK.formHandler.getError(`subject`) })}`);
let el7I3Fv = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elggpJ_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ellzY1g = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhudjK.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elhudjK.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
ellzY1g.value = fval(component.data.subject);
let cndIcu6 = elhudjK.formHandler.getError(`subject`);
this.setState('stT0v49', cndIcu6);
if (cndIcu6) { 
let elEVW4T = eo('div','zjvf',null,`class`,`alert alert-danger`);
text(elhudjK.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el9Hxu9 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elhudjK.formHandler.getError(`notes`) })}`);
let elnkgkC = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elOPwFc = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elAZQaN = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elhrJ0N = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'stCrb39'});
}let cndHmjV = component.newStatus;
this.setState('stA_KRI', cndHmjV);
if (cndHmjV) { 
let cmpfOQb = this._lc('caG0qdrhq', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'stA_KRI'});
}
                    this.isReadyToGo();
                }
        });