_Component({
                selector: 'chat-room-modal',
                c: 'ChatRoomModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','submit','formHandler','room','setCurrentSize','sizes','cost','errors','maxMembers','formObject','isValidForm','isLoading'],
                children: {cZ7L4ikRW:'flk-dropdown-list',cAXvXfCuV:'gold-icon',cXsjxHdZH:'flk-dropdown-list',c0DpGNFfx:'flk-dropdown-list',cvYsU2ru_:'flk-dropdown-list',cFxEunxQ_:'flk-image-input',c5CXcw3lr:'flk-checkbox',cngpFiPuB:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cngpFiPuB', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elYTIGI = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}],onready:[function(e) {var $el = this;component.formHandler = $el.formHandler}]});

                if (! elYTIGI.formHandler) {
                    window.cfrmdlr = elYTIGI.formHandler = new FormHandler(elYTIGI, component);
                } else {
                    window.cfrmdlr = elYTIGI.formHandler;
                }
            let elg0UyB = eo('div',null,null,`class`,`form-group`);
elg0UyB.cls = {'group-error': !!elYTIGI.formHandler.getError(`name`) };

            for (let className in elg0UyB.cls) {
                elg0UyB.classList.toggle(className, elg0UyB.cls[className]);
            }  
            let elitQe6 = eo('label',null,null,`for`,`name`);
text(trans('Chat room name'));
let elSp0Qj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elm8fvq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYTIGI.formHandler.addError(`name`, 'required', trans('validation.required'));}return elYTIGI.formHandler.removeError(`name`);}]},`value`,`${fval(component.room.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Chat room name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elm8fvq.value = fval(component.room.name);
let cndf1y9 = elYTIGI.formHandler.getError(`name`);
this.setState('stp7FXq', cndf1y9);
if (cndf1y9) { 
let elOeUa7 = eo('div','fe0f',null,`class`,`alert alert-danger`);
text(elYTIGI.formHandler.getError(`name`));
ec('div');
}ec('div');
let elvC3_Y = eo('div',null,null,`class`,`form-group`);
elvC3_Y.cls = {'group-error': !!elYTIGI.formHandler.getError(`description`) };

            for (let className in elvC3_Y.cls) {
                elvC3_Y.classList.toggle(className, elvC3_Y.cls[className]);
            }  
            let elsein3 = eo('label',null,null,`for`,`description`);
text(trans('Chat description'));
let elkQ0eA = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGMmm6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYTIGI.formHandler.addError(`description`, 'required', trans('validation.required'));}return elYTIGI.formHandler.removeError(`description`);}]},`value`,`${fval(component.room.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Chat description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elGMmm6.value = fval(component.room.description);
ec('textarea');
let cndxwPE = elYTIGI.formHandler.getError(`description`);
this.setState('st_pSz9', cndxwPE);
if (cndxwPE) { 
let elWb7Nb = eo('div','Qzwf',null,`class`,`alert alert-danger`);
text(elYTIGI.formHandler.getError(`description`));
ec('div');
}ec('div');
let elCQJWi = eo('div',null,null,`class`,`form-group`);
elCQJWi.cls = {'group-error': !!elYTIGI.formHandler.getError(`rules`) };

            for (let className in elCQJWi.cls) {
                elCQJWi.classList.toggle(className, elCQJWi.cls[className]);
            }  
            let elLN3X9 = eo('label',null,null,`for`,`rules`);
text(trans('Chat rules (Markdown)'));
let eluAzGD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpKeCE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.rules = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elYTIGI.formHandler.addError(`rules`, 'required', trans('validation.required'));}return elYTIGI.formHandler.removeError(`rules`);}]},`value`,`${fval(component.room.rules)}`,`name`,`${(`rules`).toInputName()}`,`placeholder`,`${trans(`Chat rules (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`rules`);
elpKeCE.value = fval(component.room.rules);
ec('textarea');
let cnd1QJx = elYTIGI.formHandler.getError(`rules`);
this.setState('stSpDSl', cnd1QJx);
if (cnd1QJx) { 
let elHbpIi = eo('div','6x8f',null,`class`,`alert alert-danger`);
text(elYTIGI.formHandler.getError(`rules`));
ec('div');
}ec('div');
let elV05ag = eo('div',null,null,`class`,`form-group`);
elV05ag.cls = {'group-error': !!elYTIGI.formHandler.getError(`acceptanceCriteria`) };

            for (let className in elV05ag.cls) {
                elV05ag.classList.toggle(className, elV05ag.cls[className]);
            }  
            let elixhWT = eo('label',null,null,`for`,`acceptanceCriteria`);
