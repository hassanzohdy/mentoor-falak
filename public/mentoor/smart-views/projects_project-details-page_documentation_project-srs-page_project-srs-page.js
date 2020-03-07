_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {cYgxcycuz:'markdown',c2bHoWU6y:'project-layout'},
                render: function (component) {
                    let cmpYnfE = this._lc('c2bHoWU6y', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elW5D5x = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cnd0cBq = component.project.isProjectManager;
this.setState('stgT_gt', cnd0cBq);
if (cnd0cBq) { 
let elyK0wT = eo('button','YZ4f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cnd9RUw = component.inEditMode;
this.setState('stTDzkC', cnd9RUw);
if (cnd9RUw) { 
let el8yhUa = eo('form','P75f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el8yhUa.formHandler) {
                    window.cfrmdlr = el8yhUa.formHandler = new FormHandler(el8yhUa, component);
                } else {
                    window.cfrmdlr = el8yhUa.formHandler;
                }
            let elel2mf = eo('div','HVpf',null,`class`,`form-group ${cls({'group-error': !!el8yhUa.formHandler.getError(`srs`) })}`);
let elykIg9 = eo('label','KQsf',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let elOaHgu = eo('textarea','L7kf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
elOaHgu.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let elJg__M = eo('div','xx4f',null,`class`,`text-center m-t-3`);
let elrl1cz = eo('button','Wcaf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let ellRGXI = eo('button','Vxzf',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpjzC7 = this._lc('cYgxcycuz', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });