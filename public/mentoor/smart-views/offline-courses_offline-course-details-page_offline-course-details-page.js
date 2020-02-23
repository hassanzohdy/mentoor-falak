_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {clTwb3yyD:'flk-spinner',cW3VYR5fP:'markdown',c13D_9rrS:'flk-accordion',cZa8gxydw:'markdown',cqQuxZXik:'flk-accordion',cR95iCsO7:'markdown',cWZcYu82Q:'flk-accordion',ctjAss1Zk:'markdown',cD29cVARp:'flk-accordion',cs4Lb2Jmk:'flk-spinner',cKHGW5fEX:'layout'},
                render: function (component) {
                    let cmphnF2 = this._lc('cKHGW5fEX', {parent:component,content:(layout) => {let cndLo9d = Is.empty(component.course);
this.setState('stopaRe', cndLo9d);
let cndT6YZ = !(cndLo9d);
this.setState('stJOss6', cndT6YZ);
if (cndLo9d) { 
let cmpkSZv = this._lc('clTwb3yyD', {parent:component,parentTop:layout,state:'stopaRe'});
}else { 
let el7hdXI = eo('div',null,null,`class`,`row oneCourse`);
let elltMby = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let ellMseV = eo('header',null,null,`class`,`courseImage`);
let elaZNqx = eo('div',null,null,`class`,`media`);
let elGwrbN = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elWBYeu = eo('div',null,null,`class`,`media-body`);
let ellO9AO = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let ele_cEY = eo('small');
text(component.course.description);
ec('small');
let elAAFw2 = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elOgSRU = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let elh0ZiF = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elO4rYL = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elmXPnE = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let eliO_70 = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let ellXX4W = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cndhqgf = ! component.user.isLoggedIn();
this.setState('stLeJwX', cndhqgf);
if (cndhqgf) { 
let elEP1CN = eo('div','6s9f',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let eltwJIW = eo('a','FWtf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let ellXeaF = eo('a','30vf',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elCOXmX = eo('h2');
text(`General information about the course`);
ec('h2');
let el3NPUD = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let elIy7GU = eo('tr');
let elrPTIe = eo('th');
text(`Course level`);
ec('th');
let elRlMSM = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let elNGy_E = eo('th');
text(`Instructor`);
ec('th');
let elunFDK = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elsR1Hn = eo('tr');
let elFm7oS = eo('th');
text(`Total sessions`);
ec('th');
let cndP9V2 = component.course.time.startDate;
this.setState('stsJI3L', cndP9V2);
let cnd2QyD = !(cndP9V2);
this.setState('stn5O9B', cnd2QyD);
if (cndP9V2) { 
let eloYxkt = eo('td','7HDf');
text(`${ component.course.time.length } weeks`);
ec('td');
let elrPUAP = eo('th','5xDf');
text(`Starting date`);
ec('th');
let elPLx6E = eo('td','su1f');
text( component.course.time.startDate );
ec('td');
}else { 
let elvatI3 = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let elpv3wf = eo('tr');
let el_Vfby = eo('th');
text(`Sessions per week`);
ec('th');
let eloO3zk = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elzIRDc = eo('th');
text(`Hours per session`);
ec('th');
let elFk5Ae = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let el8sbRw = eo('tr');
let elmvBV_ = eo('th');
text(`Cost`);
ec('th');
let elH7jRD = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let elmCBte = eo('th');
text(`Total hours`);
ec('th');
let elxqeUl = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elj3jUf = eo('tr');
let elTOaJA = eo('th');
text(`Address`);
ec('th');
let elA47Fa = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let elSpDE9 = eo('section',null,null,`id`,`course-info-details`);
let cmpqZru = this._lc('c13D_9rrS', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpBQiX = this._lc('cW3VYR5fP', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmpPJgP = this._lc('cqQuxZXik', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpfRWf = this._lc('cZa8gxydw', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmpcBDo = this._lc('cWZcYu82Q', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpXpEe = this._lc('cR95iCsO7', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmp4TPp = this._lc('cD29cVARp', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp3WWC = this._lc('ctjAss1Zk', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let elfKCHb = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let elNExaB = eo('div',null,null,`class`,`courseApply card`);
let elb5WzK = eo('div',null,null,`class`,`card-body`);
let elOl4Ad = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let elsMjBV = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let elm5bfp = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elc_PsP = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let elSI9mE = eo('div',null,null,`class`,`text-center`);
let cndVBfI = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stefrV2', cndVBfI);
let cndBzwH = component.isSubscribing;
this.setState('stTQe7k', cndBzwH);
let cndSQI6 = !(cndVBfI||cndBzwH);
this.setState('stvASJo', cndSQI6);
if (cndVBfI) { 
let el4LsD3 = eo('button','RcYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase`);
el4LsD3.cls = {'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()};

            for (let className in el4LsD3.cls) {
                el4LsD3.classList.toggle(className, el4LsD3.cls[className]);
            }  
            text(`Subscribe now!`);
let cnduNRD = ! component.user.isLoggedIn();
this.setState('stkq6NU', cnduNRD);
if (cnduNRD) { 
let elLrckk = eo('i','Ddmf',null,`class`,`${fas('lock') + ' ml-1 icon'}`);
ec('i');
}ec('button');
}else if (cndBzwH) { 
let cmptub5 = this._lc('cs4Lb2Jmk', {parent:component,parentTop:layout,state:'stTQe7k'});
}else { 
let eleYLe4 = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elJAMSC = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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