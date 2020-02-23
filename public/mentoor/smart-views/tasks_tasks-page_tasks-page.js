_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {chovz2yad:'gold-icon',cib7IwkOL:'tasks-board',cxqfK3jTL:'layout',cNL1FphOo:'task-modal'},
                render: function (component) {
                    let cmpA2R3 = this._lc('cxqfK3jTL', {parent:component,content:(layout) => {let el_g5z8 = eo('h1',null,null,`class`,`heading`);
let elYZLXw = eo('i',null,null,`class`,`${fas('tasks') + ' mr-2 icon'}`);
ec('i');
text(`Tasks`);
let el0mvAS = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cndiIH5 = ! component.user.isLoggedIn();
this.setState('sts2Rxn', cndiIH5);
let cndwupd = !(cndiIH5);
this.setState('stqE01J', cndwupd);
if (cndiIH5) { 
let elWpkbJ = eo('div','gkzf',null,`class`,`m-t-2`);
let eluNxLw = eo('p','9qEf');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let el4Mqrt = eo('p','xzAf');
text(`Each task you complete before the date time, you ean more`);
let cmpHoFd = this._lc('chovz2yad', {parent:component,parentTop:layout,state:'sts2Rxn'});
text(`, but also you`);
let el9PDO1 = eo('strong','HkPf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let el_t3SL = eo('p','F7xf');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elBPctI = eo('div','ufjf',null,`class`,`text-center m-t-3`);
let elk8HPn = eo('a','t9Gf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elrNZ3U = eo('i','2kYf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login!`);
ec('a');
let elUh5Lu = eo('strong','EgFf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elykraG = eo('a','wyaf',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let elRy70b = eo('i','9vtf',null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cndvcqs = component.user.id == 1;
this.setState('st1MpAy', cndvcqs);
if (cndvcqs) { 
let elrom46 = eo('button','K1ef',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let elcBYlJ = eo('i','7DCf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
}let cmpmdF2 = this._lc('cib7IwkOL', {parent:component,parentTop:layout});
}}});
let cndmxE1 = component.modalType;
this.setState('stsgWCU', cndmxE1);
if (cndmxE1) { 
let cmpHy6R = this._lc('cNL1FphOo', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stsgWCU'});
}
                    this.isReadyToGo();
                }
        });