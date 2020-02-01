_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {c15q5DaLj:'flk-time-ago',ckYzHDCVr:'gold-icon',cslgECLQV:'task-modal'},
                render: function (component) {
                    let eluquQ2 = eo('table',null,null,`class`,`table table.bordered table-striped`);
let elIHJJF = eo('thead');
let elh8EFf = eo('tr');
let el3L2Qe = eo('th');
text(`#`);
ec('th');
let elLa8G5 = eo('th');
text(`Participant`);
ec('th');
let elmzCV1 = eo('th');
text(`Title`);
ec('th');
let elyeYmS = eo('th');
text(`Created`);
ec('th');
let elL8YxF = eo('th');
text(`Status`);
ec('th');
let ellPab6 = eo('th');
text(`Starts at`);
ec('th');
let eluezLZ = eo('th');
text(`Ends at`);
ec('th');
let elRom6Q = eo('th');
text(`Reward`);
ec('th');
let el3mWaj = eo('th');
text(`Penalty ratio`);
ec('th');
let elv5kJ6 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elO0pku = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let ii_2ql = 'vjkb8O0' + index;
let elLIKxL = eo('tr','iacp3eclas22' + index+ii_2ql);
let elgf5ih = eo('td','1YOff'+ii_2ql);
text(task.id);
ec('td');
let elgTkru = eo('td','3skff'+ii_2ql);
text(task.participant.name);
ec('td');
let el7vJz9 = eo('td','x05ff'+ii_2ql);
text(task.title);
ec('td');
let elgGMNG = eo('td','1Etff'+ii_2ql);
let cmpMszM = this._lc('c15q5DaLj', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +ii_2ql});
ec('td');
let el5GJOD = eo('td','vxvff'+ii_2ql);
let elr60B6 = eo('span','JB4ff'+ii_2ql,null,`class`,`task-status badge`);
elr60B6.cls = taskStatus(task);

            for (let className in elr60B6.cls) {
                elr60B6.classList.toggle(className, elr60B6.cls[className]);
            }  
            text(task.status);
ec('span');
ec('td');
let elrxbUu = eo('td','nl7ff'+ii_2ql);
text(task.startsAt);
ec('td');
let elQEjS1 = eo('td','rf_ff'+ii_2ql);
text(task.endsAt);
ec('td');
let els1Jys = eo('td','Squff'+ii_2ql);
let cmp_Kbr = this._lc('ckYzHDCVr', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +ii_2ql});
ec('td');
let elq2evR = eo('td','POyff'+ii_2ql,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let elzVmgp = eo('td','6Nnff'+ii_2ql);
let elndRxB = eo('a','mO5ff'+ii_2ql,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let elLhAQq = eo('i','nBvff'+ii_2ql,null,`class`,`${fas('eye') + ' icon'}`);
ec('i');
ec('a');
let cndqnFD = component.taskCanBeEdited(task);
this.setState('stNGBgJ', cndqnFD);
if (cndqnFD) { 
let eliFZD7 = eo('button','3KKff'+ii_2ql,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let eliQc_5 = eo('i','J8Bff'+ii_2ql,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}let cndx1qb = component.user.id == 1;
this.setState('stWF2j7', cndx1qb);
if (cndx1qb) { 
let eleWKze = eo('button','fNhff'+ii_2ql,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let elVbOBu = eo('i','1Kfff'+ii_2ql,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cndjKyq = component.editingTask;
this.setState('stX62tz', cndjKyq);
if (cndjKyq) { 
let cmpn8Ie = this._lc('cslgECLQV', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stX62tz'});
}
                    this.isReadyToGo();
                }
        });