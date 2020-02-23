_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cXesB4WLF:'project-layout',cs4L1oIaJ:'flk-modal',cjwy7lpyQ:'flk-alert'},
                render: function (component) {
                    let cmpb_aQ = this._lc('cXesB4WLF', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elB70MG = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elinfJt = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elIjhPo = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let elufbij = eo('table',null,null,`class`,`table table-striped buttoned`);
let eldrgIM = eo('thead');
let el0_LjZ = eo('tr');
let el8qRhj = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let ely5cFL = eo('tbody');
let cndXtQ_ = Is.empty(component.project.polls);
this.setState('stgbFzi', cndXtQ_);
let cndVGRT = !(cndXtQ_);
this.setState('sttM1z5', cndVGRT);
if (cndXtQ_) { 
let elnkcdK = eo('tr','Y2gf');
let elwMzMi = eo('td','GtYf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let ii6LSR = 'tey2pD9' + index;
let ellBmWT = eo('tr','GEGbouwT593y' + index+ii6LSR);
let elHPcBl = eo('td','4pZff'+ii6LSR);
let elPApkW = eo('button','HK2ff'+ii6LSR,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elpVdBO = eo('i','YM5ff'+ii6LSR,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPApkW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let elU09gC = eo('button','HWsff'+ii6LSR,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el81D7B = eo('i','xGrff'+ii6LSR,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elU09gC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndRPzD = component.modalIsOpened;
this.setState('stKT3bH', cndRPzD);
if (cndRPzD) { 
component.modal = this._lc('cs4L1oIaJ', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elX35aO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elX35aO.formHandler) {
                    window.cfrmdlr = elX35aO.formHandler = new FormHandler(elX35aO, component);
                } else {
                    window.cfrmdlr = elX35aO.formHandler;
                }
            let elaXAWN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elaXAWN.value = fval(component.project.id);
let el1KsJ0 = eo('div',null,null,`class`,`form-group`);
el1KsJ0.cls = {'group-error': !!elX35aO.formHandler.getError(`name`) };

            for (let className in el1KsJ0.cls) {
                el1KsJ0.classList.toggle(className, el1KsJ0.cls[className]);
            }  
            let elH1W3V = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let elbJOEd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltkJvs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elX35aO.formHandler.addError(`name`, 'required', trans('validation.required'));}return elX35aO.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eltkJvs.value = fval(component.record.name);
let cnddBFP = elX35aO.formHandler.getError(`name`);
this.setState('st58q6w', cnddBFP);
if (cnddBFP) { 
let elTUhJG = eo('div','OHFf',null,`class`,`alert alert-danger`);
text(elX35aO.formHandler.getError(`name`));
ec('div');
}ec('div');
let el6BI4Q = eo('div',null,null,`class`,`m-t-1 text-center`);
let eloKTOp = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stKT3bH'});
}let cndEn7D = component.confirmDelete;
this.setState('st3UiVd', cndEn7D);
if (cndEn7D) { 
let cmpcl7w = this._lc('cjwy7lpyQ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st3UiVd'});
}
                    this.isReadyToGo();
                }
        });