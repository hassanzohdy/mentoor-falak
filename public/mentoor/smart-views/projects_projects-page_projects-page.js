_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {cRnc2TVTs:'gold-icon',czae71mbZ:'flk-spinner',cRPdvxW6k:'markdown',cxQIRhBWw:'layout'},
                render: function (component) {
                    let cmpYfkt = this._lc('cxQIRhBWw', {parent:component,content:(layout) => {let elFPbBI = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elo4lHq = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elWHCTU = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let elZ9g9m = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elWHCTU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cnd4GVh = FLAGS.projects;
this.setState('stGArP8', cnd4GVh);
if (cnd4GVh) { 
let elpivU2 = eo('a','4yaf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
elpivU2.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in elpivU2.cls) {
                elpivU2.classList.toggle(className, elpivU2.cls[className]);
            }  
            let elaHKhI = eo('i','9pMf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndSVec = component.user.hasCreatedProjectBefore === false;
this.setState('stwjqn1', cndSVec);
if (cndSVec) { 
let elrnPCm = eo('span','zcIf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndIOZN = component.user.hasCreatedProjectBefore;
this.setState('stYAChe', cndIOZN);
if (cndIOZN) { 
let elZbA46 = eo('div','6kif');
let cmpYLkc = this._lc('cRnc2TVTs', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stYAChe'});
ec('div');
}ec('a');
}ec('h1');
let cndBJOC = component.isLoading;
this.setState('stIdYhh', cndBJOC);
let cnd5RA4 = !(cndBJOC);
this.setState('stggt57', cnd5RA4);
if (cndBJOC) { 
let cmpMEW7 = this._lc('czae71mbZ', {parent:component,parentTop:layout,state:'stIdYhh'});
}else { 
let cndSuJN = Is.empty(component.projects);
this.setState('strFdGu', cndSuJN);
let cndJSRo = !(cndSuJN);
this.setState('stnPwfr', cndJSRo);
if (cndSuJN) { 
let el8K2EJ = eo('h3','o9hf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elTjRby = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iildAj = 'RQ1DuGI' + i;
let ellg2tO = eo('div','RxKtcIZ7Fvry' + i+iildAj,null,`class`,`row simple-card m-b-2 project`);
let elA5VKo = eo('div','v0pff'+iildAj,null,`class`,`col-sm-2 text-center`);
let elZ9Aj7 = ev('img','YDrff'+iildAj,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elJ1lvg = eo('div','l7aff'+iildAj,null,`class`,`col-sm-6 metadata`);
let elryZHH = eo('h3','aGIff'+iildAj,null,`class`,`name`);
text(project.name);
ec('h3');
let elz3n14 = eo('p','zmnff'+iildAj,null,`class`,`short-description`);
let cmpB6CT = this._lc('cRPdvxW6k', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stnPwfr',insideLoop:true,index:"" +iildAj});
ec('p');
let cndN1zX = ! Is.empty(project.tags);
this.setState('st4yPgQ', cndN1zX);
if (cndN1zX) { 
let elUTlTY = eo('div','j8rff'+iildAj);
let elzVcdu = eo('h6','4MNff'+iildAj,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiUvst = '42XEAfL' + i;
let elEZFkS = eo('div','8vIEX1fIS3aL' + i+iildAj+iiUvst,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iigNd3 = 'mr3ecWD' + i;
let elMasaS = eo('span','lIjjXmdmpVn3' + i+iildAj+iiUvst+iigNd3,null,`class`,`tag mr-2`);
let eluuWcs = ev('img','c1Sff'+iildAj+iiUvst+iigNd3,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elGhXoO = eo('span','TDMff'+iildAj+iiUvst+iigNd3,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndtHRm = project.tags.length > 6;
this.setState('stexSkJ', cndtHRm);
if (cndtHRm) { 
let el7CIdj = eo('small','oG1ff'+iildAj);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let el90Xes = eo('a','Nkiff'+iildAj,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elkCP3q = eo('div','OhJff'+iildAj,null,`class`,`col summary`);
let elkJQyu = eo('div','xlqff'+iildAj,null,`class`,`gray-text bold m-b-1`);
let elnpblx = eo('span','8jgff'+iildAj,null,`title`,``);
let el7VALx = eo('i','YpXff'+iildAj,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elHKQze = eo('span','TzAff'+iildAj);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elnpblx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elVBjNp = eo('div','ABkff'+iildAj,null,`class`,`gray-text bold m-b-1`);
let elDcyfP = eo('span','6CVff'+iildAj,null,`title`,``);
let elPv03m = eo('i','dVTff'+iildAj,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elykjio = eo('span','TwKff'+iildAj);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elDcyfP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elwtkyG = eo('div','B3Xff'+iildAj,null,`class`,`gray-text bold m-b-1`);
let el2aS3p = eo('span','oAVff'+iildAj,null,`title`,``);
let elEsgMp = eo('i','MGjff'+iildAj,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndI8sc = project.settings.openRecruitment;
this.setState('stTMCZV', cndI8sc);
if (cndI8sc) { 
let elaYRJ7 = eo('i','Pogff'+iildAj,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cnd7Ut3 = ! project.settings.openRecruitment;
this.setState('stdX42V', cnd7Ut3);
if (cnd7Ut3) { 
let elnGzMn = eo('i','Nopff'+iildAj,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = el2aS3p;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let el17EcL = eo('div','hdFff'+iildAj,null,`class`,`gray-text bold m-b-1`);
let elJzeTX = eo('span','hIqff'+iildAj,null,`title`,``);
let elRWdOZ = eo('i','11Yff'+iildAj,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elN3OT6 = eo('span','t5Eff'+iildAj,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elJzeTX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elXiIpw = eo('div','7WMff'+iildAj,null,`class`,`gray-text bold m-b-1`);
let elgwMts = eo('span','b3Zff'+iildAj,null,`title`,``);
let el8wpI7 = eo('i','Onyff'+iildAj,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let el_uNJH = eo('span','guoff'+iildAj);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elgwMts;
                        
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