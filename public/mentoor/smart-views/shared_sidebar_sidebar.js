_Component({
                selector: 'sidebar',
                c: 'Sidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['toggleMenu','toggle','closeSidebarNav','activeLink','user'],
                children: {},
                render: function (component) {
                    let elZIMXZ = eo('nav',null,null,`class`,`sidebar-sticky`);
component.element = elZIMXZ;
elZIMXZ.cls = {'opened': component.toggleMenu};

            for (let className in elZIMXZ.cls) {
                elZIMXZ.classList.toggle(className, elZIMXZ.cls[className]);
            }  
            let el2eaPO = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggle()}]},`class`,`overlay`);
ec('div');
let el1dvd4 = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.closeSidebarNav(e)}]},`id`,`sidebar-content`);
component.sidebarContent = el1dvd4;
el1dvd4.cls = {'opds': component.toggleMenu};

            for (let className in el1dvd4.cls) {
                el1dvd4.classList.toggle(className, el1dvd4.cls[className]);
            }  
            let eliXpOz = eo('ul',null,null,`class`,`nav flex-column`);
let elXAkCn = eo('li',null,null,`class`,`nav-item`);
let elOvzpC = eo('a',null,null,`class`,`nav-link bold`,`href`,`/timeline`);
elOvzpC.cls = {active: component.activeLink('/timeline')};

            for (let className in elOvzpC.cls) {
                elOvzpC.classList.toggle(className, elOvzpC.cls[className]);
            }  
            let el41K_W = eo('i',null,null,`class`,`${fas('mug-hot') + ' icon'}`);
