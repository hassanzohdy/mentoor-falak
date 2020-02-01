_Component({
                selector: 'courses-page',
                c: 'CoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title'],
                children: {cFUy97uWf:'layout'},
                render: function (component) {
                    let cmpoZFV = this._lc('cFUy97uWf', {parent:component,content:(layout) => {let elfuA_i = eo('a',null,null,`title`,`${trans(`Create new project`)}`,`href`,`/courses/new`,`class`,`btn float-sm-right d-sm-inline-block btn-success bold`);
let elMp0SF = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Course`);
ec('a');
let elYT6yB = eo('h1');
text(component.title);
ec('h1');
let elIylaR = eo('p');
text(`This section of the application will contain various courses with different levels and categories.`);
ec('p');
}});

                    this.isReadyToGo();
                }
        });