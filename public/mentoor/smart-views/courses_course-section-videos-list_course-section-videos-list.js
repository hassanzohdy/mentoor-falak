_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndKR71 = ! Is.empty(component.videos);
this.setState('stk6XtN', cndKR71);
if (cndKR71) { 
let elfeKlQ = eo('table','bILf',null,`class`,`table table-bordered`);
let el3pBuH = eo('tbody','IAsf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let iiDYHP = 'YC7M6zt' + i;
let elilqU6 = eo('tr','HMHBYptfkyv8' + i+iiDYHP);
let el9d3G5 = eo('td','EYGff'+iiDYHP);
text(video.title);
ec('td');
let elcTdQy = eo('td','5rJff'+iiDYHP);
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