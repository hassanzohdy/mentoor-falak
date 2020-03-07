_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {ccmNa0Lcg:'flk-spinner',cfY5jdlpo:'layout'},
                render: function (component) {
                    let cmpXwBc = this._lc('cfY5jdlpo', {parent:component,content:(layout) => {let cnd009W = component.isLoading;
this.setState('stgTtZ4', cnd009W);
let cndET6K = !(cnd009W);
this.setState('stPzBWM', cndET6K);
if (cnd009W) { 
let cmp3mCf = this._lc('ccmNa0Lcg', {parent:component,parentTop:layout,state:'stgTtZ4'});
}else { 
let el_Pt1f = eo('h1');
text(`Courses list`);
ec('h1');
let elsPscJ = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cnd6BeJ = ! Is.empty(component.courses);
this.setState('st8wLD0', cnd6BeJ);
let cnd51Kp = !(cnd6BeJ);
this.setState('stbrTKl', cnd51Kp);
if (cnd6BeJ) { 
let elD7_fi = eo('div','r8jf',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iioWD0 = 'z2ous4F' + i;
let elQfsar = eo('div','IYLn0oPnzjld' + i+iioWD0,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let elgCs5J = eo('div','CDPff'+iioWD0,null,`class`,`card`);
let elIUFr0 = eo('div','Drbff'+iioWD0);
let elBPksj = ev('img','Hrmff'+iioWD0,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elGk4mq = eo('div','2rPff'+iioWD0,null,`class`,`trackInfoTitle card-body`);
let elA_0tx = eo('a','2HCff'+iioWD0);
let elw0vs0 = eo('h4','PVsff'+iioWD0,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let elq9COY = eo('div','Xa8ff'+iioWD0,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let el9JBj0 = eo('span','p8mff'+iioWD0,null,`class`,`bold orange-text`);
let elDpmLW = eo('i','lnAff'+iioWD0,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let eltYdOO = eo('span','5RNff'+iioWD0,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elBKI3j = eo('small','7oCff'+iioWD0);
text(`By:`);
let elb7bZ0 = eo('span','k7Dff'+iioWD0,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let elwRRZP = eo('div','Rdfff'+iioWD0,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let elGFcAL = eo('div','XNrff'+iioWD0,null,`class`,`trackInfo`);
let elsFXdB = eo('div','rZrff'+iioWD0,null,`class`,`trackInfoTitle`);
let elvTd0N = eo('a','yJfff'+iioWD0,null,`href`,`/offline-courses/${course.id}`);
let elxJ1Ri = eo('h4','hjgff'+iioWD0,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elAhO1q = eo('div','l3pff'+iioWD0,null,`class`,`trackInfoDescription`);
let elg7g2O = eo('p','srXff'+iioWD0,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let elBuAet = eo('div','VmEff'+iioWD0,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elurkZK = eo('span','ic6ff'+iioWD0,null,`class`,`trackSingleMeta`);
let el4u9Go = eo('i','olyff'+iioWD0,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elOZmOo = eo('span','db6ff'+iioWD0,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let el1fkl2 = eo('div','bdvff'+iioWD0,null,`class`,`trackPreview`);
let elJ8jEx = eo('a','fXDff'+iioWD0,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let elcKqsx = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });