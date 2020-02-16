_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {cNmXOZ9Oq:'flk-time-ago',c3FH1Aryy:'gold-icon',cFGv5xEbh:'task-modal'},
                render: function (component) {
                    let elc4euk = eo('table',null,null,`class`,`table table.bordered table-striped`);
let el9YU_I = eo('thead');
let ela0UWd = eo('tr');
let el2vRv3 = eo('th');
text(`#`);
ec('th');
let el1695H = eo('th');
text(`Participant`);
ec('th');
let el9lPqg = eo('th');
text(`Title`);
ec('th');
let elTBl34 = eo('th');
text(`Created`);
ec('th');
let elorNX6 = eo('th');
text(`Status`);
ec('th');
let elwhDUj = eo('th');
text(`Starts at`);
ec('th');
let el6Q6jy = eo('th');
text(`Ends at`);
ec('th');
let eliwEWD = eo('th');
text(`Reward`);
ec('th');
let elnDYok = eo('th');
text(`Penalty ratio`);
ec('th');
let eljdrVt = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elo0r7U = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let iiXgdS = 'vQobeVN' + index;
let el1o8kc = eo('tr','OzmxF39C2YNh' + index+iiXgdS);
let elwE97x = eo('td','WIaff'+iiXgdS);
text(task.id);
ec('td');
let elGRSxO = eo('td','1dHff'+iiXgdS);
text(task.participant.name);
ec('td');
let el0v6Hu = eo('td','Zo0ff'+iiXgdS);
text(task.title);
ec('td');
let eloFIKM = eo('td','lqWff'+iiXgdS);
let cmpAK5R = this._lc('cNmXOZ9Oq', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +iiXgdS});
ec('td');
let elP80c4 = eo('td','QUAff'+iiXgdS);
let elm9Xn0 = eo('span','QAJff'+iiXgdS,null,`class`,`task-status badge`);
elm9Xn0.cls = taskStatus(task);

            for (let className in elm9Xn0.cls) {
                elm9Xn0.classList.toggle(className, elm9Xn0.cls[className]);
            }  
            text(task.status);
ec('span');
ec('td');
let elsHwcc = eo('td','nopff'+iiXgdS);
text(task.startsAt);
ec('td');
let elmyyP1 = eo('td','Jyrff'+iiXgdS);
text(task.endsAt);
ec('td');
let elyD8De = eo('td','uzWff'+iiXgdS);
let cmpYbsD = this._lc('c3FH1Aryy', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +iiXgdS});
ec('td');
let elN7wdF = eo('td','PAkff'+iiXgdS,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let elBk9JK = eo('td','ZNHff'+iiXgdS);
let elb2HL7 = eo('a','xU4ff'+iiXgdS,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let elwZwhi = eo('i','5xgff'+iiXgdS,null,`class`,`${fas('eye') + ' icon'}`);
ec('i');
ec('a');
let cndDeNu = component.taskCanBeEdited(task);
this.setState('st0SckH', cndDeNu);
if (cndDeNu) { 
let ela3pig = eo('button','JR8ff'+iiXgdS,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let elDUXSk = eo('i','_bzff'+iiXgdS,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}let cnd9C_i = component.user.id == 1;
this.setState('stzXypn', cnd9C_i);
if (cnd9C_i) { 
let el2CjLr = eo('button','sOLff'+iiXgdS,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let elUCLou = eo('i','auWff'+iiXgdS,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cndthgn = component.editingTask;
this.setState('stEJCaE', cndthgn);
if (cndthgn) { 
let cmpTSwc = this._lc('cFGv5xEbh', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stEJCaE'});
}
                    this.isReadyToGo();
                }
        });