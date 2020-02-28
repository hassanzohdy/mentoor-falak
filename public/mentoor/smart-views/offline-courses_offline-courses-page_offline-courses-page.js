_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {cq6y7F5oU:'flk-spinner',ct6_uvDMi:'layout'},
                render: function (component) {
                    let cmp_uDf = this._lc('ct6_uvDMi', {parent:component,content:(layout) => {let cndRbuw = component.isLoading;
this.setState('stH79xn', cndRbuw);
let cndovEg = !(cndRbuw);
this.setState('st_CkHK', cndovEg);
if (cndRbuw) { 
let cmpGBJL = this._lc('cq6y7F5oU', {parent:component,parentTop:layout,state:'stH79xn'});
}else { 
let eloo9I1 = eo('h1');
text(`Courses list`);
ec('h1');
let elHnMyH = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cndy3CZ = ! Is.empty(component.courses);
this.setState('stIDaUe', cndy3CZ);
let cndt2qP = !(cndy3CZ);
this.setState('stkgTDv', cndt2qP);
if (cndy3CZ) { 
let elhfBlj = eo('div','mghf',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iiDqyi = 'EbGomYe' + i;
let el3GYFP = eo('div','j8M878bjKDWI' + i+iiDqyi,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let elq7BWh = eo('div','f9Uff'+iiDqyi,null,`class`,`card`);
let elEWalq = eo('div','UzYff'+iiDqyi);
let elPA7pj = ev('img','nAnff'+iiDqyi,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elGrFyX = eo('div','lYcff'+iiDqyi,null,`class`,`trackInfoTitle card-body`);
let el3aECs = eo('a','rGXff'+iiDqyi);
let eljGqTF = eo('h4','OG6ff'+iiDqyi,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let elq9Q5a = eo('div','Srbff'+iiDqyi,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elmxpfE = eo('span','63Yff'+iiDqyi,null,`class`,`bold orange-text`);
let elntsSH = eo('i','01zff'+iiDqyi,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let elvnTIh = eo('span','KXTff'+iiDqyi,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elSwHwz = eo('small','4hAff'+iiDqyi);
text(`By:`);
let elqG5KZ = eo('span','v75ff'+iiDqyi,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let elyvKFL = eo('div','y0Lff'+iiDqyi,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let elXYICk = eo('div','1bxff'+iiDqyi,null,`class`,`trackInfo`);
let elO76YY = eo('div','tuIff'+iiDqyi,null,`class`,`trackInfoTitle`);
let elPXzim = eo('a','1Rcff'+iiDqyi,null,`href`,`/offline-courses/${course.id}`);
let elNTwr5 = eo('h4','W_Xff'+iiDqyi,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elZOxLe = eo('div','uRoff'+iiDqyi,null,`class`,`trackInfoDescription`);
let el6mMdr = eo('p','uVDff'+iiDqyi,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let elIb0TW = eo('div','vjfff'+iiDqyi,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let el_L7RX = eo('span','53_ff'+iiDqyi,null,`class`,`trackSingleMeta`);
let elCo0bG = eo('i','Nytff'+iiDqyi,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elYTbsY = eo('span','nljff'+iiDqyi,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elXXA3h = eo('div','QsWff'+iiDqyi,null,`class`,`trackPreview`);
let elqEUfw = eo('a','ymQff'+iiDqyi,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let el89ihs = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });