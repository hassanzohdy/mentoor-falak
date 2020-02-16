_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {cSs06iD5T:'tasks-board',coO45cAza:'project-layout',cILrtrtOd:'task-modal'},
                render: function (component) {
                    let cmp8apY = this._lc('coO45cAza', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el9cLwL = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elN1n7e = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Task`);
ec('button');
let elm8bM1 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('cSs06iD5T', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cnd98Gr = component.modalIsOpened;
this.setState('stSqnpv', cnd98Gr);
if (cnd98Gr) { 
component.modal = this._lc('cILrtrtOd', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stSqnpv'});
}
                    this.isReadyToGo();
                }
        });