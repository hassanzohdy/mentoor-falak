_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {cnXDbrx5y:'flk-dropdown-list',c1LFS_gAo:'notifications-list',cR2lJnnD0:'rewards-panel',csMPe6ZvI:'todo-list-modal'},
                render: function (component) {
                    let elksXrZ = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let eluR8n8 = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elOAzDH = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elI4sEN = eo('a',null,null,`class`,` ${cls({'update-text': component.userHasNotSeenLastVersion()})}`,`title`,``,`href`,`/change-log`,`id`,`app-version`);
let elQZyI5 = eo('strong');
text(Config.get('version'));
ec('strong');
let cndW8Mk = component.userHasNotSeenLastVersion();
this.setState('st0ze_K', cndW8Mk);
if (cndW8Mk) { 
let elcKtuC = eo('span','Wvnf',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elI4sEN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let elkTgC5 = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cndrMxZ = ! component.sidebar.toggleMenu;
this.setState('st2ofMS', cndrMxZ);
let cndWgIY = !(cndrMxZ);
this.setState('stUAJ64', cndWgIY);
if (cndrMxZ) { 
let el40wRA = eo('i','gZzf',null,`class`,`${fas('align-justify')} icon`);
ec('i');
}else { 
let elst9XY = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elkTgC5;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cndopVB = component.isProjectRoute();
this.setState('st9azwk', cndopVB);
if (cndopVB) { 
let elIehgl = eo('span','cRjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let elrNqq8 = eo('i','kMhf',null,`class`,`${fas('suitcase')} mr-1 icon`);
ec('i');
let cndLvoy = ! component.projectLayout.sidebarIsVisible;
this.setState('stC57cs', cndLvoy);
let cndTe2L = !(cndLvoy);
this.setState('stlFuRd', cndTe2L);
if (cndLvoy) { 
let eliRckX = eo('i','GAEf',null,`class`,`${fas('align-justify')} icon`);
ec('i');
}else { 
let elCslP9 = eo('i',null,null,`class`,`${fas('times')} icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elIehgl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndELiH = ! Is.empty(component.user.projects);
this.setState('st6V7qS', cndELiH);
if (cndELiH) { 
let elbHRgo = eo('div','Ay8f',null,`id`,`projects-list-dropdown`);
let cmp4DFJ = this._lc('cnXDbrx5y', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'st6V7qS'});
ec('div');
}ec('div');
let elNQlQq = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndW3AY = component.user.id == 1;
this.setState('steYQsv', cndW3AY);
let cndFkyi = !(cndW3AY);
this.setState('stUakNz', cndFkyi);
if (cndW3AY) { 
let eljUdbv = eo('li','9P9f',null,`class`,`nav-item`);
let el0qLpr = eo('a','KyKf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let elbfJq3 = eo('i','zQlf',null,`class`,`${fas('signal')} orange-text icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = el0qLpr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let elvMydR = eo('li',null,null,`class`,`nav-item`);
let elrXxxO = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elRAYdo = eo('i',null,null,`class`,`${fas('question-circle')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elrXxxO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let elrb_56 = eo('li',null,null,`class`,`nav-item`);
let elwPdFR = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let elIP0Wc = eo('i',null,null,`class`,`${fas('redo')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elwPdFR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cndfmfK = ! component.user.isLoggedIn();
this.setState('stygdly', cndfmfK);
let cndhm7W = !(cndfmfK);
this.setState('stiPhSr', cndhm7W);
if (cndfmfK) { 
let elAXpTJ = eo('li','BFIf',null,`class`,`nav-item`);
let elzUhAG = eo('a','waXf',null,`class`,`nav-link`,`href`,`/login`);
let el4_xV8 = eo('i','WjPf',null,`title`,``,`class`,`${fas('sign-in-alt')} ml-1 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el4_xV8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let eluQRgS = eo('span','aKkf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let el0YUQs = eo('li','zlzf',null,`class`,`nav-item`);
let el5guzG = eo('a','Eiuf',null,`class`,`nav-link`,`href`,`/register`);
let elZrP8V = eo('i','k9tf',null,`class`,`${fas('user-plus')} ml-1 icon`);
ec('i');
let elM_Dnd = eo('span','Jnyf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let elAzMTO = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elCb1kk = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elCb1kk;
let eli5Ktj = eo('i',null,null,`class`,`${fas('bell')} bell icon  ${cls({empty: component.user.notifications == 0})}`);
ec('i');
let cndVUmI = component.user.notifications > 0;
this.setState('stL5uWq', cndVUmI);
if (cndVUmI) { 
let el8KJa8 = eo('span','fikf',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cndBeAR = component.showNotifications;
this.setState('stFQwyq', cndBeAR);
if (cndBeAR) { 
let cmplxck = this._lc('c1LFS_gAo', {parent:component,state:'stFQwyq'});
}ec('li');

                    setTimeout(function () {
                        let $el = elAzMTO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let ele8HiU = eo('li',null,null,`class`,`nav-item`);
let el57RkE = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cndeKHa = component.user.image;
this.setState('sthwGLe', cndeKHa);
let cndEqoC = !(cndeKHa);
this.setState('sthmuzn', cndEqoC);
if (cndeKHa) { 
let eltDdjU = ev('img','xHIf',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let elm7vXl = eo('i',null,null,`class`,`${fas('user')} icon`);
ec('i');
}let el8MbHM = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let el3kE4q = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = el57RkE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elmlGgC = eo('li',null,null,`class`,`nav-item rewards`);
let elJaSy7 = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndfJNl = component.user.total.rewards > 0;
this.setState('stacSwQ', cndfJNl);
let cnd4eEX = component.user.gold >= 10000;
this.setState('st8F99e', cnd4eEX);
let cndKv1S = !(cndfJNl||cnd4eEX);
this.setState('stq8d16', cndKv1S);
if (cndfJNl) { 
let elkK8za = eo('span','qw_f',null,`class`,`bold badge badge-danger total`);
let cndRIfZ = component.user.total.rewards > 99;
this.setState('stQL3xo', cndRIfZ);
let cndMQfR = !(cndRIfZ);
this.setState('stRNiz2', cndMQfR);
if (cndRIfZ) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let elW567a = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndgVDk = component.user.gold >= 1000000;
this.setState('stTrYKI', cndgVDk);
let cndQFKR = cnd4eEX;
this.setState('stij45N', cndQFKR);
let cndU7m2 = !(cndgVDk||cndQFKR);
this.setState('stu3FxZ', cndU7m2);
if (cndgVDk) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndQFKR) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = elJaSy7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndd5H2 = component.rewardsPanelIsOpened;
this.setState('sty_r1D', cndd5H2);
if (cndd5H2) { 
let cmpFYse = this._lc('cR2lJnnD0', {parent:component,state:'sty_r1D'});
}ec('li');
let eljYl7R = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let eldQUDk = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let eljXVv5 = eo('i',null,null,`class`,`${fas('directions')} icon`);
ec('i');
let el0WE_8 = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cnd8QFH = component.openTodoList;
this.setState('stjqEyq', cnd8QFH);
if (cnd8QFH) { 
let cmpznwf = this._lc('csMPe6ZvI', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stjqEyq'});
}
                    this.isReadyToGo();
                }
        });