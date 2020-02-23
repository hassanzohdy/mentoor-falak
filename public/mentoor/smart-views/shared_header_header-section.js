_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {cEupVydDN:'flk-dropdown-list',cYbIlr4FA:'notifications-list',cOsBwSXIW:'rewards-panel',clbiXBnul:'todo-list-modal'},
                render: function (component) {
                    let elcZnvi = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let el0nXGv = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elALlgG = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elsC2rK = eo('a',null,null,`title`,``,`href`,`/change-log`,`id`,`app-version`);
elsC2rK.cls = {'update-text': component.userHasNotSeenLastVersion()};

            for (let className in elsC2rK.cls) {
                elsC2rK.classList.toggle(className, elsC2rK.cls[className]);
            }  
            let elvsRse = eo('strong');
text(Config.get('version'));
ec('strong');
let cnddiYT = component.userHasNotSeenLastVersion();
this.setState('stWpSon', cnddiYT);
if (cnddiYT) { 
let elAzAwF = eo('span','v3hf',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elsC2rK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let elgoQGJ = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cndJpLb = ! component.sidebar.toggleMenu;
this.setState('stZVTt9', cndJpLb);
let cndGqjJ = !(cndJpLb);
this.setState('sthGgUn', cndGqjJ);
if (cndJpLb) { 
let el8qeeZ = eo('i','BQOf',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elWv5D9 = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elgoQGJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndDSUn = component.isProjectRoute();
this.setState('sti8sh3', cndDSUn);
if (cndDSUn) { 
let elKvnE4 = eo('span','6Ixf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let el3TVk2 = eo('i','X7Af',null,`class`,`${fas('suitcase') + ' mr-1 icon'}`);
ec('i');
let cnd0oVI = ! component.projectLayout.sidebarIsVisible;
this.setState('stEJ80h', cnd0oVI);
let cndShzl = !(cnd0oVI);
this.setState('stjyv9L', cndShzl);
if (cnd0oVI) { 
let elEr22W = eo('i','b15f',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elPFaGg = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elKvnE4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndNddp = ! Is.empty(component.user.projects);
this.setState('st_KWHs', cndNddp);
if (cndNddp) { 
let elKaMgA = eo('div','_EIf',null,`id`,`projects-list-dropdown`);
let cmpWPiV = this._lc('cEupVydDN', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'st_KWHs'});
ec('div');
}ec('div');
let elC0e6q = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndWUgX = component.user.id == 1;
this.setState('stagwn1', cndWUgX);
let cnd0B7i = !(cndWUgX);
this.setState('stlXG0k', cnd0B7i);
if (cndWUgX) { 
let el93KKZ = eo('li','T70f',null,`class`,`nav-item`);
let elrpaZB = eo('a','lIrf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let elq4zA9 = eo('i','Voaf',null,`class`,`${fas('signal') + ' orange-text icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elrpaZB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let elNbgUw = eo('li',null,null,`class`,`nav-item`);
let elrlB5j = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elngOMd = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elrlB5j;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let el3WNvw = eo('li',null,null,`class`,`nav-item`);
let elhYCm9 = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let elH8dAD = eo('i',null,null,`class`,`${fas('redo') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elhYCm9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cndAFs1 = ! component.user.isLoggedIn();
this.setState('stJQYje', cndAFs1);
let cnd_DTz = !(cndAFs1);
this.setState('st0WC31', cnd_DTz);
if (cndAFs1) { 
let el0H4e6 = eo('li','GVff',null,`class`,`nav-item`);
let el6U2xp = eo('a','gaof',null,`class`,`nav-link`,`href`,`/login`);
let elTWnQe = eo('i','feDf',null,`title`,``,`class`,`${fas('sign-in-alt') + ' ml-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elTWnQe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let eljy5IG = eo('span','bJ6f',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let elUd1JD = eo('li','Vbqf',null,`class`,`nav-item`);
let eluyppS = eo('a','Envf',null,`class`,`nav-link`,`href`,`/register`);
let elvwWC2 = eo('i','9u3f',null,`class`,`${fas('user-plus') + ' ml-1 icon'}`);
ec('i');
let elIYMA1 = eo('span','KoGf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let eludRRH = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elsGEYp = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elsGEYp;
let elc_pKK = eo('i',null,null,`class`,`${fas('bell') + ' bell icon'}`);
elc_pKK.cls = {empty: component.user.notifications == 0};

            for (let className in elc_pKK.cls) {
                elc_pKK.classList.toggle(className, elc_pKK.cls[className]);
            }  
            ec('i');
let cndyGKm = component.user.notifications > 0;
this.setState('st4Kcnq', cndyGKm);
if (cndyGKm) { 
let el7S2CF = eo('span','0kMf',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cndp1QW = component.showNotifications;
this.setState('stHadis', cndp1QW);
if (cndp1QW) { 
let cmpGGJp = this._lc('cYbIlr4FA', {parent:component,state:'stHadis'});
}ec('li');

                    setTimeout(function () {
                        let $el = eludRRH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let elP4r1P = eo('li',null,null,`class`,`nav-item`);
let elvPoCf = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cnd4jR8 = component.user.image;
this.setState('std2vvj', cnd4jR8);
let cndkvaJ = !(cnd4jR8);
this.setState('stNIN88', cndkvaJ);
if (cnd4jR8) { 
let elftrQe = ev('img','q8Ef',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let elEBLfZ = eo('i',null,null,`class`,`${fas('user') + ' icon'}`);
ec('i');
}let el25D57 = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let elhLEt9 = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = elvPoCf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elO6V8g = eo('li',null,null,`class`,`nav-item rewards`);
let elDScoi = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndMCUZ = component.user.total.rewards > 0;
this.setState('st9_TzK', cndMCUZ);
let cndu3t4 = component.user.gold >= 10000;
this.setState('stvMEbv', cndu3t4);
let cndE0qu = !(cndMCUZ||cndu3t4);
this.setState('stx1k2i', cndE0qu);
if (cndMCUZ) { 
let elZwRUA = eo('span','LPLf',null,`class`,`bold badge badge-danger total`);
let cndqqqx = component.user.total.rewards > 99;
this.setState('sti66iq', cndqqqx);
let cndqE4t = !(cndqqqx);
this.setState('stObxYw', cndqE4t);
if (cndqqqx) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let el12Gh2 = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndtG9w = component.user.gold >= 1000000;
this.setState('stetZq0', cndtG9w);
let cndU3lz = cndu3t4;
this.setState('st_cdrN', cndU3lz);
let cnd6m5m = !(cndtG9w||cndU3lz);
this.setState('st1egiX', cnd6m5m);
if (cndtG9w) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndU3lz) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = elDScoi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndhrQi = component.rewardsPanelIsOpened;
this.setState('stiXGNL', cndhrQi);
if (cndhrQi) { 
let cmpBb7N = this._lc('cOsBwSXIW', {parent:component,state:'stiXGNL'});
}ec('li');
let elqJKK2 = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let el2tCJA = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elSR3D4 = eo('i',null,null,`class`,`${fas('directions') + ' icon'}`);
ec('i');
let elCJP3S = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cndASab = component.openTodoList;
this.setState('stL3e6T', cndASab);
if (cndASab) { 
let cmpNu72 = this._lc('clbiXBnul', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stL3e6T'});
}
                    this.isReadyToGo();
                }
        });