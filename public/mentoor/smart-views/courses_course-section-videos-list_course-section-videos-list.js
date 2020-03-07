_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndWsxe = ! Is.empty(component.videos);
this.setState('stZ4tEo', cndWsxe);
if (cndWsxe) { 
let el1eUAa = eo('table','33_f',null,`class`,`table table-bordered`);
let elMSQi3 = eo('tbody','oMqf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let iiSupW = 'hr9uLYc' + i;
let elPKHUY = eo('tr','QKiOXSIcOy8w' + i+iiSupW);
let elEHdOi = eo('td','DZ8ff'+iiSupW);
text(video.title);
ec('td');
let elM0HUN = eo('td','X9jff'+iiSupW);
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