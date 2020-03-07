_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {cvO3L4B3B:'gold-icon',cntoh3G0K:'flk-spinner',cCvVG8p42:'markdown',cIkWj3Ehh:'layout'},
                render: function (component) {
                    let cmpzFn1 = this._lc('cIkWj3Ehh', {parent:component,content:(layout) => {let el_mZSN = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndEQ6R = FLAGS.projects;
this.setState('stiJvnV', cndEQ6R);
if (cndEQ6R) { 
let el0cCDD = eo('a','5j4f',null,`class`,`btn float-right d-sm-inline-block bold ${cls({'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false})}`,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`);
let el0sPpn = eo('i','yBXf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let cndIWa1 = component.user.hasCreatedProjectBefore === false;
this.setState('stmu0rn', cndIWa1);
if (cndIWa1) { 
let elU57pW = eo('span','aORf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndQcQW = component.user.hasCreatedProjectBefore;
this.setState('st76KjU', cndQcQW);
if (cndQcQW) { 
let el5_jPS = eo('div','5I9f');
let cmpZpBq = this._lc('cvO3L4B3B', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'st76KjU'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndPLDC = ! component.isLoading;
this.setState('stAWoPp', cndPLDC);
if (cndPLDC) { 
let el2X3DP = eo('span','5spf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cndy_bw = component.isLoading;
this.setState('stn88i3', cndy_bw);
let cndE_rW = !(cndy_bw);
this.setState('st_zp2v', cndE_rW);
if (cndy_bw) { 
let cmpMClU = this._lc('cntoh3G0K', {parent:component,parentTop:layout,state:'stn88i3'});
}else { 
let cndpj_W = Is.empty(component.projects);
this.setState('steDt7a', cndpj_W);
let cndHUS0 = !(cndpj_W);
this.setState('ste7ech', cndHUS0);
if (cndpj_W) { 
let elbRdo7 = eo('h3','Eqif',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elBPkwg = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iiqssR = 'pnUsTue' + i;
let elBdCLG = eo('div','PDNED1FKBRzv' + i+iiqssR,null,`class`,`row simple-card m-b-2 project`);
let el3Av4v = eo('div','vnRff'+iiqssR,null,`class`,`col-sm-2 text-center`);
let el9Ql4M = ev('img','i97ff'+iiqssR,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elZk2AL = eo('div','XOxff'+iiqssR,null,`class`,`col-sm-6 metadata`);
let elVMc7g = eo('h3','qS0ff'+iiqssR,null,`class`,`name`);
text(project.name);
ec('h3');
let elMUyFa = eo('p','1czff'+iiqssR,null,`class`,`short-description`);
let cmpW8My = this._lc('cCvVG8p42', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'ste7ech',insideLoop:true,index:"" +iiqssR});
ec('p');
let cndhBp8 = ! Is.empty(project.tags);
this.setState('stt0eFS', cndhBp8);
if (cndhBp8) { 
let elsHxsj = eo('div','qArff'+iiqssR);
let elGGe17 = eo('h6','17Xff'+iiqssR,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iipNFM = 'lXCa0uX' + i;
let eljYVN4 = eo('div','LzujqnND4ONR' + i+iiqssR+iipNFM,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iigUkV = 'Jumvotz' + i;
let elSZHip = eo('span','brf82L_5i_4n' + i+iiqssR+iipNFM+iigUkV,null,`class`,`tag mr-2`);
let el4Cgp4 = ev('img','Accff'+iiqssR+iipNFM+iigUkV,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elqUX8i = eo('span','P0iff'+iiqssR+iipNFM+iigUkV,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndKx05 = project.tags.length > 6;
this.setState('stzvyJ8', cndKx05);
if (cndKx05) { 
let elGVG_k = eo('small','MPfff'+iiqssR);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elxEZdm = eo('a','mhcff'+iiqssR,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elHn7bh = eo('div','rQpff'+iiqssR,null,`class`,`col summary`);
let el1KVci = eo('div','yY5ff'+iiqssR,null,`class`,`gray-text bold m-b-1`);
let elz0mLH = eo('span','2Hbff'+iiqssR,null,`title`,``);
let elmBa1c = eo('i','SNCff'+iiqssR,null,`class`,`${fas('users')} mr-2 icon`);
ec('i');
let el6DLxE = eo('span','UIdff'+iiqssR);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elz0mLH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elw6rxG = eo('div','EDNff'+iiqssR,null,`class`,`gray-text bold m-b-1`);
let elCwKzV = eo('span','enzff'+iiqssR,null,`title`,``);
let ellC52X = eo('i','xbHff'+iiqssR,null,`class`,`${fas('people-carry')} mr-2 icon`);
ec('i');
let el86_vW = eo('span','R2Nff'+iiqssR);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elCwKzV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elXJzKz = eo('div','1lnff'+iiqssR,null,`class`,`gray-text bold m-b-1`);
let eleb9K1 = eo('span','BMhff'+iiqssR,null,`title`,``);
let elsBVW2 = eo('i','Pknff'+iiqssR,null,`class`,`${fas('briefcase')} mr-2 icon`);
ec('i');
let cnd7QsG = project.settings.openRecruitment;
this.setState('stoD1Va', cnd7QsG);
if (cnd7QsG) { 
let el9fqJT = eo('i','aFWff'+iiqssR,null,`class`,`${fas('check')} green-text mr-2 icon`);
ec('i');
}let cndXC5Y = ! project.settings.openRecruitment;
this.setState('stcaYkB', cndXC5Y);
if (cndXC5Y) { 
let el6ZX6U = eo('i','1GWff'+iiqssR,null,`class`,`${fas('times')} red-text mr-2 icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = eleb9K1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let elfWq4H = eo('div','ZKUff'+iiqssR,null,`class`,`gray-text bold m-b-1`);
let elQvCqF = eo('span','uxlff'+iiqssR,null,`title`,``);
let el9UJz_ = eo('i','ejpff'+iiqssR,null,`class`,`${fas('chart-line')} mr-2 icon`);
ec('i');
let elPgrqi = eo('span','ltXff'+iiqssR,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elQvCqF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let el1XBH3 = eo('div','yRbff'+iiqssR,null,`class`,`gray-text bold m-b-1`);
let elr8216 = eo('span','v6Lff'+iiqssR,null,`title`,``);
let elJxF1s = eo('i','2D3ff'+iiqssR,null,`class`,`${fas('coins')} mr-2 icon`);
ec('i');
let el1teO6 = eo('span','YXCff'+iiqssR);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elr8216;
                        
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