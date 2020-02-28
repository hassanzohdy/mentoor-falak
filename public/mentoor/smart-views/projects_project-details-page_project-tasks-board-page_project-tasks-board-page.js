_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {cg1mws4aY:'tasks-board',cIMpznlyT:'project-layout',cBNhAtcvJ:'task-modal'},
                render: function (component) {
                    let cmpwq6i = this._lc('cIMpznlyT', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el6K795 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elx62Ek = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Task`);
ec('button');
let el5gCiX = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('cg1mws4aY', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cndVc3D = component.modalIsOpened;
this.setState('stuKgon', cndVc3D);
if (cndVc3D) { 
component.modal = this._lc('cBNhAtcvJ', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stuKgon'});
}
                    this.isReadyToGo();
                }
        });