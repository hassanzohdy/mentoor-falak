_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let el1tXRx = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cndMkAZ = component.project;
this.setState('stk7943', cndMkAZ);
if (cndMkAZ) { 
let el4Mxem = eo('h1','m7Xf',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let elmXGD6 = eo('ul','Ozrf');
let elQ1_9P = eo('li','bwIf');
let elrcrYd = eo('a','4lgf',null,`class`,` ${cls(component.isActiveLink(''))}`,`href`,`${URLS.project(component.project)}`);
let elMSPrd = eo('i','GNVf',null,`class`,`${fas('tachometer-alt')} icon`);
ec('i');
let elKkMpi = eo('span','ZKZf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let elNt4Ye = eo('li','orBf');
let el3fD5C = eo('a','XwIf',null,`class`,` ${cls(component.isActiveLink('resources'))}`,`href`,`${URLS.project(component.project, 'resources')}`);
let el9KFPO = eo('i','Psof',null,`class`,`${fas('bezier-curve')} icon`);
ec('i');
let ellGxk_ = eo('span','dTCf');
text(`Resources`);
ec('span');
let cndonHx = ! component.project.isMember;
this.setState('stya_6X', cndonHx);
if (cndonHx) { 
let elYmbC8 = eo('i','cG8f',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elYmbC8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el22ntJ = eo('li');
let elGS1Cl = eo('a',null,null,`class`,` ${cls(component.isActiveLink('members'))}`,`href`,`${URLS.project(component.project, 'members')}`);
let eliLePk = eo('i',null,null,`class`,`${fas('users')} icon`);
ec('i');
let elabLe8 = eo('span');
text(`Members`);
ec('span');
let cndkk7Y = ! component.project.isMember;
this.setState('stOlGIO', cndkk7Y);
if (cndkk7Y) { 
let eld4V0n = eo('i','yTBf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eld4V0n;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el9CFde = eo('li');
let el2LBrU = eo('a',null,null,`class`,` ${cls(component.isActiveLink('sprints'))}`,`href`,`${URLS.project(component.project, 'sprints')}`);
let elr9AV9 = eo('i',null,null,`class`,`${fas('running')} icon`);
ec('i');
let elPcEc5 = eo('span');
text(`Sprints`);
ec('span');
let cnduXpu = ! component.project.isMember;
this.setState('st4TndV', cnduXpu);
if (cnduXpu) { 
let el3rHwo = eo('i','L5Cf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el3rHwo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elqG4Hd = eo('li');
let elhqGQp = eo('a',null,null,`class`,` ${cls(component.isActiveLink('user-stories'))}`,`href`,`${URLS.project(component.project, 'user-stories')}`);
let eldb_j6 = eo('i',null,null,`class`,`${fas('sticky-note')} icon`);
ec('i');
let elQxQRS = eo('span');
text(`User Stories`);
ec('span');
let cndhDK3 = ! component.project.isMember;
this.setState('stIf6B2', cndhDK3);
if (cndhDK3) { 
let el43DA1 = eo('i','5PUf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el43DA1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elEqeYT = eo('li');
let eliT_qy = eo('a',null,null,`class`,` ${cls(component.isActiveLink('tasks-board'))}`,`href`,`${URLS.project(component.project, 'tasks-board')}`);
let elcUFhk = eo('i',null,null,`class`,`${fas('tasks')} icon`);
ec('i');
let el9AKx6 = eo('span');
text(`Tasks Board`);
ec('span');
let cndYgVg = ! component.project.isMember;
this.setState('stNTUbV', cndYgVg);
if (cndYgVg) { 
let eli0oUx = eo('i','0rTf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eli0oUx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el0gWlC = eo('li');
let el3FBj7 = eo('a',null,null,`class`,` ${cls(component.isActiveLink('test-suits'))}`,`href`,`${URLS.project(component.project, 'test-suits')}`);
let el4KN5M = eo('i',null,null,`class`,`${fas('toolbox')} icon`);
ec('i');
let elD5ahJ = eo('span');
text(`Test Suits`);
ec('span');
let cndcFf7 = ! component.project.isMember;
this.setState('stpiqpS', cndcFf7);
if (cndcFf7) { 
let elMHFSB = eo('i','JGvf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elMHFSB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el4u4Xm = eo('li');
let elFR6EV = eo('a',null,null,`class`,`pt-0 ${cls(component.isActiveLink('bugs'))}`,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``);
let eltTyjw = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let el_vLjg = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndOUdL = ! component.project.isMember;
this.setState('st19KV_', cndOUdL);
if (cndOUdL) { 
let eloc_w7 = eo('i','rikf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eloc_w7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elFR6EV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elH2Dby = eo('li');
let elGVMWV = eo('a',null,null,`class`,` ${cls(component.isActiveLink('meetings'))}`,`href`,`${URLS.project(component.project, 'meetings')}`);
let el0xHBJ = eo('i',null,null,`class`,`${fas('handshake')} icon`);
ec('i');
let elzEAqT = eo('span');
text(`Meetings`);
ec('span');
let cnd8mgn = ! component.project.isMember;
this.setState('stN9QsP', cnd8mgn);
if (cnd8mgn) { 
let elFd0in = eo('i','Ko8f',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elFd0in;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndTEsg = component.project.isHigherAuthority;
this.setState('stXTP5F', cndTEsg);
if (cndTEsg) { 
let elaLyF7 = eo('li','zMAf');
let eler90T = eo('a','MXyf',null,`class`,` ${cls(component.isActiveLink('recruitment'))}`,`href`,`${URLS.project(component.project, 'recruitment')}`);
let el_jfDA = eo('i','6zjf',null,`class`,`${fas('suitcase')} icon`);
ec('i');
let elYhIhQ = eo('span','1H8f');
text(`Recruitment`);
ec('span');
let cndN7hW = ! component.project.isMember;
this.setState('styR8Gp', cndN7hW);
if (cndN7hW) { 
let el0Yl_q = eo('i','4F_f',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el0Yl_q;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let el9Km65 = eo('li');
let elLbMfK = eo('a',null,null,`class`,` ${cls(component.isActiveLink('teams'))}`,`href`,`${URLS.project(component.project, 'teams')}`);
let elfOYKf = eo('i',null,null,`class`,`${fas('people-carry')} icon`);
ec('i');
let elJenuE = eo('span');
text(`Teams`);
ec('span');
let cndvWSd = ! component.project.isMember;
this.setState('sthERih', cndvWSd);
if (cndvWSd) { 
let el5s9Y7 = eo('i','Q53f',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el5s9Y7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndOfsG = component.project.isHigherAuthority;
this.setState('stJfQ0C', cndOfsG);
if (cndOfsG) { 
let elKiMQZ = eo('li','rLLf');
let elHOwpi = eo('a','ZDbf',null,`class`,` ${cls(component.isActiveLink('supervisors'))}`,`href`,`${URLS.project(component.project, 'supervisors')}`);
let elXfNtb = eo('i','i5_f',null,`class`,`${fas('user-secret')} icon`);
ec('i');
let elufdaA = eo('span','0_Tf');
text(`Supervisors`);
ec('span');
let cndv3IB = ! component.project.isMember;
this.setState('stm1LCo', cndv3IB);
if (cndv3IB) { 
let elXOdND = eo('i','NVof',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elXOdND;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndEBRp = component.project.isHigherAuthority;
this.setState('stPV6li', cndEBRp);
if (cndEBRp) { 
let el5fJaz = eo('li','iAlf');
let el7o638 = eo('a','y6ef',null,`class`,` ${cls(component.isActiveLink('client'))}`,`href`,`${URLS.project(component.project, 'client')}`);
let elhQ1lW = eo('i','udhf',null,`class`,`${fas('user-secret')} icon`);
ec('i');
let elPKxWE = eo('span','4RMf');
text(`Client`);
ec('span');
let cndFjvz = ! component.project.isMember;
this.setState('stvi76j', cndFjvz);
if (cndFjvz) { 
let elo_Agk = eo('i','UIRf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elo_Agk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elaBBCr = eo('li');
let eliQCCV = eo('a',null,null,`class`,` ${cls(component.isActiveLink('modules'))}`,`href`,`${URLS.project(component.project, 'modules')}`);
let elbvHkh = eo('i',null,null,`class`,`${fas('cogs')} icon`);
ec('i');
let elZRhDc = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let eliNTUB = eo('li');
let elfBq_P = eo('a',null,null,`class`,` ${cls(component.isActiveLink('change-requests'))}`,`href`,`${URLS.project(component.project, 'change-requests')}`);
let eltohSU = eo('i',null,null,`class`,`${fas('exchange-alt')} icon`);
ec('i');
let elIqBsK = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndhFz_ = ! component.project.isMember;
this.setState('stDlCxC', cndhFz_);
if (cndhFz_) { 
let elhVZNn = eo('i','F2mf',null,`class`,`${fas('lock')} float-right mt-2 icon`);
ec('i');
}ec('a');
ec('li');
let elI6e2C = eo('li');
let elXbRu7 = eo('a',null,null,`class`,` ${cls(component.isActiveLink('srs'))}`,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
let elSyM8P = eo('i',null,null,`class`,`${fas('book')} icon`);
ec('i');
let elVmwaY = eo('span');
text(`(SRS)`);
ec('span');
let cnddCkK = ! component.project.isMember;
this.setState('strookG', cnddCkK);
if (cnddCkK) { 
let elV7Rpv = eo('i','IDqf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elV7Rpv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elXbRu7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let elOLO5m = eo('li');
let elzJBGK = eo('a',null,null,`class`,` ${cls(component.isActiveLink('documentation'))}`,`href`,`${URLS.project(component.project, 'documentation')}`);
let eldHM6t = eo('i',null,null,`class`,`${fas('book-dead')} icon`);
ec('i');
let elRiFQk = eo('span');
text(`Documentation`);
ec('span');
let cndSdzT = ! component.project.isMember;
this.setState('st09_vT', cndSdzT);
if (cndSdzT) { 
let eloq8Lq = eo('i','yYxf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eloq8Lq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elPWdhe = eo('li');
let elnGEfS = eo('a',null,null,`class`,` ${cls(component.isActiveLink('discussions'))}`,`href`,`${URLS.project(component.project, 'discussions')}`);
let elcCGmZ = eo('i',null,null,`class`,`${fab('rocketchat')} icon`);
ec('i');
let elR7H5C = eo('span');
text(`Discussions`);
ec('span');
let cndlsUz = ! component.project.isMember;
this.setState('stVIluV', cndlsUz);
if (cndlsUz) { 
let elhG9KI = eo('i','2wof',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elhG9KI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elB67kU = eo('li');
let elE2yMU = eo('a',null,null,`class`,` ${cls(component.isActiveLink('fund'))}`,`href`,`${URLS.project(component.project, 'fund')}`);
let elNq6Gi = eo('i',null,null,`class`,`${fas('coins')} icon`);
ec('i');
let elP8T0y = eo('span');
text(`Fund`);
ec('span');
let cnd8uZ9 = ! component.project.isMember;
this.setState('stoNDKR', cnd8uZ9);
if (cnd8uZ9) { 
let elCOMOT = eo('i','bEDf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elCOMOT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndLoDx = component.project.isHigherAuthority;
this.setState('st4ykLg', cndLoDx);
if (cndLoDx) { 
let elH1Z7n = eo('li','WO9f');
let eloySsR = eo('a','B1zf',null,`class`,` ${cls(component.isActiveLink('settings'))}`,`href`,`${URLS.project(component.project, 'settings')}`);
let el04fPO = eo('i','mKOf',null,`class`,`${fas('cog')} icon`);
ec('i');
let elLFV71 = eo('span','x6Af');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });