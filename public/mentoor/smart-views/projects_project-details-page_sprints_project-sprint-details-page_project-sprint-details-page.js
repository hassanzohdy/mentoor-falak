_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {cYwbBErfq:'markdown',cqAtT6S0R:'project-layout'},
                render: function (component) {
                    let cmpPJZS = this._lc('cqAtT6S0R', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el089Jw = eo('div',null,null,`class`,`float-right m-b-1`);
let elOjyGr = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let elu6zlA = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let el3AwyH = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let elMWi3l = eo('div',null,null,`class`,`row m-t-3`);
let elyFV6c = eo('div',null,null,`class`,`col-9`);
let elw2TXc = eo('div',null,null,`class`,`simple-card`);
let cmpGHzR = this._lc('cYwbBErfq', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elBHPRp = eo('div',null,null,`class`,`col`);
let elJQIko = eo('div',null,null,`class`,`card p-1`);
let elM0fJp = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let el6e7Xd = eo('div',null,null,`class`,`m-b-1`);
let elG5H3i = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let elU536d = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let ellMwxj = eo('div',null,null,`class`,`m-b-1`);
let elmisNH = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let elSQLZN = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let elt6snY = eo('div',null,null,`class`,`m-b-1`);
let elWHxF5 = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let elu_bEu = eo('strong');
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