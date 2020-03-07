_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cFFebeuC8:'training-ground-header',cPnPXOO_V:'flk-spinner',cXpmnwpXb:'markdown',c4Lriuxqv:'markdown',c3y8Jyrxl:'gold-icon',coCQnxucD:'layout',cVMRZz_eZ:'flk-alert',c9dGGfxqU:'flk-modal'},
                render: function (component) {
                    let cmp10Ro = this._lc('coCQnxucD', {parent:component,content:(layout) => {let cmpo3ob = this._lc('cFFebeuC8', {parent:component,parentTop:layout});
let cndCOx_ = component.isLoading;
this.setState('sttyqZH', cndCOx_);
let cndrWwr = !(cndCOx_);
this.setState('stUiZc3', cndrWwr);
if (cndCOx_) { 
let cmpVl55 = this._lc('cPnPXOO_V', {parent:component,parentTop:layout,state:'sttyqZH'});
}else { 
let elUyD7L = eo('div');
let elF0Lh_ = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elgOOIS = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let elsvwYj = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let el58U4p = eo('div',null,null,`class`,`row`);
let elB8Dmx = eo('div',null,null,`class`,`col`);
let elL2Ni1 = eo('div',null,null,`class`,`text-center`);
let elPWJTu = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let eltw7VE = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let el8Ewma = eo('section',null,null,`class`,`description m-y-2`);
let cmpeBkm = this._lc('cXpmnwpXb', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'stUiZc3'});
ec('section');
ec('div');
let elMPkNu = eo('div',null,null,`class`,`col-5`);
let elpdc0t = eo('section');
let elxwJa_ = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let elhialB = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let ii5RLE = 'RVwvKoL' + i;
let el0NJtc = eo('div','WWoBElU3wjzF' + i+ii5RLE,null,`class`,`technology`);
let elCR55o = ev('img','eGjff'+ii5RLE,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let el3MukP = eo('div','CxCff'+ii5RLE,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let elvvI3g = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmppXZR = this._lc('c4Lriuxqv', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'stUiZc3'});
ec('section');
ec('div');
let elrAbjz = eo('div',null,null,`class`,`col-3`);
let elw2egI = eo('div',null,null,`class`,`card`);
let elXivfg = eo('div',null,null,`class`,`text-center m-t-1`);
let elXdHRm = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmpZrwZ = this._lc('c3y8Jyrxl', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'stUiZc3'});
ec('div');
let elIlGtY = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let elhDszG = eo('div',null,null,`class`,`text-center m-t-1`);
let elJU9LO = eo('span',null,null,`class`,`badge status ${cls(getStatusBadge(component.trainingGround.status))}`);
text(component.trainingGround.status);
ec('span');
ec('div');
let elCjicz = eo('div',null,null,`class`,`btns-list`);
let cndfpTR = component.trainingGround.livePreview;
this.setState('stZmcpt', cndfpTR);
let cndM2xl = !(cndfpTR);
this.setState('stkUaAF', cndM2xl);
if (cndfpTR) { 
let elI49PW = eo('a','SiTf',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let el0MwW_ = eo('i','qUOf',null,`class`,`${fas('eye')} mr-2 icon`);
ec('i');
let elHA3Yu = eo('span','RHHf');
text(`Live preview`);
ec('span');
ec('a');
}let cnd0AmY = ! component.trainingGround.repositoryUrl;
this.setState('st0aexV', cnd0AmY);
let cndRZG_ = !(cnd0AmY);
this.setState('st58TE5', cndRZG_);
if (cnd0AmY) { 
let elRlMQz = eo('button','H97f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elAY3Dy = eo('i','rNZf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let elN2MRU = eo('i','dzOf',null,`class`,`${fab('github')} fa-1x mr-2 icon`);
ec('i');
let elpK3bn = eo('span','ABrf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let elC0wML = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let elECxJ8 = eo('i',null,null,`class`,`${fab('github')} fa-1x mr-2 icon`);
ec('i');
let elsGKo4 = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndjtwt = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stx7EBk', cndjtwt);
if (cndjtwt) { 
let elSqgSr = eo('a','te3f',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let elvist2 = eo('div',null,null,`class`,`card m-t-1 p-2`);
let elAUCyI = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elE2bb0 = eo('i',null,null,`class`,`${fab('github')} mr-2 icon`);
ec('i');
let elq9XwO = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndW8aZ = component.confirmWithInput;
this.setState('st435O_', cndW8aZ);
if (cndW8aZ) { 
let cmpR4zu = this._lc('cVMRZz_eZ', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'st435O_'});
}let cnd8pW8 = component.githubNotes;
this.setState('stOkADD', cnd8pW8);
if (cnd8pW8) { 
let cmpozzJ = this._lc('c9dGGfxqU', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let eluyGi2 = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elXo5MQ = eo('ul');
let elwzlF9 = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let el_JE9P = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let elRBeyB = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let elSWXFY = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let elHJNpT = eo('li');
text(`Always write a`);
let elT_Gy1 = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'stOkADD'});
}
                    this.isReadyToGo();
                }
        });