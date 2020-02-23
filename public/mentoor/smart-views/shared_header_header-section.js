_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {cK7IQVsgi:'flk-dropdown-list',cdHVG5Hsl:'notifications-list',cYcK1SVgX:'rewards-panel',csOk2Caj0:'todo-list-modal'},
                render: function (component) {
                    let eleKlGB = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let ellwXvC = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elFiAZn = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elNYkJY = eo('a',null,null,`title`,``,`href`,`/change-log`,`id`,`app-version`);
elNYkJY.cls = {'update-text': component.userHasNotSeenLastVersion()};

            for (let className in elNYkJY.cls) {
                elNYkJY.classList.toggle(className, elNYkJY.cls[className]);
            }  
            let el64CI5 = eo('strong');
text(Config.get('version'));
ec('strong');
let cndWXsW = component.userHasNotSeenLastVersion();
this.setState('stUjqDn', cndWXsW);
if (cndWXsW) { 
let elI8UzI = eo('span','XqFf',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elNYkJY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let el4KK90 = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cndfjVZ = ! component.sidebar.toggleMenu;
this.setState('st691_1', cndfjVZ);
let cndQHN5 = !(cndfjVZ);
this.setState('styELQZ', cndQHN5);
if (cndfjVZ) { 
let el7BTmr = eo('i','fAwf',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elN4ojI = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = el4KK90;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndKZw6 = component.isProjectRoute();
this.setState('ste2J6N', cndKZw6);
if (cndKZw6) { 
let eluzc78 = eo('span','sIff',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let el3WVhB = eo('i','wYmf',null,`class`,`${fas('suitcase') + ' mr-1 icon'}`);
ec('i');
let cndrG6B = ! component.projectLayout.sidebarIsVisible;
this.setState('stV5rfj', cndrG6B);
let cndsc8X = !(cndrG6B);
this.setState('stbMUzn', cndsc8X);
if (cndrG6B) { 
let elAKlrP = eo('i','75sf',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let el1EBHA = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = eluzc78;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndyw4o = ! Is.empty(component.user.projects);
this.setState('stuCJaW', cndyw4o);
if (cndyw4o) { 
let el8bbMg = eo('div','I1wf',null,`id`,`projects-list-dropdown`);
let cmp0fTY = this._lc('cK7IQVsgi', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'stuCJaW'});
ec('div');
}ec('div');
let elwphV7 = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndwLoa = component.user.id == 1;
this.setState('st0Bj2i', cndwLoa);
let cnduvDM = !(cndwLoa);
this.setState('stgeUN2', cnduvDM);
if (cndwLoa) { 
let elioJOQ = eo('li','a1Qf',null,`class`,`nav-item`);
let elb2ZBp = eo('a','PSWf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let el8nYmO = eo('i','Uavf',null,`class`,`${fas('signal') + ' orange-text icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elb2ZBp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let elNylkD = eo('li',null,null,`class`,`nav-item`);
let elIrIG8 = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let el_dC2r = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elIrIG8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let elpE7Nm = eo('li',null,null,`class`,`nav-item`);
let eliP08i = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let eluOHZg = eo('i',null,null,`class`,`${fas('redo') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = eliP08i;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cndllbZ = ! component.user.isLoggedIn();
this.setState('stLsadq', cndllbZ);
let cndevJK = !(cndllbZ);
this.setState('st9qdWK', cndevJK);
if (cndllbZ) { 
let ely3Rbu = eo('li','VBMf',null,`class`,`nav-item`);
let elmchtT = eo('a','lrDf',null,`class`,`nav-link`,`href`,`/login`);
let elQ3E0b = eo('i','Llcf',null,`title`,``,`class`,`${fas('sign-in-alt') + ' ml-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elQ3E0b;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let elKnNHa = eo('span','vxUf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let eldwrH_ = eo('li','GKFf',null,`class`,`nav-item`);
let elgS8Yd = eo('a','VHxf',null,`class`,`nav-link`,`href`,`/register`);
let elvgteH = eo('i','HI8f',null,`class`,`${fas('user-plus') + ' ml-1 icon'}`);
ec('i');
let el_x__h = eo('span','9Kvf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let el1lppT = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elRsckK = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elRsckK;
let eluGydt = eo('i',null,null,`class`,`${fas('bell') + ' bell icon'}`);
eluGydt.cls = {empty: component.user.notifications == 0};

            for (let className in eluGydt.cls) {
                eluGydt.classList.toggle(className, eluGydt.cls[className]);
            }  
            ec('i');
let cndyjPP = component.user.notifications > 0;
this.setState('stDLKEd', cndyjPP);
if (cndyjPP) { 
let elwf31R = eo('span','y_mf',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cnduSDH = component.showNotifications;
this.setState('stbBdVd', cnduSDH);
if (cnduSDH) { 
let cmp_bDr = this._lc('cdHVG5Hsl', {parent:component,state:'stbBdVd'});
}ec('li');

                    setTimeout(function () {
                        let $el = el1lppT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let elNkpgg = eo('li',null,null,`class`,`nav-item`);
let eleqgKm = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cndYPju = component.user.image;
this.setState('styfk2m', cndYPju);
let cndd6gt = !(cndYPju);
this.setState('stPDOgY', cndd6gt);
if (cndYPju) { 
let el3x83i = ev('img','vp4f',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let eliTcC2 = eo('i',null,null,`class`,`${fas('user') + ' icon'}`);
ec('i');
}let eli_Abs = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let elUlqIk = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = eleqgKm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elzHbGI = eo('li',null,null,`class`,`nav-item rewards`);
let elqURWz = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cnd52hd = component.user.total.rewards > 0;
this.setState('stZY2aU', cnd52hd);
let cndQbtT = component.user.gold >= 10000;
this.setState('st9BgHO', cndQbtT);
let cndQHeA = !(cnd52hd||cndQbtT);
this.setState('stsIzO7', cndQHeA);
if (cnd52hd) { 
let el5ceeR = eo('span','IbZf',null,`class`,`bold badge badge-danger total`);
let cndW_KJ = component.user.total.rewards > 99;
this.setState('st9TlKB', cndW_KJ);
let cndWLd6 = !(cndW_KJ);
this.setState('stUfEwe', cndWLd6);
if (cndW_KJ) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let ele4Rlj = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndrumM = component.user.gold >= 1000000;
this.setState('stFEqcZ', cndrumM);
let cndMItr = cndQbtT;
this.setState('stNyrhw', cndMItr);
let cnd4oHR = !(cndrumM||cndMItr);
this.setState('st3haqU', cnd4oHR);
if (cndrumM) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndMItr) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = elqURWz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndomKG = component.rewardsPanelIsOpened;
this.setState('step8E_', cndomKG);
if (cndomKG) { 
let cmpmGbb = this._lc('cYcK1SVgX', {parent:component,state:'step8E_'});
}ec('li');
let elGa1oS = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let elO__6V = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elcY1ms = eo('i',null,null,`class`,`${fas('directions') + ' icon'}`);
ec('i');
let elS6nss = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cndINAC = component.openTodoList;
this.setState('stq1s_5', cndINAC);
if (cndINAC) { 
let cmpYBUx = this._lc('csOk2Caj0', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stq1s_5'});
}
                    this.isReadyToGo();
                }
        });