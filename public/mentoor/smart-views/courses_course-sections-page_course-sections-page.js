_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {cBRcjl8O0:'flk-spinner',csTrkVX0S:'course-video-form',cU4O7qlpk:'course-video-form',ctcRrBUfp:'course-section-videos-list',cnYp2zkOA:'flk-accordion',cgyps5RDw:'layout',cFuOKVtu0:'course-section-form',cWhcQ6CBa:'course-section-form',cGLSduFFF:'flk-alert'},
                render: function (component) {
                    let cmpP95T = this._lc('cgyps5RDw', {parent:component,content:(layout) => {let cndovUz = component.isLoading;
this.setState('stmHs3_', cndovUz);
let cndhvjz = !(cndovUz);
this.setState('stTVkqs', cndhvjz);
if (cndovUz) { 
let cmp93CI = this._lc('cBRcjl8O0', {parent:component,parentTop:layout,state:'stmHs3_'});
}else { 
let elYbadc = eo('div');
let cndgvSc = component.newVideo;
this.setState('strDFSl', cndgvSc);
let cndgmdF = component.updateVideo;
this.setState('stxBHRR', cndgmdF);
let cndfieS = !(cndgvSc||cndgmdF);
this.setState('st5LYNj', cndfieS);
if (cndgvSc) { 
let cmpBcBm = this._lc('csTrkVX0S', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'strDFSl'});
}else if (cndgmdF) { 
let cmpgMqL = this._lc('cU4O7qlpk', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'stxBHRR'});
}else { 
let elTGFld = eo('h1');
text(component.course.title);
ec('h1');
let elogNvx = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let ii0jPi = section.id+ index;
let cmpEKwN = this._lc('cnYp2zkOA', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elfDBox = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let elbthQ_ = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfDBox;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elLq0eE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let eliqHz8 = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elLq0eE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let elommEO = ev('hr');
let el15WNl = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpqVG8 = this._lc('ctcRrBUfp', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'st5LYNj'});
let eltTysk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let elmLSX8 = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eltTysk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'st5LYNj',insideLoop:true,index:"" +ii0jPi});
}
let elRM3WA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elATfCC = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRM3WA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndIv4l = component.newSection;
this.setState('st2LTl5', cndIv4l);
if (cndIv4l) { 
let cmpWayb = this._lc('cFuOKVtu0', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'st2LTl5'});
}let cndFgj_ = component.editSection;
this.setState('stGXZEm', cndFgj_);
if (cndFgj_) { 
let cmpT_ZY = this._lc('cWhcQ6CBa', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'stGXZEm'});
}let cndJN9t = component.deleteSection;
this.setState('stCDCVZ', cndJN9t);
if (cndJN9t) { 
let cmpwrav = this._lc('cGLSduFFF', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'stCDCVZ'});
}
                    this.isReadyToGo();
                }
        });