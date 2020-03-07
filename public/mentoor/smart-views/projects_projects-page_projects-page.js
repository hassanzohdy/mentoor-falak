_Component({
                selector: 'projects-page',
                c: 'ProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','projects'],
                children: {c9WkmFTo5:'gold-icon',csVdNaf9y:'flk-spinner',c6sViZOgy:'markdown',cjeUOffc7:'layout'},
                render: function (component) {
                    let cmpHkcp = this._lc('cjeUOffc7', {parent:component,content:(layout) => {let el8kTBW = eo('h1',null,null,`class`,`text-sm-left text-center m-b-5`);
let elmBbIZ = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Project Management System [PMS]`);
ec('span');
let eldxCS6 = eo('a',null,null,`title`,``,`href`,`/projects/help`);
let el2Jstc = eo('i',null,null,`class`,`${fas('question-circle')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = eldxCS6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Help')}`});
        ;
                    }, 20);                
                let cnd4gHb = FLAGS.projects;
this.setState('stwZyjL', cnd4gHb);
if (cnd4gHb) { 
let elvLFqd = eo('a','n4xf',null,`class`,`btn float-right d-sm-inline-block bold ${cls({'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false})}`,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`);
let ellyRkm = eo('i','OGVf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let cndXDgx = component.user.hasCreatedProjectBefore === false;
this.setState('stOQp7s', cndXDgx);
if (cndXDgx) { 
let eladAsV = eo('span','u0Vf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndZxQh = component.user.hasCreatedProjectBefore;
this.setState('stHF4en', cndZxQh);
if (cndZxQh) { 
let el95GkZ = eo('div','m_9f');
let cmpsM4k = this._lc('c9WkmFTo5', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stHF4en'});
ec('div');
}ec('a');
}ec('h1');
let cndaeWx = component.isLoading;
this.setState('stK2uEM', cndaeWx);
let cndgsI9 = !(cndaeWx);
this.setState('stj1SJk', cndgsI9);
if (cndaeWx) { 
let cmpgqYN = this._lc('csVdNaf9y', {parent:component,parentTop:layout,state:'stK2uEM'});
}else { 
let cndMeKo = Is.empty(component.projects);
this.setState('stcIAEa', cndMeKo);
let cnd6Gim = !(cndMeKo);
this.setState('struPGt', cnd6Gim);
if (cndMeKo) { 
let elo7yWO = eo('h3','YgVf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elwE90Q = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iichXU = 'qoasvGP' + i;
let el7gTXR = eo('div','xVVcdpkhxCJ1' + i+iichXU,null,`class`,`row simple-card m-b-2 project`);
let eldbjEH = eo('div','tVTff'+iichXU,null,`class`,`col-sm-2 text-center`);
let eljViuD = ev('img','BeVff'+iichXU,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let eln2V5N = eo('div','a_Vff'+iichXU,null,`class`,`col-sm-6 metadata`);
let elMQXaZ = eo('h3','cawff'+iichXU,null,`class`,`name`);
text(project.name);
ec('h3');
let el82L1D = eo('p','SLMff'+iichXU,null,`class`,`short-description`);
let cmpl_NR = this._lc('c6sViZOgy', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'struPGt',insideLoop:true,index:"" +iichXU});
ec('p');
let cndQ51B = ! Is.empty(project.tags);
this.setState('st65PH_', cndQ51B);
if (cndQ51B) { 
let el2nuqy = eo('div','Bg8ff'+iichXU);
let eluj66T = eo('h6','l_sff'+iichXU,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiy_pa = 'NsDMQx2' + i;
let elFMyBH = eo('div','bYr9VgHZ00rW' + i+iichXU+iiy_pa,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iidEwg = '8XcjKIl' + i;
let elHJ_5g = eo('span','n5eRg1MdJ1KV' + i+iichXU+iiy_pa+iidEwg,null,`class`,`tag mr-2`);
let eltmU_p = ev('img','sejff'+iichXU+iiy_pa+iidEwg,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elpLQC3 = eo('span','5Luff'+iichXU+iiy_pa+iidEwg,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndUP_e = project.tags.length > 6;
this.setState('stUUJ89', cndUP_e);
if (cndUP_e) { 
let elAaXnx = eo('small','iArff'+iichXU);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let eln_PKC = eo('a','9Mcff'+iichXU,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let ellEy8c = eo('div','ds_ff'+iichXU,null,`class`,`col summary`);
let elqYXiW = eo('div','Mccff'+iichXU,null,`class`,`gray-text bold m-b-1`);
let elOdYR6 = eo('span','ENBff'+iichXU,null,`title`,``);
let elD5mek = eo('i','wlNff'+iichXU,null,`class`,`${fas('users')} mr-2 icon`);
ec('i');
let elRKq2E = eo('span','EkPff'+iichXU);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elOdYR6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elL2Xg4 = eo('div','0FFff'+iichXU,null,`class`,`gray-text bold m-b-1`);
let elasFiK = eo('span','SUnff'+iichXU,null,`title`,``);
let elou2Ea = eo('i','Dkaff'+iichXU,null,`class`,`${fas('people-carry')} mr-2 icon`);
ec('i');
let elfVWB3 = eo('span','UgUff'+iichXU);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elasFiK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let el1SR1a = eo('div','sF8ff'+iichXU,null,`class`,`gray-text bold m-b-1`);
let elJarC3 = eo('span','KgYff'+iichXU,null,`title`,``);
let elSuTK4 = eo('i','Hskff'+iichXU,null,`class`,`${fas('briefcase')} mr-2 icon`);
ec('i');
let cndyGh8 = project.settings.openRecruitment;
this.setState('stCrRai', cndyGh8);
if (cndyGh8) { 
let elBw3Tm = eo('i','6Rjff'+iichXU,null,`class`,`${fas('check')} green-text mr-2 icon`);
ec('i');
}let cndXLNy = ! project.settings.openRecruitment;
this.setState('stJrEgp', cndXLNy);
if (cndXLNy) { 
let elWsMVl = eo('i','0xVff'+iichXU,null,`class`,`${fas('times')} red-text mr-2 icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elJarC3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elhI3G4 = eo('div','Kq4ff'+iichXU,null,`class`,`gray-text bold m-b-1`);
let elYZXvP = eo('span','dZJff'+iichXU,null,`title`,``);
let elJBw16 = eo('i','AWpff'+iichXU,null,`class`,`${fas('chart-line')} mr-2 icon`);
ec('i');
let elJU4eV = eo('span','13qff'+iichXU,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elYZXvP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elcbucL = eo('div','H8jff'+iichXU,null,`class`,`gray-text bold m-b-1`);
let ele3qCy = eo('span','BYAff'+iichXU,null,`title`,``);
let eljrw7T = eo('i','6Uwff'+iichXU,null,`class`,`${fas('coins')} mr-2 icon`);
ec('i');
let elN4idB = eo('span','sqWff'+iichXU);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = ele3qCy;
                        
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