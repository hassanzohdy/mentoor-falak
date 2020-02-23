_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {chRKPs6jm:'flk-time-ago',cJ5rj2X1l:'gold-icon',cdO4szxQC:'task-modal'},
                render: function (component) {
                    let elbqhkL = eo('table',null,null,`class`,`table table.bordered table-striped`);
let elvNDml = eo('thead');
let elTz0pL = eo('tr');
let elhlhI8 = eo('th');
ec('th');
let el_1wd9 = eo('th');
text(`Participant`);
ec('th');
let elt1Q0K = eo('th');
text(`Title`);
ec('th');
let elkKFvJ = eo('th');
text(`Created`);
ec('th');
let eldQcrb = eo('th');
text(`Status`);
ec('th');
let elhkeaE = eo('th');
text(`Starts at`);
ec('th');
let elusn5c = eo('th');
text(`Ends at`);
ec('th');
let elRJUzZ = eo('th');
text(`Reward`);
ec('th');
let el1cpHw = eo('th');
text(`Penalty ratio`);
ec('th');
let elrDBAZ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elmxIX8 = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let iiHKzl = 'B2WcgDf' + index;
let elA7GBy = eo('tr','EIn7Sra0XFun' + index+iiHKzl);
let elEMomM = eo('td','gPGff'+iiHKzl);
text(task.id);
ec('td');
let elvSGVm = eo('td','ooEff'+iiHKzl);
text(task.participant.name);
ec('td');
let eln_hni = eo('td','8yVff'+iiHKzl);
text(task.title);
ec('td');
let elq7PWX = eo('td','bNrff'+iiHKzl);
let cmp_z1k = this._lc('chRKPs6jm', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +iiHKzl});
ec('td');
let elN41uy = eo('td','djDff'+iiHKzl);
let el_gq6A = eo('span','9KKff'+iiHKzl,null,`class`,`task-status badge`);
el_gq6A.cls = taskStatus(task);

            for (let className in el_gq6A.cls) {
                el_gq6A.classList.toggle(className, el_gq6A.cls[className]);
            }  
            text(task.status);
ec('span');
ec('td');
let elrchwa = eo('td','fiEff'+iiHKzl);
text(task.startsAt);
ec('td');
console.log(task.startsAt);
let elWg36F = eo('td','0xKff'+iiHKzl);
text(task.endsAt);
ec('td');
let elu_Bqo = eo('td','T6Sff'+iiHKzl);
let cmpqGZp = this._lc('cJ5rj2X1l', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +iiHKzl});
ec('td');
let elPCDHt = eo('td','fOXff'+iiHKzl,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let elHiBk1 = eo('td','X7kff'+iiHKzl);
let elPl6Pn = eo('a','QoDff'+iiHKzl,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let elaKAx1 = eo('i','GxDff'+iiHKzl,null,`class`,`${fas('eye') + ' icon'}`);
ec('i');
ec('a');
let cndoO4M = component.taskCanBeEdited(task);
this.setState('stNqE4c', cndoO4M);
if (cndoO4M) { 
let ely5lFf = eo('button','4Oyff'+iiHKzl,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let el9ZDWs = eo('i','Cp2ff'+iiHKzl,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}let cnd7Uim = component.user.id == 1;
this.setState('stsGdY2', cnd7Uim);
if (cnd7Uim) { 
let elQvW10 = eo('button','SDQff'+iiHKzl,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let elH7aft = eo('i','BPQff'+iiHKzl,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cnd9xJj = component.editingTask;
this.setState('stnnwsb', cnd9xJj);
if (cnd9xJj) { 
let cmpe_L0 = this._lc('cdO4szxQC', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stnnwsb'});
}
                    this.isReadyToGo();
                }
        });