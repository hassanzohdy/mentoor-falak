_Component({
                selector: 'sidebar',
                c: 'Sidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['toggleMenu','toggle','closeSidebarNav','activeLink','user'],
                children: {},
                render: function (component) {
                    let ell58v3 = eo('nav',null,null,`class`,`sidebar-sticky`);
component.element = ell58v3;
ell58v3.cls = {'opened': component.toggleMenu};

            for (let className in ell58v3.cls) {
                ell58v3.classList.toggle(className, ell58v3.cls[className]);
            }  
            let el0cWET = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggle()}]},`class`,`overlay`);
ec('div');
let elmrrSc = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.closeSidebarNav(e)}]},`id`,`sidebar-content`);
component.sidebarContent = elmrrSc;
elmrrSc.cls = {'opds': component.toggleMenu};

            for (let className in elmrrSc.cls) {
                elmrrSc.classList.toggle(className, elmrrSc.cls[className]);
            }  
            let elhYpFd = eo('ul',null,null,`class`,`nav flex-column`);
let elJEIbT = eo('li',null,null,`class`,`nav-item`);
let elYWnCk = eo('a',null,null,`class`,`nav-link bold`,`href`,`/timeline`);
elYWnCk.cls = {active: component.activeLink('/timeline')};

            for (let className in elYWnCk.cls) {
                elYWnCk.classList.toggle(className, elYWnCk.cls[className]);
            }  
            let elFOefQ = eo('i',null,null,`class`,`${fas('mug-hot') + ' icon'}`);
ec('i');
text(`Timeline`);
let elT4UEl = eo('span',null,null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
let cndP0nn = component.user.isLoggedIn();
this.setState('stmvAPE', cndP0nn);
if (cndP0nn) { 
let elgusU8 = eo('li','Ntzf',null,`class`,`nav-item`);
let elegFMF = eo('a','s7Tf',null,`class`,`nav-link`,`href`,`/dashboard`);
elegFMF.cls = {active: component.activeLink('/dashboard')};

            for (let className in elegFMF.cls) {
                elegFMF.classList.toggle(className, elegFMF.cls[className]);
            }  
            let elfXOrT = eo('i','4Mpf',null,`class`,`${fas('home') + ' icon'}`);
ec('i');
text(`Dashboard`);
let el5gtsG = eo('span','sIUf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndj_RH = component.user.isLoggedIn();
this.setState('stdtGNC', cndj_RH);
if (cndj_RH) { 
let elsGV41 = eo('li','Ldpf',null,`class`,`nav-item`);
let elZTe9K = eo('a','vW3f',null,`class`,`nav-link`,`href`,`/projects/me`);
elZTe9K.cls = {active: component.activeLink('/projects/me')};

            for (let className in elZTe9K.cls) {
                elZTe9K.classList.toggle(className, elZTe9K.cls[className]);
            }  
            let el7QgHA = eo('i','PXmf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`My Projects`);
let els3hIC = eo('span','yWLf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndJQBL = Config.get('app.env') == 'development';
this.setState('stnB7FE', cndJQBL);
if (cndJQBL) { 
let elA58As = eo('li','J4Rf',null,`class`,`nav-item`);
let elZ2y9w = eo('a','04bf',null,`class`,`nav-link pink-text bold`,`href`,`/courses`);
elZ2y9w.cls = {active: component.activeLink('/courses', STARTING_WITH_ROUTE)};

            for (let className in elZ2y9w.cls) {
                elZ2y9w.classList.toggle(className, elZ2y9w.cls[className]);
            }  
            let eliE06E = eo('i','bEaf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elVigTy = eo('span','N1Xf');
text(`Courses`);
ec('span');
let elon6oZ = eo('span','oVTf',null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
}let el1GGEO = eo('li',null,null,`class`,`nav-item`);
let el7002L = eo('a',null,null,`class`,`nav-link teal-text bold`,`href`,`/english`);
el7002L.cls = {active: component.activeLink('/english', STARTING_WITH_ROUTE)};

            for (let className in el7002L.cls) {
                el7002L.classList.toggle(className, el7002L.cls[className]);
            }  
            let el5RSa1 = eo('i',null,null,`class`,`${fas('language') + ' mr-2 icon'}`);
ec('i');
let elW9mu2 = eo('span',null,null,`id`,`eaf`);
text(`English [EAF]`);
ec('span');
ec('a');
ec('li');
let el5Q7H4 = eo('li',null,null,`class`,`nav-item`);
let elvCBVT = eo('a',null,null,`class`,`nav-link orange-text bold`,`href`,`/projects`);
elvCBVT.cls = {active: component.activeLink('/projects', STARTING_WITH_ROUTE, '/projects/me')};

            for (let className in elvCBVT.cls) {
                elvCBVT.classList.toggle(className, elvCBVT.cls[className]);
            }  
            let elMWMFm = eo('i',null,null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let eljuVVJ = eo('span');
text(`Projects [PMS]`);
ec('span');
let el5CbXM = eo('span',null,null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
let cndlgcE = component.user.isLoggedIn();;
this.setState('stheS2P', cndlgcE);
if (cndlgcE) { 
let el5AEPG = eo('li','N6tf',null,`class`,`nav-item`);
let elUgxbm = eo('a','47Jf',null,`class`,`nav-link`,`href`,`/training-ground`);
elUgxbm.cls = {active: component.activeLink('/training-ground', STARTING_WITH_ROUTE)};

            for (let className in elUgxbm.cls) {
                elUgxbm.classList.toggle(className, elUgxbm.cls[className]);
            }  
            let elYZx0W = ev('img','k7nf',null,`src`,`${assets('images/target.png')}`,`class`,`target-icon small mr-2`);
text(`Training ground`);
ec('a');
ec('li');
}let cnd7i17 = component.user.isLoggedIn();;
this.setState('st2K2fP', cnd7i17);
if (cnd7i17) { 
let elWz_kJ = eo('li','Bytf',null,`class`,`nav-item`);
let el71O6j = eo('a','G3qf',null,`class`,`nav-link`,`href`,`/tasks`);
el71O6j.cls = {active: component.activeLink('/tasks')};

            for (let className in el71O6j.cls) {
                el71O6j.classList.toggle(className, el71O6j.cls[className]);
            }  
            let elwQcoN = eo('i','Co3f',null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
text(`Tasks Board`);
ec('a');
ec('li');
}let elAQMnp = eo('li',null,null,`class`,`nav-item`);
let elJB66g = eo('a',null,null,`class`,`nav-link`,`href`,`/einstein-chamber`);
elJB66g.cls = {active: component.activeLink('/einstein-chamber', STARTING_WITH_ROUTE)};

            for (let className in elJB66g.cls) {
                elJB66g.classList.toggle(className, elJB66g.cls[className]);
            }  
            let eladpOH = ev('img',null,null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein Chamber`);
ec('a');
ec('li');
let el9FJkA = eo('li',null,null,`class`,`nav-item`);
let elDfX8q = eo('a',null,null,`class`,`nav-link`,`href`,`/academy`);
elDfX8q.cls = {active: component.activeLink('/academy', STARTING_WITH_ROUTE)};

            for (let className in elDfX8q.cls) {
                elDfX8q.classList.toggle(className, elDfX8q.cls[className]);
            }  
            let elIEOf0 = eo('i',null,null,`class`,`${fas('university') + ' icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let cndXOWe = Config.get('app.env') == 'development' && component.user.isLoggedIn();;
this.setState('stxuDgM', cndXOWe);
if (cndXOWe) { 
let elJwGId = eo('li','4W7f',null,`class`,`nav-item`);
let elUxr9O = eo('a','UxIf',null,`class`,`nav-link`,`href`,`/arena`);
elUxr9O.cls = {active: component.activeLink('/arena')};

            for (let className in elUxr9O.cls) {
                elUxr9O.classList.toggle(className, elUxr9O.cls[className]);
            }  
            let elbjdHh = eo('i','FTnf',null,`class`,`${fas('biohazard') + ' icon'}`);
ec('i');
text(`Arena`);
ec('a');
ec('li');
}ec('ul');
let cndaRf2 = component.user.accountType == 'admin';
this.setState('st8Ols6', cndaRf2);
if (cndaRf2) { 
let el9dLEk = eo('ul','xHVf',null,`class`,`nav flex-column`);
let el8Wt2z = eo('h6','3rFf',null,`class`,`sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`);
let elDtYpy = eo('span','ofLf');
text(`Administrator department`);
ec('span');
let elzGM_2 = eo('a','p8vf',null,`class`,`d-flex align-items-center text-muted`,`href`,`#`);
ec('a');
ec('h6');
let elUMBfw = eo('li','M_if',null,`class`,`nav-item`);
let elt460N = eo('a','knvf',null,`class`,`nav-link`,`href`,`/admin/tags`);
elt460N.cls = {active: component.activeLink('/admin/tags')};

            for (let className in elt460N.cls) {
                elt460N.classList.toggle(className, elt460N.cls[className]);
            }  
            let elDUeiO = eo('i','NcDf',null,`class`,`${fas('tags') + ' icon'}`);
ec('i');
text(`Tags`);
ec('a');
ec('li');
let elZF71t = eo('li','vPyf',null,`class`,`nav-item`);
let el5kZbg = eo('a','kzDf',null,`class`,`nav-link`,`href`,`/admin/users`);
el5kZbg.cls = {active: component.activeLink('/admin/users')};

            for (let className in el5kZbg.cls) {
                el5kZbg.classList.toggle(className, el5kZbg.cls[className]);
            }  
            let elrYQxy = eo('i','q2af',null,`class`,`${fas('users') + ' icon'}`);
ec('i');
text(`users`);
ec('a');
ec('li');
let elu0EUv = eo('li','gMEf',null,`class`,`nav-item`);
let elKNzKn = eo('a','XIyf',null,`class`,`nav-link`,`href`,`/admin/posts`);
elKNzKn.cls = {active: component.activeLink('/admin/posts')};

            for (let className in elKNzKn.cls) {
                elKNzKn.classList.toggle(className, elKNzKn.cls[className]);
            }  
            let elw6FvS = eo('i','WyCf',null,`class`,`${fas('mortar-pestle') + ' icon'}`);
ec('i');
text(`Posts`);
ec('a');
ec('li');
let el6NoBt = eo('li','P9Rf',null,`class`,`nav-item`);
let elbdt5F = eo('a','KvVf',null,`class`,`nav-link`,`href`,`/admin/academy/tracks`);
elbdt5F.cls = {active: component.activeLink('/admin/academy/tracks')};

            for (let className in elbdt5F.cls) {
                elbdt5F.classList.toggle(className, elbdt5F.cls[className]);
            }  
            let elopu_G = eo('i','AHpf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Academy Tracks`);
ec('a');
ec('li');
let elXSij0 = eo('li','AR3f',null,`class`,`nav-item`);
let el7RgTZ = eo('a','K21f',null,`class`,`nav-link`,`href`,`/admin/offline-courses`);
el7RgTZ.cls = {active: component.activeLink('/admin/offline-courses')};

            for (let className in el7RgTZ.cls) {
                el7RgTZ.classList.toggle(className, el7RgTZ.cls[className]);
            }  
            let eldabEP = eo('i','1RWf',null,`class`,`${fas('door-open') + ' icon'}`);
ec('i');
text(`offline tracks`);
ec('a');
ec('li');
let elJI3Ww = eo('li','H_zf',null,`class`,`nav-item`);
let el6dOLK = eo('a','2bRf',null,`class`,`nav-link`,`href`,`/admin/cocktails/categories`);
el6dOLK.cls = {active: component.activeLink('/admin/cocktails/categories')};

            for (let className in el6dOLK.cls) {
                el6dOLK.classList.toggle(className, el6dOLK.cls[className]);
            }  
            let eljSIjU = eo('i','Mzkf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails categories`);
ec('a');
ec('li');
let elKCsVy = eo('li','ZP5f',null,`class`,`nav-item`);
let el1klnY = eo('a','pqbf',null,`class`,`nav-link`,`href`,`/admin/cocktails`);
el1klnY.cls = {active: component.activeLink('/admin/cocktails')};

            for (let className in el1klnY.cls) {
                el1klnY.classList.toggle(className, el1klnY.cls[className]);
            }  
            let el4WamH = eo('i','WAaf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails`);
ec('a');
ec('li');
let elv0so9 = eo('li','gP8f',null,`class`,`nav-item`);
let elCYH1z = eo('a','8rFf',null,`class`,`nav-link`,`href`,`/admin/training-ground`);
elCYH1z.cls = {active: component.activeLink('/admin/training-ground')};

            for (let className in elCYH1z.cls) {
                elCYH1z.classList.toggle(className, elCYH1z.cls[className]);
            }  
            let eltYUkF = eo('i','sgHf',null,`class`,`${fas('bullseye') + ' icon'}`);
ec('i');
text(`Training ground`);
ec('a');
ec('li');
let elkdOPZ = eo('li','EZrf',null,`class`,`nav-item`);
let elTBXQw = eo('a','KuCf',null,`class`,`nav-link`,`href`,`/admin/academy/tracks/suggest-topics`);
elTBXQw.cls = {active: component.activeLink('/admin/academy/tracks/suggest-topics')};

            for (let className in elTBXQw.cls) {
                elTBXQw.classList.toggle(className, elTBXQw.cls[className]);
            }  
            let elz3D93 = eo('i','1mpf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Tracks Suggest topics`);
ec('a');
ec('li');
let elwFO8M = eo('li','8oWf',null,`class`,`nav-item`);
let elscGFp = eo('a','EcWf',null,`class`,`nav-link`,`href`,`/admin/chat-rooms-puzzles-answers`);
elscGFp.cls = {active: component.activeLink('/admin/chat-rooms-puzzles-answers')};

            for (let className in elscGFp.cls) {
                elscGFp.classList.toggle(className, elscGFp.cls[className]);
            }  
            let el7nnYC = eo('i','zuNf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Chat rooms answers`);
ec('a');
ec('li');
let el6UOVs = eo('li','7f6f',null,`class`,`nav-item`);
let elqp6DT = eo('a','F4_f',null,`class`,`nav-link`,`href`,`/admin/einstein/answers`);
elqp6DT.cls = {active: component.activeLink('/admin/einstein/answers')};

            for (let className in elqp6DT.cls) {
                elqp6DT.classList.toggle(className, elqp6DT.cls[className]);
            }  
            let elIrFmg = eo('i','VBCf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein answers`);
ec('a');
ec('li');
let elmSqfC = eo('li','Mn1f',null,`class`,`nav-item`);
let elEbYqC = eo('a','R4Mf',null,`class`,`nav-link`,`href`,`/admin/einstein`);
elEbYqC.cls = {active: component.activeLink('/admin/einstein')};

            for (let className in elEbYqC.cls) {
                elEbYqC.classList.toggle(className, elEbYqC.cls[className]);
            }  
            let el46hsb = eo('i','vqVf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein`);
ec('a');
ec('li');
let elSyzzJ = eo('li','e8sf',null,`class`,`nav-item`);
let elJpPVH = eo('a','brIf',null,`class`,`nav-link`,`href`,`/admin/academy/answers`);
elJpPVH.cls = {active: component.activeLink('/admin/answers')};

            for (let className in elJpPVH.cls) {
                elJpPVH.classList.toggle(className, elJpPVH.cls[className]);
            }  
            let el42gq1 = eo('i','VG9f',null,`class`,`${fas('file') + ' icon'}`);
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