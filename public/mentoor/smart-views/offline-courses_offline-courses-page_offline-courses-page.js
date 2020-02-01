_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {cudWjzeH7:'flk-spinner',c38_NVf42:'layout'},
                render: function (component) {
                    let cmpJsAI = this._lc('c38_NVf42', {parent:component,content:(layout) => {let cndwlGQ = component.isLoading;
this.setState('stsBmNS', cndwlGQ);
let cndynFX = !(cndwlGQ);
this.setState('st7F0U8', cndynFX);
if (cndwlGQ) { 
let cmpTkCZ = this._lc('cudWjzeH7', {parent:component,parentTop:layout,state:'stsBmNS'});
}else { 
let elgF4yt = eo('h1');
text(`Courses list`);
ec('h1');
let elueZgY = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cnd1zS0 = ! Is.empty(component.courses);
this.setState('st3N5T6', cnd1zS0);
let cndcJjR = !(cnd1zS0);
this.setState('stGLf2D', cndcJjR);
if (cnd1zS0) { 
let elKZJNB = eo('div','J47f',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iiP_J1 = 'ihZZHCe' + i;
let elPmiF7 = eo('div','8f3J2bHy8Vyz' + i+iiP_J1,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let elURlL6 = eo('div','APOff'+iiP_J1,null,`class`,`card`);
let elZDc8b = eo('div','yDoff'+iiP_J1);
let elRK6cT = ev('img','H2Wff'+iiP_J1,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elky7N7 = eo('div','6S7ff'+iiP_J1,null,`class`,`trackInfoTitle card-body`);
let elrTXFb = eo('a','qKEff'+iiP_J1);
let elPH3Vl = eo('h4','y1Dff'+iiP_J1,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let elrPdoY = eo('div','bPSff'+iiP_J1,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elRb33l = eo('span','p_cff'+iiP_J1,null,`class`,`bold orange-text`);
let el5s5yU = eo('i','PzLff'+iiP_J1,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let elFqqmE = eo('span','S50ff'+iiP_J1,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elS_4Sj = eo('small','FX4ff'+iiP_J1);
text(`By:`);
let el7SNbA = eo('span','5yPff'+iiP_J1,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let el2fq7U = eo('div','pJhff'+iiP_J1,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let elajQLi = eo('div','crTff'+iiP_J1,null,`class`,`trackInfo`);
let elgwnyc = eo('div','CgFff'+iiP_J1,null,`class`,`trackInfoTitle`);
let eluTgRI = eo('a','dJcff'+iiP_J1,null,`href`,`/offline-courses/${course.id}`);
let el23ULu = eo('h4','7rlff'+iiP_J1,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elvUrsj = eo('div','TVlff'+iiP_J1,null,`class`,`trackInfoDescription`);
let eltsNjT = eo('p','mEyff'+iiP_J1,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let elyXJjP = eo('div','TQWff'+iiP_J1,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elMMGt5 = eo('span','cOzff'+iiP_J1,null,`class`,`trackSingleMeta`);
let elmbIRY = eo('i','VB3ff'+iiP_J1,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elIh8F4 = eo('span','aGfff'+iiP_J1,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elRpCbV = eo('div','U5pff'+iiP_J1,null,`class`,`trackPreview`);
let el0a4m5 = eo('a','a3Lff'+iiP_J1,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let el9kSyo = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });