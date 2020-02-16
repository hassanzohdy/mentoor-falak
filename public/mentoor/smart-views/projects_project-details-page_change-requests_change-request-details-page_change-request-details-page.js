_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {chF1hL7jP:'markdown',cPVziP2l6:'project-layout'},
                render: function (component) {
                    let cmpKjsK = this._lc('cPVziP2l6', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el_926t = eo('div',null,null,`class`,`float-right m-b-1`);
let elMlUf2 = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let elYl5Bj = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let elRgQa_ = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let elxEi8a = eo('div',null,null,`class`,`row m-t-3`);
let el9Z6Aw = eo('div',null,null,`class`,`col-9`);
let el13pEh = eo('div',null,null,`class`,`simple-card`);
let cmpJGex = this._lc('chF1hL7jP', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elierHO = eo('div',null,null,`class`,`col`);
let elwuSi4 = eo('div',null,null,`class`,`card p-1`);
let elu8P6k = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elOGO0X = eo('div',null,null,`class`,`m-b-1`);
let eltvMQN = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let elJSqJj = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let elN7J9r = eo('div',null,null,`class`,`m-b-1`);
let el2O3bk = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let eltLafP = eo('span');
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