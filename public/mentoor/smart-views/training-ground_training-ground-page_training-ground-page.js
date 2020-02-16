_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {cNb5Zx6tS:'training-ground-header',cYUSOPc3l:'flk-spinner',cX75L_rni:'gold-icon',cWpE_EVV9:'layout'},
                render: function (component) {
                    let cmpRAUn = this._lc('cWpE_EVV9', {parent:component,content:(layout) => {let cmp7qEM = this._lc('cNb5Zx6tS', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndeHSF = ! component.user.isLoggedIn();
this.setState('stLwMu5', cndeHSF);
let cndtPwt = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('stB8PEe', cndtPwt);
let cndmYGG = component.isLoading;
this.setState('stST2Ff', cndmYGG);
let cndAiKz = !(cndeHSF||cndtPwt||cndmYGG);
this.setState('sthGBaR', cndAiKz);
if (cndeHSF) { 
let elxk6aj = eo('a','uBqf',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let elvvhND = eo('i','Rw2f',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndtPwt) { 
let el9kzl8 = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndmYGG) { 
let cmpcNrN = this._lc('cYUSOPc3l', {parent:component,parentTop:layout,state:'stST2Ff'});
}else { 
let elJGWf8 = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let iiEBn0 = '4vBgweA' + i;
let elTl7D3 = eo('div','5cOMVl317ghS' + i+iiEBn0,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elBHT8E = eo('div','b3Off'+iiEBn0,null,`class`,`card`);
let elsfZgf = eo('h3','8pvff'+iiEBn0,null,`class`,`card-header text-center`);
let ellBfsa = ev('img','hrXff'+iiEBn0,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let elDQRd2 = eo('span','M3lff'+iiEBn0);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elX0E8Q = eo('div','xC9ff'+iiEBn0,null,`class`,`card-body`);
let elifciD = eo('div','391ff'+iiEBn0,null,`class`,`text-center image-wrapper`);
let elk6eRJ = ev('img','hanff'+iiEBn0,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let elcJmck = eo('div','mW4ff'+iiEBn0,null,`class`,`text-center m-t-1`);
let el6kUT3 = eo('div','glAff'+iiEBn0,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmpD58K = this._lc('cX75L_rni', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'sthGBaR',insideLoop:true,index:"" +iiEBn0});
ec('div');
let elt9u2o = eo('a','4tyff'+iiEBn0,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let el9wWyV = eo('div','etmff'+iiEBn0,null,`class`,`card-hover`);
let elhq5Xd = eo('span','S05ff'+iiEBn0,null,`class`,`arrow`);
ec('span');
let eljVeol = eo('p','72jff'+iiEBn0);
text(trainingGround.shortDescription);
ec('p');
let elvYADN = eo('div','LmLff'+iiEBn0,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iiMJiW = 'pAun0TI' + i;
let eloOyxa = eo('div','X6hIs_iIahKo' + i+iiEBn0+iiMJiW,null,`class`,`technology`);
let elxXwDW = ev('img','cbTff'+iiEBn0+iiMJiW,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elnJJL4 = eo('div','SWVff'+iiEBn0+iiMJiW,null,`class`,`bold indigo-text`);
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