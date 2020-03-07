_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {cXeldQk26:'gold-icon',cGVbzMlHs:'flk-spinner',c8UWd7ckj:'markdown',cXJlMkDAE:'layout'},
                render: function (component) {
                    let cmpOryY = this._lc('cXJlMkDAE', {parent:component,content:(layout) => {let eld9GKG = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elqJ8Nb = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elhF2J_ = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let elXJjnP = eo('i',null,null,`class`,`${fas('question-circle')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elhF2J_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cndlo4B = FLAGS.projects;
this.setState('stBAzK9', cndlo4B);
if (cndlo4B) { 
let elW373P = eo('a','a0Mf',null,`class`,`btn float-right d-sm-inline-block bold ${cls({'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false})}`,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`);
let elT3RmQ = eo('i','er9f',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let cndKPWJ = component.user.hasCreatedProjectBefore === false;
this.setState('st100U0', cndKPWJ);
if (cndKPWJ) { 
let elU2y0W = eo('span','rtAf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cnd2iXB = component.user.hasCreatedProjectBefore;
this.setState('stWIfN4', cnd2iXB);
if (cnd2iXB) { 
let elstZ3p = eo('div','hbXf');
let cmpo8Gv = this._lc('cXeldQk26', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stWIfN4'});
ec('div');
}ec('a');
}ec('h1');
let cndnVB1 = component.isLoading;
this.setState('st9SIrk', cndnVB1);
let cnd1M0q = !(cndnVB1);
this.setState('stiSN2Q', cnd1M0q);
if (cndnVB1) { 
let cmpYoa5 = this._lc('cGVbzMlHs', {parent:component,parentTop:layout,state:'st9SIrk'});
}else { 
let cndbJJY = Is.empty(component.projects);
this.setState('stO502U', cndbJJY);
let cnd0dsi = !(cndbJJY);
this.setState('st3R_I7', cnd0dsi);
if (cndbJJY) { 
let eldhTd5 = eo('h3','V5If',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elzOKT5 = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiM4vG = 'DI5cnKw' + i;
let elUix8o = eo('div','PpIYbC8gIyry' + i+iiM4vG,null,`class`,`row simple-card m-b-2 project`);
let elosoRq = eo('div','Dsxff'+iiM4vG,null,`class`,`col-sm-2 text-center`);
let elwRNcr = ev('img','HXKff'+iiM4vG,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elxTQKd = eo('div','baaff'+iiM4vG,null,`class`,`col-sm-6 metadata`);
let el706zF = eo('h3','UViff'+iiM4vG,null,`class`,`name`);
text(project.name);
ec('h3');
let el3flJ3 = eo('p','VqQff'+iiM4vG,null,`class`,`short-description`);
let cmpI26r = this._lc('c8UWd7ckj', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'st3R_I7',insideLoop:true,index:"" +iiM4vG});
ec('p');
let cndx1hy = ! Is.empty(project.tags);
this.setState('st8CM57', cndx1hy);
if (cndx1hy) { 
let elGr4_i = eo('div','5muff'+iiM4vG);
let elRq6gY = eo('h6','yCYff'+iiM4vG,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiJLAP = 'MNkrwa0' + i;
let elcQrrr = eo('div','acxxHk1a2tjQ' + i+iiM4vG+iiJLAP,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iidbbs = '8nIzATX' + i;
let elLtR9h = eo('span','zh9wc12YZ0UG' + i+iiM4vG+iiJLAP+iidbbs,null,`class`,`tag mr-2`);
let elCy2pQ = ev('img','zggff'+iiM4vG+iiJLAP+iidbbs,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elS3pTv = eo('span','fHxff'+iiM4vG+iiJLAP+iidbbs,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndILpE = project.tags.length > 6;
this.setState('stcJ5Nh', cndILpE);
if (cndILpE) { 
let elumQAx = eo('small','S8aff'+iiM4vG);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let el4j0hm = eo('a','qpiff'+iiM4vG,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elcC1Yp = eo('div','ROVff'+iiM4vG,null,`class`,`col summary`);
let elvL5J2 = eo('div','qKaff'+iiM4vG,null,`class`,`gray-text bold m-b-1`);
let eleHhpj = eo('span','86Dff'+iiM4vG,null,`title`,``);
let el55UWY = eo('i','HZiff'+iiM4vG,null,`class`,`${fas('users')} mr-2 icon`);
ec('i');
let ellPHpv = eo('span','aQcff'+iiM4vG);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = eleHhpj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elMmLxS = eo('div','fJTff'+iiM4vG,null,`class`,`gray-text bold m-b-1`);
let el7DwHp = eo('span','eu1ff'+iiM4vG,null,`title`,``);
let elaxjCx = eo('i','s0vff'+iiM4vG,null,`class`,`${fas('people-carry')} mr-2 icon`);
ec('i');
let elfNKN5 = eo('span','9Dnff'+iiM4vG);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el7DwHp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elNUOZ4 = eo('div','oXKff'+iiM4vG,null,`class`,`gray-text bold m-b-1`);
let elEGsQg = eo('span','aM4ff'+iiM4vG,null,`title`,``);
let el3Dbs1 = eo('i','eafff'+iiM4vG,null,`class`,`${fas('briefcase')} mr-2 icon`);
ec('i');
let cnd85vu = project.settings.openRecruitment;
this.setState('steeU9j', cnd85vu);
if (cnd85vu) { 
let elSw2ax = eo('i','S7lff'+iiM4vG,null,`class`,`${fas('check')} green-text mr-2 icon`);
ec('i');
}let cndIfUL = ! project.settings.openRecruitment;
this.setState('stUqb15', cndIfUL);
if (cndIfUL) { 
let elfoxMz = eo('i','tTNff'+iiM4vG,null,`class`,`${fas('times')} red-text mr-2 icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elEGsQg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elvhqB2 = eo('div','lxLff'+iiM4vG,null,`class`,`gray-text bold m-b-1`);
let el8JNei = eo('span','L9Vff'+iiM4vG,null,`title`,``);
let elCNCSi = eo('i','w8off'+iiM4vG,null,`class`,`${fas('chart-line')} mr-2 icon`);
ec('i');
let elt0KU_ = eo('span','6QXff'+iiM4vG,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el8JNei;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elYAxYh = eo('div','nwSff'+iiM4vG,null,`class`,`gray-text bold m-b-1`);
let eldJVFI = eo('span','7n5ff'+iiM4vG,null,`title`,``);
let elaWiW5 = eo('i','1Bnff'+iiM4vG,null,`class`,`${fas('coins')} mr-2 icon`);
ec('i');
let eluvtgA = eo('span','Jtgff'+iiM4vG);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = eldJVFI;
                        
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