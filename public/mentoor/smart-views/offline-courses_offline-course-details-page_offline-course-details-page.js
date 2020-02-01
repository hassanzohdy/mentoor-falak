_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cYmLhIkyS:'flk-spinner',cdOIy8SZf:'markdown',cdrz8OhgT:'flk-accordion',cKuatYskv:'markdown',cJ0U6ZahI:'flk-accordion',cq5YLRFKP:'markdown',cgi9FHD4o:'flk-accordion',c8BUvSQAQ:'markdown',ce5sjUXgk:'flk-accordion',cKfoJp_X8:'flk-spinner',clLCSZCJS:'layout'},
                render: function (component) {
                    let cmpnJ1T = this._lc('clLCSZCJS', {parent:component,content:(layout) => {let cndiFj7 = Is.empty(component.course);
this.setState('staFP8o', cndiFj7);
let cndA0lK = !(cndiFj7);
this.setState('stvVWAE', cndA0lK);
if (cndiFj7) { 
let cmpl1IR = this._lc('cYmLhIkyS', {parent:component,parentTop:layout,state:'staFP8o'});
}else { 
let elNMEnH = eo('div',null,null,`class`,`row oneCourse`);
let elBalAS = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let elffVA9 = eo('header',null,null,`class`,`courseImage`);
let elVKNIJ = eo('div',null,null,`class`,`media`);
let ell1oly = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elc3evx = eo('div',null,null,`class`,`media-body`);
let elTD6dp = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let el_dqSH = eo('small');
text(component.course.description);
ec('small');
let elgYGPf = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elNfKBY = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let eldXUMG = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elfyi8d = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elWhk_0 = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let eltuK0f = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let elnbYVM = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cnd7JM_ = ! component.user.isLoggedIn();
this.setState('stC_mHY', cnd7JM_);
if (cnd7JM_) { 
let ela8vkH = eo('div','_ynf',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let elsls0n = eo('a','6Ftf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let elx5Asw = eo('a','ptzf',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elG0QGV = eo('h2');
text(`General information about the course`);
ec('h2');
let el1bx4H = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let eltimgQ = eo('tr');
let elP40kR = eo('th');
text(`Course level`);
ec('th');
let elGUbUI = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let ely93_4 = eo('th');
text(`Instructor`);
ec('th');
let elvz8hR = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elpj4Bl = eo('tr');
let eliJVN8 = eo('th');
text(`Total sessions`);
ec('th');
let cnddYhX = component.course.time.startDate;
this.setState('stuDQtK', cnddYhX);
let cndYJkG = !(cnddYhX);
this.setState('st1vyte', cndYJkG);
if (cnddYhX) { 
let el2Fn6I = eo('td','F_wf');
text(`${ component.course.time.length } weeks`);
ec('td');
let elEvHLL = eo('th','DM2f');
text(`Starting date`);
ec('th');
let elwr1mc = eo('td','SLlf');
text( component.course.time.startDate );
ec('td');
}else { 
let elNn2kb = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let elQ2gep = eo('tr');
let elO7izR = eo('th');
text(`Sessions per week`);
ec('th');
let elK_zlh = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elNgAOW = eo('th');
text(`Hours per session`);
ec('th');
let elACHFz = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let elsiNlg = eo('tr');
let elqQtzK = eo('th');
text(`Cost`);
ec('th');
let elOlXxc = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let el7DQ9I = eo('th');
text(`Total hours`);
ec('th');
let elBnnMC = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elTDXMs = eo('tr');
let elNtRQq = eo('th');
text(`Address`);
ec('th');
let elupt7A = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let elULrWj = eo('section',null,null,`id`,`course-info-details`);
let cmpqYQ2 = this._lc('cdrz8OhgT', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpKazC = this._lc('cdOIy8SZf', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmpGb04 = this._lc('cJ0U6ZahI', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpUq7c = this._lc('cKuatYskv', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmpxQ9X = this._lc('cgi9FHD4o', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpdor0 = this._lc('cq5YLRFKP', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmp6mfy = this._lc('ce5sjUXgk', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpu5MC = this._lc('c8BUvSQAQ', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let el_5jL0 = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let elSEx6T = eo('div',null,null,`class`,`courseApply card`);
let eluMR_d = eo('div',null,null,`class`,`card-body`);
let el1fIdI = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let elKWKsg = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let eliAS23 = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elRFv3W = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let eloy7Ic = eo('div',null,null,`class`,`text-center`);
let cndYBSR = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stFpfvE', cndYBSR);
let cndzU0z = component.isSubscribing;
this.setState('sttbeft', cndzU0z);
let cnd5bqK = !(cndYBSR||cndzU0z);
this.setState('stiCHZW', cnd5bqK);
if (cndYBSR) { 
let eltDGLb = eo('button','fB0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase`);
eltDGLb.cls = {'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()};

            for (let className in eltDGLb.cls) {
                eltDGLb.classList.toggle(className, eltDGLb.cls[className]);
            }  
            text(`Subscribe now!`);
let cndUqmt = ! component.user.isLoggedIn();
this.setState('st81hzq', cndUqmt);
if (cndUqmt) { 
let elaM6yS = eo('i','v2Sf',null,`class`,`${fas('lock') + ' ml-1 icon'}`);
ec('i');
}ec('button');
}else if (cndzU0z) { 
let cmpUYJ7 = this._lc('cKfoJp_X8', {parent:component,parentTop:layout,state:'sttbeft'});
}else { 
let elNaLLN = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elVEgty = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });