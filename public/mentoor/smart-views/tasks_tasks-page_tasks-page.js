_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {cHAn8wHdy:'gold-icon',cTIZl8Cp8:'tasks-board',cLSO2chYs:'layout',cPyK2dJlm:'task-modal'},
                render: function (component) {
                    let cmpmuMr = this._lc('cLSO2chYs', {parent:component,content:(layout) => {let eldGvwK = eo('h1',null,null,`class`,`heading`);
let ellJv4d = eo('i',null,null,`class`,`${fas('tasks') + ' mr-2 icon'}`);
ec('i');
text(`Tasks`);
let elg7frN = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cnd5xSu = ! component.user.isLoggedIn();
this.setState('stTB7Bh', cnd5xSu);
let cndrSqM = !(cnd5xSu);
this.setState('strKeMp', cndrSqM);
if (cnd5xSu) { 
let el6P8zG = eo('div','r99f',null,`class`,`m-t-2`);
let elGSHHg = eo('p','fN0f');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let el6zyV5 = eo('p','p2qf');
text(`Each task you complete before the date time, you ean more`);
let cmpxLht = this._lc('cHAn8wHdy', {parent:component,parentTop:layout,state:'stTB7Bh'});
text(`, but also you`);
let elA959t = eo('strong','VmTf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let elyu2lr = eo('p','Ibdf');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elBTiC8 = eo('div','HCnf',null,`class`,`text-center m-t-3`);
let elkqVbF = eo('a','MJpf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elXEDG2 = eo('i','joQf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login!`);
ec('a');
let elMm1DX = eo('strong','PIjf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elPCq6L = eo('a','FQlf',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let elQZGgU = eo('i','ZRlf',null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cnd9Wf3 = component.user.id == 1;
this.setState('stpDtIY', cnd9Wf3);
if (cnd9Wf3) { 
let elP_xti = eo('button','DWcf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let elGINs1 = eo('i','LLCf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
}let cmpSJ9b = this._lc('cTIZl8Cp8', {parent:component,parentTop:layout});
}}});
let cndCchD = component.modalType;
this.setState('stA80cp', cndCchD);
if (cndCchD) { 
let cmpw5zb = this._lc('cPyK2dJlm', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stA80cp'});
}
                    this.isReadyToGo();
                }
        });