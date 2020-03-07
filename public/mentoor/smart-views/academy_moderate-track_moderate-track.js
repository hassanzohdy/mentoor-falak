_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {coNmzdfFX:'flk-dropdown-list',czS0Gle2t:'flk-modal'},
                render: function (component) {
                    let cndPltm = component.user.accountType == 'admin';
this.setState('st19EtS', cndPltm);
if (cndPltm) { 
let elIBKHl = eo('div','tL4f',null,`class`,`text-center`);
let elwWd9m = eo('button','Jptf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndeGkV = component.openModal;
this.setState('stDVlhz', cndeGkV);
if (cndeGkV) { 
let cmpABVJ = this._lc('czS0Gle2t', {parent:component,content:(flkModal) => {let elNBM79 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elNBM79.formHandler) {
                    window.cfrmdlr = elNBM79.formHandler = new FormHandler(elNBM79, component);
                } else {
                    window.cfrmdlr = elNBM79.formHandler;
                }
            let elbNtA6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elbNtA6.value = fval(component.track.id);
let cmpqU1Z = this._lc('coNmzdfFX', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'stDVlhz'});
let elGVGfW = eo('div',null,null,`class`,`text-center`);
let elwEU_0 = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'stDVlhz'});
}
                    this.isReadyToGo();
                }
        });