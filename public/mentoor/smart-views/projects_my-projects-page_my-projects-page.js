_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {ceot6IWB0:'gold-icon',c3vPlkxde:'flk-spinner',cYSNRVFTw:'markdown',cVn16a2Zu:'layout'},
                render: function (component) {
                    let cmpMO9R = this._lc('cVn16a2Zu', {parent:component,content:(layout) => {let elyUwNp = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndQS4y = FLAGS.projects;
this.setState('stB_E25', cndQS4y);
if (cndQS4y) { 
let el0ISoo = eo('a','zejf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
el0ISoo.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in el0ISoo.cls) {
                el0ISoo.classList.toggle(className, el0ISoo.cls[className]);
            }  
            let el1beVo = eo('i','oRKf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndOJGS = component.user.hasCreatedProjectBefore === false;
this.setState('st595ZQ', cndOJGS);
if (cndOJGS) { 
let el6Xgbb = eo('span','kmSf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndcLIe = component.user.hasCreatedProjectBefore;
this.setState('stM0eq9', cndcLIe);
if (cndcLIe) { 
let ele9Bgu = eo('div','vVBf');
let cmpjUQg = this._lc('ceot6IWB0', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stM0eq9'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndyGE4 = ! component.isLoading;
this.setState('stm6GTd', cndyGE4);
if (cndyGE4) { 
let elACZ2h = eo('span','YWGf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cnd35Xo = component.isLoading;
this.setState('stEcKr3', cnd35Xo);
let cndIhrA = !(cnd35Xo);
this.setState('stDEXCH', cndIhrA);
if (cnd35Xo) { 
let cmpVZfn = this._lc('c3vPlkxde', {parent:component,parentTop:layout,state:'stEcKr3'});
}else { 
let cndX3gb = Is.empty(component.projects);
this.setState('stXw3lB', cndX3gb);
let cndaKxG = !(cndX3gb);
this.setState('stwq9JJ', cndaKxG);
if (cndX3gb) { 
let el7Eyny = eo('h3','UcJf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elw1HYR = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiOqrj = 'KVAakqE' + i;
let el4jd2p = eo('div','YKuy1Xl6bxE7' + i+iiOqrj,null,`class`,`row simple-card m-b-2 project`);
let elVL9fm = eo('div','dUlff'+iiOqrj,null,`class`,`col-sm-2 text-center`);
let el9CIji = ev('img','DZxff'+iiOqrj,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let eljWSAP = eo('div','B4qff'+iiOqrj,null,`class`,`col-sm-6 metadata`);
let elhpeo9 = eo('h3','lXCff'+iiOqrj,null,`class`,`name`);
text(project.name);
ec('h3');
let elF2EzT = eo('p','nwjff'+iiOqrj,null,`class`,`short-description`);
let cmp4xHE = this._lc('cYSNRVFTw', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stwq9JJ',insideLoop:true,index:"" +iiOqrj});
ec('p');
let cndZ1PN = ! Is.empty(project.tags);
this.setState('stxI7bl', cndZ1PN);
if (cndZ1PN) { 
let elakIKS = eo('div','3Clff'+iiOqrj);
let elKBeKb = eo('h6','29hff'+iiOqrj,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iirdCT = 'emjYkAm' + i;
let elvbkeZ = eo('div','xkhKt86_Lsug' + i+iiOqrj+iirdCT,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiW2zf = 'zPR_KP7' + i;
let elIid6b = eo('span','nKi4y3gZVSVd' + i+iiOqrj+iirdCT+iiW2zf,null,`class`,`tag mr-2`);
let elUKHFX = ev('img','Wdxff'+iiOqrj+iirdCT+iiW2zf,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el2lbiW = eo('span','lG5ff'+iiOqrj+iirdCT+iiW2zf,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndTU0o = project.tags.length > 6;
this.setState('stzXWNN', cndTU0o);
if (cndTU0o) { 
let elyWpb1 = eo('small','rKnff'+iiOqrj);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elxaz9U = eo('a','AgJff'+iiOqrj,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elBDZag = eo('div','o3eff'+iiOqrj,null,`class`,`col summary`);
let elsW1e8 = eo('div','UEMff'+iiOqrj,null,`class`,`gray-text bold m-b-1`);
let el0kS6r = eo('span','njdff'+iiOqrj,null,`title`,``);
let elRwNGT = eo('i','4AQff'+iiOqrj,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let el2O_cd = eo('span','1wAff'+iiOqrj);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el0kS6r;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elsN903 = eo('div','orVff'+iiOqrj,null,`class`,`gray-text bold m-b-1`);
let elNMHGt = eo('span','WYiff'+iiOqrj,null,`title`,``);
let elbA40i = eo('i','Tstff'+iiOqrj,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elI9Lrh = eo('span','NF1ff'+iiOqrj);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elNMHGt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elU1cnI = eo('div','i81ff'+iiOqrj,null,`class`,`gray-text bold m-b-1`);
let el1VoNc = eo('span','obVff'+iiOqrj,null,`title`,``);
let elQUWn8 = eo('i','MNyff'+iiOqrj,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndMNhd = project.settings.openRecruitment;
this.setState('st63Uit', cndMNhd);
if (cndMNhd) { 
let elLGb1G = eo('i','S9aff'+iiOqrj,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndnzZ8 = ! project.settings.openRecruitment;
this.setState('stEgq2O', cndnzZ8);
if (cndnzZ8) { 
let elEgh_7 = eo('i','GaLff'+iiOqrj,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = el1VoNc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let el8jyVj = eo('div','zwpff'+iiOqrj,null,`class`,`gray-text bold m-b-1`);
let elf_Ohn = eo('span','_VAff'+iiOqrj,null,`title`,``);
let elA92CM = eo('i','i_Yff'+iiOqrj,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elW2bLt = eo('span','URQff'+iiOqrj,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elf_Ohn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elFOjjb = eo('div','iZgff'+iiOqrj,null,`class`,`gray-text bold m-b-1`);
let elR3UXW = eo('span','psSff'+iiOqrj,null,`title`,``);
let el7PXwK = eo('i','kVtff'+iiOqrj,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let eln_x5v = eo('span','c60ff'+iiOqrj);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elR3UXW;
                        
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