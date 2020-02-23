_Component({
                selector: 'course-section-videos-list',
                c: 'CourseSectionVideosList', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['videos'],
                children: {},
                render: function (component) {
                    let cndDuiM = ! Is.empty(component.videos);
this.setState('stW41T8', cndDuiM);
if (cndDuiM) { 
let el0NIw3 = eo('table','t6Qf',null,`class`,`table table-bordered`);
let eleiodB = eo('tbody','qdvf');
for (let i in component.videos) {
let video = component.videos[i]; 
 let iibxtG = 'sL6zOOo' + i;
let elRPHWs = eo('tr','ZlheaixquLuY' + i+iibxtG);
let elNiVbd = eo('td','H00ff'+iibxtG);
text(video.title);
ec('td');
let elnsgH6 = eo('td','kFQff'+iibxtG);
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