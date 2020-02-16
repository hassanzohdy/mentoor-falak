_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {cXnPmhN0C:'cocktail-modal'},
                render: function (component) {
                    let elGymNy = eo('h1');
let elNLnzd = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elFjrEw = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cndm5ie = component.user.isLoggedIn();
this.setState('stbkFEh', cndm5ie);
if (cndm5ie) { 
let elYRLR5 = eo('button','kpjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cndaXST = component.openCocktailsModal;
this.setState('stLNGXW', cndaXST);
if (cndaXST) { 
let cmpEmHq = this._lc('cXnPmhN0C', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'stLNGXW'});
}
                    this.isReadyToGo();
                }
        });