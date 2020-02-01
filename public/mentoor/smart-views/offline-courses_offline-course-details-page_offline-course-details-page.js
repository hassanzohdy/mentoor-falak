_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cRrcl6uCt:'flk-spinner',cnOJNmNX2:'markdown',c6x7Iie5n:'flk-accordion',cOh7EDQOo:'markdown',cP1nu3bbt:'flk-accordion',cs_ZBpghG:'markdown',cPzbVQ7gk:'flk-accordion',ckMV6LkBM:'markdown',cCgoPegfg:'flk-accordion',cY9Aw6Lv5:'flk-spinner',cDKCYoye0:'layout'},
                render: function (component) {
                    let cmpSZUW = this._lc('cDKCYoye0', {parent:component,content:(layout) => {let cndauR1 = Is.empty(component.course);
this.setState('staJ30V', cndauR1);
let cndYKk8 = !(cndauR1);
this.setState('stOYDfG', cndYKk8);
if (cndauR1) { 
let cmpHEXg = this._lc('cRrcl6uCt', {parent:component,parentTop:layout,state:'staJ30V'});
}else { 
let elSt3Av = eo('div',null,null,`class`,`row oneCourse`);
let elTB3jg = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let elUpD3D = eo('header',null,null,`class`,`courseImage`);
let elq_T55 = eo('div',null,null,`class`,`media`);
let elqnbl5 = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let el5m5Ea = eo('div',null,null,`class`,`media-body`);
let elTJym9 = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let elFfvRw = eo('small');
text(component.course.description);
ec('small');
let elCpWpY = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let ely45a7 = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let eloYiQz = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elHslUd = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elLMF84 = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let el5OVC0 = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let el7X4Ni = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cnd_w7t = ! component.user.isLoggedIn();
this.setState('stQv7_b', cnd_w7t);
if (cnd_w7t) { 
let elFRyHI = eo('div','Jtyf',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let el7r_9x = eo('a','9xwf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let elBWKUN = eo('a','B76f',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elpA3cd = eo('h2');
text(`General information about the course`);
ec('h2');
let elOEKEe = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let elWnpOE = eo('tr');
let elHYEQF = eo('th');
text(`Course level`);
ec('th');
let elnMIre = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let elsaLXc = eo('th');
text(`Instructor`);
ec('th');
let elPlHCm = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elNDuDS = eo('tr');
let el4qLAx = eo('th');
text(`Total sessions`);
ec('th');
let cndwWHl = component.course.time.startDate;
this.setState('stgIcme', cndwWHl);
let cndauod = !(cndwWHl);
this.setState('stKiOfE', cndauod);
if (cndwWHl) { 
let el7fMx3 = eo('td','v9Mf');
text(`${ component.course.time.length } weeks`);
ec('td');
let elXUuaB = eo('th','v8Of');
text(`Starting date`);
ec('th');
let elOFYED = eo('td','edgf');
text( component.course.time.startDate );
ec('td');
}else { 
let elnbjpu = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let elpv0jN = eo('tr');
let elnH9eB = eo('th');
text(`Sessions per week`);
ec('th');
let elQbTR7 = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elDzhF6 = eo('th');
text(`Hours per session`);
ec('th');
let elMdgZ0 = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let elHwVbh = eo('tr');
let elJq763 = eo('th');
text(`Cost`);
ec('th');
let elZ1PVl = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let elTdI5q = eo('th');
text(`Total hours`);
ec('th');
let elL8YEU = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elrb0cv = eo('tr');
let ell2L3t = eo('th');
text(`Address`);
ec('th');
let elxAAsk = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let elzNWAr = eo('section',null,null,`id`,`course-info-details`);
let cmpWyJi = this._lc('c6x7Iie5n', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp4sl4 = this._lc('cnOJNmNX2', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmpv7M_ = this._lc('cP1nu3bbt', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpjZfl = this._lc('cOh7EDQOo', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmp2auV = this._lc('cPzbVQ7gk', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpuRHE = this._lc('cs_ZBpghG', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmpvOf8 = this._lc('cCgoPegfg', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpWfHx = this._lc('ckMV6LkBM', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let elLgHmV = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let elD7Smr = eo('div',null,null,`class`,`courseApply card`);
let elRaCSc = eo('div',null,null,`class`,`card-body`);
let elREH_J = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let elczCUz = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let elzl00i = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elNoyMy = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let elI5JB4 = eo('div',null,null,`class`,`text-center`);
let cndw0KM = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('sthdNrZ', cndw0KM);
let cnd9I5T = component.isSubscribing;
this.setState('stR3pcc', cnd9I5T);
let cndOCmx = !(cndw0KM||cnd9I5T);
this.setState('stkEAvn', cndOCmx);
if (cndw0KM) { 
let elUC_nq = eo('button','XYIf',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase`);
elUC_nq.cls = {'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()};

            for (let className in elUC_nq.cls) {
                elUC_nq.classList.toggle(className, elUC_nq.cls[className]);
            }  
            text(`Subscribe now!`);
let cndzypd = ! component.user.isLoggedIn();
this.setState('stW459q', cndzypd);
if (cndzypd) { 
let el4Gjex = eo('i','FGLf',null,`class`,`${fas('lock') + ' ml-1 icon'}`);
ec('i');
}ec('button');
}else if (cnd9I5T) { 
let cmpgnaJ = this._lc('cY9Aw6Lv5', {parent:component,parentTop:layout,state:'stR3pcc'});
}else { 
let elZr4aG = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let eluzB8I = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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