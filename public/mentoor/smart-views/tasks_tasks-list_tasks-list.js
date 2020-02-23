_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {cquIni2j6:'flk-time-ago',cXYt7M5fA:'gold-icon',cFjrK8AIa:'task-modal'},
                render: function (component) {
                    let elIib0O = eo('table',null,null,`class`,`table table.bordered table-striped`);
let elBtaL9 = eo('thead');
let elmYqMf = eo('tr');
let elaGK7J = eo('th');
text(`#`);
ec('th');
let elv1rlq = eo('th');
text(`Participant`);
ec('th');
let el_CtNz = eo('th');
text(`Title`);
ec('th');
let el6C7yU = eo('th');
text(`Created`);
ec('th');
let elhY6Ws = eo('th');
text(`Status`);
ec('th');
let eliT7Mq = eo('th');
text(`Starts at`);
ec('th');
let elJKL4y = eo('th');
text(`Ends at`);
ec('th');
let elUO1yA = eo('th');
text(`Reward`);
ec('th');
let elUxWdO = eo('th');
text(`Penalty ratio`);
ec('th');
let elBetE2 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elHZddX = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let iiFoqr = 'PMCSGkZ' + index;
let elaG3Is = eo('tr','ZmGLkfClkl6I' + index+iiFoqr);
let elY2Gc0 = eo('td','qEXff'+iiFoqr);
text(task.id);
ec('td');
let eluzE02 = eo('td','fmYff'+iiFoqr);
text(task.participant.name);
ec('td');
let elKzGnK = eo('td','rgkff'+iiFoqr);
text(task.title);
ec('td');
let elTEvzB = eo('td','HBpff'+iiFoqr);
let cmpqSiD = this._lc('cquIni2j6', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +iiFoqr});
ec('td');
let elM09MQ = eo('td','f2Lff'+iiFoqr);
let elJIriU = eo('span','WR1ff'+iiFoqr,null,`class`,`task-status badge`);
elJIriU.cls = taskStatus(task);

            for (let className in elJIriU.cls) {
                elJIriU.classList.toggle(className, elJIriU.cls[className]);
            }  
            text(task.status);
ec('span');
ec('td');
let elXgYdG = eo('td','eO0ff'+iiFoqr);
text(task.startsAt);
ec('td');
console.log(task.startsAt);
let elCx78W = eo('td','vJjff'+iiFoqr);
text(task.endsAt);
ec('td');
let elFnx3u = eo('td','jlAff'+iiFoqr);
let cmpuO7l = this._lc('cXYt7M5fA', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +iiFoqr});
ec('td');
let elVUXGD = eo('td','vZvff'+iiFoqr,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let elM5tg1 = eo('td','sPnff'+iiFoqr);
let elTQf0k = eo('a','D_0ff'+iiFoqr,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let el7UI15 = eo('i','XJfff'+iiFoqr,null,`class`,`${fas('eye') + ' icon'}`);
ec('i');
ec('a');
let cnd_moL = component.taskCanBeEdited(task);
this.setState('st_PCc3', cnd_moL);
if (cnd_moL) { 
let eldCJWV = eo('button','AWQff'+iiFoqr,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let el2iprU = eo('i','fr6ff'+iiFoqr,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}let cndUnEl = component.user.id == 1;
this.setState('stAWCMk', cndUnEl);
if (cndUnEl) { 
let elgWJ8A = eo('button','s8Dff'+iiFoqr,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let eluUBx3 = eo('i','3bvff'+iiFoqr,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cndw77T = component.editingTask;
this.setState('stfa1Td', cndw77T);
if (cndw77T) { 
let cmp81Tx = this._lc('cFjrK8AIa', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stfa1Td'});
}
                    this.isReadyToGo();
                }
        });