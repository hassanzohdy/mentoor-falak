_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {cBEGMQp4m:'cocktail-modal'},
                render: function (component) {
                    let eldrVoa = eo('h1');
let eli0JVW = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elTxADQ = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cnd1sF_ = component.user.isLoggedIn();
this.setState('stcJdCB', cnd1sF_);
if (cnd1sF_) { 
let el7T9cj = eo('button','6Nrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cndVa7v = component.openCocktailsModal;
this.setState('stC4YQC', cndVa7v);
if (cndVa7v) { 
let cmp8RcL = this._lc('cBEGMQp4m', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'stC4YQC'});
}
                    this.isReadyToGo();
                }
        });