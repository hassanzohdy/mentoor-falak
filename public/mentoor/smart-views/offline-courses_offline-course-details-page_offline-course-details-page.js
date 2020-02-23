_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cSAKBST7F:'flk-spinner',cSOkMCfYU:'markdown',cQDddmooQ:'flk-accordion',c_9NT8L9O:'markdown',cG9vc7TON:'flk-accordion',cdfm5GIVr:'markdown',cK78nUNie:'flk-accordion',c6icLvzZy:'markdown',cLSZn8Ng6:'flk-accordion',clcW7FgnU:'flk-spinner',cSuMLKBZS:'layout'},
                render: function (component) {
                    let cmpDtMv = this._lc('cSuMLKBZS', {parent:component,content:(layout) => {let cnd7z1K = Is.empty(component.course);
this.setState('stYBEWl', cnd7z1K);
let cndr07G = !(cnd7z1K);
this.setState('st6CFWG', cndr07G);
if (cnd7z1K) { 
let cmpewd7 = this._lc('cSAKBST7F', {parent:component,parentTop:layout,state:'stYBEWl'});
}else { 
let elc6Cro = eo('div',null,null,`class`,`row oneCourse`);
let elB_HWq = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let el_AWvy = eo('header',null,null,`class`,`courseImage`);
let elKSl5W = eo('div',null,null,`class`,`media`);
let elVxpeZ = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elXjV31 = eo('div',null,null,`class`,`media-body`);
let elFFVJO = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let elzVruv = eo('small');
text(component.course.description);
ec('small');
let el13eFZ = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let el4JAdw = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let elmnGk2 = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elquk25 = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elvlTM9 = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let elHtb3P = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let el2nxL1 = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cnd554V = ! component.user.isLoggedIn();
this.setState('stZVAuh', cnd554V);
if (cnd554V) { 
let elmT7h3 = eo('div','Q_Vf',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let elc6rbm = eo('a','hvYf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let elhSS9j = eo('a','vHvf',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elsTKhX = eo('h2');
text(`General information about the course`);
ec('h2');
let elSofvv = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let ellpK1R = eo('tr');
let elrF10y = eo('th');
text(`Course level`);
ec('th');
let elBYgui = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let elU9PDW = eo('th');
text(`Instructor`);
ec('th');
let eliSbWe = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elw79cx = eo('tr');
let elHIOPd = eo('th');
text(`Total sessions`);
ec('th');
let cndyAHl = component.course.time.startDate;
this.setState('stIVP9e', cndyAHl);
let cndzQZV = !(cndyAHl);
this.setState('stVfg2A', cndzQZV);
if (cndyAHl) { 
let el5HY35 = eo('td','oekf');
text(`${ component.course.time.length } weeks`);
ec('td');
let elCPW_p = eo('th','Qw6f');
text(`Starting date`);
ec('th');
let elbAp51 = eo('td','8Hsf');
text( component.course.time.startDate );
ec('td');
}else { 
let el3VHqJ = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let elHRyuB = eo('tr');
let el6I7n4 = eo('th');
text(`Sessions per week`);
ec('th');
let elm2J20 = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elKEJja = eo('th');
text(`Hours per session`);
ec('th');
let elxgTAU = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let elfZuU3 = eo('tr');
let el_M6vo = eo('th');
text(`Cost`);
ec('th');
let elvgeD1 = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let elcopJe = eo('th');
text(`Total hours`);
ec('th');
let elrG9_o = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elSak9I = eo('tr');
let elJ1sFF = eo('th');
text(`Address`);
ec('th');
let elhgNDF = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let elVXbOi = eo('section',null,null,`id`,`course-info-details`);
let cmpgzjC = this._lc('cQDddmooQ', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpmpJQ = this._lc('cSOkMCfYU', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmp7D5s = this._lc('cG9vc7TON', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp_Ntw = this._lc('c_9NT8L9O', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmpTy2s = this._lc('cK78nUNie', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpxgzq = this._lc('cdfm5GIVr', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmpK5Sq = this._lc('cLSZn8Ng6', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpmozl = this._lc('c6icLvzZy', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let elR1ptL = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let elsCIm7 = eo('div',null,null,`class`,`courseApply card`);
let elmUtuL = eo('div',null,null,`class`,`card-body`);
let elifokh = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let el2K4jI = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let ellW5cY = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elW4kRk = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let eltIDb7 = eo('div',null,null,`class`,`text-center`);
let cndXRvA = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stjGCjP', cndXRvA);
let cndNm7l = component.isSubscribing;
this.setState('stIc8CW', cndNm7l);
let cndC1MU = !(cndXRvA||cndNm7l);
this.setState('stfX7Oe', cndC1MU);
if (cndXRvA) { 
let el4nS68 = eo('button','I7af',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase`);
el4nS68.cls = {'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()};

            for (let className in el4nS68.cls) {
                el4nS68.classList.toggle(className, el4nS68.cls[className]);
            }  
            text(`Subscribe now!`);
let cnd2xmz = ! component.user.isLoggedIn();
this.setState('steHRzl', cnd2xmz);
if (cnd2xmz) { 
let elbwLGY = eo('i','_Llf',null,`class`,`${fas('lock') + ' ml-1 icon'}`);
ec('i');
}ec('button');
}else if (cndNm7l) { 
let cmpCf14 = this._lc('clcW7FgnU', {parent:component,parentTop:layout,state:'stIc8CW'});
}else { 
let elgRvUF = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elQcKcy = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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