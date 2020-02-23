_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {cTZLzyqfb:'training-ground-header',coXjv0s4K:'flk-spinner',cqZZoAvgU:'gold-icon',cC5lFzq9D:'layout'},
                render: function (component) {
                    let cmpfGpD = this._lc('cC5lFzq9D', {parent:component,content:(layout) => {let cmpsfl6 = this._lc('cTZLzyqfb', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cnd9jFT = ! component.user.isLoggedIn();
this.setState('stvY0EK', cnd9jFT);
let cndQm05 = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('sty_5Q5', cndQm05);
let cndwFa8 = component.isLoading;
this.setState('strCea7', cndwFa8);
let cndqoMk = !(cnd9jFT||cndQm05||cndwFa8);
this.setState('stqW39R', cndqoMk);
if (cnd9jFT) { 
let elUWBrH = eo('a','DSwf',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let elEIfws = eo('i','RsCf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndQm05) { 
let elrYf0e = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndwFa8) { 
let cmpq7Ab = this._lc('coXjv0s4K', {parent:component,parentTop:layout,state:'strCea7'});
}else { 
let elmuBai = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let ii9sVA = 'AvviwTF' + i;
let eldzQwV = eo('div','SZZgDB_YiaBO' + i+ii9sVA,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elCbNbt = eo('div','nbPff'+ii9sVA,null,`class`,`card`);
let eln_kqg = eo('h3','t1aff'+ii9sVA,null,`class`,`card-header text-center`);
let el3BCyB = ev('img','jB1ff'+ii9sVA,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let elQ3xzZ = eo('span','g9Zff'+ii9sVA);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elTpj2S = eo('div','4jeff'+ii9sVA,null,`class`,`card-body`);
let elQ0zLm = eo('div','hayff'+ii9sVA,null,`class`,`text-center image-wrapper`);
let elznwnn = ev('img','t9uff'+ii9sVA,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let elj9zPc = eo('div','JHTff'+ii9sVA,null,`class`,`text-center m-t-1`);
let el032m1 = eo('div','NdCff'+ii9sVA,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmpK29K = this._lc('cqZZoAvgU', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'stqW39R',insideLoop:true,index:"" +ii9sVA});
ec('div');
let elF7SHp = eo('a','3pSff'+ii9sVA,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let elx3Kbv = eo('div','gzrff'+ii9sVA,null,`class`,`card-hover`);
let elffD4W = eo('span','Eqaff'+ii9sVA,null,`class`,`arrow`);
ec('span');
let el_Y2Pw = eo('p','o83ff'+ii9sVA);
text(trainingGround.shortDescription);
ec('p');
let elPUXLH = eo('div','JnHff'+ii9sVA,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iitEzn = '2iA4nKT' + i;
let elewYdO = eo('div','fz_auxwOjiPc' + i+ii9sVA+iitEzn,null,`class`,`technology`);
let elUdpVl = ev('img','q8Zff'+ii9sVA+iitEzn,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let eldBy1n = eo('div','lSZff'+ii9sVA+iitEzn,null,`class`,`bold indigo-text`);
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