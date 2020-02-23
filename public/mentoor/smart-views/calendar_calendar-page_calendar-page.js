_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {c3ZK69Cos:'gold-icon',cuvqI5xW7:'flk-mdb-checkbox',c2NadzBpH:'flk-mdb-checkbox',cptjz_h0x:'flk-mdb-checkbox',cmMRx01_w:'flk-mdb-checkbox',ceg_7T7oO:'gold-icon',cYSQHZZ5D:'layout',ccdaUopIr:'flk-alert',c1d_uVZtX:'flk-datepicker',cYS8RsBQg:'flk-modal',c7ZY_sD8G:'flk-dropdown-list',cm1RpJz3x:'flk-datepicker',c71AWQgZW:'flk-modal',cEU0fm5JT:'flk-dropdown-list',cCe4aFFVC:'flk-datepicker',cBqiSVIRb:'flk-modal',c69xx5Apx:'flk-alert'},
                render: function (component) {
                    let cmpWtzE = this._lc('cYSQHZZ5D', {parent:component,content:(layout) => {let elVCg1w = eo('h1');
text(`Calendar`);
ec('h1');
let elqgSkP = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let el3E0OI = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let el96PIQ = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cndTWJF = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('stHK_Uk', cndTWJF);
let cndDwhW = !(cndTWJF);
this.setState('stQsmai', cndDwhW);
if (cndTWJF) { 
let cndYXxu = ! Is.empty(FLAGS.shoppingMall);
this.setState('st2oZJY', cndYXxu);
if (cndYXxu) { 
let elRXWrl = eo('div','3dGf',null,`class`,`m-t-4 text-center`);
let elC0CRm = eo('button','cXpf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpoEe4 = this._lc('c3ZK69Cos', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'st2oZJY'});
let elumC9J = eo('div','F1cf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let eln7UOA = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let el7BELf = eo('div',null,null,`class`,`col m-t-4`);
let elnpyuM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let eljoAkC = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Basic`);
ec('button');
let elqMfdN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elYZkaK = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Todo`);
let cndxRSb = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('stWWg9W', cndxRSb);
if (cndxRSb) { 
let elvZajm = eo('i','_9cf',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
}ec('button');
let elUPpUm = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let elPH2av = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let elRpKfr = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let el4GQ2w = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmpJyCM = this._lc('cuvqI5xW7', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmpAbcB = this._lc('c2NadzBpH', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpHlHA = this._lc('cptjz_h0x', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmpVjhc = this._lc('cmMRx01_w', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let elyKgZS = eo('div',null,null,`class`,`col`);
let ell4aQt = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elrlPEz = eo('div',null,null,`class`,`symbol`);
let eloQBC6 = eo('i',null,null,`class`,`circle basic`);
ec('i');
let ela910B = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cndfJQG = component.user.total.calendar.basic;
this.setState('st0xOar', cndfJQG);
if (cndfJQG) { 
let elASASW = eo('strong','wulf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let elQx1de = eo('div',null,null,`class`,`symbol`);
let ela0izi = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elngrMA = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cndIcWt = component.user.total.calendar.todo;
this.setState('stI7D16', cndIcWt);
if (cndIcWt) { 
let el0qUNZ = eo('strong','l3cf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elehmoH = eo('div',null,null,`class`,`symbol`);
let elCtBL_ = eo('i',null,null,`class`,`circle task`);
ec('i');
let elAscCI = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndrhai = component.user.total.calendar.task;
this.setState('stRx7RY', cndrhai);
if (cndrhai) { 
let el_CuH9 = eo('strong','8Q_f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elunjQO = eo('div',null,null,`class`,`symbol`);
let elXcoSu = eo('i',null,null,`class`,`${fas('hourglass-half') + ' icon'}`);
ec('i');
let elC2bEW = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cndTwwM = component.user.total.calendar.active;
this.setState('stvjYuW', cndTwwM);
if (cndTwwM) { 
let elhlQ9q = eo('strong','EM_f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let elBSSbb = eo('div',null,null,`class`,`symbol`);
let elNExlP = eo('i',null,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
let elCSuon = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cndOnGu = component.user.total.calendar.completed;
this.setState('stCIFee', cndOnGu);
if (cndOnGu) { 
let eleFU2b = eo('strong','6r0f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let elF79cl = eo('div',null,null,`class`,`symbol`);
let elkGnxy = eo('i',null,null,`class`,`${fas('frown-open') + ' icon'}`);
ec('i');
let elSaVKF = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cnd9B_f = component.user.total.calendar.failed;
this.setState('stOmNwq', cnd9B_f);
if (cnd9B_f) { 
let elnsVci = eo('strong','mOSf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let elu8rBy = eo('div',null,null,`class`,`symbol`);
let elFkvsg = eo('i',null,null,`class`,`${fas('frown') + ' icon'}`);
ec('i');
let elqmcpy = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cnd5M_g = component.user.total.calendar.autoFailed;
this.setState('stbNois', cnd5M_g);
if (cnd5M_g) { 
let elnE9jJ = eo('strong','bBgf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let elQeO0V = eo('section',null,null,`id`,`calendar`);
let elNXAq8 = eo('div',null,null,`class`,`columns`);
let elpMZkd = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let eluQRge = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left') + ' mr-2 pointer icon'}`);
ec('i');
let eli7sKA = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let eloMNKw = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right') + ' ml-2 pointer icon'}`);
ec('i');
ec('h3');
ec('div');
let elUAbtn = eo('div',null,null,`class`,`columns`);
let elTIb7q = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iid_1q = 'uYP3UfE' + i;
let elkt7CE = eo('div','iiz8VkXvsI8q' + i+iid_1q,null,`class`,`block column column-8 heading`);
elkt7CE.cls = {current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elkt7CE.cls) {
                elkt7CE.classList.toggle(className, elkt7CE.cls[className]);
            }  
            text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iiERqm = '49MDT4D' + week;
let elQy1Nf = eo('div','MEzmiA_BZ6HK' + week+iiERqm,null,`class`,`columns`);
let elmi2qu = eo('div','ICMff'+iiERqm,null,`class`,`block column column-8 heading week-num`);
elmi2qu.cls = {current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elmi2qu.cls) {
                elmi2qu.classList.toggle(className, elmi2qu.cls[className]);
            }  
            text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let iik46P = '7B4zjc4' + i;
let elR07l_ = eo('div','DxQ5QsBd2gE_' + i+iiERqm+iik46P,null,`class`,`block column column-8 day`);
elR07l_.cls = {locked: !day.editable};

            for (let className in elR07l_.cls) {
                elR07l_.classList.toggle(className, elR07l_.cls[className]);
            }  
            let elYBmmK = eo('span','9WMff'+iiERqm+iik46P,null,`class`,`number`);
elYBmmK.cls = {current: day.date == component.calendarOptions.today.date};

            for (let className in elYBmmK.cls) {
                elYBmmK.classList.toggle(className, elYBmmK.cls[className]);
            }  
            text(day.number);
ec('span');
let cndDEp3 = day.month != component.calendarOptions.current.monthName;
this.setState('st4oget', cndDEp3);
if (cndDEp3) { 
let eleya2j = eo('span','p17ff'+iiERqm+iik46P,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iiyagN = 'DZhCCEF' + i;
let elJp1dw = eo('div','JXuff'+iiERqm+iik46P+iiyagN,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elSWEAm = eo('div','OHuff'+iiERqm+iik46P+iiyagN,null,`class`,`label pointer`);
let el3wUyu = eo('span','uZEff'+iiERqm+iik46P+iiyagN);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndkaHc = scheduleItem.status == 'active';
this.setState('stjisRa', cndkaHc);
let cndIxLd = scheduleItem.status == 'completed';
this.setState('stpLhUJ', cndIxLd);
let cndz0HK = scheduleItem.status == 'failed';
this.setState('stzjfIu', cndz0HK);
let cndwQ7n = scheduleItem.status == 'autoFailed';
this.setState('stYl75O', cndwQ7n);
if (cndkaHc) { 
let elD9Mrq = eo('i','7ZHff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' icon icon'}`);
ec('i');
}else if (cndIxLd) { 
let elrXvy9 = eo('i','GS2ff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' icon icon'}`);
ec('i');
}else if (cndz0HK) { 
let el2CGQC = eo('i','7Buff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' icon icon'}`);
ec('i');
}else if (cndwQ7n) { 
let elABzSe = eo('i','PkNff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' icon icon'}`);
ec('i');
}ec('div');
let elnFk2b = eo('div','naOff'+iiERqm+iik46P+iiyagN,null,`class`,`details`);
elnFk2b.cls = {open: scheduleItem.viewDetails};

            for (let className in elnFk2b.cls) {
                elnFk2b.classList.toggle(className, elnFk2b.cls[className]);
            }  
            let elLEZlV = eo('div','CjZff'+iiERqm+iik46P+iiyagN,null,`class`,`info`);
let elr4fR7 = eo('div','yyRff'+iiERqm+iik46P+iiyagN,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let elsXizH = eo('div','Shuff'+iiERqm+iik46P+iiyagN,null,`class`,`date detail`);
let elJPDY0 = eo('strong','S1Bff'+iiERqm+iik46P+iiyagN);
text(`Ends at:`);
ec('strong');
let el2Q8EL = eo('span','mbDff'+iiERqm+iik46P+iiyagN);
text(scheduleItem.deadline);
ec('span');
ec('div');
let el7padN = eo('div','gshff'+iiERqm+iik46P+iiyagN,null,`class`,`type detail`);
let elDCC6j = eo('strong','9s4ff'+iiERqm+iik46P+iiyagN);
text(`Type:`);
ec('strong');
let elbKhpw = eo('span','6kNff'+iiERqm+iik46P+iiyagN,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let elO3h9C = eo('div','Vo3ff'+iiERqm+iik46P+iiyagN,null,`class`,`status detail`);
let elTgy8f = eo('strong','fecff'+iiERqm+iik46P+iiyagN);
text(`Status:`);
ec('strong');
let cndgqng = scheduleItem.status == 'active';
this.setState('stgZaJ2', cndgqng);
let cndtxTu = scheduleItem.status == 'completed';
this.setState('st2jtuH', cndtxTu);
let cndBzPs = scheduleItem.status == 'failed';
this.setState('stPG6eA', cndBzPs);
let cndyciC = scheduleItem.status == 'autoFailed';
this.setState('stH0WQk', cndyciC);
if (cndgqng) { 
let elaGkZH = eo('i','oxtff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' v-middle icon'}`);
ec('i');
}else if (cndtxTu) { 
let eld2gXR = eo('i','WFJff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' v-middle icon'}`);
ec('i');
}else if (cndBzPs) { 
let elI_jVS = eo('i','Qy_ff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' v-middle icon'}`);
ec('i');
}else if (cndyciC) { 
let el6DM7Z = eo('i','8QYff'+iiERqm+iik46P+iiyagN,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' v-middle icon'}`);
ec('i');
}let el0y_lU = eo('span','PwGff'+iiERqm+iik46P+iiyagN,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cnda6q8 = scheduleItem.notes;
this.setState('stBphmY', cnda6q8);
let cndibjp = scheduleItem.todo;
this.setState('sta_Nb7', cndibjp);
if (cnda6q8) { 
let elDybcN = eo('p','lCwff'+iiERqm+iik46P+iiyagN,null,`class`,`notes`);
text(`❝`);
let elO4Aln = eo('span','9J8ff'+iiERqm+iik46P+iiyagN);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cndHehe = scheduleItem.task;
this.setState('stHY5rS', cndHehe);
let cndb2oE = cndibjp;
this.setState('stnvT4I', cndb2oE);
if (cndHehe) { 
let elGcsA2 = eo('div','yVyff'+iiERqm+iik46P+iiyagN,null,`class`,`custom-type task-details`);
let elxOUmw = eo('h4','tshff'+iiERqm+iik46P+iiyagN,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let el5iuuz = eo('div','UDtff'+iiERqm+iik46P+iiyagN,null,`class`,`detail title`);
let elWWEdR = eo('strong','h6mff'+iiERqm+iik46P+iiyagN);
text(`Title:`);
ec('strong');
let elgJLWz = eo('span','gdUff'+iiERqm+iik46P+iiyagN);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elmwTHL = eo('div','LCnff'+iiERqm+iik46P+iiyagN,null,`class`,`detail ends-at`);
let elrPrbW = eo('strong','xI5ff'+iiERqm+iik46P+iiyagN);
text(`Ends at:`);
ec('strong');
let elE9aiv = eo('span','94Rff'+iiERqm+iik46P+iiyagN);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let elMyOe6 = eo('div','0Txff'+iiERqm+iik46P+iiyagN,null,`class`,`detail reward`);
let elCUTlb = eo('strong','xDCff'+iiERqm+iik46P+iiyagN);
text(`Reward:`);
ec('strong');
let cmpWJK6 = this._lc('ceg_7T7oO', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'stHY5rS',insideLoop:true,index:"" +iiERqm+iik46P+iiyagN});
let elZ4Msc = eo('span','v6Vff'+iiERqm+iik46P+iiyagN,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let eltjDlU = eo('a','rktff'+iiERqm+iik46P+iiyagN,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cndb2oE) { 
let elJB1TV = eo('div','YDuff'+iiERqm+iik46P+iiyagN,null,`class`,`custom-type todo-details`);
let eluJ6is = eo('h4','lLUff'+iiERqm+iik46P+iiyagN,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let elTUNOF = eo('div','Dj_ff'+iiERqm+iik46P+iiyagN,null,`class`,`detail title`);
let elZ0yYc = eo('strong','7KLff'+iiERqm+iik46P+iiyagN,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let eln0m7j = eo('span','Fckff'+iiERqm+iik46P+iiyagN);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let elYq83L = eo('div','ovmff'+iiERqm+iik46P+iiyagN,null,`class`,`detail category`);
let elwLx8K = eo('strong','vaeff'+iiERqm+iik46P+iiyagN,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let elf7o9s = eo('span','SUtff'+iiERqm+iik46P+iiyagN);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cndEGMI = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('steflfw', cndEGMI);
if (cndEGMI) { 
let eluhusU = eo('div','rpvff'+iiERqm+iik46P+iiyagN,null,`class`,`text-center m-t-1`);
let elTBV_F = eo('button','EXmff'+iiERqm+iik46P+iiyagN,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let elBIUsH = eo('button','SxDff'+iiERqm+iik46P+iiyagN,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cnd3S5K = component.confirm;
this.setState('stiqsxS', cnd3S5K);
if (cnd3S5K) { 
let cmpm2Er = this._lc('ccdaUopIr', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stiqsxS'});
}let cnd9EZU = component.add == 'basic';
this.setState('stJ3XLr', cnd9EZU);
if (cnd9EZU) { 
component.scheduleModal = this._lc('cYS8RsBQg', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elvsH7n = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvsH7n.formHandler) {
                    window.cfrmdlr = elvsH7n.formHandler = new FormHandler(elvsH7n, component);
                } else {
                    window.cfrmdlr = elvsH7n.formHandler;
                }
            component.date = this._lc('c1d_uVZtX', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stJ3XLr'});
let elPi53A = eo('div',null,null,`class`,`form-group`);
elPi53A.cls = {'group-error': !!elvsH7n.formHandler.getError(`subject`) };

            for (let className in elPi53A.cls) {
                elPi53A.classList.toggle(className, elPi53A.cls[className]);
            }  
            let elreVnh = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elnNgJX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eli29Vn = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvsH7n.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elvsH7n.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cndTJrE = elvsH7n.formHandler.getError(`subject`);
this.setState('st94fKf', cndTJrE);
if (cndTJrE) { 
let eljI3Te = eo('div','oEFf',null,`class`,`alert alert-danger`);
text(elvsH7n.formHandler.getError(`subject`));
ec('div');
}ec('div');
let ellXyKy = eo('div',null,null,`class`,`form-group`);
ellXyKy.cls = {'group-error': !!elvsH7n.formHandler.getError(`notes`) };

            for (let className in ellXyKy.cls) {
                ellXyKy.classList.toggle(className, ellXyKy.cls[className]);
            }  
            let elovDrO = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elOPPdr = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elWT8qS = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let elCaAiY = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'stJ3XLr'});
}let cndtPeB = component.add == 'task';
this.setState('st7X4Ul', cndtPeB);
if (cndtPeB) { 
component.scheduleModal = this._lc('c71AWQgZW', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elNJub0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNJub0.formHandler) {
                    window.cfrmdlr = elNJub0.formHandler = new FormHandler(elNJub0, component);
                } else {
                    window.cfrmdlr = elNJub0.formHandler;
                }
            let cmpHP99 = this._lc('c7ZY_sD8G', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'st7X4Ul'});
component.date = this._lc('cm1RpJz3x', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'st7X4Ul'});
let eliHufM = eo('div',null,null,`class`,`form-group`);
eliHufM.cls = {'group-error': !!elNJub0.formHandler.getError(`subject`) };

            for (let className in eliHufM.cls) {
                eliHufM.classList.toggle(className, eliHufM.cls[className]);
            }  
            let elLiyoE = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let el0vv3f = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhArxH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNJub0.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elNJub0.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elhArxH.value = fval(component.data.subject);
let cnd6Rca = elNJub0.formHandler.getError(`subject`);
this.setState('stRoNSf', cnd6Rca);
if (cnd6Rca) { 
let eliEHYS = eo('div','pPCf',null,`class`,`alert alert-danger`);
text(elNJub0.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elk1YPj = eo('div',null,null,`class`,`form-group`);
elk1YPj.cls = {'group-error': !!elNJub0.formHandler.getError(`notes`) };

            for (let className in elk1YPj.cls) {
                elk1YPj.classList.toggle(className, elk1YPj.cls[className]);
            }  
            let elkfodl = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elkBbDa = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elntVdE = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elNpvWz = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'st7X4Ul'});
}let cnd0KaL = component.add == 'todo';
this.setState('st5ujF8', cnd0KaL);
if (cnd0KaL) { 
component.scheduleModal = this._lc('cBqiSVIRb', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let eliJla7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eliJla7.formHandler) {
                    window.cfrmdlr = eliJla7.formHandler = new FormHandler(eliJla7, component);
                } else {
                    window.cfrmdlr = eliJla7.formHandler;
                }
            component.todoDropdownList = this._lc('cEU0fm5JT', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'st5ujF8'});
component.date = this._lc('cCe4aFFVC', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'st5ujF8'});
let el77g87 = eo('div',null,null,`class`,`form-group`);
el77g87.cls = {'group-error': !!eliJla7.formHandler.getError(`subject`) };

            for (let className in el77g87.cls) {
                el77g87.classList.toggle(className, el77g87.cls[className]);
            }  
            let el_Fd1v = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elr_jq7 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elToGjk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eliJla7.formHandler.addError(`subject`, 'required', trans('validation.required'));}return eliJla7.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elToGjk.value = fval(component.data.subject);
let cndrF0T = eliJla7.formHandler.getError(`subject`);
this.setState('stHhNlH', cndrF0T);
if (cndrF0T) { 
let elEo_ZB = eo('div','Tyif',null,`class`,`alert alert-danger`);
text(eliJla7.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el5UBOC = eo('div',null,null,`class`,`form-group`);
el5UBOC.cls = {'group-error': !!eliJla7.formHandler.getError(`notes`) };

            for (let className in el5UBOC.cls) {
                el5UBOC.classList.toggle(className, el5UBOC.cls[className]);
            }  
            let elEY7VS = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elX1fQX = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let ellHWrh = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elPH_Zh = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'st5ujF8'});
}let cnd_afG = component.newStatus;
this.setState('st1wGsi', cnd_afG);
if (cnd_afG) { 
let cmpfnEh = this._lc('c69xx5Apx', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'st1wGsi'});
}
                    this.isReadyToGo();
                }
        });