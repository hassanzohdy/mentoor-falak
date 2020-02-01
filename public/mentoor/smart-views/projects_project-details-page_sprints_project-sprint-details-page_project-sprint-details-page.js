_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {c1FmEOzyZ:'markdown',cj9ADcwfT:'project-layout'},
                render: function (component) {
                    let cmpjyJr = this._lc('cj9ADcwfT', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el_ZhmU = eo('div',null,null,`class`,`float-right m-b-1`);
let elLrkDd = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let elNM1bl = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let elpV3iQ = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let elYB5W4 = eo('div',null,null,`class`,`row m-t-3`);
let el7K99c = eo('div',null,null,`class`,`col-9`);
let el4SW9r = eo('div',null,null,`class`,`simple-card`);
let cmpfSOA = this._lc('c1FmEOzyZ', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elrVdyj = eo('div',null,null,`class`,`col`);
let eltNQcf = eo('div',null,null,`class`,`card p-1`);
let eloWExD = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let elnA1zB = eo('div',null,null,`class`,`m-b-1`);
let eliEs93 = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let elOBuL8 = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let elRZhGp = eo('div',null,null,`class`,`m-b-1`);
let elQ1Guo = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let elFXaHm = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let elKvqBl = eo('div',null,null,`class`,`m-b-1`);
let elk5Skh = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let el94j23 = eo('strong');
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