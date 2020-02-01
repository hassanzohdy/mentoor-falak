_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {ciaJeV981:'training-ground-header',ccxi4BK9A:'flk-spinner',cFALmhU9B:'markdown',c0c7Bjhwd:'markdown',cTyZYOiNR:'gold-icon',cPhOT0BZP:'layout',c2GGiWI7c:'flk-alert',ca9lG2FXm:'flk-modal'},
                render: function (component) {
                    let cmpT4aw = this._lc('cPhOT0BZP', {parent:component,content:(layout) => {let cmpE3jT = this._lc('ciaJeV981', {parent:component,parentTop:layout});
let cndQj3a = component.isLoading;
this.setState('stwTAme', cndQj3a);
let cndvBmS = !(cndQj3a);
this.setState('stS4qYz', cndvBmS);
if (cndQj3a) { 
let cmpWWC_ = this._lc('ccxi4BK9A', {parent:component,parentTop:layout,state:'stwTAme'});
}else { 
let elQdird = eo('div');
let elLoQFI = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elylrhO = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let elB8A4v = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let elZLyBr = eo('div',null,null,`class`,`row`);
let elE7XBC = eo('div',null,null,`class`,`col`);
let eltuzBh = eo('div',null,null,`class`,`text-center`);
let elJPJ8I = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let elg_RJD = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let eldyYBX = eo('section',null,null,`class`,`description m-y-2`);
let cmpXMpx = this._lc('cFALmhU9B', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'stS4qYz'});
ec('section');
ec('div');
let elx4Klk = eo('div',null,null,`class`,`col-5`);
let elNz1M_ = eo('section');
let elUvdVR = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let elxTukR = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iidvTH = '2C7dgqK' + i;
let el8o8RA = eo('div','CK44aTkcN4Ws' + i+iidvTH,null,`class`,`technology`);
let elexJ9c = ev('img','ajdff'+iidvTH,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elkw0x7 = eo('div','WOgff'+iidvTH,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let elQBeUt = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmped97 = this._lc('c0c7Bjhwd', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'stS4qYz'});
ec('section');
ec('div');
let elDmjUa = eo('div',null,null,`class`,`col-3`);
let el2czkY = eo('div',null,null,`class`,`card`);
let elsRojK = eo('div',null,null,`class`,`text-center m-t-1`);
let el69Tif = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmpbRdj = this._lc('cTyZYOiNR', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'stS4qYz'});
ec('div');
let elN_Mwk = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let elnk3KX = eo('div',null,null,`class`,`text-center m-t-1`);
let el6XXaB = eo('span',null,null,`class`,`badge status`);
el6XXaB.cls = getStatusBadge(component.trainingGround.status);

            for (let className in el6XXaB.cls) {
                el6XXaB.classList.toggle(className, el6XXaB.cls[className]);
            }  
            text(component.trainingGround.status);
ec('span');
ec('div');
let eloZV9O = eo('div',null,null,`class`,`btns-list`);
let cndTcoo = component.trainingGround.livePreview;
this.setState('st0pb0F', cndTcoo);
let cndx8KR = !(cndTcoo);
this.setState('st_z9NF', cndx8KR);
if (cndTcoo) { 
let elQ96xB = eo('a','QeOf',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let elj9Fmc = eo('i','Og9f',null,`class`,`${fas('eye') + ' mr-2 icon'}`);
ec('i');
let el5rowO = eo('span','ZGQf');
text(`Live preview`);
ec('span');
ec('a');
}let cndZ8jf = ! component.trainingGround.repositoryUrl;
this.setState('sty60Qi', cndZ8jf);
let cndI3ax = !(cndZ8jf);
this.setState('stXIyeJ', cndI3ax);
if (cndZ8jf) { 
let eltqw3K = eo('button','L33f',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elSZaHR = eo('i','5b5f',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let elHT7DW = eo('i','tzsf',null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let el4Kceh = eo('span','3paf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let elCopRR = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let elduvRK = eo('i',null,null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elD5Jx1 = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndH5pi = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stGDgRu', cndH5pi);
if (cndH5pi) { 
let el954ML = eo('a','lSuf',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let elp4YYk = eo('div',null,null,`class`,`card m-t-1 p-2`);
let elCfBeJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elzodaw = eo('i',null,null,`class`,`${fab('github') + ' mr-2 icon'}`);
ec('i');
let elhFyPz = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndt09V = component.confirmWithInput;
this.setState('stPzoPv', cndt09V);
if (cndt09V) { 
let cmp6FdS = this._lc('c2GGiWI7c', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stPzoPv'});
}let cndo1Ui = component.githubNotes;
this.setState('stpj0O3', cndo1Ui);
if (cndo1Ui) { 
let cmpxNix = this._lc('ca9lG2FXm', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let el3jO8n = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elucozz = eo('ul');
let elJ_nds = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let el78wX6 = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let el_YnAx = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let elvn_lK = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let elV2KXR = eo('li');
text(`Always write a`);
let elpo2D6 = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'stpj0O3'});
}
                    this.isReadyToGo();
                }
        });