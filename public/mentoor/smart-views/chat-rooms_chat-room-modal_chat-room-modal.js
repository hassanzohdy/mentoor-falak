_Component({
                selector: 'chat-room-modal',
                c: 'ChatRoomModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','submit','formHandler','room','setCurrentSize','sizes','cost','errors','maxMembers','formObject','isValidForm','isLoading'],
                children: {cK6wJz9JI:'flk-dropdown-list',c1JtDnMqq:'gold-icon',cmrSGy97u:'flk-dropdown-list',cJ3kl02fr:'flk-dropdown-list',cidZvew_E:'flk-dropdown-list',cZb2BKSdu:'flk-image-input',c4uIIWqvg:'flk-checkbox',cv0cc8otq:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cv0cc8otq', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elCqyma = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}],onready:[function(e) {var $el = this;component.formHandler = $el.formHandler}]});

                if (! elCqyma.formHandler) {
                    window.cfrmdlr = elCqyma.formHandler = new FormHandler(elCqyma, component);
                } else {
                    window.cfrmdlr = elCqyma.formHandler;
                }
            let elwymxD = eo('div',null,null,`class`,`form-group`);
elwymxD.cls = {'group-error': !!elCqyma.formHandler.getError(`name`) };

            for (let className in elwymxD.cls) {
                elwymxD.classList.toggle(className, elwymxD.cls[className]);
            }  
            let elP5qnt = eo('label',null,null,`for`,`name`);
text(trans('Chat room name'));
let el4ZOi6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvoB7r = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCqyma.formHandler.addError(`name`, 'required', trans('validation.required'));}return elCqyma.formHandler.removeError(`name`);}]},`value`,`${fval(component.room.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Chat room name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elvoB7r.value = fval(component.room.name);
let cnd8LGJ = elCqyma.formHandler.getError(`name`);
this.setState('stvDDuN', cnd8LGJ);
if (cnd8LGJ) { 
let elfPCiG = eo('div','w2kf',null,`class`,`alert alert-danger`);
text(elCqyma.formHandler.getError(`name`));
ec('div');
}ec('div');
let elLT5Di = eo('div',null,null,`class`,`form-group`);
elLT5Di.cls = {'group-error': !!elCqyma.formHandler.getError(`description`) };

            for (let className in elLT5Di.cls) {
                elLT5Di.classList.toggle(className, elLT5Di.cls[className]);
            }  
            let eltZbxi = eo('label',null,null,`for`,`description`);
text(trans('Chat description'));
let elv1AP6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elN_eTX = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCqyma.formHandler.addError(`description`, 'required', trans('validation.required'));}return elCqyma.formHandler.removeError(`description`);}]},`value`,`${fval(component.room.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Chat description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elN_eTX.value = fval(component.room.description);
ec('textarea');
let cnd1uMQ = elCqyma.formHandler.getError(`description`);
this.setState('stmQTO2', cnd1uMQ);
if (cnd1uMQ) { 
let elDlRYa = eo('div','Xnnf',null,`class`,`alert alert-danger`);
text(elCqyma.formHandler.getError(`description`));
ec('div');
}ec('div');
let elezmGA = eo('div',null,null,`class`,`form-group`);
elezmGA.cls = {'group-error': !!elCqyma.formHandler.getError(`rules`) };

            for (let className in elezmGA.cls) {
                elezmGA.classList.toggle(className, elezmGA.cls[className]);
            }  
            let elcw0FC = eo('label',null,null,`for`,`rules`);
text(trans('Chat rules (Markdown)'));
let el2jeOm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcNAlK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.rules = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCqyma.formHandler.addError(`rules`, 'required', trans('validation.required'));}return elCqyma.formHandler.removeError(`rules`);}]},`value`,`${fval(component.room.rules)}`,`name`,`${(`rules`).toInputName()}`,`placeholder`,`${trans(`Chat rules (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`rules`);
elcNAlK.value = fval(component.room.rules);
ec('textarea');
let cnd7Zl5 = elCqyma.formHandler.getError(`rules`);
this.setState('strXIY3', cnd7Zl5);
if (cnd7Zl5) { 
let elF1ARD = eo('div','JUAf',null,`class`,`alert alert-danger`);
text(elCqyma.formHandler.getError(`rules`));
ec('div');
}ec('div');
let el_js8q = eo('div',null,null,`class`,`form-group`);
el_js8q.cls = {'group-error': !!elCqyma.formHandler.getError(`acceptanceCriteria`) };

            for (let className in el_js8q.cls) {
                el_js8q.classList.toggle(className, el_js8q.cls[className]);
            }  
            let eldu_lg = eo('label',null,null,`for`,`acceptanceCriteria`);
text(trans('Chat acceptanceCriteria (Markdown)'));
ec('label');
let elmYfoB = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCriteria = this.value;}]},`value`,`${fval(component.room.acceptanceCriteria)}`,`name`,`${(`acceptanceCriteria`).toInputName()}`,`placeholder`,`${trans(`Write chat criteria as it will be appeared to any applicants to answer what you want from him/her to allow joining the room.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteria`);
elmYfoB.value = fval(component.room.acceptanceCriteria);
ec('textarea');
ec('div');
let eldjWXj = eo('div',null,null,`class`,`row`);
let elEGSyw = eo('div',null,null,`class`,`col-4`);
let elys6IC = eo('div',null,null,`class`,`form-group`);
elys6IC.cls = {'group-error': !!elCqyma.formHandler.getError(`acceptanceCost`) };

            for (let className in elys6IC.cls) {
                elys6IC.classList.toggle(className, elys6IC.cls[className]);
            }  
            let eldDCb_ = eo('label',null,null,`for`,`acceptanceCost`);
text(trans('Acceptance Cost'));
ec('label');
let elwnZvx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCost = this.value;}]},`value`,`${fval(component.room.acceptanceCost)}`,`name`,`${(`acceptanceCost`).toInputName()}`,`placeholder`,`${trans(`Acceptance Cost`)}`,`type`,`number`,`class`,`form-control`,`id`,`acceptanceCost`);
elwnZvx.value = fval(component.room.acceptanceCost);
ec('div');
ec('div');
let elSO8bD = eo('div',null,null,`class`,`col-4`);
let cmpgEBB = this._lc('cK6wJz9JI', {parent:component,parentTop:flkModal,props:{value:component.room.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.setCurrentSize(e.value)}},attrs:{name:`${(`size`).toInputName()}`,label:'Size',class:'form-control'},style:{position:'top'}});
ec('div');
let ellWZFd = eo('div',null,null,`class`,`col-2`);
let elKSGmH = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Cost`);
ec('label');
let elnQXYn = eo('div');
let cndCNw8 = component.cost;
this.setState('stCiYTa', cndCNw8);
if (cndCNw8) { 
let cmpKv7l = this._lc('c1JtDnMqq', {parent:component,parentTop:flkModal,props:{coins:component.cost},state:'stCiYTa'});
}ec('div');
let cnd2uTX = component.errors.cost;
this.setState('st9odOH', cnd2uTX);
if (cnd2uTX) { 
let eljglzg = eo('div','78Qf',null,`class`,`red-text bold`);
text(component.errors.cost);
ec('div');
}ec('div');
let elz2S5m = eo('div',null,null,`class`,`col-2`);
let elVzAR6 = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Max members`);
ec('label');
let cndsUAL = component.maxMembers;
this.setState('stHPJKJ', cndsUAL);
if (cndsUAL) { 
let el4aL4r = eo('div','2g5f',null,`class`,`bold`);
text(component.maxMembers);
ec('div');
}ec('div');
ec('div');
let el5aGyW = eo('div',null,null,`class`,`row`);
let elI0ApG = eo('div',null,null,`class`,`col-4`);
let cmp8Unh = this._lc('cmrSGy97u', {parent:component,parentTop:flkModal,props:{value:component.room.category,items:FLAGS.chatRooms.categories},attrs:{name:`${(`category`).toInputName()}`,label:'Category',class:'form-control'},style:{position:'top'}});
ec('div');
let elXsK2e = eo('div',null,null,`class`,`col-4`);
let cmp3BYb = this._lc('cJ3kl02fr', {parent:component,parentTop:flkModal,props:{value:component.room.language,items:FLAGS.chatRooms.languages},attrs:{name:`${(`language`).toInputName()}`,label:'Language',class:'form-control'},style:{position:'top'}});
ec('div');
let el4BT6r = eo('div',null,null,`class`,`col-4`);
let cmp_R63 = this._lc('cidZvew_E', {parent:component,parentTop:flkModal,props:{value:component.room.type,items:FLAGS.chatRooms.types},attrs:{name:`${(`type`).toInputName()}`,label:'Type',required:'',class:'form-control'},style:{position:'top'}});
ec('div');
ec('div');
let el2___V = eo('div',null,null,`class`,`row m-t-2`);
let elJ2lYC = eo('div',null,null,`class`,`col-6`);
let ela6w_P = eo('label',null,null,`for`,`image`);
text(`Room image`);
ec('label');
let cmpNaJS = this._lc('cZb2BKSdu', {parent:component,parentTop:flkModal,props:{value:component.room.image},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let elD5fuq = eo('div',null,null,`class`,`col-6 bold`);
let cmpBKYZ = this._lc('c4uIIWqvg', {parent:component,parentTop:flkModal,props:{checked:component.room.isPublic},events:{onchange:function(e) {let $el = this; component.room.isPublic = ! component.formObject.isPublic}},boolAttrs:{checked:component.room.isPublic},attrs:{name:`${(`isPublic`).toInputName()}`,label:'Public room',value:1}});
ec('div');
ec('div');
let elCbJ9E = eo('div',null,null,`class`,`text-right`);
let el4EMzY = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`btn btn-sm btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');

                    setTimeout(function () {
                        let $el = elCqyma;
                        component.formHandler = $el.formHandler;
                    }, 20);                
                },attrs:{header:'Chat room'}});

                    this.isReadyToGo();
                }
        });