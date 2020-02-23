_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {cZFUpY8Dh:'markdown',cpfwLA1do:'project-layout'},
                render: function (component) {
                    let cmp08va = this._lc('cpfwLA1do', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elbFHGz = eo('div',null,null,`class`,`float-right m-b-1`);
let elmrmo0 = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let elNjLAf = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let el1HQXh = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let elvxcyp = eo('div',null,null,`class`,`row m-t-3`);
let elr6pes = eo('div',null,null,`class`,`col-9`);
let elyvCbn = eo('div',null,null,`class`,`simple-card`);
let cmpc3IG = this._lc('cZFUpY8Dh', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let el3Zaq4 = eo('div',null,null,`class`,`col`);
let elWErnq = eo('div',null,null,`class`,`card p-1`);
let elpyAor = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let eluyzDp = eo('div',null,null,`class`,`m-b-1`);
let el98S5W = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let elZpbHB = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let el7789V = eo('div',null,null,`class`,`m-b-1`);
let elSMqF3 = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let elhiN06 = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let el5dsw5 = eo('div',null,null,`class`,`m-b-1`);
let ela0FVE = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let elrBaA2 = eo('strong');
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