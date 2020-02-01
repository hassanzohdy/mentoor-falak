_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {cHRFzEUyC:'markdown',cKHz5zDag:'project-layout'},
                render: function (component) {
                    let cmp6iDl = this._lc('cKHz5zDag', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let els8Mk8 = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cnd6TmG = component.project.isProjectManager;
this.setState('stIlXBY', cnd6TmG);
if (cnd6TmG) { 
let el2lvk4 = eo('button','RyXf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cndqKel = component.inEditMode;
this.setState('stbY3n1', cndqKel);
if (cndqKel) { 
let elNpF8f = eo('form','X6Xf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNpF8f.formHandler) {
                    window.cfrmdlr = elNpF8f.formHandler = new FormHandler(elNpF8f, component);
                } else {
                    window.cfrmdlr = elNpF8f.formHandler;
                }
            let el2ts2I = eo('div','t1Xf',null,`class`,`form-group`);
el2ts2I.cls = {'group-error': !!elNpF8f.formHandler.getError(`srs`) };

            for (let className in el2ts2I.cls) {
                el2ts2I.classList.toggle(className, el2ts2I.cls[className]);
            }  
            let elI3zc0 = eo('label','U0uf',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let el00W15 = eo('textarea','nGPf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
el00W15.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let el9Hzjn = eo('div','vEmf',null,`class`,`text-center m-t-3`);
let eldnjqk = eo('button','uE6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elXMKDH = eo('button','b1Uf',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpQ8WA = this._lc('cHRFzEUyC', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });