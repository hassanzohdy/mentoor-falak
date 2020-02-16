_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cmzTxnHd8:'flk-spinner',cHDAyQLpn:'markdown',cWZ29heO8:'flk-accordion',cQLbZ4hYG:'markdown',csB5KXjJ3:'flk-accordion',cHDSXM_l5:'markdown',cpH_XhrpP:'flk-accordion',cR0Imgedl:'markdown',c_c4a5SuO:'flk-accordion',cjzVQ7yqy:'flk-spinner',cwny_qmWP:'layout'},
                render: function (component) {
                    let cmpspT3 = this._lc('cwny_qmWP', {parent:component,content:(layout) => {let cndfmEC = Is.empty(component.course);
this.setState('st0IPyT', cndfmEC);
let cnd0AxB = !(cndfmEC);
this.setState('stTgquc', cnd0AxB);
if (cndfmEC) { 
let cmpXSEz = this._lc('cmzTxnHd8', {parent:component,parentTop:layout,state:'st0IPyT'});
}else { 
let el88QU8 = eo('div',null,null,`class`,`row oneCourse`);
let elpvGF4 = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let els01te = eo('header',null,null,`class`,`courseImage`);
let elqW48_ = eo('div',null,null,`class`,`media`);
let elhpovP = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elW91At = eo('div',null,null,`class`,`media-body`);
let ely2Q5B = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let elhnoro = eo('small');
text(component.course.description);
ec('small');
let eltyD_h = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elOPai8 = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let el55byT = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elEU1En = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elrZSh3 = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let elZN43g = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let elMRuYB = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cndL0Gr = ! component.user.isLoggedIn();
this.setState('sty4mZy', cndL0Gr);
if (cndL0Gr) { 
let elDLbJ5 = eo('div','lQef',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let elQnvVO = eo('a','G9Kf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let elzprkD = eo('a','iH6f',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let elnfWG2 = eo('h2');
text(`General information about the course`);
ec('h2');
let elHSoif = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let elQjJ1K = eo('tr');
let elPzQtj = eo('th');
text(`Course level`);
ec('th');
let elRt63Q = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let el42SHU = eo('th');
text(`Instructor`);
ec('th');
let elTwG2H = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let elonD7H = eo('tr');
let elViEOb = eo('th');
text(`Total sessions`);
ec('th');
let cndWNxr = component.course.time.startDate;
this.setState('stzkWTg', cndWNxr);
let cndiAlD = !(cndWNxr);
this.setState('stoVVnD', cndiAlD);
if (cndWNxr) { 
let el9DxEw = eo('td','QBpf');
text(`${ component.course.time.length } weeks`);
ec('td');
let eleCTux = eo('th','NSdf');
text(`Starting date`);
ec('th');
let elkN5SC = eo('td','UQHf');
text( component.course.time.startDate );
ec('td');
}else { 
let elHTVYl = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let elFw6dl = eo('tr');
let elFEE5I = eo('th');
text(`Sessions per week`);
ec('th');
let eleXTfn = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elgmeF5 = eo('th');
text(`Hours per session`);
ec('th');
let eldiG5G = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let elevjEg = eo('tr');
let elc8N15 = eo('th');
text(`Cost`);
ec('th');
let elstrgE = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let el3ET5e = eo('th');
text(`Total hours`);
ec('th');
let elxqT5I = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elFL620 = eo('tr');
let el4Ihnc = eo('th');
text(`Address`);
ec('th');
let elUHfWi = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let elqdJc2 = eo('section',null,null,`id`,`course-info-details`);
let cmpS46o = this._lc('cWZ29heO8', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpu5jh = this._lc('cHDAyQLpn', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmpJdZp = this._lc('csB5KXjJ3', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpY_kb = this._lc('cQLbZ4hYG', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmpsDsh = this._lc('cpH_XhrpP', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp9_pQ = this._lc('cHDSXM_l5', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmpZOC5 = this._lc('c_c4a5SuO', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpnxRL = this._lc('cR0Imgedl', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let elApZfZ = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let eljsYLr = eo('div',null,null,`class`,`courseApply card`);
let elgi6gc = eo('div',null,null,`class`,`card-body`);
let elgT2eT = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let ela0ZZZ = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let eluSjr5 = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let elVfmIn = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let eldDVEv = eo('div',null,null,`class`,`text-center`);
let cndb1r4 = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stGOrfc', cndb1r4);
let cnddORr = component.isSubscribing;
this.setState('stIET6A', cnddORr);
let cndCA1h = !(cndb1r4||cnddORr);
this.setState('stN6wWC', cndCA1h);
if (cndb1r4) { 
let elAruOH = eo('button','9T6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase`);
elAruOH.cls = {'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()};

            for (let className in elAruOH.cls) {
                elAruOH.classList.toggle(className, elAruOH.cls[className]);
            }  
            text(`Subscribe now!`);
let cndWXag = ! component.user.isLoggedIn();
this.setState('stDgizB', cndWXag);
if (cndWXag) { 
let eltvqkb = eo('i','B19f',null,`class`,`${fas('lock') + ' ml-1 icon'}`);
ec('i');
}ec('button');
}else if (cnddORr) { 
let cmp6MRg = this._lc('cjzVQ7yqy', {parent:component,parentTop:layout,state:'stIET6A'});
}else { 
let elhMYnC = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elh2JzC = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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