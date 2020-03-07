_Component({
                selector: 'admin-table',
                c: 'AdminTable', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tableHeading','hideAddBtn','addNewItem','addHeading','records','columns'],
                children: {cm4XT8RmK:'flk-spinner',crUX7MkXZ:'layout'},
                render: function (component) {
                    let cmpgBRU = this._lc('crUX7MkXZ', {parent:component,content:(layout) => {let ell6loh = eo('div',null,null,`class`,`d-flex justify-content-between align-items-center flex-wrap mb-3`);
let elAw_1I = eo('h2',null,null,`class`,`tableHeading bold`);
text(trans(component.tableHeading));
ec('h2');
let cndkBet = !component.hideAddBtn;
this.setState('stFpFtv', cndkBet);
if (cndkBet) { 
let elPdJZ0 = eo('button','xV3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewItem()}]},`class`,`btn btn-info`);
let eluG_n0 = eo('i','JaKf',null,`class`,`${fas('plus')} icon`);
ec('i');
text(trans('add-new-item', trans(component.addHeading)));
ec('button');
}ec('div');
let cndf7Yf = ! Is.empty(component.records);
this.setState('stc0m41', cndf7Yf);
if (cndf7Yf) { 
let elCaeuC = eo('small','0aof',null,`class`,`m-b-1 d-block`);
text(`Displaying`);
let elFMHgk = eo('strong','PDnf',null,`class`,`mx-2`);
text(component.records.length.format());
ec('strong');
text(`Records.`);
ec('small');
}let el5Ofnh = eo('div',null,null,`class`,`table-responsive`);
let elPsnJZ = eo('table',null,null,`class`,`table table-hover admin-table`);
let eleEYQk = eo('thead',null,null,`class`,`thead-light`);
let el4Zooj = eo('tr');
for (let i in component.columns) {
let col = component.columns[i]; 
 let iiKc4y = '8JDxC9L' + i;
let elBszJF = eo('th','dz50rlsQ1Q59' + i+iiKc4y);
text(trans(col));
ec('th');
}
ec('tr');
ec('thead');
let elc2ecy = eo('tbody');
let cndXQRc = component.inputs.parent.isLoading;
this.setState('sthOenW', cndXQRc);
let cndFthR = !Is.empty(component.records);
this.setState('steK50A', cndFthR);
if (cndXQRc) { 
let elr0Vvp = eo('tr','K5mf');
let elOp79x = eo('td','Qjrf',null,`colspan`,`${ component.columns.length }`);
let cmpQMGN = this._lc('cm4XT8RmK', {parent:component,parentTop:layout,state:'sthOenW'});
ec('td');
ec('tr');
}else if (cndFthR) { 

        if (this.hasContent()) {
            this.content();
        }}ec('tbody');
ec('table');
ec('div');
}});

                    this.isReadyToGo();
                }
        });