_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {c0DAJ2ptI:'gold-icon',cIVmT0EdC:'flk-spinner',c9dKn__RN:'markdown',c5sXpYlDF:'layout'},
                render: function (component) {
                    let cmpW808 = this._lc('c5sXpYlDF', {parent:component,content:(layout) => {let elaCqxc = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elA6yvL = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elCFJMd = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let el9gacU = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elCFJMd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cndJqFb = FLAGS.projects;
this.setState('stLyAVf', cndJqFb);
if (cndJqFb) { 
let elloz_Y = eo('a','lG5f',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
elloz_Y.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in elloz_Y.cls) {
                elloz_Y.classList.toggle(className, elloz_Y.cls[className]);
            }  
            let el2KDHk = eo('i','ATXf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndeMLy = component.user.hasCreatedProjectBefore === false;
this.setState('stjgd6p', cndeMLy);
if (cndeMLy) { 
let elQYsPD = eo('span','uN5f',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndFBbP = component.user.hasCreatedProjectBefore;
this.setState('stLZPte', cndFBbP);
if (cndFBbP) { 
let elrCxG9 = eo('div','lF0f');
let cmp_yNM = this._lc('c0DAJ2ptI', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stLZPte'});
ec('div');
}ec('a');
}ec('h1');
let cndUS9J = component.isLoading;
this.setState('stiYwX7', cndUS9J);
let cndqGdn = !(cndUS9J);
this.setState('st4R9sN', cndqGdn);
if (cndUS9J) { 
let cmp6A36 = this._lc('cIVmT0EdC', {parent:component,parentTop:layout,state:'stiYwX7'});
}else { 
let cndKs0c = Is.empty(component.projects);
this.setState('stsTgrW', cndKs0c);
let cndBVjN = !(cndKs0c);
this.setState('stQvG6W', cndBVjN);
if (cndKs0c) { 
let elK3P6E = eo('h3','Pd7f',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let ellfi4Q = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiVfDx = '3WegF82' + i;
let el_9mNP = eo('div','MPCzc0f18rla' + i+iiVfDx,null,`class`,`row simple-card m-b-2 project`);
let elS_tuJ = eo('div','P7cff'+iiVfDx,null,`class`,`col-sm-2 text-center`);
let elv_oG6 = ev('img','dj1ff'+iiVfDx,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let eluRS0C = eo('div','7YUff'+iiVfDx,null,`class`,`col-sm-6 metadata`);
let ellQ5j9 = eo('h3','ENPff'+iiVfDx,null,`class`,`name`);
text(project.name);
ec('h3');
let elaEUWF = eo('p','vwIff'+iiVfDx,null,`class`,`short-description`);
let cmpWToZ = this._lc('c9dKn__RN', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stQvG6W',insideLoop:true,index:"" +iiVfDx});
ec('p');
let cnd8esW = ! Is.empty(project.tags);
this.setState('st8xvfA', cnd8esW);
if (cnd8esW) { 
let elOQ2XB = eo('div','d0Off'+iiVfDx);
let elNN25N = eo('h6','53Lff'+iiVfDx,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiMUAo = '3OJpuJY' + i;
let el4fouQ = eo('div','YbHNBZsqTMmU' + i+iiVfDx+iiMUAo,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iinneP = 'RR9V9Ew' + i;
let elSHTpQ = eo('span','bHLvQW985ubv' + i+iiVfDx+iiMUAo+iinneP,null,`class`,`tag mr-2`);
let elvYetq = ev('img','HbVff'+iiVfDx+iiMUAo+iinneP,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elj7oOc = eo('span','Rpjff'+iiVfDx+iiMUAo+iinneP,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndKRRN = project.tags.length > 6;
this.setState('styvHPX', cndKRRN);
if (cndKRRN) { 
let elSI_TJ = eo('small','m1Mff'+iiVfDx);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elf6sB1 = eo('a','gZvff'+iiVfDx,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elofKwm = eo('div','LG2ff'+iiVfDx,null,`class`,`col summary`);
let el5VBTt = eo('div','1Stff'+iiVfDx,null,`class`,`gray-text bold m-b-1`);
let elCUpO3 = eo('span','yYIff'+iiVfDx,null,`title`,``);
let el4jJAj = eo('i','N_8ff'+iiVfDx,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elYYcif = eo('span','klXff'+iiVfDx);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elCUpO3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elf0QKD = eo('div','QzLff'+iiVfDx,null,`class`,`gray-text bold m-b-1`);
let elxJrCm = eo('span','AWzff'+iiVfDx,null,`title`,``);
let elQ8Gl4 = eo('i','UuUff'+iiVfDx,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elEOCBb = eo('span','cPbff'+iiVfDx);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elxJrCm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elgILRV = eo('div','kDKff'+iiVfDx,null,`class`,`gray-text bold m-b-1`);
let elyK7dZ = eo('span','IOQff'+iiVfDx,null,`title`,``);
let elHFizm = eo('i','O1Nff'+iiVfDx,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cnd1DXS = project.settings.openRecruitment;
this.setState('stJrzM6', cnd1DXS);
if (cnd1DXS) { 
let elWQzNM = eo('i','sfJff'+iiVfDx,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndaXrN = ! project.settings.openRecruitment;
this.setState('std3amz', cndaXrN);
if (cndaXrN) { 
let ela3axS = eo('i','2Vvff'+iiVfDx,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elyK7dZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elCEKrF = eo('div','hqOff'+iiVfDx,null,`class`,`gray-text bold m-b-1`);
let elOjtQh = eo('span','I1eff'+iiVfDx,null,`title`,``);
let elvdNB3 = eo('i','ImPff'+iiVfDx,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elfroS_ = eo('span','5xmff'+iiVfDx,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elOjtQh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elx5nnH = eo('div','qjeff'+iiVfDx,null,`class`,`gray-text bold m-b-1`);
let ele9xy0 = eo('span','efQff'+iiVfDx,null,`title`,``);
let elaPqCU = eo('i','259ff'+iiVfDx,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let elPOsi6 = eo('span','GDjff'+iiVfDx);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = ele9xy0;
                        
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