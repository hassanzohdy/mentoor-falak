_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {cGhjU99F8:'flk-dropdown-list',cjWPEkJ0P:'notifications-list',cuVgeDzOt:'rewards-panel',ciSBNXLCJ:'todo-list-modal'},
                render: function (component) {
                    let elr0z1p = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let elOgxUz = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elIQ4E0 = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elE0yIx = eo('a',null,null,`title`,``,`href`,`/change-log`,`id`,`app-version`);
elE0yIx.cls = {'update-text': component.userHasNotSeenLastVersion()};

            for (let className in elE0yIx.cls) {
                elE0yIx.classList.toggle(className, elE0yIx.cls[className]);
            }  
            let elr8a4d = eo('strong');
text(Config.get('version'));
ec('strong');
let cndpXGf = component.userHasNotSeenLastVersion();
this.setState('stRcGuQ', cndpXGf);
if (cndpXGf) { 
let elsnLNs = eo('span','M1Vf',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elE0yIx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let elVhWqF = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cndG2EQ = ! component.sidebar.toggleMenu;
this.setState('stttApv', cndG2EQ);
let cndb5wo = !(cndG2EQ);
this.setState('stbW27p', cndb5wo);
if (cndG2EQ) { 
let elUQ_P0 = eo('i','tcCf',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elYXTcp = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elVhWqF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndHA3k = component.isProjectRoute();
this.setState('st9OBX6', cndHA3k);
if (cndHA3k) { 
let el9RfOe = eo('span','H1Lf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let elARLye = eo('i','KEdf',null,`class`,`${fas('suitcase') + ' mr-1 icon'}`);
ec('i');
let cndohx3 = ! component.projectLayout.sidebarIsVisible;
this.setState('stAdfEG', cndohx3);
let cndMKHr = !(cndohx3);
this.setState('st6MUnt', cndMKHr);
if (cndohx3) { 
let el6sMM8 = eo('i','yewf',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let el2du1o = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = el9RfOe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndeGQH = ! Is.empty(component.user.projects);
this.setState('stO9fS1', cndeGQH);
if (cndeGQH) { 
let elF0ANM = eo('div','HZ_f',null,`id`,`projects-list-dropdown`);
let cmpieP9 = this._lc('cGhjU99F8', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'stO9fS1'});
ec('div');
}ec('div');
let elut7xe = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndBEzD = component.user.id == 1;
this.setState('stkIOKQ', cndBEzD);
let cndfPrR = !(cndBEzD);
this.setState('stc7lcw', cndfPrR);
if (cndBEzD) { 
let elu3kci = eo('li','7y_f',null,`class`,`nav-item`);
let elQHh2O = eo('a','X5bf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let elCsoOQ = eo('i','YKKf',null,`class`,`${fas('signal') + ' orange-text icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elQHh2O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let eluFKkS = eo('li',null,null,`class`,`nav-item`);
let el_Tvey = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elfb62W = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = el_Tvey;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let elz_dNb = eo('li',null,null,`class`,`nav-item`);
let elasrKd = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let elWTmt3 = eo('i',null,null,`class`,`${fas('redo') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elasrKd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cnd4gdY = ! component.user.isLoggedIn();
this.setState('stekm1P', cnd4gdY);
let cndIHA1 = !(cnd4gdY);
this.setState('stcRezJ', cndIHA1);
if (cnd4gdY) { 
let elBejFj = eo('li','bUqf',null,`class`,`nav-item`);
let el3G9D2 = eo('a','4gsf',null,`class`,`nav-link`,`href`,`/login`);
let el0Clxa = eo('i','__xf',null,`title`,``,`class`,`${fas('sign-in-alt') + ' ml-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el0Clxa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let elugFot = eo('span','cFYf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let el4YVEq = eo('li','O7Tf',null,`class`,`nav-item`);
let elBkiYI = eo('a','R4Nf',null,`class`,`nav-link`,`href`,`/register`);
let elCMNus = eo('i','cqIf',null,`class`,`${fas('user-plus') + ' ml-1 icon'}`);
ec('i');
let elbBosL = eo('span','bbBf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let elm_6fe = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elSvlco = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elSvlco;
let elSVvrg = eo('i',null,null,`class`,`${fas('bell') + ' bell icon'}`);
elSVvrg.cls = {empty: component.user.notifications == 0};

            for (let className in elSVvrg.cls) {
                elSVvrg.classList.toggle(className, elSVvrg.cls[className]);
            }  
            ec('i');
let cndlF5F = component.user.notifications > 0;
this.setState('stuU6wK', cndlF5F);
if (cndlF5F) { 
let el8sut3 = eo('span','2LQf',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cndhCun = component.showNotifications;
this.setState('stzS2NG', cndhCun);
if (cndhCun) { 
let cmpXrlN = this._lc('cjWPEkJ0P', {parent:component,state:'stzS2NG'});
}ec('li');

                    setTimeout(function () {
                        let $el = elm_6fe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let eldKTOi = eo('li',null,null,`class`,`nav-item`);
let el5xuMu = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cnddDYm = component.user.image;
this.setState('stNpo5m', cnddDYm);
let cndF7g9 = !(cnddDYm);
this.setState('st_G7It', cndF7g9);
if (cnddDYm) { 
let el2DOm7 = ev('img','nLof',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let elhKau4 = eo('i',null,null,`class`,`${fas('user') + ' icon'}`);
ec('i');
}let elUf9Ak = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let elxisS5 = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = el5xuMu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elmx_zR = eo('li',null,null,`class`,`nav-item rewards`);
let el0YMhm = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndZjJ3 = component.user.total.rewards > 0;
this.setState('stH4UPJ', cndZjJ3);
let cndgNhk = component.user.gold >= 10000;
this.setState('stKd6qb', cndgNhk);
let cndByu9 = !(cndZjJ3||cndgNhk);
this.setState('stMAndm', cndByu9);
if (cndZjJ3) { 
let el4nOcQ = eo('span','2jxf',null,`class`,`bold badge badge-danger total`);
let cndj1TZ = component.user.total.rewards > 99;
this.setState('stYzOHi', cndj1TZ);
let cnddW42 = !(cndj1TZ);
this.setState('stPlBJD', cnddW42);
if (cndj1TZ) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let elXjrBO = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndexYC = component.user.gold >= 1000000;
this.setState('stNaB30', cndexYC);
let cndQxt0 = cndgNhk;
this.setState('stX7lE1', cndQxt0);
let cndNNEq = !(cndexYC||cndQxt0);
this.setState('stQH4xP', cndNNEq);
if (cndexYC) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndQxt0) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = el0YMhm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndntiv = component.rewardsPanelIsOpened;
this.setState('st8h6K6', cndntiv);
if (cndntiv) { 
let cmprDgM = this._lc('cuVgeDzOt', {parent:component,state:'st8h6K6'});
}ec('li');
let eliq5bw = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let elQEmuM = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elQeqSw = eo('i',null,null,`class`,`${fas('directions') + ' icon'}`);
ec('i');
let elD3ScJ = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cnd6yQF = component.openTodoList;
this.setState('stJMR3Z', cnd6yQF);
if (cnd6yQF) { 
let cmpHMsu = this._lc('ciSBNXLCJ', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stJMR3Z'});
}
                    this.isReadyToGo();
                }
        });