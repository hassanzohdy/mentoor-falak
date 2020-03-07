_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {crLMmTcLk:'tasks-board',cmZtYdGYu:'project-layout',cH1FQkdXo:'task-modal'},
                render: function (component) {
                    let cmpkAsJ = this._lc('cmZtYdGYu', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eldB97v = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elJOPkh = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Task`);
ec('button');
let eliBvdn = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('crLMmTcLk', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cndArmp = component.modalIsOpened;
this.setState('stluSzc', cndArmp);
if (cndArmp) { 
component.modal = this._lc('cH1FQkdXo', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stluSzc'});
}
                    this.isReadyToGo();
                }
        });