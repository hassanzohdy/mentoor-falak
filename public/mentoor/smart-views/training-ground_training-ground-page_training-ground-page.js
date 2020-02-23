_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {cBqeFNM0h:'training-ground-header',cHsZ0YmJb:'flk-spinner',c1YKUCkct:'gold-icon',ceCucrQff:'layout'},
                render: function (component) {
                    let cmpEdVs = this._lc('ceCucrQff', {parent:component,content:(layout) => {let cmp74Tk = this._lc('cBqeFNM0h', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndsRt_ = ! component.user.isLoggedIn();
this.setState('st4CO7I', cndsRt_);
let cndcsJZ = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('stJZN3k', cndcsJZ);
let cndoQse = component.isLoading;
this.setState('st4Ay2T', cndoQse);
let cndGOGL = !(cndsRt_||cndcsJZ||cndoQse);
this.setState('stG1w6C', cndGOGL);
if (cndsRt_) { 
let elYg8gX = eo('a','9tZf',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let elF72MZ = eo('i','zrFf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndcsJZ) { 
let elNgr5_ = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndoQse) { 
let cmpwziI = this._lc('cHsZ0YmJb', {parent:component,parentTop:layout,state:'st4Ay2T'});
}else { 
let el1cz9Z = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let iikmMk = 'RatJGSj' + i;
let elfSLJq = eo('div','V9sIpwvqyrlM' + i+iikmMk,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elpdDvh = eo('div','Z63ff'+iikmMk,null,`class`,`card`);
let elj2Xco = eo('h3','Ixmff'+iikmMk,null,`class`,`card-header text-center`);
let elrcU5x = ev('img','29xff'+iikmMk,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let el1CKJF = eo('span','xP2ff'+iikmMk);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elcMJ_V = eo('div','GUEff'+iikmMk,null,`class`,`card-body`);
let el4FQNz = eo('div','XMGff'+iikmMk,null,`class`,`text-center image-wrapper`);
let elEmbdp = ev('img','DByff'+iikmMk,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let elUEGjh = eo('div','iJgff'+iikmMk,null,`class`,`text-center m-t-1`);
let elUMVGL = eo('div','HaZff'+iikmMk,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmpU_HD = this._lc('c1YKUCkct', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'stG1w6C',insideLoop:true,index:"" +iikmMk});
ec('div');
let elthu_1 = eo('a','ovmff'+iikmMk,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let el3ZIlc = eo('div','Tcqff'+iikmMk,null,`class`,`card-hover`);
let elVWPdk = eo('span','tsUff'+iikmMk,null,`class`,`arrow`);
ec('span');
let elebzlX = eo('p','V_yff'+iikmMk);
text(trainingGround.shortDescription);
ec('p');
let elflfXS = eo('div','1aKff'+iikmMk,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iiFQdv = 'YfPyAno' + i;
let elW65oJ = eo('div','nMnjdivXX4ne' + i+iikmMk+iiFQdv,null,`class`,`technology`);
let el27WTa = ev('img','pyhff'+iikmMk+iiFQdv,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elxgdGK = eo('div','H5Mff'+iikmMk+iiFQdv,null,`class`,`bold indigo-text`);
text(tag.name);
ec('div');
ec('div');
}
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}}});

                    this.isReadyToGo();
                }
        });