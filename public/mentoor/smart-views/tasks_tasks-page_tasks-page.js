_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {c7vT_meGm:'gold-icon',c4WpjR7_6:'tasks-board',cd8XWc7A4:'layout',cwtiEiijT:'task-modal'},
                render: function (component) {
                    let cmp9VO4 = this._lc('cd8XWc7A4', {parent:component,content:(layout) => {let elP25PW = eo('h1',null,null,`class`,`heading`);
let elKQpjK = eo('i',null,null,`class`,`${fas('tasks') + ' mr-2 icon'}`);
ec('i');
text(`Tasks`);
let el5Ffqk = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cndwbK_ = ! component.user.isLoggedIn();
this.setState('stoKE03', cndwbK_);
let cndTLjC = !(cndwbK_);
this.setState('st5hj8k', cndTLjC);
if (cndwbK_) { 
let elBbmQt = eo('div','MTpf',null,`class`,`m-t-2`);
let elTJDoZ = eo('p','QXdf');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let elJOThm = eo('p','V8Rf');
text(`Each task you complete before the date time, you ean more`);
let cmpiGuq = this._lc('c7vT_meGm', {parent:component,parentTop:layout,state:'stoKE03'});
text(`, but also you`);
let elgOVr6 = eo('strong','5sAf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let elPIZJo = eo('p','G6uf');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elVocj7 = eo('div','n5Vf',null,`class`,`text-center m-t-3`);
let elSNuAL = eo('a','WlXf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elht3eP = eo('i','adPf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login!`);
ec('a');
let elscQ2n = eo('strong','0Ssf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elA420E = eo('a','DQyf',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let elX_PUV = eo('i','EA1f',null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cndrdby = component.user.id == 1;
this.setState('stiK6OQ', cndrdby);
if (cndrdby) { 
let el8B1ZW = eo('button','uUBf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let eleCYTf = eo('i','dlvf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
}let cmpOAJa = this._lc('c4WpjR7_6', {parent:component,parentTop:layout});
}}});
let cnd0Wjn = component.modalType;
this.setState('st5Rqpl', cnd0Wjn);
if (cnd0Wjn) { 
let cmpc3sX = this._lc('cwtiEiijT', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'st5Rqpl'});
}
                    this.isReadyToGo();
                }
        });