_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {cNVaqY6cl:'gold-icon',cs3w2tvgq:'flk-mdb-checkbox',cjAAbSei0:'flk-mdb-checkbox',cISfz3qph:'flk-mdb-checkbox',cK7EBt9LC:'flk-mdb-checkbox',cGSl0cXz4:'gold-icon',cAlJo3Hu_:'layout',cn4lCGOSw:'flk-alert',c8MpWd3jX:'flk-datepicker',cIUmBR70B:'flk-modal',cyelkBtPe:'flk-dropdown-list',chnbdtrm7:'flk-datepicker',ciXo_uJQS:'flk-modal',c_EbwOccJ:'flk-dropdown-list',c8msiGwbz:'flk-datepicker',cZULGE6t8:'flk-modal',cmZbZVZyU:'flk-alert'},
                render: function (component) {
                    let cmp6mfK = this._lc('cAlJo3Hu_', {parent:component,content:(layout) => {let elpLKWe = eo('h1');
text(`Calendar`);
ec('h1');
let elBzYIB = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let eljhKBv = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let eledTR8 = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cnd9ySP = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('stfZOCZ', cnd9ySP);
let cnd8Zov = !(cnd9ySP);
this.setState('st8MCAw', cnd8Zov);
if (cnd9ySP) { 
let cndgtPD = ! Is.empty(FLAGS.shoppingMall);
this.setState('stJcwhR', cndgtPD);
if (cndgtPD) { 
let elAbOgZ = eo('div','EDVf',null,`class`,`m-t-4 text-center`);
let elSEAgy = eo('button','esof',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpMgJb = this._lc('cNVaqY6cl', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'stJcwhR'});
let elKit40 = eo('div','Pmqf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let elVjI1h = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let elclGF0 = eo('div',null,null,`class`,`col m-t-4`);
let el2YsiB = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let elh3qwq = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Basic`);
ec('button');
let elSb77A = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elGrYUI = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Todo`);
let cndQbFl = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('stBshz1', cndQbFl);
if (cndQbFl) { 
let elqg3vI = eo('i','6R0f',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
}ec('button');
let elGwrrM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let eldt5xA = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let elnTHXs = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let elSVOfX = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmph2So = this._lc('cs3w2tvgq', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmpcWS7 = this._lc('cjAAbSei0', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpV0n5 = this._lc('cISfz3qph', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmpjxZW = this._lc('cK7EBt9LC', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let elFxP_c = eo('div',null,null,`class`,`col`);
let elkL_9r = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elTBJGb = eo('div',null,null,`class`,`symbol`);
let elxTxun = eo('i',null,null,`class`,`circle basic`);
ec('i');
let elUN_S2 = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cnd9ehN = component.user.total.calendar.basic;
this.setState('stLyzu6', cnd9ehN);
if (cnd9ehN) { 
let elCgK8m = eo('strong','1y8f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let elz3Hb6 = eo('div',null,null,`class`,`symbol`);
let elgMLVs = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elT3ymV = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cndnAWJ = component.user.total.calendar.todo;
this.setState('st3V4eU', cndnAWJ);
if (cndnAWJ) { 
let elt9Yed = eo('strong','IpNf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elPPJaJ = eo('div',null,null,`class`,`symbol`);
let elQRhLk = eo('i',null,null,`class`,`circle task`);
ec('i');
let elYzTaC = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndX0If = component.user.total.calendar.task;
this.setState('stBemPL', cndX0If);
if (cndX0If) { 
let elHnQFT = eo('strong','ihdf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let el1Kmsd = eo('div',null,null,`class`,`symbol`);
let elV2bUG = eo('i',null,null,`class`,`${fas('hourglass-half') + ' icon'}`);
ec('i');
let elDUtwb = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cndfvGO = component.user.total.calendar.active;
this.setState('stmlUDI', cndfvGO);
if (cndfvGO) { 
let elPoqdv = eo('strong','n_Nf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let elhqNPu = eo('div',null,null,`class`,`symbol`);
let ell8pGk = eo('i',null,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
let elITINU = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cnd5y8X = component.user.total.calendar.completed;
this.setState('stOQkwh', cnd5y8X);
if (cnd5y8X) { 
let elgY1zJ = eo('strong','1UPf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let elOo6SU = eo('div',null,null,`class`,`symbol`);
let el3E59A = eo('i',null,null,`class`,`${fas('frown-open') + ' icon'}`);
ec('i');
let elTr4u8 = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndKHc6 = component.user.total.calendar.failed;
this.setState('stkRY3V', cndKHc6);
if (cndKHc6) { 
let elV16we = eo('strong','XCif',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let el4V3dM = eo('div',null,null,`class`,`symbol`);
let elg01KY = eo('i',null,null,`class`,`${fas('frown') + ' icon'}`);
ec('i');
let el5GQy8 = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cndLgcI = component.user.total.calendar.autoFailed;
this.setState('stcpsdS', cndLgcI);
if (cndLgcI) { 
let elklxzM = eo('strong','d1Df',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let elJaLxq = eo('section',null,null,`id`,`calendar`);
let elZoK7w = eo('div',null,null,`class`,`columns`);
let elQJc9B = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let elrnSlN = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left') + ' mr-2 pointer icon'}`);
ec('i');
let el2tz8r = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let elbbbVA = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right') + ' ml-2 pointer icon'}`);
ec('i');
ec('h3');
ec('div');
let ele8K2t = eo('div',null,null,`class`,`columns`);
let elc7u6T = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iixTdI = 'IYJM1Ys' + i;
let elujEhB = eo('div','zKt8jnLbZJF1' + i+iixTdI,null,`class`,`block column column-8 heading`);
elujEhB.cls = {current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elujEhB.cls) {
                elujEhB.classList.toggle(className, elujEhB.cls[className]);
            }  
            text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iimnvV = 'pg6Zyi5' + week;
let el7GScn = eo('div','DwWRh9gH4eSp' + week+iimnvV,null,`class`,`columns`);
let eloZk_g = eo('div','DC4ff'+iimnvV,null,`class`,`block column column-8 heading week-num`);
eloZk_g.cls = {current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in eloZk_g.cls) {
                eloZk_g.classList.toggle(className, eloZk_g.cls[className]);
            }  
            text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let iiGi2c = '0UY7stL' + i;
let elK2mWm = eo('div','_LwsQUkegeE1' + i+iimnvV+iiGi2c,null,`class`,`block column column-8 day`);
elK2mWm.cls = {locked: !day.editable};

            for (let className in elK2mWm.cls) {
                elK2mWm.classList.toggle(className, elK2mWm.cls[className]);
            }  
            let eldkd9V = eo('span','Ps_ff'+iimnvV+iiGi2c,null,`class`,`number`);
eldkd9V.cls = {current: day.date == component.calendarOptions.today.date};

            for (let className in eldkd9V.cls) {
                eldkd9V.classList.toggle(className, eldkd9V.cls[className]);
            }  
            text(day.number);
ec('span');
let cndy799 = day.month != component.calendarOptions.current.monthName;
this.setState('stTKWzU', cndy799);
if (cndy799) { 
let elgeAWF = eo('span','pNHff'+iimnvV+iiGi2c,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iisoUR = 'FfcLrUP' + i;
let elwafqc = eo('div','turff'+iimnvV+iiGi2c+iisoUR,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let el8Ofdf = eo('div','xo2ff'+iimnvV+iiGi2c+iisoUR,null,`class`,`label pointer`);
let elJdOwX = eo('span','8f_ff'+iimnvV+iiGi2c+iisoUR);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndNdyy = scheduleItem.status == 'active';
this.setState('stVcRP8', cndNdyy);
let cndsy6S = scheduleItem.status == 'completed';
this.setState('stn7DYe', cndsy6S);
let cndKnPC = scheduleItem.status == 'failed';
this.setState('st6ZLRi', cndKnPC);
let cndOjYq = scheduleItem.status == 'autoFailed';
this.setState('stTUjZT', cndOjYq);
if (cndNdyy) { 
let elymN3V = eo('i','eIqff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' icon icon'}`);
ec('i');
}else if (cndsy6S) { 
let elMkd9Y = eo('i','Xkcff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' icon icon'}`);
ec('i');
}else if (cndKnPC) { 
let ellvdx2 = eo('i','h1cff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' icon icon'}`);
ec('i');
}else if (cndOjYq) { 
let elmsce_ = eo('i','62xff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' icon icon'}`);
ec('i');
}ec('div');
let elZ_LhC = eo('div','YMuff'+iimnvV+iiGi2c+iisoUR,null,`class`,`details`);
elZ_LhC.cls = {open: scheduleItem.viewDetails};

            for (let className in elZ_LhC.cls) {
                elZ_LhC.classList.toggle(className, elZ_LhC.cls[className]);
            }  
            let elnLk6l = eo('div','UJlff'+iimnvV+iiGi2c+iisoUR,null,`class`,`info`);
let elSufN0 = eo('div','yT6ff'+iimnvV+iiGi2c+iisoUR,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let elXEjbC = eo('div','yHnff'+iimnvV+iiGi2c+iisoUR,null,`class`,`date detail`);
let elj881M = eo('strong','Z_hff'+iimnvV+iiGi2c+iisoUR);
text(`Ends at:`);
ec('strong');
let elKxW5Q = eo('span','5EBff'+iimnvV+iiGi2c+iisoUR);
text(scheduleItem.deadline);
ec('span');
ec('div');
let elHIStZ = eo('div','clhff'+iimnvV+iiGi2c+iisoUR,null,`class`,`type detail`);
let eljFr3b = eo('strong','ZCOff'+iimnvV+iiGi2c+iisoUR);
text(`Type:`);
ec('strong');
let eltRy3m = eo('span','CaTff'+iimnvV+iiGi2c+iisoUR,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let elIm4Lh = eo('div','UzKff'+iimnvV+iiGi2c+iisoUR,null,`class`,`status detail`);
let elH_FKf = eo('strong','D1bff'+iimnvV+iiGi2c+iisoUR);
text(`Status:`);
ec('strong');
let cndIEOp = scheduleItem.status == 'active';
this.setState('stwl4XA', cndIEOp);
let cnd7sqD = scheduleItem.status == 'completed';
this.setState('stUWqOc', cnd7sqD);
let cnd3Aqf = scheduleItem.status == 'failed';
this.setState('st0OzmI', cnd3Aqf);
let cndKHOR = scheduleItem.status == 'autoFailed';
this.setState('steo99X', cndKHOR);
if (cndIEOp) { 
let elZpnC1 = eo('i','KQIff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' v-middle icon'}`);
ec('i');
}else if (cnd7sqD) { 
let elYsfIa = eo('i','GJKff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' v-middle icon'}`);
ec('i');
}else if (cnd3Aqf) { 
let elHL_BU = eo('i','AGAff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' v-middle icon'}`);
ec('i');
}else if (cndKHOR) { 
let elPUV90 = eo('i','jydff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' v-middle icon'}`);
ec('i');
}let elxSF98 = eo('span','YKmff'+iimnvV+iiGi2c+iisoUR,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cnddiC2 = scheduleItem.notes;
this.setState('stOcpgs', cnddiC2);
let cndyPWd = scheduleItem.todo;
this.setState('sttFlZU', cndyPWd);
if (cnddiC2) { 
let elPjJLD = eo('p','iEgff'+iimnvV+iiGi2c+iisoUR,null,`class`,`notes`);
text(`❝`);
let elVPSGw = eo('span','Q22ff'+iimnvV+iiGi2c+iisoUR);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cndy3Ko = scheduleItem.task;
this.setState('st4KkRk', cndy3Ko);
let cnd_Lak = cndyPWd;
this.setState('stu9ZJO', cnd_Lak);
if (cndy3Ko) { 
let elWCOeu = eo('div','jFiff'+iimnvV+iiGi2c+iisoUR,null,`class`,`custom-type task-details`);
let elpnKCo = eo('h4','1Edff'+iimnvV+iiGi2c+iisoUR,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let eliAjU6 = eo('div','3X0ff'+iimnvV+iiGi2c+iisoUR,null,`class`,`detail title`);
let elYrNT8 = eo('strong','RECff'+iimnvV+iiGi2c+iisoUR);
text(`Title:`);
ec('strong');
let el6fg93 = eo('span','43cff'+iimnvV+iiGi2c+iisoUR);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elZ8MPP = eo('div','kMkff'+iimnvV+iiGi2c+iisoUR,null,`class`,`detail ends-at`);
let elqUDfN = eo('strong','40Tff'+iimnvV+iiGi2c+iisoUR);
text(`Ends at:`);
ec('strong');
let elvJKUk = eo('span','05wff'+iimnvV+iiGi2c+iisoUR);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let elhO4sI = eo('div','gktff'+iimnvV+iiGi2c+iisoUR,null,`class`,`detail reward`);
let el6TSIX = eo('strong','LSXff'+iimnvV+iiGi2c+iisoUR);
text(`Reward:`);
ec('strong');
let cmpsQQz = this._lc('cGSl0cXz4', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'st4KkRk',insideLoop:true,index:"" +iimnvV+iiGi2c+iisoUR});
let eluYQl_ = eo('span','yvxff'+iimnvV+iiGi2c+iisoUR,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let elGQRD_ = eo('a','19Aff'+iimnvV+iiGi2c+iisoUR,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cnd_Lak) { 
let elfb24k = eo('div','QJHff'+iimnvV+iiGi2c+iisoUR,null,`class`,`custom-type todo-details`);
let elAU_ny = eo('h4','MCaff'+iimnvV+iiGi2c+iisoUR,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let el62Ys_ = eo('div','2I0ff'+iimnvV+iiGi2c+iisoUR,null,`class`,`detail title`);
let elpXkHk = eo('strong','OVQff'+iimnvV+iiGi2c+iisoUR,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let eljewu9 = eo('span','XOhff'+iimnvV+iiGi2c+iisoUR);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let elsriDy = eo('div','Nmqff'+iimnvV+iiGi2c+iisoUR,null,`class`,`detail category`);
let eld3uTI = eo('strong','iuNff'+iimnvV+iiGi2c+iisoUR,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let elt7kEO = eo('span','qzfff'+iimnvV+iiGi2c+iisoUR);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cnd7YL4 = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('st992YH', cnd7YL4);
if (cnd7YL4) { 
let elQdxmO = eo('div','98qff'+iimnvV+iiGi2c+iisoUR,null,`class`,`text-center m-t-1`);
let eltvL1r = eo('button','0q1ff'+iimnvV+iiGi2c+iisoUR,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let el_AhGa = eo('button','UWPff'+iimnvV+iiGi2c+iisoUR,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cndusnx = component.confirm;
this.setState('st6Qesp', cndusnx);
if (cndusnx) { 
let cmphGXu = this._lc('cn4lCGOSw', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'st6Qesp'});
}let cndqVCG = component.add == 'basic';
this.setState('st_23HL', cndqVCG);
if (cndqVCG) { 
component.scheduleModal = this._lc('cIUmBR70B', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elYwDI7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elYwDI7.formHandler) {
                    window.cfrmdlr = elYwDI7.formHandler = new FormHandler(elYwDI7, component);
                } else {
                    window.cfrmdlr = elYwDI7.formHandler;
                }
            component.date = this._lc('c8MpWd3jX', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'st_23HL'});
let elrn04W = eo('div',null,null,`class`,`form-group`);
elrn04W.cls = {'group-error': !!elYwDI7.formHandler.getError(`subject`) };

            for (let className in elrn04W.cls) {
                elrn04W.classList.toggle(className, elrn04W.cls[className]);
            }  
            let elDOqiv = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elD8h0C = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQ1Rpj = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYwDI7.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elYwDI7.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cndqxg_ = elYwDI7.formHandler.getError(`subject`);
this.setState('stL__aq', cndqxg_);
if (cndqxg_) { 
let elhv2LV = eo('div','tzHf',null,`class`,`alert alert-danger`);
text(elYwDI7.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el6sl3q = eo('div',null,null,`class`,`form-group`);
el6sl3q.cls = {'group-error': !!elYwDI7.formHandler.getError(`notes`) };

            for (let className in el6sl3q.cls) {
                el6sl3q.classList.toggle(className, el6sl3q.cls[className]);
            }  
            let elF14kk = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let ela31s_ = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elpJSuw = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let elcwF2u = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'st_23HL'});
}let cndhlJS = component.add == 'task';
this.setState('sttiFER', cndhlJS);
if (cndhlJS) { 
component.scheduleModal = this._lc('ciXo_uJQS', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elXaWvZ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elXaWvZ.formHandler) {
                    window.cfrmdlr = elXaWvZ.formHandler = new FormHandler(elXaWvZ, component);
                } else {
                    window.cfrmdlr = elXaWvZ.formHandler;
                }
            let cmpq51h = this._lc('cyelkBtPe', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'sttiFER'});
component.date = this._lc('chnbdtrm7', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'sttiFER'});
let eloFKE1 = eo('div',null,null,`class`,`form-group`);
eloFKE1.cls = {'group-error': !!elXaWvZ.formHandler.getError(`subject`) };

            for (let className in eloFKE1.cls) {
                eloFKE1.classList.toggle(className, eloFKE1.cls[className]);
            }  
            let elt8M3f = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let ellHHMu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2Ignj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXaWvZ.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elXaWvZ.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
el2Ignj.value = fval(component.data.subject);
let cnd0TC7 = elXaWvZ.formHandler.getError(`subject`);
this.setState('stT5QXf', cnd0TC7);
if (cnd0TC7) { 
let elSzC0a = eo('div','N2Kf',null,`class`,`alert alert-danger`);
text(elXaWvZ.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elJTpXf = eo('div',null,null,`class`,`form-group`);
elJTpXf.cls = {'group-error': !!elXaWvZ.formHandler.getError(`notes`) };

            for (let className in elJTpXf.cls) {
                elJTpXf.classList.toggle(className, elJTpXf.cls[className]);
            }  
            let ela7CPN = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elzR3wP = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elgrp_D = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let el9r4KS = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'sttiFER'});
}let cndi2b5 = component.add == 'todo';
this.setState('stUBQWT', cndi2b5);
if (cndi2b5) { 
component.scheduleModal = this._lc('cZULGE6t8', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let el6TYrb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el6TYrb.formHandler) {
                    window.cfrmdlr = el6TYrb.formHandler = new FormHandler(el6TYrb, component);
                } else {
                    window.cfrmdlr = el6TYrb.formHandler;
                }
            component.todoDropdownList = this._lc('c_EbwOccJ', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'stUBQWT'});
component.date = this._lc('c8msiGwbz', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stUBQWT'});
let elXVWNO = eo('div',null,null,`class`,`form-group`);
elXVWNO.cls = {'group-error': !!el6TYrb.formHandler.getError(`subject`) };

            for (let className in elXVWNO.cls) {
                elXVWNO.classList.toggle(className, elXVWNO.cls[className]);
            }  
            let elyGqoD = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elMPcTG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaeR0z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6TYrb.formHandler.addError(`subject`, 'required', trans('validation.required'));}return el6TYrb.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elaeR0z.value = fval(component.data.subject);
let cnduFLl = el6TYrb.formHandler.getError(`subject`);
this.setState('stEEyfv', cnduFLl);
if (cnduFLl) { 
let elsy1YI = eo('div','wz2f',null,`class`,`alert alert-danger`);
text(el6TYrb.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elxvbGc = eo('div',null,null,`class`,`form-group`);
elxvbGc.cls = {'group-error': !!el6TYrb.formHandler.getError(`notes`) };

            for (let className in elxvbGc.cls) {
                elxvbGc.classList.toggle(className, elxvbGc.cls[className]);
            }  
            let elKqbyI = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elrH9ce = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elVycPN = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elzgH_4 = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'stUBQWT'});
}let cndG2Ot = component.newStatus;
this.setState('st8ZGy4', cndG2Ot);
if (cndG2Ot) { 
let cmpnvqs = this._lc('cmZbZVZyU', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'st8ZGy4'});
}
                    this.isReadyToGo();
                }
        });