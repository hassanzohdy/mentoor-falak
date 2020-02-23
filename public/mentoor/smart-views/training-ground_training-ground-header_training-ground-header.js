_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {ce6X7nlRe:'cocktail-modal'},
                render: function (component) {
                    let eljyTG_ = eo('h1');
let elh3MwO = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elhUD3f = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cndW_zD = component.user.isLoggedIn();
this.setState('stJ9n0v', cndW_zD);
if (cndW_zD) { 
let elLfj8L = eo('button','oppf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cndrfk4 = component.openCocktailsModal;
this.setState('stRfZba', cndrfk4);
if (cndrfk4) { 
let cmpoQbV = this._lc('ce6X7nlRe', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'stRfZba'});
}
                    this.isReadyToGo();
                }
        });