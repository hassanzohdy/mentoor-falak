_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndheFS = ! Is.empty(component.videos);
this.setState('stTzF4B', cndheFS);
if (cndheFS) { 
let elM14qB = eo('table','0Qnf',null,`class`,`table table-bordered`);
let el02cj9 = eo('tbody','1tHf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let iicyz8 = 'lDOFWE3' + i;
let elh69AF = eo('tr','IqXkcTpOvjHh' + i+iicyz8);
let elWWWUM = eo('td','QKiff'+iicyz8);
text(video.title);
ec('td');
let eliPyuY = eo('td','AR2ff'+iicyz8);
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