_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {c615HzvpK:'gold-icon',ciJazo87S:'flk-spinner',cOLHoOOMM:'markdown',cPZwnC49Z:'layout'},
                render: function (component) {
                    let cmpvIiG = this._lc('cPZwnC49Z', {parent:component,content:(layout) => {let elUnBA6 = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndSKPg = FLAGS.projects;
this.setState('stfJdGZ', cndSKPg);
if (cndSKPg) { 
let elAIaxr = eo('a','Nmef',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
elAIaxr.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in elAIaxr.cls) {
                elAIaxr.classList.toggle(className, elAIaxr.cls[className]);
            }  
            let elYqMrC = eo('i','8Rdf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndtQuv = component.user.hasCreatedProjectBefore === false;
this.setState('stP7PXU', cndtQuv);
if (cndtQuv) { 
let eldYQW_ = eo('span','yvaf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndYEsA = component.user.hasCreatedProjectBefore;
this.setState('stSIYss', cndYEsA);
if (cndYEsA) { 
let elFpg9v = eo('div','EAkf');
let cmpDIzG = this._lc('c615HzvpK', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stSIYss'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndCIjU = ! component.isLoading;
this.setState('styl9B2', cndCIjU);
if (cndCIjU) { 
let elEJ4TB = eo('span','ubRf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cndoTL3 = component.isLoading;
this.setState('stjzjN7', cndoTL3);
let cndcsCC = !(cndoTL3);
this.setState('stJVTZa', cndcsCC);
if (cndoTL3) { 
let cmpojHV = this._lc('ciJazo87S', {parent:component,parentTop:layout,state:'stjzjN7'});
}else { 
let cndOPmD = Is.empty(component.projects);
this.setState('stU9mhA', cndOPmD);
let cndNCUN = !(cndOPmD);
this.setState('stnEraT', cndNCUN);
if (cndOPmD) { 
let elovaLs = eo('h3','g7Af',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elZPcaz = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiKG5X = '8NPMkhT' + i;
let elkExpR = eo('div','w4RwvzhaR1io' + i+iiKG5X,null,`class`,`row simple-card m-b-2 project`);
let elALrmQ = eo('div','sDyff'+iiKG5X,null,`class`,`col-sm-2 text-center`);
let elfuXbZ = ev('img','rvWff'+iiKG5X,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let el2c896 = eo('div','S7hff'+iiKG5X,null,`class`,`col-sm-6 metadata`);
let elvR6Rs = eo('h3','y33ff'+iiKG5X,null,`class`,`name`);
text(project.name);
ec('h3');
let elO1d0g = eo('p','crtff'+iiKG5X,null,`class`,`short-description`);
let cmpOObz = this._lc('cOLHoOOMM', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stnEraT',insideLoop:true,index:"" +iiKG5X});
ec('p');
let cndrca2 = ! Is.empty(project.tags);
this.setState('st6433f', cndrca2);
if (cndrca2) { 
let el61PmQ = eo('div','rLTff'+iiKG5X);
let elWdixE = eo('h6','OXTff'+iiKG5X,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iia3No = '4xHY0iY' + i;
let elYdvZ7 = eo('div','yFLHHRrC5E50' + i+iiKG5X+iia3No,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiNLHH = 'mFCLWCS' + i;
let elWyXWP = eo('span','3jFqIvjXWRuB' + i+iiKG5X+iia3No+iiNLHH,null,`class`,`tag mr-2`);
let eli9EVK = ev('img','zsOff'+iiKG5X+iia3No+iiNLHH,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el6_y4i = eo('span','Fy3ff'+iiKG5X+iia3No+iiNLHH,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndGiOA = project.tags.length > 6;
this.setState('stIefMx', cndGiOA);
if (cndGiOA) { 
let el5fhe2 = eo('small','0lYff'+iiKG5X);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let eluQ5Kj = eo('a','Mdfff'+iiKG5X,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let el7Qec2 = eo('div','kNsff'+iiKG5X,null,`class`,`col summary`);
let elaU9gJ = eo('div','Qr2ff'+iiKG5X,null,`class`,`gray-text bold m-b-1`);
let el14La5 = eo('span','O5Zff'+iiKG5X,null,`title`,``);
let elhIH7j = eo('i','tCzff'+iiKG5X,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let el5AKHZ = eo('span','Bhhff'+iiKG5X);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el14La5;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elypbc4 = eo('div','vLTff'+iiKG5X,null,`class`,`gray-text bold m-b-1`);
let elZWIpy = eo('span','c66ff'+iiKG5X,null,`title`,``);
let elydK4u = eo('i','W_Cff'+iiKG5X,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elUt7Db = eo('span','L5eff'+iiKG5X);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elZWIpy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elI5P98 = eo('div','FpEff'+iiKG5X,null,`class`,`gray-text bold m-b-1`);
let elgrVea = eo('span','5QCff'+iiKG5X,null,`title`,``);
let eltlrRt = eo('i','gC0ff'+iiKG5X,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cnd0Npw = project.settings.openRecruitment;
this.setState('strpu2A', cnd0Npw);
if (cnd0Npw) { 
let elNkyHv = eo('i','MXXff'+iiKG5X,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cnd6Ubv = ! project.settings.openRecruitment;
this.setState('st_Yor9', cnd6Ubv);
if (cnd6Ubv) { 
let elrv_wy = eo('i','xTvff'+iiKG5X,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elgrVea;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let eluEfMz = eo('div','Gerff'+iiKG5X,null,`class`,`gray-text bold m-b-1`);
let elpBtgR = eo('span','cWOff'+iiKG5X,null,`title`,``);
let elrC2lt = eo('i','SUcff'+iiKG5X,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elwpz3w = eo('span','ACUff'+iiKG5X,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elpBtgR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elV1zvg = eo('div','Tmtff'+iiKG5X,null,`class`,`gray-text bold m-b-1`);
let eletU4s = eo('span','QAFff'+iiKG5X,null,`title`,``);
let elJ7ECD = eo('i','i58ff'+iiKG5X,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let ellblJh = eo('span','boAff'+iiKG5X);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = eletU4s;
                        
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