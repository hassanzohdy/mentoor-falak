_Component({
                selector: 'sidebar',
                c: 'Sidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['toggleMenu','toggle','closeSidebarNav','activeLink','user'],
                children: {},
                render: function (component) {
                    let el1qcAL = eo('nav',null,null,`class`,`sidebar-sticky`);
component.element = el1qcAL;
el1qcAL.cls = {'opened': component.toggleMenu};

            for (let className in el1qcAL.cls) {
                el1qcAL.classList.toggle(className, el1qcAL.cls[className]);
            }  
            let elAKh2L = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggle()}]},`class`,`overlay`);
ec('div');
let el1JnB3 = eo('div',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.closeSidebarNav(e)}]},`id`,`sidebar-content`);
component.sidebarContent = el1JnB3;
el1JnB3.cls = {'opds': component.toggleMenu};

            for (let className in el1JnB3.cls) {
                el1JnB3.classList.toggle(className, el1JnB3.cls[className]);
            }  
            let elththy = eo('ul',null,null,`class`,`nav flex-column`);
let elI7wso = eo('li',null,null,`class`,`nav-item`);
let el97wmU = eo('a',null,null,`class`,`nav-link bold`,`href`,`/timeline`);
el97wmU.cls = {active: component.activeLink('/timeline')};

            for (let className in el97wmU.cls) {
                el97wmU.classList.toggle(className, el97wmU.cls[className]);
            }  
            let elEemCc = eo('i',null,null,`class`,`${fas('mug-hot') + ' icon'}`);
