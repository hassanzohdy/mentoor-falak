_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {cTjy_sdsG:'flk-spinner',ce0vaN7l_:'course-video-form',cDEpI4l2r:'course-video-form',c1kcYTXyw:'course-section-videos-list',cmezgsGbF:'flk-accordion',cUPr9MMgr:'layout',ciLPgb2Qq:'course-section-form',c_2B24t_q:'course-section-form',cApzl6T4s:'flk-alert'},
                render: function (component) {
                    let cmpZAyc = this._lc('cUPr9MMgr', {parent:component,content:(layout) => {let cndJASf = component.isLoading;
this.setState('stHu7MW', cndJASf);
let cndwMly = !(cndJASf);
this.setState('stTAeoq', cndwMly);
if (cndJASf) { 
let cmpjvfn = this._lc('cTjy_sdsG', {parent:component,parentTop:layout,state:'stHu7MW'});
}else { 
let el2bD9w = eo('div');
let cndFY8D = component.newVideo;
this.setState('st9NFJs', cndFY8D);
let cndtl75 = component.updateVideo;
this.setState('stdw_M9', cndtl75);
let cndN4hT = !(cndFY8D||cndtl75);
this.setState('stxIYzd', cndN4hT);
if (cndFY8D) { 
let cmpwg48 = this._lc('ce0vaN7l_', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'st9NFJs'});
}else if (cndtl75) { 
let cmpB7oY = this._lc('cDEpI4l2r', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'stdw_M9'});
}else { 
let eltfh44 = eo('h1');
text(component.course.title);
ec('h1');
let elHVvgf = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let iinK3O = section.id+ index;
let cmptlYk = this._lc('cmezgsGbF', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elBjP9g = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let elLPNf9 = eo('i',null,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBjP9g;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elCRbm2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let elDfSqc = eo('i',null,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCRbm2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let elnD6F9 = ev('hr');
let el0vOE2 = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpLlLj = this._lc('c1kcYTXyw', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'stxIYzd'});
let ellZ2K_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let el28PQF = eo('i',null,null,`class`,`${fas('plus')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ellZ2K_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'stxIYzd',insideLoop:true,index:"" +iinK3O});
}
let elRNYhT = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elvNGla = eo('i',null,null,`class`,`${fas('plus')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRNYhT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndHW8S = component.newSection;
this.setState('st0SHTC', cndHW8S);
if (cndHW8S) { 
let cmpeRMp = this._lc('ciLPgb2Qq', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'st0SHTC'});
}let cnd74sI = component.editSection;
this.setState('stbyent', cnd74sI);
if (cnd74sI) { 
let cmpaWCZ = this._lc('c_2B24t_q', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'stbyent'});
}let cndnoR7 = component.deleteSection;
this.setState('stRMz3E', cndnoR7);
if (cndnoR7) { 
let cmpv3DL = this._lc('cApzl6T4s', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'stRMz3E'});
}
                    this.isReadyToGo();
                }
        });