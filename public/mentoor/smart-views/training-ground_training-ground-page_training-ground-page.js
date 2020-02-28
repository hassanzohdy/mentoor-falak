_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {cqfN2k4dX:'training-ground-header',cFTGuxPDR:'flk-spinner',cHjeKeEvl:'gold-icon',c7kuNiPum:'layout'},
                render: function (component) {
                    let cmphROk = this._lc('c7kuNiPum', {parent:component,content:(layout) => {let cmp2B9F = this._lc('cqfN2k4dX', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndVYKg = ! component.user.isLoggedIn();
this.setState('stFX41n', cndVYKg);
let cndhkop = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('stlCdkz', cndhkop);
let cndHDhG = component.isLoading;
this.setState('stQdAUO', cndHDhG);
let cndLppM = !(cndVYKg||cndhkop||cndHDhG);
this.setState('st1imyL', cndLppM);
if (cndVYKg) { 
let elk6Em0 = eo('a','FFXf',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let el2KFrk = eo('i','dOMf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndhkop) { 
let elhtbD9 = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndHDhG) { 
let cmprRYF = this._lc('cFTGuxPDR', {parent:component,parentTop:layout,state:'stQdAUO'});
}else { 
let elQ5o6j = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let iiNrRv = 'hnnnjxu' + i;
let el6bXLm = eo('div','rNW3e0haOEtO' + i+iiNrRv,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elNCsmA = eo('div','viIff'+iiNrRv,null,`class`,`card`);
let el9Sx0f = eo('h3','Amcff'+iiNrRv,null,`class`,`card-header text-center`);
let elD1Lka = ev('img','7uZff'+iiNrRv,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let el9_Sxq = eo('span','0CDff'+iiNrRv);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elAtfjo = eo('div','xkUff'+iiNrRv,null,`class`,`card-body`);
let el4GSQP = eo('div','gR6ff'+iiNrRv,null,`class`,`text-center image-wrapper`);
let elOmjC1 = ev('img','RYSff'+iiNrRv,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let el6o_uB = eo('div','pG0ff'+iiNrRv,null,`class`,`text-center m-t-1`);
let elK1ZI8 = eo('div','cgfff'+iiNrRv,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmpqgq5 = this._lc('cHjeKeEvl', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'st1imyL',insideLoop:true,index:"" +iiNrRv});
ec('div');
let el9H21I = eo('a','6oEff'+iiNrRv,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let elI6mub = eo('div','5kpff'+iiNrRv,null,`class`,`card-hover`);
let el_YOwq = eo('span','zGAff'+iiNrRv,null,`class`,`arrow`);
ec('span');
let elyAAF1 = eo('p','yKCff'+iiNrRv);
text(trainingGround.shortDescription);
ec('p');
let elnou2Z = eo('div','tf6ff'+iiNrRv,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iiCpyR = '5_ozDFx' + i;
let el1afTt = eo('div','MuXLVz3wFM7A' + i+iiNrRv+iiCpyR,null,`class`,`technology`);
let ely_XZn = ev('img','NDTff'+iiNrRv+iiCpyR,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elYAlKG = eo('div','s6bff'+iiNrRv+iiCpyR,null,`class`,`bold indigo-text`);
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