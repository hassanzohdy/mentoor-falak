_Component({
                selector: 'project-sidebar',
                c: 'ProjectSidebar', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isActiveLink'],
                children: {},
                render: function (component) {
                    let elrAz2u = eo('nav',null,null,`class`,`col-12 col-sm-3 col-lg-2 d-md-block`,`id`,`project-sidebar`);
let cndi5tT = component.project;
this.setState('stPuIAs', cndi5tT);
if (cndi5tT) { 
let elQue8H = eo('h1','Quff',null,`class`,`project-name`);
text(component.project.name);
ec('h1');
let elNDkIK = eo('ul','ACtf');
let elPsfyF = eo('li','T5pf');
let elf2cJR = eo('a','U20f',null,`class`,` ${cls(component.isActiveLink(''))}`,`href`,`${URLS.project(component.project)}`);
let elYdcHB = eo('i','Hq9f',null,`class`,`${fas('tachometer-alt')} icon`);
ec('i');
let eldHtwS = eo('span','1nFf');
text(`Overview`);
ec('span');
ec('a');
ec('li');
let el7X3EF = eo('li','mwhf');
let elfUMyX = eo('a','Q4Uf',null,`class`,` ${cls(component.isActiveLink('resources'))}`,`href`,`${URLS.project(component.project, 'resources')}`);
let el5fhs3 = eo('i','M0Gf',null,`class`,`${fas('bezier-curve')} icon`);
ec('i');
let elxlDvU = eo('span','JQOf');
text(`Resources`);
ec('span');
let cndjBs7 = ! component.project.isMember;
this.setState('stgm_VR', cndjBs7);
if (cndjBs7) { 
let el6NtWM = eo('i','ETTf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el6NtWM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elAwgc6 = eo('li');
let elRLhNo = eo('a',null,null,`class`,` ${cls(component.isActiveLink('members'))}`,`href`,`${URLS.project(component.project, 'members')}`);
let elkjibq = eo('i',null,null,`class`,`${fas('users')} icon`);
ec('i');
let elOWNwo = eo('span');
text(`Members`);
ec('span');
let cndZ4A3 = ! component.project.isMember;
this.setState('stf_Zfc', cndZ4A3);
if (cndZ4A3) { 
let elT23LB = eo('i','Kodf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elT23LB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elXgdU3 = eo('li');
let el1xlgt = eo('a',null,null,`class`,` ${cls(component.isActiveLink('sprints'))}`,`href`,`${URLS.project(component.project, 'sprints')}`);
let elf_7Bo = eo('i',null,null,`class`,`${fas('running')} icon`);
ec('i');
let elDib8g = eo('span');
text(`Sprints`);
ec('span');
let cndsmny = ! component.project.isMember;
this.setState('stkQKV0', cndsmny);
if (cndsmny) { 
let elBFQMI = eo('i','4Cef',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elBFQMI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elsWG3o = eo('li');
let elDIuaM = eo('a',null,null,`class`,` ${cls(component.isActiveLink('user-stories'))}`,`href`,`${URLS.project(component.project, 'user-stories')}`);
let elJf2ej = eo('i',null,null,`class`,`${fas('sticky-note')} icon`);
ec('i');
let elhudK4 = eo('span');
text(`User Stories`);
ec('span');
let cndFaKM = ! component.project.isMember;
this.setState('stGiIzE', cndFaKM);
if (cndFaKM) { 
let elUCWah = eo('i','pqIf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elUCWah;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elE6ccK = eo('li');
let elWmlni = eo('a',null,null,`class`,` ${cls(component.isActiveLink('tasks-board'))}`,`href`,`${URLS.project(component.project, 'tasks-board')}`);
let ell4nVo = eo('i',null,null,`class`,`${fas('tasks')} icon`);
ec('i');
let el0OrLn = eo('span');
text(`Tasks Board`);
ec('span');
let cndxlng = ! component.project.isMember;
this.setState('stEqLqN', cndxlng);
if (cndxlng) { 
let eljhULz = eo('i','w2hf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eljhULz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elRixAF = eo('li');
let el8F59y = eo('a',null,null,`class`,` ${cls(component.isActiveLink('test-suits'))}`,`href`,`${URLS.project(component.project, 'test-suits')}`);
let elncOeH = eo('i',null,null,`class`,`${fas('toolbox')} icon`);
ec('i');
let elPkxMN = eo('span');
text(`Test Suits`);
ec('span');
let cndI9lm = ! component.project.isMember;
this.setState('stA9veW', cndI9lm);
if (cndI9lm) { 
let elrwU6G = eo('i','Gzaf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elrwU6G;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let el72ckf = eo('li');
let el18Et6 = eo('a',null,null,`class`,`pt-0 ${cls(component.isActiveLink('bugs'))}`,`href`,`${URLS.project(component.project, 'bugs')}`,`title`,``);
let elphrJp = ev('img',null,null,`src`,`${assets('images/bug.jpg')}`,`style`,`width: 20px; height: 30px; border-radius: 50%;`);
let elACuoy = eo('span',null,null,`class`,`bold red-text`,`style`,`font-size: 3rem`);
text(`s`);
ec('span');
let cndnovz = ! component.project.isMember;
this.setState('stg2ipg', cndnovz);
if (cndnovz) { 
let elgalKk = eo('i','q2gf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elgalKk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = el18Et6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Bugs')}`});
        ;
                    }, 20);                
                ec('li');
let elHDZYx = eo('li');
let elr_zUk = eo('a',null,null,`class`,` ${cls(component.isActiveLink('meetings'))}`,`href`,`${URLS.project(component.project, 'meetings')}`);
let elIqkSm = eo('i',null,null,`class`,`${fas('handshake')} icon`);
ec('i');
let elr9egT = eo('span');
text(`Meetings`);
ec('span');
let cndHKFV = ! component.project.isMember;
this.setState('stAYNdZ', cndHKFV);
if (cndHKFV) { 
let elTX66j = eo('i','fnJf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elTX66j;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndaTL_ = component.project.isHigherAuthority;
this.setState('stPK4xV', cndaTL_);
if (cndaTL_) { 
let elM43Sv = eo('li','VQnf');
let el0Jk3m = eo('a','JJMf',null,`class`,` ${cls(component.isActiveLink('recruitment'))}`,`href`,`${URLS.project(component.project, 'recruitment')}`);
let elcBg_V = eo('i','5G9f',null,`class`,`${fas('suitcase')} icon`);
ec('i');
let el5MTbo = eo('span','IuEf');
text(`Recruitment`);
ec('span');
let cndkxbY = ! component.project.isMember;
this.setState('st1Gakw', cndkxbY);
if (cndkxbY) { 
let eltW84E = eo('i','fOZf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eltW84E;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elLSBdY = eo('li');
let eleRcAL = eo('a',null,null,`class`,` ${cls(component.isActiveLink('teams'))}`,`href`,`${URLS.project(component.project, 'teams')}`);
let elyc6ok = eo('i',null,null,`class`,`${fas('people-carry')} icon`);
ec('i');
let el1Uz03 = eo('span');
text(`Teams`);
ec('span');
let cnd1Qm7 = ! component.project.isMember;
this.setState('stGBma_', cnd1Qm7);
if (cnd1Qm7) { 
let elGjpA9 = eo('i','ipdf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elGjpA9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndvJJJ = component.project.isHigherAuthority;
this.setState('stAoGrk', cndvJJJ);
if (cndvJJJ) { 
let elksCvH = eo('li','5Auf');
let elWS_I5 = eo('a','e5sf',null,`class`,` ${cls(component.isActiveLink('supervisors'))}`,`href`,`${URLS.project(component.project, 'supervisors')}`);
let elFUZ1G = eo('i','Iqlf',null,`class`,`${fas('user-secret')} icon`);
ec('i');
let elk5P4H = eo('span','xdgf');
text(`Supervisors`);
ec('span');
let cnd6ZKr = ! component.project.isMember;
this.setState('stIiiz1', cnd6ZKr);
if (cnd6ZKr) { 
let elota99 = eo('i','NR7f',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elota99;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let cndn0Gl = component.project.isHigherAuthority;
this.setState('stDaGBz', cndn0Gl);
if (cndn0Gl) { 
let elB1Ip2 = eo('li','QZDf');
let el6bSyF = eo('a','sXCf',null,`class`,` ${cls(component.isActiveLink('client'))}`,`href`,`${URLS.project(component.project, 'client')}`);
let elUVovW = eo('i','Oulf',null,`class`,`${fas('user-secret')} icon`);
ec('i');
let elSCxmt = eo('span','aLYf');
text(`Client`);
ec('span');
let cnduets = ! component.project.isMember;
this.setState('stjqdkz', cnduets);
if (cnduets) { 
let elbXsdy = eo('i','99Df',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elbXsdy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
}let elRcm2W = eo('li');
let eliqGDe = eo('a',null,null,`class`,` ${cls(component.isActiveLink('modules'))}`,`href`,`${URLS.project(component.project, 'modules')}`);
let elUvzDq = eo('i',null,null,`class`,`${fas('cogs')} icon`);
ec('i');
let elXOVnx = eo('span');
text(`Modules`);
ec('span');
ec('a');
ec('li');
let elQQHw2 = eo('li');
let elN8evK = eo('a',null,null,`class`,` ${cls(component.isActiveLink('change-requests'))}`,`href`,`${URLS.project(component.project, 'change-requests')}`);
let eldk7Md = eo('i',null,null,`class`,`${fas('exchange-alt')} icon`);
ec('i');
let el5KL71 = eo('span');
text(`Change Requests (CR)`);
ec('span');
let cndpx7j = ! component.project.isMember;
this.setState('stzzqqc', cndpx7j);
if (cndpx7j) { 
let elpjDTD = eo('i','7kXf',null,`class`,`${fas('lock')} float-right mt-2 icon`);
ec('i');
}ec('a');
ec('li');
let elCQKpv = eo('li');
let elmGeJz = eo('a',null,null,`class`,` ${cls(component.isActiveLink('srs'))}`,`href`,`${URLS.project(component.project, 'srs')}`,`title`,``);
let elKMEQX = eo('i',null,null,`class`,`${fas('book')} icon`);
ec('i');
let elOtH2x = eo('span');
text(`(SRS)`);
ec('span');
let cndW_l5 = ! component.project.isMember;
this.setState('sthje7J', cndW_l5);
if (cndW_l5) { 
let elJ6V7w = eo('i','9pXf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elJ6V7w;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');

                    setTimeout(function () {
                        let $el = elmGeJz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Software Requirements Specifications')}`});
        ;
                    }, 20);                
                ec('li');
let elZ6PXq = eo('li');
let elz93_K = eo('a',null,null,`class`,` ${cls(component.isActiveLink('documentation'))}`,`href`,`${URLS.project(component.project, 'documentation')}`);
let elH9gIs = eo('i',null,null,`class`,`${fas('book-dead')} icon`);
ec('i');
let elnJyo2 = eo('span');
text(`Documentation`);
ec('span');
let cndc1DW = ! component.project.isMember;
this.setState('stOSDnp', cndc1DW);
if (cndc1DW) { 
let elqwPza = eo('i','mSaf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elqwPza;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elZr3bG = eo('li');
let elsxH2P = eo('a',null,null,`class`,` ${cls(component.isActiveLink('discussions'))}`,`href`,`${URLS.project(component.project, 'discussions')}`);
let elVozTD = eo('i',null,null,`class`,`${fab('rocketchat')} icon`);
ec('i');
let elw1QYb = eo('span');
text(`Discussions`);
ec('span');
let cndjntm = ! component.project.isMember;
this.setState('stPble4', cndjntm);
if (cndjntm) { 
let elzr7cq = eo('i','4EYf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elzr7cq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let elYSr_B = eo('li');
let elNUUkc = eo('a',null,null,`class`,` ${cls(component.isActiveLink('fund'))}`,`href`,`${URLS.project(component.project, 'fund')}`);
let elznMEo = eo('i',null,null,`class`,`${fas('coins')} icon`);
ec('i');
let elJJPq4 = eo('span');
text(`Fund`);
ec('span');
let cndXWik = ! component.project.isMember;
this.setState('stKn8G_', cndXWik);
if (cndXWik) { 
let elUMLfn = eo('i','kwDf',null,`title`,``,`class`,`${fas('lock')} ml-2 float-right mt-2 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elUMLfn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('You\'re not a project member')}`});
        ;
                    }, 20);                
                }ec('a');
ec('li');
let cndrRj6 = component.project.isHigherAuthority;
this.setState('stdM4cn', cndrRj6);
if (cndrRj6) { 
let elgycxl = eo('li','Gmhf');
let elrXYbH = eo('a','BASf',null,`class`,` ${cls(component.isActiveLink('settings'))}`,`href`,`${URLS.project(component.project, 'settings')}`);
let elF3UU9 = eo('i','zIpf',null,`class`,`${fas('cog')} icon`);
ec('i');
let eltenSC = eo('span','u74f');
text(`Settings`);
ec('span');
ec('a');
ec('li');
}ec('ul');
}ec('nav');

                    this.isReadyToGo();
                }
        });