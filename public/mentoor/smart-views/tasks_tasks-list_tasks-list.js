_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {cC3Ljpf3M:'flk-time-ago',cVNvioJPS:'gold-icon',cvZLWw9PF:'task-modal'},
                render: function (component) {
                    let elIB3nF = eo('table',null,null,`class`,`table table.bordered table-striped`);
let elxDl2C = eo('thead');
let el22yLj = eo('tr');
let elDzLli = eo('th');
ec('th');
let eloQeZU = eo('th');
text(`Participant`);
ec('th');
let el7NX5a = eo('th');
text(`Title`);
ec('th');
let elRJLNu = eo('th');
text(`Created`);
ec('th');
let elTObnJ = eo('th');
text(`Status`);
ec('th');
let elt6KpE = eo('th');
text(`Starts at`);
ec('th');
let elKPjzK = eo('th');
text(`Ends at`);
ec('th');
let elRZLKI = eo('th');
text(`Reward`);
ec('th');
let el6fL4n = eo('th');
text(`Penalty ratio`);
ec('th');
let ela_dRN = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eljd8Ul = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let iiWtUl = 'msNe7qk' + index;
let el5QCk6 = eo('tr','oJwNkn3AF0yW' + index+iiWtUl);
let elYr077 = eo('td','7zPff'+iiWtUl);
text(task.id);
ec('td');
let elYycPz = eo('td','V88ff'+iiWtUl);
text(task.participant.name);
ec('td');
let elPo_Ed = eo('td','XNeff'+iiWtUl);
text(task.title);
ec('td');
let elqwXab = eo('td','h6cff'+iiWtUl);
let cmprQDu = this._lc('cC3Ljpf3M', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +iiWtUl});
ec('td');
let el358_L = eo('td','MLnff'+iiWtUl);
let el5V3HN = eo('span','80Aff'+iiWtUl,null,`class`,`task-status badge`);
el5V3HN.cls = taskStatus(task);

            for (let className in el5V3HN.cls) {
                el5V3HN.classList.toggle(className, el5V3HN.cls[className]);
            }  
            text(task.status);
ec('span');
ec('td');
let elSHXwL = eo('td','SpJff'+iiWtUl);
text(task.startsAt);
ec('td');
console.log(task.startsAt);
let elkyNaV = eo('td','a4uff'+iiWtUl);
text(task.endsAt);
ec('td');
let elVpiEG = eo('td','PK6ff'+iiWtUl);
let cmp46c_ = this._lc('cVNvioJPS', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +iiWtUl});
ec('td');
let elUM9YY = eo('td','z11ff'+iiWtUl,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let elfZ1O5 = eo('td','cObff'+iiWtUl);
let elxfZAw = eo('a','Mpfff'+iiWtUl,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let elWLO9Y = eo('i','k4Cff'+iiWtUl,null,`class`,`${fas('eye') + ' icon'}`);
ec('i');
ec('a');
let cndUPJy = component.taskCanBeEdited(task);
this.setState('st5EB7J', cndUPJy);
if (cndUPJy) { 
let elPACSe = eo('button','_wDff'+iiWtUl,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let eloqg4A = eo('i','sBPff'+iiWtUl,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}let cnd_96B = component.user.id == 1;
this.setState('stSfuPt', cnd_96B);
if (cnd_96B) { 
let elbX0Gv = eo('button','S0Hff'+iiWtUl,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let elNv9r_ = eo('i','gFcff'+iiWtUl,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cndSGju = component.editingTask;
this.setState('stvqh6D', cndSGju);
if (cndSGju) { 
let cmpLJmD = this._lc('cvZLWw9PF', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stvqh6D'});
}
                    this.isReadyToGo();
                }
        });