_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {c5nnwl0Qx:'flk-spinner',cQaLg1N7Y:'layout'},
                render: function (component) {
                    let cmpZ2nM = this._lc('cQaLg1N7Y', {parent:component,content:(layout) => {let cndlmAR = component.isLoading;
this.setState('stmzZra', cndlmAR);
let cndKBeh = !(cndlmAR);
this.setState('stXWaS_', cndKBeh);
if (cndlmAR) { 
let cmpPcON = this._lc('c5nnwl0Qx', {parent:component,parentTop:layout,state:'stmzZra'});
}else { 
let elwytfZ = eo('h1');
text(`Courses list`);
ec('h1');
let elnMQcX = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cndq4cj = ! Is.empty(component.courses);
this.setState('stAmJCc', cndq4cj);
let cnd1xBS = !(cndq4cj);
this.setState('stpdEoz', cnd1xBS);
if (cndq4cj) { 
let elz5KdP = eo('div','8YGf',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iitR1_ = 'GXZEcvN' + i;
let elqgGa4 = eo('div','iBFbTEjweSbS' + i+iitR1_,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let elGlGfG = eo('div','i7rff'+iitR1_,null,`class`,`card`);
let el8Yjum = eo('div','CH8ff'+iitR1_);
let elKa8bx = ev('img','H52ff'+iitR1_,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let elsfW4n = eo('div','MmNff'+iitR1_,null,`class`,`trackInfoTitle card-body`);
let el6NPQN = eo('a','8QUff'+iitR1_);
let elgitbu = eo('h4','jInff'+iitR1_,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let elWb4Mz = eo('div','GFVff'+iitR1_,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elHUiQO = eo('span','2voff'+iitR1_,null,`class`,`bold orange-text`);
let elSPEOl = eo('i','0_6ff'+iitR1_,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let elpgkso = eo('span','iJ1ff'+iitR1_,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elgP629 = eo('small','brhff'+iitR1_);
text(`By:`);
let elDyHY3 = eo('span','oSEff'+iitR1_,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let elG8Qju = eo('div','O7Iff'+iitR1_,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let elJ6Phf = eo('div','hHGff'+iitR1_,null,`class`,`trackInfo`);
let elGh5xH = eo('div','8f0ff'+iitR1_,null,`class`,`trackInfoTitle`);
let elZ3nAJ = eo('a','4_zff'+iitR1_,null,`href`,`/offline-courses/${course.id}`);
let elBBUwY = eo('h4','nPaff'+iitR1_,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elPW4j8 = eo('div','8H0ff'+iitR1_,null,`class`,`trackInfoDescription`);
let elSNimS = eo('p','PJ1ff'+iitR1_,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let elb38aV = eo('div','4jSff'+iitR1_,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elwQB8U = eo('span','cn4ff'+iitR1_,null,`class`,`trackSingleMeta`);
let el5ufjt = eo('i','Mjhff'+iitR1_,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let ely_AdQ = eo('span','IT1ff'+iitR1_,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let el7rmie = eo('div','iu0ff'+iitR1_,null,`class`,`trackPreview`);
let elrHQTU = eo('a','QGqff'+iitR1_,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let eloK7hd = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });