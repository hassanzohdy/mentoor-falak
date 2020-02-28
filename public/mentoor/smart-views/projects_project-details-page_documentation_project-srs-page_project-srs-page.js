_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {csUwIHYO2:'markdown',cfcrAvdHb:'project-layout'},
                render: function (component) {
                    let cmpyy_a = this._lc('cfcrAvdHb', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elmyto7 = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cndtm9V = component.project.isProjectManager;
this.setState('stx1tCw', cndtm9V);
if (cndtm9V) { 
let elZDHrD = eo('button','WwPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cndOYck = component.inEditMode;
this.setState('stCz4HZ', cndOYck);
if (cndOYck) { 
let elCggYw = eo('form','7BLf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elCggYw.formHandler) {
                    window.cfrmdlr = elCggYw.formHandler = new FormHandler(elCggYw, component);
                } else {
                    window.cfrmdlr = elCggYw.formHandler;
                }
            let elShxue = eo('div','QDMf',null,`class`,`form-group ${cls({'group-error': !!elCggYw.formHandler.getError(`srs`) })}`);
let elbNpzA = eo('label','EPPf',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let elmXn7z = eo('textarea','f7bf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
elmXn7z.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let el0EZv3 = eo('div','iQpf',null,`class`,`text-center m-t-3`);
let elUM7sQ = eo('button','RTmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let el4WOj7 = eo('button','9FBf',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpHSI2 = this._lc('csUwIHYO2', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });