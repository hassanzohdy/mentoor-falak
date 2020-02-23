_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {coCCcyyZg:'flk-spinner',coyq3nnHv:'layout'},
                render: function (component) {
                    let cmprkET = this._lc('coyq3nnHv', {parent:component,content:(layout) => {let cndZTCm = component.isLoading;
this.setState('staSP9b', cndZTCm);
let cndzPJH = !(cndZTCm);
this.setState('st_seVG', cndzPJH);
if (cndZTCm) { 
let cmpfH31 = this._lc('coCCcyyZg', {parent:component,parentTop:layout,state:'staSP9b'});
}else { 
let el2A3Jy = eo('h1');
text(`Courses list`);
ec('h1');
let elk6aNG = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cnderWR = ! Is.empty(component.courses);
this.setState('stuRUpz', cnderWR);
let cndj6Dd = !(cnderWR);
this.setState('stQE0T_', cndj6Dd);
if (cnderWR) { 
let elAxWNa = eo('div','bwJf',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iiCRm2 = 'H035as2' + i;
let el9B_Uj = eo('div','chnmvF92POVV' + i+iiCRm2,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let eleaZVL = eo('div','mRLff'+iiCRm2,null,`class`,`card`);
let el7OGKE = eo('div','AhRff'+iiCRm2);
let elF9ATV = ev('img','tAeff'+iiCRm2,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elOcnO7 = eo('div','1qdff'+iiCRm2,null,`class`,`trackInfoTitle card-body`);
let eld36iO = eo('a','2xXff'+iiCRm2);
let elaW27n = eo('h4','ZzHff'+iiCRm2,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let eli3TgL = eo('div','FE3ff'+iiCRm2,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elNIffq = eo('span','BDnff'+iiCRm2,null,`class`,`bold orange-text`);
let elfp6Fd = eo('i','AIZff'+iiCRm2,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let elnfSNM = eo('span','QBOff'+iiCRm2,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elLsKqY = eo('small','CKaff'+iiCRm2);
text(`By:`);
let elNysVJ = eo('span','MPgff'+iiCRm2,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let eli9_he = eo('div','psoff'+iiCRm2,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let elkEWRy = eo('div','Dnlff'+iiCRm2,null,`class`,`trackInfo`);
let elFiSvE = eo('div','Vfyff'+iiCRm2,null,`class`,`trackInfoTitle`);
let el65KfH = eo('a','sh6ff'+iiCRm2,null,`href`,`/offline-courses/${course.id}`);
let elInxuY = eo('h4','G_dff'+iiCRm2,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elVaXNg = eo('div','hYAff'+iiCRm2,null,`class`,`trackInfoDescription`);
let eltrid4 = eo('p','dUaff'+iiCRm2,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let elrDgru = eo('div','rd7ff'+iiCRm2,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elUGb3O = eo('span','TY0ff'+iiCRm2,null,`class`,`trackSingleMeta`);
let elJnhzc = eo('i','iUuff'+iiCRm2,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elMvOKu = eo('span','TX7ff'+iiCRm2,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elL9POn = eo('div','BJXff'+iiCRm2,null,`class`,`trackPreview`);
let elRsRrg = eo('a','HgIff'+iiCRm2,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let el3c4Kt = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });