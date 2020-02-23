_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {c1g0Dnqa_:'flk-spinner',cdxDq5XuU:'layout'},
                render: function (component) {
                    let cmpojGT = this._lc('cdxDq5XuU', {parent:component,content:(layout) => {let elxiruo = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let elYkDXN = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndXhVG = !component.hideAddBtn;
this.setState('stZZB9X', cndXhVG);
if (cndXhVG) { 
let elPyQUU = eo('button','0oFf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let elFwt5k = eo('i','N3rf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndCuYe = ! Is.empty(component.records);
this.setState('stu3YEb', cndCuYe);
if (cndCuYe) { 
let el_zdMs = eo('small','_tff',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let elPvjF3 = eo('strong','_h_f',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let elgXaeY = eo('div',null,null,`class`,`table-responsive`);
let elcgDKP = eo('table',null,null,`class`,`table table-hover admin-table`);
let elTykfu = eo('thead',null,null,`class`,`thead-light`);
let elfGGXk = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let iiuGCw = 'am0XUIx' + i;
let el_CI1l = eo('th','KYp2jA4kDrlW' + i+iiuGCw);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let elV6K5X = eo('tbody');
let cndTMqQ = component.inputs.parent.isLoading;
this.setState('stgBYVc', cndTMqQ);
let cndJ4P_ = !Is.empty(component.records);
this.setState('stgmJVU', cndJ4P_);
if (cndTMqQ) { 
let elFxUfN = eo('tr','LELf');
let elHzVxR = eo('td','6taf',null,`colspan`,`${ component.columns.length }`);
let cmpF9K7 = this._lc('c1g0Dnqa_', {parent:component,parentTop:layout,state:'stgBYVc'});
ec('td');
ec('tr');
}else if (cndJ4P_) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });