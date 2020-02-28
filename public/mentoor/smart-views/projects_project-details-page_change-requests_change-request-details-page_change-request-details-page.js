_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {c5JAV3WoJ:'markdown',cDv44cOpR:'project-layout'},
                render: function (component) {
                    let cmpm5O5 = this._lc('cDv44cOpR', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elB2JOF = eo('div',null,null,`class`,`float-right m-b-1`);
let ely0o_W = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let elYPgZn = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let elp3zhO = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let elobBML = eo('div',null,null,`class`,`row m-t-3`);
let elRXUR3 = eo('div',null,null,`class`,`col-9`);
let elbajPE = eo('div',null,null,`class`,`simple-card`);
let cmpaO0A = this._lc('c5JAV3WoJ', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elismkk = eo('div',null,null,`class`,`col`);
let elZRxkS = eo('div',null,null,`class`,`card p-1`);
let elhtTD5 = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let eli0_p6 = eo('div',null,null,`class`,`m-b-1`);
let elJFA4m = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let elFPQBm = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let el3HlJz = eo('div',null,null,`class`,`m-b-1`);
let elz2Nza = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let elpkuiQ = eo('span');
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