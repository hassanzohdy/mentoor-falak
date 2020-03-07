_Component({
                selector: 'project-user-stories-page',
                c: 'ProjectUserStoriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','defaultSchema','userStories'],
                children: {cRhRDZIpk:'user-stories-board',c0mWgmY9B:'project-layout'},
                render: function (component) {
                    let cmpYQce = this._lc('c0mWgmY9B', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elM577q = eo('a',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add', Object.clone(component.defaultSchema))}]},`href`,`${URLS.project(component.project, 'user-stories') + '/new'}`,`class`,`float-right btn btn-success bold`);
let eloU0NO = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`User story`);
ec('a');
let elEQwmk = eo('h1',null,null,`class`,`m-y-1 bold m-b-3`);
text(`User stories`);
ec('h1');
let cmpVaRh = this._lc('cRhRDZIpk', {parent:component,parentTop:projectLayout,props:{userStories:component.userStories,project:component.project},events:{onchange:function(e) {let $el = this; component.userStories = e}}});
}});

                    this.isReadyToGo();
                }
        });