_Component({
                selector: 'project-poll-details-page',
                c: 'ProjectPollDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: false,
                observe: [],
                children: {},
                render: function (component) {
                    let elbcsBL = eo('h1');
text(`project-poll-details-page component is ready`);
ec('h1');

                    this.isReadyToGo();
                }
        });