_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {clyIYhk67:'gold-icon',c60ogdSoo:'flk-spinner',cN7Ae_EwH:'markdown',cCG67Ry92:'layout'},
                render: function (component) {
                    let cmpjkqC = this._lc('cCG67Ry92', {parent:component,content:(layout) => {let elvMVPG = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elAn00X = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elqAQEM = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let el1sBDr = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elqAQEM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cndz0W_ = FLAGS.projects;
this.setState('stvHrQm', cndz0W_);
if (cndz0W_) { 
let elBjDT6 = eo('a','tOCf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
elBjDT6.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in elBjDT6.cls) {
                elBjDT6.classList.toggle(className, elBjDT6.cls[className]);
            }  
            let elPU6UG = eo('i','UyUf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndNMxU = component.user.hasCreatedProjectBefore === false;
this.setState('stl2wMg', cndNMxU);
if (cndNMxU) { 
let el7BYc4 = eo('span','0lVf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndmXsu = component.user.hasCreatedProjectBefore;
this.setState('stMOIz9', cndmXsu);
if (cndmXsu) { 
let elFyyp6 = eo('div','H1uf');
let cmppT8c = this._lc('clyIYhk67', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stMOIz9'});
ec('div');
}ec('a');
}ec('h1');
let cndkP45 = component.isLoading;
this.setState('stYom1J', cndkP45);
let cndxBah = !(cndkP45);
this.setState('st9mB00', cndxBah);
if (cndkP45) { 
let cmplrTp = this._lc('c60ogdSoo', {parent:component,parentTop:layout,state:'stYom1J'});
}else { 
let cndNlqM = Is.empty(component.projects);
this.setState('stQnGTc', cndNlqM);
let cndQwsm = !(cndNlqM);
this.setState('stV5z1v', cndQwsm);
if (cndNlqM) { 
let elpJ1S5 = eo('h3','hoCf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let el0thOe = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let ii9zbM = 'um6eQNN' + i;
let elAwKuD = eo('div','c3QmjPtnEE7r' + i+ii9zbM,null,`class`,`row simple-card m-b-2 project`);
let el5uwdQ = eo('div','nbjff'+ii9zbM,null,`class`,`col-sm-2 text-center`);
let elYZ2xU = ev('img','Hu7ff'+ii9zbM,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let el8gnZl = eo('div','qLcff'+ii9zbM,null,`class`,`col-sm-6 metadata`);
let elYz2cV = eo('h3','qthff'+ii9zbM,null,`class`,`name`);
text(project.name);
ec('h3');
let el4xnT0 = eo('p','PU2ff'+ii9zbM,null,`class`,`short-description`);
let cmpNv8A = this._lc('cN7Ae_EwH', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stV5z1v',insideLoop:true,index:"" +ii9zbM});
ec('p');
let cndW9z7 = ! Is.empty(project.tags);
this.setState('stpOjAZ', cndW9z7);
if (cndW9z7) { 
let elGxQX6 = eo('div','Xm6ff'+ii9zbM);
let elGbvxL = eo('h6','bvJff'+ii9zbM,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iidtcg = 'ifQn8On' + i;
let el_ddNe = eo('div','LIZBYFrq73CA' + i+ii9zbM+iidtcg,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let ii2jHG = '0wCxmiI' + i;
let elUNajF = eo('span','onHOEwtKiAxO' + i+ii9zbM+iidtcg+ii2jHG,null,`class`,`tag mr-2`);
let elGwQTA = ev('img','w6mff'+ii9zbM+iidtcg+ii2jHG,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elKTCp0 = eo('span','vclff'+ii9zbM+iidtcg+ii2jHG,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndUi0_ = project.tags.length > 6;
this.setState('str7coY', cndUi0_);
if (cndUi0_) { 
let el_efsX = eo('small','Zipff'+ii9zbM);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elvByOi = eo('a','sslff'+ii9zbM,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elovxiC = eo('div','swzff'+ii9zbM,null,`class`,`col summary`);
let ellVwSN = eo('div','cMIff'+ii9zbM,null,`class`,`gray-text bold m-b-1`);
let elR5K2w = eo('span','9wxff'+ii9zbM,null,`title`,``);
let el9dDLs = eo('i','AZhff'+ii9zbM,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elCIvCH = eo('span','H9mff'+ii9zbM);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elR5K2w;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elEYmzX = eo('div','lTvff'+ii9zbM,null,`class`,`gray-text bold m-b-1`);
let elOqfMb = eo('span','7Q1ff'+ii9zbM,null,`title`,``);
let elA99ZC = eo('i','NHVff'+ii9zbM,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let eluxkOo = eo('span','5vCff'+ii9zbM);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elOqfMb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elQuE6C = eo('div','CnKff'+ii9zbM,null,`class`,`gray-text bold m-b-1`);
let elPF2Eo = eo('span','jP3ff'+ii9zbM,null,`title`,``);
let el_KVAc = eo('i','f5hff'+ii9zbM,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndH_di = project.settings.openRecruitment;
this.setState('stshjNr', cndH_di);
if (cndH_di) { 
let elVFgzy = eo('i','E6Rff'+ii9zbM,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndhB2H = ! project.settings.openRecruitment;
this.setState('sthE0W2', cndhB2H);
if (cndhB2H) { 
let eljE_6u = eo('i','tVOff'+ii9zbM,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elPF2Eo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elNoNwe = eo('div','vnwff'+ii9zbM,null,`class`,`gray-text bold m-b-1`);
let elPvJQV = eo('span','4k9ff'+ii9zbM,null,`title`,``);
let el6qFNG = eo('i','uRfff'+ii9zbM,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elGbuQ1 = eo('span','IsCff'+ii9zbM,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elPvJQV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elX3t3E = eo('div','zvNff'+ii9zbM,null,`class`,`gray-text bold m-b-1`);
let el0LYAK = eo('span','BPMff'+ii9zbM,null,`title`,``);
let eltuapk = eo('i','COrff'+ii9zbM,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let el1jpWW = eo('span','cGAff'+ii9zbM);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el0LYAK;
                        
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