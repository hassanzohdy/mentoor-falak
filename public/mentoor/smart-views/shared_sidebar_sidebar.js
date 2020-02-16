_Component({
                selector: 'sidebar',
                c: 'Sidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['toggleMenu','toggle','closeSidebarNav','activeLink','user'],
                children: {},
                render: function (component) {
                    let el8_Gnw = eo('nav',null,null,`class`,`sidebar-sticky`);
component.element = el8_Gnw;
el8_Gnw.cls = {'opened': component.toggleMenu};

            for (let className in el8_Gnw.cls) {
                el8_Gnw.classList.toggle(className, el8_Gnw.cls[className]);
            }  
            let el8JqZQ = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggle()}]},`class`,`overlay`);
ec('div');
let elv4xqH = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.closeSidebarNav(e)}]},`id`,`sidebar-content`);
component.sidebarContent = elv4xqH;
elv4xqH.cls = {'opds': component.toggleMenu};

            for (let className in elv4xqH.cls) {
                elv4xqH.classList.toggle(className, elv4xqH.cls[className]);
            }  
            let elgAAMV = eo('ul',null,null,`class`,`nav flex-column`);
let elUZFn5 = eo('li',null,null,`class`,`nav-item`);
let elzrBLk = eo('a',null,null,`class`,`nav-link bold`,`href`,`/timeline`);
elzrBLk.cls = {active: component.activeLink('/timeline')};

            for (let className in elzrBLk.cls) {
                elzrBLk.classList.toggle(className, elzrBLk.cls[className]);
            }  
            let elfSSk4 = eo('i',null,null,`class`,`${fas('mug-hot') + ' icon'}`);
