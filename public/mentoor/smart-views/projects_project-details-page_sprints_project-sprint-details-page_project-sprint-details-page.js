_Component({
                selector: 'project-sprint-details-page',
                c: 'ProjectSprintDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','sprint'],
                children: {c9mj6E5k6:'markdown',ctFymp4JZ:'project-layout'},
                render: function (component) {
                    let cmpxNGm = this._lc('ctFymp4JZ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elkNK4U = eo('div',null,null,`class`,`float-right m-b-1`);
let elKcAKC = eo('a',null,null,`href`,`${URLS.project(component.project, 'sprints')}`,`class`,`btn bold btn-purple`);
let ellJQI2 = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            Sprints
            List`);
ec('a');
ec('div');
let elok_v3 = eo('h1',null,null,`class`,`heading`);
text(component.sprint.name);
ec('h1');
let elbcE3g = eo('div',null,null,`class`,`row m-t-3`);
let eld2PaJ = eo('div',null,null,`class`,`col-9`);
let elRCFpy = eo('div',null,null,`class`,`simple-card`);
let cmpqhOf = this._lc('c9mj6E5k6', {parent:component,parentTop:projectLayout,props:{content:component.sprint.goal}});
ec('div');
ec('div');
let elHsSDR = eo('div',null,null,`class`,`col`);
let elXot79 = eo('div',null,null,`class`,`card p-1`);
let elkT5zZ = eo('h3',null,null,`class`,`text-center m-b-1`);
text(`Sprint Details`);
ec('h3');
let elaU7jw = eo('div',null,null,`class`,`m-b-1`);
let el7YDc7 = eo('span',null,null,`class`,`mr-3`);
text(`Status`);
ec('span');
let elK1EU0 = eo('strong');
text(component.sprint.status.capitalize());
ec('strong');
ec('div');
let elGrcr7 = eo('div',null,null,`class`,`m-b-1`);
let ele9aj1 = eo('span',null,null,`class`,`mr-3`);
text(`Starts At`);
ec('span');
let el5m3o8 = eo('strong');
text(component.sprint.startsAt);
ec('strong');
ec('div');
let el2u7EM = eo('div',null,null,`class`,`m-b-1`);
let el0VyRj = eo('span',null,null,`class`,`mr-3`);
text(`Ends At`);
ec('span');
let elKznfu = eo('strong');
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