text(trans('Chat acceptanceCriteria (Markdown)'));
ec('label');
let elCNWUE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCriteria = this.value;}]},`value`,`${fval(component.room.acceptanceCriteria)}`,`name`,`${(`acceptanceCriteria`).toInputName()}`,`placeholder`,`${trans(`Write chat criteria as it will be appeared to any applicants to answer what you want from him/her to allow joining the room.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteria`);
elCNWUE.value = fval(component.room.acceptanceCriteria);
ec('textarea');
ec('div');
let elh0oPB = eo('div',null,null,`class`,`row`);
let ela9Y93 = eo('div',null,null,`class`,`col-4`);
let ellVf0u = eo('div',null,null,`class`,`form-group`);
ellVf0u.cls = {'group-error': !!elYTIGI.formHandler.getError(`acceptanceCost`) };

            for (let className in ellVf0u.cls) {
                ellVf0u.classList.toggle(className, ellVf0u.cls[className]);
            }  
            let elY82qC = eo('label',null,null,`for`,`acceptanceCost`);
text(trans('Acceptance Cost'));
ec('label');
let elkFtkm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCost = this.value;}]},`value`,`${fval(component.room.acceptanceCost)}`,`name`,`${(`acceptanceCost`).toInputName()}`,`placeholder`,`${trans(`Acceptance Cost`)}`,`type`,`number`,`class`,`form-control`,`id`,`acceptanceCost`);
elkFtkm.value = fval(component.room.acceptanceCost);
ec('div');
ec('div');
let el8RJ76 = eo('div',null,null,`class`,`col-4`);
let cmpY6tO = this._lc('cZ7L4ikRW', {parent:component,parentTop:flkModal,props:{value:component.room.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.setCurrentSize(e.value)}},attrs:{name:`${(`size`).toInputName()}`,label:'Size',class:'form-control'},style:{position:'top'}});
ec('div');
let elNsuTC = eo('div',null,null,`class`,`col-2`);
let eleB55m = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Cost`);
ec('label');
let elyqNgT = eo('div');
let cnd2_Fi = component.cost;
this.setState('stpnR6b', cnd2_Fi);
if (cnd2_Fi) { 
let cmpR59s = this._lc('cAXvXfCuV', {parent:component,parentTop:flkModal,props:{coins:component.cost},state:'stpnR6b'});
}ec('div');
let cndqADN = component.errors.cost;
this.setState('st8mljd', cndqADN);
if (cndqADN) { 
let elK15JO = eo('div','iVJf',null,`class`,`red-text bold`);
text(component.errors.cost);
ec('div');
}ec('div');
let elBDOFI = eo('div',null,null,`class`,`col-2`);
let elFYqkr = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Max members`);
ec('label');
let cndB5al = component.maxMembers;
this.setState('stqS5mf', cndB5al);
if (cndB5al) { 
let elCeHTb = eo('div','vwcf',null,`class`,`bold`);
text(component.maxMembers);
ec('div');
}ec('div');
ec('div');
let elc6rsl = eo('div',null,null,`class`,`row`);
let els6eNP = eo('div',null,null,`class`,`col-4`);
let cmpv3CI = this._lc('cXsjxHdZH', {parent:component,parentTop:flkModal,props:{value:component.room.category,items:FLAGS.chatRooms.categories},attrs:{name:`${(`category`).toInputName()}`,label:'Category',class:'form-control'},style:{position:'top'}});
ec('div');
let elytKMf = eo('div',null,null,`class`,`col-4`);
let cmpAcLi = this._lc('c0DpGNFfx', {parent:component,parentTop:flkModal,props:{value:component.room.language,items:FLAGS.chatRooms.languages},attrs:{name:`${(`language`).toInputName()}`,label:'Language',class:'form-control'},style:{position:'top'}});
ec('div');
let el_7ytW = eo('div',null,null,`class`,`col-4`);
let cmpxs9B = this._lc('cvYsU2ru_', {parent:component,parentTop:flkModal,props:{value:component.room.type,items:FLAGS.chatRooms.types},attrs:{name:`${(`type`).toInputName()}`,label:'Type',required:'',class:'form-control'},style:{position:'top'}});
ec('div');
ec('div');
let elSr6fE = eo('div',null,null,`class`,`row m-t-2`);
let elc3iCf = eo('div',null,null,`class`,`col-6`);
let elWU2Pm = eo('label',null,null,`for`,`image`);
text(`Room image`);
ec('label');
let cmpoKKq = this._lc('cFxEunxQ_', {parent:component,parentTop:flkModal,props:{value:component.room.image},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let el56l70 = eo('div',null,null,`class`,`col-6 bold`);
let cmp2ip9 = this._lc('c5CXcw3lr', {parent:component,parentTop:flkModal,props:{checked:component.room.isPublic},events:{onchange:function(e) {let $el = this; component.room.isPublic = ! component.formObject.isPublic}},boolAttrs:{checked:component.room.isPublic},attrs:{name:`${(`isPublic`).toInputName()}`,label:'Public room',value:1}});
ec('div');
ec('div');
let el_lv6h = eo('div',null,null,`class`,`text-right`);
let elKBZzS = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`btn btn-sm btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');

                    setTimeout(function () {
                        let $el = elYTIGI;
                        component.formHandler = $el.formHandler;
                    }, 20);                
                },attrs:{header:'Chat room'}});

                    this.isReadyToGo();
                }
        });