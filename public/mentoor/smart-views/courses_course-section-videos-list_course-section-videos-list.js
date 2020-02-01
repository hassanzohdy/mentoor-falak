_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cnduB1L = ! Is.empty(component.videos);
this.setState('st2jvkn', cnduB1L);
if (cnduB1L) { 
let ellB7q2 = eo('table','XVvf',null,`class`,`table table-bordered`);
let elevRe7 = eo('tbody','TaEf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let iiHb7c = 'WBjR241' + i;
let elulH7j = eo('tr','MQfvHyqau1Ku' + i+iiHb7c);
let el41iyB = eo('td','auuff'+iiHb7c);
text(video.title);
ec('td');
let elahFNw = eo('td','yggff'+iiHb7c);
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