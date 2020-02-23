_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {cJU9sJGoU:'tasks-board',cwa_eKHdi:'project-layout',cbKGzH3Ze:'task-modal'},
                render: function (component) {
                    let cmpKCfL = this._lc('cwa_eKHdi', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elZ_DUt = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elaBfNb = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Task`);
ec('button');
let elGdojA = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('cJU9sJGoU', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cndQnGI = component.modalIsOpened;
this.setState('stavXn6', cndQnGI);
if (cndQnGI) { 
component.modal = this._lc('cbKGzH3Ze', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stavXn6'});
}
                    this.isReadyToGo();
                }
        });