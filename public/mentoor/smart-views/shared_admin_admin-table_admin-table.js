_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {cjwpxyEH_:'flk-spinner',c4iWJfEDr:'layout'},
                render: function (component) {
                    let cmpV8hS = this._lc('c4iWJfEDr', {parent:component,content:(layout) => {let elXbFzE = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let eluag6N = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndWbDC = !component.hideAddBtn;
this.setState('st0hoyL', cndWbDC);
if (cndWbDC) { 
let elLW32i = eo('button','A3Gf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let elbBvgk = eo('i','gR5f',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndwHkv = ! Is.empty(component.records);
this.setState('stFPqvS', cndwHkv);
if (cndwHkv) { 
let elhHErl = eo('small','jYif',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let eleQcVD = eo('strong','BZJf',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let el9b7qG = eo('div',null,null,`class`,`table-responsive`);
let elzcpaB = eo('table',null,null,`class`,`table table-hover admin-table`);
let elXKi0k = eo('thead',null,null,`class`,`thead-light`);
let eledLKD = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let ii7qAZ = 'NxKpHfN' + i;
let elsDsWg = eo('th','YhJvh9q52n7L' + i+ii7qAZ);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let elTojSR = eo('tbody');
let cndM3XH = component.inputs.parent.isLoading;
this.setState('stJ6UYO', cndM3XH);
let cndpayb = !Is.empty(component.records);
this.setState('sttkG2D', cndpayb);
if (cndM3XH) { 
let el9eKIC = eo('tr','ItOf');
let el_JZFu = eo('td','uXqf',null,`colspan`,`${ component.columns.length }`);
let cmpgE70 = this._lc('cjwpxyEH_', {parent:component,parentTop:layout,state:'stJ6UYO'});
ec('td');
ec('tr');
}else if (cndpayb) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });