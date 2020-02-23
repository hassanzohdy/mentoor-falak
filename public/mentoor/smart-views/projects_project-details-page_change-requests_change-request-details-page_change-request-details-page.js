_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {c6hYvqPvd:'markdown',cvjFfsoy9:'project-layout'},
                render: function (component) {
                    let cmp9wKA = this._lc('cvjFfsoy9', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elORRNs = eo('div',null,null,`class`,`float-right m-b-1`);
let elnd_tN = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let elQC5WR = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let elcIrGj = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let el96am0 = eo('div',null,null,`class`,`row m-t-3`);
let elGAkR3 = eo('div',null,null,`class`,`col-9`);
let elvvj2b = eo('div',null,null,`class`,`simple-card`);
let cmpMcWJ = this._lc('c6hYvqPvd', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elQDKXe = eo('div',null,null,`class`,`col`);
let elxFJsO = eo('div',null,null,`class`,`card p-1`);
let elebD4I = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elSQhkY = eo('div',null,null,`class`,`m-b-1`);
let elJ7qQq = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let el6Y_Kn = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let elO6Z2J = eo('div',null,null,`class`,`m-b-1`);
let elpJ6kj = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let elZ6DUc = eo('span');
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