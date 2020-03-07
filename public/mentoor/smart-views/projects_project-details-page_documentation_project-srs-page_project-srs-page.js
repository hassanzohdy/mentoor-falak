_Component({
                selector: 'project-srs-page',
                c: 'ProjectSrsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','inEditMode','submit','projectSrs'],
                children: {cQCbJEKHT:'markdown',c0P2Yxcdf:'project-layout'},
                render: function (component) {
                    let cmpANNX = this._lc('c0P2Yxcdf', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elfFpX4 = eo('h1');
text(`Software Requirements Specifications [SRS]`);
let cnd6BRu = component.project.isProjectManager;
this.setState('stru2wP', cnd6BRu);
if (cnd6BRu) { 
let elZhAPM = eo('button','kHof',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = !!!component.inEditMode}]},`type`,`button`,`class`,`btn btn-sm btn-teal bold`);
text(`Edit`);
ec('button');
}ec('h1');
let cndqxLt = component.inEditMode;
this.setState('stH7jz3', cndqxLt);
if (cndqxLt) { 
let elOvN02 = eo('form','_Jif',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elOvN02.formHandler) {
                    window.cfrmdlr = elOvN02.formHandler = new FormHandler(elOvN02, component);
                } else {
                    window.cfrmdlr = elOvN02.formHandler;
                }
            let elGsvxg = eo('div','FGXf',null,`class`,`form-group ${cls({'group-error': !!elOvN02.formHandler.getError(`srs`) })}`);
let elDOGRn = eo('label','HMYf',null,`for`,`srs`);
text(trans('SRS'));
ec('label');
let elIaSFY = eo('textarea','a91f',null, eventListeners, {oninput:[function(e) {component.projectSrs = this.value;}]},`value`,`${fval(component.projectSrs)}`,`name`,`${(`srs`).toInputName()}`,`placeholder`,`${trans(`Write project Software Requirements Specifications      `)}`,`type`,`textarea`,`class`,`form-control`,`id`,`srs`);
elIaSFY.value = fval(component.projectSrs);
ec('textarea');
ec('div');
let elrhSix = eo('div','MiZf',null,`class`,`text-center m-t-3`);
let el6JWCy = eo('button','oL6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.inEditMode = false}]},`type`,`button`,`class`,`btn btn-danger bold`);
text(`Cancel`);
ec('button');
let elj8WCx = eo('button','EKJf',null,`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}let cmpzzzb = this._lc('cQCbJEKHT', {parent:component,parentTop:projectLayout,props:{content:component.projectSrs}});
}});

                    this.isReadyToGo();
                }
        });