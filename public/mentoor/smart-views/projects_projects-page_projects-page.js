_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {cRkLs8uWC:'gold-icon',c_a1HWu_A:'flk-spinner',cFGWMX23l:'markdown',cDyNngVkv:'layout'},
                render: function (component) {
                    let cmpkBds = this._lc('cDyNngVkv', {parent:component,content:(layout) => {let eloDC8w = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elng2WS = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let elmLEmw = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let elwVYxb = eo('i',null,null,`class`,`${fas('question-circle') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elmLEmw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cndbtff = FLAGS.projects;
this.setState('stCKWRv', cndbtff);
if (cndbtff) { 
let elMlUBU = eo('a','YuBf',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
elMlUBU.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in elMlUBU.cls) {
                elMlUBU.classList.toggle(className, elMlUBU.cls[className]);
            }  
            let el7PD6U = eo('i','OLDf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndrfTl = component.user.hasCreatedProjectBefore === false;
this.setState('stxy1pA', cndrfTl);
if (cndrfTl) { 
let elTqF97 = eo('span','_ZRf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndg4VT = component.user.hasCreatedProjectBefore;
this.setState('sttVEpw', cndg4VT);
if (cndg4VT) { 
let ely4BSs = eo('div','NeIf');
let cmpOStO = this._lc('cRkLs8uWC', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'sttVEpw'});
ec('div');
}ec('a');
}ec('h1');
let cndU4NR = component.isLoading;
this.setState('stSmOF4', cndU4NR);
let cndDdfC = !(cndU4NR);
this.setState('sttjwp8', cndDdfC);
if (cndU4NR) { 
let cmpLxVc = this._lc('c_a1HWu_A', {parent:component,parentTop:layout,state:'stSmOF4'});
}else { 
let cndPSRP = Is.empty(component.projects);
this.setState('stfDLZV', cndPSRP);
let cndz8DY = !(cndPSRP);
this.setState('st2LoUI', cndz8DY);
if (cndPSRP) { 
let el9cLio = eo('h3','vwdf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elsbT5x = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iikMcu = 'KwQucOR' + i;
let el8O2QC = eo('div','rnk_td6i92eb' + i+iikMcu,null,`class`,`row simple-card m-b-2 project`);
let el497MN = eo('div','gOnff'+iikMcu,null,`class`,`col-sm-2 text-center`);
let elrTpcJ = ev('img','dmeff'+iikMcu,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elHygO9 = eo('div','cUlff'+iikMcu,null,`class`,`col-sm-6 metadata`);
let elYNHfk = eo('h3','7vRff'+iikMcu,null,`class`,`name`);
text(project.name);
ec('h3');
let elTkpJq = eo('p','jYDff'+iikMcu,null,`class`,`short-description`);
let cmpgAIE = this._lc('cFGWMX23l', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'st2LoUI',insideLoop:true,index:"" +iikMcu});
ec('p');
let cndAgkw = ! Is.empty(project.tags);
this.setState('stHcwJm', cndAgkw);
if (cndAgkw) { 
let elHCZaW = eo('div','Mj4ff'+iikMcu);
let elqIFyo = eo('h6','rdOff'+iikMcu,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiN4jL = 'eskl75v' + i;
let el5YAso = eo('div','yxzcusvCWEBt' + i+iikMcu+iiN4jL,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiyB1T = 'xrfkKzo' + i;
let eliTT3q = eo('span','Jhmcw1z4PAp2' + i+iikMcu+iiN4jL+iiyB1T,null,`class`,`tag mr-2`);
let el92N4D = ev('img','sSoff'+iikMcu+iiN4jL+iiyB1T,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el0Chii = eo('span','E6off'+iikMcu+iiN4jL+iiyB1T,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndHmf7 = project.tags.length > 6;
this.setState('stwKTIg', cndHmf7);
if (cndHmf7) { 
let eltkr9n = eo('small','T_xff'+iikMcu);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let eltIl2c = eo('a','nFTff'+iikMcu,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elEoYPd = eo('div','rwlff'+iikMcu,null,`class`,`col summary`);
let elyZr9W = eo('div','j_Jff'+iikMcu,null,`class`,`gray-text bold m-b-1`);
let elfRksb = eo('span','a0nff'+iikMcu,null,`title`,``);
let elQq1Uu = eo('i','wW_ff'+iikMcu,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let eleMQja = eo('span','W7cff'+iikMcu);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elfRksb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let eleh_6l = eo('div','QUiff'+iikMcu,null,`class`,`gray-text bold m-b-1`);
let el4Q8ag = eo('span','DvFff'+iikMcu,null,`title`,``);
let elVsVqE = eo('i','6SCff'+iikMcu,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elHAxvQ = eo('span','qNGff'+iikMcu);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el4Q8ag;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elUjz6E = eo('div','37Nff'+iikMcu,null,`class`,`gray-text bold m-b-1`);
let elZkjON = eo('span','vIFff'+iikMcu,null,`title`,``);
let elFxOcL = eo('i','U8jff'+iikMcu,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndUx5D = project.settings.openRecruitment;
this.setState('st7WayR', cndUx5D);
if (cndUx5D) { 
let elDth4S = eo('i','eOXff'+iikMcu,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cnd7pA8 = ! project.settings.openRecruitment;
this.setState('stLAWho', cnd7pA8);
if (cnd7pA8) { 
let elD9NI0 = eo('i','Bwuff'+iikMcu,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elZkjON;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elEpCOq = eo('div','GBcff'+iikMcu,null,`class`,`gray-text bold m-b-1`);
let el6UnGo = eo('span','s6Cff'+iikMcu,null,`title`,``);
let elV4rnU = eo('i','qg2ff'+iikMcu,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let elLAovB = eo('span','hvlff'+iikMcu,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el6UnGo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let eliHFpp = eo('div','AGiff'+iikMcu,null,`class`,`gray-text bold m-b-1`);
let elCi_v0 = eo('span','oEGff'+iikMcu,null,`title`,``);
let el2rfIa = eo('i','4Tuff'+iikMcu,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let eltPtdo = eo('span','MP7ff'+iikMcu);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elCi_v0;
                        
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