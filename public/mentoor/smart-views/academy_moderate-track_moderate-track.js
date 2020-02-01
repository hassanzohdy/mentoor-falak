_Component({
                selector: 'moderate-track',
                c: 'ModerateTrack', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','track','adminUsersService'],
                children: {cqCS9WpU6:'flk-dropdown-list',cV6aTvRPe:'flk-modal'},
                render: function (component) {
                    let cndkARJ = component.user.accountType == 'admin';
this.setState('stj2Elf', cndkARJ);
if (cndkARJ) { 
let elqB84u = eo('div','Spxf',null,`class`,`text-center`);
let elheOhV = eo('button','s3mf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal = true;}]},`type`,`button`,`class`,`btn btn-sm bold btn-info`);
text(`Assign
            moderator.`);
ec('button');
ec('div');
}let cndXyc1 = component.openModal;
this.setState('stMjxN_', cndXyc1);
if (cndXyc1) { 
let cmpBjwQ = this._lc('cV6aTvRPe', {parent:component,content:(flkModal) => {let elY7TJa = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;}]});

                if (! elY7TJa.formHandler) {
                    window.cfrmdlr = elY7TJa.formHandler = new FormHandler(elY7TJa, component);
                } else {
                    window.cfrmdlr = elY7TJa.formHandler;
                }
            let elobHDf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.track.id = this.value;}]},`value`,`${fval(component.track.id)}`,`name`,`${(`trackId`).toInputName()}`,`type`,`hidden`);
elobHDf.value = fval(component.track.id);
let cmpMIMl = this._lc('cqCS9WpU6', {parent:component,parentTop:flkModal,props:{lazyLoading:true,multiple:true,service:component.adminUsersService},boolAttrs:{multiple:true},attrs:{name:`${(`moderators`).toInputName()}`},state:'stMjxN_'});
let elrP_0T = eo('div',null,null,`class`,`text-center`);
let eldTB5D = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{id:'moderators-modal',header:'Manage moderators'},state:'stMjxN_'});
}
                    this.isReadyToGo();
                }
        });