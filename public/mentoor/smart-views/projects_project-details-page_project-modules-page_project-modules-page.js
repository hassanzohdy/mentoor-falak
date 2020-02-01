_Component({
                selector: 'project-modules-page',
                c: 'ProjectModulesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cG3imF7oU:'project-layout',chj97ybC8:'flk-dropdown-list',czOH_TSQH:'flk-modal',cseTyjJCO:'flk-alert'},
                render: function (component) {
                    let cmpfeIs = this._lc('cG3imF7oU', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndT0fY = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stfa6fH', cndT0fY);
if (cndT0fY) { 
let eliifhu = eo('button','d98f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elWGhG5 = eo('i','Mfqf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Module`);
ec('button');
}let elEhSQH = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Modules
        (${ component.project.modules.length })`);
ec('h1');
let elgabrA = eo('table',null,null,`class`,`table table-striped buttoned`);
let elaOhLP = eo('thead');
let eloUZHS = eo('tr');
let elwNuse = eo('th');
text(`Name`);
ec('th');
let elHxWWV = eo('th');
text(`Parent`);
ec('th');
let cndDlea = component.project.isHigherAuthority;
this.setState('stQQZJ1', cndDlea);
if (cndDlea) { 
let eld3qdI = eo('th','cK2f');
text(`Control`);
ec('th');
}ec('tr');
ec('thead');
let eleVH65 = eo('tbody');
let cnd6Z9i = Is.empty(component.project.modules);
this.setState('stAWuba', cnd6Z9i);
let cndPk86 = !(cnd6Z9i);
this.setState('stsSX6i', cndPk86);
if (cnd6Z9i) { 
let elU_m_z = eo('tr','9Off');
let elqSLYo = eo('td','v3jf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Modules Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.modules) {
let record = component.project.modules[index]; 
 let ii7f7a = 'rrYDH48' + index;
let eliycvS = eo('tr','_5sV63vwLPpb' + index+ii7f7a);
let elTj8e7 = eo('td','l3vff'+ii7f7a);
text(record.name);
ec('td');
let elgvKJy = eo('td','RY0ff'+ii7f7a);
text(record.parent.name || 'N/a');
ec('td');
let cndhW6g = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('st46Ix4', cndhW6g);
if (cndhW6g) { 
let elycI96 = eo('td','uJWff'+ii7f7a);
let eladUVQ = eo('button','IReff'+ii7f7a,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el8z7Qe = eo('i','7oiff'+ii7f7a,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eladUVQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Module')}`});
        ;
                    }, 20);                
                let elu1_zD = eo('button','XJOff'+ii7f7a,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elphzIW = eo('i','sQNff'+ii7f7a,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elu1_zD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Module')}`});
        ;
                    }, 20);                
                ec('td');
}ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndzaOV = component.modalIsOpened;
this.setState('stypYQ9', cndzaOV);
if (cndzaOV) { 
component.modal = this._lc('czOH_TSQH', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elByv6R = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elByv6R.formHandler) {
                    window.cfrmdlr = elByv6R.formHandler = new FormHandler(elByv6R, component);
                } else {
                    window.cfrmdlr = elByv6R.formHandler;
                }
            let elA1m98 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elA1m98.value = fval(component.project.id);
let elSmLAj = eo('div',null,null,`class`,`form-group`);
elSmLAj.cls = {'group-error': !!elByv6R.formHandler.getError(`name`) };

            for (let className in elSmLAj.cls) {
                elSmLAj.classList.toggle(className, elSmLAj.cls[className]);
            }  
            let elcfQ49 = eo('label',null,null,`for`,`name`);
text(trans('Module Name'));
let elaXUvG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJwHxm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elByv6R.formHandler.addError(`name`, 'required', trans('validation.required'));}return elByv6R.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Module Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elJwHxm.value = fval(component.record.name);
let cnd20TD = elByv6R.formHandler.getError(`name`);
this.setState('stUNL7d', cnd20TD);
if (cnd20TD) { 
let elT5jjT = eo('div','TiYf',null,`class`,`alert alert-danger`);
text(elByv6R.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpflFO = this._lc('chj97ybC8', {parent:component,parentTop:flkModal,props:{none:true,value:Object.get(component.record.parent, 'id', ''),except:component.record.id,items:component.project.modules},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Module'},state:'stypYQ9'});
let elfmwMS = eo('div',null,null,`class`,`m-t-1 text-center`);
let el6oNI6 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stypYQ9'});
}let cndyeNj = component.confirmDelete;
this.setState('st_gNKP', cndyeNj);
if (cndyeNj) { 
let cmpobNV = this._lc('cseTyjJCO', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st_gNKP'});
}
                    this.isReadyToGo();
                }
        });