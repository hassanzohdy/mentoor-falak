_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {ci25hOj4o:'gold-icon',c3b4Jyopb:'flk-spinner',cpleWVega:'markdown',clyFTa6V0:'layout'},
                render: function (component) {
                    let cmpqdDv = this._lc('clyFTa6V0', {parent:component,content:(layout) => {let elc8sPG = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elpl5in = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elz2XEP = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let elLqElz = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elz2XEP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cndQLIK = FLAGS.projects;
this.setState('strVQya', cndQLIK);
if (cndQLIK) { 
let elwqYvC = eo('a','pzsf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
elwqYvC.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in elwqYvC.cls) {
                elwqYvC.classList.toggle(className, elwqYvC.cls[className]);
            }  
            let el_fChR = eo('i','yTmf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndyjlT = component.user.hasCreatedProjectBefore === false;
this.setState('stR8mZ6', cndyjlT);
if (cndyjlT) { 
let elhSgIF = eo('span','B5bf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndEW1h = component.user.hasCreatedProjectBefore;
this.setState('stvjSZG', cndEW1h);
if (cndEW1h) { 
let elYTxko = eo('div','Mg9f');
let cmpMmx7 = this._lc('ci25hOj4o', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stvjSZG'});
ec('div');
}ec('a');
}ec('h1');
let cndvkIN = component.isLoading;
this.setState('st7Q1JM', cndvkIN);
let cndgbUm = !(cndvkIN);
this.setState('st7Szzh', cndgbUm);
if (cndvkIN) { 
let cmpx5J8 = this._lc('c3b4Jyopb', {parent:component,parentTop:layout,state:'st7Q1JM'});
}else { 
let cndaO6c = Is.empty(component.projects);
this.setState('stiNOm9', cndaO6c);
let cndW4Kk = !(cndaO6c);
this.setState('stZ_zP7', cndW4Kk);
if (cndaO6c) { 
let elWrRag = eo('h3','gcjf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elpOq20 = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiqGUd = 'kZvvy1f' + i;
let elZRoRX = eo('div','Phyarl4ScGTf' + i+iiqGUd,null,`class`,`row simple-card m-b-2 project`);
let elnIX6E = eo('div','hUYff'+iiqGUd,null,`class`,`col-sm-2 text-center`);
let el2h3qv = ev('img','YQKff'+iiqGUd,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elDrtYZ = eo('div','pDRff'+iiqGUd,null,`class`,`col-sm-6 metadata`);
let elSMwKN = eo('h3','Iimff'+iiqGUd,null,`class`,`name`);
text(project.name);
ec('h3');
let elMiKjG = eo('p','Uowff'+iiqGUd,null,`class`,`short-description`);
let cmp_ZHI = this._lc('cpleWVega', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'stZ_zP7',insideLoop:true,index:"" +iiqGUd});
ec('p');
let cnd9gfj = ! Is.empty(project.tags);
this.setState('st59XON', cnd9gfj);
if (cnd9gfj) { 
let elLa4Kp = eo('div','_gGff'+iiqGUd);
let el3_m7U = eo('h6','d43ff'+iiqGUd,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiAnru = 'B1sy98m' + i;
let elb11ht = eo('div','H45rb0KQGxos' + i+iiqGUd+iiAnru,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiedi1 = '1zpjeZ5' + i;
let elinlMC = eo('span','DD5mPRXrVmx8' + i+iiqGUd+iiAnru+iiedi1,null,`class`,`tag mr-2`);
let elstBGT = ev('img','WTzff'+iiqGUd+iiAnru+iiedi1,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elWSBj3 = eo('span','A1Bff'+iiqGUd+iiAnru+iiedi1,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndoWsC = project.tags.length > 6;
this.setState('stwj9_n', cndoWsC);
if (cndoWsC) { 
let elIovMm = eo('small','M7Rff'+iiqGUd);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let el5Nhxr = eo('a','pF3ff'+iiqGUd,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elZdQAD = eo('div','Celff'+iiqGUd,null,`class`,`col summary`);
let elNy8E0 = eo('div','PLjff'+iiqGUd,null,`class`,`gray-text bold m-b-1`);
let elC3OOz = eo('span','ezdff'+iiqGUd,null,`title`,``);
let elG7UPC = eo('i','wFNff'+iiqGUd,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elwFvAo = eo('span','ffXff'+iiqGUd);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elC3OOz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let el2Lfw6 = eo('div','QcQff'+iiqGUd,null,`class`,`gray-text bold m-b-1`);
let el2LW5Y = eo('span','aaTff'+iiqGUd,null,`title`,``);
let el3qMma = eo('i','LN6ff'+iiqGUd,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elInjcV = eo('span','m3Lff'+iiqGUd);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el2LW5Y;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elmMxtG = eo('div','FiLff'+iiqGUd,null,`class`,`gray-text bold m-b-1`);
let ela9qA1 = eo('span','kvaff'+iiqGUd,null,`title`,``);
let elI9uZl = eo('i','05Aff'+iiqGUd,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cnd8rWw = project.settings.openRecruitment;
this.setState('stdvzVk', cnd8rWw);
if (cnd8rWw) { 
let elnmHwU = eo('i','igcff'+iiqGUd,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndo6bB = ! project.settings.openRecruitment;
this.setState('stSZ25E', cndo6bB);
if (cndo6bB) { 
let elAdoUs = eo('i','zPFff'+iiqGUd,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = ela9qA1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let eljlSjV = eo('div','bGfff'+iiqGUd,null,`class`,`gray-text bold m-b-1`);
let elcWgGS = eo('span','Bytff'+iiqGUd,null,`title`,``);
let elj6VaO = eo('i','83Gff'+iiqGUd,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elkZaZA = eo('span','unXff'+iiqGUd,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elcWgGS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elUJnoE = eo('div','OQHff'+iiqGUd,null,`class`,`gray-text bold m-b-1`);
let elm7iCW = eo('span','bHHff'+iiqGUd,null,`title`,``);
let elxqJCD = eo('i','Ywsff'+iiqGUd,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let elpImDR = eo('span','pYCff'+iiqGUd);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elm7iCW;
                        
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