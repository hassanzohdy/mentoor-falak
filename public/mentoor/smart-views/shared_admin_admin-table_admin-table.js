_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {ccLNU2QO6:'flk-spinner',csTAGmcPQ:'layout'},
                render: function (component) {
                    let cmpSHNt = this._lc('csTAGmcPQ', {parent:component,content:(layout) => {let el4qtdw = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let elddJvT = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndqhJW = !component.hideAddBtn;
this.setState('stoxy6D', cndqhJW);
if (cndqhJW) { 
let elai5Pb = eo('button','ZKFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let elH6Xy3 = eo('i','k5Yf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndTAjI = ! Is.empty(component.records);
this.setState('st7QBae', cndTAjI);
if (cndTAjI) { 
let elXiFcl = eo('small','B3Hf',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let elZJtmH = eo('strong','kk3f',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let elh8hon = eo('div',null,null,`class`,`table-responsive`);
let elh00GE = eo('table',null,null,`class`,`table table-hover admin-table`);
let elWisDO = eo('thead',null,null,`class`,`thead-light`);
let elsoOdg = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let ii8rQR = 'NaL1m_V' + i;
let elEp7B_ = eo('th','CKZ0Q_a5phSR' + i+ii8rQR);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let elHOwIX = eo('tbody');
let cnd2vAO = component.inputs.parent.isLoading;
this.setState('stngJgz', cnd2vAO);
let cndvWV0 = !Is.empty(component.records);
this.setState('st9bUf4', cndvWV0);
if (cnd2vAO) { 
let elv1t0U = eo('tr','rhof');
let elTB_os = eo('td','YCEf',null,`colspan`,`${ component.columns.length }`);
let cmphSQu = this._lc('ccLNU2QO6', {parent:component,parentTop:layout,state:'stngJgz'});
ec('td');
ec('tr');
}else if (cndvWV0) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });