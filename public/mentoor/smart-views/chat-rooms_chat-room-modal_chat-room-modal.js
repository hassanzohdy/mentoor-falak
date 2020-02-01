_Component({
                selector: 'chat-room-modal',
                c: 'ChatRoomModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','submit','formHandler','room','setCurrentSize','sizes','cost','errors','maxMembers','formObject','isValidForm','isLoading'],
                children: {c4xxl2xDL:'flk-dropdown-list',c_6eR_vXn:'gold-icon',c7L_ADUNn:'flk-dropdown-list',cujFHWacH:'flk-dropdown-list',cXGuvawwN:'flk-dropdown-list',cFpLCPFX8:'flk-image-input',cSnshLA36:'flk-checkbox',cAfi0r6B2:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cAfi0r6B2', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elUjWdH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}],onready:[function(e) {var $el = this;component.formHandler = $el.formHandler}]});

                if (! elUjWdH.formHandler) {
                    window.cfrmdlr = elUjWdH.formHandler = new FormHandler(elUjWdH, component);
                } else {
                    window.cfrmdlr = elUjWdH.formHandler;
                }
            let elPGVAr = eo('div',null,null,`class`,`form-group`);
elPGVAr.cls = {'group-error': !!elUjWdH.formHandler.getError(`name`) };

            for (let className in elPGVAr.cls) {
                elPGVAr.classList.toggle(className, elPGVAr.cls[className]);
            }  
            let elkCRqH = eo('label',null,null,`for`,`name`);
text(trans('Chat room name'));
let elYYm1D = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDIQ_Y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUjWdH.formHandler.addError(`name`, 'required', trans('validation.required'));}return elUjWdH.formHandler.removeError(`name`);}]},`value`,`${fval(component.room.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Chat room name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elDIQ_Y.value = fval(component.room.name);
let cnduxTc = elUjWdH.formHandler.getError(`name`);
this.setState('stn3Yv_', cnduxTc);
if (cnduxTc) { 
let elxgSyM = eo('div','JOjf',null,`class`,`alert alert-danger`);
text(elUjWdH.formHandler.getError(`name`));
ec('div');
}ec('div');
let elQWj0_ = eo('div',null,null,`class`,`form-group`);
elQWj0_.cls = {'group-error': !!elUjWdH.formHandler.getError(`description`) };

            for (let className in elQWj0_.cls) {
                elQWj0_.classList.toggle(className, elQWj0_.cls[className]);
            }  
            let el3RL4R = eo('label',null,null,`for`,`description`);
text(trans('Chat description'));
let elrOC_S = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGvp0J = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUjWdH.formHandler.addError(`description`, 'required', trans('validation.required'));}return elUjWdH.formHandler.removeError(`description`);}]},`value`,`${fval(component.room.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Chat description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elGvp0J.value = fval(component.room.description);
ec('textarea');
let cndfkqr = elUjWdH.formHandler.getError(`description`);
this.setState('st54eb8', cndfkqr);
if (cndfkqr) { 
let elyxYE1 = eo('div','WSdf',null,`class`,`alert alert-danger`);
text(elUjWdH.formHandler.getError(`description`));
ec('div');
}ec('div');
let elsMBuP = eo('div',null,null,`class`,`form-group`);
elsMBuP.cls = {'group-error': !!elUjWdH.formHandler.getError(`rules`) };

            for (let className in elsMBuP.cls) {
                elsMBuP.classList.toggle(className, elsMBuP.cls[className]);
            }  
            let elQ2cuV = eo('label',null,null,`for`,`rules`);
text(trans('Chat rules (Markdown)'));
let elfYmEg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elm63m6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.rules = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUjWdH.formHandler.addError(`rules`, 'required', trans('validation.required'));}return elUjWdH.formHandler.removeError(`rules`);}]},`value`,`${fval(component.room.rules)}`,`name`,`${(`rules`).toInputName()}`,`placeholder`,`${trans(`Chat rules (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`rules`);
elm63m6.value = fval(component.room.rules);
ec('textarea');
let cndhmMH = elUjWdH.formHandler.getError(`rules`);
this.setState('stU5RIx', cndhmMH);
if (cndhmMH) { 
let elh8rSX = eo('div','MWHf',null,`class`,`alert alert-danger`);
text(elUjWdH.formHandler.getError(`rules`));
ec('div');
}ec('div');
let elM3oW1 = eo('div',null,null,`class`,`form-group`);
elM3oW1.cls = {'group-error': !!elUjWdH.formHandler.getError(`acceptanceCriteria`) };

            for (let className in elM3oW1.cls) {
                elM3oW1.classList.toggle(className, elM3oW1.cls[className]);
            }  
            let el6bugV = eo('label',null,null,`for`,`acceptanceCriteria`);
text(trans('Chat acceptanceCriteria (Markdown)'));
ec('label');
let el9Z_2o = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCriteria = this.value;}]},`value`,`${fval(component.room.acceptanceCriteria)}`,`name`,`${(`acceptanceCriteria`).toInputName()}`,`placeholder`,`${trans(`Write chat criteria as it will be appeared to any applicants to answer what you want from him/her to allow joining the room.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteria`);
el9Z_2o.value = fval(component.room.acceptanceCriteria);
ec('textarea');
ec('div');
let elxXP5r = eo('div',null,null,`class`,`row`);
let elr50Te = eo('div',null,null,`class`,`col-4`);
let elGFVpz = eo('div',null,null,`class`,`form-group`);
elGFVpz.cls = {'group-error': !!elUjWdH.formHandler.getError(`acceptanceCost`) };

            for (let className in elGFVpz.cls) {
                elGFVpz.classList.toggle(className, elGFVpz.cls[className]);
            }  
            let elSiM1N = eo('label',null,null,`for`,`acceptanceCost`);
text(trans('Acceptance Cost'));
ec('label');
let elWRnLG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCost = this.value;}]},`value`,`${fval(component.room.acceptanceCost)}`,`name`,`${(`acceptanceCost`).toInputName()}`,`placeholder`,`${trans(`Acceptance Cost`)}`,`type`,`number`,`class`,`form-control`,`id`,`acceptanceCost`);
elWRnLG.value = fval(component.room.acceptanceCost);
ec('div');
ec('div');
let elceDEn = eo('div',null,null,`class`,`col-4`);
let cmpcNuP = this._lc('c4xxl2xDL', {parent:component,parentTop:flkModal,props:{value:component.room.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.setCurrentSize(e.value)}},attrs:{name:`${(`size`).toInputName()}`,label:'Size',class:'form-control'},style:{position:'top'}});
ec('div');
let elggWO_ = eo('div',null,null,`class`,`col-2`);
let elPLPkK = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Cost`);
ec('label');
let elKduDX = eo('div');
let cndUU4y = component.cost;
this.setState('stZArBE', cndUU4y);
if (cndUU4y) { 
let cmpu0Ct = this._lc('c_6eR_vXn', {parent:component,parentTop:flkModal,props:{coins:component.cost},state:'stZArBE'});
}ec('div');
let cndrdbt = component.errors.cost;
this.setState('stMT6so', cndrdbt);
if (cndrdbt) { 
let el7m98O = eo('div','_cff',null,`class`,`red-text bold`);
text(component.errors.cost);
ec('div');
}ec('div');
let elWo7RA = eo('div',null,null,`class`,`col-2`);
let el2kUjk = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Max members`);
ec('label');
let cndakOV = component.maxMembers;
this.setState('st7ohX6', cndakOV);
if (cndakOV) { 
let elM_I9O = eo('div','qjHf',null,`class`,`bold`);
text(component.maxMembers);
ec('div');
}ec('div');
ec('div');
let elUDHB5 = eo('div',null,null,`class`,`row`);
let elI8ZRJ = eo('div',null,null,`class`,`col-4`);
let cmpN91w = this._lc('c7L_ADUNn', {parent:component,parentTop:flkModal,props:{value:component.room.category,items:FLAGS.chatRooms.categories},attrs:{name:`${(`category`).toInputName()}`,label:'Category',class:'form-control'},style:{position:'top'}});
ec('div');
let elzC47f = eo('div',null,null,`class`,`col-4`);
let cmpQt25 = this._lc('cujFHWacH', {parent:component,parentTop:flkModal,props:{value:component.room.language,items:FLAGS.chatRooms.languages},attrs:{name:`${(`language`).toInputName()}`,label:'Language',class:'form-control'},style:{position:'top'}});
ec('div');
let elRPe3Z = eo('div',null,null,`class`,`col-4`);
let cmpUtaJ = this._lc('cXGuvawwN', {parent:component,parentTop:flkModal,props:{value:component.room.type,items:FLAGS.chatRooms.types},attrs:{name:`${(`type`).toInputName()}`,label:'Type',required:'',class:'form-control'},style:{position:'top'}});
ec('div');
ec('div');
let elmviOq = eo('div',null,null,`class`,`row m-t-2`);
let elBZxFc = eo('div',null,null,`class`,`col-6`);
let elbpY5X = eo('label',null,null,`for`,`image`);
text(`Room image`);
ec('label');
let cmpu6Dr = this._lc('cFpLCPFX8', {parent:component,parentTop:flkModal,props:{value:component.room.image},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let elZAzUV = eo('div',null,null,`class`,`col-6 bold`);
let cmpFCBZ = this._lc('cSnshLA36', {parent:component,parentTop:flkModal,props:{checked:component.room.isPublic},events:{onchange:function(e) {let $el = this; component.room.isPublic = ! component.formObject.isPublic}},boolAttrs:{checked:component.room.isPublic},attrs:{name:`${(`isPublic`).toInputName()}`,label:'Public room',value:1}});
ec('div');
ec('div');
let elJOKah = eo('div',null,null,`class`,`text-right`);
let elUp3Cm = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`btn btn-sm btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');

                    setTimeout(function () {
                        let $el = elUjWdH;
                        component.formHandler = $el.formHandler;
                    }, 20);                
                },attrs:{header:'Chat room'}});

                    this.isReadyToGo();
                }
        });