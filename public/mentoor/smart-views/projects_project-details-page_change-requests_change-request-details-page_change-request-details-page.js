_Component({
                selector: 'change-request-details-page',
                c: 'ChangeRequestDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','changeRequest'],
                children: {cm7M1xXS6:'markdown',coxM8CTkG:'project-layout'},
                render: function (component) {
                    let cmpta2K = this._lc('coxM8CTkG', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elGEv0f = eo('div',null,null,`class`,`float-right m-b-1`);
let eliBh6Z = eo('a',null,null,`href`,`${URLS.project(component.project, 'change-requests')}`,`class`,`btn bold btn-purple`);
let elp9EqP = eo('i',null,null,`class`,`${fas('arrow-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to
            Change Requests
            List`);
ec('a');
ec('div');
let elTLicc = eo('h1',null,null,`class`,`heading`);
text(component.changeRequest.title);
ec('h1');
let eltOoAI = eo('div',null,null,`class`,`row m-t-3`);
let elg2n6K = eo('div',null,null,`class`,`col-9`);
let elt2JsE = eo('div',null,null,`class`,`simple-card`);
let cmpi1qM = this._lc('cm7M1xXS6', {parent:component,parentTop:projectLayout,props:{content:component.changeRequest.description}});
ec('div');
ec('div');
let elMvGO5 = eo('div',null,null,`class`,`col`);
let ely7Xp4 = eo('div',null,null,`class`,`card p-1`);
let elfdTkG = eo('h3',null,null,`class`,`text-center m-b-2`);
text(`Change Request Details`);
ec('h3');
let elTxZcA = eo('div',null,null,`class`,`m-b-1`);
let elM0RgI = eo('span',null,null,`class`,`mr-3`);
text(`Type`);
ec('span');
let elgJTLH = eo('strong');
text(CHANGE_REQUEST_TYPES[component.changeRequest.type]);
ec('strong');
ec('div');
let el13aF4 = eo('div',null,null,`class`,`m-b-1`);
let eldwR7q = eo('span',null,null,`class`,`mr-3`);
text(`Request Date`);
ec('span');
let elGzsn9 = eo('span');
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