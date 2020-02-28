_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {cToDZhuwr:'flk-dropdown-list',cNsyy7AhL:'notifications-list',cl0z5gjsV:'rewards-panel',cAk50xkuF:'todo-list-modal'},
                render: function (component) {
                    let el0Ptsf = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let elGIuFz = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elp_lYH = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elPcub7 = eo('a',null,null,`class`,` ${cls({'update-text': component.userHasNotSeenLastVersion()})}`,`title`,``,`href`,`/change-log`,`id`,`app-version`);
let eloeZEo = eo('strong');
text(Config.get('version'));
ec('strong');
let cnd9m49 = component.userHasNotSeenLastVersion();
this.setState('stfm_zU', cnd9m49);
if (cnd9m49) { 
let elXJ5bc = eo('span','ws6f',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elPcub7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let el6VhtX = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cnd_vGj = ! component.sidebar.toggleMenu;
this.setState('stcT90S', cnd_vGj);
let cnddg09 = !(cnd_vGj);
this.setState('stdrTjW', cnddg09);
if (cnd_vGj) { 
let elkRhm9 = eo('i','D_sf',null,`class`,`${fas('align-justify')} icon`);
ec('i');
}else { 
let elrQHv5 = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = el6VhtX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndPQUd = component.isProjectRoute();
this.setState('stOgD1o', cndPQUd);
if (cndPQUd) { 
let eljPrPx = eo('span','h0Yf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let el5mhcE = eo('i','mpWf',null,`class`,`${fas('suitcase')} mr-1 icon`);
ec('i');
let cnd7rVq = ! component.projectLayout.sidebarIsVisible;
this.setState('stTTbSy', cnd7rVq);
let cnd93NN = !(cnd7rVq);
this.setState('stdr9a7', cnd93NN);
if (cnd7rVq) { 
let el_xZ62 = eo('i','Q8Wf',null,`class`,`${fas('align-justify')} icon`);
ec('i');
}else { 
let elyB98L = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = eljPrPx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndHEQu = ! Is.empty(component.user.projects);
this.setState('stl7ENB', cndHEQu);
if (cndHEQu) { 
let elGbN8d = eo('div','2Kvf',null,`id`,`projects-list-dropdown`);
let cmpmYRl = this._lc('cToDZhuwr', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'stl7ENB'});
ec('div');
}ec('div');
let elN_NU5 = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndhExW = component.user.id == 1;
this.setState('std9G25', cndhExW);
let cnd7z1j = !(cndhExW);
this.setState('stejOnS', cnd7z1j);
if (cndhExW) { 
let elBB65W = eo('li','dPJf',null,`class`,`nav-item`);
let elocLmh = eo('a','1mzf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let elppVbg = eo('i','wYgf',null,`class`,`${fas('signal')} orange-text icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elocLmh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let el6bihJ = eo('li',null,null,`class`,`nav-item`);
let elnW3Ly = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elz4Pcm = eo('i',null,null,`class`,`${fas('question-circle')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elnW3Ly;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let eltXDoi = eo('li',null,null,`class`,`nav-item`);
let elvpgWR = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let elM6oF5 = eo('i',null,null,`class`,`${fas('redo')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elvpgWR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cndwRhP = ! component.user.isLoggedIn();
this.setState('st0CWpD', cndwRhP);
let cndfZQz = !(cndwRhP);
this.setState('stlakks', cndfZQz);
if (cndwRhP) { 
let elK98SZ = eo('li','dccf',null,`class`,`nav-item`);
let elBML6A = eo('a','q06f',null,`class`,`nav-link`,`href`,`/login`);
let el9rxil = eo('i','QwTf',null,`title`,``,`class`,`${fas('sign-in-alt')} ml-1 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el9rxil;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let elSQfCM = eo('span','QUwf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let elrffm4 = eo('li','DXjf',null,`class`,`nav-item`);
let elN8Y2q = eo('a','0Yrf',null,`class`,`nav-link`,`href`,`/register`);
let elbZ5b3 = eo('i','X7xf',null,`class`,`${fas('user-plus')} ml-1 icon`);
ec('i');
let elX7SsI = eo('span','JXhf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let el9tqH8 = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elGHSD1 = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elGHSD1;
let el_HJ14 = eo('i',null,null,`class`,`${fas('bell')} bell icon  ${cls({empty: component.user.notifications == 0})}`);
ec('i');
let cndeDVh = component.user.notifications > 0;
this.setState('stOhMv7', cndeDVh);
if (cndeDVh) { 
let el83zUr = eo('span','3ZBf',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cndydZ9 = component.showNotifications;
this.setState('st5ctqq', cndydZ9);
if (cndydZ9) { 
let cmpOtYy = this._lc('cNsyy7AhL', {parent:component,state:'st5ctqq'});
}ec('li');

                    setTimeout(function () {
                        let $el = el9tqH8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let el49qHD = eo('li',null,null,`class`,`nav-item`);
let elx6Ylq = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cndUPWA = component.user.image;
this.setState('stYeqgw', cndUPWA);
let cndfq5J = !(cndUPWA);
this.setState('st1CNok', cndfq5J);
if (cndUPWA) { 
let elRajTm = ev('img','Svpf',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let el2E1Gv = eo('i',null,null,`class`,`${fas('user')} icon`);
ec('i');
}let elqFQDr = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let elyGvy2 = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = elx6Ylq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elsC1jP = eo('li',null,null,`class`,`nav-item rewards`);
let elccaGc = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndsoCu = component.user.total.rewards > 0;
this.setState('stcuUoK', cndsoCu);
let cndWnQn = component.user.gold >= 10000;
this.setState('stEcGi6', cndWnQn);
let cndWGZr = !(cndsoCu||cndWnQn);
this.setState('stDyFrO', cndWGZr);
if (cndsoCu) { 
let el8Be8r = eo('span','L7pf',null,`class`,`bold badge badge-danger total`);
let cnd2HR_ = component.user.total.rewards > 99;
this.setState('stajeWf', cnd2HR_);
let cndkCZx = !(cnd2HR_);
this.setState('st625MQ', cndkCZx);
if (cnd2HR_) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let elidjO4 = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndU0El = component.user.gold >= 1000000;
this.setState('stXP2ik', cndU0El);
let cndf8oe = cndWnQn;
this.setState('stjwOLK', cndf8oe);
let cndB_Zs = !(cndU0El||cndf8oe);
this.setState('stO3SFN', cndB_Zs);
if (cndU0El) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndf8oe) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = elccaGc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndvHxy = component.rewardsPanelIsOpened;
this.setState('stdJVhl', cndvHxy);
if (cndvHxy) { 
let cmpgB8Q = this._lc('cl0z5gjsV', {parent:component,state:'stdJVhl'});
}ec('li');
let eloo7Wa = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let el616yB = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elkETJv = eo('i',null,null,`class`,`${fas('directions')} icon`);
ec('i');
let elE_J8Q = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cndRNpA = component.openTodoList;
this.setState('stRliv1', cndRNpA);
if (cndRNpA) { 
let cmp5gX0 = this._lc('cAk50xkuF', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stRliv1'});
}
                    this.isReadyToGo();
                }
        });