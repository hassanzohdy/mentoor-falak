_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {ckI_jEI0j:'flk-spinner',cFjPn01_0:'course-video-form',cGEl1CME0:'course-video-form',cuxulfLs2:'course-section-videos-list',ciqXyFOtP:'flk-accordion',c2dBQc5XT:'layout',coIrTGWnZ:'course-section-form',cZMqz7Do3:'course-section-form',cgQAHcwZB:'flk-alert'},
                render: function (component) {
                    let cmp39yi = this._lc('c2dBQc5XT', {parent:component,content:(layout) => {let cndeKlV = component.isLoading;
this.setState('st5guzo', cndeKlV);
let cndh8aw = !(cndeKlV);
this.setState('st_CA4f', cndh8aw);
if (cndeKlV) { 
let cmpibxx = this._lc('ckI_jEI0j', {parent:component,parentTop:layout,state:'st5guzo'});
}else { 
let elZHwbB = eo('div');
let cndFPo_ = component.newVideo;
this.setState('stIU5f3', cndFPo_);
let cndIsPg = component.updateVideo;
this.setState('stMZC0N', cndIsPg);
let cnd7o_p = !(cndFPo_||cndIsPg);
this.setState('st94Ub_', cnd7o_p);
if (cndFPo_) { 
let cmpaFfP = this._lc('cFjPn01_0', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'stIU5f3'});
}else if (cndIsPg) { 
let cmpx5jz = this._lc('cGEl1CME0', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'stMZC0N'});
}else { 
let elhYH8a = eo('h1');
text(component.course.title);
ec('h1');
let elv9GYB = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let iiPbci = section.id+ index;
let cmpnr69 = this._lc('ciqXyFOtP', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elrRacU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let elaapeh = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elrRacU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elTwiJb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let elgpA8k = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTwiJb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let el8lrVa = ev('hr');
let elHyvkC = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpAIWw = this._lc('cuxulfLs2', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'st94Ub_'});
let el_4lyA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let eli9zN7 = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el_4lyA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'st94Ub_',insideLoop:true,index:"" +iiPbci});
}
let el5axEt = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elgSjY9 = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5axEt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndYzMK = component.newSection;
this.setState('stlIseG', cndYzMK);
if (cndYzMK) { 
let cmpNlpU = this._lc('coIrTGWnZ', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'stlIseG'});
}let cndk5Mn = component.editSection;
this.setState('st4FKY7', cndk5Mn);
if (cndk5Mn) { 
let cmpAbhZ = this._lc('cZMqz7Do3', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'st4FKY7'});
}let cndKayZ = component.deleteSection;
this.setState('stYG2ok', cndKayZ);
if (cndKayZ) { 
let cmpNCT6 = this._lc('cgQAHcwZB', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'stYG2ok'});
}
                    this.isReadyToGo();
                }
        });