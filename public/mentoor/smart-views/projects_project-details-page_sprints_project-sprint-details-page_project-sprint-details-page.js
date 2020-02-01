_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {cZxTUCP8U:'markdown',cWNpUzWrL:'project-layout'},
                render: function (component) {
                    let cmpUZlV = this._lc('cWNpUzWrL', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elZtxf_ = eo('div',null,null,`class`,`float-right m-b-1`);
let elewtnm = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let el9pG_Q = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let els8Uz1 = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let elTmt2i = eo('div',null,null,`class`,`row m-t-3`);
let elTLjsT = eo('div',null,null,`class`,`col-9`);
let elhTUMO = eo('div',null,null,`class`,`simple-card`);
let cmp28aX = this._lc('cZxTUCP8U', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elqRXpF = eo('div',null,null,`class`,`col`);
let elGun_o = eo('div',null,null,`class`,`card p-1`);
let el1aaJs = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let elsx_ow = eo('div',null,null,`class`,`m-b-1`);
let elqoTah = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let eltjFcy = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let elGT3K2 = eo('div',null,null,`class`,`m-b-1`);
let eldO60N = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let elyvJJQ = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let elDvyV8 = eo('div',null,null,`class`,`m-b-1`);
let elrnu21 = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let el5w5PB = eo('strong');
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