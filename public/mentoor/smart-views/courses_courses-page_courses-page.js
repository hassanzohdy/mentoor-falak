_Component({
                selector: 'courses-page',
                c: 'CoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title'],
                children: {cllp1tstb:'layout'},
                render: function (component) {
                    let cmpw3S6 = this._lc('cllp1tstb', {parent:component,content:(layout) => {let elSr_f5 = eo('a',null,null,`title`,`${trans(`Create new project`)}`,`href`,`/courses/new`,`class`,`btn float-sm-right d-sm-inline-block btn-success bold`);
let elE07rA = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Course`);
ec('a');
let elhWJ77 = eo('h1');
text(component.title);
ec('h1');
let el5GIDl = eo('p');
text(`This section of the application will contain various courses with different levels and categories.`);
ec('p');
}});

                    this.isReadyToGo();
                }
        });