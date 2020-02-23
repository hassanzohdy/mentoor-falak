_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let elULY0r = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cnd_MzZ = component.project;
this.setState('st3ZX2S', cnd_MzZ);
if (cnd_MzZ) { 
let elEq_UK = eo('h1','KQKf',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let elgAGnf = eo('ul','0LQf');
let elCXR9p = eo('li','XYbf');
let elNCQgS = eo('a','tmGf',null,`href`,`${URLS.project(component.project)}`);
elNCQgS.cls = component.isActiveLink('');

            for (let className in elNCQgS.cls) {
                elNCQgS.classList.toggle(className, elNCQgS.cls[className]);
            }  
            let elKCfqt = eo('i','AJrf',null,`class`,`${fas('tachometer-alt') + ' icon'}`);
ec('i');
let elbgynn = eo('span','nAmf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let elafmnw = eo('li','k_Xf');
let elMdngU = eo('a','hJ1f',null,`href`,`${URLS.project(component.project, 'resources')}`);
elMdngU.cls = component.isActiveLink('resources');

            for (let className in elMdngU.cls) {
                elMdngU.classList.toggle(className, elMdngU.cls[className]);
            }  
            let ellZLXp = eo('i','SVWf',null,`class`,`${fas('bezier-curve') + ' icon'}`);
ec('i');
let elYEGdC = eo('span','S44f');
text(`Resources`);
ec('span');
let cndGn_V = ! component.project.isMember;
this.setState('stK2llp', cndGn_V);
if (cndGn_V) { 
let elM4lrQ = eo('i','4tMf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elM4lrQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el_qFUA = eo('li');
let elxPo9S = eo('a',null,null,`href`,`${URLS.project(component.project, 'members')}`);
elxPo9S.cls = component.isActiveLink('members');

            for (let className in elxPo9S.cls) {
                elxPo9S.classList.toggle(className, elxPo9S.cls[className]);
            }  
            let elDarN8 = eo('i',null,null,`class`,`${fas('users') + ' icon'}`);
ec('i');
let elUKyHU = eo('span');
text(`Members`);
ec('span');
let cndJOL1 = ! component.project.isMember;
this.setState('stDB34F', cndJOL1);
if (cndJOL1) { 
let elYDGPC = eo('i','Hpuf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elYDGPC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elRqJgp = eo('li');
let el8Ce6t = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`);
el8Ce6t.cls = component.isActiveLink('sprints');

            for (let className in el8Ce6t.cls) {
                el8Ce6t.classList.toggle(className, el8Ce6t.cls[className]);
            }  
            let elLC1Dz = eo('i',null,null,`class`,`${fas('running') + ' icon'}`);
ec('i');
let elCx4iz = eo('span');
text(`Sprints`);
ec('span');
let cndxL7h = ! component.project.isMember;
this.setState('stT1L2k', cndxL7h);
if (cndxL7h) { 
let elD620f = eo('i','aq5f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elD620f;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elBkYHl = eo('li');
let el0RavT = eo('a',null,null,`href`,`${URLS.project(component.project, 'user-stories')}`);
el0RavT.cls = component.isActiveLink('user-stories');

            for (let className in el0RavT.cls) {
                el0RavT.classList.toggle(className, el0RavT.cls[className]);
            }  
            let el4zwq5 = eo('i',null,null,`class`,`${fas('sticky-note') + ' icon'}`);
ec('i');
let eltj2P0 = eo('span');
text(`User Stories`);
ec('span');
let cndURki = ! component.project.isMember;
this.setState('st4qqDe', cndURki);
if (cndURki) { 
let elvNuL6 = eo('i','bdEf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elvNuL6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elW5BFa = eo('li');
let elmBmCJ = eo('a',null,null,`href`,`${URLS.project(component.project, 'tasks-board')}`);
elmBmCJ.cls = component.isActiveLink('tasks-board');

            for (let className in elmBmCJ.cls) {
                elmBmCJ.classList.toggle(className, elmBmCJ.cls[className]);
            }  
            let elQYItQ = eo('i',null,null,`class`,`${fas('tasks') + ' icon'}`);
ec('i');
let elpddZp = eo('span');
text(`Tasks Board`);
ec('span');
let cndnFkh = ! component.project.isMember;
this.setState('steTfy7', cndnFkh);
if (cndnFkh) { 
let elWkStO = eo('i','mdwf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elWkStO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elszye5 = eo('li');
let el02Ekd = eo('a',null,null,`href`,`${URLS.project(component.project, 'test-suits')}`);
el02Ekd.cls = component.isActiveLink('test-suits');

            for (let className in el02Ekd.cls) {
                el02Ekd.classList.toggle(className, el02Ekd.cls[className]);
            }  
            let el_Px9a = eo('i',null,null,`class`,`${fas('toolbox') + ' icon'}`);
ec('i');
let elspoiR = eo('span');
text(`Test Suits`);
ec('span');
let cndShrB = ! component.project.isMember;
this.setState('stWegzw', cndShrB);
if (cndShrB) { 
let elTOsAT = eo('i','4kZf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elTOsAT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elnT5uI = eo('li');
let elndqw4 = eo('a',null,null,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``,`class`,`pt-0`);
elndqw4.cls = component.isActiveLink('bugs');

            for (let className in elndqw4.cls) {
                elndqw4.classList.toggle(className, elndqw4.cls[className]);
            }  
            let elo5AFG = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elrq8yM = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndqLJO = ! component.project.isMember;
this.setState('stpPzC0', cndqLJO);
if (cndqLJO) { 
let eljA2Gb = eo('i','4N9f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eljA2Gb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elndqw4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elp6d_h = eo('li');
let elOOmky = eo('a',null,null,`href`,`${URLS.project(component.project, 'meetings')}`);
elOOmky.cls = component.isActiveLink('meetings');

            for (let className in elOOmky.cls) {
                elOOmky.classList.toggle(className, elOOmky.cls[className]);
            }  
            let elpgdDe = eo('i',null,null,`class`,`${fas('handshake') + ' icon'}`);
ec('i');
let el4RV5d = eo('span');
text(`Meetings`);
ec('span');
let cndIDrk = ! component.project.isMember;
this.setState('stIOPeY', cndIDrk);
if (cndIDrk) { 
let elglo4g = eo('i','Igyf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elglo4g;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cnd45hB = component.project.isHigherAuthority;
this.setState('stlM0BF', cnd45hB);
if (cnd45hB) { 
let elHTBJG = eo('li','Hjmf');
let elTPDJ4 = eo('a','zlJf',null,`href`,`${URLS.project(component.project, 'recruitment')}`);
elTPDJ4.cls = component.isActiveLink('recruitment');

            for (let className in elTPDJ4.cls) {
                elTPDJ4.classList.toggle(className, elTPDJ4.cls[className]);
            }  
            let eluVjA8 = eo('i','ZgVf',null,`class`,`${fas('suitcase') + ' icon'}`);
ec('i');
let el_vhIc = eo('span','hTPf');
text(`Recruitment`);
ec('span');
let cnd4qx2 = ! component.project.isMember;
this.setState('strsSIs', cnd4qx2);
if (cnd4qx2) { 
let elmeqLi = eo('i','7ujf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elmeqLi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elHg_ng = eo('li');
let elFzN4o = eo('a',null,null,`href`,`${URLS.project(component.project, 'teams')}`);
elFzN4o.cls = component.isActiveLink('teams');

            for (let className in elFzN4o.cls) {
                elFzN4o.classList.toggle(className, elFzN4o.cls[className]);
            }  
            let elni8bh = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elvD2rR = eo('span');
text(`Teams`);
ec('span');
let cnd3JJQ = ! component.project.isMember;
this.setState('stj_f08', cnd3JJQ);
if (cnd3JJQ) { 
let elwyA4G = eo('i','9xLf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elwyA4G;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndQhdm = component.project.isHigherAuthority;
this.setState('stUrC8E', cndQhdm);
if (cndQhdm) { 
let elV_HWb = eo('li','Kb7f');
let el8gbDK = eo('a','ra9f',null,`href`,`${URLS.project(component.project, 'supervisors')}`);
el8gbDK.cls = component.isActiveLink('supervisors');

            for (let className in el8gbDK.cls) {
                el8gbDK.classList.toggle(className, el8gbDK.cls[className]);
            }  
            let elzTlLW = eo('i','29yf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let eleHO6c = eo('span','Iihf');
text(`Supervisors`);
ec('span');
let cndyNXC = ! component.project.isMember;
this.setState('stRtyeZ', cndyNXC);
if (cndyNXC) { 
let elgq4Wo = eo('i','OwBf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elgq4Wo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndKXpJ = component.project.isHigherAuthority;
this.setState('stiChaw', cndKXpJ);
if (cndKXpJ) { 
let eleb02K = eo('li','ebYf');
let elh0My_ = eo('a','YKPf',null,`href`,`${URLS.project(component.project, 'client')}`);
elh0My_.cls = component.isActiveLink('client');

            for (let className in elh0My_.cls) {
                elh0My_.classList.toggle(className, elh0My_.cls[className]);
            }  
            let el8Hu3V = eo('i','0crf',null,`class`,`${fas('user-secret') + ' icon'}`);
ec('i');
let el3mMwg = eo('span','ZcJf');
text(`Client`);
ec('span');
let cndK2QW = ! component.project.isMember;
this.setState('stYV7Sx', cndK2QW);
if (cndK2QW) { 
let elzmB2t = eo('i','qVlf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elzmB2t;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let eljkSQ7 = eo('li');
let elV40dM = eo('a',null,null,`href`,`${URLS.project(component.project, 'modules')}`);
elV40dM.cls = component.isActiveLink('modules');

            for (let className in elV40dM.cls) {
                elV40dM.classList.toggle(className, elV40dM.cls[className]);
            }  
            let elFNn31 = eo('i',null,null,`class`,`${fas('cogs') + ' icon'}`);
ec('i');
let elJb1bL = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let elsI49w = eo('li');
let els8oWW = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`);
els8oWW.cls = component.isActiveLink('change-requests');

            for (let className in els8oWW.cls) {
                els8oWW.classList.toggle(className, els8oWW.cls[className]);
            }  
            let elONyJI = eo('i',null,null,`class`,`${fas('exchange-alt') + ' icon'}`);
ec('i');
let elotXbG = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndOYZ7 = ! component.project.isMember;
this.setState('stXg7B9', cndOYZ7);
if (cndOYZ7) { 
let el1rAQv = eo('i','s8Cf',null,`class`,`${fas('lock') + ' float-right mt-2 icon'}`);
ec('i');
}ec('a');
ec('li');
let elPv8mr = eo('li');
let elrFAEU = eo('a',null,null,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
elrFAEU.cls = component.isActiveLink('srs');

            for (let className in elrFAEU.cls) {
                elrFAEU.classList.toggle(className, elrFAEU.cls[className]);
            }  
            let eldBxyn = eo('i',null,null,`class`,`${fas('book') + ' icon'}`);
ec('i');
let elj1SMf = eo('span');
text(`(SRS)`);
ec('span');
let cndyoVP = ! component.project.isMember;
this.setState('st1Y1TX', cndyoVP);
if (cndyoVP) { 
let el4po4T = eo('i','IKtf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el4po4T;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elrFAEU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let elKY_xu = eo('li');
let eljWnNW = eo('a',null,null,`href`,`${URLS.project(component.project, 'documentation')}`);
eljWnNW.cls = component.isActiveLink('documentation');

            for (let className in eljWnNW.cls) {
                eljWnNW.classList.toggle(className, eljWnNW.cls[className]);
            }  
            let elsn9Fb = eo('i',null,null,`class`,`${fas('book-dead') + ' icon'}`);
ec('i');
let elbcPgx = eo('span');
text(`Documentation`);
ec('span');
let cndCtTw = ! component.project.isMember;
this.setState('st8s7RL', cndCtTw);
if (cndCtTw) { 
let eljSRPj = eo('i','qiHf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eljSRPj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elokj4c = eo('li');
let elyBBeZ = eo('a',null,null,`href`,`${URLS.project(component.project, 'discussions')}`);
elyBBeZ.cls = component.isActiveLink('discussions');

            for (let className in elyBBeZ.cls) {
                elyBBeZ.classList.toggle(className, elyBBeZ.cls[className]);
            }  
            let elKbork = eo('i',null,null,`class`,`${fab('rocketchat') + ' icon'}`);
ec('i');
let elqyZD7 = eo('span');
text(`Discussions`);
ec('span');
let cndlZb1 = ! component.project.isMember;
this.setState('stCAuJd', cndlZb1);
if (cndlZb1) { 
let eljGTN7 = eo('i','2EDf',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eljGTN7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elOJfH6 = eo('li');
let elOw5x6 = eo('a',null,null,`href`,`${URLS.project(component.project, 'fund')}`);
elOw5x6.cls = component.isActiveLink('fund');

            for (let className in elOw5x6.cls) {
                elOw5x6.classList.toggle(className, elOw5x6.cls[className]);
            }  
            let elBDFdT = eo('i',null,null,`class`,`${fas('coins') + ' icon'}`);
ec('i');
let elDDoqs = eo('span');
text(`Fund`);
ec('span');
let cndctTw = ! component.project.isMember;
this.setState('stEoElh', cndctTw);
if (cndctTw) { 
let elyfpHV = eo('i','DM3f',null,`title`,``,`class`,`${fas('lock') + ' ml-2 float-right mt-2 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elyfpHV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndlxPM = component.project.isHigherAuthority;
this.setState('stLptRr', cndlxPM);
if (cndlxPM) { 
let elSIr9J = eo('li','hk5f');
let el1s74r = eo('a','EWHf',null,`href`,`${URLS.project(component.project, 'settings')}`);
el1s74r.cls = component.isActiveLink('settings');

            for (let className in el1s74r.cls) {
                el1s74r.classList.toggle(className, el1s74r.cls[className]);
            }  
            let elKmGDJ = eo('i','Bb4f',null,`class`,`${fas('cog') + ' icon'}`);
ec('i');
let el7n516 = eo('span','40Xf');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });