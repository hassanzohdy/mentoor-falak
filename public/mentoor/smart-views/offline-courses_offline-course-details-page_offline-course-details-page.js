_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cZIIy3kKx:'flk-spinner',cNPsrvT2e:'markdown',cFtmf1S0l:'flk-accordion',cdEEo5nR9:'markdown',cjX3ZwZa1:'flk-accordion',ctdLexuOY:'markdown',cJmkzuxVf:'flk-accordion',cC7h9aukt:'markdown',c7DEPVmJ5:'flk-accordion',c9fs0H91P:'flk-spinner',cbqyDl9ug:'layout'},
                render: function (component) {
                    let cmpmdNt = this._lc('cbqyDl9ug', {parent:component,content:(layout) => {let cndLpZI = Is.empty(component.course);
this.setState('stSzDUk', cndLpZI);
let cnd6O6w = !(cndLpZI);
this.setState('stRfiig', cnd6O6w);
if (cndLpZI) { 
let cmpO8y1 = this._lc('cZIIy3kKx', {parent:component,parentTop:layout,state:'stSzDUk'});
}else { 
let el1AgYn = eo('div',null,null,`class`,`row oneCourse`);
let eljZwA7 = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let elVLW5h = eo('header',null,null,`class`,`courseImage`);
let elO43eN = eo('div',null,null,`class`,`media`);
let el9tmRR = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elPtR8a = eo('div',null,null,`class`,`media-body`);
let elnpYD6 = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let elr9geD = eo('small');
text(component.course.description);
ec('small');
let elAGH3i = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let el1Vv3F = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let elH38sD = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elJqisB = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elhbauY = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let elCy7Up = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let elTsc7L = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cndazMD = ! component.user.isLoggedIn();
this.setState('stSkKnU', cndazMD);
if (cndazMD) { 
let elSZFWD = eo('div','iJVf',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let elY_Vo1 = eo('a','6yof',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let elIWENE = eo('a','YDCf',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elPRaTZ = eo('h2');
text(`General information about the course`);
ec('h2');
let elXZUH0 = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let elADDcq = eo('tr');
let el5v71v = eo('th');
text(`Course level`);
ec('th');
let elj0tTg = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let elvKErC = eo('th');
text(`Instructor`);
ec('th');
let elAgqk9 = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elzN_Pa = eo('tr');
let elznyU0 = eo('th');
text(`Total sessions`);
ec('th');
let cndjEDR = component.course.time.startDate;
this.setState('stHKVX3', cndjEDR);
let cndgScI = !(cndjEDR);
this.setState('stQdND0', cndgScI);
if (cndjEDR) { 
let eln6kek = eo('td','Dz3f');
text(`${ component.course.time.length } weeks`);
ec('td');
let elAPyY0 = eo('th','tdrf');
text(`Starting date`);
ec('th');
let elkEM91 = eo('td','9Yhf');
text( component.course.time.startDate );
ec('td');
}else { 
let elqhVPs = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let eldz9Wz = eo('tr');
let elrKwiW = eo('th');
text(`Sessions per week`);
ec('th');
let el05MaQ = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let el7Rtl2 = eo('th');
text(`Hours per session`);
ec('th');
let elxzY1a = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let elvP1PJ = eo('tr');
let el3Gg9U = eo('th');
text(`Cost`);
ec('th');
let elY9fvM = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let el719eI = eo('th');
text(`Total hours`);
ec('th');
let elmnpPe = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elQcFnv = eo('tr');
let elbV_Hj = eo('th');
text(`Address`);
ec('th');
let eljcJZK = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let elZ2wGz = eo('section',null,null,`id`,`course-info-details`);
let cmpSNpW = this._lc('cFtmf1S0l', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpYqYZ = this._lc('cNPsrvT2e', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmpyIth = this._lc('cjX3ZwZa1', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpvxOD = this._lc('cdEEo5nR9', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmp7QJ0 = this._lc('cJmkzuxVf', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpEUoP = this._lc('ctdLexuOY', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmpOGxW = this._lc('c7DEPVmJ5', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp7krv = this._lc('cC7h9aukt', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let elu9aJN = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let elZYNWG = eo('div',null,null,`class`,`courseApply card`);
let elS1uXr = eo('div',null,null,`class`,`card-body`);
let elDHv6K = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let ele9swa = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let elW_jLP = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elwZuEe = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let elpTA2g = eo('div',null,null,`class`,`text-center`);
let cndryFA = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stGZxYf', cndryFA);
let cndTJ9S = component.isSubscribing;
this.setState('sth_9DL', cndTJ9S);
let cndLWoG = !(cndryFA||cndTJ9S);
this.setState('stpjoyR', cndLWoG);
if (cndryFA) { 
let elMZLJ4 = eo('button','XFVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase ${cls({'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()})}`);
text(`Subscribe now!`);
let cnd6Wwo = ! component.user.isLoggedIn();
this.setState('stbYjsF', cnd6Wwo);
if (cnd6Wwo) { 
let elBmyyG = eo('i','vFxf',null,`class`,`${fas('lock')} ml-1 icon`);
ec('i');
}ec('button');
}else if (cndTJ9S) { 
let cmpUGDM = this._lc('c9fs0H91P', {parent:component,parentTop:layout,state:'sth_9DL'});
}else { 
let eltuD9l = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elVif4t = eo('i',null,null,`class`,`${fas('check')} subscribed-icon icon`);
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