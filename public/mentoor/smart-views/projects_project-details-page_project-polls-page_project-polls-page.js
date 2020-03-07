_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cO_aeh5Pq:'project-layout',csATZg9A4:'flk-modal',cFPb_6fUc:'flk-alert'},
                render: function (component) {
                    let cmpuNZo = this._lc('cO_aeh5Pq', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elvgpmO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el9Z_3K = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Poll`);
ec('button');
let elLyfjM = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let elOo4hO = eo('table',null,null,`class`,`table table-striped buttoned`);
let eleSjJg = eo('thead');
let eldf5xA = eo('tr');
let elACavq = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elT4wxi = eo('tbody');
let cnddPUn = Is.empty(component.project.polls);
this.setState('stHUYWA', cnddPUn);
let cnd8e96 = !(cnddPUn);
this.setState('st9FNNQ', cnd8e96);
if (cnddPUn) { 
let els95E1 = eo('tr','7U9f');
let elutTPn = eo('td','HAwf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let iieGEp = '170vc5F' + index;
let elGQmsZ = eo('tr','ibMR_FxqnKNE' + index+iieGEp);
let el4ewcG = eo('td','yl7ff'+iieGEp);
let elknOkS = eo('button','jN7ff'+iieGEp,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elFzBzl = eo('i','qvUff'+iieGEp,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elknOkS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let elqbJyK = eo('button','6h4ff'+iieGEp,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elFZxXJ = eo('i','ozRff'+iieGEp,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elqbJyK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd1VeP = component.modalIsOpened;
this.setState('stlHcKE', cnd1VeP);
if (cnd1VeP) { 
component.modal = this._lc('csATZg9A4', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elE4l1Y = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elE4l1Y.formHandler) {
                    window.cfrmdlr = elE4l1Y.formHandler = new FormHandler(elE4l1Y, component);
                } else {
                    window.cfrmdlr = elE4l1Y.formHandler;
                }
            let eldDNbN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eldDNbN.value = fval(component.project.id);
let eldbHxh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elE4l1Y.formHandler.getError(`name`) })}`);
let el_ObXR = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let elNs3wZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFjlIc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elE4l1Y.formHandler.addError(`name`, 'required', trans('validation.required'));}return elE4l1Y.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elFjlIc.value = fval(component.record.name);
let cndeWUS = elE4l1Y.formHandler.getError(`name`);
this.setState('stiETPr', cndeWUS);
if (cndeWUS) { 
let elGNQ97 = eo('div','V4Af',null,`class`,`alert alert-danger`);
text(elE4l1Y.formHandler.getError(`name`));
ec('div');
}ec('div');
let el1NXgD = eo('div',null,null,`class`,`m-t-1 text-center`);
let eljUnHB = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stlHcKE'});
}let cnduiAy = component.confirmDelete;
this.setState('st475ol', cnduiAy);
if (cnduiAy) { 
let cmp2S3j = this._lc('cFPb_6fUc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st475ol'});
}
                    this.isReadyToGo();
                }
        });