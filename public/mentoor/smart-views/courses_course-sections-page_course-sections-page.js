_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {cnfGyDAkP:'flk-spinner',c1jSL6Ogl:'course-video-form',cGNhC4Hpj:'course-video-form',cYgKv50FN:'course-section-videos-list',cijEsoM46:'flk-accordion',c54lramtR:'layout',cNekPIy5z:'course-section-form',ca7TnkA1v:'course-section-form',ck9D0jhyM:'flk-alert'},
                render: function (component) {
                    let cmp7Re3 = this._lc('c54lramtR', {parent:component,content:(layout) => {let cndsZOp = component.isLoading;
this.setState('stIa1wq', cndsZOp);
let cndoqO2 = !(cndsZOp);
this.setState('stI4Y1S', cndoqO2);
if (cndsZOp) { 
let cmpz4oz = this._lc('cnfGyDAkP', {parent:component,parentTop:layout,state:'stIa1wq'});
}else { 
let el5rhnn = eo('div');
let cndUeuT = component.newVideo;
this.setState('stJPnRZ', cndUeuT);
let cnd0mRs = component.updateVideo;
this.setState('stfLg9q', cnd0mRs);
let cndYsLm = !(cndUeuT||cnd0mRs);
this.setState('stszZbg', cndYsLm);
if (cndUeuT) { 
let cmpu4lv = this._lc('c1jSL6Ogl', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'stJPnRZ'});
}else if (cnd0mRs) { 
let cmpS8wr = this._lc('cGNhC4Hpj', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'stfLg9q'});
}else { 
let elz3qjx = eo('h1');
text(component.course.title);
ec('h1');
let elcjK8s = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let iiD6sA = section.id+ index;
let cmpqMKs = this._lc('cijEsoM46', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elw9xSA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let ellmROt = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elw9xSA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elABXdO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let elmFHoS = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elABXdO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let elgn8KP = ev('hr');
let elzbOqO = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpis78 = this._lc('cYgKv50FN', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'stszZbg'});
let elPcEbh = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let elPAMwn = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPcEbh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'stszZbg',insideLoop:true,index:"" +iiD6sA});
}
let elS7qFw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elBMDE1 = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elS7qFw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndRb0Y = component.newSection;
this.setState('st17I1f', cndRb0Y);
if (cndRb0Y) { 
let cmpg6sC = this._lc('cNekPIy5z', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'st17I1f'});
}let cndw0sk = component.editSection;
this.setState('st6j9PW', cndw0sk);
if (cndw0sk) { 
let cmpOdvj = this._lc('ca7TnkA1v', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'st6j9PW'});
}let cndfniI = component.deleteSection;
this.setState('stuhsHk', cndfniI);
if (cndfniI) { 
let cmpFk2d = this._lc('ck9D0jhyM', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'stuhsHk'});
}
                    this.isReadyToGo();
                }
        });