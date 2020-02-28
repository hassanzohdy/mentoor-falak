_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {cmN00_vXR:'gold-icon',cDHgTKgPe:'tasks-board',cc7H8nnHt:'layout',cJz9DELYd:'task-modal'},
                render: function (component) {
                    let cmplH19 = this._lc('cc7H8nnHt', {parent:component,content:(layout) => {let eloQxGN = eo('h1',null,null,`class`,`heading`);
let elKqX76 = eo('i',null,null,`class`,`${fas('tasks')} mr-2 icon`);
ec('i');
text(`Tasks`);
let el1rQQf = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cndNRaV = ! component.user.isLoggedIn();
this.setState('stlgF6q', cndNRaV);
let cndR_lI = !(cndNRaV);
this.setState('st0uzGy', cndR_lI);
if (cndNRaV) { 
let elr1hme = eo('div','4BSf',null,`class`,`m-t-2`);
let elI4wQW = eo('p','HQpf');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let elmfbiw = eo('p','ImRf');
text(`Each task you complete before the date time, you ean more`);
let cmp8zly = this._lc('cmN00_vXR', {parent:component,parentTop:layout,state:'stlgF6q'});
text(`, but also you`);
let elvZc5w = eo('strong','tuYf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let el1c06M = eo('p','UTAf');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elODNxL = eo('div','DaYf',null,`class`,`text-center m-t-3`);
let elZjsRj = eo('a','p_wf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let el2cC1_ = eo('i','xrnf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login!`);
ec('a');
let el6piNL = eo('strong','Xptf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elXVCHi = eo('a','E52f',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let elDnnnO = eo('i','JPLf',null,`class`,`${fas('unlock')} mr-2 icon`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cnd0wum = component.user.id == 1;
this.setState('stQ9x9U', cnd0wum);
if (cnd0wum) { 
let ellbBW7 = eo('button','R72f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let elrMx7T = eo('i','zJif',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Task`);
ec('button');
}let cmpc3z4 = this._lc('cDHgTKgPe', {parent:component,parentTop:layout});
}}});
let cndGbn8 = component.modalType;
this.setState('stwmkFb', cndGbn8);
if (cndGbn8) { 
let cmpxQ1Y = this._lc('cJz9DELYd', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stwmkFb'});
}
                    this.isReadyToGo();
                }
        });