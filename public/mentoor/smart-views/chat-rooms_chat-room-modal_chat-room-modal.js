_Component({
                selector: 'chat-room-modal',
                c: 'ChatRoomModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','submit','formHandler','room','setCurrentSize','sizes','cost','errors','maxMembers','formObject','isValidForm','isLoading'],
                children: {czraDUVJo:'flk-dropdown-list',cM3LMrNox:'gold-icon',clzbXjpGu:'flk-dropdown-list',cu_tpRwHd:'flk-dropdown-list',cGGdRxLW8:'flk-dropdown-list',cUnvt2xqx:'flk-image-input',crkTFmrNg:'flk-checkbox',cXmq_w7s9:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cXmq_w7s9', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let el5WLSH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}],onready:[function(e) {var $el = this;component.formHandler = $el.formHandler}]});

                if (! el5WLSH.formHandler) {
                    window.cfrmdlr = el5WLSH.formHandler = new FormHandler(el5WLSH, component);
                } else {
                    window.cfrmdlr = el5WLSH.formHandler;
                }
            let el3rYCa = eo('div',null,null,`class`,`form-group`);
el3rYCa.cls = {'group-error': !!el5WLSH.formHandler.getError(`name`) };

            for (let className in el3rYCa.cls) {
                el3rYCa.classList.toggle(className, el3rYCa.cls[className]);
            }  
            let elNEbjV = eo('label',null,null,`for`,`name`);
text(trans('Chat room name'));
let el6_S5S = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elupFjl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5WLSH.formHandler.addError(`name`, 'required', trans('validation.required'));}return el5WLSH.formHandler.removeError(`name`);}]},`value`,`${fval(component.room.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Chat room name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elupFjl.value = fval(component.room.name);
let cndeiY8 = el5WLSH.formHandler.getError(`name`);
this.setState('steNODl', cndeiY8);
if (cndeiY8) { 
let elIMOoZ = eo('div','APaf',null,`class`,`alert alert-danger`);
text(el5WLSH.formHandler.getError(`name`));
ec('div');
}ec('div');
let el9Zfd1 = eo('div',null,null,`class`,`form-group`);
el9Zfd1.cls = {'group-error': !!el5WLSH.formHandler.getError(`description`) };

            for (let className in el9Zfd1.cls) {
                el9Zfd1.classList.toggle(className, el9Zfd1.cls[className]);
            }  
            let elbXqK0 = eo('label',null,null,`for`,`description`);
text(trans('Chat description'));
let elO6apv = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eliSJU4 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5WLSH.formHandler.addError(`description`, 'required', trans('validation.required'));}return el5WLSH.formHandler.removeError(`description`);}]},`value`,`${fval(component.room.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Chat description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
eliSJU4.value = fval(component.room.description);
ec('textarea');
let cndXa0N = el5WLSH.formHandler.getError(`description`);
this.setState('staftp4', cndXa0N);
if (cndXa0N) { 
let elJgCTi = eo('div','L9Jf',null,`class`,`alert alert-danger`);
text(el5WLSH.formHandler.getError(`description`));
ec('div');
}ec('div');
let elDvo4H = eo('div',null,null,`class`,`form-group`);
elDvo4H.cls = {'group-error': !!el5WLSH.formHandler.getError(`rules`) };

            for (let className in elDvo4H.cls) {
                elDvo4H.classList.toggle(className, elDvo4H.cls[className]);
            }  
            let eliL90k = eo('label',null,null,`for`,`rules`);
text(trans('Chat rules (Markdown)'));
let elGoDhp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUQXlP = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.rules = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5WLSH.formHandler.addError(`rules`, 'required', trans('validation.required'));}return el5WLSH.formHandler.removeError(`rules`);}]},`value`,`${fval(component.room.rules)}`,`name`,`${(`rules`).toInputName()}`,`placeholder`,`${trans(`Chat rules (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`rules`);
elUQXlP.value = fval(component.room.rules);
ec('textarea');
let cnd7bqk = el5WLSH.formHandler.getError(`rules`);
this.setState('st4iAAq', cnd7bqk);
if (cnd7bqk) { 
let eltjZk3 = eo('div','pr7f',null,`class`,`alert alert-danger`);
text(el5WLSH.formHandler.getError(`rules`));
ec('div');
}ec('div');
let elMsUZO = eo('div',null,null,`class`,`form-group`);
elMsUZO.cls = {'group-error': !!el5WLSH.formHandler.getError(`acceptanceCriteria`) };

            for (let className in elMsUZO.cls) {
                elMsUZO.classList.toggle(className, elMsUZO.cls[className]);
            }  
            let el75F_2 = eo('label',null,null,`for`,`acceptanceCriteria`);
text(trans('Chat acceptanceCriteria (Markdown)'));
ec('label');
let elR1Hb6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCriteria = this.value;}]},`value`,`${fval(component.room.acceptanceCriteria)}`,`name`,`${(`acceptanceCriteria`).toInputName()}`,`placeholder`,`${trans(`Write chat criteria as it will be appeared to any applicants to answer what you want from him/her to allow joining the room.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteria`);
elR1Hb6.value = fval(component.room.acceptanceCriteria);
ec('textarea');
ec('div');
let elWZIyX = eo('div',null,null,`class`,`row`);
let elYcgiy = eo('div',null,null,`class`,`col-4`);
let elPawqg = eo('div',null,null,`class`,`form-group`);
elPawqg.cls = {'group-error': !!el5WLSH.formHandler.getError(`acceptanceCost`) };

            for (let className in elPawqg.cls) {
                elPawqg.classList.toggle(className, elPawqg.cls[className]);
            }  
            let elq7nMD = eo('label',null,null,`for`,`acceptanceCost`);
text(trans('Acceptance Cost'));
ec('label');
let elu8mlU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.room.acceptanceCost = this.value;}]},`value`,`${fval(component.room.acceptanceCost)}`,`name`,`${(`acceptanceCost`).toInputName()}`,`placeholder`,`${trans(`Acceptance Cost`)}`,`type`,`number`,`class`,`form-control`,`id`,`acceptanceCost`);
elu8mlU.value = fval(component.room.acceptanceCost);
ec('div');
ec('div');
let elUnO_b = eo('div',null,null,`class`,`col-4`);
let cmpgw17 = this._lc('czraDUVJo', {parent:component,parentTop:flkModal,props:{value:component.room.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.setCurrentSize(e.value)}},attrs:{name:`${(`size`).toInputName()}`,label:'Size',class:'form-control'},style:{position:'top'}});
ec('div');
let elInK8A = eo('div',null,null,`class`,`col-2`);
let elYASjy = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Cost`);
ec('label');
let elkRnNa = eo('div');
let cndklvg = component.cost;
this.setState('stZx8fv', cndklvg);
if (cndklvg) { 
let cmpw5Hi = this._lc('cM3LMrNox', {parent:component,parentTop:flkModal,props:{coins:component.cost},state:'stZx8fv'});
}ec('div');
let cndSV0K = component.errors.cost;
this.setState('st4vSY3', cndSV0K);
if (cndSV0K) { 
let elbhQPF = eo('div','qFkf',null,`class`,`red-text bold`);
text(component.errors.cost);
ec('div');
}ec('div');
let elv7Mev = eo('div',null,null,`class`,`col-2`);
let elU1sTl = eo('label',null,null,`class`,`bold`,`for`,`Cost`);
text(`Max members`);
ec('label');
let cnd0lts = component.maxMembers;
this.setState('stSNC4A', cnd0lts);
if (cnd0lts) { 
let elKDRIA = eo('div','J5Uf',null,`class`,`bold`);
text(component.maxMembers);
ec('div');
}ec('div');
ec('div');
let el5qShZ = eo('div',null,null,`class`,`row`);
let elk3JYp = eo('div',null,null,`class`,`col-4`);
let cmpayHJ = this._lc('clzbXjpGu', {parent:component,parentTop:flkModal,props:{value:component.room.category,items:FLAGS.chatRooms.categories},attrs:{name:`${(`category`).toInputName()}`,label:'Category',class:'form-control'},style:{position:'top'}});
ec('div');
let elvfKU3 = eo('div',null,null,`class`,`col-4`);
let cmpTu2E = this._lc('cu_tpRwHd', {parent:component,parentTop:flkModal,props:{value:component.room.language,items:FLAGS.chatRooms.languages},attrs:{name:`${(`language`).toInputName()}`,label:'Language',class:'form-control'},style:{position:'top'}});
ec('div');
let elWxe1f = eo('div',null,null,`class`,`col-4`);
let cmppTBG = this._lc('cGGdRxLW8', {parent:component,parentTop:flkModal,props:{value:component.room.type,items:FLAGS.chatRooms.types},attrs:{name:`${(`type`).toInputName()}`,label:'Type',required:'',class:'form-control'},style:{position:'top'}});
ec('div');
ec('div');
let elQum7a = eo('div',null,null,`class`,`row m-t-2`);
let elsg4pZ = eo('div',null,null,`class`,`col-6`);
let elmIOdE = eo('label',null,null,`for`,`image`);
text(`Room image`);
ec('label');
let cmpDjEc = this._lc('cUnvt2xqx', {parent:component,parentTop:flkModal,props:{value:component.room.image},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let eluOsRp = eo('div',null,null,`class`,`col-6 bold`);
let cmph8In = this._lc('crkTFmrNg', {parent:component,parentTop:flkModal,props:{checked:component.room.isPublic},events:{onchange:function(e) {let $el = this; component.room.isPublic = ! component.formObject.isPublic}},boolAttrs:{checked:component.room.isPublic},attrs:{name:`${(`isPublic`).toInputName()}`,label:'Public room',value:1}});
ec('div');
ec('div');
let elQJTZR = eo('div',null,null,`class`,`text-right`);
let el53n93 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isLoading},`class`,`btn btn-sm btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');

                    setTimeout(function () {
                        let $el = el5WLSH;
                        component.formHandler = $el.formHandler;
                    }, 20);                
                },attrs:{header:'Chat room'}});

                    this.isReadyToGo();
                }
        });