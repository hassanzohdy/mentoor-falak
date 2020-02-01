_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {c4jJ1Q_oG:'flk-spinner',cV_bAxZFY:'layout'},
                render: function (component) {
                    let cmpbRhR = this._lc('cV_bAxZFY', {parent:component,content:(layout) => {let elB9AdD = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let elwgovw = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cnd1eji = !component.hideAddBtn;
this.setState('std9S49', cnd1eji);
if (cnd1eji) { 
let elKDMgT = eo('button','kc5f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let elq9epy = eo('i','N1Cf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndbls2 = ! Is.empty(component.records);
this.setState('stWluo3', cndbls2);
if (cndbls2) { 
let elxbAiT = eo('small','5Osf',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let ellOLSv = eo('strong','ufAf',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let elr4Tlo = eo('div',null,null,`class`,`table-responsive`);
let el63SPq = eo('table',null,null,`class`,`table table-hover admin-table`);
let elyPaaK = eo('thead',null,null,`class`,`thead-light`);
let elF5nTZ = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let ii31F_ = 'jNZeDjt' + i;
let elq0aZz = eo('th','x8s4O_MmirBj' + i+ii31F_);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let elUWTlu = eo('tbody');
let cnd8e9w = component.inputs.parent.isLoading;
this.setState('stYWme1', cnd8e9w);
let cndLDuq = !Is.empty(component.records);
this.setState('stFQd26', cndLDuq);
if (cnd8e9w) { 
let eldVyAY = eo('tr','hZKf');
let elB2ymq = eo('td','8k8f',null,`colspan`,`${ component.columns.length }`);
let cmpSPLP = this._lc('c4jJ1Q_oG', {parent:component,parentTop:layout,state:'stYWme1'});
ec('td');
ec('tr');
}else if (cndLDuq) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });