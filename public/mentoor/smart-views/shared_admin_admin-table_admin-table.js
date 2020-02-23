_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {cqTIxMI8J:'flk-spinner',c0UNFP7R0:'layout'},
                render: function (component) {
                    let cmpT6WY = this._lc('c0UNFP7R0', {parent:component,content:(layout) => {let el0HrCy = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let elxQBDV = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndGUkP = !component.hideAddBtn;
this.setState('stwCXlt', cndGUkP);
if (cndGUkP) { 
let el9_JCg = eo('button','Mamf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let ellBHyp = eo('i','u0Vf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndLTVD = ! Is.empty(component.records);
this.setState('st2F2zG', cndLTVD);
if (cndLTVD) { 
let elOjcb6 = eo('small','Yu6f',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let elXN0Ow = eo('strong','BZRf',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let elo_H2K = eo('div',null,null,`class`,`table-responsive`);
let elpCp_x = eo('table',null,null,`class`,`table table-hover admin-table`);
let elXhKXC = eo('thead',null,null,`class`,`thead-light`);
let elSXpws = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let iiMRyb = 'OdkaGzU' + i;
let elqVCBK = eo('th','wJvUiO89JBCv' + i+iiMRyb);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let elIKmBC = eo('tbody');
let cndOCnk = component.inputs.parent.isLoading;
this.setState('stflQEQ', cndOCnk);
let cndRs9y = !Is.empty(component.records);
this.setState('stcR0eV', cndRs9y);
if (cndOCnk) { 
let elKDQM6 = eo('tr','5ecf');
let elZwa06 = eo('td','rbkf',null,`colspan`,`${ component.columns.length }`);
let cmpzuAb = this._lc('cqTIxMI8J', {parent:component,parentTop:layout,state:'stflQEQ'});
ec('td');
ec('tr');
}else if (cndRs9y) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });