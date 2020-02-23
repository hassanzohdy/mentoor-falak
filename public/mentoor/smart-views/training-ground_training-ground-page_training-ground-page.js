_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {cjH_bjhcq:'training-ground-header',cL7__yjCq:'flk-spinner',coC9gnxjw:'gold-icon',cYh_07Q03:'layout'},
                render: function (component) {
                    let cmpM8PW = this._lc('cYh_07Q03', {parent:component,content:(layout) => {let cmpYwMO = this._lc('cjH_bjhcq', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndqmAM = ! component.user.isLoggedIn();
this.setState('stziWOT', cndqmAM);
let cndhx2K = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('stRFs62', cndhx2K);
let cndqyfT = component.isLoading;
this.setState('stcs8P4', cndqyfT);
let cndNizs = !(cndqmAM||cndhx2K||cndqyfT);
this.setState('st8nOqy', cndNizs);
if (cndqmAM) { 
let elgOHvR = eo('a','eIdf',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let elfwKfh = eo('i','D1vf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndhx2K) { 
let elOSBzW = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndqyfT) { 
let cmpSKuE = this._lc('cL7__yjCq', {parent:component,parentTop:layout,state:'stcs8P4'});
}else { 
let elL3Qlh = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let iiAyR0 = 'yJJMzge' + i;
let elLJf9D = eo('div','Ld663wzvlgQE' + i+iiAyR0,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elYgWFU = eo('div','9sqff'+iiAyR0,null,`class`,`card`);
let elJl47c = eo('h3','Ri5ff'+iiAyR0,null,`class`,`card-header text-center`);
let el8LqAQ = ev('img','177ff'+iiAyR0,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let elnr99T = eo('span','z_fff'+iiAyR0);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let eldDDai = eo('div','v9hff'+iiAyR0,null,`class`,`card-body`);
let elnskrY = eo('div','05Yff'+iiAyR0,null,`class`,`text-center image-wrapper`);
let el8NqFj = ev('img','Vjmff'+iiAyR0,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let elU5LIs = eo('div','lFKff'+iiAyR0,null,`class`,`text-center m-t-1`);
let elbmXvm = eo('div','Qtmff'+iiAyR0,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmpgg2k = this._lc('coC9gnxjw', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'st8nOqy',insideLoop:true,index:"" +iiAyR0});
ec('div');
let el6nq5Q = eo('a','N4xff'+iiAyR0,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let elVyqvK = eo('div','Pmiff'+iiAyR0,null,`class`,`card-hover`);
let elDC0VC = eo('span','VrBff'+iiAyR0,null,`class`,`arrow`);
ec('span');
let elNybs2 = eo('p','WaRff'+iiAyR0);
text(trainingGround.shortDescription);
ec('p');
let eloRNUw = eo('div','AKrff'+iiAyR0,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iipHyU = 'ECvcVCO' + i;
let el6JVSx = eo('div','eb1VXxHdoyBV' + i+iiAyR0+iipHyU,null,`class`,`technology`);
let elL3XJ2 = ev('img','MV4ff'+iiAyR0+iipHyU,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elwUPYM = eo('div','z72ff'+iiAyR0+iipHyU,null,`class`,`bold indigo-text`);
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