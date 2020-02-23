_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {cJ7rP1S9x:'cocktail-modal'},
                render: function (component) {
                    let elLqPeW = eo('h1');
let elHHZ9Z = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elIuVYE = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cndc6Jt = component.user.isLoggedIn();
this.setState('stPsDII', cndc6Jt);
if (cndc6Jt) { 
let elotGL7 = eo('button','pyFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cndcu5g = component.openCocktailsModal;
this.setState('sthtcV7', cndcu5g);
if (cndcu5g) { 
let cmpTVy3 = this._lc('cJ7rP1S9x', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'sthtcV7'});
}
                    this.isReadyToGo();
                }
        });