ec('i');
text(`Timeline`);
let elQe28x = eo('span',null,null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
let cnd1KYp = component.user.isLoggedIn();
this.setState('st57jws', cnd1KYp);
if (cnd1KYp) { 
let elb5IXQ = eo('li','fl3f',null,`class`,`nav-item`);
let elX0OMo = eo('a','goUf',null,`class`,`nav-link`,`href`,`/dashboard`);
elX0OMo.cls = {active: component.activeLink('/dashboard')};

            for (let className in elX0OMo.cls) {
                elX0OMo.classList.toggle(className, elX0OMo.cls[className]);
            }  
            let el6VDdf = eo('i','buOf',null,`class`,`${fas('home') + ' icon'}`);
ec('i');
text(`Dashboard`);
let eluH9AC = eo('span','c8gf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cndGUrr = component.user.isLoggedIn();
this.setState('st6FHMp', cndGUrr);
if (cndGUrr) { 
let el8U3cs = eo('li','gTff',null,`class`,`nav-item`);
let elrt5LG = eo('a','21ef',null,`class`,`nav-link`,`href`,`/projects/me`);
elrt5LG.cls = {active: component.activeLink('/projects/me')};

            for (let className in elrt5LG.cls) {
                elrt5LG.classList.toggle(className, elrt5LG.cls[className]);
            }  
            let elj64FO = eo('i','GgYf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
text(`My Projects`);
let elR3LFJ = eo('span','fkPf',null,`class`,`sr-only`);
text(`(current)`);
ec('span');
ec('a');
ec('li');
}let cnd6aP6 = component.user.id == 1;
this.setState('stFds0t', cnd6aP6);
if (cnd6aP6) { 
let elYlBW6 = eo('li','A_Hf',null,`class`,`nav-item`);
let elYL8fp = eo('a','VPDf',null,`class`,`nav-link pink-text bold`,`href`,`/courses`);
elYL8fp.cls = {active: component.activeLink('/courses', STARTING_WITH_ROUTE)};

            for (let className in elYL8fp.cls) {
                elYL8fp.classList.toggle(className, elYL8fp.cls[className]);
            }  
            let elc8jIV = eo('i','k7jf',null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let el1lOub = eo('span','4jXf');
text(`Courses`);
ec('span');
let elwVj1o = eo('span','5AOf',null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
}let elq1avx = eo('li',null,null,`class`,`nav-item`);
let elNr0oq = eo('a',null,null,`class`,`nav-link teal-text bold`,`href`,`/english`);
elNr0oq.cls = {active: component.activeLink('/english', STARTING_WITH_ROUTE)};

            for (let className in elNr0oq.cls) {
                elNr0oq.classList.toggle(className, elNr0oq.cls[className]);
            }  
            let elK0gb1 = eo('i',null,null,`class`,`${fas('language') + ' mr-2 icon'}`);
ec('i');
let elO83vK = eo('span',null,null,`id`,`eaf`);
text(`English [EAF]`);
ec('span');
ec('a');
ec('li');
let el5N8Iw = eo('li',null,null,`class`,`nav-item`);
let elISw3b = eo('a',null,null,`class`,`nav-link orange-text bold`,`href`,`/projects`);
elISw3b.cls = {active: component.activeLink('/projects', STARTING_WITH_ROUTE, '/projects/me')};

            for (let className in elISw3b.cls) {
                elISw3b.classList.toggle(className, elISw3b.cls[className]);
            }  
            let elkuga3 = eo('i',null,null,`class`,`${fas('suitcase') + ' mr-2 icon'}`);
ec('i');
let elkPVlH = eo('span');
text(`Projects [PMS]`);
ec('span');
let elmqoXN = eo('span',null,null,`class`,`new`);
text(`NEW`);
ec('span');
ec('a');
ec('li');
let cndYSAh = component.user.isLoggedIn();;
this.setState('stL6G3z', cndYSAh);
if (cndYSAh) { 
let elHlqug = eo('li','k5mf',null,`class`,`nav-item`);
let elv1Da6 = eo('a','LTdf',null,`class`,`nav-link`,`href`,`/training-ground`);
elv1Da6.cls = {active: component.activeLink('/training-ground', STARTING_WITH_ROUTE)};

            for (let className in elv1Da6.cls) {
                elv1Da6.classList.toggle(className, elv1Da6.cls[className]);
            }  
            let elHZ_Gj = ev('img','wyVf',null,`src`,`${assets('images/target.png')}`,`class`,`target-icon small mr-2`);
text(`Training ground`);
ec('a');
ec('li');
}let cndqKEz = component.user.isLoggedIn();;
this.setState('st8LaaX', cndqKEz);
if (cndqKEz) { 
let elVI3jZ = eo('li','2Clf',null,`class`,`nav-item`);
let elYhRx4 = eo('a','bJTf',null,`class`,`nav-link`,`href`,`/tasks`);
elYhRx4.cls = {active: component.activeLink('/tasks')};

            for (let className in elYhRx4.cls) {
                elYhRx4.classList.toggle(className, elYhRx4.cls[className]);
            }  
            let el6ytTa = eo('i','pKdf',null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
text(`Tasks Board`);
ec('a');
ec('li');
}let elJdWiX = eo('li',null,null,`class`,`nav-item`);
let elc4l9z = eo('a',null,null,`class`,`nav-link`,`href`,`/einstein-chamber`);
elc4l9z.cls = {active: component.activeLink('/einstein-chamber', STARTING_WITH_ROUTE)};

            for (let className in elc4l9z.cls) {
                elc4l9z.classList.toggle(className, elc4l9z.cls[className]);
            }  
            let el9rIFh = ev('img',null,null,`src`,`${assets('images/ein-sm.png')}`,`class`,`einstein-icon`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
text(`Einstein Chamber`);
ec('a');
ec('li');
let elZn1pr = eo('li',null,null,`class`,`nav-item`);
let elsloro = eo('a',null,null,`class`,`nav-link`,`href`,`/academy`);
elsloro.cls = {active: component.activeLink('/academy', STARTING_WITH_ROUTE)};

            for (let className in elsloro.cls) {
                elsloro.classList.toggle(className, elsloro.cls[className]);
            }  
            let elYQGZ6 = eo('i',null,null,`class`,`${fas('university') + ' icon'}`);
ec('i');
text(`Academy`);
ec('a');
ec('li');
ec('ul');
let cndK6Is = component.user.accountType == 'admin';
this.setState('stQLmW7', cndK6Is);
if (cndK6Is) { 
let elFBsrg = eo('ul','2TGf',null,`class`,`nav flex-column`);
let elWNlbW = eo('h6','Ezrf',null,`class`,`sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`);
let el8mDMz = eo('span','DZ_f');
text(`Administrator department`);
ec('span');
let elt3KBQ = eo('a','PW9f',null,`class`,`d-flex align-items-center text-muted`,`href`,`#`);
ec('a');
ec('h6');
let elFIZmg = eo('li','Wvvf',null,`class`,`nav-item`);
let eluhVzI = eo('a','pHQf',null,`class`,`nav-link`,`href`,`/admin/tags`);
eluhVzI.cls = {active: component.activeLink('/admin/tags')};

            for (let className in eluhVzI.cls) {
                eluhVzI.classList.toggle(className, eluhVzI.cls[className]);
            }  
            let elAOR7w = eo('i','tEmf',null,`class`,`${fas('tags') + ' icon'}`);
ec('i');
text(`Tags`);
ec('a');
ec('li');
let elNo_AN = eo('li','xzof',null,`class`,`nav-item`);
let elaM3_V = eo('a','v6_f',null,`class`,`nav-link`,`href`,`/admin/users`);
elaM3_V.cls = {active: component.activeLink('/admin/users')};

            for (let className in elaM3_V.cls) {
                elaM3_V.classList.toggle(className, elaM3_V.cls[className]);
            }  
            let elrszba = eo('i','W5cf',null,`class`,`${fas('users') + ' icon'}`);
ec('i');
text(`users`);
ec('a');
ec('li');
let el_xTfz = eo('li','d3zf',null,`class`,`nav-item`);
let elqql4v = eo('a','uicf',null,`class`,`nav-link`,`href`,`/admin/posts`);
elqql4v.cls = {active: component.activeLink('/admin/posts')};

            for (let className in elqql4v.cls) {
                elqql4v.classList.toggle(className, elqql4v.cls[className]);
            }  
            let elPjrg8 = eo('i','YN3f',null,`class`,`${fas('mortar-pestle') + ' icon'}`);
ec('i');
text(`Posts`);
ec('a');
ec('li');
let elN7MMb = eo('li','dd3f',null,`class`,`nav-item`);
let elYEiAl = eo('a','ioof',null,`class`,`nav-link`,`href`,`/admin/academy/tracks`);
elYEiAl.cls = {active: component.activeLink('/admin/academy/tracks')};

            for (let className in elYEiAl.cls) {
                elYEiAl.classList.toggle(className, elYEiAl.cls[className]);
            }  
            let elDmyrV = eo('i','G_of',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Academy Tracks`);
ec('a');
ec('li');
let elOZqWH = eo('li','mhYf',null,`class`,`nav-item`);
let elp71sf = eo('a','gLZf',null,`class`,`nav-link`,`href`,`/admin/offline-courses`);
elp71sf.cls = {active: component.activeLink('/admin/offline-courses')};

            for (let className in elp71sf.cls) {
                elp71sf.classList.toggle(className, elp71sf.cls[className]);
            }  
            let elyDNJU = eo('i','cXff',null,`class`,`${fas('door-open') + ' icon'}`);
ec('i');
text(`offline tracks`);
ec('a');
ec('li');
let elYdYq1 = eo('li','64Jf',null,`class`,`nav-item`);
let elje2Em = eo('a','CrUf',null,`class`,`nav-link`,`href`,`/admin/cocktails/categories`);
elje2Em.cls = {active: component.activeLink('/admin/cocktails/categories')};

            for (let className in elje2Em.cls) {
                elje2Em.classList.toggle(className, elje2Em.cls[className]);
            }  
            let elOEOse = eo('i','gN1f',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails categories`);
ec('a');
ec('li');
let elLmSiB = eo('li','tyif',null,`class`,`nav-item`);
let elOMczt = eo('a','0Xqf',null,`class`,`nav-link`,`href`,`/admin/cocktails`);
elOMczt.cls = {active: component.activeLink('/admin/cocktails')};

            for (let className in elOMczt.cls) {
                elOMczt.classList.toggle(className, elOMczt.cls[className]);
            }  
            let elL0orQ = eo('i','l_Ff',null,`class`,`${fas('glass-martini-alt') + ' icon'}`);
ec('i');
text(`Cocktails`);
ec('a');
ec('li');
let el1IUtX = eo('li','zWef',null,`class`,`nav-item`);
let el7YiTR = eo('a','XYmf',null,`class`,`nav-link`,`href`,`/admin/training-ground`);
el7YiTR.cls = {active: component.activeLink('/admin/training-ground')};

            for (let className in el7YiTR.cls) {
                el7YiTR.classList.toggle(className, el7YiTR.cls[className]);
            }  
            let elW3gtx = eo('i','zlcf',null,`class`,`${fas('bullseye') + ' icon'}`);
ec('i');
text(`Training ground`);
ec('a');
ec('li');
let elwgFLb = eo('li','kXgf',null,`class`,`nav-item`);
let elsmRf7 = eo('a','LM7f',null,`class`,`nav-link`,`href`,`/admin/academy/tracks/suggest-topics`);
elsmRf7.cls = {active: component.activeLink('/admin/academy/tracks/suggest-topics')};

            for (let className in elsmRf7.cls) {
                elsmRf7.classList.toggle(className, elsmRf7.cls[className]);
            }  
            let elTg3lf = eo('i','E4Qf',null,`class`,`${fas('folder') + ' icon'}`);
ec('i');
text(`Tracks Suggest topics`);
ec('a');
ec('li');
let el82Fer = eo('li','q5Ef',null,`class`,`nav-item`);
let elxTtl1 = eo('a','ST6f',null,`class`,`nav-link`,`href`,`/admin/chat-rooms-puzzles-answers`);
elxTtl1.cls = {active: component.activeLink('/admin/chat-rooms-puzzles-answers')};

            for (let className in elxTtl1.cls) {
                elxTtl1.classList.toggle(className, elxTtl1.cls[className]);
            }  
            let elMNn9D = eo('i','JMUf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Chat rooms answers`);
ec('a');
ec('li');
let elsJwgq = eo('li','SPFf',null,`class`,`nav-item`);
let elKo83p = eo('a','otMf',null,`class`,`nav-link`,`href`,`/admin/einstein/answers`);
elKo83p.cls = {active: component.activeLink('/admin/einstein/answers')};

            for (let className in elKo83p.cls) {
                elKo83p.classList.toggle(className, elKo83p.cls[className]);
            }  
            let elptBKD = eo('i','MwGf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein answers`);
ec('a');
ec('li');
let el8FswM = eo('li','eIKf',null,`class`,`nav-item`);
let eliSGqV = eo('a','MBWf',null,`class`,`nav-link`,`href`,`/admin/einstein`);
eliSGqV.cls = {active: component.activeLink('/admin/einstein')};

            for (let className in eliSGqV.cls) {
                eliSGqV.classList.toggle(className, eliSGqV.cls[className]);
            }  
            let eli3kN9 = eo('i','MgGf',null,`class`,`${fas('file') + ' icon'}`);
ec('i');
text(`Einstein`);
ec('a');
ec('li');
let elOqlwc = eo('li','0cuf',null,`class`,`nav-item`);
let elb5NiS = eo('a','W11f',null,`class`,`nav-link`,`href`,`/admin/academy/answers`);
elb5NiS.cls = {active: component.activeLink('/admin/answers')};

            for (let className in elb5NiS.cls) {
                elb5NiS.classList.toggle(className, elb5NiS.cls[className]);
            }  
            let el6CYgZ = eo('i','W23f',null,`class`,`${fas('file') + ' icon'}`);
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