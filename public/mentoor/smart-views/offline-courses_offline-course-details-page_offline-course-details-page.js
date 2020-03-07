_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cbAvk1WK5:'flk-spinner',cyutJGfqB:'markdown',c65VvHPf8:'flk-accordion',cwJoUCUbE:'markdown',cdQCROu_u:'flk-accordion',c3oOpmtM0:'markdown',cRPFYyYb7:'flk-accordion',cegFXpPWk:'markdown',c65R9LefQ:'flk-accordion',c0TvtIYVS:'flk-spinner',cJTPXviVD:'layout'},
                render: function (component) {
                    let cmpdEyc = this._lc('cJTPXviVD', {parent:component,content:(layout) => {let cnd43CZ = Is.empty(component.course);
this.setState('strxEDi', cnd43CZ);
let cnd_ahg = !(cnd43CZ);
this.setState('stsugPX', cnd_ahg);
if (cnd43CZ) { 
let cmpcWyT = this._lc('cbAvk1WK5', {parent:component,parentTop:layout,state:'strxEDi'});
}else { 
let elAQZrP = eo('div',null,null,`class`,`row oneCourse`);
let elV8o6L = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let elTdbPh = eo('header',null,null,`class`,`courseImage`);
let elQh0Av = eo('div',null,null,`class`,`media`);
let elQoShk = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elR6urv = eo('div',null,null,`class`,`media-body`);
let ell0UO2 = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let elQSk25 = eo('small');
text(component.course.description);
ec('small');
let elWZGwD = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let eldLTAf = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let elWjr8J = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elJd_nw = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let eljQHkF = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let el0R7Dz = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let el20Hf7 = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cnddw2l = ! component.user.isLoggedIn();
this.setState('stsrOVW', cnddw2l);
if (cnddw2l) { 
let elvIs45 = eo('div','94hf',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let elqijVG = eo('a','Fvzf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let elErQ64 = eo('a','6YIf',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elcyyUO = eo('h2');
text(`General information about the course`);
ec('h2');
let elnHqNs = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let eloTXAm = eo('tr');
let elimnde = eo('th');
text(`Course level`);
ec('th');
let elRSbCY = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let elXZMiR = eo('th');
text(`Instructor`);
ec('th');
let el9nQ2v = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elYK4rS = eo('tr');
let eltcK1b = eo('th');
text(`Total sessions`);
ec('th');
let cndBFBV = component.course.time.startDate;
this.setState('stM_SNz', cndBFBV);
let cndP0W1 = !(cndBFBV);
this.setState('stTbDnF', cndP0W1);
if (cndBFBV) { 
let el5LOPz = eo('td','OM9f');
text(`${ component.course.time.length } weeks`);
ec('td');
let elHIe2k = eo('th','g3wf');
text(`Starting date`);
ec('th');
let elRG8EH = eo('td','1xzf');
text( component.course.time.startDate );
ec('td');
}else { 
let elPsecf = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let eldn7q1 = eo('tr');
let elnnidV = eo('th');
text(`Sessions per week`);
ec('th');
let elOp151 = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elvKPyY = eo('th');
text(`Hours per session`);
ec('th');
let elEfejQ = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let elBdnWj = eo('tr');
let elGopnI = eo('th');
text(`Cost`);
ec('th');
let elHX80d = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let elnqu6A = eo('th');
text(`Total hours`);
ec('th');
let elMmYFW = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elyY4Ko = eo('tr');
let elMhrif = eo('th');
text(`Address`);
ec('th');
let elnZ4GN = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let el7xddt = eo('section',null,null,`id`,`course-info-details`);
let cmpP7A2 = this._lc('c65VvHPf8', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpbn7r = this._lc('cyutJGfqB', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmpXh4j = this._lc('cdQCROu_u', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpaP1q = this._lc('cwJoUCUbE', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmpMnUG = this._lc('cRPFYyYb7', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp0bYR = this._lc('c3oOpmtM0', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmpSo4P = this._lc('c65R9LefQ', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpj0m6 = this._lc('cegFXpPWk', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let el7m4YT = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let elPA4fG = eo('div',null,null,`class`,`courseApply card`);
let elCFCVS = eo('div',null,null,`class`,`card-body`);
let el10wdq = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let el4qww7 = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let eloxUeK = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elSZVLU = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let elshpi2 = eo('div',null,null,`class`,`text-center`);
let cndh8sC = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stuD3py', cndh8sC);
let cndkPrU = component.isSubscribing;
this.setState('stDMOFz', cndkPrU);
let cndSNeW = !(cndh8sC||cndkPrU);
this.setState('stRHURE', cndSNeW);
if (cndh8sC) { 
let eliXWOT = eo('button','svif',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase ${cls({'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()})}`);
text(`Subscribe now!`);
let cndlsQu = ! component.user.isLoggedIn();
this.setState('stqlDR5', cndlsQu);
if (cndlsQu) { 
let el4DOiD = eo('i','ihYf',null,`class`,`${fas('lock')} ml-1 icon`);
ec('i');
}ec('button');
}else if (cndkPrU) { 
let cmpZP5N = this._lc('c0TvtIYVS', {parent:component,parentTop:layout,state:'stDMOFz'});
}else { 
let elcMqlv = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elaZ3My = eo('i',null,null,`class`,`${fas('check')} subscribed-icon icon`);
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