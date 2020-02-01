_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {cVARJ2Iwl:'gold-icon',cnZlwPOj4:'tasks-board',cSAxElu1s:'layout',cDAbL3UAw:'task-modal'},
                render: function (component) {
                    let cmpTtZk = this._lc('cSAxElu1s', {parent:component,content:(layout) => {let elLCPBC = eo('h1',null,null,`class`,`heading`);
let elMTKE7 = eo('i',null,null,`class`,`${fas('tasks') + ' mr-2 icon'}`);
ec('i');
text(`Tasks`);
let elCNqjQ = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cndWms5 = ! component.user.isLoggedIn();
this.setState('stB0Efg', cndWms5);
let cndW4vf = !(cndWms5);
this.setState('st31HFr', cndW4vf);
if (cndWms5) { 
let ela4ZHW = eo('div','cDtf',null,`class`,`m-t-2`);
let elTFDzK = eo('p','e6wf');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let elgcF39 = eo('p','nLNf');
text(`Each task you complete before the date time, you ean more`);
let cmpFqy9 = this._lc('cVARJ2Iwl', {parent:component,parentTop:layout,state:'stB0Efg'});
text(`, but also you`);
let elmbTw7 = eo('strong','E74f',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let elCBkZL = eo('p','QgIf');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elm6II1 = eo('div','n8Tf',null,`class`,`text-center m-t-3`);
let el5LR_j = eo('a','YHuf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elMM58l = eo('i','fyjf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login!`);
ec('a');
let eloA4ff = eo('strong','CgWf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elrma0J = eo('a','TLdf',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let el6hYnC = eo('i','_N4f',null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cndZyjd = component.user.id == 1;
this.setState('stFsiKO', cndZyjd);
if (cndZyjd) { 
let elEn1vQ = eo('button','G7tf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let eljXSUb = eo('i','MLZf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
}let cmpoYsw = this._lc('cnZlwPOj4', {parent:component,parentTop:layout});
}}});
let cndaxGW = component.modalType;
this.setState('stWNOdK', cndaxGW);
if (cndaxGW) { 
let cmpCko_ = this._lc('cDAbL3UAw', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stWNOdK'});
}
                    this.isReadyToGo();
                }
        });