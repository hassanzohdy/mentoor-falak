_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndctoh = ! Is.empty(component.videos);
this.setState('stLu_7M', cndctoh);
if (cndctoh) { 
let elKEyNa = eo('table','zzyf',null,`class`,`table table-bordered`);
let elyCgAX = eo('tbody','jTQf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let iiplbS = 'HKUbajw' + i;
let elQ807S = eo('tr','14XGGRvrYZDN' + i+iiplbS);
let elsjihf = eo('td','ODmff'+iiplbS);
text(video.title);
ec('td');
let eld7D50 = eo('td','i8Eff'+iiplbS);
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