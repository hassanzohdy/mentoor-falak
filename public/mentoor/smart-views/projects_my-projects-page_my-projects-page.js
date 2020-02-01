_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {cBZcw5fFb:'gold-icon',ckmLHCF6N:'flk-spinner',crnvpeeSd:'markdown',cz772pwJG:'layout'},
                render: function (component) {
                    let cmpMD32 = this._lc('cz772pwJG', {parent:component,content:(layout) => {let el750ax = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndb86m = FLAGS.projects;
this.setState('stJC_Lo', cndb86m);
if (cndb86m) { 
let ellvGLv = eo('a','mwaf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
ellvGLv.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in ellvGLv.cls) {
                ellvGLv.classList.toggle(className, ellvGLv.cls[className]);
            }  
            let el3kjLd = eo('i','Mgof',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndByee = component.user.hasCreatedProjectBefore === false;
this.setState('stOBlMI', cndByee);
if (cndByee) { 
let elI71eV = eo('span','JfYf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndLdQI = component.user.hasCreatedProjectBefore;
this.setState('stMKlY5', cndLdQI);
if (cndLdQI) { 
let elWArnb = eo('div','aqDf');
let cmp8lLa = this._lc('cBZcw5fFb', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stMKlY5'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndMFI9 = ! component.isLoading;
this.setState('stjx2T2', cndMFI9);
if (cndMFI9) { 
let elAorQa = eo('span','7ppf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cndCW1D = component.isLoading;
this.setState('st7ChJ_', cndCW1D);
let cnd_QBY = !(cndCW1D);
this.setState('stQ1I_4', cnd_QBY);
if (cndCW1D) { 
let cmpcDhu = this._lc('ckmLHCF6N', {parent:component,parentTop:layout,state:'st7ChJ_'});
}else { 
let cndX3Mi = Is.empty(component.projects);
this.setState('stj_isB', cndX3Mi);
let cndBdtF = !(cndX3Mi);
this.setState('stEcroN', cndBdtF);
if (cndX3Mi) { 
let elSzyDD = eo('h3','UG3f',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elvbRkY = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiwVdP = 'MkbRbgs' + i;
let elGWHP2 = eo('div','3H1XGRpAFk1W' + i+iiwVdP,null,`class`,`row simple-card m-b-2 project`);
let elBelUa = eo('div','7wUff'+iiwVdP,null,`class`,`col-sm-2 text-center`);
let elO9q6f = ev('img','Jzcff'+iiwVdP,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elnREcr = eo('div','3kXff'+iiwVdP,null,`class`,`col-sm-6 metadata`);
let elEBhGR = eo('h3','IqUff'+iiwVdP,null,`class`,`name`);
text(project.name);
ec('h3');
let elZzWWb = eo('p','0J6ff'+iiwVdP,null,`class`,`short-description`);
let cmpmaq5 = this._lc('crnvpeeSd', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stEcroN',insideLoop:true,index:"" +iiwVdP});
ec('p');
let cndbaJo = ! Is.empty(project.tags);
this.setState('stDq91Z', cndbaJo);
if (cndbaJo) { 
let el1pquo = eo('div','36hff'+iiwVdP);
let elNht7s = eo('h6','rSlff'+iiwVdP,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiu02j = 'HlbfUpW' + i;
let el3vtw6 = eo('div','bI3r0BV9OlU7' + i+iiwVdP+iiu02j,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iirf64 = '_CmJGok' + i;
let elm_6Kn = eo('span','DMdA_qgrl3EM' + i+iiwVdP+iiu02j+iirf64,null,`class`,`tag mr-2`);
let elSPHx9 = ev('img','74Aff'+iiwVdP+iiu02j+iirf64,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elvkL3w = eo('span','eLAff'+iiwVdP+iiu02j+iirf64,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndk5QY = project.tags.length > 6;
this.setState('stEo01R', cndk5QY);
if (cndk5QY) { 
let elyWeMB = eo('small','Oh1ff'+iiwVdP);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elgsqbV = eo('a','rhHff'+iiwVdP,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elpI3bS = eo('div','0Ucff'+iiwVdP,null,`class`,`col summary`);
let elZ7Z2e = eo('div','M5dff'+iiwVdP,null,`class`,`gray-text bold m-b-1`);
let elatlgj = eo('span','o52ff'+iiwVdP,null,`title`,``);
let el9elLl = eo('i','AJfff'+iiwVdP,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elepVYK = eo('span','Z3zff'+iiwVdP);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elatlgj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let el1o9ji = eo('div','mpeff'+iiwVdP,null,`class`,`gray-text bold m-b-1`);
let elSQW4W = eo('span','Xo1ff'+iiwVdP,null,`title`,``);
let elx4aKc = eo('i','8bFff'+iiwVdP,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elKmbYE = eo('span','9b6ff'+iiwVdP);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elSQW4W;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elDt8Th = eo('div','m_Eff'+iiwVdP,null,`class`,`gray-text bold m-b-1`);
let elPST_z = eo('span','bKLff'+iiwVdP,null,`title`,``);
let elJsT5c = eo('i','aX_ff'+iiwVdP,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndYl_D = project.settings.openRecruitment;
this.setState('stv7Ewq', cndYl_D);
if (cndYl_D) { 
let elLXPb3 = eo('i','4SFff'+iiwVdP,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndHKKw = ! project.settings.openRecruitment;
this.setState('stV4OVk', cndHKKw);
if (cndHKKw) { 
let el2mw1s = eo('i','zMZff'+iiwVdP,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elPST_z;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elOVLJS = eo('div','oZlff'+iiwVdP,null,`class`,`gray-text bold m-b-1`);
let el3mWi_ = eo('span','k6Dff'+iiwVdP,null,`title`,``);
let elIBPxp = eo('i','wm3ff'+iiwVdP,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elSreap = eo('span','q0kff'+iiwVdP,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el3mWi_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elHjvHW = eo('div','UEAff'+iiwVdP,null,`class`,`gray-text bold m-b-1`);
let elUpbFB = eo('span','Hybff'+iiwVdP,null,`title`,``);
let elw7LJu = eo('i','7Unff'+iiwVdP,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let elSMPxL = eo('span','JEwff'+iiwVdP);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elUpbFB;
                        
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