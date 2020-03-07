_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {cBH3AeNIy:'flk-spinner',cfbV22ihL:'layout'},
                render: function (component) {
                    let cmpkQAf = this._lc('cfbV22ihL', {parent:component,content:(layout) => {let cndGTYj = component.isLoading;
this.setState('stBy2vz', cndGTYj);
let cndtBAR = !(cndGTYj);
this.setState('stKR03g', cndtBAR);
if (cndGTYj) { 
let cmph3le = this._lc('cBH3AeNIy', {parent:component,parentTop:layout,state:'stBy2vz'});
}else { 
let elShDxe = eo('h1');
text(`Courses list`);
ec('h1');
let eljPsT4 = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cndv2he = ! Is.empty(component.courses);
this.setState('stIZGKX', cndv2he);
let cndFdat = !(cndv2he);
this.setState('stVPUdo', cndFdat);
if (cndv2he) { 
let elUlu8m = eo('div','Wjif',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iilSxP = '8VLivlG' + i;
let elNEkHB = eo('div','CUa2URX6cQ9T' + i+iilSxP,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let elCdXyP = eo('div','ed5ff'+iilSxP,null,`class`,`card`);
let elWmRgC = eo('div','bJ7ff'+iilSxP);
let elWXn95 = ev('img','jWbff'+iilSxP,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elkiDZ2 = eo('div','AO9ff'+iilSxP,null,`class`,`trackInfoTitle card-body`);
let eleKNxR = eo('a','cC9ff'+iilSxP);
let elDGFO9 = eo('h4','9rWff'+iilSxP,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let elCgiVI = eo('div','Ee9ff'+iilSxP,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let el6Bne9 = eo('span','sA5ff'+iilSxP,null,`class`,`bold orange-text`);
let elNf7HA = eo('i','Jjiff'+iilSxP,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let el6nSxe = eo('span','43sff'+iilSxP,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elNpq0g = eo('small','_09ff'+iilSxP);
text(`By:`);
let elACmkf = eo('span','cK9ff'+iilSxP,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let elb5l6y = eo('div','jnHff'+iilSxP,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let eljm178 = eo('div','iueff'+iilSxP,null,`class`,`trackInfo`);
let elgJcuA = eo('div','Bujff'+iilSxP,null,`class`,`trackInfoTitle`);
let el1eeIX = eo('a','cczff'+iilSxP,null,`href`,`/offline-courses/${course.id}`);
let elqB8VW = eo('h4','bCWff'+iilSxP,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elAiPgL = eo('div','OmRff'+iilSxP,null,`class`,`trackInfoDescription`);
let el6dbUD = eo('p','DJfff'+iilSxP,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let eluojtD = eo('div','LDQff'+iilSxP,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elv6mXe = eo('span','6Sfff'+iilSxP,null,`class`,`trackSingleMeta`);
let elrpLrT = eo('i','QOqff'+iilSxP,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elj_fkm = eo('span','XOKff'+iilSxP,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elVijVo = eo('div','CLWff'+iilSxP,null,`class`,`trackPreview`);
let el2z9w3 = eo('a','nEWff'+iilSxP,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let el7Q1qV = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });