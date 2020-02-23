_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let el1E62V = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cndTTI5 = component.project;
this.setState('stQLqRq', cndTTI5);
if (cndTTI5) { 
let elJiFVe = eo('h1','VwSf',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let el2GVYG = eo('ul','Tcdf');
let elzOg6K = eo('li','vQcf');
let elRULEy = eo('a','h2df',null,`href`,`${URLS.project(component.project)}`);
elRULEy.cls = component.isActiveLink('');

            for (let className in elRULEy.cls) {
                elRULEy.classList.toggle(className, elRULEy.cls[className]);
            }  
            let elLV7gU = eo('i','n_ff',null,`class`,`${fas('tachometer-alt') + ' icon'}`);
ec('i');
let elKNijW = eo('span','N4Af');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let eloL7eB = eo('li','fYTf');
let el9kPW2 = eo('a','FiGf',null,`href`,`${URLS.project(component.project, 'resources')}`);
el9kPW2.cls = component.isActiveLink('resources');

            for (let className in el9kPW2.cls) {
                el9kPW2.classList.toggle(className, el9kPW2.cls[className]);
            }  
            let elZeNvR = eo('i','pAof',null,`class`,`${fas('bezier-curve') + ' icon'}`);
ec('i');
let elDp6by = eo('span','c9Of');
text(`Resources`);
ec('span');
let cndZsNG = ! component.project.isMember;
this.setState('stXkXJm', cndZsNG);
if (cndZsNG) { 
let elkdRLB = eo('i','1dAf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elkdRLB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elxxPZK = eo('li');
let elpn4YJ = eo('a',null,null,`href`,`${URLS.project(component.project, 'members')}`);
elpn4YJ.cls = component.isActiveLink('members');

            for (let className in elpn4YJ.cls) {
                elpn4YJ.classList.toggle(className, elpn4YJ.cls[className]);
            }  
            let elQcOtc = eo('i',null,null,`class`,`${fas('users') + ' icon'}`);
ec('i');
let elRxciE = eo('span');
text(`Members`);
ec('span');
let cndDTZq = ! component.project.isMember;
this.setState('stgjFSY', cndDTZq);
if (cndDTZq) { 
let el1_MWr = eo('i','4vSf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el1_MWr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elGLtcy = eo('li');
let elN4W1Q = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`);
elN4W1Q.cls = component.isActiveLink('sprints');

            for (let className in elN4W1Q.cls) {
                elN4W1Q.classList.toggle(className, elN4W1Q.cls[className]);
            }  
            let elN0bjJ = eo('i',null,null,`class`,`${fas('running') + ' icon'}`);
ec('i');
let elNwHsQ = eo('span');
text(`Sprints`);
ec('span');
let cnduiAA = ! component.project.isMember;
this.setState('stWmhbG', cnduiAA);
if (cnduiAA) { 
let elje7VA = eo('i','az1f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elje7VA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elKZA_j = eo('li');
let ell7rH4 = eo('a',null,null,`href`,`${URLS.project(component.project, 'user-stories')}`);
ell7rH4.cls = component.isActiveLink('user-stories');

            for (let className in ell7rH4.cls) {
                ell7rH4.classList.toggle(className, ell7rH4.cls[className]);
            }  
            let elorMVo = eo('i',null,null,`class`,`${fas('sticky-note') + ' icon'}`);
ec('i');
let elMMpXi = eo('span');
text(`User Stories`);
ec('span');
let cndPOWk = ! component.project.isMember;
this.setState('staLXvW', cndPOWk);
if (cndPOWk) { 
let eliHDTK = eo('i','JH3f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eliHDTK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elqhLjT = eo('li');
let elQVe0a = eo('a',null,null,`href`,`${URLS.project(component.project, 'tasks-board')}`);
elQVe0a.cls = component.isActiveLink('tasks-board');

            for (let className in elQVe0a.cls) {
                elQVe0a.classList.toggle(className, elQVe0a.cls[className]);
            }  
            let elPtyi5 = eo('i',null,null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
let elqO9SA = eo('span');
text(`Tasks Board`);
ec('span');
let cndDagL = ! component.project.isMember;
this.setState('stfRKoi', cndDagL);
if (cndDagL) { 
let elDALjI = eo('i','4Caf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elDALjI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el1Xfhz = eo('li');
let elMhE1s = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`);
elMhE1s.cls = component.isActiveLink('test-suits');

            for (let className in elMhE1s.cls) {
                elMhE1s.classList.toggle(className, elMhE1s.cls[className]);
            }  
            let elMshoG = eo('i',null,null,`class`,`${fas('toolbox') + ' icon'}`);
ec('i');
let el9dXJi = eo('span');
text(`Test Suits`);
ec('span');
let cndaPsu = ! component.project.isMember;
this.setState('sttIB0x', cndaPsu);
if (cndaPsu) { 
let elXsBwJ = eo('i','oTkf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elXsBwJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elPimZn = eo('li');
let elUqHSd = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``,`class`,`pt-0`);
elUqHSd.cls = component.isActiveLink('bugs');

            for (let className in elUqHSd.cls) {
                elUqHSd.classList.toggle(className, elUqHSd.cls[className]);
            }  
            let elK_vy0 = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elxRUcN = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndV5wp = ! component.project.isMember;
this.setState('st9g_Yr', cndV5wp);
if (cndV5wp) { 
let el7Xbw9 = eo('i','ILif',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el7Xbw9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elUqHSd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elQXxfM = eo('li');
let el0co6D = eo('a',null,null,`href`,`${URLS.project(component.project, 'meetings')}`);
el0co6D.cls = component.isActiveLink('meetings');

            for (let className in el0co6D.cls) {
                el0co6D.classList.toggle(className, el0co6D.cls[className]);
            }  
            let elGBih_ = eo('i',null,null,`class`,`${fas('handshake') + ' icon'}`);
ec('i');
let el5vzWT = eo('span');
text(`Meetings`);
ec('span');
let cndvaVL = ! component.project.isMember;
this.setState('stOIeMY', cndvaVL);
if (cndvaVL) { 
let elSEYxg = eo('i','uCcf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elSEYxg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cnd1aQh = component.project.isHigherAuthority;
this.setState('st851Mx', cnd1aQh);
if (cnd1aQh) { 
let elMOPjA = eo('li','QJHf');
let elPlxqA = eo('a','_Ezf',null,`href`,`${URLS.project(component.project, 'recruitment')}`);
elPlxqA.cls = component.isActiveLink('recruitment');

            for (let className in elPlxqA.cls) {
                elPlxqA.classList.toggle(className, elPlxqA.cls[className]);
            }  
            let elyNpLc = eo('i','Webf',null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
let eldYc1K = eo('span','ST1f');
text(`Recruitment`);
ec('span');
let cnds1Tz = ! component.project.isMember;
this.setState('st70Env', cnds1Tz);
if (cnds1Tz) { 
let el9FWJj = eo('i','dz0f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el9FWJj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let el7UW2A = eo('li');
let el7dhcy = eo('a',null,null,`href`,`${URLS.project(component.project, 'teams')}`);
el7dhcy.cls = component.isActiveLink('teams');

            for (let className in el7dhcy.cls) {
                el7dhcy.classList.toggle(className, el7dhcy.cls[className]);
            }  
            let elLfOLV = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let eleoSzn = eo('span');
text(`Teams`);
ec('span');
let cnd8nNx = ! component.project.isMember;
this.setState('stXBMVL', cnd8nNx);
if (cnd8nNx) { 
let elX0bND = eo('i','sF8f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elX0bND;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndM3Y6 = component.project.isHigherAuthority;
this.setState('st8DXhs', cndM3Y6);
if (cndM3Y6) { 
let elFxCey = eo('li','Uyhf');
let el0Ivuq = eo('a','2Fxf',null,`href`,`${URLS.project(component.project, 'supervisors')}`);
el0Ivuq.cls = component.isActiveLink('supervisors');

            for (let className in el0Ivuq.cls) {
                el0Ivuq.classList.toggle(className, el0Ivuq.cls[className]);
            }  
            let el8GnV3 = eo('i','gilf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let el2Qinn = eo('span','x4tf');
text(`Supervisors`);
ec('span');
let cndaKCa = ! component.project.isMember;
this.setState('st8MSLZ', cndaKCa);
if (cndaKCa) { 
let elxJn0b = eo('i','htof',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elxJn0b;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndY6hw = component.project.isHigherAuthority;
this.setState('stc6VjZ', cndY6hw);
if (cndY6hw) { 
let elbdHwM = eo('li','hYhf');
let elNuD87 = eo('a','2_Af',null,`href`,`${URLS.project(component.project, 'client')}`);
elNuD87.cls = component.isActiveLink('client');

            for (let className in elNuD87.cls) {
                elNuD87.classList.toggle(className, elNuD87.cls[className]);
            }  
            let elshx9T = eo('i','v7jf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let el0JaQY = eo('span','sYpf');
text(`Client`);
ec('span');
let cndHy6v = ! component.project.isMember;
this.setState('ste9Ny5', cndHy6v);
if (cndHy6v) { 
let elnX87O = eo('i','r8Kf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elnX87O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let el6cJ_L = eo('li');
let elC8T4m = eo('a',null,null,`href`,`${URLS.project(component.project, 'modules')}`);
elC8T4m.cls = component.isActiveLink('modules');

            for (let className in elC8T4m.cls) {
                elC8T4m.classList.toggle(className, elC8T4m.cls[className]);
            }  
            let elijGGu = eo('i',null,null,`class`,`${fas('cogs') + ' icon'}`);
ec('i');
let el7QmAg = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let eltCY7w = eo('li');
let elqOeFJ = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`);
elqOeFJ.cls = component.isActiveLink('change-requests');

            for (let className in elqOeFJ.cls) {
                elqOeFJ.classList.toggle(className, elqOeFJ.cls[className]);
            }  
            let el0lmNo = eo('i',null,null,`class`,`${fas('exchange-alt') + ' icon'}`);
ec('i');
let elHGb7T = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndW2Nl = ! component.project.isMember;
this.setState('stPcv1t', cndW2Nl);
if (cndW2Nl) { 
let el4Tezx = eo('i','hkSf',null,`class`,`${fas('lock') + ' float-right mt-2 icon'}`);
ec('i');
}ec('a');
ec('li');
let elZ922R = eo('li');
let eloDEw1 = eo('a',null,null,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
eloDEw1.cls = component.isActiveLink('srs');

            for (let className in eloDEw1.cls) {
                eloDEw1.classList.toggle(className, eloDEw1.cls[className]);
            }  
            let el413aD = eo('i',null,null,`class`,`${fas('book') + ' icon'}`);
ec('i');
let elPimWf = eo('span');
text(`(SRS)`);
ec('span');
let cndxY3H = ! component.project.isMember;
this.setState('stRTbsN', cndxY3H);
if (cndxY3H) { 
let elAzRc1 = eo('i','r32f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elAzRc1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = eloDEw1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let elkCufc = eo('li');
let el_ppu9 = eo('a',null,null,`href`,`${URLS.project(component.project, 'documentation')}`);
el_ppu9.cls = component.isActiveLink('documentation');

            for (let className in el_ppu9.cls) {
                el_ppu9.classList.toggle(className, el_ppu9.cls[className]);
            }  
            let el_1VQk = eo('i',null,null,`class`,`${fas('book-dead') + ' icon'}`);
ec('i');
let elk56tH = eo('span');
text(`Documentation`);
ec('span');
let cndM9cj = ! component.project.isMember;
this.setState('st7kv3U', cndM9cj);
if (cndM9cj) { 
let elzF3Qc = eo('i','yzRf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elzF3Qc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elOKKZj = eo('li');
let elTG8lN = eo('a',null,null,`href`,`${URLS.project(component.project, 'discussions')}`);
elTG8lN.cls = component.isActiveLink('discussions');

            for (let className in elTG8lN.cls) {
                elTG8lN.classList.toggle(className, elTG8lN.cls[className]);
            }  
            let elZYbWg = eo('i',null,null,`class`,`${fab('rocketchat') + ' icon'}`);
ec('i');
let elGDDXx = eo('span');
text(`Discussions`);
ec('span');
let cndkeEH = ! component.project.isMember;
this.setState('st0J5Y3', cndkeEH);
if (cndkeEH) { 
let elWqmzJ = eo('i','ulCf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elWqmzJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elsdDXX = eo('li');
let elR0HgO = eo('a',null,null,`href`,`${URLS.project(component.project, 'fund')}`);
elR0HgO.cls = component.isActiveLink('fund');

            for (let className in elR0HgO.cls) {
                elR0HgO.classList.toggle(className, elR0HgO.cls[className]);
            }  
            let eliV3ok = eo('i',null,null,`class`,`${fas('coins') + ' icon'}`);
ec('i');
let el_MoLk = eo('span');
text(`Fund`);
ec('span');
let cndfdgt = ! component.project.isMember;
this.setState('stD_RTG', cndfdgt);
if (cndfdgt) { 
let elJ6j2E = eo('i','avef',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elJ6j2E;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cnd4K9K = component.project.isHigherAuthority;
this.setState('steRBfy', cnd4K9K);
if (cnd4K9K) { 
let el_eJXe = eo('li','foqf');
let el9O2Z1 = eo('a','1d_f',null,`href`,`${URLS.project(component.project, 'settings')}`);
el9O2Z1.cls = component.isActiveLink('settings');

            for (let className in el9O2Z1.cls) {
                el9O2Z1.classList.toggle(className, el9O2Z1.cls[className]);
            }  
            let elvUiTh = eo('i','r01f',null,`class`,`${fas('cog') + ' icon'}`);
ec('i');
let ellu5sT = eo('span','yCwf');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });