_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let eliyaf9 = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cnde2cV = component.project;
this.setState('st42map', cnde2cV);
if (cnde2cV) { 
let elvsxgR = eo('h1','wRcf',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let el8Puca = eo('ul','iHzf');
let elxlF7E = eo('li','0GIf');
let elMAjBl = eo('a','VZ9f',null,`href`,`${URLS.project(component.project)}`);
elMAjBl.cls = component.isActiveLink('');

            for (let className in elMAjBl.cls) {
                elMAjBl.classList.toggle(className, elMAjBl.cls[className]);
            }  
            let el2px9p = eo('i','oUwf',null,`class`,`${fas('tachometer-alt') + ' icon'}`);
ec('i');
let elDFRur = eo('span','LgSf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let elRf4O1 = eo('li','isUf');
let elJGtKC = eo('a','L_tf',null,`href`,`${URLS.project(component.project, 'resources')}`);
elJGtKC.cls = component.isActiveLink('resources');

            for (let className in elJGtKC.cls) {
                elJGtKC.classList.toggle(className, elJGtKC.cls[className]);
            }  
            let elbnMF7 = eo('i','bLZf',null,`class`,`${fas('bezier-curve') + ' icon'}`);
ec('i');
let elnxduN = eo('span','Kisf');
text(`Resources`);
ec('span');
let cndZ1Ea = ! component.project.isMember;
this.setState('stD5vem', cndZ1Ea);
if (cndZ1Ea) { 
let elU7ETj = eo('i','fjrf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elU7ETj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elBvIYL = eo('li');
let eliS1Do = eo('a',null,null,`href`,`${URLS.project(component.project, 'members')}`);
eliS1Do.cls = component.isActiveLink('members');

            for (let className in eliS1Do.cls) {
                eliS1Do.classList.toggle(className, eliS1Do.cls[className]);
            }  
            let elj_P8o = eo('i',null,null,`class`,`${fas('users') + ' icon'}`);
ec('i');
let el9HQ8T = eo('span');
text(`Members`);
ec('span');
let cnd9NuP = ! component.project.isMember;
this.setState('strrpFO', cnd9NuP);
if (cnd9NuP) { 
let elIoB_4 = eo('i','epxf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elIoB_4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elVNDRP = eo('li');
let elwLWC_ = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`);
elwLWC_.cls = component.isActiveLink('sprints');

            for (let className in elwLWC_.cls) {
                elwLWC_.classList.toggle(className, elwLWC_.cls[className]);
            }  
            let elxM5Fg = eo('i',null,null,`class`,`${fas('running') + ' icon'}`);
ec('i');
let ele5aml = eo('span');
text(`Sprints`);
ec('span');
let cndDQyR = ! component.project.isMember;
this.setState('stohTlB', cndDQyR);
if (cndDQyR) { 
let elbWpAu = eo('i','dedf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elbWpAu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elNsdwi = eo('li');
let elX2Kfx = eo('a',null,null,`href`,`${URLS.project(component.project, 'user-stories')}`);
elX2Kfx.cls = component.isActiveLink('user-stories');

            for (let className in elX2Kfx.cls) {
                elX2Kfx.classList.toggle(className, elX2Kfx.cls[className]);
            }  
            let el04AFb = eo('i',null,null,`class`,`${fas('sticky-note') + ' icon'}`);
ec('i');
let elIIMUn = eo('span');
text(`User Stories`);
ec('span');
let cndytL4 = ! component.project.isMember;
this.setState('stUu3Y_', cndytL4);
if (cndytL4) { 
let elkxTj5 = eo('i','y5Rf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elkxTj5;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elhuYQU = eo('li');
let elNFyNL = eo('a',null,null,`href`,`${URLS.project(component.project, 'tasks-board')}`);
elNFyNL.cls = component.isActiveLink('tasks-board');

            for (let className in elNFyNL.cls) {
                elNFyNL.classList.toggle(className, elNFyNL.cls[className]);
            }  
            let elQ1UVf = eo('i',null,null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
let elBqqNj = eo('span');
text(`Tasks Board`);
ec('span');
let cndxs1V = ! component.project.isMember;
this.setState('stlt4P4', cndxs1V);
if (cndxs1V) { 
let elDODox = eo('i','9OOf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elDODox;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elI0uga = eo('li');
let elMYX9U = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`);
elMYX9U.cls = component.isActiveLink('test-suits');

            for (let className in elMYX9U.cls) {
                elMYX9U.classList.toggle(className, elMYX9U.cls[className]);
            }  
            let el2vDFg = eo('i',null,null,`class`,`${fas('toolbox') + ' icon'}`);
ec('i');
let el5MLxR = eo('span');
text(`Test Suits`);
ec('span');
let cndJS0s = ! component.project.isMember;
this.setState('stlam0v', cndJS0s);
if (cndJS0s) { 
let elb1x58 = eo('i','vEdf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elb1x58;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elAUIxG = eo('li');
let elpcD_i = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``,`class`,`pt-0`);
elpcD_i.cls = component.isActiveLink('bugs');

            for (let className in elpcD_i.cls) {
                elpcD_i.classList.toggle(className, elpcD_i.cls[className]);
            }  
            let eltZFvM = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let eliABzK = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndZNlR = ! component.project.isMember;
this.setState('st4X3x2', cndZNlR);
if (cndZNlR) { 
let elyfnIr = eo('i','UZvf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elyfnIr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elpcD_i;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elXb1pY = eo('li');
let elDS16G = eo('a',null,null,`href`,`${URLS.project(component.project, 'meetings')}`);
elDS16G.cls = component.isActiveLink('meetings');

            for (let className in elDS16G.cls) {
                elDS16G.classList.toggle(className, elDS16G.cls[className]);
            }  
            let elSw5yV = eo('i',null,null,`class`,`${fas('handshake') + ' icon'}`);
ec('i');
let elYZEee = eo('span');
text(`Meetings`);
ec('span');
let cnd_79I = ! component.project.isMember;
this.setState('sto5an2', cnd_79I);
if (cnd_79I) { 
let elY2V9J = eo('i','13Pf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elY2V9J;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndkZJj = component.project.isHigherAuthority;
this.setState('stAzwZy', cndkZJj);
if (cndkZJj) { 
let elMySH_ = eo('li','eLZf');
let elDk2yC = eo('a','AZpf',null,`href`,`${URLS.project(component.project, 'recruitment')}`);
elDk2yC.cls = component.isActiveLink('recruitment');

            for (let className in elDk2yC.cls) {
                elDk2yC.classList.toggle(className, elDk2yC.cls[className]);
            }  
            let elAsdFO = eo('i','vKef',null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
let eliZEON = eo('span','cNsf');
text(`Recruitment`);
ec('span');
let cndTnY4 = ! component.project.isMember;
this.setState('stDeUog', cndTnY4);
if (cndTnY4) { 
let elRr5kO = eo('i','MKzf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elRr5kO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elGITO7 = eo('li');
let elBw0oK = eo('a',null,null,`href`,`${URLS.project(component.project, 'teams')}`);
elBw0oK.cls = component.isActiveLink('teams');

            for (let className in elBw0oK.cls) {
                elBw0oK.classList.toggle(className, elBw0oK.cls[className]);
            }  
            let el7qQk_ = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elNhcgj = eo('span');
text(`Teams`);
ec('span');
let cndMGQZ = ! component.project.isMember;
this.setState('styG_ic', cndMGQZ);
if (cndMGQZ) { 
let elWy9ed = eo('i','0gNf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elWy9ed;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndDrdo = component.project.isHigherAuthority;
this.setState('stlTOEj', cndDrdo);
if (cndDrdo) { 
let elQ7BjX = eo('li','fzpf');
let elzqpMb = eo('a','81Af',null,`href`,`${URLS.project(component.project, 'supervisors')}`);
elzqpMb.cls = component.isActiveLink('supervisors');

            for (let className in elzqpMb.cls) {
                elzqpMb.classList.toggle(className, elzqpMb.cls[className]);
            }  
            let elaFuyZ = eo('i','HRdf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let el0ppyy = eo('span','LTpf');
text(`Supervisors`);
ec('span');
let cndd6nl = ! component.project.isMember;
this.setState('stnSMuB', cndd6nl);
if (cndd6nl) { 
let elLuwBQ = eo('i','Rhxf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elLuwBQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndrIBY = component.project.isHigherAuthority;
this.setState('stt3kH0', cndrIBY);
if (cndrIBY) { 
let elzxVvL = eo('li','5BAf');
let elvIpVt = eo('a','tW2f',null,`href`,`${URLS.project(component.project, 'client')}`);
elvIpVt.cls = component.isActiveLink('client');

            for (let className in elvIpVt.cls) {
                elvIpVt.classList.toggle(className, elvIpVt.cls[className]);
            }  
            let eltbHHf = eo('i','Ssof',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let elNYB5w = eo('span','VsRf');
text(`Client`);
ec('span');
let cndpChj = ! component.project.isMember;
this.setState('st2vV33', cndpChj);
if (cndpChj) { 
let elYyvqf = eo('i','RZGf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elYyvqf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elgOlV1 = eo('li');
let eloc_1N = eo('a',null,null,`href`,`${URLS.project(component.project, 'modules')}`);
eloc_1N.cls = component.isActiveLink('modules');

            for (let className in eloc_1N.cls) {
                eloc_1N.classList.toggle(className, eloc_1N.cls[className]);
            }  
            let elLIagr = eo('i',null,null,`class`,`${fas('cogs') + ' icon'}`);
ec('i');
let el9v0mm = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let elCKImv = eo('li');
let elc7sl7 = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`);
elc7sl7.cls = component.isActiveLink('change-requests');

            for (let className in elc7sl7.cls) {
                elc7sl7.classList.toggle(className, elc7sl7.cls[className]);
            }  
            let el0pt_p = eo('i',null,null,`class`,`${fas('exchange-alt') + ' icon'}`);
ec('i');
let elny5EZ = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndAbGx = ! component.project.isMember;
this.setState('stNPZ5W', cndAbGx);
if (cndAbGx) { 
let elbuEAk = eo('i','fQRf',null,`class`,`${fas('lock') + ' float-right mt-2 icon'}`);
ec('i');
}ec('a');
ec('li');
let elzZFeu = eo('li');
let eledBHZ = eo('a',null,null,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
eledBHZ.cls = component.isActiveLink('srs');

            for (let className in eledBHZ.cls) {
                eledBHZ.classList.toggle(className, eledBHZ.cls[className]);
            }  
            let elrgtZd = eo('i',null,null,`class`,`${fas('book') + ' icon'}`);
ec('i');
let elSg0nl = eo('span');
text(`(SRS)`);
ec('span');
let cndr4jg = ! component.project.isMember;
this.setState('stRDv80', cndr4jg);
if (cndr4jg) { 
let elKyAOT = eo('i','wf1f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elKyAOT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = eledBHZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let elCDhTE = eo('li');
let elLeBox = eo('a',null,null,`href`,`${URLS.project(component.project, 'documentation')}`);
elLeBox.cls = component.isActiveLink('documentation');

            for (let className in elLeBox.cls) {
                elLeBox.classList.toggle(className, elLeBox.cls[className]);
            }  
            let elRCXKL = eo('i',null,null,`class`,`${fas('book-dead') + ' icon'}`);
ec('i');
let elIIuRj = eo('span');
text(`Documentation`);
ec('span');
let cndCvbN = ! component.project.isMember;
this.setState('sttcro7', cndCvbN);
if (cndCvbN) { 
let elT0ywP = eo('i','OZRf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elT0ywP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elYwQcx = eo('li');
let elKjtqU = eo('a',null,null,`href`,`${URLS.project(component.project, 'discussions')}`);
elKjtqU.cls = component.isActiveLink('discussions');

            for (let className in elKjtqU.cls) {
                elKjtqU.classList.toggle(className, elKjtqU.cls[className]);
            }  
            let elvqfKQ = eo('i',null,null,`class`,`${fab('rocketchat') + ' icon'}`);
ec('i');
let elOyjQ4 = eo('span');
text(`Discussions`);
ec('span');
let cnd2Z9c = ! component.project.isMember;
this.setState('stuUzsv', cnd2Z9c);
if (cnd2Z9c) { 
let elPKpel = eo('i','nGzf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elPKpel;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elOnX8Y = eo('li');
let elHK5Ul = eo('a',null,null,`href`,`${URLS.project(component.project, 'fund')}`);
elHK5Ul.cls = component.isActiveLink('fund');

            for (let className in elHK5Ul.cls) {
                elHK5Ul.classList.toggle(className, elHK5Ul.cls[className]);
            }  
            let el_vR1R = eo('i',null,null,`class`,`${fas('coins') + ' icon'}`);
ec('i');
let elbC2dU = eo('span');
text(`Fund`);
ec('span');
let cndQNnU = ! component.project.isMember;
this.setState('sttfTgk', cndQNnU);
if (cndQNnU) { 
let elLBP3O = eo('i','iQpf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elLBP3O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndM0kK = component.project.isHigherAuthority;
this.setState('stXfDkO', cndM0kK);
if (cndM0kK) { 
let el4nTRl = eo('li','BURf');
let elcAqsa = eo('a','LgAf',null,`href`,`${URLS.project(component.project, 'settings')}`);
elcAqsa.cls = component.isActiveLink('settings');

            for (let className in elcAqsa.cls) {
                elcAqsa.classList.toggle(className, elcAqsa.cls[className]);
            }  
            let elOXkLF = eo('i','BXQf',null,`class`,`${fas('cog') + ' icon'}`);
ec('i');
let elamM0C = eo('span','Vh0f');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });