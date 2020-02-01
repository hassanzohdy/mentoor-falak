_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {cgWUFtNAU:'markdown',cKviJ8R4c:'project-layout'},
                render: function (component) {
                    let cmp2dy_ = this._lc('cKviJ8R4c', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXoYz6 = eo('div',null,null,`class`,`float-right m-b-1`);
let elLf9yN = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let elUnxAW = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let elR0HvN = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let el9D_CI = eo('div',null,null,`class`,`row m-t-3`);
let el5sMpV = eo('div',null,null,`class`,`col-9`);
let elyWwiO = eo('div',null,null,`class`,`simple-card`);
let cmpwgoV = this._lc('cgWUFtNAU', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elq9Q2t = eo('div',null,null,`class`,`col`);
let elMZad1 = eo('div',null,null,`class`,`card p-1`);
let el2QGRK = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elOj9Fa = eo('div',null,null,`class`,`m-b-1`);
let elN0QzW = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let elWaGXU = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let elktFMp = eo('div',null,null,`class`,`m-b-1`);
let elr4f4k = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let el5ERwd = eo('span');
text(component.changeRequest.requestDate);
ec('span');
ec('div');
ec('div');
ec('div');
ec('div');
}});

                    this.isReadyToGo();
                }
        });