ec('i');
text(`Timeline`);
let elcJMdk = eo('span',null,null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
let cndMyFo = component.user.isLoggedIn();
this.setState('stvP5cW', cndMyFo);
if (cndMyFo) { 
let elwCgUG = eo('li','nzqf',null,`class`,`nav-item`);
let elHX7XY = eo('a','XDOf',null,`class`,`nav-link`,`href`,`/dashboard`);
elHX7XY.cls = {active: component.activeLink('/dashboard')};

            for (let className in elHX7XY.cls) {
                elHX7XY.classList.toggle(className, elHX7XY.cls[className]);
            }  
            let elcUUUV = eo('i','yA5f',null,`class`,`${fas('home') + ' icon'}`);
ec('i');
text(`Dashboard`);
let elSB5qX = eo('span','t0If',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cnd9bMc = component.user.isLoggedIn();
this.setState('st7yjnr', cnd9bMc);
if (cnd9bMc) { 
let elesvoL = eo('li','2Vvf',null,`class`,`nav-item`);
let elPAoLZ = eo('a','E8Gf',null,`class`,`nav-link`,`href`,`/projects/me`);
elPAoLZ.cls = {active: component.activeLink('/projects/me')};

            for (let className in elPAoLZ.cls) {
                elPAoLZ.classList.toggle(className, elPAoLZ.cls[className]);
            }  
            let elqMsy_ = eo('i','kQRf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`My Projects`);
let elxSE1U = eo('span','Wsgf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndCLbv = component.user.id == 1;
this.setState('stKPC8v', cndCLbv);
if (cndCLbv) { 
let elvDWw1 = eo('li','Xuif',null,`class`,`nav-item`);
let elEWu8b = eo('a','R4df',null,`class`,`nav-link pink-text bold`,`href`,`/courses`);
elEWu8b.cls = {active: component.activeLink('/courses', STARTING_WITH_ROUTE)};

            for (let className in elEWu8b.cls) {
                elEWu8b.classList.toggle(className, elEWu8b.cls[className]);
            }  
            let elQAq7k = eo('i','mMMf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elmZ0zy = eo('span','yVyf');
text(`Courses`);
ec('span');
let elOjxLt = eo('span','bONf',null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
}let el7R7na = eo('li',null,null,`class`,`nav-item`);
let elKtNmW = eo('a',null,null,`class`,`nav-link teal-text bold`,`href`,`/english`);
elKtNmW.cls = {active: component.activeLink('/english', STARTING_WITH_ROUTE)};

            for (let className in elKtNmW.cls) {
                elKtNmW.classList.toggle(className, elKtNmW.cls[className]);
            }  
            let elDtjR3 = eo('i',null,null,`class`,`${fas('language') + ' mr-2 icon'}`);
ec('i');
let eltqQET = eo('span',null,null,`id`,`eaf`);
text(`English [EAF]`);
ec('span');
ec('a');
ec('li');
let elL7kjr = eo('li',null,null,`class`,`nav-item`);
let elC3PY7 = eo('a',null,null,`class`,`nav-link orange-text bold`,`href`,`/projects`);
elC3PY7.cls = {active: component.activeLink('/projects', STARTING_WITH_ROUTE, '/projects/me')};

            for (let className in elC3PY7.cls) {
                elC3PY7.classList.toggle(className, elC3PY7.cls[className]);
            }  
            let el19cGL = eo('i',null,null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let el8vDvf = eo('span');
text(`Projects [PMS]`);
ec('span');
let el6bcCt = eo('span',null,null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
let cndJb_6 = component.user.isLoggedIn();;
this.setState('stI9mlW', cndJb_6);
if (cndJb_6) { 
let elmHCnZ = eo('li','pQHf',null,`class`,`nav-item`);
let elmCEJS = eo('a','Daff',null,`class`,`nav-link`,`href`,`/training-ground`);
elmCEJS.cls = {active: component.activeLink('/training-ground', STARTING_WITH_ROUTE)};

            for (let className in elmCEJS.cls) {
                elmCEJS.classList.toggle(className, elmCEJS.cls[className]);
            }  
            let elQY2or = ev('img','Xf0f',null,`src`,`${assets('images/target.png')}`,`class`,`target-icon small mr-2`);
text(`Training ground`);
ec('a');
ec('li');
}let cnd1m8E = component.user.isLoggedIn();;
this.setState('sty9Tf5', cnd1m8E);
if (cnd1m8E) { 
let el5sYnw = eo('li','p15f',null,`class`,`nav-item`);
let elvcf0K = eo('a','djjf',null,`class`,`nav-link`,`href`,`/tasks`);
elvcf0K.cls = {active: component.activeLink('/tasks')};

            for (let className in elvcf0K.cls) {
                elvcf0K.classList.toggle(className, elvcf0K.cls[className]);
            }  
            let elPG4X6 = eo('i','H0Af',null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
text(`Tasks Board`);
ec('a');
ec('li');
}let elCiZjw = eo('li',null,null,`class`,`nav-item`);
let elpG65e = eo('a',null,null,`class`,`nav-link`,`href`,`/einstein-chamber`);
elpG65e.cls = {active: component.activeLink('/einstein-chamber', STARTING_WITH_ROUTE)};

            for (let className in elpG65e.cls) {
                elpG65e.classList.toggle(className, elpG65e.cls[className]);
            }  
            let elXjh0Y = ev('img',null,null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein Chamber`);
ec('a');
ec('li');
let elz3oIv = eo('li',null,null,`class`,`nav-item`);
let elfHCq0 = eo('a',null,null,`class`,`nav-link`,`href`,`/academy`);
elfHCq0.cls = {active: component.activeLink('/academy', STARTING_WITH_ROUTE)};

            for (let className in elfHCq0.cls) {
                elfHCq0.classList.toggle(className, elfHCq0.cls[className]);
            }  
            let elrCz0B = eo('i',null,null,`class`,`${fas('university') + ' icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
let cndXMPx = component.user.isLoggedIn();;
this.setState('st8UQ2x', cndXMPx);
if (cndXMPx) { 
let eljvN8o = eo('li','ITGf',null,`class`,`nav-item`);
let elL2lxW = eo('a','mlyf',null,`class`,`nav-link`,`href`,`/arena`);
elL2lxW.cls = {active: component.activeLink('/arena')};

            for (let className in elL2lxW.cls) {
                elL2lxW.classList.toggle(className, elL2lxW.cls[className]);
            }  
            let elq9xDX = eo('i','6HGf',null,`class`,`${fas('biohazard') + ' icon'}`);
ec('i');
text(`Arena`);
ec('a');
ec('li');
}ec('ul');
let cndrFm3 = component.user.accountType == 'admin';
this.setState('sth290g', cndrFm3);
if (cndrFm3) { 
let elpyp6P = eo('ul','uURf',null,`class`,`nav flex-column`);
let elYFgl9 = eo('h6','0ZUf',null,`class`,`sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`);
let el3q8dd = eo('span','XmCf');
text(`Administrator department`);
ec('span');
let el4qnWy = eo('a','C95f',null,`class`,`d-flex align-items-center text-muted`,`href`,`#`);
ec('a');
ec('h6');
let elWCrl2 = eo('li','HB5f',null,`class`,`nav-item`);
let elpGNEq = eo('a','4m1f',null,`class`,`nav-link`,`href`,`/admin/tags`);
elpGNEq.cls = {active: component.activeLink('/admin/tags')};

            for (let className in elpGNEq.cls) {
                elpGNEq.classList.toggle(className, elpGNEq.cls[className]);
            }  
            let elAqaTy = eo('i','XXyf',null,`class`,`${fas('tags') + ' icon'}`);
ec('i');
text(`Tags`);
ec('a');
ec('li');
let ellJ8rr = eo('li','2sEf',null,`class`,`nav-item`);
let elOA6bK = eo('a','m3df',null,`class`,`nav-link`,`href`,`/admin/users`);
elOA6bK.cls = {active: component.activeLink('/admin/users')};

            for (let className in elOA6bK.cls) {
                elOA6bK.classList.toggle(className, elOA6bK.cls[className]);
            }  
            let elzgua_ = eo('i','74qf',null,`class`,`${fas('users') + ' icon'}`);
ec('i');
text(`users`);
ec('a');
ec('li');
let el5To_U = eo('li','664f',null,`class`,`nav-item`);
let elJ3PWx = eo('a','Xu4f',null,`class`,`nav-link`,`href`,`/admin/posts`);
elJ3PWx.cls = {active: component.activeLink('/admin/posts')};

            for (let className in elJ3PWx.cls) {
                elJ3PWx.classList.toggle(className, elJ3PWx.cls[className]);
            }  
            let elm_Nz0 = eo('i','4FLf',null,`class`,`${fas('mortar-pestle') + ' icon'}`);
ec('i');
text(`Posts`);
ec('a');
ec('li');
let elIpDMy = eo('li','ZyCf',null,`class`,`nav-item`);
let elzdicY = eo('a','agwf',null,`class`,`nav-link`,`href`,`/admin/academy/tracks`);
elzdicY.cls = {active: component.activeLink('/admin/academy/tracks')};

            for (let className in elzdicY.cls) {
                elzdicY.classList.toggle(className, elzdicY.cls[className]);
            }  
            let elbOkZS = eo('i','8zff',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Academy Tracks`);
ec('a');
ec('li');
let elwgGx9 = eo('li','A0Cf',null,`class`,`nav-item`);
let elRZIV2 = eo('a','YKvf',null,`class`,`nav-link`,`href`,`/admin/offline-courses`);
elRZIV2.cls = {active: component.activeLink('/admin/offline-courses')};

            for (let className in elRZIV2.cls) {
                elRZIV2.classList.toggle(className, elRZIV2.cls[className]);
            }  
            let elPzIcQ = eo('i','RF1f',null,`class`,`${fas('door-open') + ' icon'}`);
ec('i');
text(`offline tracks`);
ec('a');
ec('li');
let el5x_HU = eo('li','duUf',null,`class`,`nav-item`);
let elBfE5b = eo('a','Fnxf',null,`class`,`nav-link`,`href`,`/admin/cocktails/categories`);
elBfE5b.cls = {active: component.activeLink('/admin/cocktails/categories')};

            for (let className in elBfE5b.cls) {
                elBfE5b.classList.toggle(className, elBfE5b.cls[className]);
            }  
            let elDcIs7 = eo('i','SEBf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails categories`);
ec('a');
ec('li');
let elW7XYs = eo('li','n5hf',null,`class`,`nav-item`);
let el6w38v = eo('a','HzQf',null,`class`,`nav-link`,`href`,`/admin/cocktails`);
el6w38v.cls = {active: component.activeLink('/admin/cocktails')};

            for (let className in el6w38v.cls) {
                el6w38v.classList.toggle(className, el6w38v.cls[className]);
            }  
            let elknBoi = eo('i','S4uf',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails`);
ec('a');
ec('li');
let el9UMl6 = eo('li','CRRf',null,`class`,`nav-item`);
let el1EhUL = eo('a','3Wef',null,`class`,`nav-link`,`href`,`/admin/training-ground`);
el1EhUL.cls = {active: component.activeLink('/admin/training-ground')};

            for (let className in el1EhUL.cls) {
                el1EhUL.classList.toggle(className, el1EhUL.cls[className]);
            }  
            let elfqNrH = eo('i','gIZf',null,`class`,`${fas('bullseye') + ' icon'}`);
ec('i');
text(`Training ground`);
ec('a');
ec('li');
let el6waZH = eo('li','jzCf',null,`class`,`nav-item`);
let elH95Yw = eo('a','OjJf',null,`class`,`nav-link`,`href`,`/admin/academy/tracks/suggest-topics`);
elH95Yw.cls = {active: component.activeLink('/admin/academy/tracks/suggest-topics')};

            for (let className in elH95Yw.cls) {
                elH95Yw.classList.toggle(className, elH95Yw.cls[className]);
            }  
            let elBGekZ = eo('i','bytf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Tracks Suggest topics`);
ec('a');
ec('li');
let elBxMw1 = eo('li','xSjf',null,`class`,`nav-item`);
let elRN4bb = eo('a','4qjf',null,`class`,`nav-link`,`href`,`/admin/chat-rooms-puzzles-answers`);
elRN4bb.cls = {active: component.activeLink('/admin/chat-rooms-puzzles-answers')};

            for (let className in elRN4bb.cls) {
                elRN4bb.classList.toggle(className, elRN4bb.cls[className]);
            }  
            let elIporu = eo('i','9FYf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Chat rooms answers`);
ec('a');
ec('li');
let elybtz7 = eo('li','c5vf',null,`class`,`nav-item`);
let elMj0tx = eo('a','8z2f',null,`class`,`nav-link`,`href`,`/admin/einstein/answers`);
elMj0tx.cls = {active: component.activeLink('/admin/einstein/answers')};

            for (let className in elMj0tx.cls) {
                elMj0tx.classList.toggle(className, elMj0tx.cls[className]);
            }  
            let elHFTz6 = eo('i','XTPf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein answers`);
ec('a');
ec('li');
let el495QN = eo('li','wSUf',null,`class`,`nav-item`);
let elYiZD7 = eo('a','R6Cf',null,`class`,`nav-link`,`href`,`/admin/einstein`);
elYiZD7.cls = {active: component.activeLink('/admin/einstein')};

            for (let className in elYiZD7.cls) {
                elYiZD7.classList.toggle(className, elYiZD7.cls[className]);
            }  
            let elQcBh_ = eo('i','w57f',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein`);
ec('a');
ec('li');
let eldaT3Q = eo('li','eV9f',null,`class`,`nav-item`);
let elhy3co = eo('a','WcKf',null,`class`,`nav-link`,`href`,`/admin/academy/answers`);
elhy3co.cls = {active: component.activeLink('/admin/answers')};

            for (let className in elhy3co.cls) {
                elhy3co.classList.toggle(className, elhy3co.cls[className]);
            }  
            let elO49Oc = eo('i','KzMf',null,`class`,`${fas('file') + ' icon'}`);
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