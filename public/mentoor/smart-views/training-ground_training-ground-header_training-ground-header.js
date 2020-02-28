_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {czE3EPiP8:'cocktail-modal'},
                render: function (component) {
                    let elOyjjx = eo('h1');
let elsd8C0 = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elVeIXN = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cndf90A = component.user.isLoggedIn();
this.setState('stM_OCT', cndf90A);
if (cndf90A) { 
let eluWiWD = eo('button','AlMf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cnd3eLl = component.openCocktailsModal;
this.setState('sttkdnV', cnd3eLl);
if (cnd3eLl) { 
let cmpxY8P = this._lc('czE3EPiP8', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'sttkdnV'});
}
                    this.isReadyToGo();
                }
        });