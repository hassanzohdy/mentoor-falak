_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {cG9V4rGn5:'training-ground-header',clLHJGhl0:'flk-spinner',cqqoogGdx:'gold-icon',cpcWh_Jfo:'layout'},
                render: function (component) {
                    let cmpniOU = this._lc('cpcWh_Jfo', {parent:component,content:(layout) => {let cmp1RSY = this._lc('cG9V4rGn5', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndSDcc = ! component.user.isLoggedIn();
this.setState('stOLwtn', cndSDcc);
let cndu5uN = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('stA52PJ', cndu5uN);
let cndA74m = component.isLoading;
this.setState('stQpMz7', cndA74m);
let cnd5ewG = !(cndSDcc||cndu5uN||cndA74m);
this.setState('stkfb8m', cnd5ewG);
if (cndSDcc) { 
let elVcV8Z = eo('a','h4Of',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let elUml9r = eo('i','Mlif',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndu5uN) { 
let elre8VU = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndA74m) { 
let cmpOlaH = this._lc('clLHJGhl0', {parent:component,parentTop:layout,state:'stQpMz7'});
}else { 
let elN4_Qu = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let iiuIzt = 'eoe9DUg' + i;
let elwq0Ma = eo('div','_HtQq88USJtU' + i+iiuIzt,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elMWrLe = eo('div','Mm6ff'+iiuIzt,null,`class`,`card`);
let elO6TRn = eo('h3','SrEff'+iiuIzt,null,`class`,`card-header text-center`);
let elfxv_e = ev('img','oK_ff'+iiuIzt,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let el_CJst = eo('span','7Bzff'+iiuIzt);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elCkTcb = eo('div','rVmff'+iiuIzt,null,`class`,`card-body`);
let elc__Sb = eo('div','dHkff'+iiuIzt,null,`class`,`text-center image-wrapper`);
let elI1UwI = ev('img','9RSff'+iiuIzt,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let el9vktr = eo('div','auIff'+iiuIzt,null,`class`,`text-center m-t-1`);
let el5H_Ut = eo('div','hocff'+iiuIzt,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmplOmg = this._lc('cqqoogGdx', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'stkfb8m',insideLoop:true,index:"" +iiuIzt});
ec('div');
let elnOyts = eo('a','zorff'+iiuIzt,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let elyQWo5 = eo('div','USOff'+iiuIzt,null,`class`,`card-hover`);
let elWFWKC = eo('span','Iszff'+iiuIzt,null,`class`,`arrow`);
ec('span');
let elFizyC = eo('p','hIXff'+iiuIzt);
text(trainingGround.shortDescription);
ec('p');
let elOU2S4 = eo('div','kGuff'+iiuIzt,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iipFmA = 'p8BzHiu' + i;
let el3ezAZ = eo('div','ImmjPkEPDZfm' + i+iiuIzt+iipFmA,null,`class`,`technology`);
let elb3c5v = ev('img','F3Bff'+iiuIzt+iipFmA,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elDXrSq = eo('div','BuIff'+iiuIzt+iipFmA,null,`class`,`bold indigo-text`);
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