_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {cKzNkEo74:'markdown',cHxAWy1c3:'project-layout'},
                render: function (component) {
                    let cmpA85K = this._lc('cHxAWy1c3', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elo0glh = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cndxY6t = component.project.isProjectManager;
this.setState('stwzdag', cndxY6t);
if (cndxY6t) { 
let elVG643 = eo('button','x0Jf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cndcvC8 = component.inEditMode;
this.setState('stLgbrS', cndcvC8);
if (cndcvC8) { 
let elRIV5B = eo('form','PD9f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elRIV5B.formHandler) {
                    window.cfrmdlr = elRIV5B.formHandler = new FormHandler(elRIV5B, component);
                } else {
                    window.cfrmdlr = elRIV5B.formHandler;
                }
            let elBkn0E = eo('div','wLJf',null,`class`,`form-group`);
elBkn0E.cls = {'group-error': !!elRIV5B.formHandler.getError(`srs`) };

            for (let className in elBkn0E.cls) {
                elBkn0E.classList.toggle(className, elBkn0E.cls[className]);
            }  
            let elxuDgi = eo('label','15Df',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let elR7kd0 = eo('textarea','0OTf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
elR7kd0.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let elWjyf3 = eo('div','WGUf',null,`class`,`text-center m-t-3`);
let elJPk6C = eo('button','rO4f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elO9VnA = eo('button','GO1f',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpYwA3 = this._lc('cKzNkEo74', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });