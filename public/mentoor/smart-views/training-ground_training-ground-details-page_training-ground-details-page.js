_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cFu6pVIZX:'training-ground-header',cLOpLlhJH:'flk-spinner',cnulj7PuX:'markdown',cf_B4aoXu:'markdown',cC3ewLS8q:'gold-icon',cuvVBhAlB:'layout',ck00vEc4b:'flk-alert',cKXcLuiRF:'flk-modal'},
                render: function (component) {
                    let cmpNHrO = this._lc('cuvVBhAlB', {parent:component,content:(layout) => {let cmpIYzM = this._lc('cFu6pVIZX', {parent:component,parentTop:layout});
let cnddN62 = component.isLoading;
this.setState('stlhdTk', cnddN62);
let cndekVq = !(cnddN62);
this.setState('stwA5Wa', cndekVq);
if (cnddN62) { 
let cmpYG6Y = this._lc('cLOpLlhJH', {parent:component,parentTop:layout,state:'stlhdTk'});
}else { 
let el9iWdm = eo('div');
let elwL1rW = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elTNKrj = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let eltz0gS = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let el7s2FW = eo('div',null,null,`class`,`row`);
let elYi3lU = eo('div',null,null,`class`,`col`);
let elFizvH = eo('div',null,null,`class`,`text-center`);
let elkOkhI = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let elGV77N = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let elPfHOi = eo('section',null,null,`class`,`description m-y-2`);
let cmpqAhJ = this._lc('cnulj7PuX', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'stwA5Wa'});
ec('section');
ec('div');
let elwa2ig = eo('div',null,null,`class`,`col-5`);
let eluW3_6 = eo('section');
let elOkB8j = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let elQOZjb = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iiKzWm = 'C15bZos' + i;
let elbtijn = eo('div','G4DPcTJYwxa6' + i+iiKzWm,null,`class`,`technology`);
let elGF5AO = ev('img','Xrdff'+iiKzWm,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elfO_Wm = eo('div','oF6ff'+iiKzWm,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let eluuWB9 = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmpQjX2 = this._lc('cf_B4aoXu', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'stwA5Wa'});
ec('section');
ec('div');
let elOopnj = eo('div',null,null,`class`,`col-3`);
let el7tE9k = eo('div',null,null,`class`,`card`);
let elXjecF = eo('div',null,null,`class`,`text-center m-t-1`);
let elMZBDo = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmpefdz = this._lc('cC3ewLS8q', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'stwA5Wa'});
ec('div');
let elKPsoI = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let elhIduT = eo('div',null,null,`class`,`text-center m-t-1`);
let elFHJ14 = eo('span',null,null,`class`,`badge status ${cls(getStatusBadge(component.trainingGround.status))}`);
text(component.trainingGround.status);
ec('span');
ec('div');
let elQkkDW = eo('div',null,null,`class`,`btns-list`);
let cnd69pr = component.trainingGround.livePreview;
this.setState('stdfFNU', cnd69pr);
let cndFrN4 = !(cnd69pr);
this.setState('stUnJ7f', cndFrN4);
if (cnd69pr) { 
let el9veJx = eo('a','_nsf',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let ellKig5 = eo('i','jt9f',null,`class`,`${fas('eye')} mr-2 icon`);
ec('i');
let elf8WhC = eo('span','sMlf');
text(`Live preview`);
ec('span');
ec('a');
}let cndUAS3 = ! component.trainingGround.repositoryUrl;
this.setState('st0zi7e', cndUAS3);
let cnd0KjT = !(cndUAS3);
this.setState('st97TrF', cnd0KjT);
if (cndUAS3) { 
let elnDInX = eo('button','V8uf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elrbTCg = eo('i','udYf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let el1mh4J = eo('i','DWOf',null,`class`,`${fab('github')} fa-1x mr-2 icon`);
ec('i');
let elpp_z9 = eo('span','4Wgf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let elO4OK5 = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let elhNhnm = eo('i',null,null,`class`,`${fab('github')} fa-1x mr-2 icon`);
ec('i');
let elqnRfa = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndGyR9 = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stS9QEx', cndGyR9);
if (cndGyR9) { 
let elmz_RU = eo('a','OKJf',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let elKUxLe = eo('div',null,null,`class`,`card m-t-1 p-2`);
let el9eAGJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elXgDZz = eo('i',null,null,`class`,`${fab('github')} mr-2 icon`);
ec('i');
let elHXiQT = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndllbH = component.confirmWithInput;
this.setState('stfC9Qk', cndllbH);
if (cndllbH) { 
let cmpCSmB = this._lc('ck00vEc4b', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stfC9Qk'});
}let cnd0sn6 = component.githubNotes;
this.setState('stE1P2B', cnd0sn6);
if (cnd0sn6) { 
let cmpbmIe = this._lc('cKXcLuiRF', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let elFZVYP = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let ely4sbC = eo('ul');
let eld9a9Y = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let elqmRCm = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let elbtCU7 = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let elWXLcq = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let elKTX8U = eo('li');
text(`Always write a`);
let elF9hlv = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'stE1P2B'});
}
                    this.isReadyToGo();
                }
        });