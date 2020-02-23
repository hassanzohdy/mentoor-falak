_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {cijN1N3LH:'flk-spinner',cBBQH7cpl:'layout'},
                render: function (component) {
                    let cmps1ru = this._lc('cBBQH7cpl', {parent:component,content:(layout) => {let cnd7UJG = component.isLoading;
this.setState('stKa0LY', cnd7UJG);
let cndPSKC = !(cnd7UJG);
this.setState('stFM223', cndPSKC);
if (cnd7UJG) { 
let cmpbVzC = this._lc('cijN1N3LH', {parent:component,parentTop:layout,state:'stKa0LY'});
}else { 
let elUpuzV = eo('h1');
text(`Courses list`);
ec('h1');
let eltYsh1 = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cndsVdj = ! Is.empty(component.courses);
this.setState('stI5d_2', cndsVdj);
let cndVxai = !(cndsVdj);
this.setState('stisXXb', cndVxai);
if (cndsVdj) { 
let elRwaAs = eo('div','NCwf',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iikvEY = 'Mp62Bh3' + i;
let elRQ7wd = eo('div','YCv_RDKbZWs7' + i+iikvEY,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let elOHHZ_ = eo('div','aGuff'+iikvEY,null,`class`,`card`);
let elayNQo = eo('div','OVEff'+iikvEY);
let elIMn3R = ev('img','a4bff'+iikvEY,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elzQOnS = eo('div','QgBff'+iikvEY,null,`class`,`trackInfoTitle card-body`);
let elnyPex = eo('a','VpZff'+iikvEY);
let elJVRF2 = eo('h4','y_xff'+iikvEY,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let elD0cw1 = eo('div','K5yff'+iikvEY,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elUQwb8 = eo('span','bZ3ff'+iikvEY,null,`class`,`bold orange-text`);
let eldY4xg = eo('i','BZWff'+iikvEY,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let elvKxzR = eo('span','E0Dff'+iikvEY,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elLHoK6 = eo('small','emcff'+iikvEY);
text(`By:`);
let elkdyeW = eo('span','utnff'+iikvEY,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let elG4Zi0 = eo('div','LcTff'+iikvEY,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let elmYa4a = eo('div','ez9ff'+iikvEY,null,`class`,`trackInfo`);
let eleJv8t = eo('div','jsWff'+iikvEY,null,`class`,`trackInfoTitle`);
let el2gY_V = eo('a','Azxff'+iikvEY,null,`href`,`/offline-courses/${course.id}`);
let eljsQSo = eo('h4','Ikbff'+iikvEY,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elWB837 = eo('div','MUfff'+iikvEY,null,`class`,`trackInfoDescription`);
let elBnvh1 = eo('p','4Ugff'+iikvEY,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let el0UKo_ = eo('div','6UGff'+iikvEY,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let el3rQKv = eo('span','nE4ff'+iikvEY,null,`class`,`trackSingleMeta`);
let el5loGB = eo('i','qRxff'+iikvEY,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elRYBbw = eo('span','Ohxff'+iikvEY,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let el0J3Ko = eo('div','4qhff'+iikvEY,null,`class`,`trackPreview`);
let elOgNdC = eo('a','M2Vff'+iikvEY,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let elXZh4E = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });