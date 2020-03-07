_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {cq7bQawuz:'markdown',cHkdf5Vv1:'project-layout'},
                render: function (component) {
                    let cmpc1Nm = this._lc('cHkdf5Vv1', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elhN4nt = eo('div',null,null,`class`,`float-right m-b-1`);
let el4N3GA = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let elKMKtC = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let eliKAWS = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let elqBNLt = eo('div',null,null,`class`,`row m-t-3`);
let elWeq9S = eo('div',null,null,`class`,`col-9`);
let elJlFza = eo('div',null,null,`class`,`simple-card`);
let cmpYN92 = this._lc('cq7bQawuz', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elAHNPp = eo('div',null,null,`class`,`col`);
let elbGpCJ = eo('div',null,null,`class`,`card p-1`);
let elThNKV = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elp8qUH = eo('div',null,null,`class`,`m-b-1`);
let elCCdEn = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let el6ed9P = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let elmiUke = eo('div',null,null,`class`,`m-b-1`);
let el8E5GX = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let elY33rJ = eo('span');
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