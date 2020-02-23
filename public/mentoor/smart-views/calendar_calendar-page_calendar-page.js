_Component({
                selector: 'calendar-page',
                c: 'CalendarPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','confirm','unlock','add','submit','meService','data','todoItems','newStatus','changeScheduleStatus','openAddModal','updateStatus','statusList','currentScheduleItem','displayPreviousMonth','calendarOptions','displayNextMonth'],
                children: {cFiYRLnsl:'gold-icon',cYmsirTUg:'flk-mdb-checkbox',cYzs9MezE:'flk-mdb-checkbox',c2JqbH9N2:'flk-mdb-checkbox',cPRElBEYQ:'flk-mdb-checkbox',chFVTjxKG:'gold-icon',cjGkyuUY0:'layout',c3ooMXmzr:'flk-alert',cqUPpQBKi:'flk-datepicker',cpkLXo9OT:'flk-modal',c_AaarsUc:'flk-dropdown-list',cSFqvqEnM:'flk-datepicker',cJOwyWhFV:'flk-modal',ch2fSncH6:'flk-dropdown-list',c7afBRgVn:'flk-datepicker',cp0MPwKBv:'flk-modal',cYYgDLaV6:'flk-alert'},
                render: function (component) {
                    let cmpYEYL = this._lc('cjGkyuUY0', {parent:component,content:(layout) => {let elQ4iRz = eo('h1');
text(`Calendar`);
ec('h1');
let elgKwZk = eo('p');
text(`Calendar will help you schedule your todo items into certain dates.`);
ec('p');
let el2ghTj = eo('p');
text(`This will massively increase your productivity.`);
ec('p');
let elZpAdR = eo('p');
text(`Calendar can be used to check what you've to do in certain day(s) for todo items, tasks, projects dates and
        so on.`);
ec('p');
let cnddtGm = ! component.user.isLoggedIn() || ! component.user.shoppingMall.includes('calendar');
this.setState('st_Al3W', cnddtGm);
let cndYMDI = !(cnddtGm);
this.setState('steRF3o', cndYMDI);
if (cnddtGm) { 
let cnd5Zh8 = ! Is.empty(FLAGS.shoppingMall);
this.setState('styCIZM', cnd5Zh8);
if (cnd5Zh8) { 
let elTZPzt = eo('div','R3Uf',null,`class`,`m-t-4 text-center`);
let elUPgkv = eo('button','LyEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirm = true}]},`class`,`btn btn-success`);
let cmpcEdr = this._lc('cFiYRLnsl', {parent:component,parentTop:layout,props:{coins:FLAGS.shoppingMall.calendar},state:'styCIZM'});
let elWfWTN = eo('div','FF1f',null,`class`,`bold p-l-1`);
text(`Unlock`);
ec('div');
ec('button');
ec('div');
}}else { 
let ell8UIg = eo('section',null,null,`id`,`calendar-options`,`class`,`row`);
let elWvzed = eo('div',null,null,`class`,`col m-t-4`);
let eln1NCN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('basic')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block btn btn-pink bold`);
let elSOPwM = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Basic`);
ec('button');
let elai9Mx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('todo')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-y-2 btn btn-success bold`);
let elJtwsX = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Todo`);
let cndylbv = component.user.isLoggedIn() && ! component.user.shoppingMall.includes('todo');
this.setState('stpTfTV', cndylbv);
if (cndylbv) { 
let elOCSDQ = eo('i','PaUf',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
}ec('button');
let elDxQlX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal('task')}]},`title`,`${trans(`new Schedule`)}`,`type`,`button`,`class`,`d-block m-b-1 btn btn-cyan bold`);
let elHMUa0 = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
ec('div');
let eluDJl9 = eo('div',null,null,`class`,`col m-t-4 checkbox-group`);
let el81jmY = eo('span',null,null,`class`,`m-l-2`);
text(`Show`);
ec('span');
let cmp2bsg = this._lc('cYmsirTUg', {parent:component,parentTop:layout,props:{checked:component.statusList.active},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'active');}},boolAttrs:{checked:component.statusList.active},attrs:{label:'Active'}});
let cmpTyQl = this._lc('cYzs9MezE', {parent:component,parentTop:layout,props:{checked:component.statusList.completed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'completed');}},boolAttrs:{checked:component.statusList.completed},attrs:{label:'Completed'}});
let cmpuA68 = this._lc('c2JqbH9N2', {parent:component,parentTop:layout,props:{checked:component.statusList.failed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'failed');}},boolAttrs:{checked:component.statusList.failed},attrs:{label:'Failed'}});
let cmpbakb = this._lc('cPRElBEYQ', {parent:component,parentTop:layout,props:{checked:component.statusList.autoFailed},events:{onchange:function(e) {let $el = this; component.updateStatus($el.checked,'autoFailed');}},boolAttrs:{checked:component.statusList.autoFailed},attrs:{label:'AutoFailed'}});
ec('div');
let elGt7Pm = eo('div',null,null,`class`,`col`);
let elaeEoF = eo('div',null,null,`class`,`float-right`,`id`,`symbols-list`);
let el0J5t6 = eo('div',null,null,`class`,`symbol`);
let elxD30k = eo('i',null,null,`class`,`circle basic`);
ec('i');
let elsXycg = eo('span',null,null,`class`,`text`);
text(`Basic`);
ec('span');
let cndKExj = component.user.total.calendar.basic;
this.setState('stuKXBY', cndKExj);
if (cndKExj) { 
let eljwx8_ = eo('strong','Gbyf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.basic + ')');
ec('strong');
}ec('div');
let ellV0uo = eo('div',null,null,`class`,`symbol`);
let eltPlgR = eo('i',null,null,`class`,`circle todo`);
ec('i');
let elt8GSZ = eo('span',null,null,`class`,`text`);
text(`Todo`);
ec('span');
let cnd4f5I = component.user.total.calendar.todo;
this.setState('st_8UCi', cnd4f5I);
if (cnd4f5I) { 
let elIhFqN = eo('strong','rgBf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.todo + ')');
ec('strong');
}ec('div');
let elIBxvc = eo('div',null,null,`class`,`symbol`);
let elCKB_o = eo('i',null,null,`class`,`circle task`);
ec('i');
let el_znuJ = eo('span',null,null,`class`,`text`);
text(`Task`);
ec('span');
let cndZz9v = component.user.total.calendar.task;
this.setState('stC9vMd', cndZz9v);
if (cndZz9v) { 
let els12RX = eo('strong','Q5af',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.task + ')');
ec('strong');
}ec('div');
let elXKzKH = eo('div',null,null,`class`,`symbol`);
let elM4nyz = eo('i',null,null,`class`,`${fas('hourglass-half') + ' icon'}`);
ec('i');
let el367SS = eo('span',null,null,`class`,`text`);
text(`Active`);
ec('span');
let cnddr_G = component.user.total.calendar.active;
this.setState('stZ8ovx', cnddr_G);
if (cnddr_G) { 
let elXty8t = eo('strong','qukf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.active + ')');
ec('strong');
}ec('div');
let elK1Uk7 = eo('div',null,null,`class`,`symbol`);
let eluecdd = eo('i',null,null,`class`,`${fas('check') + ' icon'}`);
ec('i');
let elVfWPk = eo('span',null,null,`class`,`text`);
text(`Completed`);
ec('span');
let cndmp7y = component.user.total.calendar.completed;
this.setState('stbOOEf', cndmp7y);
if (cndmp7y) { 
let elovhHo = eo('strong','k_Hf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.completed + ')');
ec('strong');
}ec('div');
let elXk914 = eo('div',null,null,`class`,`symbol`);
let eluRGwC = eo('i',null,null,`class`,`${fas('frown-open') + ' icon'}`);
ec('i');
let elKhIeF = eo('span',null,null,`class`,`text`);
text(`Failed`);
ec('span');
let cndYmCD = component.user.total.calendar.failed;
this.setState('stTnj03', cndYmCD);
if (cndYmCD) { 
let el0TBiy = eo('strong','qZsf',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.failed + ')');
ec('strong');
}ec('div');
let el66_fv = eo('div',null,null,`class`,`symbol`);
let elsT51U = eo('i',null,null,`class`,`${fas('frown') + ' icon'}`);
ec('i');
let elQbDtj = eo('span',null,null,`class`,`text`);
text(`Auto Failed`);
ec('span');
let cndQNfv = component.user.total.calendar.autoFailed;
this.setState('stljOBv', cndQNfv);
if (cndQNfv) { 
let elLTSOv = eo('strong','kw5f',null,`class`,`ml-1`);
text('(' + component.user.total.calendar.autoFailed + ')');
ec('strong');
}ec('div');
ec('div');
ec('div');
ec('section');
let elhTlv6 = eo('section',null,null,`id`,`calendar`);
let elHytkv = eo('div',null,null,`class`,`columns`);
let el8_m8D = eo('h3',null,null,`class`,`column column-1 bold text-center block m-b-0`);
let elu1Uc2 = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayPreviousMonth()}]},`title`,`${trans(`Previous month`)}`,`class`,`${fas('chevron-left') + ' mr-2 pointer icon'}`);
ec('i');
let elx1Ti6 = eo('div',null,null,`class`,`current-month`);
text(component.calendarOptions.current.yearMonth);
ec('div');
let ely2L4n = eo('i',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.displayNextMonth()}]},`title`,`${trans(`Next month`)}`,`class`,`${fas('chevron-right') + ' ml-2 pointer icon'}`);
ec('i');
ec('h3');
ec('div');
let elLHN67 = eo('div',null,null,`class`,`columns`);
let elHZ9bE = eo('div',null,null,`class`,`block column column-8 heading`);
text(`Weeks`);
ec('div');
for (let i in component.calendarOptions.days) {
let day = component.calendarOptions.days[i]; 
 let iiE2Ev = 'VoW0nSR' + i;
let elFm7Na = eo('div','5MBiOtF7I_md' + i+iiE2Ev,null,`class`,`block column column-8 heading`);
elFm7Na.cls = {current: component.calendarOptions.current.day == day && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in elFm7Na.cls) {
                elFm7Na.classList.toggle(className, elFm7Na.cls[className]);
            }  
            text(day);
ec('div');
}
for (let week in component.calendarOptions.weeks) {
let days = component.calendarOptions.weeks[week]; 
 let iiKpCh = '81uoV47' + week;
let elrkAUv = eo('div','85yVALBTj0fY' + week+iiKpCh,null,`class`,`columns`);
let el6hOFi = eo('div','tFtff'+iiKpCh,null,`class`,`block column column-8 heading week-num`);
el6hOFi.cls = {current: week == component.calendarOptions.current.week && component.calendarOptions.isCalendarOfThisMonth};

            for (let className in el6hOFi.cls) {
                el6hOFi.classList.toggle(className, el6hOFi.cls[className]);
            }  
            text(`Week ${ week }`);
ec('div');
for (let i in days) {
let day = days[i]; 
 let iiFqCS = 'z4JflLv' + i;
let elYnqlQ = eo('div','sVlO9F9Yvk2w' + i+iiKpCh+iiFqCS,null,`class`,`block column column-8 day`);
elYnqlQ.cls = {locked: !day.editable};

            for (let className in elYnqlQ.cls) {
                elYnqlQ.classList.toggle(className, elYnqlQ.cls[className]);
            }  
            let eleRGmm = eo('span','CEfff'+iiKpCh+iiFqCS,null,`class`,`number`);
eleRGmm.cls = {current: day.date == component.calendarOptions.today.date};

            for (let className in eleRGmm.cls) {
                eleRGmm.classList.toggle(className, eleRGmm.cls[className]);
            }  
            text(day.number);
ec('span');
let cndQyNg = day.month != component.calendarOptions.current.monthName;
this.setState('st2cVwl', cndQyNg);
if (cndQyNg) { 
let elHdqUg = eo('span','NcCff'+iiKpCh+iiFqCS,null,`class`,`month`);
text(day.month);
ec('span');
}for (let i in day.schedule) {
let scheduleItem = day.schedule[i]; 
 let iiUzg6 = 'cPvHub2' + i;
let elNTPLu = eo('div','M97ff'+iiKpCh+iiFqCS+iiUzg6,null, eventListeners, {onclick:[function(e) {var $el = this;scheduleItem.viewDetails = ! scheduleItem.viewDetails}]},`title`,`${scheduleItem.type}`,`class`,`schedule ${ scheduleItem.type }`);
let elzcif6 = eo('div','iFpff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`label pointer`);
let elfDKh7 = eo('span','Xdgff'+iiKpCh+iiFqCS+iiUzg6);
text(scheduleItem.subject.readMoreChars(13));
ec('span');
let cndMuOU = scheduleItem.status == 'active';
this.setState('st2NvhL', cndMuOU);
let cndNiE1 = scheduleItem.status == 'completed';
this.setState('stCvqpT', cndNiE1);
let cndT5TC = scheduleItem.status == 'failed';
this.setState('stJj4Ho', cndT5TC);
let cndUUY5 = scheduleItem.status == 'autoFailed';
this.setState('stydmQ2', cndUUY5);
if (cndMuOU) { 
let elhtkBF = eo('i','QlVff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' icon icon'}`);
ec('i');
}else if (cndNiE1) { 
let el8MfcH = eo('i','QIiff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' icon icon'}`);
ec('i');
}else if (cndT5TC) { 
let elf2DGK = eo('i','FBbff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' icon icon'}`);
ec('i');
}else if (cndUUY5) { 
let el7jBtk = eo('i','Srwff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' icon icon'}`);
ec('i');
}ec('div');
let el6eh5G = eo('div','MR6ff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`details`);
el6eh5G.cls = {open: scheduleItem.viewDetails};

            for (let className in el6eh5G.cls) {
                el6eh5G.classList.toggle(className, el6eh5G.cls[className]);
            }  
            let elwuxTN = eo('div','qO7ff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`info`);
let elUf8DK = eo('div','aAYff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`subject`);
text(scheduleItem.subject);
ec('div');
let eldmfdI = eo('div','daRff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`date detail`);
let ely7rLB = eo('strong','kPEff'+iiKpCh+iiFqCS+iiUzg6);
text(`Ends at:`);
ec('strong');
let elNoDZv = eo('span','86xff'+iiKpCh+iiFqCS+iiUzg6);
text(scheduleItem.deadline);
ec('span');
ec('div');
let el8TO8k = eo('div','UNwff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`type detail`);
let elQpcNR = eo('strong','uujff'+iiKpCh+iiFqCS+iiUzg6);
text(`Type:`);
ec('strong');
let elOvYRK = eo('span','e6Iff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`bold ${scheduleItem.type}`);
text(scheduleItem.type);
ec('span');
ec('div');
let elJoHuw = eo('div','rkoff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`status detail`);
let elNMCXh = eo('strong','VFZff'+iiKpCh+iiFqCS+iiUzg6);
text(`Status:`);
ec('strong');
let cndea2W = scheduleItem.status == 'active';
this.setState('st4cGIc', cndea2W);
let cndkjZR = scheduleItem.status == 'completed';
this.setState('st1Ln1P', cndkjZR);
let cndlg4x = scheduleItem.status == 'failed';
this.setState('stbQlad', cndlg4x);
let cnd3dGS = scheduleItem.status == 'autoFailed';
this.setState('strTNH1', cnd3dGS);
if (cndea2W) { 
let elaxBXD = eo('i','qYYff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('hourglass-half') + ' v-middle icon'}`);
ec('i');
}else if (cndkjZR) { 
let el_3Ocs = eo('i','hisff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('check') + ' v-middle icon'}`);
ec('i');
}else if (cndlg4x) { 
let elL7wRI = eo('i','sD4ff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown-open') + ' v-middle icon'}`);
ec('i');
}else if (cnd3dGS) { 
let elcL8w8 = eo('i','pkcff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${scheduleItem.status}`,`class`,`${fas('frown') + ' v-middle icon'}`);
ec('i');
}let eli2Xdb = eo('span','gqlff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`ml-2`);
text(scheduleItem.status);
ec('span');
ec('div');
let cndaRVE = scheduleItem.notes;
this.setState('stIk3MD', cndaRVE);
let cndXjKi = scheduleItem.todo;
this.setState('st7sQ2p', cndXjKi);
if (cndaRVE) { 
let elywYwo = eo('p','AQRff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`notes`);
text(`❝`);
let el2zPuc = eo('span','jErff'+iiKpCh+iiFqCS+iiUzg6);
text(scheduleItem.notes);
ec('span');
text(`❞`);
ec('p');
}let cnd0IfR = scheduleItem.task;
this.setState('st4ta_o', cnd0IfR);
let cnd6Knb = cndXjKi;
this.setState('str9vav', cnd6Knb);
if (cnd0IfR) { 
let elrvrRJ = eo('div','AMoff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`custom-type task-details`);
let el2Y4Kk = eo('h4','3I5ff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`bold text-center`);
text(`Task details`);
ec('h4');
let elkobtc = eo('div','3rXff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`detail title`);
let elRwDKO = eo('strong','ntVff'+iiKpCh+iiFqCS+iiUzg6);
text(`Title:`);
ec('strong');
let elsov0T = eo('span','IDaff'+iiKpCh+iiFqCS+iiUzg6);
text(scheduleItem.task.title);
ec('span');
ec('div');
let elc54fv = eo('div','X2iff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`detail ends-at`);
let el7d25H = eo('strong','_Eoff'+iiKpCh+iiFqCS+iiUzg6);
text(`Ends at:`);
ec('strong');
let elFtHeR = eo('span','P9Off'+iiKpCh+iiFqCS+iiUzg6);
text(scheduleItem.task.endsAt);
ec('span');
ec('div');
let eleEUAc = eo('div','g0_ff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`detail reward`);
let elUX0nP = eo('strong','TPPff'+iiKpCh+iiFqCS+iiUzg6);
text(`Reward:`);
ec('strong');
let cmp75Np = this._lc('chFVTjxKG', {parent:component,parentTop:layout,props:{coins:scheduleItem.task.reward},state:'st4ta_o',insideLoop:true,index:"" +iiKpCh+iiFqCS+iiUzg6});
let eleocSR = eo('span','TWgff'+iiKpCh+iiFqCS+iiUzg6,null,`title`,`${trans(`Penalty Ratio`)}`,`class`,`bold red-text`);
text(scheduleItem.task.penaltyRatio + 'x');
ec('span');
ec('div');
let el8LIT4 = eo('a','B8cff'+iiKpCh+iiFqCS+iiUzg6,null,`href`,`${URLS.task(scheduleItem.task)}`,`class`,`btn btn-cyan bold d-block text-center`);
text(`View Task`);
ec('a');
ec('div');
}else if (cnd6Knb) { 
let elABf1g = eo('div','KBEff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`custom-type todo-details`);
let elgjzbN = eo('h4','Xqqff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`bold text-center`);
text(`Todo details`);
ec('h4');
let el6pHE5 = eo('div','6IIff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`detail title`);
let elWQ4WW = eo('strong','muPff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`m-r-2`);
text(`Item:`);
ec('strong');
let elahDlO = eo('span','JbTff'+iiKpCh+iiFqCS+iiUzg6);
text(scheduleItem.todo.item);
ec('span');
ec('div');
let elRnTPO = eo('div','7B4ff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`detail category`);
let elavvCs = eo('strong','iCGff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`m-r-2`);
text(`Category:`);
ec('strong');
let ell2o8o = eo('span','9p4ff'+iiKpCh+iiFqCS+iiUzg6);
text(scheduleItem.todo.category.name);
ec('span');
ec('div');
ec('div');
}let cndxlYO = ['active', 'autoFailed'].includes(scheduleItem.status);
this.setState('strlEPz', cndxlYO);
if (cndxlYO) { 
let elSaEYg = eo('div','gkDff'+iiKpCh+iiFqCS+iiUzg6,null,`class`,`text-center m-t-1`);
let elqc0gb = eo('button','NG5ff'+iiKpCh+iiFqCS+iiUzg6,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'completed'}]},`title`,`${trans(`Mark as Completed`)}`,`type`,`button`,`class`,`btn bold btn-success`);
text(`Complete`);
ec('button');
let eliGzU_ = eo('button','cTcff'+iiKpCh+iiFqCS+iiUzg6,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentScheduleItem = scheduleItem; component.newStatus = 'failed'}]},`title`,`${trans(`Mark as Failed`)}`,`type`,`button`,`class`,`btn bold btn-danger`);
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
let cndytsc = component.confirm;
this.setState('stpsJFD', cndytsc);
if (cndytsc) { 
let cmpQVQL = this._lc('c3ooMXmzr', {parent:component,events:{onconfirm:function(e) {let $el = this; component.unlock();},onclose:function(e) {let $el = this; component.confirm = false;}},state:'stpsJFD'});
}let cndu23w = component.add == 'basic';
this.setState('stt2Kr5', cndu23w);
if (cndu23w) { 
component.scheduleModal = this._lc('cpkLXo9OT', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let el5iq0V = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el5iq0V.formHandler) {
                    window.cfrmdlr = el5iq0V.formHandler = new FormHandler(el5iq0V, component);
                } else {
                    window.cfrmdlr = el5iq0V.formHandler;
                }
            component.date = this._lc('cqUPpQBKi', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stt2Kr5'});
let elAvf6Q = eo('div',null,null,`class`,`form-group`);
elAvf6Q.cls = {'group-error': !!el5iq0V.formHandler.getError(`subject`) };

            for (let className in elAvf6Q.cls) {
                elAvf6Q.classList.toggle(className, elAvf6Q.cls[className]);
            }  
            let elYXMR1 = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let el6smA5 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elF7SyA = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5iq0V.formHandler.addError(`subject`, 'required', trans('validation.required'));}return el5iq0V.formHandler.removeError(`subject`);}]},`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
let cnd3Xh4 = el5iq0V.formHandler.getError(`subject`);
this.setState('stU8MR1', cnd3Xh4);
if (cnd3Xh4) { 
let elTxFbf = eo('div','VA7f',null,`class`,`alert alert-danger`);
text(el5iq0V.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elpU13V = eo('div',null,null,`class`,`form-group`);
elpU13V.cls = {'group-error': !!el5iq0V.formHandler.getError(`notes`) };

            for (let className in elpU13V.cls) {
                elpU13V.classList.toggle(className, elpU13V.cls[className]);
            }  
            let el3wFWk = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elIcxFP = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elBzTFH = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`basic`);
let elYuqMg = eo('button',null,null,`class`,`btn btn-pink`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new schedule',size:'small'},state:'stt2Kr5'});
}let cnd0PrF = component.add == 'task';
this.setState('stk8i69', cnd0PrF);
if (cnd0PrF) { 
component.scheduleModal = this._lc('cJOwyWhFV', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elRD7KR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elRD7KR.formHandler) {
                    window.cfrmdlr = elRD7KR.formHandler = new FormHandler(elRD7KR, component);
                } else {
                    window.cfrmdlr = elRD7KR.formHandler;
                }
            let cmpe0zr = this._lc('c_AaarsUc', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.meService},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,serviceMethod:'tasks',responseKey:'tasks',heading:'Select Task'},state:'stk8i69'});
component.date = this._lc('cSFqvqEnM', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'stk8i69'});
let elAHwMU = eo('div',null,null,`class`,`form-group`);
elAHwMU.cls = {'group-error': !!elRD7KR.formHandler.getError(`subject`) };

            for (let className in elAHwMU.cls) {
                elAHwMU.classList.toggle(className, elAHwMU.cls[className]);
            }  
            let el_uWhj = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elSs3WH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDGPDR = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRD7KR.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elRD7KR.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elDGPDR.value = fval(component.data.subject);
let cndXcsG = elRD7KR.formHandler.getError(`subject`);
this.setState('stfSi6c', cndXcsG);
if (cndXcsG) { 
let elwJ_H0 = eo('div','wcjf',null,`class`,`alert alert-danger`);
text(elRD7KR.formHandler.getError(`subject`));
ec('div');
}ec('div');
let el9XDHT = eo('div',null,null,`class`,`form-group`);
el9XDHT.cls = {'group-error': !!elRD7KR.formHandler.getError(`notes`) };

            for (let className in el9XDHT.cls) {
                el9XDHT.classList.toggle(className, el9XDHT.cls[className]);
            }  
            let elGWU4M = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let eltVOH_ = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let elephmT = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elxUgvB = eo('button',null,null,`class`,`btn btn-cyan`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new task schedule',size:'small'},state:'stk8i69'});
}let cndkrg0 = component.add == 'todo';
this.setState('st6x7We', cndkrg0);
if (cndkrg0) { 
component.scheduleModal = this._lc('cp0MPwKBv', {parent:component,events:{onclose:function(e) {let $el = this; component.add = null}},content:(flkModal) => {let elM1_D6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elM1_D6.formHandler) {
                    window.cfrmdlr = elM1_D6.formHandler = new FormHandler(elM1_D6, component);
                } else {
                    window.cfrmdlr = elM1_D6.formHandler;
                }
            component.todoDropdownList = this._lc('ch2fSncH6', {parent:component,parentTop:flkModal,props:{items:component.todoItems},events:{onselect:function(e) {let $el = this; component.data.subject = e.text}},attrs:{name:`${(`typeId`).toInputName()}`,heading:'Select Todo'},state:'st6x7We'});
component.date = this._lc('c7afBRgVn', {parent:component,parentTop:flkModal,props:{dateTime:true},attrs:{name:`${(`deadline`).toInputName()}`,label:'date',class:'form-control'},state:'st6x7We'});
let elIUW3D = eo('div',null,null,`class`,`form-group`);
elIUW3D.cls = {'group-error': !!elM1_D6.formHandler.getError(`subject`) };

            for (let className in elIUW3D.cls) {
                elIUW3D.classList.toggle(className, elIUW3D.cls[className]);
            }  
            let elK11Hk = eo('label',null,null,`for`,`subject`);
text(trans('Subject'));
let elKNGWb = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYqELK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.subject = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elM1_D6.formHandler.addError(`subject`, 'required', trans('validation.required'));}return elM1_D6.formHandler.removeError(`subject`);}]},`value`,`${fval(component.data.subject)}`,`name`,`${(`subject`).toInputName()}`,`placeholder`,`${trans(`Subject`)}`,`type`,`text`,`class`,`form-control`,`id`,`subject`);
elYqELK.value = fval(component.data.subject);
let cndb5Bq = elM1_D6.formHandler.getError(`subject`);
this.setState('sth4Nms', cndb5Bq);
if (cndb5Bq) { 
let elsydAw = eo('div','BQof',null,`class`,`alert alert-danger`);
text(elM1_D6.formHandler.getError(`subject`));
ec('div');
}ec('div');
let elcXfxR = eo('div',null,null,`class`,`form-group`);
elcXfxR.cls = {'group-error': !!elM1_D6.formHandler.getError(`notes`) };

            for (let className in elcXfxR.cls) {
                elcXfxR.classList.toggle(className, elcXfxR.cls[className]);
            }  
            let elCjuPG = eo('label',null,null,`for`,`notes`);
text(trans('Notes'));
ec('label');
let elUQF7k = eo('textarea',null,null,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
ec('textarea');
ec('div');
let el5xKzv = ev('input',null,null,`name`,`${(`type`).toInputName()}`,`type`,`hidden`,`value`,`${ component.data.type }`);
let elr95wi = eo('button',null,null,`class`,`btn btn-success`);
text(`Schedule`);
ec('button');
ec('form');
},attrs:{header:'Add new todo schedule',size:'small'},state:'st6x7We'});
}let cndePMM = component.newStatus;
this.setState('stIvLEv', cndePMM);
if (cndePMM) { 
let cmpmK_F = this._lc('cYYgDLaV6', {parent:component,events:{onclose:function(e) {let $el = this; component.newStatus = null},onconfirm:function(e) {let $el = this; component.changeScheduleStatus()}},attrs:{message:`Are you sure you want to change the status to ${ component.newStatus }, it can not be undone?`},state:'stIvLEv'});
}
                    this.isReadyToGo();
                }
        });