_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {cN5WzHnA8:'gold-icon',cZeNhm2cb:'tasks-board',cl1kysIh6:'layout',cz1gvHBZM:'task-modal'},
                render: function (component) {
                    let cmpxNZQ = this._lc('cl1kysIh6', {parent:component,content:(layout) => {let elEwHiQ = eo('h1',null,null,`class`,`heading`);
let ellBlkv = eo('i',null,null,`class`,`${fas('tasks') + ' mr-2 icon'}`);
ec('i');
text(`Tasks`);
let el0amP2 = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cndOf5V = ! component.user.isLoggedIn();
this.setState('stAulq5', cndOf5V);
let cnd2fYY = !(cndOf5V);
this.setState('st5jXRM', cnd2fYY);
if (cndOf5V) { 
let elmTAmF = eo('div','41if',null,`class`,`m-t-2`);
let elJXMno = eo('p','iwRf');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let el9wEO8 = eo('p','ZXZf');
text(`Each task you complete before the date time, you ean more`);
let cmpKjwk = this._lc('cN5WzHnA8', {parent:component,parentTop:layout,state:'stAulq5'});
text(`, but also you`);
let eloBZi3 = eo('strong','ofjf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let elNchZG = eo('p','F16f');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elz6tIQ = eo('div','Yzsf',null,`class`,`text-center m-t-3`);
let el6OnWG = eo('a','RB7f',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elPaNQ_ = eo('i','ADGf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login!`);
ec('a');
let elS2Tsu = eo('strong','OPtf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elDg4oD = eo('a','zLaf',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let elcA0oN = eo('i','h9of',null,`class`,`${fas('unlock') + ' mr-2 icon'}`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cndsAIt = component.user.id == 1;
this.setState('stqn2pQ', cndsAIt);
if (cndsAIt) { 
let elANBUF = eo('button','k4bf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let elYqHgd = eo('i','kU4f',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Task`);
ec('button');
}let cmpHgcj = this._lc('cZeNhm2cb', {parent:component,parentTop:layout});
}}});
let cndpXNK = component.modalType;
this.setState('stEvrWZ', cndpXNK);
if (cndpXNK) { 
let cmpQcfi = this._lc('cz1gvHBZM', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stEvrWZ'});
}
                    this.isReadyToGo();
                }
        });