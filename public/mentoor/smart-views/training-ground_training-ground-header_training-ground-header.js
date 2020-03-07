_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {cbUbi6DFU:'cocktail-modal'},
                render: function (component) {
                    let eljVX2Y = eo('h1');
let elpYFjQ = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elimNyP = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cndzS2d = component.user.isLoggedIn();
this.setState('stDg8Z9', cndzS2d);
if (cndzS2d) { 
let elRt6h3 = eo('button','v1rf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cndYRQh = component.openCocktailsModal;
this.setState('stfen78', cndYRQh);
if (cndYRQh) { 
let cmpUPaa = this._lc('cbUbi6DFU', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'stfen78'});
}
                    this.isReadyToGo();
                }
        });