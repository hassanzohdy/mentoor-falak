_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {cg4RXUDTS:'markdown',cDlqb7mzZ:'project-layout'},
                render: function (component) {
                    let cmpIYIR = this._lc('cDlqb7mzZ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elZQfiO = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cndymqd = component.project.isProjectManager;
this.setState('st56t0Q', cndymqd);
if (cndymqd) { 
let el4euZ6 = eo('button','2Gnf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cndSOwG = component.inEditMode;
this.setState('stwpj7O', cndSOwG);
if (cndSOwG) { 
let elczbgh = eo('form','x3Af',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elczbgh.formHandler) {
                    window.cfrmdlr = elczbgh.formHandler = new FormHandler(elczbgh, component);
                } else {
                    window.cfrmdlr = elczbgh.formHandler;
                }
            let elwn0AK = eo('div','7WTf',null,`class`,`form-group`);
elwn0AK.cls = {'group-error': !!elczbgh.formHandler.getError(`srs`) };

            for (let className in elwn0AK.cls) {
                elwn0AK.classList.toggle(className, elwn0AK.cls[className]);
            }  
            let el9hjiE = eo('label','fD7f',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let el6NG8k = eo('textarea','44Nf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
el6NG8k.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let elgE00q = eo('div','WMAf',null,`class`,`text-center m-t-3`);
let el1wY_h = eo('button','0B0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elGVe6U = eo('button','ZN2f',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpWrRU = this._lc('cg4RXUDTS', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });