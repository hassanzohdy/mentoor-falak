_Component({
                selector: 'offline-course-details-page',
                c: 'OfflineCourseDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['course','user','isSubscribing','subscribeToCourse'],
                children: {cff3_SKpG:'flk-spinner',cZ90axtVr:'markdown',cJg96Fy3D:'flk-accordion',chdOQFPSV:'markdown',cOkRJ0vby:'flk-accordion',cv5wVhCQr:'markdown',c8H1NCuFP:'flk-accordion',cPT3ukkGL:'markdown',c42YvTJmF:'flk-accordion',cbrVQqOIl:'flk-spinner',cZ1D8aC8A:'layout'},
                render: function (component) {
                    let cmpVJaD = this._lc('cZ1D8aC8A', {parent:component,content:(layout) => {let cndwZyw = Is.empty(component.course);
this.setState('stHo44S', cndwZyw);
let cnd38d8 = !(cndwZyw);
this.setState('stKbxBf', cnd38d8);
if (cndwZyw) { 
let cmpYpJJ = this._lc('cff3_SKpG', {parent:component,parentTop:layout,state:'stHo44S'});
}else { 
let elXelL3 = eo('div',null,null,`class`,`row oneCourse`);
let elENBJD = eo('section',null,null,`class`,`col-lg-9 col-md-8 col-12`);
let eloz5ld = eo('header',null,null,`class`,`courseImage`);
let el486hg = eo('div',null,null,`class`,`media`);
let elPheBZ = ev('img',null,null,`src`,`${component.course.image}`,`class`,`align-self-center mr-3 course-image`,`alt`,`course.name`);
let elLt1q4 = eo('div',null,null,`class`,`media-body`);
let elMaTzK = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.course.name));
ec('h2');
let elmJLgd = eo('small');
text(component.course.description);
ec('small');
let elXbFbX = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elQfieD = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
ec('small');
ec('div');
ec('div');
ec('header');
let el8TzdX = eo('section',null,null,`id`,`general-info`,`class`,`m-t-3 m-b-2`);
let elP5eEX = eo('div',null,null,`class`,`m-y-1 alert alert-success`);
text(`The course will start in July 2019.`);
ec('div');
let elWlv65 = eo('div',null,null,`class`,`m-y-1 alert alert-info contact-info`);
text(`For more information or inquiries please contact the instructor on`);
let elztdx6 = eo('a',null,null,`href`,`https://fb.me/hassan.zohdy`,`class`,`blue-text mx-1 bold`);
text(`Facebook`);
ec('a');
text(`or contact him on`);
let elt67aQ = eo('span',null,null,`class`,`mx-2 blue-text bold`);
text(`+2 0114 5145 824 (Whatsapp only).`);
ec('span');
ec('div');
let cndP0O9 = ! component.user.isLoggedIn();
this.setState('stxrxX6', cndP0O9);
if (cndP0O9) { 
let elC9S6F = eo('div','AHKf',null,`class`,`m-y-1 alert alert-warning`);
text(`Please`);
let elH0M87 = eo('a','UGgf',null,`href`,`/login`,`class`,`bold blue-text mx-1`);
text(`Login`);
ec('a');
text(`or`);
let el4tvKS = eo('a','temf',null,`href`,`/register`,`class`,`bold blue-text mx-1`);
text(`Signup`);
ec('a');
text(`to subscribe.`);
ec('div');
}let eliaz3L = eo('h2');
text(`General information about the course`);
ec('h2');
let elWtxoq = eo('table',null,null,`class`,`m-t-2 table table-bordered table-striped`);
let elLK36e = eo('tr');
let elRt1cb = eo('th');
text(`Course level`);
ec('th');
let elFeyEr = eo('td');
text(`For ${ component.course.level == 'Beginner' ? 'Beginners' : component.course.level }`);
ec('td');
let elPdHoj = eo('th');
text(`Instructor`);
ec('th');
let el3KKbs = eo('td');
text(component.course.instructor.name);
ec('td');
ec('tr');
let eleD3TZ = eo('tr');
let el12kYu = eo('th');
text(`Total sessions`);
ec('th');
let cndKFV1 = component.course.time.startDate;
this.setState('stU7cSn', cndKFV1);
let cndeZGt = !(cndKFV1);
this.setState('stVrXun', cndeZGt);
if (cndKFV1) { 
let elrOjxl = eo('td','dLWf');
text(`${ component.course.time.length } weeks`);
ec('td');
let elU7u5N = eo('th','IxYf');
text(`Starting date`);
ec('th');
let elkZ1gD = eo('td','RXTf');
text( component.course.time.startDate );
ec('td');
}else { 
let ellnK3F = eo('td',null,null,`colspan`,`3`);
text(`${ component.course.time.length } weeks`);
ec('td');
}ec('tr');
let elDXFZs = eo('tr');
let elUoMLQ = eo('th');
text(`Sessions per week`);
ec('th');
let eloqDA5 = eo('td');
text(`${ component.course.time.sessionsPerWeek } session(s)`);
ec('td');
let elNyvsM = eo('th');
text(`Hours per session`);
ec('th');
let elaEFSN = eo('td');
text(`${ component.course.time.duration } hours`);
ec('td');
ec('tr');
let el5ANfe = eo('tr');
let elKyS5s = eo('th');
text(`Cost`);
ec('th');
let ely6A0U = eo('td',null,null,`class`,`bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('td');
let elNeSfL = eo('th');
text(`Total hours`);
ec('th');
let eldHqt_ = eo('td',null,null,`class`,`bold orange-text`);
text(`${ component.course.time.duration * component.course.time.length } hours`);
ec('td');
ec('tr');
let elUnkP6 = eo('tr');
let elL6nba = eo('th');
text(`Address`);
ec('th');
let elR8RT8 = eo('td',null,null,`colspan`,`3`);
text(component.course.address);
ec('td');
ec('tr');
ec('table');
ec('section');
let elUUZsi = eo('section',null,null,`id`,`course-info-details`);
let cmpw3aG = this._lc('cJg96Fy3D', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpXdAl = this._lc('cZ90axtVr', {parent:component,parentTop:flkAccordion,props:{content:component.course.requirements}});
},attrs:{heading:'Course requirements'}});
let cmpCTcf = this._lc('cOkRJ0vby', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmp5TfU = this._lc('chdOQFPSV', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.subscribe}});
},attrs:{heading:'Why you would join this course?'}});
let cmp_XBz = this._lc('c8H1NCuFP', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpxKGn = this._lc('cv5wVhCQr', {parent:component,parentTop:flkAccordion,props:{content:component.course.whenTo.notSubscribe}});
},attrs:{heading:'Why you would not join this course?'}});
let cmpa4eH = this._lc('c42YvTJmF', {parent:component,parentTop:layout,content:(flkAccordion) => {let cmpW0_Y = this._lc('cPT3ukkGL', {parent:component,parentTop:flkAccordion,props:{content:component.course.content}});
},attrs:{heading:'Course content'}});
ec('section');
ec('section');
let elyTtWh = eo('div',null,null,`class`,`col-lg-3 col-md-4 col-12`);
let elN2x16 = eo('div',null,null,`class`,`courseApply card`);
let elWLRe1 = eo('div',null,null,`class`,`card-body`);
let el_gI6I = eo('div',null,null,`class`,`card-title bold`);
text(`Course summary`);
ec('div');
let elBPFDl = eo('div',null,null,`class`,`courseMeta d-flex justify-content-between pt-4 pb-4`);
let elo9dVu = eo('span',null,null,`class`,`courseSingleMeta bold orange-text`);
text(`${ component.course.time.length * component.course.time.duration } hrs`);
ec('span');
let eleJRdI = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`courseSingleMeta bold green-text`);
text(`${ component.course.cost.format() } EGP`);
ec('span');
ec('div');
let elP6f3X = eo('div',null,null,`class`,`text-center`);
let cndlyF5 = ! component.user.isLoggedIn() || ! component.course.subscribed && ! component.isSubscribing;
this.setState('stm2lNZ', cndlyF5);
let cnddto3 = component.isSubscribing;
this.setState('stQmFgw', cnddto3);
let cndJXVe = !(cndlyF5||cnddto3);
this.setState('stvb69_', cndJXVe);
if (cndlyF5) { 
let el_n0DD = eo('button','9_Df',null, eventListeners, {onclick:[function(e) {var $el = this;component.subscribeToCourse()}]},`class`,`btn text-uppercase`);
el_n0DD.cls = {'btn-success': component.user.isLoggedIn(), 'btn-danger': ! component.user.isLoggedIn()};

            for (let className in el_n0DD.cls) {
                el_n0DD.classList.toggle(className, el_n0DD.cls[className]);
            }  
            text(`Subscribe now!`);
let cndQVb7 = ! component.user.isLoggedIn();
this.setState('st18ybv', cndQVb7);
if (cndQVb7) { 
let el_2wmX = eo('i','KHvf',null,`class`,`${fas('lock') + ' ml-1 icon'}`);
ec('i');
}ec('button');
}else if (cnddto3) { 
let cmpaFiz = this._lc('cbrVQqOIl', {parent:component,parentTop:layout,state:'stQmFgw'});
}else { 
let elth1LC = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let el25K7B = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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