_Component({
                selector: 'courses-page',
                c: 'CoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title'],
                children: {c78tGqRiq:'layout'},
                render: function (component) {
                    let cmpzsgI = this._lc('c78tGqRiq', {parent:component,content:(layout) => {let elU8Wju = eo('a',null,null,`title`,`${trans(`Create new project`)}`,`href`,`/courses/new`,`class`,`btn float-sm-right d-sm-inline-block btn-success bold`);
let elwAUJY = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Course`);
ec('a');
let el0fy3P = eo('h1');
text(component.title);
ec('h1');
let elRWbXb = eo('p');
text(`This section of the application will contain various courses with different levels and categories.`);
ec('p');
}});

                    this.isReadyToGo();
                }
        });