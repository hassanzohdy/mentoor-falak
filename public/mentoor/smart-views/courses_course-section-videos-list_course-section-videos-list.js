_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndqUkj = ! Is.empty(component.videos);
this.setState('stNrpad', cndqUkj);
if (cndqUkj) { 
let elCUIMa = eo('table','kAnf',null,`class`,`table table-bordered`);
let elXcD9R = eo('tbody','3uyf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let ii3Ze3 = 'OaJrceG' + i;
let elGD2tA = eo('tr','HIoYyjChP8D1' + i+ii3Ze3);
let el7koER = eo('td','AQSff'+ii3Ze3);
text(video.title);
ec('td');
let elcI__S = eo('td','1zhff'+ii3Ze3);
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