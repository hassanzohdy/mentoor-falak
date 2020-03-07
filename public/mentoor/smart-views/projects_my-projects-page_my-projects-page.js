_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {c9J4Lw6Tv:'gold-icon',cLS5CB8WQ:'flk-spinner',cvm_aCYyF:'markdown',cond7EZdp:'layout'},
                render: function (component) {
                    let cmp098l = this._lc('cond7EZdp', {parent:component,content:(layout) => {let elu4NzV = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndm6Gp = FLAGS.projects;
this.setState('st6dNv0', cndm6Gp);
if (cndm6Gp) { 
let elf96tJ = eo('a','ul2f',null,`class`,`btn float-right d-sm-inline-block bold ${cls({'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false})}`,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`);
let elHoR9E = eo('i','fNqf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let cndOfI1 = component.user.hasCreatedProjectBefore === false;
this.setState('stySHwL', cndOfI1);
if (cndOfI1) { 
let el1auur = eo('span','hUAf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndOj2y = component.user.hasCreatedProjectBefore;
this.setState('stLW1BE', cndOj2y);
if (cndOj2y) { 
let eltqCIX = eo('div','0xef');
let cmp55mb = this._lc('c9J4Lw6Tv', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stLW1BE'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndid5s = ! component.isLoading;
this.setState('stfr7Ff', cndid5s);
if (cndid5s) { 
let el__3V0 = eo('span','ALyf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cnd9YGN = component.isLoading;
this.setState('stD6J2j', cnd9YGN);
let cndaRZL = !(cnd9YGN);
this.setState('stoLiw4', cndaRZL);
if (cnd9YGN) { 
let cmpf0xt = this._lc('cLS5CB8WQ', {parent:component,parentTop:layout,state:'stD6J2j'});
}else { 
let cndxvtB = Is.empty(component.projects);
this.setState('st5qyG5', cndxvtB);
let cndVeSq = !(cndxvtB);
this.setState('stVsL7t', cndVeSq);
if (cndxvtB) { 
let elkgzoj = eo('h3','0wHf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elXAqJp = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiHzTq = 'WuJRJuR' + i;
let elJDqbd = eo('div','8_IaYSeuPrAk' + i+iiHzTq,null,`class`,`row simple-card m-b-2 project`);
let elhsOJ4 = eo('div','Fi9ff'+iiHzTq,null,`class`,`col-sm-2 text-center`);
let eliWLcM = ev('img','cT0ff'+iiHzTq,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let el_juBE = eo('div','Woaff'+iiHzTq,null,`class`,`col-sm-6 metadata`);
let elRJKSk = eo('h3','8hhff'+iiHzTq,null,`class`,`name`);
text(project.name);
ec('h3');
let el5KQfw = eo('p','Bzxff'+iiHzTq,null,`class`,`short-description`);
let cmpfXWz = this._lc('cvm_aCYyF', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stVsL7t',insideLoop:true,index:"" +iiHzTq});
ec('p');
let cnd1zNx = ! Is.empty(project.tags);
this.setState('stZsijE', cnd1zNx);
if (cnd1zNx) { 
let els98Nv = eo('div','hmSff'+iiHzTq);
let elfRuwS = eo('h6','WL1ff'+iiHzTq,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iitTd6 = 'hNotxSj' + i;
let elGwbVw = eo('div','yqDQA4P29c_J' + i+iiHzTq+iitTd6,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiFV34 = 'sTQftWA' + i;
let elnEAH1 = eo('span','2ZoNuIeoDb7j' + i+iiHzTq+iitTd6+iiFV34,null,`class`,`tag mr-2`);
let eld4SXy = ev('img','5aEff'+iiHzTq+iitTd6+iiFV34,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let ellAq9P = eo('span','knHff'+iiHzTq+iitTd6+iiFV34,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndY54x = project.tags.length > 6;
this.setState('stSPhK0', cndY54x);
if (cndY54x) { 
let elXaE3k = eo('small','iI7ff'+iiHzTq);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elV0Oxz = eo('a','SM9ff'+iiHzTq,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elnum2j = eo('div','SqOff'+iiHzTq,null,`class`,`col summary`);
let elvlo_4 = eo('div','fc0ff'+iiHzTq,null,`class`,`gray-text bold m-b-1`);
let eljAonK = eo('span','_M8ff'+iiHzTq,null,`title`,``);
let elalmPb = eo('i','w88ff'+iiHzTq,null,`class`,`${fas('users')} mr-2 icon`);
ec('i');
let el6vrQ1 = eo('span','HgUff'+iiHzTq);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = eljAonK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elruaMM = eo('div','S0mff'+iiHzTq,null,`class`,`gray-text bold m-b-1`);
let elOtEyE = eo('span','VQCff'+iiHzTq,null,`title`,``);
let el77dyp = eo('i','yETff'+iiHzTq,null,`class`,`${fas('people-carry')} mr-2 icon`);
ec('i');
let elD0vgF = eo('span','FR4ff'+iiHzTq);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elOtEyE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elzSLdr = eo('div','g_0ff'+iiHzTq,null,`class`,`gray-text bold m-b-1`);
let el5gfGa = eo('span','DH_ff'+iiHzTq,null,`title`,``);
let elbwzdv = eo('i','Jdxff'+iiHzTq,null,`class`,`${fas('briefcase')} mr-2 icon`);
ec('i');
let cndIUoo = project.settings.openRecruitment;
this.setState('st7jpTN', cndIUoo);
if (cndIUoo) { 
let eltkS03 = eo('i','2Dfff'+iiHzTq,null,`class`,`${fas('check')} green-text mr-2 icon`);
ec('i');
}let cndqy_Z = ! project.settings.openRecruitment;
this.setState('st8ytWa', cndqy_Z);
if (cndqy_Z) { 
let elJaN1U = eo('i','bHtff'+iiHzTq,null,`class`,`${fas('times')} red-text mr-2 icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = el5gfGa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elTr1r1 = eo('div','krQff'+iiHzTq,null,`class`,`gray-text bold m-b-1`);
let eloziF6 = eo('span','pFjff'+iiHzTq,null,`title`,``);
let elWzzYu = eo('i','80Iff'+iiHzTq,null,`class`,`${fas('chart-line')} mr-2 icon`);
ec('i');
let eloaspj = eo('span','QUhff'+iiHzTq,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = eloziF6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let el6YsZR = eo('div','rhoff'+iiHzTq,null,`class`,`gray-text bold m-b-1`);
let elrI6_X = eo('span','RW0ff'+iiHzTq,null,`title`,``);
let elT8lIH = eo('i','LmSff'+iiHzTq,null,`class`,`${fas('coins')} mr-2 icon`);
ec('i');
let elskUsI = eo('span','lyHff'+iiHzTq);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elrI6_X;
                        
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