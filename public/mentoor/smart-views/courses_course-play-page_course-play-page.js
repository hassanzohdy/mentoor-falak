_Component({
                selector: 'course-play-page',
                c: 'CoursePlayPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elmz31s = eo('h1');
text(`course-play-page component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });