_Component({
                selector: 'training-ground-details-page',
                c: 'TrainingGroundDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','trainingGround','confirmWithInput','githubNotes','setGithubRepositoryUrl'],
                children: {cHt0GG5e3:'training-ground-header',cAMnedCdb:'flk-spinner',ca6alvKF_:'markdown',c2bsCY_7S:'markdown',cJOXzAgMd:'gold-icon',cZyRAp4kp:'layout',cNYfQ0Mn3:'flk-alert',cZsruU8NQ:'flk-modal'},
                render: function (component) {
                    let cmprfDS = this._lc('cZyRAp4kp', {parent:component,content:(layout) => {let cmpUODX = this._lc('cHt0GG5e3', {parent:component,parentTop:layout});
let cndWv8f = component.isLoading;
this.setState('stQP2DM', cndWv8f);
let cndxR8E = !(cndWv8f);
this.setState('stmke80', cndxR8E);
if (cndWv8f) { 
let cmpNLNx = this._lc('cAMnedCdb', {parent:component,parentTop:layout,state:'stQP2DM'});
}else { 
let elHqH1B = eo('div');
let el9lhCj = eo('h1',null,null,`class`,`m-y-2`,`id`,`heading`);
let elJpSI5 = eo('span',null,null,`class`,`mr-2`);
text(component.trainingGround.title);
ec('span');
let el4Hina = eo('small',null,null,`class`,`teal-text`);
text(component.trainingGround.cocktail.name);
ec('small');
ec('h1');
let elGnQ2_ = eo('div',null,null,`class`,`row`);
let elYjoPA = eo('div',null,null,`class`,`col`);
let el1JoUI = eo('div',null,null,`class`,`text-center`);
let elvbV4K = eo('a',null,null,`href`,`${ component.trainingGround.image }`,`target`,`_blank`);
let elpEASh = ev('img',null,null,`src`,`${component.trainingGround.image}`,`id`,`image`,`title`,`${component.trainingGround.title}`,`alt`,`${component.trainingGround.title}`);
ec('a');
ec('div');
let elCPrse = eo('section',null,null,`class`,`description m-y-2`);
let cmpnuoU = this._lc('ca6alvKF_', {parent:component,parentTop:layout,props:{content:component.trainingGround.description},state:'stmke80'});
ec('section');
ec('div');
let elO8ZMj = eo('div',null,null,`class`,`col-5`);
let elNNB0n = eo('section');
let elquKYR = eo('h3',null,null,`class`,`bold`);
text(`Technologies you should use`);
ec('h3');
let eljUccT = eo('div',null,null,`id`,`technologies-list`);
for (let i in component.trainingGround.tags) {
let tag = component.trainingGround.tags[i]; 
 let iiepww = '9s4v5_q' + i;
let el47cjm = eo('div','NT7XN6MdYjKP' + i+iiepww,null,`class`,`technology`);
let elduUkd = ev('img','YDhff'+iiepww,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elcVwBv = eo('div','7k7ff'+iiepww,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('section');
let elH7K2S = eo('section',null,null,`class`,`general-notes m-y-2`);
let cmpvnCe = this._lc('c2bsCY_7S', {parent:component,parentTop:layout,contentToString:`# General rules
- Always **categorize** your files based on the file type.
- Encapsulate related files in one place.
- Comments Comments Comments everywhere.
- **Think** before coding, write what should be done before doing it.`,state:'stmke80'});
ec('section');
ec('div');
let elKP4FX = eo('div',null,null,`class`,`col-3`);
let elKWfUN = eo('div',null,null,`class`,`card`);
let el9c4zd = eo('div',null,null,`class`,`text-center m-t-1`);
let elfsVqd = eo('div',null,null,`class`,`pink-text bold`);
text(`Reward`);
ec('div');
let cmpFeQb = this._lc('cJOXzAgMd', {parent:component,parentTop:layout,props:{coins:component.trainingGround.prize},state:'stmke80'});
ec('div');
let elGMoDm = eo('div',null,null,`title`,`${trans(`${ component.trainingGround.level } level`)}`,`class`,`text-center level`);
text(component.trainingGround.level[0]);
ec('div');
let elcpkXh = eo('div',null,null,`class`,`text-center m-t-1`);
let elxaR7d = eo('span',null,null,`class`,`badge status`);
elxaR7d.cls = getStatusBadge(component.trainingGround.status);

            for (let className in elxaR7d.cls) {
                elxaR7d.classList.toggle(className, elxaR7d.cls[className]);
            }  
            text(component.trainingGround.status);
ec('span');
ec('div');
let ellhT95 = eo('div',null,null,`class`,`btns-list`);
let cnd9Ei7 = component.trainingGround.livePreview;
this.setState('st7alAF', cnd9Ei7);
let cndM820 = !(cnd9Ei7);
this.setState('stcos8D', cndM820);
if (cnd9Ei7) { 
let elD4BqB = eo('a','cblf',null,`href`,`${ component.trainingGround.livePreview }`,`target`,`_blank`,`class`,`btn btn-sm live-preview-btn btn-success bold`);
let elmQzXK = eo('i','PGvf',null,`class`,`${fas('eye') + ' mr-2 icon'}`);
ec('i');
let elFYtrz = eo('span','Uq1f');
text(`Live preview`);
ec('span');
ec('a');
}let cndQH80 = ! component.trainingGround.repositoryUrl;
this.setState('st6pa9g', cndQH80);
let cndvApL = !(cndQH80);
this.setState('stlI_lZ', cndvApL);
if (cndQH80) { 
let elkrZnv = eo('button','FAZf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmWithInput = true}]},`type`,`button`,`class`,`btn btn-sm open-form-btn`);
let elrL5On = eo('i','rAvf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
let elxPlB8 = eo('i','hXOf',null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let elHXjIa = eo('span','_jhf');
text(`Repository`);
ec('span');
ec('button');
}else { 
let elU37Ur = eo('a',null,null,`href`,`${ component.trainingGround.repositoryUrl }`,`target`,`_blank`,`class`,`btn btn-sm open-form-btn`);
let elgZS5e = eo('i',null,null,`class`,`${fab('github') + ' fa-1x mr-2 icon'}`);
ec('i');
let el7CuOX = eo('span');
text(`Repository`);
ec('span');
ec('a');
}ec('div');
let cndC_3m = ! Is.empty(component.trainingGround.dependsOn);
this.setState('st1mXpP', cndC_3m);
if (cndC_3m) { 
let elpxtHw = eo('a','Ykdf',null,`href`,`/training-ground/${ component.trainingGround.dependsOn.id }`);
text(`Sequence of ${ component.trainingGround.dependsOn.title }`);
ec('a');
}ec('div');
let ele7rb1 = eo('div',null,null,`class`,`card m-t-1 p-2`);
let elZh5wU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.githubNotes = true}]},`class`,`btn-grd grd-dark m-t-1`);
let elIZIc9 = eo('i',null,null,`class`,`${fab('github') + ' mr-2 icon'}`);
ec('i');
let ela3pZz = eo('span');
text(`GITHUB NOTES`);
ec('span');
ec('button');
ec('div');
ec('div');
ec('div');
ec('div');
}}});
let cndrNEs = component.confirmWithInput;
this.setState('stnEoOL', cndrNEs);
if (cndrNEs) { 
let cmpMq5Y = this._lc('cNYfQ0Mn3', {parent:component,props:{withInput:true},events:{onclose:function(e) {let $el = this; component.confirmWithInput = null},onconfirm:function(e) {let $el = this; component.setGithubRepositoryUrl(e)}},attrs:{placeholder:`${trans(`Github repository url`)}`,message:'PLease paste the Github repository url.'},state:'stnEoOL'});
}let cndakzy = component.githubNotes;
this.setState('st39DXR', cndakzy);
if (cndakzy) { 
let cmpuvYU = this._lc('cZsruU8NQ', {parent:component,events:{onclose:function(e) {let $el = this; component.githubNotes = false}},content:(flkModal) => {let elkG736 = eo('h3',null,null,`class`,`m-y-1`);
text(`Please consider the following notes when pushing to Github.`);
ec('h3');
let elRarxn = eo('ul');
let elUe8XI = eo('li');
text(`Make sure you organize your files in its proper folder, i.e don't put different types in folder.`);
ec('li');
let els46vK = eo('li');
text(`Always commit the changes you made in the file and write a proper commit message based on your change, i.e
            DO not use`);
let elaVFp4 = eo('code',null,null,`class`,`ml-2`);
text(`git add .`);
ec('code');
text(`but use`);
let elfvl3v = eo('code',null,null,`class`,`mx-2`);
text(`git add my-file.html`);
ec('code');
text(`instead.`);
ec('li');
let el7TXt0 = eo('li');
text(`Always write a`);
let elhVpGz = eo('strong',null,null,`class`,`mx-2`);
text(`Change Log`);
ec('strong');
text(`at the end of the readme.md file to define what updates have you done in the repository.`);
ec('li');
ec('ul');
},attrs:{header:'GITHUB notes'},state:'st39DXR'});
}
                    this.isReadyToGo();
                }
        });