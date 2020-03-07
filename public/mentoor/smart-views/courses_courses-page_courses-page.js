_Component({
                selector: 'courses-page',
                c: 'CoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title'],
                children: {cQ457w_yA:'layout'},
                render: function (component) {
                    let cmp2qtW = this._lc('cQ457w_yA', {parent:component,content:(layout) => {let elKlCG6 = eo('a',null,null,`title`,`${trans(`Create new project`)}`,`href`,`/courses/new`,`class`,`btn float-sm-right d-sm-inline-block btn-success bold`);
let eli5Z3x = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Course`);
ec('a');
let elPjsUi = eo('h1');
text(component.title);
ec('h1');
let elS5wlw = eo('p');
text(`This section of the application will contain various courses with different levels and categories.`);
ec('p');
}});

                    this.isReadyToGo();
                }
        });