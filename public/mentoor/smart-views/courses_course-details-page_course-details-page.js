_Component({
                selector: 'course-details-page',
                c: 'CourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let eloOvho = eo('h1');
text(`course-details-page component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });