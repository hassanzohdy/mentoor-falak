_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {c3mYMaz1G:'training-ground-header',ctePLx4jh:'flk-spinner',cysHNPFsr:'gold-icon',coPzQY07M:'layout'},
                render: function (component) {
                    let cmp4UlP = this._lc('coPzQY07M', {parent:component,content:(layout) => {let cmpjNxW = this._lc('c3mYMaz1G', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndJyBu = ! component.user.isLoggedIn();
this.setState('stfIGwY', cndJyBu);
let cndCi5X = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('st3bieT', cndCi5X);
let cndoNO9 = component.isLoading;
this.setState('stLIxbf', cndoNO9);
let cndf0bN = !(cndJyBu||cndCi5X||cndoNO9);
this.setState('stpKe2l', cndf0bN);
if (cndJyBu) { 
let elxkV3r = eo('a','6lKf',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let elJrIII = eo('i','Fx0f',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndCi5X) { 
let elWJ7Yc = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndoNO9) { 
let cmpBbNk = this._lc('ctePLx4jh', {parent:component,parentTop:layout,state:'stLIxbf'});
}else { 
let eld5fy5 = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let iiDGD8 = 'zv4bWZ7' + i;
let els_CrL = eo('div','ARrp8NodBz80' + i+iiDGD8,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elHGI_w = eo('div','ezYff'+iiDGD8,null,`class`,`card`);
let eljn5HX = eo('h3','ocoff'+iiDGD8,null,`class`,`card-header text-center`);
let elYoA_b = ev('img','bugff'+iiDGD8,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let elbX3Ks = eo('span','_doff'+iiDGD8);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elwDQPC = eo('div','8xsff'+iiDGD8,null,`class`,`card-body`);
let elrAlTI = eo('div','IvNff'+iiDGD8,null,`class`,`text-center image-wrapper`);
let el8sixz = ev('img','Oq1ff'+iiDGD8,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let el2kcGn = eo('div','Uesff'+iiDGD8,null,`class`,`text-center m-t-1`);
let elIY02j = eo('div','jVbff'+iiDGD8,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmpWHoI = this._lc('cysHNPFsr', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'stpKe2l',insideLoop:true,index:"" +iiDGD8});
ec('div');
let elauGsu = eo('a','7E0ff'+iiDGD8,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let elI3zuR = eo('div','5I9ff'+iiDGD8,null,`class`,`card-hover`);
let elDiWx3 = eo('span','AGMff'+iiDGD8,null,`class`,`arrow`);
ec('span');
let elrqqBw = eo('p','CGgff'+iiDGD8);
text(trainingGround.shortDescription);
ec('p');
let elVoSEm = eo('div','OgIff'+iiDGD8,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iiL0cy = 'REa6oFQ' + i;
let elO0gmi = eo('div','6A_73EUqmv5T' + i+iiDGD8+iiL0cy,null,`class`,`technology`);
let elCXHjq = ev('img','AFjff'+iiDGD8+iiL0cy,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let eligp0V = eo('div','4AKff'+iiDGD8+iiL0cy,null,`class`,`bold indigo-text`);
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