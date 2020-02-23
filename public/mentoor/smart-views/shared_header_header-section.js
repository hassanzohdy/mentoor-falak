_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {ci2RHT9Ub:'flk-dropdown-list',c_HrnThSC:'notifications-list',coJ1qF5Vz:'rewards-panel',cSY7YLO6r:'todo-list-modal'},
                render: function (component) {
                    let elCS4ZH = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let elt0lxo = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elh_78a = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elIOwCU = eo('a',null,null,`title`,``,`href`,`/change-log`,`id`,`app-version`);
elIOwCU.cls = {'update-text': component.userHasNotSeenLastVersion()};

            for (let className in elIOwCU.cls) {
                elIOwCU.classList.toggle(className, elIOwCU.cls[className]);
            }  
            let elRTPWa = eo('strong');
text(Config.get('version'));
ec('strong');
let cndTOP7 = component.userHasNotSeenLastVersion();
this.setState('stYRQ5l', cndTOP7);
if (cndTOP7) { 
let elE8pDj = eo('span','0rKf',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elIOwCU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let ely6pP2 = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cnd7Zct = ! component.sidebar.toggleMenu;
this.setState('stBVIos', cnd7Zct);
let cndgi8X = !(cnd7Zct);
this.setState('stKvBLw', cndgi8X);
if (cnd7Zct) { 
let eliEcwt = eo('i','aI3f',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elaF3Cs = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = ely6pP2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndsXHv = component.isProjectRoute();
this.setState('stE5VD3', cndsXHv);
if (cndsXHv) { 
let elhy2X7 = eo('span','3BVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let eltltVa = eo('i','1jef',null,`class`,`${fas('suitcase') + ' mr-1 icon'}`);
ec('i');
let cndSlPb = ! component.projectLayout.sidebarIsVisible;
this.setState('stz9_A3', cndSlPb);
let cndaMY4 = !(cndSlPb);
this.setState('st1q84V', cndaMY4);
if (cndSlPb) { 
let elKmAJJ = eo('i','6bcf',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elSgRgU = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elhy2X7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndswH5 = ! Is.empty(component.user.projects);
this.setState('stJLE33', cndswH5);
if (cndswH5) { 
let elT_01q = eo('div','jmYf',null,`id`,`projects-list-dropdown`);
let cmpVuR3 = this._lc('ci2RHT9Ub', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'stJLE33'});
ec('div');
}ec('div');
let elJQbU0 = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndwYn3 = component.user.id == 1;
this.setState('stUbqO5', cndwYn3);
let cndAf0O = !(cndwYn3);
this.setState('st4XRAy', cndAf0O);
if (cndwYn3) { 
let elkvg40 = eo('li','aghf',null,`class`,`nav-item`);
let ellEe5w = eo('a','V4Sf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let elODoZU = eo('i','H7xf',null,`class`,`${fas('signal') + ' orange-text icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = ellEe5w;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let elwiLXW = eo('li',null,null,`class`,`nav-item`);
let elZzXBK = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elpK1W2 = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elZzXBK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let eldZ4C1 = eo('li',null,null,`class`,`nav-item`);
let el61EX4 = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let el0mlHF = eo('i',null,null,`class`,`${fas('redo') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = el61EX4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cndjgq7 = ! component.user.isLoggedIn();
this.setState('st5cTvR', cndjgq7);
let cnd1Pw5 = !(cndjgq7);
this.setState('stM5FUw', cnd1Pw5);
if (cndjgq7) { 
let elvLSsE = eo('li','SmKf',null,`class`,`nav-item`);
let elcjlbh = eo('a','Lotf',null,`class`,`nav-link`,`href`,`/login`);
let elCxaiC = eo('i','IxGf',null,`title`,``,`class`,`${fas('sign-in-alt') + ' ml-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elCxaiC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let elKZeik = eo('span','iRTf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let elXTZ2z = eo('li','1P5f',null,`class`,`nav-item`);
let elTFSOd = eo('a','qPTf',null,`class`,`nav-link`,`href`,`/register`);
let elXnK8A = eo('i','Zzof',null,`class`,`${fas('user-plus') + ' ml-1 icon'}`);
ec('i');
let elckrUF = eo('span','SLrf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let elXiqIX = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let el3_RBO = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = el3_RBO;
let elnRcYr = eo('i',null,null,`class`,`${fas('bell') + ' bell icon'}`);
elnRcYr.cls = {empty: component.user.notifications == 0};

            for (let className in elnRcYr.cls) {
                elnRcYr.classList.toggle(className, elnRcYr.cls[className]);
            }  
            ec('i');
let cndz160 = component.user.notifications > 0;
this.setState('stmBLRE', cndz160);
if (cndz160) { 
let elGT72n = eo('span','dtqf',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cndFJej = component.showNotifications;
this.setState('stM27fU', cndFJej);
if (cndFJej) { 
let cmp86eP = this._lc('c_HrnThSC', {parent:component,state:'stM27fU'});
}ec('li');

                    setTimeout(function () {
                        let $el = elXiqIX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let elZSJZj = eo('li',null,null,`class`,`nav-item`);
let el44tZe = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cndKDyV = component.user.image;
this.setState('stuWzwd', cndKDyV);
let cndrGrc = !(cndKDyV);
this.setState('stou2pP', cndrGrc);
if (cndKDyV) { 
let el1V6eO = ev('img','Itjf',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let elXUx50 = eo('i',null,null,`class`,`${fas('user') + ' icon'}`);
ec('i');
}let elJl7Pn = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let el01Sfm = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = el44tZe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elCq5Nt = eo('li',null,null,`class`,`nav-item rewards`);
let elealEm = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndTc4W = component.user.total.rewards > 0;
this.setState('stuUoUO', cndTc4W);
let cnd09Ae = component.user.gold >= 10000;
this.setState('stlf1f5', cnd09Ae);
let cndA9ux = !(cndTc4W||cnd09Ae);
this.setState('stxH1Lv', cndA9ux);
if (cndTc4W) { 
let elPn9ck = eo('span','CI0f',null,`class`,`bold badge badge-danger total`);
let cnd3zfL = component.user.total.rewards > 99;
this.setState('stx9VeT', cnd3zfL);
let cndsjX3 = !(cnd3zfL);
this.setState('stKX8Hd', cndsjX3);
if (cnd3zfL) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let eltgGfz = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndYhCi = component.user.gold >= 1000000;
this.setState('stsgL3u', cndYhCi);
let cndUS6K = cnd09Ae;
this.setState('stW4BAZ', cndUS6K);
let cndjEzk = !(cndYhCi||cndUS6K);
this.setState('sthTaPY', cndjEzk);
if (cndYhCi) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndUS6K) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = elealEm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cnd5jmx = component.rewardsPanelIsOpened;
this.setState('st2GOd7', cnd5jmx);
if (cnd5jmx) { 
let cmpMPkS = this._lc('coJ1qF5Vz', {parent:component,state:'st2GOd7'});
}ec('li');
let elAO8OD = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let elHtAwh = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elj6Cma = eo('i',null,null,`class`,`${fas('directions') + ' icon'}`);
ec('i');
let elqxuXO = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cndPa9s = component.openTodoList;
this.setState('stdQqRF', cndPa9s);
if (cndPa9s) { 
let cmp_iYp = this._lc('cSY7YLO6r', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stdQqRF'});
}
                    this.isReadyToGo();
                }
        });