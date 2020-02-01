_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {c9nKpnQKk:'tasks-board',cNWrp9mt_:'project-layout',cTV0g1Mm0:'task-modal'},
                render: function (component) {
                    let cmp7cNG = this._lc('cNWrp9mt_', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elJNzdf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elCmcga = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Task`);
ec('button');
let elr3CXM = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('c9nKpnQKk', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cnd1Sc7 = component.modalIsOpened;
this.setState('st7moAw', cnd1Sc7);
if (cnd1Sc7) { 
component.modal = this._lc('cTV0g1Mm0', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'st7moAw'});
}
                    this.isReadyToGo();
                }
        });