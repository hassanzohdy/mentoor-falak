_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {csxxyw4h1:'markdown',cWgwn5tS6:'project-layout'},
                render: function (component) {
                    let cmpFKTo = this._lc('cWgwn5tS6', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elPURHd = eo('div',null,null,`class`,`float-right m-b-1`);
let elDK88C = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let ela7xCr = eo('i',null,null,`class`,`${fas('arrow-left')} mr-2 icon`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let el26N6D = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let el2pBK9 = eo('div',null,null,`class`,`row m-t-3`);
let elY6nlh = eo('div',null,null,`class`,`col-9`);
let el6rBnm = eo('div',null,null,`class`,`simple-card`);
let cmpEmzU = this._lc('csxxyw4h1', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let el5_dvN = eo('div',null,null,`class`,`col`);
let elBZUKv = eo('div',null,null,`class`,`card p-1`);
let el9Si1v = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elDMjY2 = eo('div',null,null,`class`,`m-b-1`);
let elSwBj9 = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let elPTpZe = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let elGTxLw = eo('div',null,null,`class`,`m-b-1`);
let elIm4HA = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let elQwDhy = eo('span');
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