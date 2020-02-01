_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let elHq1iM = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cndJ4tz = component.project;
this.setState('stwWwuq', cndJ4tz);
if (cndJ4tz) { 
let elpBinI = eo('h1','BT6f',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let el_8kyp = eo('ul','ZH6f');
let ell_pTN = eo('li','l9Pf');
let elcZxxo = eo('a','qgwf',null,`href`,`${URLS.project(component.project)}`);
elcZxxo.cls = component.isActiveLink('');

            for (let className in elcZxxo.cls) {
                elcZxxo.classList.toggle(className, elcZxxo.cls[className]);
            }  
            let elNhtFc = eo('i','hfZf',null,`class`,`${fas('tachometer-alt') + ' icon'}`);
ec('i');
let el6xB_i = eo('span','dINf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let elRcFu9 = eo('li','iB4f');
let elMzUn7 = eo('a','1oHf',null,`href`,`${URLS.project(component.project, 'resources')}`);
elMzUn7.cls = component.isActiveLink('resources');

            for (let className in elMzUn7.cls) {
                elMzUn7.classList.toggle(className, elMzUn7.cls[className]);
            }  
            let elF9H_W = eo('i','rnjf',null,`class`,`${fas('bezier-curve') + ' icon'}`);
ec('i');
let ell7Mbx = eo('span','pYpf');
text(`Resources`);
ec('span');
let cnd_RIs = ! component.project.isMember;
this.setState('stnur6y', cnd_RIs);
if (cnd_RIs) { 
let elAnQCZ = eo('i','fUef',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elAnQCZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elTSTLA = eo('li');
let elbV0oo = eo('a',null,null,`href`,`${URLS.project(component.project, 'members')}`);
elbV0oo.cls = component.isActiveLink('members');

            for (let className in elbV0oo.cls) {
                elbV0oo.classList.toggle(className, elbV0oo.cls[className]);
            }  
            let elBKx4X = eo('i',null,null,`class`,`${fas('users') + ' icon'}`);
ec('i');
let elmn5mF = eo('span');
text(`Members`);
ec('span');
let cnddgWB = ! component.project.isMember;
this.setState('st1Abw2', cnddgWB);
if (cnddgWB) { 
let elAJ0CT = eo('i','rX7f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elAJ0CT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el9Vh46 = eo('li');
let elAQUBF = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`);
elAQUBF.cls = component.isActiveLink('sprints');

            for (let className in elAQUBF.cls) {
                elAQUBF.classList.toggle(className, elAQUBF.cls[className]);
            }  
            let elr9CGp = eo('i',null,null,`class`,`${fas('running') + ' icon'}`);
ec('i');
let elac6wu = eo('span');
text(`Sprints`);
ec('span');
let cndPPEQ = ! component.project.isMember;
this.setState('st08Q5k', cndPPEQ);
if (cndPPEQ) { 
let elycRKm = eo('i','0Ghf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elycRKm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elbQgE0 = eo('li');
let eljLGjh = eo('a',null,null,`href`,`${URLS.project(component.project, 'user-stories')}`);
eljLGjh.cls = component.isActiveLink('user-stories');

            for (let className in eljLGjh.cls) {
                eljLGjh.classList.toggle(className, eljLGjh.cls[className]);
            }  
            let eliQBos = eo('i',null,null,`class`,`${fas('sticky-note') + ' icon'}`);
ec('i');
let elQW5U5 = eo('span');
text(`User Stories`);
ec('span');
let cndiQJe = ! component.project.isMember;
this.setState('studkMQ', cndiQJe);
if (cndiQJe) { 
let ely3lSW = eo('i','XSvf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = ely3lSW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elmfOn7 = eo('li');
let el3tuCD = eo('a',null,null,`href`,`${URLS.project(component.project, 'tasks-board')}`);
el3tuCD.cls = component.isActiveLink('tasks-board');

            for (let className in el3tuCD.cls) {
                el3tuCD.classList.toggle(className, el3tuCD.cls[className]);
            }  
            let ela0pQL = eo('i',null,null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
let elDvYbI = eo('span');
text(`Tasks Board`);
ec('span');
let cndOEfl = ! component.project.isMember;
this.setState('stSYZce', cndOEfl);
if (cndOEfl) { 
let elnFid6 = eo('i','1KIf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elnFid6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elMqL9r = eo('li');
let elUyfKb = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`);
elUyfKb.cls = component.isActiveLink('test-suits');

            for (let className in elUyfKb.cls) {
                elUyfKb.classList.toggle(className, elUyfKb.cls[className]);
            }  
            let elLjSm5 = eo('i',null,null,`class`,`${fas('toolbox') + ' icon'}`);
ec('i');
let el28XRz = eo('span');
text(`Test Suits`);
ec('span');
let cndWVol = ! component.project.isMember;
this.setState('stx1RBI', cndWVol);
if (cndWVol) { 
let el8dM7d = eo('i','bBtf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el8dM7d;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el4uNTA = eo('li');
let elEeYEc = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``,`class`,`pt-0`);
elEeYEc.cls = component.isActiveLink('bugs');

            for (let className in elEeYEc.cls) {
                elEeYEc.classList.toggle(className, elEeYEc.cls[className]);
            }  
            let elSxjdu = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elJQxXe = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndBzqo = ! component.project.isMember;
this.setState('st19FPz', cndBzqo);
if (cndBzqo) { 
let elXnxHZ = eo('i','O_vf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elXnxHZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elEeYEc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let ellJYgh = eo('li');
let elFQVS3 = eo('a',null,null,`href`,`${URLS.project(component.project, 'meetings')}`);
elFQVS3.cls = component.isActiveLink('meetings');

            for (let className in elFQVS3.cls) {
                elFQVS3.classList.toggle(className, elFQVS3.cls[className]);
            }  
            let elXp9A7 = eo('i',null,null,`class`,`${fas('handshake') + ' icon'}`);
ec('i');
let elH8yRy = eo('span');
text(`Meetings`);
ec('span');
let cndC8fy = ! component.project.isMember;
this.setState('stcTtn9', cndC8fy);
if (cndC8fy) { 
let elmbCSC = eo('i','xbuf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elmbCSC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndby_q = component.project.isHigherAuthority;
this.setState('stSgGxq', cndby_q);
if (cndby_q) { 
let elIgzuI = eo('li','zcYf');
let elgXPsZ = eo('a','8Nef',null,`href`,`${URLS.project(component.project, 'recruitment')}`);
elgXPsZ.cls = component.isActiveLink('recruitment');

            for (let className in elgXPsZ.cls) {
                elgXPsZ.classList.toggle(className, elgXPsZ.cls[className]);
            }  
            let elUGkMl = eo('i','3dff',null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
let elyBo3Q = eo('span','u6Gf');
text(`Recruitment`);
ec('span');
let cndBkZ0 = ! component.project.isMember;
this.setState('st3h5i4', cndBkZ0);
if (cndBkZ0) { 
let el0Troc = eo('i','nccf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el0Troc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elDymCM = eo('li');
let elkBOcn = eo('a',null,null,`href`,`${URLS.project(component.project, 'teams')}`);
elkBOcn.cls = component.isActiveLink('teams');

            for (let className in elkBOcn.cls) {
                elkBOcn.classList.toggle(className, elkBOcn.cls[className]);
            }  
            let ellh_yD = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elsAurM = eo('span');
text(`Teams`);
ec('span');
let cnd8Juj = ! component.project.isMember;
this.setState('stihlLk', cnd8Juj);
if (cnd8Juj) { 
let elcMsOM = eo('i','oHpf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elcMsOM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndBvaa = component.project.isHigherAuthority;
this.setState('staKWuA', cndBvaa);
if (cndBvaa) { 
let elq0JC1 = eo('li','YlMf');
let elaoPhC = eo('a','ui7f',null,`href`,`${URLS.project(component.project, 'supervisors')}`);
elaoPhC.cls = component.isActiveLink('supervisors');

            for (let className in elaoPhC.cls) {
                elaoPhC.classList.toggle(className, elaoPhC.cls[className]);
            }  
            let elJ56RC = eo('i','oeKf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let elEP52D = eo('span','Ocwf');
text(`Supervisors`);
ec('span');
let cndbfq_ = ! component.project.isMember;
this.setState('stomE6T', cndbfq_);
if (cndbfq_) { 
let elJWj21 = eo('i','39Yf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elJWj21;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndIeSC = component.project.isHigherAuthority;
this.setState('st2TLDE', cndIeSC);
if (cndIeSC) { 
let elTelqR = eo('li','8fhf');
let elWfDuk = eo('a','i2Mf',null,`href`,`${URLS.project(component.project, 'client')}`);
elWfDuk.cls = component.isActiveLink('client');

            for (let className in elWfDuk.cls) {
                elWfDuk.classList.toggle(className, elWfDuk.cls[className]);
            }  
            let elj7pu6 = eo('i','jXwf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let elIM5iO = eo('span','Tvef');
text(`Client`);
ec('span');
let cnd4Qj3 = ! component.project.isMember;
this.setState('stfim_U', cnd4Qj3);
if (cnd4Qj3) { 
let elChL3d = eo('i','Jx3f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elChL3d;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elS2lzF = eo('li');
let ellu5zW = eo('a',null,null,`href`,`${URLS.project(component.project, 'modules')}`);
ellu5zW.cls = component.isActiveLink('modules');

            for (let className in ellu5zW.cls) {
                ellu5zW.classList.toggle(className, ellu5zW.cls[className]);
            }  
            let elbvJZE = eo('i',null,null,`class`,`${fas('cogs') + ' icon'}`);
ec('i');
let elUncs6 = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let elrbGHZ = eo('li');
let elH2siT = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`);
elH2siT.cls = component.isActiveLink('change-requests');

            for (let className in elH2siT.cls) {
                elH2siT.classList.toggle(className, elH2siT.cls[className]);
            }  
            let el3XPcv = eo('i',null,null,`class`,`${fas('exchange-alt') + ' icon'}`);
ec('i');
let elsWihU = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndzKJZ = ! component.project.isMember;
this.setState('st3HmkQ', cndzKJZ);
if (cndzKJZ) { 
let el8G8l6 = eo('i','aLZf',null,`class`,`${fas('lock') + ' float-right mt-2 icon'}`);
ec('i');
}ec('a');
ec('li');
let elMl7nr = eo('li');
let elQj1SR = eo('a',null,null,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
elQj1SR.cls = component.isActiveLink('srs');

            for (let className in elQj1SR.cls) {
                elQj1SR.classList.toggle(className, elQj1SR.cls[className]);
            }  
            let elwsTq5 = eo('i',null,null,`class`,`${fas('book') + ' icon'}`);
ec('i');
let elfLF8A = eo('span');
text(`(SRS)`);
ec('span');
let cndSkUw = ! component.project.isMember;
this.setState('stalDUs', cndSkUw);
if (cndSkUw) { 
let elxjUZT = eo('i','GGCf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elxjUZT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elQj1SR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let elnD_DK = eo('li');
let el3QF2x = eo('a',null,null,`href`,`${URLS.project(component.project, 'documentation')}`);
el3QF2x.cls = component.isActiveLink('documentation');

            for (let className in el3QF2x.cls) {
                el3QF2x.classList.toggle(className, el3QF2x.cls[className]);
            }  
            let elk2uaj = eo('i',null,null,`class`,`${fas('book-dead') + ' icon'}`);
ec('i');
let eloahnz = eo('span');
text(`Documentation`);
ec('span');
let cndoKWu = ! component.project.isMember;
this.setState('stHO4vT', cndoKWu);
if (cndoKWu) { 
let elr8IyL = eo('i','F2af',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elr8IyL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elT80iz = eo('li');
let el4YCR3 = eo('a',null,null,`href`,`${URLS.project(component.project, 'discussions')}`);
el4YCR3.cls = component.isActiveLink('discussions');

            for (let className in el4YCR3.cls) {
                el4YCR3.classList.toggle(className, el4YCR3.cls[className]);
            }  
            let elAnImG = eo('i',null,null,`class`,`${fab('rocketchat') + ' icon'}`);
ec('i');
let elW4pWJ = eo('span');
text(`Discussions`);
ec('span');
let cnduS9k = ! component.project.isMember;
this.setState('stY1v6R', cnduS9k);
if (cnduS9k) { 
let elctB9f = eo('i','atPf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elctB9f;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elDE2Qn = eo('li');
let elaQ0OF = eo('a',null,null,`href`,`${URLS.project(component.project, 'fund')}`);
elaQ0OF.cls = component.isActiveLink('fund');

            for (let className in elaQ0OF.cls) {
                elaQ0OF.classList.toggle(className, elaQ0OF.cls[className]);
            }  
            let elkjchP = eo('i',null,null,`class`,`${fas('coins') + ' icon'}`);
ec('i');
let elI6SQC = eo('span');
text(`Fund`);
ec('span');
let cnd6Xxg = ! component.project.isMember;
this.setState('stYYIGF', cnd6Xxg);
if (cnd6Xxg) { 
let elix8Qs = eo('i','YEyf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elix8Qs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndnpBW = component.project.isHigherAuthority;
this.setState('st8Bs5_', cndnpBW);
if (cndnpBW) { 
let elUybLH = eo('li','gb_f');
let elftBvZ = eo('a','jKKf',null,`href`,`${URLS.project(component.project, 'settings')}`);
elftBvZ.cls = component.isActiveLink('settings');

            for (let className in elftBvZ.cls) {
                elftBvZ.classList.toggle(className, elftBvZ.cls[className]);
            }  
            let elB9NRE = eo('i','_7af',null,`class`,`${fas('cog') + ' icon'}`);
ec('i');
let elK8MgG = eo('span','sJkf');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });