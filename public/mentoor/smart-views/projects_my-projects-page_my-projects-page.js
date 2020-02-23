_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {cAme8TqdX:'gold-icon',cFF_66dUf:'flk-spinner',c2jQJIDlN:'markdown',c5GReM0BQ:'layout'},
                render: function (component) {
                    let cmpV7dv = this._lc('c5GReM0BQ', {parent:component,content:(layout) => {let el7xryR = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndRhaO = FLAGS.projects;
this.setState('stxZz86', cndRhaO);
if (cndRhaO) { 
let el4H1Fp = eo('a','eMif',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
el4H1Fp.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in el4H1Fp.cls) {
                el4H1Fp.classList.toggle(className, el4H1Fp.cls[className]);
            }  
            let elE4AyS = eo('i','m__f',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndzixz = component.user.hasCreatedProjectBefore === false;
this.setState('stdrcxn', cndzixz);
if (cndzixz) { 
let elFulr6 = eo('span','sB8f',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndFJcS = component.user.hasCreatedProjectBefore;
this.setState('stXDV56', cndFJcS);
if (cndFJcS) { 
let elf8_dw = eo('div','ikKf');
let cmpjMTn = this._lc('cAme8TqdX', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stXDV56'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndUpX_ = ! component.isLoading;
this.setState('stSlk46', cndUpX_);
if (cndUpX_) { 
let eliHMR5 = eo('span','u5Mf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cnd_n1J = component.isLoading;
this.setState('stHWSEF', cnd_n1J);
let cndXlxO = !(cnd_n1J);
this.setState('stEWeLA', cndXlxO);
if (cnd_n1J) { 
let cmpUKTr = this._lc('cFF_66dUf', {parent:component,parentTop:layout,state:'stHWSEF'});
}else { 
let cndmGy3 = Is.empty(component.projects);
this.setState('st_jUuy', cndmGy3);
let cnd8djt = !(cndmGy3);
this.setState('st5_K1Y', cnd8djt);
if (cndmGy3) { 
let elMrZyD = eo('h3','Jjff',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let el8mtAZ = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iioljc = 'VSCHzFj' + i;
let elO6yYx = eo('div','tm7olR2yl5J3' + i+iioljc,null,`class`,`row simple-card m-b-2 project`);
let el0ygQA = eo('div','TK1ff'+iioljc,null,`class`,`col-sm-2 text-center`);
let elZa_FG = ev('img','u1Eff'+iioljc,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elsPxl0 = eo('div','DWAff'+iioljc,null,`class`,`col-sm-6 metadata`);
let elXko8j = eo('h3','ttJff'+iioljc,null,`class`,`name`);
text(project.name);
ec('h3');
let elBYxOi = eo('p','wgmff'+iioljc,null,`class`,`short-description`);
let cmpCNHf = this._lc('c2jQJIDlN', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'st5_K1Y',insideLoop:true,index:"" +iioljc});
ec('p');
let cndirDt = ! Is.empty(project.tags);
this.setState('stAhQb_', cndirDt);
if (cndirDt) { 
let el6KJHP = eo('div','dC6ff'+iioljc);
let eltHMiE = eo('h6','Lwqff'+iioljc,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiLszg = '6yRwaI3' + i;
let el9U_sQ = eo('div','J22uyy7Gs6Jo' + i+iioljc+iiLszg,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iimSs0 = 'DDUSWSc' + i;
let elWupAU = eo('span','fIWKUNIfS4v7' + i+iioljc+iiLszg+iimSs0,null,`class`,`tag mr-2`);
let elwQyaj = ev('img','yj0ff'+iioljc+iiLszg+iimSs0,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elcEIeq = eo('span','pH4ff'+iioljc+iiLszg+iimSs0,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cnd_3EA = project.tags.length > 6;
this.setState('stTJhDw', cnd_3EA);
if (cnd_3EA) { 
let elio7Xa = eo('small','7Y6ff'+iioljc);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elsUkVt = eo('a','BA6ff'+iioljc,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let ely9lpS = eo('div','Xdlff'+iioljc,null,`class`,`col summary`);
let elv3EZU = eo('div','V99ff'+iioljc,null,`class`,`gray-text bold m-b-1`);
let elE37bE = eo('span','frpff'+iioljc,null,`title`,``);
let elEEoKr = eo('i','wbfff'+iioljc,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elBQUA2 = eo('span','ihVff'+iioljc);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elE37bE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let el5uxaS = eo('div','4oeff'+iioljc,null,`class`,`gray-text bold m-b-1`);
let elgj6b7 = eo('span','HtZff'+iioljc,null,`title`,``);
let elwzTgA = eo('i','dk5ff'+iioljc,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elzrIJb = eo('span','MiYff'+iioljc);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elgj6b7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let el4zDrt = eo('div','Lzvff'+iioljc,null,`class`,`gray-text bold m-b-1`);
let el6CyME = eo('span','7DDff'+iioljc,null,`title`,``);
let elr3f_5 = eo('i','5UQff'+iioljc,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndTYfC = project.settings.openRecruitment;
this.setState('stnEaur', cndTYfC);
if (cndTYfC) { 
let ellSOrV = eo('i','1Dqff'+iioljc,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndNQyS = ! project.settings.openRecruitment;
this.setState('stWgQ9q', cndNQyS);
if (cndNQyS) { 
let elRbB3E = eo('i','UFaff'+iioljc,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = el6CyME;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elPUxne = eo('div','LmKff'+iioljc,null,`class`,`gray-text bold m-b-1`);
let elGvcI3 = eo('span','Hztff'+iioljc,null,`title`,``);
let eljjx29 = eo('i','0TRff'+iioljc,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let eliikQJ = eo('span','srqff'+iioljc,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elGvcI3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elLFIQh = eo('div','8y4ff'+iioljc,null,`class`,`gray-text bold m-b-1`);
let elrYnFH = eo('span','MINff'+iioljc,null,`title`,``);
let eluTLM5 = eo('i','yBEff'+iioljc,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let el7CvIs = eo('span','uqYff'+iioljc);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elrYnFH;
                        
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