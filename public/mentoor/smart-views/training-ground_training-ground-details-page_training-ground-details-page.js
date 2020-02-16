_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cX1skTSae:'training-ground-header',cMtbOxxdc:'flk-spinner',chVsgYtjW:'markdown',crJvg95Te:'markdown',cNAIHPEUW:'gold-icon',cXi1OGDRN:'layout',cm6Dprr1P:'flk-alert',cz7SpIPh9:'flk-modal'},
                render: function (component) {
                    let cmpHIep = this._lc('cXi1OGDRN', {parent:component,content:(layout) => {let cmpmySO = this._lc('cX1skTSae', {parent:component,parentTop:layout});
let cndzdA9 = component.isLoading;
this.setState('stgTv10', cndzdA9);
let cnd4eXE = !(cndzdA9);
this.setState('sthYkeb', cnd4eXE);
if (cndzdA9) { 
let cmpge5X = this._lc('cMtbOxxdc', {parent:component,parentTop:layout,state:'stgTv10'});
}else { 
let elB9jpk = eo('div');
let elOmUml = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elKzDVP = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let elf56va = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let elVepSk = eo('div',null,null,`class`,`row`);
let elv_qBC = eo('div',null,null,`class`,`col`);
let elWVXfX = eo('div',null,null,`class`,`text-center`);
let elCIJst = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let el3OUiO = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let elsK5_o = eo('section',null,null,`class`,`description m-y-2`);
let cmpQYIU = this._lc('chVsgYtjW', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'sthYkeb'});
ec('section');
ec('div');
let el6zMXD = eo('div',null,null,`class`,`col-5`);
let elP1nQ2 = eo('section');
let elp5bcH = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let elwKpUe = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iipSno = 'D3v0GXJ' + i;
let el4U1wD = eo('div','MmA8257AZbDd' + i+iipSno,null,`class`,`technology`);
let el8jmeT = ev('img','_uiff'+iipSno,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elQTclN = eo('div','A_Fff'+iipSno,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let elG5Ksy = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmpezI8 = this._lc('crJvg95Te', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'sthYkeb'});
ec('section');
ec('div');
let elFu2x1 = eo('div',null,null,`class`,`col-3`);
let elHyxet = eo('div',null,null,`class`,`card`);
let eldAp0H = eo('div',null,null,`class`,`text-center m-t-1`);
let el7yu9n = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmphzUI = this._lc('cNAIHPEUW', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'sthYkeb'});
ec('div');
let elkulco = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let elfhinr = eo('div',null,null,`class`,`text-center m-t-1`);
let elx2W6P = eo('span',null,null,`class`,`badge status`);
elx2W6P.cls = getStatusBadge(component.trainingGround.status);

            for (let className in elx2W6P.cls) {
                elx2W6P.classList.toggle(className, elx2W6P.cls[className]);
            }  
            text(component.trainingGround.status);
ec('span');
ec('div');
let elED7PQ = eo('div',null,null,`class`,`btns-list`);
let cndPOBZ = component.trainingGround.livePreview;
this.setState('stFP_uU', cndPOBZ);
let cndJJXl = !(cndPOBZ);
this.setState('ste_5ZS', cndJJXl);
if (cndPOBZ) { 
let el_gVsK = eo('a','Xe8f',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let elgSvh_ = eo('i','zGTf',null,`class`,`${fas('eye') + ' mr-2 icon'}`);
ec('i');
let el4Br1k = eo('span','hysf');
text(`Live preview`);
ec('span');
ec('a');
}let cndd7Gx = ! component.trainingGround.repositoryUrl;
this.setState('strMR5z', cndd7Gx);
let cndXI3u = !(cndd7Gx);
this.setState('styhTJd', cndXI3u);
if (cndd7Gx) { 
let elthLQJ = eo('button','SKlf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elZFR5o = eo('i','lYef',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let elXnwqz = eo('i','U55f',null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elSqCwi = eo('span','otcf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let el6IlKC = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let elZ_JlV = eo('i',null,null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elVqP8F = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndjC6B = ! Is.empty(component.trainingGround.dependsOn);
this.setState('stdCPe1', cndjC6B);
if (cndjC6B) { 
let elAhO6L = eo('a','xIjf',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let elNgIXa = eo('div',null,null,`class`,`card m-t-1 p-2`);
let elVC6cE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elSXPGf = eo('i',null,null,`class`,`${fab('github') + ' mr-2 icon'}`);
ec('i');
let eldg6ak = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cnd8zbC = component.confirmWithInput;
this.setState('stPnMgO', cnd8zbC);
if (cnd8zbC) { 
let cmpe8Ze = this._lc('cm6Dprr1P', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stPnMgO'});
}let cndXp_N = component.githubNotes;
this.setState('stNvphV', cndXp_N);
if (cndXp_N) { 
let cmpWdm3 = this._lc('cz7SpIPh9', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let el6OAdW = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elrClWE = eo('ul');
let el9JEFL = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let el_oJET = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let eltEzLY = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let elO9x1m = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let elAw7Dr = eo('li');
text(`Always write a`);
let eln8J09 = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'stNvphV'});
}
                    this.isReadyToGo();
                }
        });