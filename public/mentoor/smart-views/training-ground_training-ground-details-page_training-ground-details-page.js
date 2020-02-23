_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cVMQMXMB1:'training-ground-header',cTdtzi1Px:'flk-spinner',cISxt3yMV:'markdown',cExaXlD9t:'markdown',cI5EbN0GB:'gold-icon',c53Tx1V1A:'layout',cOu_Gin15:'flk-alert',c1_n55puT:'flk-modal'},
                render: function (component) {
                    let cmp7_jh = this._lc('c53Tx1V1A', {parent:component,content:(layout) => {let cmpVCpQ = this._lc('cVMQMXMB1', {parent:component,parentTop:layout});
let cndRZ0F = component.isLoading;
this.setState('stSGDx9', cndRZ0F);
let cndVlGs = !(cndRZ0F);
this.setState('stM5xcX', cndVlGs);
if (cndRZ0F) { 
let cmpLm57 = this._lc('cTdtzi1Px', {parent:component,parentTop:layout,state:'stSGDx9'});
}else { 
let elH0Gb0 = eo('div');
let elteZ4J = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let el018jk = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let el3qcGu = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let ele9HzZ = eo('div',null,null,`class`,`row`);
let elpKehD = eo('div',null,null,`class`,`col`);
let el9yAlI = eo('div',null,null,`class`,`text-center`);
let elqu846 = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let eleO_wg = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let el2AiT1 = eo('section',null,null,`class`,`description m-y-2`);
let cmpUthW = this._lc('cISxt3yMV', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'stM5xcX'});
ec('section');
ec('div');
let eldNwSE = eo('div',null,null,`class`,`col-5`);
let elvDoCe = eo('section');
let elqIh68 = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let el0mkTt = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iiiUcF = 'WsIeFqm' + i;
let elsicYm = eo('div','19t7eHUbMeM0' + i+iiiUcF,null,`class`,`technology`);
let elraslc = ev('img','TK1ff'+iiiUcF,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elA6hte = eo('div','lq2ff'+iiiUcF,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let elMy1T7 = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmpooGI = this._lc('cExaXlD9t', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'stM5xcX'});
ec('section');
ec('div');
let el89S8E = eo('div',null,null,`class`,`col-3`);
let el3DLCL = eo('div',null,null,`class`,`card`);
let elrxD38 = eo('div',null,null,`class`,`text-center m-t-1`);
let elAvPv2 = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmpqXKR = this._lc('cI5EbN0GB', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'stM5xcX'});
ec('div');
let elOWzgy = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let elDng7U = eo('div',null,null,`class`,`text-center m-t-1`);
let el8V2TF = eo('span',null,null,`class`,`badge status`);
el8V2TF.cls = getStatusBadge(component.trainingGround.status);

            for (let className in el8V2TF.cls) {
                el8V2TF.classList.toggle(className, el8V2TF.cls[className]);
            }  
            text(component.trainingGround.status);
ec('span');
ec('div');
let elMPbzB = eo('div',null,null,`class`,`btns-list`);
let cndqfGT = component.trainingGround.livePreview;
this.setState('stMns2y', cndqfGT);
let cndmPdP = !(cndqfGT);
this.setState('st3ap8l', cndmPdP);
if (cndqfGT) { 
let el6J_WN = eo('a','M4Af',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let elUM6nF = eo('i','bYff',null,`class`,`${fas('eye') + ' mr-2 icon'}`);
ec('i');
let elfRkxg = eo('span','Xk8f');
text(`Live preview`);
ec('span');
ec('a');
}let cndLscl = ! component.trainingGround.repositoryUrl;
this.setState('stps8N8', cndLscl);
let cndbS8C = !(cndLscl);
this.setState('stzbPmY', cndbS8C);
if (cndLscl) { 
let elHUfsb = eo('button','SBbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elP8Et5 = eo('i','Q63f',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let elrtEYt = eo('i','KqUf',null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elBVWA7 = eo('span','yHNf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let elODcep = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let elGNEsu = eo('i',null,null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elN1Qj6 = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndHJYG = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stNfl2L', cndHJYG);
if (cndHJYG) { 
let eltwblo = eo('a','Gpqf',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let elxeMyD = eo('div',null,null,`class`,`card m-t-1 p-2`);
let elUVpnN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elsnRyU = eo('i',null,null,`class`,`${fab('github') + ' mr-2 icon'}`);
ec('i');
let el6EH4v = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndOt6u = component.confirmWithInput;
this.setState('stJ97DO', cndOt6u);
if (cndOt6u) { 
let cmpZhYC = this._lc('cOu_Gin15', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stJ97DO'});
}let cndaby8 = component.githubNotes;
this.setState('stiBk1j', cndaby8);
if (cndaby8) { 
let cmpPidy = this._lc('c1_n55puT', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let ely8uwj = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elNEAS7 = eo('ul');
let elMskrZ = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let elRnI6z = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let ellzqEE = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let elVWjrv = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let el3yspq = eo('li');
text(`Always write a`);
let elQD7Kt = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'stiBk1j'});
}
                    this.isReadyToGo();
                }
        });