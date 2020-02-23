_Component({
                selector: 'courses-page',
                c: 'CoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title'],
                children: {cCv1OpBeW:'layout'},
                render: function (component) {
                    let cmpLwUS = this._lc('cCv1OpBeW', {parent:component,content:(layout) => {let elrOwOu = eo('a',null,null,`title`,`${trans(`Create new project`)}`,`href`,`/courses/new`,`class`,`btn float-sm-right d-sm-inline-block btn-success bold`);
let elcGQQy = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Course`);
ec('a');
let elq4iuw = eo('h1');
text(component.title);
ec('h1');
let elOrfNF = eo('p');
text(`This section of the application will contain various courses with different levels and categories.`);
ec('p');
}});

                    this.isReadyToGo();
                }
        });