_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {c1wTz5WaR:'markdown',cssh7ebOM:'project-layout'},
                render: function (component) {
                    let cmpT_pv = this._lc('cssh7ebOM', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eljTtxj = eo('div',null,null,`class`,`float-right m-b-1`);
let elZthJx = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let ely231a = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let elkdWwR = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let el1CG1A = eo('div',null,null,`class`,`row m-t-3`);
let elqswfJ = eo('div',null,null,`class`,`col-9`);
let elign8a = eo('div',null,null,`class`,`simple-card`);
let cmpmWj0 = this._lc('c1wTz5WaR', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elKWEBZ = eo('div',null,null,`class`,`col`);
let el7r_ZK = eo('div',null,null,`class`,`card p-1`);
let el_0rYj = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let elY77Kv = eo('div',null,null,`class`,`m-b-1`);
let el37mOX = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let elZuqHs = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let elBIvMI = eo('div',null,null,`class`,`m-b-1`);
let elUhCZ6 = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let elLrd1x = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let el_hjlc = eo('div',null,null,`class`,`m-b-1`);
let elIG8dI = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let eltfGcb = eo('strong');
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