_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndDH1V = ! Is.empty(component.videos);
this.setState('stRlb6V', cndDH1V);
if (cndDH1V) { 
let elbNrFM = eo('table','Y2pf',null,`class`,`table table-bordered`);
let elgQgYf = eo('tbody','I6Of');
for (let i in component.videos) {
let video = component.videos[i]; 
 let iichi_ = 'v0an8Ih' + i;
let elyTt6j = eo('tr','BauLgnj3nXC2' + i+iichi_);
let elcOCuy = eo('td','UMmff'+iichi_);
text(video.title);
ec('td');
let elghGnn = eo('td','AP9ff'+iichi_);
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