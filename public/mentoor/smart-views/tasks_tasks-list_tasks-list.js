_Component({
                selector: 'tasks-list',
                c: 'TasksList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tasks','taskCanBeEdited','editingTask','user','deleteTask'],
                children: {c3OEWNDG6:'flk-time-ago',cGDl0ipVe:'gold-icon',cWwBvKe8_:'task-modal'},
                render: function (component) {
                    let el1pnlp = eo('table',null,null,`class`,`table table.bordered table-striped`);
let el_CxXR = eo('thead');
let elgvEE_ = eo('tr');
let el_GD_P = eo('th');
text(`#`);
ec('th');
let elhubsF = eo('th');
text(`Participant`);
ec('th');
let el25IGA = eo('th');
text(`Title`);
ec('th');
let elR1Gzj = eo('th');
text(`Created`);
ec('th');
let elC1uEJ = eo('th');
text(`Status`);
ec('th');
let el3kfeo = eo('th');
text(`Starts at`);
ec('th');
let elfXPrk = eo('th');
text(`Ends at`);
ec('th');
let eltA6ZS = eo('th');
text(`Reward`);
ec('th');
let elaP4MC = eo('th');
text(`Penalty ratio`);
ec('th');
let el8cLMy = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elw2ve8 = eo('tbody');
for (let index in component.tasks) {
let task = component.tasks[index]; 
 let iiMZ5e = 'mJJ67_L' + index;
let el88AIh = eo('tr','Js_k8eUspOVe' + index+iiMZ5e);
let elHNSzc = eo('td','HEFff'+iiMZ5e);
text(task.id);
ec('td');
let elXMWsI = eo('td','OBcff'+iiMZ5e);
text(task.participant.name);
ec('td');
let elbEXHT = eo('td','D3Kff'+iiMZ5e);
text(task.title);
ec('td');
let elzQSec = eo('td','_Dbff'+iiMZ5e);
let cmpfisC = this._lc('c3OEWNDG6', {parent:component,props:{timestamp:task.createdAt.timestamp},insideLoop:true,index:"" +iiMZ5e});
ec('td');
let elXT8HW = eo('td','pfOff'+iiMZ5e);
let elAAAt6 = eo('span','6bQff'+iiMZ5e,null,`class`,`task-status badge`);
elAAAt6.cls = taskStatus(task);

            for (let className in elAAAt6.cls) {
                elAAAt6.classList.toggle(className, elAAAt6.cls[className]);
            }  
            text(task.status);
ec('span');
ec('td');
let el_FAIu = eo('td','Me3ff'+iiMZ5e);
text(task.startsAt);
ec('td');
let elHqKog = eo('td','09Tff'+iiMZ5e);
text(task.endsAt);
ec('td');
let elF_M61 = eo('td','bixff'+iiMZ5e);
let cmpeARl = this._lc('cGDl0ipVe', {parent:component,props:{coins:task.reward},insideLoop:true,index:"" +iiMZ5e});
ec('td');
let elXjKZH = eo('td','Kguff'+iiMZ5e,null,`class`,`bold red-text`);
text(task.penaltyRatio + 'x');
ec('td');
let elElSzY = eo('td','V80ff'+iiMZ5e);
let elHLDyD = eo('a','sLjff'+iiMZ5e,null,`href`,`/tasks/${ task.id }`,`class`,`btn btn-sm btn-primary bold`);
let el_v121 = eo('i','hYiff'+iiMZ5e,null,`class`,`${fas('eye') + ' icon'}`);
ec('i');
ec('a');
let cnd3AWF = component.taskCanBeEdited(task);
this.setState('st_FQqS', cnd3AWF);
if (cnd3AWF) { 
let elnGkxR = eo('button','oJFff'+iiMZ5e,null, eventListeners, {onclick:[function(e) {var $el = this;component.editingTask = task;}]},`type`,`button`,`class`,`btn btn-teal btn-sm`);
let elWc5Xk = eo('i','yfcff'+iiMZ5e,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}let cnduciT = component.user.id == 1;
this.setState('stM10d5', cnduciT);
if (cnduciT) { 
let elWYAmV = eo('button','9dnff'+iiMZ5e,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteTask(task, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm`);
let el8AHKy = eo('i','F5pff'+iiMZ5e,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('td');
ec('tr');
}
ec('tbody');
ec('table');
let cndbXid = component.editingTask;
this.setState('stWe32p', cndbXid);
if (cndbXid) { 
let cmpXSJ2 = this._lc('cWwBvKe8_', {parent:component,props:{task:component.editingTask},events:{onclose:function(e) {let $el = this; component.editingTask = null}},state:'stWe32p'});
}
                    this.isReadyToGo();
                }
        });