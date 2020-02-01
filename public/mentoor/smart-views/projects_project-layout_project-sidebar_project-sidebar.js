_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let elLoTHL = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cndZWgN = component.project;
this.setState('stHwjbL', cndZWgN);
if (cndZWgN) { 
let ele4azd = eo('h1','YZBf',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let elEusle = eo('ul','Lnkf');
let elpzv_1 = eo('li','PpRf');
let elJzgV2 = eo('a','SCPf',null,`href`,`${URLS.project(component.project)}`);
elJzgV2.cls = component.isActiveLink('');

            for (let className in elJzgV2.cls) {
                elJzgV2.classList.toggle(className, elJzgV2.cls[className]);
            }  
            let elIpK3f = eo('i','8A7f',null,`class`,`${fas('tachometer-alt') + ' icon'}`);
ec('i');
let elcslsv = eo('span','Vftf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let elWaGM_ = eo('li','3xdf');
let elgCSnI = eo('a','pjMf',null,`href`,`${URLS.project(component.project, 'resources')}`);
elgCSnI.cls = component.isActiveLink('resources');

            for (let className in elgCSnI.cls) {
                elgCSnI.classList.toggle(className, elgCSnI.cls[className]);
            }  
            let elJ9X_D = eo('i','H6cf',null,`class`,`${fas('bezier-curve') + ' icon'}`);
ec('i');
let el9u6dU = eo('span','EJsf');
text(`Resources`);
ec('span');
let cnd56dq = ! component.project.isMember;
this.setState('stl5LJJ', cnd56dq);
if (cnd56dq) { 
let elBB5wO = eo('i','68Bf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elBB5wO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elpPAxs = eo('li');
let el5POYP = eo('a',null,null,`href`,`${URLS.project(component.project, 'members')}`);
el5POYP.cls = component.isActiveLink('members');

            for (let className in el5POYP.cls) {
                el5POYP.classList.toggle(className, el5POYP.cls[className]);
            }  
            let elXjArI = eo('i',null,null,`class`,`${fas('users') + ' icon'}`);
ec('i');
let elvCbWR = eo('span');
text(`Members`);
ec('span');
let cndzdnb = ! component.project.isMember;
this.setState('stWuZLc', cndzdnb);
if (cndzdnb) { 
let elHnkno = eo('i','WbFf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elHnkno;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elkceWZ = eo('li');
let elETR7n = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`);
elETR7n.cls = component.isActiveLink('sprints');

            for (let className in elETR7n.cls) {
                elETR7n.classList.toggle(className, elETR7n.cls[className]);
            }  
            let el5lfsh = eo('i',null,null,`class`,`${fas('running') + ' icon'}`);
ec('i');
let elg5h54 = eo('span');
text(`Sprints`);
ec('span');
let cndfe7e = ! component.project.isMember;
this.setState('stgaX08', cndfe7e);
if (cndfe7e) { 
let ela9MXy = eo('i','U9Rf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = ela9MXy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elJGPu_ = eo('li');
let el8kwEw = eo('a',null,null,`href`,`${URLS.project(component.project, 'user-stories')}`);
el8kwEw.cls = component.isActiveLink('user-stories');

            for (let className in el8kwEw.cls) {
                el8kwEw.classList.toggle(className, el8kwEw.cls[className]);
            }  
            let el9KafZ = eo('i',null,null,`class`,`${fas('sticky-note') + ' icon'}`);
ec('i');
let elrF2ui = eo('span');
text(`User Stories`);
ec('span');
let cndqWrS = ! component.project.isMember;
this.setState('stPF4r4', cndqWrS);
if (cndqWrS) { 
let elShDOn = eo('i','rUSf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elShDOn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elY5yxE = eo('li');
let elywD7P = eo('a',null,null,`href`,`${URLS.project(component.project, 'tasks-board')}`);
elywD7P.cls = component.isActiveLink('tasks-board');

            for (let className in elywD7P.cls) {
                elywD7P.classList.toggle(className, elywD7P.cls[className]);
            }  
            let elp7zLZ = eo('i',null,null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
let elOM2R9 = eo('span');
text(`Tasks Board`);
ec('span');
let cndcPvy = ! component.project.isMember;
this.setState('st7GGMg', cndcPvy);
if (cndcPvy) { 
let elgB62I = eo('i','0Xif',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elgB62I;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elRTFhG = eo('li');
let elmaKCx = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`);
elmaKCx.cls = component.isActiveLink('test-suits');

            for (let className in elmaKCx.cls) {
                elmaKCx.classList.toggle(className, elmaKCx.cls[className]);
            }  
            let elhRXl4 = eo('i',null,null,`class`,`${fas('toolbox') + ' icon'}`);
ec('i');
let elbUvhK = eo('span');
text(`Test Suits`);
ec('span');
let cnd51AB = ! component.project.isMember;
this.setState('stQpLov', cnd51AB);
if (cnd51AB) { 
let elTxBcu = eo('i','dA6f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elTxBcu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elV_cQk = eo('li');
let elGzlyl = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``,`class`,`pt-0`);
elGzlyl.cls = component.isActiveLink('bugs');

            for (let className in elGzlyl.cls) {
                elGzlyl.classList.toggle(className, elGzlyl.cls[className]);
            }  
            let el6ozLj = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elrVmYz = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndC5Vh = ! component.project.isMember;
this.setState('stFjVWi', cndC5Vh);
if (cndC5Vh) { 
let elFYhFN = eo('i','d3Qf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elFYhFN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elGzlyl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elsbzjw = eo('li');
let elaadTO = eo('a',null,null,`href`,`${URLS.project(component.project, 'meetings')}`);
elaadTO.cls = component.isActiveLink('meetings');

            for (let className in elaadTO.cls) {
                elaadTO.classList.toggle(className, elaadTO.cls[className]);
            }  
            let elP6Bce = eo('i',null,null,`class`,`${fas('handshake') + ' icon'}`);
ec('i');
let elqr5xu = eo('span');
text(`Meetings`);
ec('span');
let cndiXF2 = ! component.project.isMember;
this.setState('st0zbYS', cndiXF2);
if (cndiXF2) { 
let elQ7TCE = eo('i','qx8f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elQ7TCE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndOckj = component.project.isHigherAuthority;
this.setState('stO45IX', cndOckj);
if (cndOckj) { 
let elLmz1w = eo('li','pgef');
let el4_nNq = eo('a','VaKf',null,`href`,`${URLS.project(component.project, 'recruitment')}`);
el4_nNq.cls = component.isActiveLink('recruitment');

            for (let className in el4_nNq.cls) {
                el4_nNq.classList.toggle(className, el4_nNq.cls[className]);
            }  
            let eljNN41 = eo('i','oMTf',null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
let elm6HTV = eo('span','QjXf');
text(`Recruitment`);
ec('span');
let cndQoX4 = ! component.project.isMember;
this.setState('stqHzww', cndQoX4);
if (cndQoX4) { 
let ellgN6J = eo('i','Nb0f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = ellgN6J;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elnxNtM = eo('li');
let elgGtGo = eo('a',null,null,`href`,`${URLS.project(component.project, 'teams')}`);
elgGtGo.cls = component.isActiveLink('teams');

            for (let className in elgGtGo.cls) {
                elgGtGo.classList.toggle(className, elgGtGo.cls[className]);
            }  
            let elNtYbN = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elelhXG = eo('span');
text(`Teams`);
ec('span');
let cndSWDi = ! component.project.isMember;
this.setState('stouA13', cndSWDi);
if (cndSWDi) { 
let elPflLF = eo('i','Prff',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elPflLF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndAB0c = component.project.isHigherAuthority;
this.setState('stWeuGL', cndAB0c);
if (cndAB0c) { 
let elDgJnj = eo('li','Cysf');
let elLKDcC = eo('a','8oRf',null,`href`,`${URLS.project(component.project, 'supervisors')}`);
elLKDcC.cls = component.isActiveLink('supervisors');

            for (let className in elLKDcC.cls) {
                elLKDcC.classList.toggle(className, elLKDcC.cls[className]);
            }  
            let elHSlpO = eo('i','WOzf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let elTcgsg = eo('span','FJef');
text(`Supervisors`);
ec('span');
let cndt8lM = ! component.project.isMember;
this.setState('stjAiE9', cndt8lM);
if (cndt8lM) { 
let elNxd38 = eo('i','Zkcf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elNxd38;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cnd_Vbr = component.project.isHigherAuthority;
this.setState('st7GJ50', cnd_Vbr);
if (cnd_Vbr) { 
let elSCnPV = eo('li','ffRf');
let elaDWxK = eo('a','eLkf',null,`href`,`${URLS.project(component.project, 'client')}`);
elaDWxK.cls = component.isActiveLink('client');

            for (let className in elaDWxK.cls) {
                elaDWxK.classList.toggle(className, elaDWxK.cls[className]);
            }  
            let elpNs8b = eo('i','0mNf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let elvIHsb = eo('span','51cf');
text(`Client`);
ec('span');
let cndy0N5 = ! component.project.isMember;
this.setState('stSUH7u', cndy0N5);
if (cndy0N5) { 
let elwbAeu = eo('i','a0Ff',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elwbAeu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elrbzZC = eo('li');
let elpU4wb = eo('a',null,null,`href`,`${URLS.project(component.project, 'modules')}`);
elpU4wb.cls = component.isActiveLink('modules');

            for (let className in elpU4wb.cls) {
                elpU4wb.classList.toggle(className, elpU4wb.cls[className]);
            }  
            let elBPsOj = eo('i',null,null,`class`,`${fas('cogs') + ' icon'}`);
ec('i');
let eleBD5H = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let eliMrzC = eo('li');
let elgQj7M = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`);
elgQj7M.cls = component.isActiveLink('change-requests');

            for (let className in elgQj7M.cls) {
                elgQj7M.classList.toggle(className, elgQj7M.cls[className]);
            }  
            let elR8yBK = eo('i',null,null,`class`,`${fas('exchange-alt') + ' icon'}`);
ec('i');
let eljzuq0 = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndNyFT = ! component.project.isMember;
this.setState('stYYaIX', cndNyFT);
if (cndNyFT) { 
let elXZsav = eo('i','NILf',null,`class`,`${fas('lock') + ' float-right mt-2 icon'}`);
ec('i');
}ec('a');
ec('li');
let elWZQxo = eo('li');
let elXEzkF = eo('a',null,null,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
elXEzkF.cls = component.isActiveLink('srs');

            for (let className in elXEzkF.cls) {
                elXEzkF.classList.toggle(className, elXEzkF.cls[className]);
            }  
            let elMbAdB = eo('i',null,null,`class`,`${fas('book') + ' icon'}`);
ec('i');
let elrHS9Y = eo('span');
text(`(SRS)`);
ec('span');
let cnd8vJS = ! component.project.isMember;
this.setState('st019aZ', cnd8vJS);
if (cnd8vJS) { 
let elk3eQv = eo('i','kalf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elk3eQv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elXEzkF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let eld26P7 = eo('li');
let elXfwd9 = eo('a',null,null,`href`,`${URLS.project(component.project, 'documentation')}`);
elXfwd9.cls = component.isActiveLink('documentation');

            for (let className in elXfwd9.cls) {
                elXfwd9.classList.toggle(className, elXfwd9.cls[className]);
            }  
            let el5Md4O = eo('i',null,null,`class`,`${fas('book-dead') + ' icon'}`);
ec('i');
let elcNs13 = eo('span');
text(`Documentation`);
ec('span');
let cndd1l0 = ! component.project.isMember;
this.setState('st7TxEr', cndd1l0);
if (cndd1l0) { 
let el8_aoH = eo('i','IRsf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el8_aoH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elwjkWd = eo('li');
let eldN4ti = eo('a',null,null,`href`,`${URLS.project(component.project, 'discussions')}`);
eldN4ti.cls = component.isActiveLink('discussions');

            for (let className in eldN4ti.cls) {
                eldN4ti.classList.toggle(className, eldN4ti.cls[className]);
            }  
            let elqIpoZ = eo('i',null,null,`class`,`${fab('rocketchat') + ' icon'}`);
ec('i');
let elPHJYw = eo('span');
text(`Discussions`);
ec('span');
let cndOnjI = ! component.project.isMember;
this.setState('stOWuWK', cndOnjI);
if (cndOnjI) { 
let elGjhnm = eo('i','lfqf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elGjhnm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el28YF5 = eo('li');
let elgoZTR = eo('a',null,null,`href`,`${URLS.project(component.project, 'fund')}`);
elgoZTR.cls = component.isActiveLink('fund');

            for (let className in elgoZTR.cls) {
                elgoZTR.classList.toggle(className, elgoZTR.cls[className]);
            }  
            let elgqmzd = eo('i',null,null,`class`,`${fas('coins') + ' icon'}`);
ec('i');
let el1U6B4 = eo('span');
text(`Fund`);
ec('span');
let cnd7ceT = ! component.project.isMember;
this.setState('stg2xKg', cnd7ceT);
if (cnd7ceT) { 
let eliYQ_Q = eo('i','3q9f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eliYQ_Q;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndXXma = component.project.isHigherAuthority;
this.setState('stZrdOi', cndXXma);
if (cndXXma) { 
let elnNG3Q = eo('li','Wm5f');
let elgqhXi = eo('a','5qSf',null,`href`,`${URLS.project(component.project, 'settings')}`);
elgqhXi.cls = component.isActiveLink('settings');

            for (let className in elgqhXi.cls) {
                elgqhXi.classList.toggle(className, elgqhXi.cls[className]);
            }  
            let el9Sglk = eo('i','0vyf',null,`class`,`${fas('cog') + ' icon'}`);
ec('i');
let elPT_Hs = eo('span','IjYf');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });