_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndbc11 = ! Is.empty(component.videos);
this.setState('stEgFRy', cndbc11);
if (cndbc11) { 
let elXQJci = eo('table','u_af',null,`class`,`table table-bordered`);
let elfW8a1 = eo('tbody','IZdf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let ii7yBp = 'lZXRy1K' + i;
let eloHa1r = eo('tr','kBafhZKyuIN7' + i+ii7yBp);
let el01zLy = eo('td','GP9ff'+ii7yBp);
text(video.title);
ec('td');
let eld9j8R = eo('td','jAxff'+ii7yBp);
text(String(video.duration.minutes).padStart(2, '0') + ':' + String(video.duration.seconds).padStart(2, '0'));
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}
                    this.isReadyToGo();
                }
        });