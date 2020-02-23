_Component({
                selector: 'sidebar',
                c: 'Sidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['toggleMenu','toggle','closeSidebarNav','activeLink','user'],
                children: {},
                render: function (component) {
                    let elacFcs = eo('nav',null,null,`class`,`sidebar-sticky`);
component.element = elacFcs;
elacFcs.cls = {'opened': component.toggleMenu};

            for (let className in elacFcs.cls) {
                elacFcs.classList.toggle(className, elacFcs.cls[className]);
            }  
            let elr9W8n = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggle()}]},`class`,`overlay`);
ec('div');
let elXuyic = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.closeSidebarNav(e)}]},`id`,`sidebar-content`);
component.sidebarContent = elXuyic;
elXuyic.cls = {'opds': component.toggleMenu};

            for (let className in elXuyic.cls) {
                elXuyic.classList.toggle(className, elXuyic.cls[className]);
            }  
            let elrOfil = eo('ul',null,null,`class`,`nav flex-column`);
let elcxIcx = eo('li',null,null,`class`,`nav-item`);
let elFP1LM = eo('a',null,null,`class`,`nav-link bold`,`href`,`/timeline`);
elFP1LM.cls = {active: component.activeLink('/timeline')};

            for (let className in elFP1LM.cls) {
                elFP1LM.classList.toggle(className, elFP1LM.cls[className]);
            }  
            let elbvAth = eo('i',null,null,`class`,`${fas('mug-hot') + ' icon'}`);
