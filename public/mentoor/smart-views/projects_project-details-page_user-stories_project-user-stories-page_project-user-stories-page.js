_Component({
                selector: 'project-user-stories-page',
                c: 'ProjectUserStoriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','defaultSchema','userStories'],
                children: {coADVEH81:'user-stories-board',cd5O7XQXm:'project-layout'},
                render: function (component) {
                    let cmpHr7o = this._lc('cd5O7XQXm', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elwHwiv = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', Object.clone(component.defaultSchema))}]},`href`,`${URLS.project(component.project, 'user-stories') + '/new'}`,`class`,`float-right btn btn-success bold`);
let elX62CH = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`User story`);
ec('a');
let el92WRE = eo('h1',null,null,`class`,`m-y-1 bold m-b-3`);
text(`User stories`);
ec('h1');
let cmp6SM6 = this._lc('coADVEH81', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}}});
}});

                    this.isReadyToGo();
                }
        });