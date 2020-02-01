_Component({
                selector: 'courses-page',
                c: 'CoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['title'],
                children: {c_Tdte8J7:'layout'},
                render: function (component) {
                    let cmpftFS = this._lc('c_Tdte8J7', {parent:component,content:(layout) => {let elWrLRQ = eo('a',null,null,`title`,`${trans(`Create new project`)}`,`href`,`/courses/new`,`class`,`btn float-sm-right d-sm-inline-block btn-success bold`);
let elNC70A = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Course`);
ec('a');
let elxPdnL = eo('h1');
text(component.title);
ec('h1');
let el3_KH1 = eo('p');
text(`This section of the application will contain various courses with different levels and categories.`);
ec('p');
}});

                    this.isReadyToGo();
                }
        });