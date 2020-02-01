_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {cwcAAV_c1:'flk-spinner',cWgMQPFQ4:'course-video-form',cIdYL8fyQ:'course-video-form',ce18KPOZd:'course-section-videos-list',cp372SqO1:'flk-accordion',cqe7IFLbM:'layout',crYW7lDgD:'course-section-form',cvfjxnjx6:'course-section-form',cNXgMivaD:'flk-alert'},
                render: function (component) {
                    let cmp1m0b = this._lc('cqe7IFLbM', {parent:component,content:(layout) => {let cndcLnu = component.isLoading;
this.setState('sty87ox', cndcLnu);
let cnd6tuz = !(cndcLnu);
this.setState('stN3arn', cnd6tuz);
if (cndcLnu) { 
let cmpNRfW = this._lc('cwcAAV_c1', {parent:component,parentTop:layout,state:'sty87ox'});
}else { 
let elqeYyz = eo('div');
let cndQtnJ = component.newVideo;
this.setState('stj9fZA', cndQtnJ);
let cndzpQ7 = component.updateVideo;
this.setState('stvqHVA', cndzpQ7);
let cndsLBq = !(cndQtnJ||cndzpQ7);
this.setState('stCC5Gz', cndsLBq);
if (cndQtnJ) { 
let cmpX7IY = this._lc('cWgMQPFQ4', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'stj9fZA'});
}else if (cndzpQ7) { 
let cmpshPL = this._lc('cIdYL8fyQ', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'stvqHVA'});
}else { 
let elQcGl8 = eo('h1');
text(component.course.title);
ec('h1');
let elUeyz1 = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let iiXnyr = section.id+ index;
let cmpZ2Rm = this._lc('cp372SqO1', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elRXXV2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let eloQto9 = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRXXV2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let el15Nsd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let elvvNwJ = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el15Nsd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let elafVHe = ev('hr');
let elRl62g = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpxVT5 = this._lc('ce18KPOZd', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'stCC5Gz'});
let elSzAhu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let el4VM1C = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elSzAhu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'stCC5Gz',insideLoop:true,index:"" +iiXnyr});
}
let elyy3aE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elL2S6y = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elyy3aE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndw5wk = component.newSection;
this.setState('stEVjD7', cndw5wk);
if (cndw5wk) { 
let cmpVpoY = this._lc('crYW7lDgD', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'stEVjD7'});
}let cndgsYd = component.editSection;
this.setState('steyqMB', cndgsYd);
if (cndgsYd) { 
let cmpK9G4 = this._lc('cvfjxnjx6', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'steyqMB'});
}let cndEgvI = component.deleteSection;
this.setState('stDsCX0', cndEgvI);
if (cndEgvI) { 
let cmp7Vxv = this._lc('cNXgMivaD', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'stDsCX0'});
}
                    this.isReadyToGo();
                }
        });