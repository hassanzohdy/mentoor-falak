_Component({
                selector: 'sidebar',
                c: 'Sidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['toggleMenu','toggle','closeSidebarNav','activeLink','user'],
                children: {},
                render: function (component) {
                    let eloCevs = eo('nav',null,null,`class`,`sidebar-sticky`);
component.element = eloCevs;
eloCevs.cls = {'opened': component.toggleMenu};

            for (let className in eloCevs.cls) {
                eloCevs.classList.toggle(className, eloCevs.cls[className]);
            }  
            let elWZBYi = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggle()}]},`class`,`overlay`);
ec('div');
let ele3ALZ = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.closeSidebarNav(e)}]},`id`,`sidebar-content`);
component.sidebarContent = ele3ALZ;
ele3ALZ.cls = {'opds': component.toggleMenu};

            for (let className in ele3ALZ.cls) {
                ele3ALZ.classList.toggle(className, ele3ALZ.cls[className]);
            }  
            let elsnVUU = eo('ul',null,null,`class`,`nav flex-column`);
let elzwk5q = eo('li',null,null,`class`,`nav-item`);
let elsvuQu = eo('a',null,null,`class`,`nav-link bold`,`href`,`/timeline`);
elsvuQu.cls = {active: component.activeLink('/timeline')};

            for (let className in elsvuQu.cls) {
                elsvuQu.classList.toggle(className, elsvuQu.cls[className]);
            }  
            let elHkfus = eo('i',null,null,`class`,`${fas('mug-hot') + ' icon'}`);
