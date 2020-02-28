_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {cdDvqj7OA:'flk-spinner',cJF4kai0i:'layout'},
                render: function (component) {
                    let cmpjI0J = this._lc('cJF4kai0i', {parent:component,content:(layout) => {let elmj2Yz = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let eld_pkF = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndrR1G = !component.hideAddBtn;
this.setState('stzrAMt', cndrR1G);
if (cndrR1G) { 
let elvbBjk = eo('button','SZjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let elG1CWX = eo('i','DWNf',null,`class`,`${fas('plus')} icon`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndHukh = ! Is.empty(component.records);
this.setState('st3Ohd4', cndHukh);
if (cndHukh) { 
let elECMFs = eo('small','5CAf',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let elZaRPl = eo('strong','WRZf',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let elw2PKq = eo('div',null,null,`class`,`table-responsive`);
let elYnD6X = eo('table',null,null,`class`,`table table-hover admin-table`);
let elcwRuC = eo('thead',null,null,`class`,`thead-light`);
let elnWD8l = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let iijvWC = 'H97p3tu' + i;
let elvvkcl = eo('th','cUflNFW_Z2t2' + i+iijvWC);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let eltTb8s = eo('tbody');
let cndlRBy = component.inputs.parent.isLoading;
this.setState('stLsQV1', cndlRBy);
let cnd5Wba = !Is.empty(component.records);
this.setState('sti5VVt', cnd5Wba);
if (cndlRBy) { 
let elHZQ61 = eo('tr','qKbf');
let elbF6fO = eo('td','yvif',null,`colspan`,`${ component.columns.length }`);
let cmpMXeX = this._lc('cdDvqj7OA', {parent:component,parentTop:layout,state:'stLsQV1'});
ec('td');
ec('tr');
}else if (cnd5Wba) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });