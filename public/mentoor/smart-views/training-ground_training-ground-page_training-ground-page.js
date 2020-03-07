_Component({
                selector: 'training-ground-page',
                c: 'TrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['unlockedCocktail','autoOpenCocktailsModal','user','isLoading','trainingGrounds'],
                children: {ckXdo6wTU:'training-ground-header',c8hdmWf1v:'flk-spinner',cjwU8xSyG:'gold-icon',cMDTsad6E:'layout'},
                render: function (component) {
                    let cmp0dXZ = this._lc('cMDTsad6E', {parent:component,content:(layout) => {let cmpY__m = this._lc('ckXdo6wTU', {parent:component,parentTop:layout,props:{autoOpen:component.autoOpenCocktailsModal},events:{onunlock:function(e) {let $el = this; component.unlockedCocktail(e)}}});
let cndMsC9 = ! component.user.isLoggedIn();
this.setState('st73tRV', cndMsC9);
let cndKIZA = Is.empty(component.user.trainingGround) || Is.empty(component.user.trainingGround.cocktailsIds);
this.setState('stv4Yq_', cndKIZA);
let cndL750 = component.isLoading;
this.setState('st3scju', cndL750);
let cndUJ4i = !(cndMsC9||cndKIZA||cndL750);
this.setState('st9dmjO', cndUJ4i);
if (cndMsC9) { 
let elmWMsj = eo('a','1O4f',null,`href`,`/login`,`class`,`bold text-center m-y-2 btn btn-danger`);
let el4cFmE = eo('i','8i3f',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login to get started!`);
ec('a');
}else if (cndKIZA) { 
let eli_WqK = eo('h1',null,null,`class`,`bold text-center m-y-2`);
text(`Please select a career first.`);
ec('h1');
}else if (cndL750) { 
let cmpPMSS = this._lc('c8hdmWf1v', {parent:component,parentTop:layout,state:'st3scju'});
}else { 
let el70YZ7 = eo('div',null,null,`class`,`row`);
for (let i in component.trainingGrounds) {
let trainingGround = component.trainingGrounds[i]; 
 let ii_MQS = 'Qn9AjR4' + i;
let elB5VrY = eo('div','zPJQGxBWL7qG' + i+ii_MQS,null,`class`,`training-ground col col-sm-6 col-md-4 col-lg-3`);
let elMdTfE = eo('div','snXff'+ii_MQS,null,`class`,`card`);
let elw7fV8 = eo('h3','LUXff'+ii_MQS,null,`class`,`card-header text-center`);
let elpT9Ci = ev('img','akSff'+ii_MQS,null,`src`,`${trainingGround.cocktail.icon}`,`class`,`cocktail-image`);
let eleyadO = eo('span','q_Iff'+ii_MQS);
text(trainingGround.cocktail.name);
ec('span');
ec('h3');
let elzWCPC = eo('div','rTkff'+ii_MQS,null,`class`,`card-body`);
let el4QL9y = eo('div','8kEff'+ii_MQS,null,`class`,`text-center image-wrapper`);
let elj9Inx = ev('img','aLXff'+ii_MQS,null,`src`,`${trainingGround.image}`,`class`,`image`,`title`,`${trainingGround.title}`,`alt`,`${trainingGround.title}`);
ec('div');
let elC_9I0 = eo('div','ND5ff'+ii_MQS,null,`class`,`text-center m-t-1`);
let el6fzGK = eo('div','Sk0ff'+ii_MQS,null,`title`,`${trans(`Prize`)}`,`class`,`pink-text prize`);
let cmpBTs1 = this._lc('cjwU8xSyG', {parent:component,parentTop:layout,props:{coins:trainingGround.prize},state:'st9dmjO',insideLoop:true,index:"" +ii_MQS});
ec('div');
let elBsP3u = eo('a','wY8ff'+ii_MQS,null,`href`,`/training-ground/${ trainingGround.id }`,`class`,`bold btn view-btn`);
text(trainingGround.title);
ec('a');
ec('div');
ec('div');
let elGAdk3 = eo('div','E14ff'+ii_MQS,null,`class`,`card-hover`);
let eliMFL2 = eo('span','4yoff'+ii_MQS,null,`class`,`arrow`);
ec('span');
let elum0Mk = eo('p','5Kwff'+ii_MQS);
text(trainingGround.shortDescription);
ec('p');
let elhrOgl = eo('div','DKwff'+ii_MQS,null,`class`,`text-center`);
for (let i in trainingGround.tags) {
let tag = trainingGround.tags[i]; 
 let iizfP1 = 'H1cgaiD' + i;
let elvqrSd = eo('div','EHapoWK9d0Ba' + i+ii_MQS+iizfP1,null,`class`,`technology`);
let elujfvf = ev('img','mjLff'+ii_MQS+iizfP1,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let elLIYGB = eo('div','DIFff'+ii_MQS+iizfP1,null,`class`,`bold indigo-text`);
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