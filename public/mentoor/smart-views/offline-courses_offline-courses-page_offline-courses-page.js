_Component({
                selector: 'offline-courses-page',
                c: 'OfflineCoursesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','courses'],
                children: {c8AL7tV5Y:'flk-spinner',cuoPNK0gR:'layout'},
                render: function (component) {
                    let cmpdFNA = this._lc('cuoPNK0gR', {parent:component,content:(layout) => {let cnd7BzV = component.isLoading;
this.setState('st9zTgx', cnd7BzV);
let cndVe7C = !(cnd7BzV);
this.setState('stZE2NL', cndVe7C);
if (cnd7BzV) { 
let cmpIb6d = this._lc('c8AL7tV5Y', {parent:component,parentTop:layout,state:'st9zTgx'});
}else { 
let elSOz8Z = eo('h1');
text(`Courses list`);
ec('h1');
let elHou0T = eo('p');
text(`Please choose what course you need based on the provided information in each course.`);
ec('p');
let cndwjmA = ! Is.empty(component.courses);
this.setState('stavCIA', cndwjmA);
let cndaC4L = !(cndwjmA);
this.setState('st3zMbl', cndaC4L);
if (cndwjmA) { 
let el3uqVb = eo('div','jywf',null,`class`,`row allCourses`);
for (let i in component.courses) {
let course = component.courses[i]; 
 let iiZ63J = 'sh9MXka' + i;
let elu9sHK = eo('div','3Rat5cdboHo5' + i+iiZ63J,null,`class`,`track-card col-md-4 col-sm-6 col-12`);
let eloCqVQ = eo('div','pV_ff'+iiZ63J,null,`class`,`card`);
let elyFyrT = eo('div','b89ff'+iiZ63J);
let elyG0al = ev('img','tU3ff'+iiZ63J,null,`src`,`${course.image}`,`class`,`imgTrack`);
ec('div');
let el_sPwS = eo('div','couff'+iiZ63J,null,`class`,`trackInfoTitle card-body`);
let elcUL14 = eo('a','J6uff'+iiZ63J);
let elQLhnP = eo('h4','zovff'+iiZ63J,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
let el1_xuA = eo('div','Di6ff'+iiZ63J,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let el7XLRb = eo('span','bgSff'+iiZ63J,null,`class`,`bold orange-text`);
let elscMl5 = eo('i','KY7ff'+iiZ63J,null,`class`,`ti ti-list`);
ec('i');
text(`${course.time.length} Weeks`);
ec('span');
let elc6ENO = eo('span','qcvff'+iiZ63J,null,`class`,`bold green-text`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let elVYTsW = eo('small','k52ff'+iiZ63J);
text(`By:`);
let elvQm81 = eo('span','DN3ff'+iiZ63J,null,`class`,`bold`);
text(course.instructor.name);
ec('span');
let elmjaze = eo('div','qogff'+iiZ63J,null,`class`,`float-right mt-1`);
text(course.level);
ec('div');
ec('small');
ec('div');
let el5tmuY = eo('div','8Kfff'+iiZ63J,null,`class`,`trackInfo`);
let elty3cB = eo('div','tMnff'+iiZ63J,null,`class`,`trackInfoTitle`);
let eleXFBx = eo('a','spaff'+iiZ63J,null,`href`,`/offline-courses/${course.id}`);
let elqqDOH = eo('h4','9L3ff'+iiZ63J,null,`class`,`text-capitalize`);
text(course.name);
ec('h4');
ec('a');
ec('div');
let elj6DYo = eo('div','5o0ff'+iiZ63J,null,`class`,`trackInfoDescription`);
let el3p7tw = eo('p','h3Gff'+iiZ63J,null,`class`,`pt-4`);
text(course.description);
ec('p');
ec('div');
let elmf4Sn = eo('div','ZB0ff'+iiZ63J,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elRIcEm = eo('span','Ny8ff'+iiZ63J,null,`class`,`trackSingleMeta`);
let el4MZoa = eo('i','yxcff'+iiZ63J,null,`class`,`ti ti-list`);
ec('i');
text(`${ course.time.duration } hrs/session`);
ec('span');
let elrZPDh = eo('span','cUMff'+iiZ63J,null,`class`,`trackSingleMeta`);
text(`${ course.cost.format() } EGP`);
ec('span');
ec('div');
let el6mfR_ = eo('div','4mTff'+iiZ63J,null,`class`,`trackPreview`);
let elkffmb = eo('a','xTCff'+iiZ63J,null,`href`,`/offline-courses/${course.id}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this course'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}else { 
let els2TL6 = eo('h1',null,null,`class`,`bold text-center`);
text(`No courses yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });