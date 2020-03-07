_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {cKb3cZVHL:'training-ground-header',cBJo0wUnr:'flk-spinner',cQzUsNyyu:'gold-icon',c4pS6eENj:'layout'},
                render: function (component) {
                    let cmp5ttQ = this._lc('c4pS6eENj', {parent:component,content:(layout) => {let cmpvidX = this._lc('cKb3cZVHL', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndgkUt = ! component.user.isLoggedIn();
this.setState('strWgzL', cndgkUt);
let cndMGAf = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('stQm4ez', cndMGAf);
let cndcyBm = component.isLoading;
this.setState('stslFmH', cndcyBm);
let cndsb2_ = !(cndgkUt||cndMGAf||cndcyBm);
this.setState('stVfToI', cndsb2_);
if (cndgkUt) { 
let el3rJbr = eo('a','ZrAf',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let elCJWig = eo('i','dS3f',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndMGAf) { 
let elHjaer = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndcyBm) { 
let cmpDVpB = this._lc('cBJo0wUnr', {parent:component,parentTop:layout,state:'stslFmH'});
}else { 
let elD4_Fx = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let ii1zZ7 = 'ocD0zOX' + i;
let elqU99K = eo('div','9BbJE0Ej3VQ7' + i+ii1zZ7,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elz27u9 = eo('div','mBPff'+ii1zZ7,null,`class`,`card`);
let elkDvH5 = eo('h3','9KIff'+ii1zZ7,null,`class`,`card-header text-center`);
let elh_NJ0 = ev('img','aO6ff'+ii1zZ7,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let el3LcZp = eo('span','uJ4ff'+ii1zZ7);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elvM1kE = eo('div','fxPff'+ii1zZ7,null,`class`,`card-body`);
let elq7ltj = eo('div','ne6ff'+ii1zZ7,null,`class`,`text-center image-wrapper`);
let elIGmW4 = ev('img','doTff'+ii1zZ7,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let elDxnwb = eo('div','UMTff'+ii1zZ7,null,`class`,`text-center m-t-1`);
let elCgsHD = eo('div','3Gpff'+ii1zZ7,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmplj63 = this._lc('cQzUsNyyu', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'stVfToI',insideLoop:true,index:"" +ii1zZ7});
ec('div');
let elQGJXE = eo('a','n8Iff'+ii1zZ7,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let elXZqrs = eo('div','Ylnff'+ii1zZ7,null,`class`,`card-hover`);
let el8AnMi = eo('span','FY1ff'+ii1zZ7,null,`class`,`arrow`);
ec('span');
let el2jSFM = eo('p','7_qff'+ii1zZ7);
text(trainingGround.shortDescription);
ec('p');
let elshUD0 = eo('div','mJSff'+ii1zZ7,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iiYmse = 'GI_3cZ7' + i;
let elYUQRU = eo('div','pwoGfDndIIU0' + i+ii1zZ7+iiYmse,null,`class`,`technology`);
let elhsPVX = ev('img','vLvff'+ii1zZ7+iiYmse,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elfOka0 = eo('div','rllff'+ii1zZ7+iiYmse,null,`class`,`bold indigo-text`);
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