ec('i');
text(`Timeline`);
let el1MqCE = eo('span',null,null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
let cndc6Ii = component.user.isLoggedIn();
this.setState('stjQPun', cndc6Ii);
if (cndc6Ii) { 
let elobyhP = eo('li','mT_f',null,`class`,`nav-item`);
let elnPVR4 = eo('a','MHrf',null,`class`,`nav-link`,`href`,`/dashboard`);
elnPVR4.cls = {active: component.activeLink('/dashboard')};

            for (let className in elnPVR4.cls) {
                elnPVR4.classList.toggle(className, elnPVR4.cls[className]);
            }  
            let elzEVQF = eo('i','VUQf',null,`class`,`${fas('home') + ' icon'}`);
ec('i');
text(`Dashboard`);
let elcYvI0 = eo('span','qcff',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndurMn = component.user.isLoggedIn();
this.setState('stS2kUZ', cndurMn);
if (cndurMn) { 
let eluFZMP = eo('li','74Bf',null,`class`,`nav-item`);
let elXIhsD = eo('a','1PKf',null,`class`,`nav-link`,`href`,`/projects/me`);
elXIhsD.cls = {active: component.activeLink('/projects/me')};

            for (let className in elXIhsD.cls) {
                elXIhsD.classList.toggle(className, elXIhsD.cls[className]);
            }  
            let elKSB7z = eo('i','cb7f',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`My Projects`);
let elj3uJf = eo('span','KQOf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndZNUJ = component.user.id == 1;
this.setState('stkLqbP', cndZNUJ);
if (cndZNUJ) { 
let el3I4Jp = eo('li','0Jxf',null,`class`,`nav-item`);
let elOVfXA = eo('a','vHWf',null,`class`,`nav-link pink-text bold`,`href`,`/courses`);
elOVfXA.cls = {active: component.activeLink('/courses', STARTING_WITH_ROUTE)};

            for (let className in elOVfXA.cls) {
                elOVfXA.classList.toggle(className, elOVfXA.cls[className]);
            }  
            let elZEBPy = eo('i','6eVf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elEoDTw = eo('span','ldrf');
text(`Courses`);
ec('span');
let elI9Zo7 = eo('span','tbgf',null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
}let elloFQE = eo('li',null,null,`class`,`nav-item`);
let eljFG8R = eo('a',null,null,`class`,`nav-link teal-text bold`,`href`,`/english`);
eljFG8R.cls = {active: component.activeLink('/english', STARTING_WITH_ROUTE)};

            for (let className in eljFG8R.cls) {
                eljFG8R.classList.toggle(className, eljFG8R.cls[className]);
            }  
            let eli7LyC = eo('i',null,null,`class`,`${fas('language') + ' mr-2 icon'}`);
ec('i');
let ellVWY0 = eo('span',null,null,`id`,`eaf`);
text(`English [EAF]`);
ec('span');
ec('a');
ec('li');
let elRGNF6 = eo('li',null,null,`class`,`nav-item`);
let elhLGv4 = eo('a',null,null,`class`,`nav-link orange-text bold`,`href`,`/projects`);
elhLGv4.cls = {active: component.activeLink('/projects', STARTING_WITH_ROUTE, '/projects/me')};

            for (let className in elhLGv4.cls) {
                elhLGv4.classList.toggle(className, elhLGv4.cls[className]);
            }  
            let el3b9Y_ = eo('i',null,null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elcQZ2f = eo('span');
text(`Projects [PMS]`);
ec('span');
let elVVrhK = eo('span',null,null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
let cndYDKe = component.user.isLoggedIn();;
this.setState('stAd9Z6', cndYDKe);
if (cndYDKe) { 
let el9Gm2z = eo('li','1vxf',null,`class`,`nav-item`);
let elO6tu7 = eo('a','xtCf',null,`class`,`nav-link`,`href`,`/training-ground`);
elO6tu7.cls = {active: component.activeLink('/training-ground', STARTING_WITH_ROUTE)};

            for (let className in elO6tu7.cls) {
                elO6tu7.classList.toggle(className, elO6tu7.cls[className]);
            }  
            let elsvJi3 = ev('img','0sNf',null,`src`,`${assets('images/target.png')}`,`class`,`target-icon small mr-2`);
text(`Training ground`);
ec('a');
ec('li');
}let cndnKJM = component.user.isLoggedIn();;
this.setState('stIiGlg', cndnKJM);
if (cndnKJM) { 
let elvAoGJ = eo('li','xGaf',null,`class`,`nav-item`);
let elROabg = eo('a','U4cf',null,`class`,`nav-link`,`href`,`/tasks`);
elROabg.cls = {active: component.activeLink('/tasks')};

            for (let className in elROabg.cls) {
                elROabg.classList.toggle(className, elROabg.cls[className]);
            }  
            let elJvO4V = eo('i','scTf',null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
text(`Tasks Board`);
ec('a');
ec('li');
}let el1duH0 = eo('li',null,null,`class`,`nav-item`);
let el0PYcf = eo('a',null,null,`class`,`nav-link`,`href`,`/einstein-chamber`);
el0PYcf.cls = {active: component.activeLink('/einstein-chamber', STARTING_WITH_ROUTE)};

            for (let className in el0PYcf.cls) {
                el0PYcf.classList.toggle(className, el0PYcf.cls[className]);
            }  
            let elc1WcD = ev('img',null,null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein Chamber`);
ec('a');
ec('li');
let elFj0ny = eo('li',null,null,`class`,`nav-item`);
let elKSqbD = eo('a',null,null,`class`,`nav-link`,`href`,`/academy`);
elKSqbD.cls = {active: component.activeLink('/academy', STARTING_WITH_ROUTE)};

            for (let className in elKSqbD.cls) {
                elKSqbD.classList.toggle(className, elKSqbD.cls[className]);
            }  
            let elIEkCV = eo('i',null,null,`class`,`${fas('university') + ' icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
ec('ul');
let cndLpna = component.user.accountType == 'admin';
this.setState('stmiXpH', cndLpna);
if (cndLpna) { 
let elJFgDy = eo('ul','I5Xf',null,`class`,`nav flex-column`);
let el4gwBG = eo('h6','Dbjf',null,`class`,`sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`);
let elGL8V8 = eo('span','6EBf');
text(`Administrator department`);
ec('span');
let el3HrI7 = eo('a','uqyf',null,`class`,`d-flex align-items-center text-muted`,`href`,`#`);
ec('a');
ec('h6');
let elx6q6H = eo('li','98Df',null,`class`,`nav-item`);
let eljZjwf = eo('a','bjbf',null,`class`,`nav-link`,`href`,`/admin/tags`);
eljZjwf.cls = {active: component.activeLink('/admin/tags')};

            for (let className in eljZjwf.cls) {
                eljZjwf.classList.toggle(className, eljZjwf.cls[className]);
            }  
            let elPhJSm = eo('i','uPwf',null,`class`,`${fas('tags') + ' icon'}`);
ec('i');
text(`Tags`);
ec('a');
ec('li');
let elWOwKY = eo('li','crlf',null,`class`,`nav-item`);
let elfJR6K = eo('a','4bAf',null,`class`,`nav-link`,`href`,`/admin/users`);
elfJR6K.cls = {active: component.activeLink('/admin/users')};

            for (let className in elfJR6K.cls) {
                elfJR6K.classList.toggle(className, elfJR6K.cls[className]);
            }  
            let el6VImN = eo('i','LLrf',null,`class`,`${fas('users') + ' icon'}`);
ec('i');
text(`users`);
ec('a');
ec('li');
let elE_cIU = eo('li','Smbf',null,`class`,`nav-item`);
let el0NLf5 = eo('a','_3bf',null,`class`,`nav-link`,`href`,`/admin/posts`);
el0NLf5.cls = {active: component.activeLink('/admin/posts')};

            for (let className in el0NLf5.cls) {
                el0NLf5.classList.toggle(className, el0NLf5.cls[className]);
            }  
            let elVlXrF = eo('i','gUTf',null,`class`,`${fas('mortar-pestle') + ' icon'}`);
ec('i');
text(`Posts`);
ec('a');
ec('li');
let elDntzY = eo('li','qGzf',null,`class`,`nav-item`);
let elpoHJC = eo('a','nR3f',null,`class`,`nav-link`,`href`,`/admin/academy/tracks`);
elpoHJC.cls = {active: component.activeLink('/admin/academy/tracks')};

            for (let className in elpoHJC.cls) {
                elpoHJC.classList.toggle(className, elpoHJC.cls[className]);
            }  
            let eldj6VQ = eo('i','iNDf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Academy Tracks`);
ec('a');
ec('li');
let elO91R4 = eo('li','8x1f',null,`class`,`nav-item`);
let elkoOwl = eo('a','Lfvf',null,`class`,`nav-link`,`href`,`/admin/offline-courses`);
elkoOwl.cls = {active: component.activeLink('/admin/offline-courses')};

            for (let className in elkoOwl.cls) {
                elkoOwl.classList.toggle(className, elkoOwl.cls[className]);
            }  
            let el5vUWX = eo('i','Vznf',null,`class`,`${fas('door-open') + ' icon'}`);
ec('i');
text(`offline tracks`);
ec('a');
ec('li');
let elW2afq = eo('li','5j4f',null,`class`,`nav-item`);
let el1_IVG = eo('a','2FPf',null,`class`,`nav-link`,`href`,`/admin/cocktails/categories`);
el1_IVG.cls = {active: component.activeLink('/admin/cocktails/categories')};

            for (let className in el1_IVG.cls) {
                el1_IVG.classList.toggle(className, el1_IVG.cls[className]);
            }  
            let el_8mf3 = eo('i','3EVf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails categories`);
ec('a');
ec('li');
let el_PI12 = eo('li','A7if',null,`class`,`nav-item`);
let elAhZwz = eo('a','o3Hf',null,`class`,`nav-link`,`href`,`/admin/cocktails`);
elAhZwz.cls = {active: component.activeLink('/admin/cocktails')};

            for (let className in elAhZwz.cls) {
                elAhZwz.classList.toggle(className, elAhZwz.cls[className]);
            }  
            let eltfGPv = eo('i','rhhf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails`);
ec('a');
ec('li');
let elv9l5w = eo('li','RjVf',null,`class`,`nav-item`);
let elZWJ_E = eo('a','2ftf',null,`class`,`nav-link`,`href`,`/admin/training-ground`);
elZWJ_E.cls = {active: component.activeLink('/admin/training-ground')};

            for (let className in elZWJ_E.cls) {
                elZWJ_E.classList.toggle(className, elZWJ_E.cls[className]);
            }  
            let elrkQmb = eo('i','F7Gf',null,`class`,`${fas('bullseye') + ' icon'}`);
ec('i');
text(`Training ground`);
ec('a');
ec('li');
let elKxy7_ = eo('li','p0Qf',null,`class`,`nav-item`);
let elUwSix = eo('a','mryf',null,`class`,`nav-link`,`href`,`/admin/academy/tracks/suggest-topics`);
elUwSix.cls = {active: component.activeLink('/admin/academy/tracks/suggest-topics')};

            for (let className in elUwSix.cls) {
                elUwSix.classList.toggle(className, elUwSix.cls[className]);
            }  
            let elKynRO = eo('i','bwif',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Tracks Suggest topics`);
ec('a');
ec('li');
let eloeDSH = eo('li','b96f',null,`class`,`nav-item`);
let el2xgMi = eo('a','lU1f',null,`class`,`nav-link`,`href`,`/admin/chat-rooms-puzzles-answers`);
el2xgMi.cls = {active: component.activeLink('/admin/chat-rooms-puzzles-answers')};

            for (let className in el2xgMi.cls) {
                el2xgMi.classList.toggle(className, el2xgMi.cls[className]);
            }  
            let elXuKSt = eo('i','skpf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Chat rooms answers`);
ec('a');
ec('li');
let elXfNfW = eo('li','aSSf',null,`class`,`nav-item`);
let elxQKHt = eo('a','3K5f',null,`class`,`nav-link`,`href`,`/admin/einstein/answers`);
elxQKHt.cls = {active: component.activeLink('/admin/einstein/answers')};

            for (let className in elxQKHt.cls) {
                elxQKHt.classList.toggle(className, elxQKHt.cls[className]);
            }  
            let elzO9im = eo('i','h8kf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein answers`);
ec('a');
ec('li');
let elLWirc = eo('li','Ic5f',null,`class`,`nav-item`);
let elSar2k = eo('a','CJzf',null,`class`,`nav-link`,`href`,`/admin/einstein`);
elSar2k.cls = {active: component.activeLink('/admin/einstein')};

            for (let className in elSar2k.cls) {
                elSar2k.classList.toggle(className, elSar2k.cls[className]);
            }  
            let eliBjAM = eo('i','H6Nf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein`);
ec('a');
ec('li');
let elwLmef = eo('li','KiCf',null,`class`,`nav-item`);
let elpDayL = eo('a','jb4f',null,`class`,`nav-link`,`href`,`/admin/academy/answers`);
elpDayL.cls = {active: component.activeLink('/admin/answers')};

            for (let className in elpDayL.cls) {
                elpDayL.classList.toggle(className, elpDayL.cls[className]);
            }  
            let elSI2U5 = eo('i','rCcf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Pending answers`);
ec('a');
ec('li');
ec('ul');
}ec('div');
ec('nav');

                    this.isReadyToGo();
                }
        });