_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {cpUNSae3Y:'cocktail-modal'},
                render: function (component) {
                    let elUKKg2 = eo('h1');
let elL2um_ = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elTAw9g = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cndRSAl = component.user.isLoggedIn();
this.setState('stgTsl3', cndRSAl);
if (cndRSAl) { 
let eltsBAh = eo('button','_rWf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cndjLMU = component.openCocktailsModal;
this.setState('styjs2y', cndjLMU);
if (cndjLMU) { 
let cmp4Z_9 = this._lc('cpUNSae3Y', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'styjs2y'});
}
                    this.isReadyToGo();
                }
        });