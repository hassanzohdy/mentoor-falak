_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {c7cRqVjzO:'flk-spinner',cHGPqK7Je:'layout'},
                render: function (component) {
                    let cmp6H4E = this._lc('cHGPqK7Je', {parent:component,content:(layout) => {let elcc_Qa = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let elhcMg1 = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndX2f4 = !component.hideAddBtn;
this.setState('steVNtm', cndX2f4);
if (cndX2f4) { 
let el8Z1T4 = eo('button','2L3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let elviuYD = eo('i','b7Pf',null,`class`,`${fas('plus')} icon`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndvPlv = ! Is.empty(component.records);
this.setState('stKO130', cndvPlv);
if (cndvPlv) { 
let elGIjjX = eo('small','rRpf',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let el7L758 = eo('strong','lIof',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let elhnIZC = eo('div',null,null,`class`,`table-responsive`);
let elUEeN2 = eo('table',null,null,`class`,`table table-hover admin-table`);
let elqDAd9 = eo('thead',null,null,`class`,`thead-light`);
let ele_1iQ = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let iim55o = 'dsKbCWQ' + i;
let eliCFH4 = eo('th','l9HHW7XdEueT' + i+iim55o);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let elDGTJ7 = eo('tbody');
let cndaMrv = component.inputs.parent.isLoading;
this.setState('stfPZ13', cndaMrv);
let cndWTBg = !Is.empty(component.records);
this.setState('stMTI9d', cndWTBg);
if (cndaMrv) { 
let elUjjGB = eo('tr','XS3f');
let elIGBuH = eo('td','EVyf',null,`colspan`,`${ component.columns.length }`);
let cmpU5Hw = this._lc('c7cRqVjzO', {parent:component,parentTop:layout,state:'stfPZ13'});
ec('td');
ec('tr');
}else if (cndWTBg) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });