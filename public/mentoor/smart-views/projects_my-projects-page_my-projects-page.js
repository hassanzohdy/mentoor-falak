_Component({
                selector: 'my-projects-page',
                c: 'MyProjectsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','projects','user'],
                children: {cfYQZoVJ4:'gold-icon',cfy1Yhuxe:'flk-spinner',cYJlGBIGG:'markdown',cQzhQ8Yf0:'layout'},
                render: function (component) {
                    let cmpXFzY = this._lc('cQzhQ8Yf0', {parent:component,content:(layout) => {let elLXQyG = eo('h1',null,null,`class`,`m-b-2 clearfix`);
let cndTGV8 = FLAGS.projects;
this.setState('stoovbJ', cndTGV8);
if (cndTGV8) { 
let el74fjT = eo('a','uB2f',null,`title`,`${trans(`Create new project`)}`,`href`,`/projects/new`,`class`,`btn float-right d-sm-inline-block bold`);
el74fjT.cls = {'btn-success': component.user.hasCreatedProjectBefore === true, 'btn-pink': component.user.hasCreatedProjectBefore === false};

            for (let className in el74fjT.cls) {
                el74fjT.classList.toggle(className, el74fjT.cls[className]);
            }  
            let elzmqNq = eo('i','hSXf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let cndD0Hj = component.user.hasCreatedProjectBefore === false;
this.setState('st4rQ6L', cndD0Hj);
if (cndD0Hj) { 
let elTA2K5 = eo('span','ROff',null,`class`,`mr-2`);
text(`FREE`);
ec('span');
}text(`Project`);
let cndVsew = component.user.hasCreatedProjectBefore;
this.setState('stWKPIW', cndVsew);
if (cndVsew) { 
let elV_Zha = eo('div','eg9f');
let cmpNRyr = this._lc('cfYQZoVJ4', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.basic},state:'stWKPIW'});
ec('div');
}ec('a');
}text(`My Projects`);
let cnduqkr = ! component.isLoading;
this.setState('stq_qHW', cnduqkr);
if (cnduqkr) { 
let elwKXhU = eo('span','eCWf',null,`class`,`ml-2`);
text('(' + component.projects.length + ')');
ec('span');
}ec('h1');
let cndcHWz = component.isLoading;
this.setState('stjBtMk', cndcHWz);
let cndtlLl = !(cndcHWz);
this.setState('st0Yzna', cndtlLl);
if (cndcHWz) { 
let cmpyU7N = this._lc('cfy1Yhuxe', {parent:component,parentTop:layout,state:'stjBtMk'});
}else { 
let cndfBa5 = Is.empty(component.projects);
this.setState('st0V4YR', cndfBa5);
let cndYqby = !(cndfBa5);
this.setState('sttBH7f', cndYqby);
if (cndfBa5) { 
let el48T2H = eo('h3','f1nf',null,`class`,`pink-text bold text-center`);
text(`No Projects Yet`);
ec('h3');
}else { 
let elY6mTJ = eo('div',null,null,`class`,`projects-list`);
for (let i in component.projects) {
let project = component.projects[i]; 
 let iicfn2 = 'dbZI0Kz' + i;
let elAgi_c = eo('div','58h3l9ZBwQrl' + i+iicfn2,null,`class`,`row simple-card m-b-2 project`);
let eltpPBs = eo('div','rChff'+iicfn2,null,`class`,`col-sm-2 text-center`);
let elb0Xq_ = ev('img','QOZff'+iicfn2,null,`src`,`${project.image || FAVICON}`,`class`,`project-image`,`title`,`${project.name}`,`alt`,`${project.name}`);
ec('div');
let elvkQpc = eo('div','BFkff'+iicfn2,null,`class`,`col-sm-6 metadata`);
let elC01Iy = eo('h3','F8cff'+iicfn2,null,`class`,`name`);
text(project.name);
ec('h3');
let elKSnJc = eo('p','XeZff'+iicfn2,null,`class`,`short-description`);
let cmpZk6E = this._lc('cYJlGBIGG', {parent:component,parentTop:layout,props:{content:project.about.readMoreChars(100)},state:'sttBH7f',insideLoop:true,index:"" +iicfn2});
ec('p');
let cndwL19 = ! Is.empty(project.tags);
this.setState('stGOwPo', cndwL19);
if (cndwL19) { 
let elVnVdJ = eo('div','9nPff'+iicfn2);
let el7iYAw = eo('h6','oMzff'+iicfn2,null,`class`,`bold m-t-2 m-b-1`);
text(`Technologies and Techniques used in this project`);
ec('h6');
for (let i in Array.chunk(project.tags.slice(0, 6), 4)) {
let tags = Array.chunk(project.tags.slice(0, 6), 4)[i]; 
 let iiq3RK = 'hsm8aVZ' + i;
let elB6blk = eo('div','g7tYVS3mlso2' + i+iicfn2+iiq3RK,null,`class`,`tags-list m-t-2 text-justify`);
for (let i in tags) {
let tag = tags[i]; 
 let ii1SFI = 'lj6r7QL' + i;
let elCXzc8 = eo('span','oD4GyiYynsYD' + i+iicfn2+iiq3RK+ii1SFI,null,`class`,`tag mr-2`);
let elRCNkE = ev('img','DIDff'+iicfn2+iiq3RK+ii1SFI,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elzMUoX = eo('span','6rTff'+iicfn2+iiq3RK+ii1SFI,null,`class`,`name`);
text(tag.name);
ec('span');
ec('span');
}
ec('div');
}
let cndyCl3 = project.tags.length > 6;
this.setState('stvCpXB', cndyCl3);
if (cndyCl3) { 
let elfMT7Z = eo('small','JwDff'+iicfn2);
text(`And ${ project.tags.length - 6 } more...`);
ec('small');
}ec('div');
}let elPrUkg = eo('a','iczff'+iicfn2,null,`href`,`${URLS.project(project, '')}`,`class`,`btn btn-gray bold m-t-2`);
text(`VIEW DETAILS`);
ec('a');
ec('div');
let elgJa0Y = eo('div','KrOff'+iicfn2,null,`class`,`col summary`);
let elKbKm4 = eo('div','Y4cff'+iicfn2,null,`class`,`gray-text bold m-b-1`);
let elAChku = eo('span','zGkff'+iicfn2,null,`title`,``);
let el3zLqJ = eo('i','d4Sff'+iicfn2,null,`class`,`${fas('users') + ' mr-2 icon'}`);
ec('i');
let elf1jgV = eo('span','G83ff'+iicfn2);
text(`${ project.members.length }/${ project.maxMembers }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elAChku;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Members')}`});
        ;
                    }, 20);                
                ec('div');
let elxwvs7 = eo('div','0zDff'+iicfn2,null,`class`,`gray-text bold m-b-1`);
let elULdxn = eo('span','g0Uff'+iicfn2,null,`title`,``);
let elnwOSO = eo('i','IZRff'+iicfn2,null,`class`,`${fas('people-carry') + ' mr-2 icon'}`);
ec('i');
let elWFvU6 = eo('span','mNoff'+iicfn2);
text(`${ project.teams.length }/${ project.maxTeams }`);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elULdxn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Teams')}`});
        ;
                    }, 20);                
                ec('div');
let elVKVQt = eo('div','qmWff'+iicfn2,null,`class`,`gray-text bold m-b-1`);
let elBhUpf = eo('span','DAHff'+iicfn2,null,`title`,``);
let el2c0g0 = eo('i','Fejff'+iicfn2,null,`class`,`${fas('briefcase') + ' mr-2 icon'}`);
ec('i');
let cndx0Qr = project.settings.openRecruitment;
this.setState('st9hHFD', cndx0Qr);
if (cndx0Qr) { 
let eln2Y6X = eo('i','7mWff'+iicfn2,null,`class`,`${fas('check') + ' green-text mr-2 icon'}`);
ec('i');
}let cndZPVl = ! project.settings.openRecruitment;
this.setState('stfyQIp', cndZPVl);
if (cndZPVl) { 
let elWB2zU = eo('i','lr1ff'+iicfn2,null,`class`,`${fas('times') + ' red-text mr-2 icon'}`);
ec('i');
}ec('span');

                    setTimeout(function () {
                        let $el = elBhUpf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Recruiting')}`});
        ;
                    }, 20);                
                ec('div');
let el3noo1 = eo('div','N5Uff'+iicfn2,null,`class`,`gray-text bold m-b-1`);
let elCpV6s = eo('span','_7Uff'+iicfn2,null,`title`,``);
let elMmpJE = eo('i','BQPff'+iicfn2,null,`class`,`${fas('chart-line') + ' mr-2 icon'}`);
ec('i');
let eluhYEE = eo('span','DuZff'+iicfn2,null,`class`,`text-capitalize`);
text(project.status);
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elCpV6s;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project Status')}`});
        ;
                    }, 20);                
                ec('div');
let elET8eK = eo('div','J2mff'+iicfn2,null,`class`,`gray-text bold m-b-1`);
let elkInnt = eo('span','RqIff'+iicfn2,null,`title`,``);
let elHpqTV = eo('i','jt0ff'+iicfn2,null,`class`,`${fas('coins') + ' mr-2 icon'}`);
ec('i');
let elCLuH5 = eo('span','YcBff'+iicfn2);
text( project.fund.format() );
ec('span');
ec('span');

                    setTimeout(function () {
                        let $el = elkInnt;
                        
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