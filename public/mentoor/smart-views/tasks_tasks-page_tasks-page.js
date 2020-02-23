_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {cKw9pDnBc:'gold-icon',co9DXmlqh:'tasks-board',cBe7eeeI_:'layout',ciAlIqcnT:'task-modal'},
                render: function (component) {
                    let cmpopHZ = this._lc('cBe7eeeI_', {parent:component,content:(layout) => {let elweMKZ = eo('h1',null,null,`class`,`heading`);
let elzW30a = eo('i',null,null,`class`,`${fas('tasks') + ' mr-2 icon'}`);
ec('i');
text(`Tasks`);
let elhEOR8 = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cnd9yST = ! component.user.isLoggedIn();
this.setState('stVQroI', cnd9yST);
let cndEghp = !(cnd9yST);
this.setState('stbtAAh', cndEghp);
if (cnd9yST) { 
let elt0Xhj = eo('div','Y3df',null,`class`,`m-t-2`);
let el_U_4X = eo('p','Y2of');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let el4RZAg = eo('p','1unf');
text(`Each task you complete before the date time, you ean more`);
let cmp6yJZ = this._lc('cKw9pDnBc', {parent:component,parentTop:layout,state:'stVQroI'});
text(`, but also you`);
let elQo8Yf = eo('strong','Jdhf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let elVI8X3 = eo('p','hJpf');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elCJvV9 = eo('div','2Ssf',null,`class`,`text-center m-t-3`);
let elBLhGK = eo('a','1pOf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elWdTsL = eo('i','jJ1f',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login!`);
ec('a');
let elSy_DP = eo('strong','Pl3f',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elSu8sR = eo('a','rb4f',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let elx7qNr = eo('i','1L1f',null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cndNEKa = component.user.id == 1;
this.setState('stIoO__', cndNEKa);
if (cndNEKa) { 
let elXCDvA = eo('button','w1Of',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let elvfd6d = eo('i','lcrf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
}let cmpPVvr = this._lc('co9DXmlqh', {parent:component,parentTop:layout});
}}});
let cndZbh6 = component.modalType;
this.setState('stE27pN', cndZbh6);
if (cndZbh6) { 
let cmp84wc = this._lc('ciAlIqcnT', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stE27pN'});
}
                    this.isReadyToGo();
                }
        });