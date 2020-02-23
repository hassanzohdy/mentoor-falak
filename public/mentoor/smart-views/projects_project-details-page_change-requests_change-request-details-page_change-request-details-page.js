_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {cpmBdvR8E:'markdown',ccG936fJA:'project-layout'},
                render: function (component) {
                    let cmp_s_d = this._lc('ccG936fJA', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elampGS = eo('div',null,null,`class`,`float-right m-b-1`);
let elG03S1 = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let eleP5ic = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let elMfeDs = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let elG9CXd = eo('div',null,null,`class`,`row m-t-3`);
let el4HIEd = eo('div',null,null,`class`,`col-9`);
let elNX49v = eo('div',null,null,`class`,`simple-card`);
let cmpaOxf = this._lc('cpmBdvR8E', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elMIKB9 = eo('div',null,null,`class`,`col`);
let elKqDSR = eo('div',null,null,`class`,`card p-1`);
let elFzqtl = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elVPwWo = eo('div',null,null,`class`,`m-b-1`);
let eleMT7D = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let eljCCaL = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let el8zcS6 = eo('div',null,null,`class`,`m-b-1`);
let el661k6 = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let elbnL3Q = eo('span');
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