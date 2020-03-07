_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {c6iheCDqI:'flk-time-ago',cOOz_gaWB:'gold-icon',cr72yfhhk:'task-modal'},
                render: function (component) {
                    let elMSZzT = eo('table',null,null,`class`,`table table.bordered table-striped`);
let elW8VVU = eo('thead');
let elRnKNN = eo('tr');
let elfIeJx = eo('th');
ec('th');
let elPHG9P = eo('th');
text(`Participant`);
ec('th');
let elEcyog = eo('th');
text(`Title`);
ec('th');
let elUCKXR = eo('th');
text(`Created`);
ec('th');
let elS6QDL = eo('th');
text(`Status`);
ec('th');
let elfPNQK = eo('th');
text(`Starts at`);
ec('th');
let elCruKt = eo('th');
text(`Ends at`);
ec('th');
let elch809 = eo('th');
text(`Reward`);
ec('th');
let eltid2u = eo('th');
text(`Penalty ratio`);
ec('th');
let elErlxw = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elnTges = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let iiQ6SG = 'hnwLJcI' + index;
let elamOPQ = eo('tr','RsLjUD1igasf' + index+iiQ6SG);
let el4fyxz = eo('td','YIGff'+iiQ6SG);
text(task.id);
ec('td');
let el1kHPA = eo('td','3Xdff'+iiQ6SG);
text(task.participant.name);
ec('td');
let elyKZzR = eo('td','eZ_ff'+iiQ6SG);
text(task.title);
ec('td');
let el77hks = eo('td','QcGff'+iiQ6SG);
let cmpnkhi = this._lc('c6iheCDqI', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +iiQ6SG});
ec('td');
let elbyyVs = eo('td','FWJff'+iiQ6SG);
let el5oxl8 = eo('span','Zxqff'+iiQ6SG,null,`class`,`task-status badge ${cls(taskStatus(task))}`);
text(task.status);
ec('span');
ec('td');
let elX42W_ = eo('td','Imjff'+iiQ6SG);
text(task.startsAt);
ec('td');
console.log(task.startsAt);
let elEdLxq = eo('td','5aUff'+iiQ6SG);
text(task.endsAt);
ec('td');
let elkT58H = eo('td','PY4ff'+iiQ6SG);
let cmpt3Ly = this._lc('cOOz_gaWB', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +iiQ6SG});
ec('td');
let elU2Y9K = eo('td','tSDff'+iiQ6SG,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let ely9TO4 = eo('td','pvZff'+iiQ6SG);
let elyPx0p = eo('a','AJEff'+iiQ6SG,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let elCYqqt = eo('i','KJIff'+iiQ6SG,null,`class`,`${fas('eye')} icon`);
ec('i');
ec('a');
let cndjHkK = component.taskCanBeEdited(task);
this.setState('stU4zx6', cndjHkK);
if (cndjHkK) { 
let el3W9i6 = eo('button','zPAff'+iiQ6SG,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let ellsjn_ = eo('i','FWdff'+iiQ6SG,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');
}let cndbvMr = component.user.id == 1;
this.setState('steQaN8', cndbvMr);
if (cndbvMr) { 
let elIyUtQ = eo('button','ExLff'+iiQ6SG,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let elT4iDn = eo('i','VK9ff'+iiQ6SG,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cndFjJN = component.editingTask;
this.setState('staZLR1', cndFjJN);
if (cndFjJN) { 
let cmp1vdI = this._lc('cr72yfhhk', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'staZLR1'});
}
                    this.isReadyToGo();
                }
        });