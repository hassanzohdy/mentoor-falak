_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {cv5DvWsl2:'gold-icon',c66MGyOJC:'flk-spinner',cu3YTFO58:'markdown',cvqVscut9:'layout'},
                render: function (component) {
                    let cmp60NE = this._lc('cvqVscut9', {parent:component,content:(layout) => {let elZVJ2V = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elwvxES = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elIVhVa = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let elPtyd3 = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elIVhVa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cnd7mBr = FLAGS.projects;
this.setState('stzooNn', cnd7mBr);
if (cnd7mBr) { 
let el25447 = eo('a','oMcf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
el25447.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in el25447.cls) {
                el25447.classList.toggle(className, el25447.cls[className]);
            }  
            let el4HYdh = eo('i','vsff',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndjtfy = component.user.hasCreatedProjectBefore === false;
this.setState('stfwAum', cndjtfy);
if (cndjtfy) { 
let elRH7zj = eo('span','Unif',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cnd_ZLA = component.user.hasCreatedProjectBefore;
this.setState('st4GwXE', cnd_ZLA);
if (cnd_ZLA) { 
let elAU1Jz = eo('div','uLaf');
let cmpPdT0 = this._lc('cv5DvWsl2', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'st4GwXE'});
ec('div');
}ec('a');
}ec('h1');
let cndDalT = component.isLoading;
this.setState('stiJNRl', cndDalT);
let cnd7rss = !(cndDalT);
this.setState('stAxUIj', cnd7rss);
if (cndDalT) { 
let cmpSXAT = this._lc('c66MGyOJC', {parent:component,parentTop:layout,state:'stiJNRl'});
}else { 
let cndbH_o = Is.empty(component.projects);
this.setState('stAm0DZ', cndbH_o);
let cndBIib = !(cndbH_o);
this.setState('st1Reb5', cndBIib);
if (cndbH_o) { 
let elx29Iq = eo('h3','36vf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let el9vzmO = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiTbCH = 'rC0rGkB' + i;
let elzLR5b = eo('div','jm1lgScSz8kR' + i+iiTbCH,null,`class`,`row simple-card m-b-2 project`);
let el1O0zW = eo('div','SV3ff'+iiTbCH,null,`class`,`col-sm-2 text-center`);
let elcbspb = ev('img','LtIff'+iiTbCH,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elaD5zU = eo('div','AKIff'+iiTbCH,null,`class`,`col-sm-6 metadata`);
let elzqfMt = eo('h3','Mybff'+iiTbCH,null,`class`,`name`);
text(project.name);
ec('h3');
let elfgJTd = eo('p','CFyff'+iiTbCH,null,`class`,`short-description`);
let cmpq0XA = this._lc('cu3YTFO58', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'st1Reb5',insideLoop:true,index:"" +iiTbCH});
ec('p');
let cndlC1J = ! Is.empty(project.tags);
this.setState('stjDHRc', cndlC1J);
if (cndlC1J) { 
let elzQOY7 = eo('div','6qUff'+iiTbCH);
let el1YKgS = eo('h6','uQ2ff'+iiTbCH,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iioK5m = 'UdHyQF6' + i;
let elrDy9d = eo('div','hLARUgbABmxn' + i+iiTbCH+iioK5m,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiEpZD = 'WURr9Vz' + i;
let eljYrKe = eo('span','rvJAERWpAjE1' + i+iiTbCH+iioK5m+iiEpZD,null,`class`,`tag mr-2`);
let elCtApt = ev('img','9hNff'+iiTbCH+iioK5m+iiEpZD,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elRwO0k = eo('span','AwHff'+iiTbCH+iioK5m+iiEpZD,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndy1V7 = project.tags.length > 6;
this.setState('stGwABv', cndy1V7);
if (cndy1V7) { 
let el4E6Nl = eo('small','UhLff'+iiTbCH);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let eldtBgp = eo('a','rdSff'+iiTbCH,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let eluSwmR = eo('div','o6Fff'+iiTbCH,null,`class`,`col summary`);
let el7fAmu = eo('div','5ZCff'+iiTbCH,null,`class`,`gray-text bold m-b-1`);
let el_oHuj = eo('span','j5Off'+iiTbCH,null,`title`,``);
let elnrApD = eo('i','6CDff'+iiTbCH,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elJFJgQ = eo('span','_Sdff'+iiTbCH);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el_oHuj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elj_pQC = eo('div','yLMff'+iiTbCH,null,`class`,`gray-text bold m-b-1`);
let elht5jI = eo('span','hm4ff'+iiTbCH,null,`title`,``);
let eldrhud = eo('i','Y0Gff'+iiTbCH,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elgmKiK = eo('span','lArff'+iiTbCH);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elht5jI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elU4IHE = eo('div','5aGff'+iiTbCH,null,`class`,`gray-text bold m-b-1`);
let elA0yHQ = eo('span','KPRff'+iiTbCH,null,`title`,``);
let elAfZTv = eo('i','_Shff'+iiTbCH,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndsWKp = project.settings.openRecruitment;
this.setState('st0EhQD', cndsWKp);
if (cndsWKp) { 
let elBu3Po = eo('i','6dCff'+iiTbCH,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndnLUB = ! project.settings.openRecruitment;
this.setState('stU3QIy', cndnLUB);
if (cndnLUB) { 
let elMGWVW = eo('i','ZS_ff'+iiTbCH,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elA0yHQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elOSXXI = eo('div','9Wcff'+iiTbCH,null,`class`,`gray-text bold m-b-1`);
let elTklW7 = eo('span','2SKff'+iiTbCH,null,`title`,``);
let elVYOih = eo('i','qL8ff'+iiTbCH,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elDn7aY = eo('span','ck0ff'+iiTbCH,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elTklW7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elRgKkr = eo('div','ex0ff'+iiTbCH,null,`class`,`gray-text bold m-b-1`);
let elb_y9R = eo('span','DOOff'+iiTbCH,null,`title`,``);
let el6eXEj = eo('i','DCuff'+iiTbCH,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let elSfKH6 = eo('span','7snff'+iiTbCH);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elb_y9R;
                        
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