ec('i');
text(`Timeline`);
let elno_C3 = eo('span',null,null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
let cnd1NB1 = component.user.isLoggedIn();
this.setState('stQYo8i', cnd1NB1);
if (cnd1NB1) { 
let elwIGsy = eo('li','NxCf',null,`class`,`nav-item`);
let elJnFbq = eo('a','S0Qf',null,`class`,`nav-link`,`href`,`/dashboard`);
elJnFbq.cls = {active: component.activeLink('/dashboard')};

            for (let className in elJnFbq.cls) {
                elJnFbq.classList.toggle(className, elJnFbq.cls[className]);
            }  
            let elBfoVD = eo('i','wFhf',null,`class`,`${fas('home') + ' icon'}`);
ec('i');
text(`Dashboard`);
let elIoCYS = eo('span','gLgf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndEgqB = component.user.isLoggedIn();
this.setState('st8WMiD', cndEgqB);
if (cndEgqB) { 
let elCnkMp = eo('li','r5Kf',null,`class`,`nav-item`);
let el0RI_Q = eo('a','4oIf',null,`class`,`nav-link`,`href`,`/projects/me`);
el0RI_Q.cls = {active: component.activeLink('/projects/me')};

            for (let className in el0RI_Q.cls) {
                el0RI_Q.classList.toggle(className, el0RI_Q.cls[className]);
            }  
            let el2DF42 = eo('i','1stf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`My Projects`);
let elvE2Er = eo('span','5H8f',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndcSaa = component.user.id == 1;
this.setState('st0SONz', cndcSaa);
if (cndcSaa) { 
let elJAHZS = eo('li','0psf',null,`class`,`nav-item`);
let elUnl02 = eo('a','idpf',null,`class`,`nav-link pink-text bold`,`href`,`/courses`);
elUnl02.cls = {active: component.activeLink('/courses', STARTING_WITH_ROUTE)};

            for (let className in elUnl02.cls) {
                elUnl02.classList.toggle(className, elUnl02.cls[className]);
            }  
            let elAAB8i = eo('i','76Kf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elioEo_ = eo('span','6YKf');
text(`Courses`);
ec('span');
let elGYALY = eo('span','wZhf',null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
}let elMBwgY = eo('li',null,null,`class`,`nav-item`);
let elO7MR5 = eo('a',null,null,`class`,`nav-link teal-text bold`,`href`,`/english`);
elO7MR5.cls = {active: component.activeLink('/english', STARTING_WITH_ROUTE)};

            for (let className in elO7MR5.cls) {
                elO7MR5.classList.toggle(className, elO7MR5.cls[className]);
            }  
            let elrAfUx = eo('i',null,null,`class`,`${fas('language') + ' mr-2 icon'}`);
ec('i');
let eltOGgt = eo('span',null,null,`id`,`eaf`);
text(`English [EAF]`);
ec('span');
ec('a');
ec('li');
let elGkkGW = eo('li',null,null,`class`,`nav-item`);
let elMBHye = eo('a',null,null,`class`,`nav-link orange-text bold`,`href`,`/projects`);
elMBHye.cls = {active: component.activeLink('/projects', STARTING_WITH_ROUTE, '/projects/me')};

            for (let className in elMBHye.cls) {
                elMBHye.classList.toggle(className, elMBHye.cls[className]);
            }  
            let elBw4mN = eo('i',null,null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elcF33s = eo('span');
text(`Projects [PMS]`);
ec('span');
let elDrRyH = eo('span',null,null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
let cndnhbY = component.user.isLoggedIn();;
this.setState('stv0X9f', cndnhbY);
if (cndnhbY) { 
let elnLPhy = eo('li','YVif',null,`class`,`nav-item`);
let elRHHE4 = eo('a','Sewf',null,`class`,`nav-link`,`href`,`/training-ground`);
elRHHE4.cls = {active: component.activeLink('/training-ground', STARTING_WITH_ROUTE)};

            for (let className in elRHHE4.cls) {
                elRHHE4.classList.toggle(className, elRHHE4.cls[className]);
            }  
            let elnqBow = ev('img','KuDf',null,`src`,`${assets('images/target.png')}`,`class`,`target-icon small mr-2`);
text(`Training ground`);
ec('a');
ec('li');
}let cndp9vw = component.user.isLoggedIn();;
this.setState('st3d2pd', cndp9vw);
if (cndp9vw) { 
let el6vTiH = eo('li','9vXf',null,`class`,`nav-item`);
let el0vFsK = eo('a','rW4f',null,`class`,`nav-link`,`href`,`/tasks`);
el0vFsK.cls = {active: component.activeLink('/tasks')};

            for (let className in el0vFsK.cls) {
                el0vFsK.classList.toggle(className, el0vFsK.cls[className]);
            }  
            let elUKbhe = eo('i','_Mef',null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
text(`Tasks Board`);
ec('a');
ec('li');
}let elOeaeM = eo('li',null,null,`class`,`nav-item`);
let elLh8ij = eo('a',null,null,`class`,`nav-link`,`href`,`/einstein-chamber`);
elLh8ij.cls = {active: component.activeLink('/einstein-chamber', STARTING_WITH_ROUTE)};

            for (let className in elLh8ij.cls) {
                elLh8ij.classList.toggle(className, elLh8ij.cls[className]);
            }  
            let elZBsqd = ev('img',null,null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein Chamber`);
ec('a');
ec('li');
let el1Xszp = eo('li',null,null,`class`,`nav-item`);
let elZYs39 = eo('a',null,null,`class`,`nav-link`,`href`,`/academy`);
elZYs39.cls = {active: component.activeLink('/academy', STARTING_WITH_ROUTE)};

            for (let className in elZYs39.cls) {
                elZYs39.classList.toggle(className, elZYs39.cls[className]);
            }  
            let elJPGGx = eo('i',null,null,`class`,`${fas('university') + ' icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
ec('ul');
let cndnzv2 = component.user.accountType == 'admin';
this.setState('std53X_', cndnzv2);
if (cndnzv2) { 
let el2VmPk = eo('ul','MTdf',null,`class`,`nav flex-column`);
let el9EKfI = eo('h6','7Ohf',null,`class`,`sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`);
let elE8Iuc = eo('span','oMMf');
text(`Administrator department`);
ec('span');
let elnfvZ3 = eo('a','U6mf',null,`class`,`d-flex align-items-center text-muted`,`href`,`#`);
ec('a');
ec('h6');
let elV0QtG = eo('li','v7qf',null,`class`,`nav-item`);
let elOrbGK = eo('a','Gr2f',null,`class`,`nav-link`,`href`,`/admin/tags`);
elOrbGK.cls = {active: component.activeLink('/admin/tags')};

            for (let className in elOrbGK.cls) {
                elOrbGK.classList.toggle(className, elOrbGK.cls[className]);
            }  
            let elUi17p = eo('i','2fDf',null,`class`,`${fas('tags') + ' icon'}`);
ec('i');
text(`Tags`);
ec('a');
ec('li');
let el3MwbD = eo('li','S2Ff',null,`class`,`nav-item`);
let elCfesB = eo('a','JnJf',null,`class`,`nav-link`,`href`,`/admin/users`);
elCfesB.cls = {active: component.activeLink('/admin/users')};

            for (let className in elCfesB.cls) {
                elCfesB.classList.toggle(className, elCfesB.cls[className]);
            }  
            let elxymQE = eo('i','jm8f',null,`class`,`${fas('users') + ' icon'}`);
ec('i');
text(`users`);
ec('a');
ec('li');
let elOpwRK = eo('li','tcmf',null,`class`,`nav-item`);
let eljdL4Q = eo('a','FLaf',null,`class`,`nav-link`,`href`,`/admin/posts`);
eljdL4Q.cls = {active: component.activeLink('/admin/posts')};

            for (let className in eljdL4Q.cls) {
                eljdL4Q.classList.toggle(className, eljdL4Q.cls[className]);
            }  
            let elgUl83 = eo('i','I1Ff',null,`class`,`${fas('mortar-pestle') + ' icon'}`);
ec('i');
text(`Posts`);
ec('a');
ec('li');
let el5xf77 = eo('li','WvNf',null,`class`,`nav-item`);
let elFXAG2 = eo('a','_17f',null,`class`,`nav-link`,`href`,`/admin/academy/tracks`);
elFXAG2.cls = {active: component.activeLink('/admin/academy/tracks')};

            for (let className in elFXAG2.cls) {
                elFXAG2.classList.toggle(className, elFXAG2.cls[className]);
            }  
            let el1DBeR = eo('i','uZgf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Academy Tracks`);
ec('a');
ec('li');
let elIyhEm = eo('li','lI8f',null,`class`,`nav-item`);
let elkXOUP = eo('a','4Lnf',null,`class`,`nav-link`,`href`,`/admin/offline-courses`);
elkXOUP.cls = {active: component.activeLink('/admin/offline-courses')};

            for (let className in elkXOUP.cls) {
                elkXOUP.classList.toggle(className, elkXOUP.cls[className]);
            }  
            let eln_A0G = eo('i','_Hhf',null,`class`,`${fas('door-open') + ' icon'}`);
ec('i');
text(`offline tracks`);
ec('a');
ec('li');
let elVV6wc = eo('li','nBJf',null,`class`,`nav-item`);
let el8FhJP = eo('a','5OAf',null,`class`,`nav-link`,`href`,`/admin/cocktails/categories`);
el8FhJP.cls = {active: component.activeLink('/admin/cocktails/categories')};

            for (let className in el8FhJP.cls) {
                el8FhJP.classList.toggle(className, el8FhJP.cls[className]);
            }  
            let el6Oor5 = eo('i','YIqf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails categories`);
ec('a');
ec('li');
let eluXBtI = eo('li','bhsf',null,`class`,`nav-item`);
let elkUuJa = eo('a','h_of',null,`class`,`nav-link`,`href`,`/admin/cocktails`);
elkUuJa.cls = {active: component.activeLink('/admin/cocktails')};

            for (let className in elkUuJa.cls) {
                elkUuJa.classList.toggle(className, elkUuJa.cls[className]);
            }  
            let elmoCpm = eo('i','xqEf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails`);
ec('a');
ec('li');
let elkT30i = eo('li','DJhf',null,`class`,`nav-item`);
let elOfeVh = eo('a','Cumf',null,`class`,`nav-link`,`href`,`/admin/training-ground`);
elOfeVh.cls = {active: component.activeLink('/admin/training-ground')};

            for (let className in elOfeVh.cls) {
                elOfeVh.classList.toggle(className, elOfeVh.cls[className]);
            }  
            let elBaTEX = eo('i','ravf',null,`class`,`${fas('bullseye') + ' icon'}`);
ec('i');
text(`Training ground`);
ec('a');
ec('li');
let elAbs10 = eo('li','p2Xf',null,`class`,`nav-item`);
let elLaSQE = eo('a','sA5f',null,`class`,`nav-link`,`href`,`/admin/academy/tracks/suggest-topics`);
elLaSQE.cls = {active: component.activeLink('/admin/academy/tracks/suggest-topics')};

            for (let className in elLaSQE.cls) {
                elLaSQE.classList.toggle(className, elLaSQE.cls[className]);
            }  
            let elyiYSL = eo('i','i0Hf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Tracks Suggest topics`);
ec('a');
ec('li');
let elIAITZ = eo('li','K0Cf',null,`class`,`nav-item`);
let elHkYvK = eo('a','ISqf',null,`class`,`nav-link`,`href`,`/admin/chat-rooms-puzzles-answers`);
elHkYvK.cls = {active: component.activeLink('/admin/chat-rooms-puzzles-answers')};

            for (let className in elHkYvK.cls) {
                elHkYvK.classList.toggle(className, elHkYvK.cls[className]);
            }  
            let elz7OEb = eo('i','SV1f',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Chat rooms answers`);
ec('a');
ec('li');
let elMMDTT = eo('li','cBEf',null,`class`,`nav-item`);
let elftU_O = eo('a','Gn2f',null,`class`,`nav-link`,`href`,`/admin/einstein/answers`);
elftU_O.cls = {active: component.activeLink('/admin/einstein/answers')};

            for (let className in elftU_O.cls) {
                elftU_O.classList.toggle(className, elftU_O.cls[className]);
            }  
            let ellg1v6 = eo('i','tr4f',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein answers`);
ec('a');
ec('li');
let elXHuwV = eo('li','8LMf',null,`class`,`nav-item`);
let eldZFw4 = eo('a','xDFf',null,`class`,`nav-link`,`href`,`/admin/einstein`);
eldZFw4.cls = {active: component.activeLink('/admin/einstein')};

            for (let className in eldZFw4.cls) {
                eldZFw4.classList.toggle(className, eldZFw4.cls[className]);
            }  
            let elrrDK4 = eo('i','ovkf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein`);
ec('a');
ec('li');
let el4sQZX = eo('li','suef',null,`class`,`nav-item`);
let elDnOm8 = eo('a','3LCf',null,`class`,`nav-link`,`href`,`/admin/academy/answers`);
elDnOm8.cls = {active: component.activeLink('/admin/answers')};

            for (let className in elDnOm8.cls) {
                elDnOm8.classList.toggle(className, elDnOm8.cls[className]);
            }  
            let el8blhR = eo('i','yNTf',null,`class`,`${fas('file') + ' icon'}`);
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