_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {cbh5WjeDr:'markdown',cTVMg6LRG:'project-layout'},
                render: function (component) {
                    let cmpAYRc = this._lc('cTVMg6LRG', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eliTJPv = eo('div',null,null,`class`,`float-right m-b-1`);
let elgqzxG = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let elPJz2o = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let elC5n9Q = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let elOiYNE = eo('div',null,null,`class`,`row m-t-3`);
let elYp84h = eo('div',null,null,`class`,`col-9`);
let elw7QkA = eo('div',null,null,`class`,`simple-card`);
let cmpGIwk = this._lc('cbh5WjeDr', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elgUn9F = eo('div',null,null,`class`,`col`);
let elNJR1C = eo('div',null,null,`class`,`card p-1`);
let elHlfdU = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let elg_RM7 = eo('div',null,null,`class`,`m-b-1`);
let elW2nJz = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let elSQYXI = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let elPcADw = eo('div',null,null,`class`,`m-b-1`);
let elkmGu3 = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let elsiHxX = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let elRZBnW = eo('div',null,null,`class`,`m-b-1`);
let eltHQJ_ = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let el8e448 = eo('strong');
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