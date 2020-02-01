_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cmxqZGPUc:'training-ground-header',ccJWgaLCZ:'flk-spinner',c5Ps6DVFk:'markdown',c49IllbAs:'markdown',c7x6Jh9jF:'gold-icon',cD1CvlKIG:'layout',c72w3DFif:'flk-alert',cPTARrDXi:'flk-modal'},
                render: function (component) {
                    let cmprgGn = this._lc('cD1CvlKIG', {parent:component,content:(layout) => {let cmp7Pfs = this._lc('cmxqZGPUc', {parent:component,parentTop:layout});
let cndEBEa = component.isLoading;
this.setState('stmivrR', cndEBEa);
let cndEERS = !(cndEBEa);
this.setState('stGzpvi', cndEERS);
if (cndEBEa) { 
let cmpXQQ3 = this._lc('ccJWgaLCZ', {parent:component,parentTop:layout,state:'stmivrR'});
}else { 
let elaQxLP = eo('div');
let el9_S3x = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elnTAyM = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let elK9JW6 = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let elKZ7JQ = eo('div',null,null,`class`,`row`);
let elT42G7 = eo('div',null,null,`class`,`col`);
let el_riCn = eo('div',null,null,`class`,`text-center`);
let elxn4dT = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let elHwjKJ = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let eluzfbw = eo('section',null,null,`class`,`description m-y-2`);
let cmpXJWb = this._lc('c5Ps6DVFk', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'stGzpvi'});
ec('section');
ec('div');
let elerXyJ = eo('div',null,null,`class`,`col-5`);
let elJBnY9 = eo('section');
let elcMIMm = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let elQeMsv = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iiO8Ad = '21FTp1C' + i;
let elRl9zJ = eo('div','pGLSuSd1Kxw7' + i+iiO8Ad,null,`class`,`technology`);
let elFWPSF = ev('img','Tenff'+iiO8Ad,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elQ14LD = eo('div','i99ff'+iiO8Ad,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let elHtDr8 = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmpkuRv = this._lc('c49IllbAs', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'stGzpvi'});
ec('section');
ec('div');
let el4V_Nb = eo('div',null,null,`class`,`col-3`);
let ell1rvN = eo('div',null,null,`class`,`card`);
let elQ0t4P = eo('div',null,null,`class`,`text-center m-t-1`);
let elLyXgY = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmpyDIU = this._lc('c7x6Jh9jF', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'stGzpvi'});
ec('div');
let elT5IeE = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let elAbO6s = eo('div',null,null,`class`,`text-center m-t-1`);
let elMx6yn = eo('span',null,null,`class`,`badge status`);
elMx6yn.cls = getStatusBadge(component.trainingGround.status);

            for (let className in elMx6yn.cls) {
                elMx6yn.classList.toggle(className, elMx6yn.cls[className]);
            }  
            text(component.trainingGround.status);
ec('span');
ec('div');
let el2cAe0 = eo('div',null,null,`class`,`btns-list`);
let cnd4MPS = component.trainingGround.livePreview;
this.setState('stzo3EF', cnd4MPS);
let cndQvYs = !(cnd4MPS);
this.setState('stkoIUh', cndQvYs);
if (cnd4MPS) { 
let el_oR4P = eo('a','HlDf',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let elT9iwi = eo('i','DZYf',null,`class`,`${fas('eye') + ' mr-2 icon'}`);
ec('i');
let elX1cFF = eo('span','OGBf');
text(`Live preview`);
ec('span');
ec('a');
}let cndjxMC = ! component.trainingGround.repositoryUrl;
this.setState('stLXrW1', cndjxMC);
let cndJP90 = !(cndjxMC);
this.setState('stRcJJX', cndJP90);
if (cndjxMC) { 
let elHi4c5 = eo('button','_Jzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elZB0Q0 = eo('i','9iNf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let elVMOLA = eo('i','TJpf',null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elfc1kD = eo('span','N4ff');
text(`Repository`);
ec('span');
ec('button');
}else { 
let elzRmOF = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let el1q6SF = eo('i',null,null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elb8xTC = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndsOCf = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stoAJhZ', cndsOCf);
if (cndsOCf) { 
let elU7tww = eo('a','3yBf',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let elesXOI = eo('div',null,null,`class`,`card m-t-1 p-2`);
let elJK7Q7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elSfz2A = eo('i',null,null,`class`,`${fab('github') + ' mr-2 icon'}`);
ec('i');
let elZcnc9 = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndqgMd = component.confirmWithInput;
this.setState('stKA34x', cndqgMd);
if (cndqgMd) { 
let cmpJKjc = this._lc('c72w3DFif', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stKA34x'});
}let cnd8dzC = component.githubNotes;
this.setState('stw71O_', cnd8dzC);
if (cnd8dzC) { 
let cmp0M9e = this._lc('cPTARrDXi', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let elLgnDf = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elWDpLh = eo('ul');
let elhtFDJ = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let ellmBlR = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let el40D9w = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let elTe8Ps = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let elE0UTE = eo('li');
text(`Always write a`);
let elDT2XP = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'stw71O_'});
}
                    this.isReadyToGo();
                }
        });