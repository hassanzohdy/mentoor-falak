_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {cHlTophkb:'markdown',cJlCMDJ94:'project-layout'},
                render: function (component) {
                    let cmpEDiq = this._lc('cJlCMDJ94', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elTsjLe = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cndndfp = component.project.isProjectManager;
this.setState('stZTElg', cndndfp);
if (cndndfp) { 
let el3zSeU = eo('button','L6Ef',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cndSk7W = component.inEditMode;
this.setState('st6NCem', cndSk7W);
if (cndSk7W) { 
let elP3zj8 = eo('form','pSqf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elP3zj8.formHandler) {
                    window.cfrmdlr = elP3zj8.formHandler = new FormHandler(elP3zj8, component);
                } else {
                    window.cfrmdlr = elP3zj8.formHandler;
                }
            let elgOHBW = eo('div','nJNf',null,`class`,`form-group`);
elgOHBW.cls = {'group-error': !!elP3zj8.formHandler.getError(`srs`) };

            for (let className in elgOHBW.cls) {
                elgOHBW.classList.toggle(className, elgOHBW.cls[className]);
            }  
            let elw1xHq = eo('label','0m2f',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let elZ9WOp = eo('textarea','4tZf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
elZ9WOp.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let eleHaLX = eo('div','ccUf',null,`class`,`text-center m-t-3`);
let el6Wdob = eo('button','SO3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elFVNWM = eo('button','nquf',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmp22Aj = this._lc('cHlTophkb', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });