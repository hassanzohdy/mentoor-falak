_Component({
                selector: 'project-user-stories-page',
                c: 'ProjectUserStoriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','defaultSchema','userStories'],
                children: {cWBgmxEP5:'user-stories-board',cdi363iRO:'project-layout'},
                render: function (component) {
                    let cmptj1W = this._lc('cdi363iRO', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eleXO1Q = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', Object.clone(component.defaultSchema))}]},`href`,`${URLS.project(component.project, 'user-stories') + '/new'}`,`class`,`float-right btn btn-success bold`);
let elPTlpe = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`User story`);
ec('a');
let elrU9Ik = eo('h1',null,null,`class`,`m-y-1 bold m-b-3`);
text(`User stories`);
ec('h1');
let cmpacPB = this._lc('cWBgmxEP5', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}}});
}});

                    this.isReadyToGo();
                }
        });