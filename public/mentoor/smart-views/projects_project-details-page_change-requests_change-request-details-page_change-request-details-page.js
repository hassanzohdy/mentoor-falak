_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {czvkOFL6I:'markdown',cV46pWtmX:'project-layout'},
                render: function (component) {
                    let cmpeMXC = this._lc('cV46pWtmX', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el2I8AR = eo('div',null,null,`class`,`float-right m-b-1`);
let eluwAJQ = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let elZDY9i = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let elivcL4 = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let elyVjSn = eo('div',null,null,`class`,`row m-t-3`);
let elGYmto = eo('div',null,null,`class`,`col-9`);
let elDpSAX = eo('div',null,null,`class`,`simple-card`);
let cmps3QG = this._lc('czvkOFL6I', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elMwBJx = eo('div',null,null,`class`,`col`);
let elzfY8M = eo('div',null,null,`class`,`card p-1`);
let elRM01v = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elEWAUJ = eo('div',null,null,`class`,`m-b-1`);
let el2GzCS = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let elSwj3G = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let elYS3ev = eo('div',null,null,`class`,`m-b-1`);
let elc1Txw = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let elP_zSW = eo('span');
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