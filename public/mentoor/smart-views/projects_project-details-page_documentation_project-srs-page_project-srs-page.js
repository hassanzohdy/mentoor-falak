_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {crz5mV3qS:'markdown',cbQhXu4Vs:'project-layout'},
                render: function (component) {
                    let cmpNeFI = this._lc('cbQhXu4Vs', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elUBIfJ = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cndcoul = component.project.isProjectManager;
this.setState('stS5gta', cndcoul);
if (cndcoul) { 
let elOhv18 = eo('button','4pCf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cnddESb = component.inEditMode;
this.setState('strYbu2', cnddESb);
if (cnddESb) { 
let elJ8ikW = eo('form','JiBf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elJ8ikW.formHandler) {
                    window.cfrmdlr = elJ8ikW.formHandler = new FormHandler(elJ8ikW, component);
                } else {
                    window.cfrmdlr = elJ8ikW.formHandler;
                }
            let elGqzHo = eo('div','B2wf',null,`class`,`form-group`);
elGqzHo.cls = {'group-error': !!elJ8ikW.formHandler.getError(`srs`) };

            for (let className in elGqzHo.cls) {
                elGqzHo.classList.toggle(className, elGqzHo.cls[className]);
            }  
            let ellrJa_ = eo('label','5kKf',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let elXpYDL = eo('textarea','yvgf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
elXpYDL.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let elY4pGl = eo('div','5RPf',null,`class`,`text-center m-t-3`);
let el9rUOP = eo('button','cFGf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elBmo5i = eo('button','j2yf',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpPcKj = this._lc('crz5mV3qS', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });