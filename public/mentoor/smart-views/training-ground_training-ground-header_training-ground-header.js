_Component({
                selector: 'training-ground-header',
                c: 'TrainingGroundHeader', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openCocktailsModal','onUnlock'],
                children: {cc6ZSgS0o:'cocktail-modal'},
                render: function (component) {
                    let elCXLJt = eo('h1');
let elBZ6B3 = ev('img',null,null,`src`,`${assets('images/target.png')}`,`class`,`v-top target-icon medium mr-2`);
let elQFWAG = eo('div',null,null,`class`,`d-inline-block`);
text(`Training ground`);
let cnd1yjd = component.user.isLoggedIn();
this.setState('staTgXI', cnd1yjd);
if (cnd1yjd) { 
let elj4q6t = eo('button','HWnf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openCocktailsModal = true;}]},`class`,`new bold m-l-1`);
text(`Careers list`);
ec('button');
}ec('div');
ec('h1');
let cnd8ssn = component.openCocktailsModal;
this.setState('stzY9Qk', cnd8ssn);
if (cnd8ssn) { 
let cmpB08X = this._lc('cc6ZSgS0o', {parent:component,events:{onunlock:function(e) {let $el = this; component.onUnlock(e)},onclose:function(e) {let $el = this; component.openCocktailsModal = null}},state:'stzY9Qk'});
}
                    this.isReadyToGo();
                }
        });