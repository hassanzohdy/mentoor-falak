_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cNt4mpUFg:'flk-spinner',cbWZGV5sy:'markdown',c_h49QHl9:'flk-accordion',chY06KnFu:'markdown',crqQDEMER:'flk-accordion',c4l5IXJBa:'markdown',cCNkycVKt:'flk-accordion',cp3sc_7I8:'markdown',cpVKtY8xc:'flk-accordion',cEu2a8Lti:'flk-spinner',cRqzrrPq_:'layout'},
                render: function (component) {
                    let cmpjMLL = this._lc('cRqzrrPq_', {parent:component,content:(layout) => {let cnd7ogM = Is.empty(component.course);
this.setState('sthmqgh', cnd7ogM);
let cnd5NKy = !(cnd7ogM);
this.setState('stREBV3', cnd5NKy);
if (cnd7ogM) { 
let cmpE2GD = this._lc('cNt4mpUFg', {parent:component,parentTop:layout,state:'sthmqgh'});
}else { 
let el0TPif = eo('div',null,null,`class`,`row oneCourse`);
let elwmGzu = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let elFagQe = eo('header',null,null,`class`,`courseImage`);
let elkp51E = eo('div',null,null,`class`,`media`);
let elxdQw8 = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elU3pn4 = eo('div',null,null,`class`,`media-body`);
let el4XPsq = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let elTw0uZ = eo('small');
text(component.course.description);
ec('small');
let elrCObL = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let eltiXGI = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let elR0_ba = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elsaapX = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elzpVls = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let elClir1 = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let elLXKES = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cndPV08 = ! component.user.isLoggedIn();
this.setState('stwVoN8', cndPV08);
if (cndPV08) { 
let elIm3mJ = eo('div','c39f',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let el2oK22 = eo('a','Szwf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let elg2Q10 = eo('a','OSkf',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elObF2w = eo('h2');
text(`General information about the course`);
ec('h2');
let elUDtRy = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let elddrqo = eo('tr');
let el3e_zZ = eo('th');
text(`Course level`);
ec('th');
let elLrl12 = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let el0TuRI = eo('th');
text(`Instructor`);
ec('th');
let elqGani = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elnZyZN = eo('tr');
let el2VgVf = eo('th');
text(`Total sessions`);
ec('th');
let cndkoZu = component.course.time.startDate;
this.setState('st2WBrL', cndkoZu);
let cnd07Je = !(cndkoZu);
this.setState('stWxkar', cnd07Je);
if (cndkoZu) { 
let elM0zUH = eo('td','dKTf');
text(`${ component.course.time.length } weeks`);
ec('td');
let el2xqYy = eo('th','xNpf');
text(`Starting date`);
ec('th');
let elharcv = eo('td','EoXf');
text( component.course.time.startDate );
ec('td');
}else { 
let elByNgh = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let elLFoVV = eo('tr');
let elwsWHD = eo('th');
text(`Sessions per week`);
ec('th');
let elHHEJE = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elTDhTZ = eo('th');
text(`Hours per session`);
ec('th');
let elis3uV = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let elKe7nt = eo('tr');
let elXBnsq = eo('th');
text(`Cost`);
ec('th');
let elneoQB = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let eldUerP = eo('th');
text(`Total hours`);
ec('th');
let elneHbz = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let eljv30a = eo('tr');
let elVdwHl = eo('th');
text(`Address`);
ec('th');
let elo2MP_ = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let el1hrTe = eo('section',null,null,`id`,`course-info-details`);
let cmpWWDD = this._lc('c_h49QHl9', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp3CLu = this._lc('cbWZGV5sy', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmp_h3N = this._lc('crqQDEMER', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpCm2r = this._lc('chY06KnFu', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmpmzcD = this._lc('cCNkycVKt', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpWlbD = this._lc('c4l5IXJBa', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmp75mX = this._lc('cpVKtY8xc', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpv_aD = this._lc('cp3sc_7I8', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let elfQHMd = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let el56ns6 = eo('div',null,null,`class`,`courseApply card`);
let elMsF1L = eo('div',null,null,`class`,`card-body`);
let el__0q4 = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let elpZqho = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let elBv35V = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elpSjv4 = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let elrGhZh = eo('div',null,null,`class`,`text-center`);
let cndX37j = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stmrAol', cndX37j);
let cnd36os = component.isSubscribing;
this.setState('stBlfoe', cnd36os);
let cnd_fbL = !(cndX37j||cnd36os);
this.setState('st1FZOp', cnd_fbL);
if (cndX37j) { 
let ele0Aqj = eo('button','UH9f',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase ${cls({'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()})}`);
text(`Subscribe now!`);
let cndJTT6 = ! component.user.isLoggedIn();
this.setState('stPiKiW', cndJTT6);
if (cndJTT6) { 
let elialzF = eo('i','5Nhf',null,`class`,`${fas('lock')} ml-1 icon`);
ec('i');
}ec('button');
}else if (cnd36os) { 
let cmpAHZX = this._lc('cEu2a8Lti', {parent:component,parentTop:layout,state:'stBlfoe'});
}else { 
let elmq3CB = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elyUKDs = eo('i',null,null,`class`,`${fas('check')} subscribed-icon icon`);
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