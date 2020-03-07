_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {cgKKXU3dV:'flk-dropdown-list',c_Zvj3ezd:'notifications-list',c8UYlY8zZ:'rewards-panel',cIkIHO_zd:'todo-list-modal'},
                render: function (component) {
                    let elA19IP = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let elYdXB4 = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elje9aB = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elNn9he = eo('a',null,null,`class`,` ${cls({'update-text': component.userHasNotSeenLastVersion()})}`,`title`,``,`href`,`/change-log`,`id`,`app-version`);
let el0GXAV = eo('strong');
text(Config.get('version'));
ec('strong');
let cndUFwA = component.userHasNotSeenLastVersion();
this.setState('stP7bvi', cndUFwA);
if (cndUFwA) { 
let elcUuwV = eo('span','LaUf',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elNn9he;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let elOhZzq = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cnd1Hbi = ! component.sidebar.toggleMenu;
this.setState('stoPicf', cnd1Hbi);
let cndekRI = !(cnd1Hbi);
this.setState('stvf0xo', cndekRI);
if (cnd1Hbi) { 
let elxy4Jt = eo('i','73qf',null,`class`,`${fas('align-justify')} icon`);
ec('i');
}else { 
let elJ0pN7 = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elOhZzq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndPVq8 = component.isProjectRoute();
this.setState('stFhnBp', cndPVq8);
if (cndPVq8) { 
let elsOH7d = eo('span','Gzsf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let elZg33x = eo('i','6UGf',null,`class`,`${fas('suitcase')} mr-1 icon`);
ec('i');
let cndBeTD = ! component.projectLayout.sidebarIsVisible;
this.setState('st6GaJ3', cndBeTD);
let cndpWwO = !(cndBeTD);
this.setState('stcugbL', cndpWwO);
if (cndBeTD) { 
let elIjV9G = eo('i','JSXf',null,`class`,`${fas('align-justify')} icon`);
ec('i');
}else { 
let eldHjAY = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elsOH7d;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndKw3A = ! Is.empty(component.user.projects);
this.setState('stG7MTZ', cndKw3A);
if (cndKw3A) { 
let elipQSo = eo('div','NUEf',null,`id`,`projects-list-dropdown`);
let cmpxUdj = this._lc('cgKKXU3dV', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'stG7MTZ'});
ec('div');
}ec('div');
let ell0gJV = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndG_bu = component.user.id == 1;
this.setState('stUSx7B', cndG_bu);
let cndbvgd = !(cndG_bu);
this.setState('stuTAx6', cndbvgd);
if (cndG_bu) { 
let elreFom = eo('li','d5af',null,`class`,`nav-item`);
let elr9dVT = eo('a','cGaf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let elLs7zf = eo('i','uXLf',null,`class`,`${fas('signal')} orange-text icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elr9dVT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let elrFnXZ = eo('li',null,null,`class`,`nav-item`);
let eleNsYF = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elo9BRX = eo('i',null,null,`class`,`${fas('question-circle')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = eleNsYF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let el9Ug_z = eo('li',null,null,`class`,`nav-item`);
let elesv7k = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let elo1YKb = eo('i',null,null,`class`,`${fas('redo')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elesv7k;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cndki9a = ! component.user.isLoggedIn();
this.setState('stdmiY9', cndki9a);
let cndmtp6 = !(cndki9a);
this.setState('stiC1iT', cndmtp6);
if (cndki9a) { 
let elfu71q = eo('li','6xhf',null,`class`,`nav-item`);
let elUTfqS = eo('a','igQf',null,`class`,`nav-link`,`href`,`/login`);
let el33Lrh = eo('i','vpBf',null,`title`,``,`class`,`${fas('sign-in-alt')} ml-1 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el33Lrh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let eljkOka = eo('span','U6vf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let elUEBSm = eo('li','Uxlf',null,`class`,`nav-item`);
let elbkQZf = eo('a','vfif',null,`class`,`nav-link`,`href`,`/register`);
let elUqqPS = eo('i','0oIf',null,`class`,`${fas('user-plus')} ml-1 icon`);
ec('i');
let elRUybC = eo('span','Z2vf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let el2YHmP = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elZfc_q = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elZfc_q;
let elAfNDg = eo('i',null,null,`class`,`${fas('bell')} bell icon  ${cls({empty: component.user.notifications == 0})}`);
ec('i');
let cndgyym = component.user.notifications > 0;
this.setState('stVnpSS', cndgyym);
if (cndgyym) { 
let el3OF_S = eo('span','1C1f',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cndLkt9 = component.showNotifications;
this.setState('stog2Cj', cndLkt9);
if (cndLkt9) { 
let cmp6UYq = this._lc('c_Zvj3ezd', {parent:component,state:'stog2Cj'});
}ec('li');

                    setTimeout(function () {
                        let $el = el2YHmP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let elgcSSN = eo('li',null,null,`class`,`nav-item`);
let el0dIGf = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cndmHO6 = component.user.image;
this.setState('stVbS7I', cndmHO6);
let cnde19U = !(cndmHO6);
this.setState('stnntmN', cnde19U);
if (cndmHO6) { 
let elVKj5_ = ev('img','Lc3f',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let elry1X1 = eo('i',null,null,`class`,`${fas('user')} icon`);
ec('i');
}let elZCplw = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let elNA6na = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = el0dIGf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elAnIED = eo('li',null,null,`class`,`nav-item rewards`);
let elkAz0b = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndVu3i = component.user.total.rewards > 0;
this.setState('st_hwIk', cndVu3i);
let cndBEvg = component.user.gold >= 10000;
this.setState('stW_KgC', cndBEvg);
let cndFC18 = !(cndVu3i||cndBEvg);
this.setState('stXTqDs', cndFC18);
if (cndVu3i) { 
let elFTBx5 = eo('span','XCIf',null,`class`,`bold badge badge-danger total`);
let cndhJgN = component.user.total.rewards > 99;
this.setState('stWL_V5', cndhJgN);
let cnd8dCL = !(cndhJgN);
this.setState('stI3Seh', cnd8dCL);
if (cndhJgN) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let elpY8pU = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndNEKh = component.user.gold >= 1000000;
this.setState('stZJEfT', cndNEKh);
let cndGw6z = cndBEvg;
this.setState('st2mdUF', cndGw6z);
let cndSIRv = !(cndNEKh||cndGw6z);
this.setState('st7tCXZ', cndSIRv);
if (cndNEKh) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndGw6z) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = elkAz0b;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndN6sz = component.rewardsPanelIsOpened;
this.setState('stjdeto', cndN6sz);
if (cndN6sz) { 
let cmpgfou = this._lc('c8UYlY8zZ', {parent:component,state:'stjdeto'});
}ec('li');
let elQK3OQ = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let el2KIVt = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elaRAf6 = eo('i',null,null,`class`,`${fas('directions')} icon`);
ec('i');
let el_BdmD = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cndo17k = component.openTodoList;
this.setState('stads_g', cndo17k);
if (cndo17k) { 
let cmpSajP = this._lc('cIkIHO_zd', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stads_g'});
}
                    this.isReadyToGo();
                }
        });