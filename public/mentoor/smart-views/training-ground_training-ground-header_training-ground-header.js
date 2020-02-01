_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {cUXyqI1Gh:'cocktail-modal'},
                render: function (component) {
                    let elfmkxz = eo('h1');
let elhUtEr = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elcggQc = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cndoj2h = component.user.isLoggedIn();
this.setState('steS7a3', cndoj2h);
if (cndoj2h) { 
let elJtY8r = eo('button','iFvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cndj8fY = component.openCocktailsModal;
this.setState('stVqMH4', cndj8fY);
if (cndj8fY) { 
let cmppGuZ = this._lc('cUXyqI1Gh', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'stVqMH4'});
}
                    this.isReadyToGo();
                }
        });