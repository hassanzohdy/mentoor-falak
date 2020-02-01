_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {c4G4DLNr2:'flk-dropdown-list',cNWW436sF:'notifications-list',cCEoKIZLO:'rewards-panel',cWMKuPPZk:'todo-list-modal'},
                render: function (component) {
                    let elqbbXB = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let elegB5x = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let el1LIv8 = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elpC3ix = eo('a',null,null,`title`,``,`href`,`/change-log`,`id`,`app-version`);
elpC3ix.cls = {'update-text': component.userHasNotSeenLastVersion()};

            for (let className in elpC3ix.cls) {
                elpC3ix.classList.toggle(className, elpC3ix.cls[className]);
            }  
            let eln76Bk = eo('strong');
text(Config.get('version'));
ec('strong');
let cndMo5V = component.userHasNotSeenLastVersion();
this.setState('st9L9a9', cndMo5V);
if (cndMo5V) { 
let eljaVve = eo('span','xEIf',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elpC3ix;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let elK40Cd = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cndo9WF = ! component.sidebar.toggleMenu;
this.setState('st6QHmE', cndo9WF);
let cnd3p_H = !(cndo9WF);
this.setState('stMnnkV', cnd3p_H);
if (cndo9WF) { 
let ellLyMm = eo('i','p7hf',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elIudjb = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elK40Cd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndXWNi = component.isProjectRoute();
this.setState('st0Xy5J', cndXWNi);
if (cndXWNi) { 
let elNpdYz = eo('span','zvyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let elNUi7A = eo('i','pxYf',null,`class`,`${fas('suitcase') + ' mr-1 icon'}`);
ec('i');
let cndCSZN = ! component.projectLayout.sidebarIsVisible;
this.setState('stI1OCH', cndCSZN);
let cndK7t4 = !(cndCSZN);
this.setState('stcYKSN', cndK7t4);
if (cndCSZN) { 
let elrPmQA = eo('i','7Nff',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let el4KbJ2 = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elNpdYz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cnd36qm = ! Is.empty(component.user.projects);
this.setState('steVxS7', cnd36qm);
if (cnd36qm) { 
let el267Km = eo('div','Dulf',null,`id`,`projects-list-dropdown`);
let cmpQTfw = this._lc('c4G4DLNr2', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'steVxS7'});
ec('div');
}ec('div');
let elg8d7s = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cnd69bN = component.user.id == 1;
this.setState('stbrGDW', cnd69bN);
let cnd7ioZ = !(cnd69bN);
this.setState('stGqQHx', cnd7ioZ);
if (cnd69bN) { 
let elflSCd = eo('li','V4Mf',null,`class`,`nav-item`);
let elp92yv = eo('a','5YWf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let eldGPJE = eo('i','848f',null,`class`,`${fas('signal') + ' orange-text icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elp92yv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let els6bLH = eo('li',null,null,`class`,`nav-item`);
let elaYTEa = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elxMrVy = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elaYTEa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let elZFgss = eo('li',null,null,`class`,`nav-item`);
let elRUhBx = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let elJX7VG = eo('i',null,null,`class`,`${fas('redo') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elRUhBx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cnd3PvO = ! component.user.isLoggedIn();
this.setState('st37QgQ', cnd3PvO);
let cndOnmF = !(cnd3PvO);
this.setState('stUj1uT', cndOnmF);
if (cnd3PvO) { 
let elgfgyG = eo('li','YkUf',null,`class`,`nav-item`);
let el1YOsi = eo('a','r4ff',null,`class`,`nav-link`,`href`,`/login`);
let el_J49A = eo('i','89Hf',null,`title`,``,`class`,`${fas('sign-in-alt') + ' ml-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el_J49A;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let el4NRsf = eo('span','3TXf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let el4I2hf = eo('li','fHFf',null,`class`,`nav-item`);
let el6bMS5 = eo('a','T_Rf',null,`class`,`nav-link`,`href`,`/register`);
let elTvXTg = eo('i','TSnf',null,`class`,`${fas('user-plus') + ' ml-1 icon'}`);
ec('i');
let eldZFja = eo('span','7F6f',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let elk30we = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elJpdYE = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elJpdYE;
let elZxQzs = eo('i',null,null,`class`,`${fas('bell') + ' bell icon'}`);
elZxQzs.cls = {empty: component.user.notifications == 0};

            for (let className in elZxQzs.cls) {
                elZxQzs.classList.toggle(className, elZxQzs.cls[className]);
            }  
            ec('i');
let cndfPF7 = component.user.notifications > 0;
this.setState('stOyQvG', cndfPF7);
if (cndfPF7) { 
let elq9VnA = eo('span','j0zf',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cndQtvE = component.showNotifications;
this.setState('st_Y9ai', cndQtvE);
if (cndQtvE) { 
let cmpsOY7 = this._lc('cNWW436sF', {parent:component,state:'st_Y9ai'});
}ec('li');

                    setTimeout(function () {
                        let $el = elk30we;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let eljeeCh = eo('li',null,null,`class`,`nav-item`);
let elv_ADq = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cndMLTf = component.user.image;
this.setState('stDakfq', cndMLTf);
let cndsZzO = !(cndMLTf);
this.setState('stIKdLw', cndsZzO);
if (cndMLTf) { 
let el7VLlB = ev('img','BZRf',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let eloyqHz = eo('i',null,null,`class`,`${fas('user') + ' icon'}`);
ec('i');
}let el5jPXk = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let elVCju0 = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = elv_ADq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elZChNn = eo('li',null,null,`class`,`nav-item rewards`);
let elkUt0p = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndU8wR = component.user.total.rewards > 0;
this.setState('stp3IuT', cndU8wR);
let cndIZS_ = component.user.gold >= 10000;
this.setState('stAuf9A', cndIZS_);
let cndBPnQ = !(cndU8wR||cndIZS_);
this.setState('stFQe5g', cndBPnQ);
if (cndU8wR) { 
let elA2W2p = eo('span','XMQf',null,`class`,`bold badge badge-danger total`);
let cndKvOf = component.user.total.rewards > 99;
this.setState('stBnNOG', cndKvOf);
let cndZO_Z = !(cndKvOf);
this.setState('stGMeUn', cndZO_Z);
if (cndKvOf) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let el56oCv = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndSwkQ = component.user.gold >= 1000000;
this.setState('stvZv_B', cndSwkQ);
let cndjOCX = cndIZS_;
this.setState('stu37Xd', cndjOCX);
let cndyMRk = !(cndSwkQ||cndjOCX);
this.setState('stRiD_7', cndyMRk);
if (cndSwkQ) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndjOCX) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = elkUt0p;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndiLUs = component.rewardsPanelIsOpened;
this.setState('st_PHym', cndiLUs);
if (cndiLUs) { 
let cmpiRlm = this._lc('cCEoKIZLO', {parent:component,state:'st_PHym'});
}ec('li');
let el9oIv7 = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let elxEPXY = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elkGWn1 = eo('i',null,null,`class`,`${fas('directions') + ' icon'}`);
ec('i');
let elNtW84 = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cndL90Q = component.openTodoList;
this.setState('stS8E23', cndL90Q);
if (cndL90Q) { 
let cmpeEC8 = this._lc('cWMKuPPZk', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stS8E23'});
}
                    this.isReadyToGo();
                }
        });