ec('i');
text(`Timeline`);
let el4zha5 = eo('span',null,null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
let cndNTew = component.user.isLoggedIn();
this.setState('stnT7Fl', cndNTew);
if (cndNTew) { 
let elG3vSr = eo('li','a6df',null,`class`,`nav-item`);
let el7oflM = eo('a','VjWf',null,`class`,`nav-link`,`href`,`/dashboard`);
el7oflM.cls = {active: component.activeLink('/dashboard')};

            for (let className in el7oflM.cls) {
                el7oflM.classList.toggle(className, el7oflM.cls[className]);
            }  
            let elZOjDr = eo('i','_Twf',null,`class`,`${fas('home') + ' icon'}`);
ec('i');
text(`Dashboard`);
let elXkIbJ = eo('span','FMif',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndJgL4 = component.user.isLoggedIn();
this.setState('st7KMsa', cndJgL4);
if (cndJgL4) { 
let el2Pkoq = eo('li','Dh2f',null,`class`,`nav-item`);
let elN1_RD = eo('a','Cq8f',null,`class`,`nav-link`,`href`,`/projects/me`);
elN1_RD.cls = {active: component.activeLink('/projects/me')};

            for (let className in elN1_RD.cls) {
                elN1_RD.classList.toggle(className, elN1_RD.cls[className]);
            }  
            let el5hLqy = eo('i','Trlf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`My Projects`);
let elqMuUW = eo('span','mgbf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndYfrd = component.user.id == 1;
this.setState('stAry9B', cndYfrd);
if (cndYfrd) { 
let ely87B6 = eo('li','RHzf',null,`class`,`nav-item`);
let eleLjTi = eo('a','gM0f',null,`class`,`nav-link pink-text bold`,`href`,`/courses`);
eleLjTi.cls = {active: component.activeLink('/courses', STARTING_WITH_ROUTE)};

            for (let className in eleLjTi.cls) {
                eleLjTi.classList.toggle(className, eleLjTi.cls[className]);
            }  
            let elOZTi5 = eo('i','_k_f',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let eli6IGB = eo('span','3i1f');
text(`Courses`);
ec('span');
let elxu9gJ = eo('span','mCAf',null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
}let elEEv_j = eo('li',null,null,`class`,`nav-item`);
let el6MV8l = eo('a',null,null,`class`,`nav-link teal-text bold`,`href`,`/english`);
el6MV8l.cls = {active: component.activeLink('/english', STARTING_WITH_ROUTE)};

            for (let className in el6MV8l.cls) {
                el6MV8l.classList.toggle(className, el6MV8l.cls[className]);
            }  
            let elgW3RY = eo('i',null,null,`class`,`${fas('language') + ' mr-2 icon'}`);
ec('i');
let elF7LJt = eo('span',null,null,`id`,`eaf`);
text(`English [EAF]`);
ec('span');
ec('a');
ec('li');
let elpl45p = eo('li',null,null,`class`,`nav-item`);
let elafLgO = eo('a',null,null,`class`,`nav-link orange-text bold`,`href`,`/projects`);
elafLgO.cls = {active: component.activeLink('/projects', STARTING_WITH_ROUTE, '/projects/me')};

            for (let className in elafLgO.cls) {
                elafLgO.classList.toggle(className, elafLgO.cls[className]);
            }  
            let elyhmIX = eo('i',null,null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elf5u7y = eo('span');
text(`Projects [PMS]`);
ec('span');
let eld29JL = eo('span',null,null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
let cndG71Y = component.user.isLoggedIn();;
this.setState('stZExVp', cndG71Y);
if (cndG71Y) { 
let elV73as = eo('li','s90f',null,`class`,`nav-item`);
let elUQw8W = eo('a','G9Qf',null,`class`,`nav-link`,`href`,`/training-ground`);
elUQw8W.cls = {active: component.activeLink('/training-ground', STARTING_WITH_ROUTE)};

            for (let className in elUQw8W.cls) {
                elUQw8W.classList.toggle(className, elUQw8W.cls[className]);
            }  
            let eljRu4G = ev('img','KRRf',null,`src`,`${assets('images/target.png')}`,`class`,`target-icon small mr-2`);
text(`Training ground`);
ec('a');
ec('li');
}let cndrlZn = component.user.isLoggedIn();;
this.setState('st9WYWw', cndrlZn);
if (cndrlZn) { 
let elXITwA = eo('li','_g5f',null,`class`,`nav-item`);
let elJS8i2 = eo('a','cr7f',null,`class`,`nav-link`,`href`,`/tasks`);
elJS8i2.cls = {active: component.activeLink('/tasks')};

            for (let className in elJS8i2.cls) {
                elJS8i2.classList.toggle(className, elJS8i2.cls[className]);
            }  
            let elPJBnX = eo('i','UByf',null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
text(`Tasks Board`);
ec('a');
ec('li');
}let eltjQwn = eo('li',null,null,`class`,`nav-item`);
let el5fXrX = eo('a',null,null,`class`,`nav-link`,`href`,`/einstein-chamber`);
el5fXrX.cls = {active: component.activeLink('/einstein-chamber', STARTING_WITH_ROUTE)};

            for (let className in el5fXrX.cls) {
                el5fXrX.classList.toggle(className, el5fXrX.cls[className]);
            }  
            let elyyHQ5 = ev('img',null,null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein Chamber`);
ec('a');
ec('li');
let elNPPNq = eo('li',null,null,`class`,`nav-item`);
let elKrr71 = eo('a',null,null,`class`,`nav-link`,`href`,`/academy`);
elKrr71.cls = {active: component.activeLink('/academy', STARTING_WITH_ROUTE)};

            for (let className in elKrr71.cls) {
                elKrr71.classList.toggle(className, elKrr71.cls[className]);
            }  
            let elJhqHt = eo('i',null,null,`class`,`${fas('university') + ' icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let cndGykk = component.user.isLoggedIn();;
this.setState('std_q1Q', cndGykk);
if (cndGykk) { 
let el2wLSU = eo('li','vF7f',null,`class`,`nav-item`);
let elmKznD = eo('a','w6_f',null,`class`,`nav-link`,`href`,`/arena`);
elmKznD.cls = {active: component.activeLink('/arena')};

            for (let className in elmKznD.cls) {
                elmKznD.classList.toggle(className, elmKznD.cls[className]);
            }  
            let el5Nm_X = eo('i','OIGf',null,`class`,`${fas('biohazard') + ' icon'}`);
ec('i');
text(`Arena`);
ec('a');
ec('li');
}ec('ul');
let cnd9aPi = component.user.accountType == 'admin';
this.setState('stb5WNt', cnd9aPi);
if (cnd9aPi) { 
let elQzMLd = eo('ul','S4Xf',null,`class`,`nav flex-column`);
let el7eOE_ = eo('h6','ZfEf',null,`class`,`sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`);
let eldtqf6 = eo('span','7mpf');
text(`Administrator department`);
ec('span');
let elZJMEw = eo('a','5u5f',null,`class`,`d-flex align-items-center text-muted`,`href`,`#`);
ec('a');
ec('h6');
let el5X2Mg = eo('li','oW7f',null,`class`,`nav-item`);
let ell77eB = eo('a','paUf',null,`class`,`nav-link`,`href`,`/admin/tags`);
ell77eB.cls = {active: component.activeLink('/admin/tags')};

            for (let className in ell77eB.cls) {
                ell77eB.classList.toggle(className, ell77eB.cls[className]);
            }  
            let elmEQmB = eo('i','hxBf',null,`class`,`${fas('tags') + ' icon'}`);
ec('i');
text(`Tags`);
ec('a');
ec('li');
let elH8a89 = eo('li','mlAf',null,`class`,`nav-item`);
let eltfQbG = eo('a','SSTf',null,`class`,`nav-link`,`href`,`/admin/users`);
eltfQbG.cls = {active: component.activeLink('/admin/users')};

            for (let className in eltfQbG.cls) {
                eltfQbG.classList.toggle(className, eltfQbG.cls[className]);
            }  
            let elNvQP5 = eo('i','Jzbf',null,`class`,`${fas('users') + ' icon'}`);
ec('i');
text(`users`);
ec('a');
ec('li');
let elOBv1x = eo('li','Zpof',null,`class`,`nav-item`);
let elln99t = eo('a','haAf',null,`class`,`nav-link`,`href`,`/admin/posts`);
elln99t.cls = {active: component.activeLink('/admin/posts')};

            for (let className in elln99t.cls) {
                elln99t.classList.toggle(className, elln99t.cls[className]);
            }  
            let elPUtGO = eo('i','dIef',null,`class`,`${fas('mortar-pestle') + ' icon'}`);
ec('i');
text(`Posts`);
ec('a');
ec('li');
let elp2w3V = eo('li','Cluf',null,`class`,`nav-item`);
let elZUNCi = eo('a','QhIf',null,`class`,`nav-link`,`href`,`/admin/academy/tracks`);
elZUNCi.cls = {active: component.activeLink('/admin/academy/tracks')};

            for (let className in elZUNCi.cls) {
                elZUNCi.classList.toggle(className, elZUNCi.cls[className]);
            }  
            let elVKM4r = eo('i','mSLf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Academy Tracks`);
ec('a');
ec('li');
let elWgJSV = eo('li','crxf',null,`class`,`nav-item`);
let elr5e5g = eo('a','tscf',null,`class`,`nav-link`,`href`,`/admin/offline-courses`);
elr5e5g.cls = {active: component.activeLink('/admin/offline-courses')};

            for (let className in elr5e5g.cls) {
                elr5e5g.classList.toggle(className, elr5e5g.cls[className]);
            }  
            let elrfp6F = eo('i','hq9f',null,`class`,`${fas('door-open') + ' icon'}`);
ec('i');
text(`offline tracks`);
ec('a');
ec('li');
let elJ4NzY = eo('li','sWtf',null,`class`,`nav-item`);
let elfpIgf = eo('a','L1Sf',null,`class`,`nav-link`,`href`,`/admin/cocktails/categories`);
elfpIgf.cls = {active: component.activeLink('/admin/cocktails/categories')};

            for (let className in elfpIgf.cls) {
                elfpIgf.classList.toggle(className, elfpIgf.cls[className]);
            }  
            let elDgOzX = eo('i','LMOf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails categories`);
ec('a');
ec('li');
let el698Vf = eo('li','F7nf',null,`class`,`nav-item`);
let elQiwc9 = eo('a','74df',null,`class`,`nav-link`,`href`,`/admin/cocktails`);
elQiwc9.cls = {active: component.activeLink('/admin/cocktails')};

            for (let className in elQiwc9.cls) {
                elQiwc9.classList.toggle(className, elQiwc9.cls[className]);
            }  
            let el64sPc = eo('i','h2hf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails`);
ec('a');
ec('li');
let el7f89d = eo('li','4fuf',null,`class`,`nav-item`);
let elXFjWG = eo('a','2MLf',null,`class`,`nav-link`,`href`,`/admin/training-ground`);
elXFjWG.cls = {active: component.activeLink('/admin/training-ground')};

            for (let className in elXFjWG.cls) {
                elXFjWG.classList.toggle(className, elXFjWG.cls[className]);
            }  
            let el5yJ4d = eo('i','4tJf',null,`class`,`${fas('bullseye') + ' icon'}`);
ec('i');
text(`Training ground`);
ec('a');
ec('li');
let ellnV6R = eo('li','sRpf',null,`class`,`nav-item`);
let elZHs64 = eo('a','vqef',null,`class`,`nav-link`,`href`,`/admin/academy/tracks/suggest-topics`);
elZHs64.cls = {active: component.activeLink('/admin/academy/tracks/suggest-topics')};

            for (let className in elZHs64.cls) {
                elZHs64.classList.toggle(className, elZHs64.cls[className]);
            }  
            let eludFxi = eo('i','Y41f',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Tracks Suggest topics`);
ec('a');
ec('li');
let elIkHnB = eo('li','WJKf',null,`class`,`nav-item`);
let el8rTQ8 = eo('a','jwXf',null,`class`,`nav-link`,`href`,`/admin/chat-rooms-puzzles-answers`);
el8rTQ8.cls = {active: component.activeLink('/admin/chat-rooms-puzzles-answers')};

            for (let className in el8rTQ8.cls) {
                el8rTQ8.classList.toggle(className, el8rTQ8.cls[className]);
            }  
            let elavD71 = eo('i','B2Mf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Chat rooms answers`);
ec('a');
ec('li');
let elnAUOR = eo('li','3n2f',null,`class`,`nav-item`);
let el3v2bH = eo('a','ocbf',null,`class`,`nav-link`,`href`,`/admin/einstein/answers`);
el3v2bH.cls = {active: component.activeLink('/admin/einstein/answers')};

            for (let className in el3v2bH.cls) {
                el3v2bH.classList.toggle(className, el3v2bH.cls[className]);
            }  
            let elx5sz1 = eo('i','t8cf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein answers`);
ec('a');
ec('li');
let elDfo4F = eo('li','Yvgf',null,`class`,`nav-item`);
let eljZ220 = eo('a','9Jaf',null,`class`,`nav-link`,`href`,`/admin/einstein`);
eljZ220.cls = {active: component.activeLink('/admin/einstein')};

            for (let className in eljZ220.cls) {
                eljZ220.classList.toggle(className, eljZ220.cls[className]);
            }  
            let eltC67k = eo('i','hZrf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein`);
ec('a');
ec('li');
let elMHEDf = eo('li','qSyf',null,`class`,`nav-item`);
let elCrp9g = eo('a','9A5f',null,`class`,`nav-link`,`href`,`/admin/academy/answers`);
elCrp9g.cls = {active: component.activeLink('/admin/answers')};

            for (let className in elCrp9g.cls) {
                elCrp9g.classList.toggle(className, elCrp9g.cls[className]);
            }  
            let elJNS9W = eo('i','qhaf',null,`class`,`${fas('file') + ' icon'}`);
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