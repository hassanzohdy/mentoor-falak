_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {chywqi3hO:'markdown',cvBJhYX6W:'project-layout'},
                render: function (component) {
                    let cmpVB6e = this._lc('cvBJhYX6W', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eldXEB2 = eo('div',null,null,`class`,`float-right m-b-1`);
let elpuExe = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let elk6BvI = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let elXNcPe = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let els7Ec5 = eo('div',null,null,`class`,`row m-t-3`);
let eljUMxt = eo('div',null,null,`class`,`col-9`);
let elLu3KS = eo('div',null,null,`class`,`simple-card`);
let cmpKeQ7 = this._lc('chywqi3hO', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elZH84S = eo('div',null,null,`class`,`col`);
let elLgL4X = eo('div',null,null,`class`,`card p-1`);
let elwF4LW = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let elkllzd = eo('div',null,null,`class`,`m-b-1`);
let elpN6Fx = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let elTJYjS = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let elq36jF = eo('div',null,null,`class`,`m-b-1`);
let elRIBO4 = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let elBjDZu = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let elRxvMR = eo('div',null,null,`class`,`m-b-1`);
let elGcEt7 = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let elEUBX6 = eo('strong');
text(component.sprint.endsAt);
ec('strong');
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });