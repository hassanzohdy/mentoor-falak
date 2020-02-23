_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let el1yfyu = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cndH022 = component.project;
this.setState('stUI5wd', cndH022);
if (cndH022) { 
let elb3Wrp = eo('h1','D5Jf',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let elUPVhv = eo('ul','wKNf');
let elIPiVH = eo('li','g2rf');
let elKwKC6 = eo('a','bGof',null,`href`,`${URLS.project(component.project)}`);
elKwKC6.cls = component.isActiveLink('');

            for (let className in elKwKC6.cls) {
                elKwKC6.classList.toggle(className, elKwKC6.cls[className]);
            }  
            let el14St6 = eo('i','jsYf',null,`class`,`${fas('tachometer-alt') + ' icon'}`);
ec('i');
let el4k4fl = eo('span','sPjf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let elplBJ2 = eo('li','z0Yf');
let elMn2V9 = eo('a','FJvf',null,`href`,`${URLS.project(component.project, 'resources')}`);
elMn2V9.cls = component.isActiveLink('resources');

            for (let className in elMn2V9.cls) {
                elMn2V9.classList.toggle(className, elMn2V9.cls[className]);
            }  
            let elDRhiQ = eo('i','sfjf',null,`class`,`${fas('bezier-curve') + ' icon'}`);
ec('i');
let elolVi4 = eo('span','kvFf');
text(`Resources`);
ec('span');
let cndGOO_ = ! component.project.isMember;
this.setState('stoT3tJ', cndGOO_);
if (cndGOO_) { 
let elR8cA9 = eo('i','rgkf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elR8cA9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elf8OCq = eo('li');
let elXv20A = eo('a',null,null,`href`,`${URLS.project(component.project, 'members')}`);
elXv20A.cls = component.isActiveLink('members');

            for (let className in elXv20A.cls) {
                elXv20A.classList.toggle(className, elXv20A.cls[className]);
            }  
            let elrOg98 = eo('i',null,null,`class`,`${fas('users') + ' icon'}`);
ec('i');
let elfyfWu = eo('span');
text(`Members`);
ec('span');
let cndcFVJ = ! component.project.isMember;
this.setState('stvsof3', cndcFVJ);
if (cndcFVJ) { 
let el4Bbm1 = eo('i','dGQf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el4Bbm1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elaKJya = eo('li');
let els9Xwa = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`);
els9Xwa.cls = component.isActiveLink('sprints');

            for (let className in els9Xwa.cls) {
                els9Xwa.classList.toggle(className, els9Xwa.cls[className]);
            }  
            let eli0YsL = eo('i',null,null,`class`,`${fas('running') + ' icon'}`);
ec('i');
let eloR1Cb = eo('span');
text(`Sprints`);
ec('span');
let cnd19py = ! component.project.isMember;
this.setState('sth4FYE', cnd19py);
if (cnd19py) { 
let elJXlme = eo('i','1c8f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elJXlme;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elRaKpV = eo('li');
let elrzHnz = eo('a',null,null,`href`,`${URLS.project(component.project, 'user-stories')}`);
elrzHnz.cls = component.isActiveLink('user-stories');

            for (let className in elrzHnz.cls) {
                elrzHnz.classList.toggle(className, elrzHnz.cls[className]);
            }  
            let elYFK2X = eo('i',null,null,`class`,`${fas('sticky-note') + ' icon'}`);
ec('i');
let elQBnr9 = eo('span');
text(`User Stories`);
ec('span');
let cndUjKg = ! component.project.isMember;
this.setState('stRseO9', cndUjKg);
if (cndUjKg) { 
let el7M3JI = eo('i','bljf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el7M3JI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let eleiKYU = eo('li');
let elH02lR = eo('a',null,null,`href`,`${URLS.project(component.project, 'tasks-board')}`);
elH02lR.cls = component.isActiveLink('tasks-board');

            for (let className in elH02lR.cls) {
                elH02lR.classList.toggle(className, elH02lR.cls[className]);
            }  
            let elB_EaX = eo('i',null,null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
let el0ftUd = eo('span');
text(`Tasks Board`);
ec('span');
let cnd9HYw = ! component.project.isMember;
this.setState('sttC7Bx', cnd9HYw);
if (cnd9HYw) { 
let el3HIxb = eo('i','ijgf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el3HIxb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elIKXKs = eo('li');
let elkYACp = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`);
elkYACp.cls = component.isActiveLink('test-suits');

            for (let className in elkYACp.cls) {
                elkYACp.classList.toggle(className, elkYACp.cls[className]);
            }  
            let elCWG0w = eo('i',null,null,`class`,`${fas('toolbox') + ' icon'}`);
ec('i');
let elP0hJf = eo('span');
text(`Test Suits`);
ec('span');
let cndy0rp = ! component.project.isMember;
this.setState('stosehQ', cndy0rp);
if (cndy0rp) { 
let elPhNpD = eo('i','pPSf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elPhNpD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elcccIx = eo('li');
let elctLDh = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``,`class`,`pt-0`);
elctLDh.cls = component.isActiveLink('bugs');

            for (let className in elctLDh.cls) {
                elctLDh.classList.toggle(className, elctLDh.cls[className]);
            }  
            let eluIw4z = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elVoNDv = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndbZVN = ! component.project.isMember;
this.setState('stTSFxU', cndbZVN);
if (cndbZVN) { 
let elyC1PH = eo('i','mndf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elyC1PH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elctLDh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elGXZJG = eo('li');
let elASWdn = eo('a',null,null,`href`,`${URLS.project(component.project, 'meetings')}`);
elASWdn.cls = component.isActiveLink('meetings');

            for (let className in elASWdn.cls) {
                elASWdn.classList.toggle(className, elASWdn.cls[className]);
            }  
            let elzf7eG = eo('i',null,null,`class`,`${fas('handshake') + ' icon'}`);
ec('i');
let elhF6XD = eo('span');
text(`Meetings`);
ec('span');
let cndbDDC = ! component.project.isMember;
this.setState('stEiJf5', cndbDDC);
if (cndbDDC) { 
let elmLk72 = eo('i','E3Rf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elmLk72;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndPEb_ = component.project.isHigherAuthority;
this.setState('st6fwNX', cndPEb_);
if (cndPEb_) { 
let elail1O = eo('li','5TOf');
let elo5J4T = eo('a','FKFf',null,`href`,`${URLS.project(component.project, 'recruitment')}`);
elo5J4T.cls = component.isActiveLink('recruitment');

            for (let className in elo5J4T.cls) {
                elo5J4T.classList.toggle(className, elo5J4T.cls[className]);
            }  
            let elm2qdZ = eo('i','xJcf',null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
let elpOmIs = eo('span','iYTf');
text(`Recruitment`);
ec('span');
let cnd9x3u = ! component.project.isMember;
this.setState('sttX_F9', cnd9x3u);
if (cnd9x3u) { 
let elL6tMx = eo('i','stHf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elL6tMx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elmBiKQ = eo('li');
let el6pyEY = eo('a',null,null,`href`,`${URLS.project(component.project, 'teams')}`);
el6pyEY.cls = component.isActiveLink('teams');

            for (let className in el6pyEY.cls) {
                el6pyEY.classList.toggle(className, el6pyEY.cls[className]);
            }  
            let elRnw4k = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elwjOHt = eo('span');
text(`Teams`);
ec('span');
let cndV9Ph = ! component.project.isMember;
this.setState('str44RV', cndV9Ph);
if (cndV9Ph) { 
let elsG2gf = eo('i','1KRf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elsG2gf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cnd4hsW = component.project.isHigherAuthority;
this.setState('stCVU7V', cnd4hsW);
if (cnd4hsW) { 
let elt0cAs = eo('li','AT5f');
let elfZgig = eo('a','DSQf',null,`href`,`${URLS.project(component.project, 'supervisors')}`);
elfZgig.cls = component.isActiveLink('supervisors');

            for (let className in elfZgig.cls) {
                elfZgig.classList.toggle(className, elfZgig.cls[className]);
            }  
            let elHoNDI = eo('i','nsyf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let ele5sEe = eo('span','HSwf');
text(`Supervisors`);
ec('span');
let cnd2EGz = ! component.project.isMember;
this.setState('stg7wiw', cnd2EGz);
if (cnd2EGz) { 
let elj6AIB = eo('i','LVef',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elj6AIB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndFsMS = component.project.isHigherAuthority;
this.setState('stMchMj', cndFsMS);
if (cndFsMS) { 
let elzQX8s = eo('li','i0Qf');
let ellnssr = eo('a','_NJf',null,`href`,`${URLS.project(component.project, 'client')}`);
ellnssr.cls = component.isActiveLink('client');

            for (let className in ellnssr.cls) {
                ellnssr.classList.toggle(className, ellnssr.cls[className]);
            }  
            let elVQA9E = eo('i','NXcf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let elvNVL0 = eo('span','Jp1f');
text(`Client`);
ec('span');
let cnd7h3g = ! component.project.isMember;
this.setState('stiTBIz', cnd7h3g);
if (cnd7h3g) { 
let elUocW8 = eo('i','oKGf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elUocW8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let el79x21 = eo('li');
let elW3E7O = eo('a',null,null,`href`,`${URLS.project(component.project, 'modules')}`);
elW3E7O.cls = component.isActiveLink('modules');

            for (let className in elW3E7O.cls) {
                elW3E7O.classList.toggle(className, elW3E7O.cls[className]);
            }  
            let eldL2II = eo('i',null,null,`class`,`${fas('cogs') + ' icon'}`);
ec('i');
let elu42gl = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let el4IVxD = eo('li');
let elx6VZJ = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`);
elx6VZJ.cls = component.isActiveLink('change-requests');

            for (let className in elx6VZJ.cls) {
                elx6VZJ.classList.toggle(className, elx6VZJ.cls[className]);
            }  
            let elKtY4O = eo('i',null,null,`class`,`${fas('exchange-alt') + ' icon'}`);
ec('i');
let elc5vLn = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndlHU6 = ! component.project.isMember;
this.setState('st7dDKy', cndlHU6);
if (cndlHU6) { 
let elGXkTt = eo('i','FJpf',null,`class`,`${fas('lock') + ' float-right mt-2 icon'}`);
ec('i');
}ec('a');
ec('li');
let elGvA7_ = eo('li');
let elKEdyG = eo('a',null,null,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
elKEdyG.cls = component.isActiveLink('srs');

            for (let className in elKEdyG.cls) {
                elKEdyG.classList.toggle(className, elKEdyG.cls[className]);
            }  
            let elhtdvD = eo('i',null,null,`class`,`${fas('book') + ' icon'}`);
ec('i');
let el8j6_8 = eo('span');
text(`(SRS)`);
ec('span');
let cndYOVO = ! component.project.isMember;
this.setState('stO779e', cndYOVO);
if (cndYOVO) { 
let elR5Ppd = eo('i','Ossf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elR5Ppd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elKEdyG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let el9TPeM = eo('li');
let elYG73f = eo('a',null,null,`href`,`${URLS.project(component.project, 'documentation')}`);
elYG73f.cls = component.isActiveLink('documentation');

            for (let className in elYG73f.cls) {
                elYG73f.classList.toggle(className, elYG73f.cls[className]);
            }  
            let elar4c8 = eo('i',null,null,`class`,`${fas('book-dead') + ' icon'}`);
ec('i');
let elDIEro = eo('span');
text(`Documentation`);
ec('span');
let cnd2mKK = ! component.project.isMember;
this.setState('stwCi3o', cnd2mKK);
if (cnd2mKK) { 
let eltSTAF = eo('i','Im7f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eltSTAF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el6hbw9 = eo('li');
let elw9rzR = eo('a',null,null,`href`,`${URLS.project(component.project, 'discussions')}`);
elw9rzR.cls = component.isActiveLink('discussions');

            for (let className in elw9rzR.cls) {
                elw9rzR.classList.toggle(className, elw9rzR.cls[className]);
            }  
            let els2yo1 = eo('i',null,null,`class`,`${fab('rocketchat') + ' icon'}`);
ec('i');
let elBaWQY = eo('span');
text(`Discussions`);
ec('span');
let cndc99k = ! component.project.isMember;
this.setState('stqGCut', cndc99k);
if (cndc99k) { 
let elkMJ_4 = eo('i','_kAf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elkMJ_4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elZIbOa = eo('li');
let elap2Cz = eo('a',null,null,`href`,`${URLS.project(component.project, 'fund')}`);
elap2Cz.cls = component.isActiveLink('fund');

            for (let className in elap2Cz.cls) {
                elap2Cz.classList.toggle(className, elap2Cz.cls[className]);
            }  
            let elB5ySy = eo('i',null,null,`class`,`${fas('coins') + ' icon'}`);
ec('i');
let el6Vbmd = eo('span');
text(`Fund`);
ec('span');
let cnd4Bqs = ! component.project.isMember;
this.setState('stZF_DY', cnd4Bqs);
if (cnd4Bqs) { 
let elEHCyZ = eo('i','k9Ff',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elEHCyZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cnda647 = component.project.isHigherAuthority;
this.setState('stKfxBq', cnda647);
if (cnda647) { 
let elbAWZ1 = eo('li','d7yf');
let eldNBSs = eo('a','DFuf',null,`href`,`${URLS.project(component.project, 'settings')}`);
eldNBSs.cls = component.isActiveLink('settings');

            for (let className in eldNBSs.cls) {
                eldNBSs.classList.toggle(className, eldNBSs.cls[className]);
            }  
            let elqWA7f = eo('i','_6cf',null,`class`,`${fas('cog') + ' icon'}`);
ec('i');
let elAyYxq = eo('span','Eimf');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });