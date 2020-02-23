_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {cdGzTpsgL:'tasks-board',cAvLrQAXV:'project-layout',cwJ7h7cb4:'task-modal'},
                render: function (component) {
                    let cmpx9l8 = this._lc('cAvLrQAXV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eliKi4A = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elgLT7g = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Task`);
ec('button');
let elFGOGH = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('cdGzTpsgL', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cndETrH = component.modalIsOpened;
this.setState('stSJyWc', cndETrH);
if (cndETrH) { 
component.modal = this._lc('cwJ7h7cb4', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stSJyWc'});
}
                    this.isReadyToGo();
                }
        });