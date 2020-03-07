_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {cqMgSwKS3:'flk-time-ago',cHk8Gdbeq:'gold-icon',cyJbciRcb:'task-modal'},
                render: function (component) {
                    let el7a8DJ = eo('table',null,null,`class`,`table table.bordered table-striped`);
let elq5Hv0 = eo('thead');
let el2Y0VV = eo('tr');
let el0SIL5 = eo('th');
ec('th');
let elL2Cgx = eo('th');
text(`Participant`);
ec('th');
let elJvPUY = eo('th');
text(`Title`);
ec('th');
let eltocY1 = eo('th');
text(`Created`);
ec('th');
let elubU0D = eo('th');
text(`Status`);
ec('th');
let elNgY_H = eo('th');
text(`Starts at`);
ec('th');
let eloPhku = eo('th');
text(`Ends at`);
ec('th');
let elj7OYv = eo('th');
text(`Reward`);
ec('th');
let elcShlo = eo('th');
text(`Penalty ratio`);
ec('th');
let elA9iQz = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eleCyM2 = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let iiGHKB = '_6R3Uc9' + index;
let elxOPRa = eo('tr','MGxM1TCeEUPg' + index+iiGHKB);
let elgT6yf = eo('td','FOsff'+iiGHKB);
text(task.id);
ec('td');
let elABeV_ = eo('td','WLyff'+iiGHKB);
text(task.participant.name);
ec('td');
let elviH6u = eo('td','g5hff'+iiGHKB);
text(task.title);
ec('td');
let elNyo7E = eo('td','PSgff'+iiGHKB);
let cmpKe38 = this._lc('cqMgSwKS3', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +iiGHKB});
ec('td');
let elFO3kB = eo('td','amQff'+iiGHKB);
let elAQpw0 = eo('span','1p0ff'+iiGHKB,null,`class`,`task-status badge ${cls(taskStatus(task))}`);
text(task.status);
ec('span');
ec('td');
let elvTqg_ = eo('td','PBwff'+iiGHKB);
text(task.startsAt);
ec('td');
console.log(task.startsAt);
let elXMU9u = eo('td','IG0ff'+iiGHKB);
text(task.endsAt);
ec('td');
let el8e2Mt = eo('td','Oukff'+iiGHKB);
let cmpxsqy = this._lc('cHk8Gdbeq', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +iiGHKB});
ec('td');
let el6icHA = eo('td','meYff'+iiGHKB,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let eliq5gc = eo('td','jX8ff'+iiGHKB);
let elooXLI = eo('a','nXyff'+iiGHKB,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let elYzhZh = eo('i','94Iff'+iiGHKB,null,`class`,`${fas('eye')} icon`);
ec('i');
ec('a');
let cndd3rB = component.taskCanBeEdited(task);
this.setState('stjafVA', cndd3rB);
if (cndd3rB) { 
let el4RAHe = eo('button','pg5ff'+iiGHKB,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let elqJN76 = eo('i','mSYff'+iiGHKB,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');
}let cndvrqd = component.user.id == 1;
this.setState('stNv2Y5', cndvrqd);
if (cndvrqd) { 
let el8i5KD = eo('button','5vlff'+iiGHKB,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let elag53e = eo('i','_ehff'+iiGHKB,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cnd6Xiz = component.editingTask;
this.setState('stS63gI', cnd6Xiz);
if (cnd6Xiz) { 
let cmpo3hf = this._lc('cyJbciRcb', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stS63gI'});
}
                    this.isReadyToGo();
                }
        });