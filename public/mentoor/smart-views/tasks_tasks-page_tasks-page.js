_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {cPAHkw1HN:'gold-icon',cbOk6BUnT:'tasks-board',cQGhkoYMs:'layout',c_2AJ9GlA:'task-modal'},
                render: function (component) {
                    let cmpTfH4 = this._lc('cQGhkoYMs', {parent:component,content:(layout) => {let elNfCFR = eo('h1',null,null,`class`,`heading`);
let elXfGPe = eo('i',null,null,`class`,`${fas('tasks')} mr-2 icon`);
ec('i');
text(`Tasks`);
let elCzXGN = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cndO8gs = ! component.user.isLoggedIn();
this.setState('st0qn_a', cndO8gs);
let cnduOcr = !(cndO8gs);
this.setState('stuIS8_', cnduOcr);
if (cndO8gs) { 
let eld8P6y = eo('div','SfAf',null,`class`,`m-t-2`);
let elVgdUq = eo('p','ZUef');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let elu0WBZ = eo('p','G_Df');
text(`Each task you complete before the date time, you ean more`);
let cmpIV5Q = this._lc('cPAHkw1HN', {parent:component,parentTop:layout,state:'st0qn_a'});
text(`, but also you`);
let elQzxG3 = eo('strong','gLAf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let elB8xD5 = eo('p','4yBf');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elkw_fO = eo('div','fPNf',null,`class`,`text-center m-t-3`);
let elDKDA1 = eo('a','VB3f',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elqrz_M = eo('i','ehYf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login!`);
ec('a');
let elY5hiU = eo('strong','Cmrf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let elbUdj9 = eo('a','Luqf',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let el8cl1c = eo('i','qLPf',null,`class`,`${fas('unlock')} mr-2 icon`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cndwcIF = component.user.id == 1;
this.setState('styuaLP', cndwcIF);
if (cndwcIF) { 
let elN6gOJ = eo('button','jOJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let elB_hUT = eo('i','Ckdf',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Task`);
ec('button');
}let cmpA1x6 = this._lc('cbOk6BUnT', {parent:component,parentTop:layout});
}}});
let cnd5FPl = component.modalType;
this.setState('stKrQOn', cnd5FPl);
if (cnd5FPl) { 
let cmpOBH8 = this._lc('c_2AJ9GlA', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stKrQOn'});
}
                    this.isReadyToGo();
                }
        });