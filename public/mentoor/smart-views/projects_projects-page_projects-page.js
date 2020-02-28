_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {c0H5l7lFk:'gold-icon',cCRN1nSsQ:'flk-spinner',cyK1pXF3y:'markdown',cIhO6Nof7:'layout'},
                render: function (component) {
                    let cmp3xNV = this._lc('cIhO6Nof7', {parent:component,content:(layout) => {let elH9_zq = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elIIHD6 = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elkvITI = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let elaThYA = eo('i',null,null,`class`,`${fas('question-circle')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elkvITI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cndp8pw = FLAGS.projects;
this.setState('st7MWdn', cndp8pw);
if (cndp8pw) { 
let elDqrkV = eo('a','_i1f',null,`class`,`btn float-right d-sm-inline-block bold ${cls({'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false})}`,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`);
let elGxA1a = eo('i','x6qf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let cndyDD3 = component.user.hasCreatedProjectBefore === false;
this.setState('stlMCA3', cndyDD3);
if (cndyDD3) { 
let elC6J5i = eo('span','uXhf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndIOgq = component.user.hasCreatedProjectBefore;
this.setState('st0Yj4i', cndIOgq);
if (cndIOgq) { 
let elRZDCU = eo('div','Bkzf');
let cmpjTIC = this._lc('c0H5l7lFk', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'st0Yj4i'});
ec('div');
}ec('a');
}ec('h1');
let cndteAE = component.isLoading;
this.setState('stlmeOA', cndteAE);
let cndQTKE = !(cndteAE);
this.setState('stQc_8P', cndQTKE);
if (cndteAE) { 
let cmp5LGh = this._lc('cCRN1nSsQ', {parent:component,parentTop:layout,state:'stlmeOA'});
}else { 
let cndD_JX = Is.empty(component.projects);
this.setState('stGMvvF', cndD_JX);
let cnddwP3 = !(cndD_JX);
this.setState('stnAsGd', cnddwP3);
if (cndD_JX) { 
let elrmsZg = eo('h3','pDRf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elI1DOU = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiplax = '_K7jcvi' + i;
let el44j9v = eo('div','gLtEvci08I2T' + i+iiplax,null,`class`,`row simple-card m-b-2 project`);
let el6SkFA = eo('div','7Iwff'+iiplax,null,`class`,`col-sm-2 text-center`);
let elJgElA = ev('img','rAnff'+iiplax,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elvoWT_ = eo('div','nOQff'+iiplax,null,`class`,`col-sm-6 metadata`);
let elMm3Im = eo('h3','z5Mff'+iiplax,null,`class`,`name`);
text(project.name);
ec('h3');
let elWRq1C = eo('p','mauff'+iiplax,null,`class`,`short-description`);
let cmpL0Z5 = this._lc('cyK1pXF3y', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stnAsGd',insideLoop:true,index:"" +iiplax});
ec('p');
let cndwcgq = ! Is.empty(project.tags);
this.setState('stPIg4r', cndwcgq);
if (cndwcgq) { 
let eldn_Ca = eo('div','0Viff'+iiplax);
let elIis0F = eo('h6','20Cff'+iiplax,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iidYEv = 'rnX756u' + i;
let elXDOBt = eo('div','tqlq0zZ2TKq5' + i+iiplax+iidYEv,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iidoWL = '_lG67S6' + i;
let elBg5qp = eo('span','JV3Pte4DFLbQ' + i+iiplax+iidYEv+iidoWL,null,`class`,`tag mr-2`);
let el5lFRk = ev('img','bJ4ff'+iiplax+iidYEv+iidoWL,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el9HfF5 = eo('span','Cu4ff'+iiplax+iidYEv+iidoWL,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cnd5fOM = project.tags.length > 6;
this.setState('stUJZ64', cnd5fOM);
if (cnd5fOM) { 
let el_rUTx = eo('small','P9Tff'+iiplax);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elvemI2 = eo('a','bjYff'+iiplax,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elFw2uT = eo('div','4umff'+iiplax,null,`class`,`col summary`);
let elAgPUi = eo('div','okTff'+iiplax,null,`class`,`gray-text bold m-b-1`);
let elCX73O = eo('span','HpQff'+iiplax,null,`title`,``);
let elakgn9 = eo('i','y40ff'+iiplax,null,`class`,`${fas('users')} mr-2 icon`);
ec('i');
let elY64AW = eo('span','wRUff'+iiplax);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elCX73O;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elhQ1lg = eo('div','KQSff'+iiplax,null,`class`,`gray-text bold m-b-1`);
let elOvUcZ = eo('span','s2gff'+iiplax,null,`title`,``);
let eljUzix = eo('i','WqBff'+iiplax,null,`class`,`${fas('people-carry')} mr-2 icon`);
ec('i');
let el62sT1 = eo('span','OfYff'+iiplax);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elOvUcZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elglmtd = eo('div','IPSff'+iiplax,null,`class`,`gray-text bold m-b-1`);
let elr5Puw = eo('span','ohHff'+iiplax,null,`title`,``);
let elf_e8W = eo('i','CvRff'+iiplax,null,`class`,`${fas('briefcase')} mr-2 icon`);
ec('i');
let cndapeJ = project.settings.openRecruitment;
this.setState('stAXOUw', cndapeJ);
if (cndapeJ) { 
let elN1vRg = eo('i','lLGff'+iiplax,null,`class`,`${fas('check')} green-text mr-2 icon`);
ec('i');
}let cndVthI = ! project.settings.openRecruitment;
this.setState('stXJ41x', cndVthI);
if (cndVthI) { 
let el8XG7w = eo('i','NPpff'+iiplax,null,`class`,`${fas('times')} red-text mr-2 icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elr5Puw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elnP4NR = eo('div','Wx4ff'+iiplax,null,`class`,`gray-text bold m-b-1`);
let elaoDYk = eo('span','dveff'+iiplax,null,`title`,``);
let elnq1MP = eo('i','Wwrff'+iiplax,null,`class`,`${fas('chart-line')} mr-2 icon`);
ec('i');
let el7JYOV = eo('span','zo2ff'+iiplax,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elaoDYk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elnAY7Y = eo('div','RhBff'+iiplax,null,`class`,`gray-text bold m-b-1`);
let elY3_cS = eo('span','ccZff'+iiplax,null,`title`,``);
let elduoNk = eo('i','FJzff'+iiplax,null,`class`,`${fas('coins')} mr-2 icon`);
ec('i');
let elHQy2Q = eo('span','Zxyff'+iiplax);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elY3_cS;
                        
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