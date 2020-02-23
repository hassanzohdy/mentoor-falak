_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cAayYnGnN:'training-ground-header',c22W15dDa:'flk-spinner',cHq3QeydB:'markdown',cyjXFczhx:'markdown',cy77BncW2:'gold-icon',cQLIUtxKK:'layout',cpI72_Bra:'flk-alert',cVeFc6Ynu:'flk-modal'},
                render: function (component) {
                    let cmpxMuk = this._lc('cQLIUtxKK', {parent:component,content:(layout) => {let cmpjw9l = this._lc('cAayYnGnN', {parent:component,parentTop:layout});
let cndLeyC = component.isLoading;
this.setState('st8civu', cndLeyC);
let cndsUq0 = !(cndLeyC);
this.setState('st0CkwE', cndsUq0);
if (cndLeyC) { 
let cmpqZ5w = this._lc('c22W15dDa', {parent:component,parentTop:layout,state:'st8civu'});
}else { 
let elKj3tM = eo('div');
let elFS3TE = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elzC9gN = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let elblwoX = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let elxOFHA = eo('div',null,null,`class`,`row`);
let elzma8J = eo('div',null,null,`class`,`col`);
let elxriPJ = eo('div',null,null,`class`,`text-center`);
let elurNyT = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let el5weF7 = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let elRZSXX = eo('section',null,null,`class`,`description m-y-2`);
let cmpW6aO = this._lc('cHq3QeydB', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'st0CkwE'});
ec('section');
ec('div');
let elc5Dv5 = eo('div',null,null,`class`,`col-5`);
let elp8zeb = eo('section');
let elq7zVz = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let elXKvCM = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iiogDg = 'mf3iOJV' + i;
let el9Lbmk = eo('div','tblHy7KDwHK3' + i+iiogDg,null,`class`,`technology`);
let eldipjr = ev('img','Qo5ff'+iiogDg,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elOZfDM = eo('div','px2ff'+iiogDg,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let elvL3Wh = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmpLxoh = this._lc('cyjXFczhx', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'st0CkwE'});
ec('section');
ec('div');
let elCp6Lv = eo('div',null,null,`class`,`col-3`);
let elVTctq = eo('div',null,null,`class`,`card`);
let elzCDAV = eo('div',null,null,`class`,`text-center m-t-1`);
let elmqmsv = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmpWNjL = this._lc('cy77BncW2', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'st0CkwE'});
ec('div');
let elsfrUB = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let el2EXtv = eo('div',null,null,`class`,`text-center m-t-1`);
let elsZNPT = eo('span',null,null,`class`,`badge status`);
elsZNPT.cls = getStatusBadge(component.trainingGround.status);

            for (let className in elsZNPT.cls) {
                elsZNPT.classList.toggle(className, elsZNPT.cls[className]);
            }  
            text(component.trainingGround.status);
ec('span');
ec('div');
let elvpQqu = eo('div',null,null,`class`,`btns-list`);
let cndex7G = component.trainingGround.livePreview;
this.setState('stws_rO', cndex7G);
let cndC1_4 = !(cndex7G);
this.setState('stdd4sH', cndC1_4);
if (cndex7G) { 
let eljFDkV = eo('a','_4sf',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let elj3Qbj = eo('i','5whf',null,`class`,`${fas('eye') + ' mr-2 icon'}`);
ec('i');
let eln4t15 = eo('span','fjhf');
text(`Live preview`);
ec('span');
ec('a');
}let cnd9dsj = ! component.trainingGround.repositoryUrl;
this.setState('stznZhH', cnd9dsj);
let cndyk18 = !(cnd9dsj);
this.setState('sttdnkp', cndyk18);
if (cnd9dsj) { 
let elS7wlr = eo('button','YNdf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elP1zfI = eo('i','SQkf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let elimS7d = eo('i','rBNf',null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let el6ScEw = eo('span','NTjf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let el4MNev = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let elOvi20 = eo('i',null,null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elmRkj0 = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndYAH9 = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stpKTVe', cndYAH9);
if (cndYAH9) { 
let elKM1wb = eo('a','7tOf',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let elop6LK = eo('div',null,null,`class`,`card m-t-1 p-2`);
let el1DqMV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elYNkHi = eo('i',null,null,`class`,`${fab('github') + ' mr-2 icon'}`);
ec('i');
let el1xvbQ = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndxYsR = component.confirmWithInput;
this.setState('stzrdSI', cndxYsR);
if (cndxYsR) { 
let cmpmkLP = this._lc('cpI72_Bra', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stzrdSI'});
}let cnd7Eru = component.githubNotes;
this.setState('st349be', cnd7Eru);
if (cnd7Eru) { 
let cmpnZfa = this._lc('cVeFc6Ynu', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let eloGEl0 = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elsjj_T = eo('ul');
let elURfGR = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let elHJl6i = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let ellfpdJ = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let el32xzW = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let elm9Kkb = eo('li');
text(`Always write a`);
let elsWCtT = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'st349be'});
}
                    this.isReadyToGo();
                }
        });