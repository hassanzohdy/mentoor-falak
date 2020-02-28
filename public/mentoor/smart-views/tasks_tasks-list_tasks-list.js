_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {cBeAeRcd9:'flk-time-ago',cxbVTO0FR:'gold-icon',cPNUO7_bo:'task-modal'},
                render: function (component) {
                    let eltzeib = eo('table',null,null,`class`,`table table.bordered table-striped`);
let elDxe3l = eo('thead');
let elclTli = eo('tr');
let el2Bees = eo('th');
ec('th');
let elPznGy = eo('th');
text(`Participant`);
ec('th');
let elgp_ps = eo('th');
text(`Title`);
ec('th');
let elJGjJr = eo('th');
text(`Created`);
ec('th');
let elrUZiv = eo('th');
text(`Status`);
ec('th');
let ellQ6lx = eo('th');
text(`Starts at`);
ec('th');
let ela69pR = eo('th');
text(`Ends at`);
ec('th');
let elj1nTh = eo('th');
text(`Reward`);
ec('th');
let elMUyeN = eo('th');
text(`Penalty ratio`);
ec('th');
let el5OwPX = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elh1Zz5 = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let ii7_iu = 'dvrUrfJ' + index;
let elIp3kP = eo('tr','JuOny8NyFAga' + index+ii7_iu);
let elEvR6N = eo('td','Ct5ff'+ii7_iu);
text(task.id);
ec('td');
let elFXJXR = eo('td','kXBff'+ii7_iu);
text(task.participant.name);
ec('td');
let elAls7V = eo('td','xuwff'+ii7_iu);
text(task.title);
ec('td');
let elgEyGF = eo('td','rGpff'+ii7_iu);
let cmpKxP_ = this._lc('cBeAeRcd9', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +ii7_iu});
ec('td');
let elfDUUC = eo('td','H3Off'+ii7_iu);
let elpIRDQ = eo('span','FtNff'+ii7_iu,null,`class`,`task-status badge ${cls(taskStatus(task))}`);
text(task.status);
ec('span');
ec('td');
let el3SbEC = eo('td','DZCff'+ii7_iu);
text(task.startsAt);
ec('td');
console.log(task.startsAt);
let elwF9iC = eo('td','Qqrff'+ii7_iu);
text(task.endsAt);
ec('td');
let elNFOOD = eo('td','Hwsff'+ii7_iu);
let cmpCMT0 = this._lc('cxbVTO0FR', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +ii7_iu});
ec('td');
let el5bvKH = eo('td','l3Nff'+ii7_iu,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let el7Eacc = eo('td','9TUff'+ii7_iu);
let elS8Xvs = eo('a','Xivff'+ii7_iu,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let el2f5ky = eo('i','CNyff'+ii7_iu,null,`class`,`${fas('eye')} icon`);
ec('i');
ec('a');
let cndWDyj = component.taskCanBeEdited(task);
this.setState('st1eqTp', cndWDyj);
if (cndWDyj) { 
let elf9XZh = eo('button','9Byff'+ii7_iu,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let elhlNtO = eo('i','FJCff'+ii7_iu,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');
}let cnd4YVO = component.user.id == 1;
this.setState('stp6pJs', cnd4YVO);
if (cnd4YVO) { 
let el2K4Pm = eo('button','shnff'+ii7_iu,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let elEA_OU = eo('i','9VIff'+ii7_iu,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cnd4NEj = component.editingTask;
this.setState('stVei85', cnd4NEj);
if (cnd4NEj) { 
let cmpijVj = this._lc('cPNUO7_bo', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stVei85'});
}
                    this.isReadyToGo();
                }
        });