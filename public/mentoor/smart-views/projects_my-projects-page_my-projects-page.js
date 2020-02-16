_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {c5bSeJXAC:'gold-icon',cGDPPFsFq:'flk-spinner',cBGDrvqMc:'markdown',cSPuzCSk3:'layout'},
                render: function (component) {
                    let cmpkHF6 = this._lc('cSPuzCSk3', {parent:component,content:(layout) => {let el5E_Ba = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndUl8B = FLAGS.projects;
this.setState('stsLQrd', cndUl8B);
if (cndUl8B) { 
let elr40ts = eo('a','DvPf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
elr40ts.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in elr40ts.cls) {
                elr40ts.classList.toggle(className, elr40ts.cls[className]);
            }  
            let elLKi7l = eo('i','mT9f',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndCaj6 = component.user.hasCreatedProjectBefore === false;
this.setState('stHzVrf', cndCaj6);
if (cndCaj6) { 
let elk7GfL = eo('span','cIGf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cnd2_1W = component.user.hasCreatedProjectBefore;
this.setState('st4P9sv', cnd2_1W);
if (cnd2_1W) { 
let el1XwUb = eo('div','Lbpf');
let cmpd87_ = this._lc('c5bSeJXAC', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'st4P9sv'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndhTph = ! component.isLoading;
this.setState('stqr5Ct', cndhTph);
if (cndhTph) { 
let eli4qF2 = eo('span','IM2f',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cnd9gkp = component.isLoading;
this.setState('stmKAAB', cnd9gkp);
let cndKTO0 = !(cnd9gkp);
this.setState('st6iFc4', cndKTO0);
if (cnd9gkp) { 
let cmpCfS3 = this._lc('cGDPPFsFq', {parent:component,parentTop:layout,state:'stmKAAB'});
}else { 
let cndUiwf = Is.empty(component.projects);
this.setState('stCCF4F', cndUiwf);
let cnd7JlG = !(cndUiwf);
this.setState('st44a2V', cnd7JlG);
if (cndUiwf) { 
let elV9JXO = eo('h3','DqVf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elCTuFy = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiXYDb = 'ICf9A5I' + i;
let elZE4fI = eo('div','vW8WOwOIBuGq' + i+iiXYDb,null,`class`,`row simple-card m-b-2 project`);
let elGzA4I = eo('div','_fHff'+iiXYDb,null,`class`,`col-sm-2 text-center`);
let elXwwdP = ev('img','cuBff'+iiXYDb,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elqBE59 = eo('div','RlWff'+iiXYDb,null,`class`,`col-sm-6 metadata`);
let elKT3q7 = eo('h3','8ikff'+iiXYDb,null,`class`,`name`);
text(project.name);
ec('h3');
let elyso7_ = eo('p','bBQff'+iiXYDb,null,`class`,`short-description`);
let cmpIg6R = this._lc('cBGDrvqMc', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'st44a2V',insideLoop:true,index:"" +iiXYDb});
ec('p');
let cnd5wsW = ! Is.empty(project.tags);
this.setState('stemsNE', cnd5wsW);
if (cnd5wsW) { 
let elXrnyc = eo('div','Tpaff'+iiXYDb);
let elGkNMi = eo('h6','Doqff'+iiXYDb,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let ii8DPc = '9va00YV' + i;
let elDG4QJ = eo('div','pMEh5oGylJSB' + i+iiXYDb+ii8DPc,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iitpwP = 'H8rmgj9' + i;
let elN49Fh = eo('span','7TCOBmiOU9oy' + i+iiXYDb+ii8DPc+iitpwP,null,`class`,`tag mr-2`);
let elsggJA = ev('img','p9Qff'+iiXYDb+ii8DPc+iitpwP,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elpaLdw = eo('span','Xzwff'+iiXYDb+ii8DPc+iitpwP,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndbcPV = project.tags.length > 6;
this.setState('stEDXPD', cndbcPV);
if (cndbcPV) { 
let elw5LRO = eo('small','NBxff'+iiXYDb);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elVQ7tG = eo('a','VK3ff'+iiXYDb,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elmwfpE = eo('div','uMoff'+iiXYDb,null,`class`,`col summary`);
let elxtp2F = eo('div','EuTff'+iiXYDb,null,`class`,`gray-text bold m-b-1`);
let elihFWu = eo('span','YA1ff'+iiXYDb,null,`title`,``);
let elSVwKJ = eo('i','Aj5ff'+iiXYDb,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elXvu67 = eo('span','dJoff'+iiXYDb);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elihFWu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let eldUkHv = eo('div','8U8ff'+iiXYDb,null,`class`,`gray-text bold m-b-1`);
let el6rTjR = eo('span','inYff'+iiXYDb,null,`title`,``);
let elvZ4bM = eo('i','jc2ff'+iiXYDb,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let els__UW = eo('span','5uWff'+iiXYDb);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el6rTjR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elYRVsg = eo('div','JMnff'+iiXYDb,null,`class`,`gray-text bold m-b-1`);
let elPK2bt = eo('span','Ax0ff'+iiXYDb,null,`title`,``);
let elQpjbK = eo('i','6GGff'+iiXYDb,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndC6xW = project.settings.openRecruitment;
this.setState('stHs8Ew', cndC6xW);
if (cndC6xW) { 
let elGIYu1 = eo('i','0Kqff'+iiXYDb,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndXW4_ = ! project.settings.openRecruitment;
this.setState('stHwQeT', cndXW4_);
if (cndXW4_) { 
let eljuI1r = eo('i','wIqff'+iiXYDb,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elPK2bt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elTByGs = eo('div','EnPff'+iiXYDb,null,`class`,`gray-text bold m-b-1`);
let elqCQH0 = eo('span','WpDff'+iiXYDb,null,`title`,``);
let elF3XsI = eo('i','Aswff'+iiXYDb,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elF3yT9 = eo('span','Nhyff'+iiXYDb,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elqCQH0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elICBRS = eo('div','0nuff'+iiXYDb,null,`class`,`gray-text bold m-b-1`);
let elmGZEu = eo('span','473ff'+iiXYDb,null,`title`,``);
let elNuEaM = eo('i','TxXff'+iiXYDb,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let elxhkYr = eo('span','i93ff'+iiXYDb);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elmGZEu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Fund')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
ec('div');
}
ec('div');
}}}});

                    this.isReadyToGo();
                }
        });