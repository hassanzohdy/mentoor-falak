_Component({
                selector: 'tasks-page',
                c: 'TasksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title','user','openTaskModal','modalType','closeModal','getTaskObject'],
                children: {cvI0pu917:'gold-icon',cPkDHW_uQ:'tasks-board',c1xldZXph:'layout',ca0NaIEqQ:'task-modal'},
                render: function (component) {
                    let cmpFKjt = this._lc('c1xldZXph', {parent:component,content:(layout) => {let el8hHdP = eo('h1',null,null,`class`,`heading`);
let elLqHwg = eo('i',null,null,`class`,`${fas('tasks')} mr-2 icon`);
ec('i');
text(`Tasks`);
let elYygmc = eo('small',null,null,`class`,`teal-text bold`);
text(component.title);
ec('small');
ec('h1');
let cndrd4w = ! component.user.isLoggedIn();
this.setState('stPrK1k', cndrd4w);
let cndz3rz = !(cndrd4w);
this.setState('stLmiA9', cndz3rz);
if (cndrd4w) { 
let el_zUjE = eo('div','nt0f',null,`class`,`m-t-2`);
let elleUSQ = eo('p','1gUf');
text(`Manage your mind, and time in sequence of tasks set for you based on your needs!`);
ec('p');
let elyN4Vu = eo('p','JzKf');
text(`Each task you complete before the date time, you ean more`);
let cmpPdNT = this._lc('cvI0pu917', {parent:component,parentTop:layout,state:'stPrK1k'});
text(`, but also you`);
let elbOMU4 = eo('strong','T_sf',null,`class`,`mx-2 red-text`);
text(`pay`);
ec('strong');
text(`if you didn't deliver in time.`);
ec('p');
let elNTKPA = eo('p','m52f');
text(`That approach helps you to manage your time more and will help you to increase the habit of delivering in
            time.`);
ec('p');
let elBI5O0 = eo('div','j7Tf',null,`class`,`text-center m-t-3`);
let el9ZFyf = eo('a','reGf',null,`href`,`/login`,`class`,`btn bold btn-danger text-uppercase`);
let elMRWkQ = eo('i','lLSf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login!`);
ec('a');
let elMxFIY = eo('strong','fHQf',null,`class`,`mx-4`);
text(`OR`);
ec('strong');
let eld84Uo = eo('a','LeYf',null,`href`,`/register`,`class`,`btn bold btn-info text-uppercase`);
let elFQJk4 = eo('i','Snmf',null,`class`,`${fas('unlock')} mr-2 icon`);
ec('i');
text(`Create new account!`);
ec('a');
ec('div');
ec('div');
}else { 
let cndEYYb = component.user.id == 1;
this.setState('stOeLHU', cndEYYb);
if (cndEYYb) { 
let elNVPUE = eo('button','u7cf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTaskModal('add')}]},`class`,`btn btn-success bold`);
let elEg224 = eo('i','8Z8f',null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Task`);
ec('button');
}let cmp3rRm = this._lc('cPkDHW_uQ', {parent:component,parentTop:layout});
}}});
let cndTT_K = component.modalType;
this.setState('stnK4Gn', cndTT_K);
if (cndTT_K) { 
let cmpDN2F = this._lc('ca0NaIEqQ', {parent:component,props:{task:component.getTaskObject()},events:{onclose:function(e) {let $el = this; component.closeModal()}},state:'stnK4Gn'});
}
                    this.isReadyToGo();
                }
        });