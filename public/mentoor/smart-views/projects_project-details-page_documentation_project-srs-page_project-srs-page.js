_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {cDvI399Om:'markdown',cg3Zgnm30:'project-layout'},
                render: function (component) {
                    let cmpRwti = this._lc('cg3Zgnm30', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elZon8j = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cnd8jMD = component.project.isProjectManager;
this.setState('stpLFjU', cnd8jMD);
if (cnd8jMD) { 
let eltc1rb = eo('button','lCAf',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cndzY7d = component.inEditMode;
this.setState('stzolee', cndzY7d);
if (cndzY7d) { 
let elssMG6 = eo('form','SPZf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elssMG6.formHandler) {
                    window.cfrmdlr = elssMG6.formHandler = new FormHandler(elssMG6, component);
                } else {
                    window.cfrmdlr = elssMG6.formHandler;
                }
            let el4V2Rh = eo('div','pAZf',null,`class`,`form-group`);
el4V2Rh.cls = {'group-error': !!elssMG6.formHandler.getError(`srs`) };

            for (let className in el4V2Rh.cls) {
                el4V2Rh.classList.toggle(className, el4V2Rh.cls[className]);
            }  
            let elZnh8U = eo('label','fk2f',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let elU6Pt0 = eo('textarea','jYEf',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
elU6Pt0.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let el7Z62I = eo('div','QFif',null,`class`,`text-center m-t-3`);
let ellgw2e = eo('button','t2Ef',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elKxnLK = eo('button','2S9f',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpLqfM = this._lc('cDvI399Om', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });