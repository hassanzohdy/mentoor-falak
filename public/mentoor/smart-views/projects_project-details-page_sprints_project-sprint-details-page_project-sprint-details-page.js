_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {c1dmFvBSe:'markdown',cioAJvz9g:'project-layout'},
                render: function (component) {
                    let cmpvbEO = this._lc('cioAJvz9g', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elQYIvu = eo('div',null,null,`class`,`float-right m-b-1`);
let elLukpA = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let elskbZX = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let ellAygD = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let elAWsq6 = eo('div',null,null,`class`,`row m-t-3`);
let elFjGnD = eo('div',null,null,`class`,`col-9`);
let elT6S3B = eo('div',null,null,`class`,`simple-card`);
let cmpttsJ = this._lc('c1dmFvBSe', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elYLGTj = eo('div',null,null,`class`,`col`);
let elJtSFw = eo('div',null,null,`class`,`card p-1`);
let elmdBK3 = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let el2VxcM = eo('div',null,null,`class`,`m-b-1`);
let ely7T4v = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let el2xqd0 = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let elCSYOh = eo('div',null,null,`class`,`m-b-1`);
let elFB1DD = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let eluP7vx = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let elILeEz = eo('div',null,null,`class`,`m-b-1`);
let elpTvds = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let elb1TAN = eo('strong');
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