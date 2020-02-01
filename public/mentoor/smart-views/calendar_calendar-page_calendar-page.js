_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {cNNObMJ58:'gold-icon',cOe025rrc:'flk-mdb-checkbox',c6Ru09A_4:'flk-mdb-checkbox',cjZhgtvD9:'flk-mdb-checkbox',cvSDN2nCV:'flk-mdb-checkbox',cBNus7VAg:'gold-icon',cUxzeijJM:'layout',c52_yfmhn:'flk-alert',cgGxe12uU:'flk-datepicker',cNxip91Z3:'flk-modal',cQv0QtTbA:'flk-dropdown-list',cCGq9MqEO:'flk-datepicker',ctf6Vazlh:'flk-modal',cvCmQisSh:'flk-dropdown-list',c_9jI3IX6:'flk-datepicker',cye5Ym7wI:'flk-modal',cg5ZZUcdv:'flk-alert'},
                render: function (component) {
                    let cmpOdZX = this._lc('cUxzeijJM', {parent:component,content:(layout) => {let eldWNm5 = eo('h1');
text(`Calendar`);
ec('h1');
let elYdUk0 = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let elRegPm = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let elTwgyL = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cndxzP9 = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('stif_wv', cndxzP9);
let cndSXKa = !(cndxzP9);
this.setState('stfid2C', cndSXKa);
if (cndxzP9) { 
let cndit_q = ! Is.empty(FLAGS.shoppingMall);
this.setState('strKQ8g', cndit_q);
if (cndit_q) { 
let el0TFk3 = eo('div','reCf',null,`class`,`m-t-4 text-center`);
let elvTfhI = eo('button','AY7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmp72cP = this._lc('cNNObMJ58', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'strKQ8g'});
let elMG_14 = eo('div','fBEf',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let elyHiMf = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let eluILNc = eo('div',null,null,`class`,`col m-t-4`);
let el57Xpr = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let el8CXq4 = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Basic`);
ec('button');
let el_kl13 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elkuZ5t = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Todo`);
let cndmGH8 = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('st0RgVw', cndmGH8);
if (cndmGH8) { 
let elPLBiw = eo('i','IS0f',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
}ec('button');
let elELYHN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let elF5ylD = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let elfweoP = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let elsqnuO = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmpqlER = this._lc('cOe025rrc', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmpiEty = this._lc('c6Ru09A_4', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpejTM = this._lc('cjZhgtvD9', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmpwo1e = this._lc('cvSDN2nCV', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let el29thl = eo('div',null,null,`class`,`col`);
let elpyKVd = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let elHZjzN = eo('div',null,null,`class`,`symbol`);
let elyhqPH = eo('i',null,null,`class`,`circle basic`);
ec('i');
let elKLpOO = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cndsU4M = component.user.total.calendar.basic;
this.setState('stQv1pA', cndsU4M);
if (cndsU4M) { 
let elKm9Cf = eo('strong','WYqf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let elliEcT = eo('div',null,null,`class`,`symbol`);
let elO0rc2 = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elZDu2x = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cndOayN = component.user.total.calendar.todo;
this.setState('stFLAOt', cndOayN);
if (cndOayN) { 
let eln2Kee = eo('strong','TR7f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elPYzXO = eo('div',null,null,`class`,`symbol`);
let elXIYYF = eo('i',null,null,`class`,`circle task`);
ec('i');
let elZpISO = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndVz5Q = component.user.total.calendar.task;
this.setState('st66NDA', cndVz5Q);
if (cndVz5Q) { 
let el4ydly = eo('strong','E9mf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elqS9St = eo('div',null,null,`class`,`symbol`);
let elGPtu4 = eo('i',null,null,`class`,`${fas('hourglass-half') + ' icon'}`);
ec('i');
let eldd3iy = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cndxjoh = component.user.total.calendar.active;
this.setState('stvjB04', cndxjoh);
if (cndxjoh) { 
let elik_uE = eo('strong','nJKf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let elWTk1p = eo('div',null,null,`class`,`symbol`);
let eljWw24 = eo('i',null,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
let eld5HmX = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cnd_nPL = component.user.total.calendar.completed;
this.setState('stq_hUR', cnd_nPL);
if (cnd_nPL) { 
let elkdYfz = eo('strong','I__f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let elIb6Ke = eo('div',null,null,`class`,`symbol`);
let el3JWbX = eo('i',null,null,`class`,`${fas('frown-open') + ' icon'}`);
ec('i');
let elyVtWj = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndRDyI = component.user.total.calendar.failed;
this.setState('st3nSjE', cndRDyI);
if (cndRDyI) { 
let elY4uYo = eo('strong','1eSf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let elzGoaY = eo('div',null,null,`class`,`symbol`);
let elHreNw = eo('i',null,null,`class`,`${fas('frown') + ' icon'}`);
ec('i');
let elOC_MA = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cndEMCC = component.user.total.calendar.autoFailed;
this.setState('stajLI2', cndEMCC);
if (cndEMCC) { 
let elEc00v = eo('strong','lYNf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let elBNHx6 = eo('section',null,null,`id`,`calendar`);
let elYiUtT = eo('div',null,null,`class`,`columns`);
let elTQUOf = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let eldHJSJ = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left') + ' mr-2 pointer icon'}`);
ec('i');
let elNV5at = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let el2LML8 = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right') + ' ml-2 pointer icon'}`);
ec('i');
ec('h3');
ec('div');
let elcuTvN = eo('div',null,null,`class`,`columns`);
let elHIj_8 = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iiNFFL = 'zjoDmUt' + i;
let elySUdO = eo('div','5uOhQTgwlju5' + i+iiNFFL,null,`class`,`block column column-8 heading`);
elySUdO.cls = {current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elySUdO.cls) {
                elySUdO.classList.toggle(className, elySUdO.cls[className]);
            }  
            text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iiohvm = 'e5Zo2lY' + week;
let elCRc0X = eo('div','Yj2m4kHhkJdZ' + week+iiohvm,null,`class`,`columns`);
let eld01iJ = eo('div','B64ff'+iiohvm,null,`class`,`block column column-8 heading week-num`);
eld01iJ.cls = {current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in eld01iJ.cls) {
                eld01iJ.classList.toggle(className, eld01iJ.cls[className]);
            }  
            text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let iiT2d8 = '4UUzwPt' + i;
let elOTgi6 = eo('div','vz8hZW9VUFla' + i+iiohvm+iiT2d8,null,`class`,`block column column-8 day`);
elOTgi6.cls = {locked: !day.editable};

            for (let className in elOTgi6.cls) {
                elOTgi6.classList.toggle(className, elOTgi6.cls[className]);
            }  
            let elmXQi8 = eo('span','qMVff'+iiohvm+iiT2d8,null,`class`,`number`);
elmXQi8.cls = {current: day.date == component.calendarOptions.today.date};

            for (let className in elmXQi8.cls) {
                elmXQi8.classList.toggle(className, elmXQi8.cls[className]);
            }  
            text(day.number);
ec('span');
let cnddO1c = day.month != component.calendarOptions.current.monthName;
this.setState('stSsoUg', cnddO1c);
if (cnddO1c) { 
let elnqsUZ = eo('span','j4Wff'+iiohvm+iiT2d8,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let ii43Tm = 'HvpfwRz' + i;
let elXLXqp = eo('div','ejQff'+iiohvm+iiT2d8+ii43Tm,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elHDmfN = eo('div','E4Jff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`label pointer`);
let el6M1w1 = eo('span','U0rff'+iiohvm+iiT2d8+ii43Tm);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndTz9p = scheduleItem.status == 'active';
this.setState('stmt5bB', cndTz9p);
let cnduBL2 = scheduleItem.status == 'completed';
this.setState('st9VaKl', cnduBL2);
let cndcy8p = scheduleItem.status == 'failed';
this.setState('stff7f1', cndcy8p);
let cndPzm5 = scheduleItem.status == 'autoFailed';
this.setState('st42ALu', cndPzm5);
if (cndTz9p) { 
let el4bjWl = eo('i','TCKff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' icon icon'}`);
ec('i');
}else if (cnduBL2) { 
let el7uIH4 = eo('i','D9bff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' icon icon'}`);
ec('i');
}else if (cndcy8p) { 
let elX152m = eo('i','iODff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' icon icon'}`);
ec('i');
}else if (cndPzm5) { 
let elC1vws = eo('i','1VMff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' icon icon'}`);
ec('i');
}ec('div');
let el_ikdd = eo('div','DQyff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`details`);
el_ikdd.cls = {open: scheduleItem.viewDetails};

            for (let className in el_ikdd.cls) {
                el_ikdd.classList.toggle(className, el_ikdd.cls[className]);
            }  
            let eltCNCd = eo('div','eOhff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`info`);
let elx7pIO = eo('div','ljFff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let elr2Orv = eo('div','YXoff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`date detail`);
let elQ8oec = eo('strong','HF3ff'+iiohvm+iiT2d8+ii43Tm);
text(`Ends at:`);
ec('strong');
let elEnEfN = eo('span','vEJff'+iiohvm+iiT2d8+ii43Tm);
text(scheduleItem.deadline);
ec('span');
ec('div');
let eloBONv = eo('div','5Dxff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`type detail`);
let elGl2NZ = eo('strong','UwOff'+iiohvm+iiT2d8+ii43Tm);
text(`Type:`);
ec('strong');
let elg5qWi = eo('span','ryqff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let eldavez = eo('div','v5Vff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`status detail`);
let elZZPvs = eo('strong','Lk_ff'+iiohvm+iiT2d8+ii43Tm);
text(`Status:`);
ec('strong');
let cndHSWy = scheduleItem.status == 'active';
this.setState('st5wiic', cndHSWy);
let cndiKBH = scheduleItem.status == 'completed';
this.setState('stZechK', cndiKBH);
let cndWKvZ = scheduleItem.status == 'failed';
this.setState('stQT9ee', cndWKvZ);
let cndZm22 = scheduleItem.status == 'autoFailed';
this.setState('stOlS8d', cndZm22);
if (cndHSWy) { 
let elLpZEJ = eo('i','RTbff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' v-middle icon'}`);
ec('i');
}else if (cndiKBH) { 
let el813Ue = eo('i','hQHff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' v-middle icon'}`);
ec('i');
}else if (cndWKvZ) { 
let elDTVvA = eo('i','J7_ff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' v-middle icon'}`);
ec('i');
}else if (cndZm22) { 
let el8wi9Q = eo('i','lI_ff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' v-middle icon'}`);
ec('i');
}let eldYy0Y = eo('span','Nyvff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cndpTtT = scheduleItem.notes;
this.setState('st57ghe', cndpTtT);
let cndBkcS = scheduleItem.todo;
this.setState('stNMhup', cndBkcS);
if (cndpTtT) { 
let eloHobl = eo('p','uAqff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`notes`);
text(`❝`);
let eloQWaZ = eo('span','mD7ff'+iiohvm+iiT2d8+ii43Tm);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cndFb0E = scheduleItem.task;
this.setState('stTZPXk', cndFb0E);
let cndAxCw = cndBkcS;
this.setState('st3nRRD', cndAxCw);
if (cndFb0E) { 
let elhe37j = eo('div','misff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`custom-type task-details`);
let elf3kgz = eo('h4','fXUff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let elQYVdD = eo('div','m5Iff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`detail title`);
let elWRA0P = eo('strong','GOfff'+iiohvm+iiT2d8+ii43Tm);
text(`Title:`);
ec('strong');
let elk3AHw = eo('span','lkiff'+iiohvm+iiT2d8+ii43Tm);
text(scheduleItem.task.title);
ec('span');
ec('div');
let el5pWOM = eo('div','VY0ff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`detail ends-at`);
let elodYUU = eo('strong','B4dff'+iiohvm+iiT2d8+ii43Tm);
text(`Ends at:`);
ec('strong');
let elwwvYM = eo('span','86off'+iiohvm+iiT2d8+ii43Tm);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let ely63wN = eo('div','EATff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`detail reward`);
let elFrrvA = eo('strong','xXTff'+iiohvm+iiT2d8+ii43Tm);
text(`Reward:`);
ec('strong');
let cmpqJlK = this._lc('cBNus7VAg', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'stTZPXk',insideLoop:true,index:"" +iiohvm+iiT2d8+ii43Tm});
let elry3dU = eo('span','qaKff'+iiohvm+iiT2d8+ii43Tm,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let elnQebq = eo('a','DqBff'+iiohvm+iiT2d8+ii43Tm,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cndAxCw) { 
let elxtBw3 = eo('div','1lhff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`custom-type todo-details`);
let elqSrSr = eo('h4','_fZff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let elYNmO1 = eo('div','lPXff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`detail title`);
let elleFGt = eo('strong','47jff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let eldAyx4 = eo('span','3ENff'+iiohvm+iiT2d8+ii43Tm);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let eltK8as = eo('div','dHGff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`detail category`);
let elTDlVj = eo('strong','vuGff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let elWWMBP = eo('span','jBTff'+iiohvm+iiT2d8+ii43Tm);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cndVngh = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('stagtII', cndVngh);
if (cndVngh) { 
let elBq5CV = eo('div','ZQ5ff'+iiohvm+iiT2d8+ii43Tm,null,`class`,`text-center m-t-1`);
let ele88UM = eo('button','pTuff'+iiohvm+iiT2d8+ii43Tm,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let elLJJuU = eo('button','bZdff'+iiohvm+iiT2d8+ii43Tm,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cnd2YMN = component.confirm;
this.setState('stlla9M', cnd2YMN);
if (cnd2YMN) { 
let cmpRvTR = this._lc('c52_yfmhn', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stlla9M'});
}let cndTLXv = component.add == 'basic';
this.setState('stKlIbD', cndTLXv);
if (cndTLXv) { 
component.scheduleModal = this._lc('cNxip91Z3', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elK7vh_ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elK7vh_.formHandler) {
                    window.cfrmdlr = elK7vh_.formHandler = new FormHandler(elK7vh_, component);
                } else {
                    window.cfrmdlr = elK7vh_.formHandler;
                }
            component.date = this._lc('cgGxe12uU', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stKlIbD'});
let ely404z = eo('div',null,null,`class`,`form-group`);
ely404z.cls = {'group-error': !!elK7vh_.formHandler.getError(`subject`) };

            for (let className in ely404z.cls) {
                ely404z.classList.toggle(className, ely404z.cls[className]);
            }  
            let elK25BE = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elaiJ0d = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elC92E8 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elK7vh_.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elK7vh_.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cnd2UFS = elK7vh_.formHandler.getError(`subject`);
this.setState('stxex4u', cnd2UFS);
if (cnd2UFS) { 
let ellBfpz = eo('div','dYtf',null,`class`,`alert alert-danger`);
text(elK7vh_.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el0nUBS = eo('div',null,null,`class`,`form-group`);
el0nUBS.cls = {'group-error': !!elK7vh_.formHandler.getError(`notes`) };

            for (let className in el0nUBS.cls) {
                el0nUBS.classList.toggle(className, el0nUBS.cls[className]);
            }  
            let elefGfT = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elOrVVm = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elNueSd = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let eldhD98 = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'stKlIbD'});
}let cndVDVz = component.add == 'task';
this.setState('stDuoYL', cndVDVz);
if (cndVDVz) { 
component.scheduleModal = this._lc('ctf6Vazlh', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elKLIFc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elKLIFc.formHandler) {
                    window.cfrmdlr = elKLIFc.formHandler = new FormHandler(elKLIFc, component);
                } else {
                    window.cfrmdlr = elKLIFc.formHandler;
                }
            let cmpoSmn = this._lc('cQv0QtTbA', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'stDuoYL'});
component.date = this._lc('cCGq9MqEO', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stDuoYL'});
let el31F9I = eo('div',null,null,`class`,`form-group`);
el31F9I.cls = {'group-error': !!elKLIFc.formHandler.getError(`subject`) };

            for (let className in el31F9I.cls) {
                el31F9I.classList.toggle(className, el31F9I.cls[className]);
            }  
            let elkNavu = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let el5L8Pf = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1yfAA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKLIFc.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elKLIFc.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
el1yfAA.value = fval(component.data.subject);
let cndIotq = elKLIFc.formHandler.getError(`subject`);
this.setState('stCA_Ds', cndIotq);
if (cndIotq) { 
let elSw59X = eo('div','8hSf',null,`class`,`alert alert-danger`);
text(elKLIFc.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el8OIhW = eo('div',null,null,`class`,`form-group`);
el8OIhW.cls = {'group-error': !!elKLIFc.formHandler.getError(`notes`) };

            for (let className in el8OIhW.cls) {
                el8OIhW.classList.toggle(className, el8OIhW.cls[className]);
            }  
            let el4b7lz = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elbseNm = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let el6jigR = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elunswW = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'stDuoYL'});
}let cndmprF = component.add == 'todo';
this.setState('stW_Pm8', cndmprF);
if (cndmprF) { 
component.scheduleModal = this._lc('cye5Ym7wI', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let el4B0s1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el4B0s1.formHandler) {
                    window.cfrmdlr = el4B0s1.formHandler = new FormHandler(el4B0s1, component);
                } else {
                    window.cfrmdlr = el4B0s1.formHandler;
                }
            component.todoDropdownList = this._lc('cvCmQisSh', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'stW_Pm8'});
component.date = this._lc('c_9jI3IX6', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stW_Pm8'});
let elojAV6 = eo('div',null,null,`class`,`form-group`);
elojAV6.cls = {'group-error': !!el4B0s1.formHandler.getError(`subject`) };

            for (let className in elojAV6.cls) {
                elojAV6.classList.toggle(className, elojAV6.cls[className]);
            }  
            let elBZC_2 = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elUGnK7 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYPG3A = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4B0s1.formHandler.addError(`subject`, 'required', trans('validation.required'));}return el4B0s1.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elYPG3A.value = fval(component.data.subject);
let cndyXvC = el4B0s1.formHandler.getError(`subject`);
this.setState('stjQVYg', cndyXvC);
if (cndyXvC) { 
let elV5E5W = eo('div','JpEf',null,`class`,`alert alert-danger`);
text(el4B0s1.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el3b4ot = eo('div',null,null,`class`,`form-group`);
el3b4ot.cls = {'group-error': !!el4B0s1.formHandler.getError(`notes`) };

            for (let className in el3b4ot.cls) {
                el3b4ot.classList.toggle(className, el3b4ot.cls[className]);
            }  
            let elmmyVI = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elqkPRH = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elLgr2T = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let el2uxYR = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'stW_Pm8'});
}let cndZd_d = component.newStatus;
this.setState('st42015', cndZd_d);
if (cndZd_d) { 
let cmpZq97 = this._lc('cg5ZZUcdv', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'st42015'});
}
                    this.isReadyToGo();
                }
        });