_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {cqWzf0NKo:'flk-spinner',cG0jQz87W:'layout'},
                render: function (component) {
                    let cmpkX3X = this._lc('cG0jQz87W', {parent:component,content:(layout) => {let elPbzzo = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let el9wgWk = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndkBV9 = !component.hideAddBtn;
this.setState('stZTHKr', cndkBV9);
if (cndkBV9) { 
let elFycLW = eo('button','_Luf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let el9WJJE = eo('i','QaGf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndnqjH = ! Is.empty(component.records);
this.setState('stNYgVe', cndnqjH);
if (cndnqjH) { 
let elxmbWW = eo('small','zTLf',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let elU7IoR = eo('strong','sJTf',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let elTjrZK = eo('div',null,null,`class`,`table-responsive`);
let el6uhHD = eo('table',null,null,`class`,`table table-hover admin-table`);
let elju1Wc = eo('thead',null,null,`class`,`thead-light`);
let elOiv5N = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let iiYaGC = 'xI_1vJw' + i;
let eltfSji = eo('th','fa3kmVX_9cJ_' + i+iiYaGC);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let el892cq = eo('tbody');
let cndW4TM = component.inputs.parent.isLoading;
this.setState('stjZhXr', cndW4TM);
let cndm3D7 = !Is.empty(component.records);
this.setState('stAII3o', cndm3D7);
if (cndW4TM) { 
let elOnNF1 = eo('tr','XCuf');
let elY6NWK = eo('td','krif',null,`colspan`,`${ component.columns.length }`);
let cmpqe5Q = this._lc('cqWzf0NKo', {parent:component,parentTop:layout,state:'stjZhXr'});
ec('td');
ec('tr');
}else if (cndm3D7) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });