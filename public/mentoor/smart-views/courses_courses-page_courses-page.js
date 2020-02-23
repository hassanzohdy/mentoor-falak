_Component({
                selector: 'courses-page',
                c: 'CoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title'],
                children: {chEm8fwPu:'layout'},
                render: function (component) {
                    let cmpv4fm = this._lc('chEm8fwPu', {parent:component,content:(layout) => {let elqGBvO = eo('a',null,null,`title`,`${trans(`Create new project`)}`,`href`,`/courses/new`,`class`,`btn float-sm-right d-sm-inline-block btn-success bold`);
let elAA44Z = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Course`);
ec('a');
let eln26hm = eo('h1');
text(component.title);
ec('h1');
let elkDobm = eo('p');
text(`This section of the application will contain various courses with different levels and categories.`);
ec('p');
}});

                    this.isReadyToGo();
                }
        });