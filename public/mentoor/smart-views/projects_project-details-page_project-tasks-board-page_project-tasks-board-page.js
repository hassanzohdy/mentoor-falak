_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {ckLTmRss4:'tasks-board',cpo0mHKI6:'project-layout',cRqzbeVK0:'task-modal'},
                render: function (component) {
                    let cmp3FRC = this._lc('cpo0mHKI6', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elhmEDv = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el6Qn0I = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Task`);
ec('button');
let el1PUHj = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('ckLTmRss4', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cndsiB6 = component.modalIsOpened;
this.setState('stR82CK', cndsiB6);
if (cndsiB6) { 
component.modal = this._lc('cRqzbeVK0', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stR82CK'});
}
                    this.isReadyToGo();
                }
        });