_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cXSzItTss:'training-ground-header',cTHyzfIRk:'flk-spinner',cvHjrhywM:'markdown',cHACnz_2Z:'markdown',cVwgESrAv:'gold-icon',cPba_1Fia:'layout',ccvogr1X3:'flk-alert',cZmQsPb2Z:'flk-modal'},
                render: function (component) {
                    let cmpE8LY = this._lc('cPba_1Fia', {parent:component,content:(layout) => {let cmpFyLo = this._lc('cXSzItTss', {parent:component,parentTop:layout});
let cndw3OS = component.isLoading;
this.setState('stKIons', cndw3OS);
let cndmMq7 = !(cndw3OS);
this.setState('stSsjqU', cndmMq7);
if (cndw3OS) { 
let cmp4M5_ = this._lc('cTHyzfIRk', {parent:component,parentTop:layout,state:'stKIons'});
}else { 
let elbQRBQ = eo('div');
let elFUqXa = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elMeR2b = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let elFIrjK = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let elK29Ro = eo('div',null,null,`class`,`row`);
let ellgO5R = eo('div',null,null,`class`,`col`);
let elolS7J = eo('div',null,null,`class`,`text-center`);
let elUFrsP = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let elyRnW6 = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let elh6hTx = eo('section',null,null,`class`,`description m-y-2`);
let cmpxqms = this._lc('cvHjrhywM', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'stSsjqU'});
ec('section');
ec('div');
let el6phcY = eo('div',null,null,`class`,`col-5`);
let elBI8kc = eo('section');
let elMNzWB = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let el0plF_ = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iiRNKU = 'BB9xiWp' + i;
let eliOnxz = eo('div','Wa6VQNE1RxlQ' + i+iiRNKU,null,`class`,`technology`);
let elIYV2h = ev('img','ovBff'+iiRNKU,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elURmGh = eo('div','1csff'+iiRNKU,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let eltx_T0 = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmpD6K4 = this._lc('cHACnz_2Z', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'stSsjqU'});
ec('section');
ec('div');
let elU9nLX = eo('div',null,null,`class`,`col-3`);
let el7fjWZ = eo('div',null,null,`class`,`card`);
let elYddS1 = eo('div',null,null,`class`,`text-center m-t-1`);
let elgPTj3 = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmp7glK = this._lc('cVwgESrAv', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'stSsjqU'});
ec('div');
let elU_UiW = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let el0cRPw = eo('div',null,null,`class`,`text-center m-t-1`);
let el1CaNs = eo('span',null,null,`class`,`badge status ${cls(getStatusBadge(component.trainingGround.status))}`);
text(component.trainingGround.status);
ec('span');
ec('div');
let elrcbT7 = eo('div',null,null,`class`,`btns-list`);
let cndkoUk = component.trainingGround.livePreview;
this.setState('stAFprD', cndkoUk);
let cndwVWd = !(cndkoUk);
this.setState('stTmCOc', cndwVWd);
if (cndkoUk) { 
let elhddLG = eo('a','_oXf',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let el8RmpQ = eo('i','Iwaf',null,`class`,`${fas('eye')} mr-2 icon`);
ec('i');
let elBTSpV = eo('span','SaYf');
text(`Live preview`);
ec('span');
ec('a');
}let cnd8u5g = ! component.trainingGround.repositoryUrl;
this.setState('stsUzRr', cnd8u5g);
let cndx0cp = !(cnd8u5g);
this.setState('st1n7AG', cndx0cp);
if (cnd8u5g) { 
let el5LTYI = eo('button','sR9f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elUEw4V = eo('i','SKTf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
let eloCPNb = eo('i','TK6f',null,`class`,`${fab('github')} fa-1x mr-2 icon`);
ec('i');
let elY96BU = eo('span','HPIf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let el4twnw = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let eloKBHJ = eo('i',null,null,`class`,`${fab('github')} fa-1x mr-2 icon`);
ec('i');
let elEZmyX = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndpXak = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stNuDUG', cndpXak);
if (cndpXak) { 
let elmk7kJ = eo('a','csif',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let el5MCz8 = eo('div',null,null,`class`,`card m-t-1 p-2`);
let elk3Y3t = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let el5gEF5 = eo('i',null,null,`class`,`${fab('github')} mr-2 icon`);
ec('i');
let elufoeP = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndERYJ = component.confirmWithInput;
this.setState('stMT0ct', cndERYJ);
if (cndERYJ) { 
let cmpvXe4 = this._lc('ccvogr1X3', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stMT0ct'});
}let cndsKDP = component.githubNotes;
this.setState('stuAFha', cndsKDP);
if (cndsKDP) { 
let cmp16lP = this._lc('cZmQsPb2Z', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let elvctVN = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elirbMP = eo('ul');
let elBsdkA = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let el0L6n9 = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let elk_Bdn = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let eloKt4P = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let eloB09b = eo('li');
text(`Always write a`);
let el4j0RR = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'stuAFha'});
}
                    this.isReadyToGo();
                }
        });