_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let elONrhk = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cndOCXN = component.project;
this.setState('stIv8SK', cndOCXN);
if (cndOCXN) { 
let elrex05 = eo('h1','h4Yf',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let el0DnXH = eo('ul','7nYf');
let elGKUoL = eo('li','c2Qf');
let el6LvWI = eo('a','7Jwf',null,`class`,` ${cls(component.isActiveLink(''))}`,`href`,`${URLS.project(component.project)}`);
let el80M0A = eo('i','g2of',null,`class`,`${fas('tachometer-alt')} icon`);
ec('i');
let elBCNrx = eo('span','4cCf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let eloDpDU = eo('li','yP_f');
let elz9mSf = eo('a','EWwf',null,`class`,` ${cls(component.isActiveLink('resources'))}`,`href`,`${URLS.project(component.project, 'resources')}`);
let ellfFgV = eo('i','POwf',null,`class`,`${fas('bezier-curve')} icon`);
ec('i');
let elIkLOg = eo('span','zYTf');
text(`Resources`);
ec('span');
let cnd_Blu = ! component.project.isMember;
this.setState('stozyxc', cnd_Blu);
if (cnd_Blu) { 
let el6WPhA = eo('i','F9Uf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el6WPhA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elyxur4 = eo('li');
let el1U2lg = eo('a',null,null,`class`,` ${cls(component.isActiveLink('members'))}`,`href`,`${URLS.project(component.project, 'members')}`);
let elp5fkh = eo('i',null,null,`class`,`${fas('users')} icon`);
ec('i');
let elsuFP0 = eo('span');
text(`Members`);
ec('span');
let cndhbmh = ! component.project.isMember;
this.setState('stTVZbN', cndhbmh);
if (cndhbmh) { 
let elGoQJ8 = eo('i','FyOf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elGoQJ8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elmxwzs = eo('li');
let elsKnnv = eo('a',null,null,`class`,` ${cls(component.isActiveLink('sprints'))}`,`href`,`${URLS.project(component.project, 'sprints')}`);
let el4qSO4 = eo('i',null,null,`class`,`${fas('running')} icon`);
ec('i');
let elVfb8y = eo('span');
text(`Sprints`);
ec('span');
let cndz2YC = ! component.project.isMember;
this.setState('stMoF0S', cndz2YC);
if (cndz2YC) { 
let el3yEwq = eo('i','IPEf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el3yEwq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let eltOP4l = eo('li');
let elW9rNF = eo('a',null,null,`class`,` ${cls(component.isActiveLink('user-stories'))}`,`href`,`${URLS.project(component.project, 'user-stories')}`);
let el4n0tm = eo('i',null,null,`class`,`${fas('sticky-note')} icon`);
ec('i');
let elHDwOc = eo('span');
text(`User Stories`);
ec('span');
let cndxIS7 = ! component.project.isMember;
this.setState('stRAzBg', cndxIS7);
if (cndxIS7) { 
let elLpR3i = eo('i','AKtf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elLpR3i;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el3PT40 = eo('li');
let el0g19b = eo('a',null,null,`class`,` ${cls(component.isActiveLink('tasks-board'))}`,`href`,`${URLS.project(component.project, 'tasks-board')}`);
let elb0Fz8 = eo('i',null,null,`class`,`${fas('tasks')} icon`);
ec('i');
let el7xukJ = eo('span');
text(`Tasks Board`);
ec('span');
let cndjIGa = ! component.project.isMember;
this.setState('stmI7fX', cndjIGa);
if (cndjIGa) { 
let elWmnZL = eo('i','hvFf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elWmnZL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elw8zu4 = eo('li');
let elat8BX = eo('a',null,null,`class`,` ${cls(component.isActiveLink('test-suits'))}`,`href`,`${URLS.project(component.project, 'test-suits')}`);
let elyy5n2 = eo('i',null,null,`class`,`${fas('toolbox')} icon`);
ec('i');
let elUl3vS = eo('span');
text(`Test Suits`);
ec('span');
let cnd5ziy = ! component.project.isMember;
this.setState('stO3J72', cnd5ziy);
if (cnd5ziy) { 
let el1aCxr = eo('i','G2lf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el1aCxr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el6gk8d = eo('li');
let el5TqaL = eo('a',null,null,`class`,`pt-0 ${cls(component.isActiveLink('bugs'))}`,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``);
let elY_LC6 = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elg6tDw = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndk7u1 = ! component.project.isMember;
this.setState('stbmjUF', cndk7u1);
if (cndk7u1) { 
let el2NJA0 = eo('i','SSYf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el2NJA0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = el5TqaL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elOSgvp = eo('li');
let elOOWd7 = eo('a',null,null,`class`,` ${cls(component.isActiveLink('meetings'))}`,`href`,`${URLS.project(component.project, 'meetings')}`);
let el8SuSo = eo('i',null,null,`class`,`${fas('handshake')} icon`);
ec('i');
let elwjjTB = eo('span');
text(`Meetings`);
ec('span');
let cndY6jf = ! component.project.isMember;
this.setState('stDR02M', cndY6jf);
if (cndY6jf) { 
let el1BdVG = eo('i','YGQf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el1BdVG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndTuKw = component.project.isHigherAuthority;
this.setState('sttPvLT', cndTuKw);
if (cndTuKw) { 
let elJkUMw = eo('li','huff');
let el_uvxW = eo('a','V_If',null,`class`,` ${cls(component.isActiveLink('recruitment'))}`,`href`,`${URLS.project(component.project, 'recruitment')}`);
let elb2hVD = eo('i','nHaf',null,`class`,`${fas('suitcase')} icon`);
ec('i');
let elfD6T3 = eo('span','wt7f');
text(`Recruitment`);
ec('span');
let cnd_P0y = ! component.project.isMember;
this.setState('stwT8ZF', cnd_P0y);
if (cnd_P0y) { 
let el4lAOm = eo('i','YPzf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el4lAOm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let eldimd_ = eo('li');
let elRyOro = eo('a',null,null,`class`,` ${cls(component.isActiveLink('teams'))}`,`href`,`${URLS.project(component.project, 'teams')}`);
let elYTUEl = eo('i',null,null,`class`,`${fas('people-carry')} icon`);
ec('i');
let elUtk7n = eo('span');
text(`Teams`);
ec('span');
let cndtn4d = ! component.project.isMember;
this.setState('stEAUfF', cndtn4d);
if (cndtn4d) { 
let elKeTly = eo('i','IK6f',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elKeTly;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndFWhu = component.project.isHigherAuthority;
this.setState('stgONO0', cndFWhu);
if (cndFWhu) { 
let el7kT_z = eo('li','ffVf');
let el6SCmu = eo('a','WKkf',null,`class`,` ${cls(component.isActiveLink('supervisors'))}`,`href`,`${URLS.project(component.project, 'supervisors')}`);
let ele3Gou = eo('i','8OOf',null,`class`,`${fas('user-secret')} icon`);
ec('i');
let el8LKEb = eo('span','42sf');
text(`Supervisors`);
ec('span');
let cnd9kYh = ! component.project.isMember;
this.setState('st4gVGu', cnd9kYh);
if (cnd9kYh) { 
let el8rwre = eo('i','QYTf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el8rwre;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndCx9r = component.project.isHigherAuthority;
this.setState('stdAuS1', cndCx9r);
if (cndCx9r) { 
let elkO6kZ = eo('li','707f');
let elAzfgJ = eo('a','5X8f',null,`class`,` ${cls(component.isActiveLink('client'))}`,`href`,`${URLS.project(component.project, 'client')}`);
let elxWzi7 = eo('i','dDHf',null,`class`,`${fas('user-secret')} icon`);
ec('i');
let el5SiII = eo('span','qqWf');
text(`Client`);
ec('span');
let cndcJT4 = ! component.project.isMember;
this.setState('st4mRME', cndcJT4);
if (cndcJT4) { 
let eljx7gR = eo('i','IxGf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eljx7gR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let eln1Ubo = eo('li');
let elfN9fT = eo('a',null,null,`class`,` ${cls(component.isActiveLink('modules'))}`,`href`,`${URLS.project(component.project, 'modules')}`);
let eldyuG2 = eo('i',null,null,`class`,`${fas('cogs')} icon`);
ec('i');
let elVG_xE = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let el_CeVr = eo('li');
let elJP9IW = eo('a',null,null,`class`,` ${cls(component.isActiveLink('change-requests'))}`,`href`,`${URLS.project(component.project, 'change-requests')}`);
let elpECRQ = eo('i',null,null,`class`,`${fas('exchange-alt')} icon`);
ec('i');
let el8fmAS = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndMH9w = ! component.project.isMember;
this.setState('stpzChu', cndMH9w);
if (cndMH9w) { 
let elDrvyp = eo('i','TuUf',null,`class`,`${fas('lock')} float-right mt-2 icon`);
ec('i');
}ec('a');
ec('li');
let elFlI6_ = eo('li');
let el_t7nj = eo('a',null,null,`class`,` ${cls(component.isActiveLink('srs'))}`,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
let elpTk5Q = eo('i',null,null,`class`,`${fas('book')} icon`);
ec('i');
let el9kOY6 = eo('span');
text(`(SRS)`);
ec('span');
let cndu3fh = ! component.project.isMember;
this.setState('stabxpC', cndu3fh);
if (cndu3fh) { 
let elRxZ0q = eo('i','5Raf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elRxZ0q;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = el_t7nj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let elr1DtZ = eo('li');
let elgbmDH = eo('a',null,null,`class`,` ${cls(component.isActiveLink('documentation'))}`,`href`,`${URLS.project(component.project, 'documentation')}`);
let elECDH4 = eo('i',null,null,`class`,`${fas('book-dead')} icon`);
ec('i');
let elJrgP6 = eo('span');
text(`Documentation`);
ec('span');
let cnd6Af4 = ! component.project.isMember;
this.setState('st9PFDa', cnd6Af4);
if (cnd6Af4) { 
let elNbMyA = eo('i','Dp8f',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elNbMyA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el_H0hC = eo('li');
let elZrsnR = eo('a',null,null,`class`,` ${cls(component.isActiveLink('discussions'))}`,`href`,`${URLS.project(component.project, 'discussions')}`);
let ellYXmO = eo('i',null,null,`class`,`${fab('rocketchat')} icon`);
ec('i');
let el46mFy = eo('span');
text(`Discussions`);
ec('span');
let cnd_uxG = ! component.project.isMember;
this.setState('stxYogS', cnd_uxG);
if (cnd_uxG) { 
let el3jjry = eo('i','B_ef',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el3jjry;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elqzBNp = eo('li');
let elYPrv4 = eo('a',null,null,`class`,` ${cls(component.isActiveLink('fund'))}`,`href`,`${URLS.project(component.project, 'fund')}`);
let eleIjTP = eo('i',null,null,`class`,`${fas('coins')} icon`);
ec('i');
let elrRdR6 = eo('span');
text(`Fund`);
ec('span');
let cnd4fhP = ! component.project.isMember;
this.setState('str5ns6', cnd4fhP);
if (cnd4fhP) { 
let elERao7 = eo('i','qgJf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elERao7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cnd6TKa = component.project.isHigherAuthority;
this.setState('st4kzQy', cnd6TKa);
if (cnd6TKa) { 
let elVhVM4 = eo('li','OTGf');
let eloV7MM = eo('a','qFWf',null,`class`,` ${cls(component.isActiveLink('settings'))}`,`href`,`${URLS.project(component.project, 'settings')}`);
let el8YPOi = eo('i','iRSf',null,`class`,`${fas('cog')} icon`);
ec('i');
let elNVUVv = eo('span','wwIf');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });