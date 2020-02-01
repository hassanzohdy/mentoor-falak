_Component({
                selector: 'project-tasks-board-page',
                c: 'ProjectTasksBoardPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','totalTasks','supervisors','participants','updateTasksList','modalIsOpened','statuses','adjustTaskResponse'],
                children: {csncMyCUk:'tasks-board',cXOUZFFcT:'project-layout',cx0ijyu6F:'task-modal'},
                render: function (component) {
                    let cmpM58D = this._lc('cXOUZFFcT', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elEVPwb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elvv8d4 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Task`);
ec('button');
let el8rt0q = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Tasks Board
        (${ component.totalTasks })`);
ec('h1');
component.tasksBoard = this._lc('csncMyCUk', {parent:component,parentTop:projectLayout,props:{project:component.project,tasks:component.project.tasks,supervisors:component.supervisors,participants:component.participants},events:{onchange:function(e) {let $el = this; component.updateTasksList(e)}}});
}});
let cndr8Tw = component.modalIsOpened;
this.setState('stoxyGP', cndr8Tw);
if (cndr8Tw) { 
component.modal = this._lc('cx0ijyu6F', {parent:component,props:{statuses:component.statuses,participants:component.participants,supervisors:component.supervisors,project:component.project},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null},onsave:function(e) {let $el = this; component.adjustTaskResponse(e)}},state:'stoxyGP'});
}
                    this.isReadyToGo();
                }
        });