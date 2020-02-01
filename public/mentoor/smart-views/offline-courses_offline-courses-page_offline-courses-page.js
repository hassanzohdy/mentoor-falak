_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {coylk1Xc1:'flk-spinner',cSrJrDnOa:'layout'},
                render: function (component) {
                    let cmpSaYn = this._lc('cSrJrDnOa', {parent:component,content:(layout) => {let cndzgZL = component.isLoading;
this.setState('st0xFOy', cndzgZL);
let cnd4PLL = !(cndzgZL);
this.setState('stxGwUi', cnd4PLL);
if (cndzgZL) { 
let cmpwOxw = this._lc('coylk1Xc1', {parent:component,parentTop:layout,state:'st0xFOy'});
}else { 
let ela0Yri = eo('h1');
text(`Courses list`);
ec('h1');
let elK7EpV = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cndBTra = ! Is.empty(component.courses);
this.setState('stknGtP', cndBTra);
let cndWhGs = !(cndBTra);
this.setState('st0d0GF', cndWhGs);
if (cndBTra) { 
let elo2LFz = eo('div','fHwf',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iiivkz = 'WYLF2fS' + i;
let elautB1 = eo('div','Rmcyo2SWtejl' + i+iiivkz,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let eldvztt = eo('div','LF_ff'+iiivkz,null,`class`,`card`);
let elpvRw1 = eo('div','Qyvff'+iiivkz);
let elvgAy3 = ev('img','Xxeff'+iiivkz,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elgtBGz = eo('div','CcZff'+iiivkz,null,`class`,`trackInfoTitle card-body`);
let elIkHY0 = eo('a','mSKff'+iiivkz);
let elmTydR = eo('h4','2Jgff'+iiivkz,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let elLLy1o = eo('div','mqYff'+iiivkz,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elsPuDi = eo('span','lL6ff'+iiivkz,null,`class`,`bold orange-text`);
let elUteYA = eo('i','3JUff'+iiivkz,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let eldIVcz = eo('span','pruff'+iiivkz,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elTo3Qg = eo('small','0o3ff'+iiivkz);
text(`By:`);
let elPaEjp = eo('span','bVnff'+iiivkz,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let el7gQta = eo('div','ITWff'+iiivkz,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let eld1ZQ4 = eo('div','sjMff'+iiivkz,null,`class`,`trackInfo`);
let elvkTSY = eo('div','CLQff'+iiivkz,null,`class`,`trackInfoTitle`);
let el2tqLK = eo('a','2iXff'+iiivkz,null,`href`,`/offline-courses/${course.id}`);
let elqz2mc = eo('h4','UHaff'+iiivkz,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elxZtIk = eo('div','8vOff'+iiivkz,null,`class`,`trackInfoDescription`);
let elTDd5x = eo('p','bdPff'+iiivkz,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let el4piwP = eo('div','pR1ff'+iiivkz,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elfW1x6 = eo('span','SePff'+iiivkz,null,`class`,`trackSingleMeta`);
let elrBwTB = eo('i','8R8ff'+iiivkz,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elx86oL = eo('span','cdlff'+iiivkz,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elZWhbC = eo('div','dDbff'+iiivkz,null,`class`,`trackPreview`);
let eltXaUq = eo('a','cfkff'+iiivkz,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let el5zOiR = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });