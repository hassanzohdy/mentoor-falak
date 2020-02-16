_Component({
                selector: 'header-section',
                c: 'Header', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userHasNotSeenLastVersion','sidebar','isProjectRoute','projectLayout','user','currentProjectId','navigateToProject','openTodoList','hasSeen','router','showNotifications','rewardsPanelIsOpened','logOut'],
                children: {cFHjyTbdk:'flk-dropdown-list',cC1ANbENp:'notifications-list',cORFv3UF9:'rewards-panel',cRy_PNpIX:'todo-list-modal'},
                render: function (component) {
                    let elwfHfA = eo('header',null,null,`class`,`navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow fixed-top`);
let elnSO_a = eo('div',null,null,`class`,`navbar-brand col-lg-2 col-md-3 m-0 p-0`);
let elQ0Dj7 = eo('a',null,null,`href`,`/`,`id`,`head-logo`);
ec('a');
let elhoojd = eo('a',null,null,`title`,``,`href`,`/change-log`,`id`,`app-version`);
elhoojd.cls = {'update-text': component.userHasNotSeenLastVersion()};

            for (let className in elhoojd.cls) {
                elhoojd.classList.toggle(className, elhoojd.cls[className]);
            }  
            let elINi4e = eo('strong');
text(Config.get('version'));
ec('strong');
let cndzS87 = component.userHasNotSeenLastVersion();
this.setState('stTZjG3', cndzS87);
if (cndzS87) { 
let elj2dXg = eo('span','B02f',null,`class`,`update-label`);
text(`UPDATE`);
ec('span');
}ec('a');

                    setTimeout(function () {
                        let $el = elhoojd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Change log')}`});
        ;
                    }, 20);                
                let elyrA22 = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.sidebar.toggle()}]},`title`,``,`class`,`sidebar-toggle`);
let cnd9uiO = ! component.sidebar.toggleMenu;
this.setState('st4M2gS', cnd9uiO);
let cnd1TKf = !(cnd9uiO);
this.setState('st3sS8V', cnd1TKf);
if (cnd9uiO) { 
let el1_qJy = eo('i','C91f',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elNZeCw = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elyrA22;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Sidebar')}`});
        ;
                    }, 20);                
                let cnd9BdW = component.isProjectRoute();
this.setState('stIWds9', cnd9BdW);
if (cnd9BdW) { 
let elcm2Z7 = eo('span','9Xhf',null, eventListeners, {onclick:[function(e) {var $el = this;component.projectLayout.toggleSidebar()}]},`title`,``,`class`,`sidebar-toggle project-sidebar-toggle lime-text`);
let elo2r7y = eo('i','5uDf',null,`class`,`${fas('suitcase') + ' mr-1 icon'}`);
ec('i');
let cndn7LA = ! component.projectLayout.sidebarIsVisible;
this.setState('st0Mg8A', cndn7LA);
let cnddCSC = !(cndn7LA);
this.setState('stfb_Q9', cnddCSC);
if (cndn7LA) { 
let elmkye7 = eo('i','_32f',null,`class`,`${fas('align-justify') + ' icon'}`);
ec('i');
}else { 
let elHXAkM = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elcm2Z7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Toggle Project Sidebar')}`});
        ;
                    }, 20);                
                }let cndnCxb = ! Is.empty(component.user.projects);
this.setState('stwNze8', cndnCxb);
if (cndnCxb) { 
let elTwbZA = eo('div','9LVf',null,`id`,`projects-list-dropdown`);
let cmpS4e9 = this._lc('cFHjyTbdk', {parent:component,props:{imageable:true,value:component.currentProjectId,items:component.user.projects},events:{onselect:function(e) {let $el = this; component.navigateToProject(e.value)}},attrs:{heading:'My Projects'},state:'stwNze8'});
ec('div');
}ec('div');
let ellWmz1 = eo('ul',null,null,`class`,`navbar-nav px-3`);
let cndk5De = component.user.id == 1;
this.setState('st6nIGl', cndk5De);
let cndcRQQ = !(cndk5De);
this.setState('stFMKlF', cndcRQQ);
if (cndk5De) { 
let ella_gw = eo('li','3okf',null,`class`,`nav-item`);
let elaiWMo = eo('a','gHBf',null,`title`,``,`class`,`nav-link`,`href`,`/top-users`);
let el05LWM = eo('i','h7cf',null,`class`,`${fas('signal') + ' orange-text icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elaiWMo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Top Users')}`});
        ;
                    }, 20);                
                ec('li');
}let elto7G7 = eo('li',null,null,`class`,`nav-item`);
let elvTOe4 = eo('a',null,null,`title`,``,`class`,`nav-link`,`href`,`/help`);
let elweB16 = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elvTOe4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                ec('li');
let eltEeRn = eo('li',null,null,`class`,`nav-item`);
let eluX64q = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.router.refresh()}]},`title`,``,`class`,`nav-link text-capitalize`);
let eltYehA = eo('i',null,null,`class`,`${fas('redo') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = eluX64q;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Refresh')}`});
        ;
                    }, 20);                
                ec('li');
let cndb5eg = ! component.user.isLoggedIn();
this.setState('stcPmN_', cndb5eg);
let cndT0F2 = !(cndb5eg);
this.setState('stcqP_8', cndT0F2);
if (cndb5eg) { 
let elfcQbv = eo('li','iVzf',null,`class`,`nav-item`);
let elxDtNF = eo('a','GN_f',null,`class`,`nav-link`,`href`,`/login`);
let elTNiSv = eo('i','ToEf',null,`title`,``,`class`,`${fas('sign-in-alt') + ' ml-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elTNiSv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Sign in')}`});
        ;
                    }, 20);                
                let eleN2oA = eo('span','Rvef',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign in`);
ec('span');
ec('a');
ec('li');
let el8e2Sm = eo('li','tzMf',null,`class`,`nav-item`);
let elgHZR8 = eo('a','jwzf',null,`class`,`nav-link`,`href`,`/register`);
let elOw4gV = eo('i','4cXf',null,`class`,`${fas('user-plus') + ' ml-1 icon'}`);
ec('i');
let el6O16z = eo('span','j3Yf',null,`class`,`d-none d-sm-inline white-text`);
text(`Sign up`);
ec('span');
ec('a');
ec('li');
}else { 
let el1HYAL = eo('li',null,null,`title`,``,`class`,`nav-item notifications`);
let elznFS6 = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.showNotifications = ! component.showNotifications;}]},`class`,`nav-link`);
component.notificationButton = elznFS6;
let el10Ypv = eo('i',null,null,`class`,`${fas('bell') + ' bell icon'}`);
el10Ypv.cls = {empty: component.user.notifications == 0};

            for (let className in el10Ypv.cls) {
                el10Ypv.classList.toggle(className, el10Ypv.cls[className]);
            }  
            ec('i');
let cndoG8n = component.user.notifications > 0;
this.setState('st4iygb', cndoG8n);
if (cndoG8n) { 
let eltiWLZ = eo('span','lh2f',null,`class`,`bold badge badge-danger total`);
text(component.user.notifications);
ec('span');
}ec('a');
let cnd0bBI = component.showNotifications;
this.setState('stO5drb', cnd0bBI);
if (cnd0bBI) { 
let cmpQnbR = this._lc('cC1ANbENp', {parent:component,state:'stO5drb'});
}ec('li');

                    setTimeout(function () {
                        let $el = el1HYAL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Notifications')}`});
        ;
                    }, 20);                
                let elRgM2K = eo('li',null,null,`class`,`nav-item`);
let el97YBP = eo('a',null,null,`title`,``,`href`,`/me`,`class`,`nav-link text-capitalize`);
let cndf7MZ = component.user.image;
this.setState('stJg5_5', cndf7MZ);
let cnd1Tdf = !(cndf7MZ);
this.setState('stYCiAY', cnd1Tdf);
if (cndf7MZ) { 
let eluivyV = ev('img','JVif',null,`src`,`${component.user.image}`,`class`,`small circle mr-2`);
}else { 
let elVPK8Y = eo('i',null,null,`class`,`${fas('user') + ' icon'}`);
ec('i');
}let eloTcdL = eo('span',null,null,`class`,`d-none d-sm-inline white-text`);
text(component.user.firstName || component.user.name);
ec('span');
let el1UWHw = eo('span',null,null,`class`,`d-sm-none bold white-text text-uppercase`);
text(component.user.firstName && component.user.lastName ? component.user.firstName[0] + component.user.lastName[0] : component.user.name[0]);
ec('span');
ec('a');

                    setTimeout(function () {
                        let $el = el97YBP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('View Profile')}`});
        ;
                    }, 20);                
                ec('li');
let elxiE4s = eo('li',null,null,`class`,`nav-item rewards`);
let el3b8lo = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.rewardsPanelIsOpened = ! component.rewardsPanelIsOpened}]},`title`,``,`class`,`nav-link`);
let cndmG6D = component.user.total.rewards > 0;
this.setState('stsoUKU', cndmG6D);
let cndNoCz = component.user.gold >= 10000;
this.setState('stJhJMK', cndNoCz);
let cnduaeC = !(cndmG6D||cndNoCz);
this.setState('stCHUoj', cnduaeC);
if (cndmG6D) { 
let elp9KWW = eo('span','2izf',null,`class`,`bold badge badge-danger total`);
let cnd7_2X = component.user.total.rewards > 99;
this.setState('sth7ke9', cnd7_2X);
let cnd5Je_ = !(cnd7_2X);
this.setState('stzMCbh', cnd5Je_);
if (cnd7_2X) { 
text(`99+`);
}else { 
text( component.user.total.rewards );
}ec('span');
}let el1Bk65 = ev('img',null,null,`src`,`${assets('images/money-bag.svg')}`,`class`,`userCoins`,`alt`,`coins`);
let cndwr0_ = component.user.gold >= 1000000;
this.setState('stKQtwJ', cndwr0_);
let cndKJnD = cndNoCz;
this.setState('stre5jz', cndKJnD);
let cndOlEX = !(cndwr0_||cndKJnD);
this.setState('stEdE54', cndOlEX);
if (cndwr0_) { 
text(`${ round(component.user.gold / 1000000).toFixed(1).format() }m`);
}else if (cndKJnD) { 
text(`${ round(component.user.gold / 1000).format() }k`);
}else { 
text( (component.user.gold).format() );
}ec('a');

                    setTimeout(function () {
                        let $el = el3b8lo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Rewards Panel')}`});
        ;
                    }, 20);                
                let cndFpxj = component.rewardsPanelIsOpened;
this.setState('stiby_w', cndFpxj);
if (cndFpxj) { 
let cmpNQnp = this._lc('cORFv3UF9', {parent:component,state:'stiby_w'});
}ec('li');
let elea61M = eo('li',null,null,`class`,`nav-item`,`id`,`logout-item`);
let elUNnbY = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.logOut()}]},`class`,`nav-link`);
let elgqajk = eo('i',null,null,`class`,`${fas('directions') + ' icon'}`);
ec('i');
let elISA3g = eo('span',null,null,`class`,`d-none d-sm-inline`);
text(`Logout`);
ec('span');
ec('a');
ec('li');
}ec('ul');
ec('header');
let cndaIgk = component.openTodoList;
this.setState('stVL5eF', cndaIgk);
if (cndaIgk) { 
let cmpk4jJ = this._lc('cRy_PNpIX', {parent:component,events:{onclose:function(e) {let $el = this; component.openTodoList = null}},state:'stVL5eF'});
}
                    this.isReadyToGo();
                }
        });