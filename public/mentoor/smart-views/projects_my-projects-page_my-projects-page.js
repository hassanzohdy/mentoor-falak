_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {c21hBI8pn:'gold-icon',ccavUvTAP:'flk-spinner',ckQRQ30vI:'markdown',c2l25HwGc:'layout'},
                render: function (component) {
                    let cmpHZ2t = this._lc('c2l25HwGc', {parent:component,content:(layout) => {let elnrgCI = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cnd1RmQ = FLAGS.projects;
this.setState('stlq7NG', cnd1RmQ);
if (cnd1RmQ) { 
let elQTG56 = eo('a','peGf',null,`class`,`btn float-right d-sm-inline-block bold ${cls({'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false})}`,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`);
let elA2sjw = eo('i','Kpgf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let cndi8Fz = component.user.hasCreatedProjectBefore === false;
this.setState('stDuxdb', cndi8Fz);
if (cndi8Fz) { 
let elW0ChR = eo('span','ntlf',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndyoA3 = component.user.hasCreatedProjectBefore;
this.setState('stLb4hD', cndyoA3);
if (cndyoA3) { 
let elPIf5Y = eo('div','MKuf');
let cmpKYnx = this._lc('c21hBI8pn', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stLb4hD'});
ec('div');
}ec('a');
}text(`My Projects`);
let cndCdzh = ! component.isLoading;
this.setState('stTC782', cndCdzh);
if (cndCdzh) { 
let eloFMyN = eo('span','hMxf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cndQEOf = component.isLoading;
this.setState('stVbwq5', cndQEOf);
let cndGwN_ = !(cndQEOf);
this.setState('stQJV61', cndGwN_);
if (cndQEOf) { 
let cmpIvla = this._lc('ccavUvTAP', {parent:component,parentTop:layout,state:'stVbwq5'});
}else { 
let cndZqXQ = Is.empty(component.projects);
this.setState('stLXflk', cndZqXQ);
let cndBR4y = !(cndZqXQ);
this.setState('st41y9n', cndBR4y);
if (cndZqXQ) { 
let elL7STu = eo('h3','fVhf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elUC3fT = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iipLX5 = 'q4Q0ege' + i;
let elzkX3l = eo('div','WlM9uk3bt3zM' + i+iipLX5,null,`class`,`row simple-card m-b-2 project`);
let el3HhVG = eo('div','3R5ff'+iipLX5,null,`class`,`col-sm-2 text-center`);
let elu79el = ev('img','Jx1ff'+iipLX5,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elA_Tho = eo('div','wZyff'+iipLX5,null,`class`,`col-sm-6 metadata`);
let elePsYk = eo('h3','9oEff'+iipLX5,null,`class`,`name`);
text(project.name);
ec('h3');
let elsjF1q = eo('p','we2ff'+iipLX5,null,`class`,`short-description`);
let cmpy8NU = this._lc('ckQRQ30vI', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'st41y9n',insideLoop:true,index:"" +iipLX5});
ec('p');
let cnd70P8 = ! Is.empty(project.tags);
this.setState('stTVWTN', cnd70P8);
if (cnd70P8) { 
let elD1sDp = eo('div','dTPff'+iipLX5);
let elrH06z = eo('h6','XE1ff'+iipLX5,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiBstc = 'SdH6Co2' + i;
let elyDH4j = eo('div','qu6AkcWRcaXi' + i+iipLX5+iiBstc,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let iiviO1 = 'x3QjHXB' + i;
let els3GNk = eo('span','_UQc7UwqRwXU' + i+iipLX5+iiBstc+iiviO1,null,`class`,`tag mr-2`);
let elXCo4Y = ev('img','Swrff'+iipLX5+iiBstc+iiviO1,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elVqnWt = eo('span','5Jpff'+iipLX5+iiBstc+iiviO1,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndzq5n = project.tags.length > 6;
this.setState('stWKwT4', cndzq5n);
if (cndzq5n) { 
let elDz9XC = eo('small','2yHff'+iipLX5);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elyklw8 = eo('a','i0qff'+iipLX5,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elCmz57 = eo('div','wJnff'+iipLX5,null,`class`,`col summary`);
let elEnvOw = eo('div','T_yff'+iipLX5,null,`class`,`gray-text bold m-b-1`);
let elGqIkO = eo('span','sPHff'+iipLX5,null,`title`,``);
let elTPHjU = eo('i','KtUff'+iipLX5,null,`class`,`${fas('users')} mr-2 icon`);
ec('i');
let elvlsxL = eo('span','gqEff'+iipLX5);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elGqIkO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elFTUtO = eo('div','dhcff'+iipLX5,null,`class`,`gray-text bold m-b-1`);
let elcrv4y = eo('span','hxWff'+iipLX5,null,`title`,``);
let elDjy58 = eo('i','ktsff'+iipLX5,null,`class`,`${fas('people-carry')} mr-2 icon`);
ec('i');
let elMSB6T = eo('span','BIoff'+iipLX5);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elcrv4y;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elP5hT1 = eo('div','Hvdff'+iipLX5,null,`class`,`gray-text bold m-b-1`);
let elpJxNg = eo('span','YIPff'+iipLX5,null,`title`,``);
let eltyEjV = eo('i','f0gff'+iipLX5,null,`class`,`${fas('briefcase')} mr-2 icon`);
ec('i');
let cndGDDM = project.settings.openRecruitment;
this.setState('st5_8Bw', cndGDDM);
if (cndGDDM) { 
let el8JvZm = eo('i','efZff'+iipLX5,null,`class`,`${fas('check')} green-text mr-2 icon`);
ec('i');
}let cndOpWs = ! project.settings.openRecruitment;
this.setState('stKcdsz', cndOpWs);
if (cndOpWs) { 
let el0roUd = eo('i','_Jvff'+iipLX5,null,`class`,`${fas('times')} red-text mr-2 icon`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elpJxNg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let eltO3Ll = eo('div','GY8ff'+iipLX5,null,`class`,`gray-text bold m-b-1`);
let elrKnkQ = eo('span','_LPff'+iipLX5,null,`title`,``);
let eljm2a2 = eo('i','O7Hff'+iipLX5,null,`class`,`${fas('chart-line')} mr-2 icon`);
ec('i');
let el3oUx_ = eo('span','NmRff'+iipLX5,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elrKnkQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elSFQPa = eo('div','meQff'+iipLX5,null,`class`,`gray-text bold m-b-1`);
let el4llm_ = eo('span','TX_ff'+iipLX5,null,`title`,``);
let elPUs9v = eo('i','W3off'+iipLX5,null,`class`,`${fas('coins')} mr-2 icon`);
ec('i');
let el5bfkt = eo('span','Rc3ff'+iipLX5);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = el4llm_;
                        
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