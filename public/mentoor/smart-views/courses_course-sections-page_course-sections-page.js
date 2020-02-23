_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {c2FzDKbjA:'flk-spinner',cJ6uq1B4l:'course-video-form',c5B2PovNW:'course-video-form',c5p0zPQBG:'course-section-videos-list',csae3bgwR:'flk-accordion',czM4AfnRP:'layout',c6rPM7kcG:'course-section-form',cbySWLRig:'course-section-form',cLaGLRnnE:'flk-alert'},
                render: function (component) {
                    let cmptfAo = this._lc('czM4AfnRP', {parent:component,content:(layout) => {let cnd5kfZ = component.isLoading;
this.setState('stuAdTF', cnd5kfZ);
let cndVl24 = !(cnd5kfZ);
this.setState('stxCZHi', cndVl24);
if (cnd5kfZ) { 
let cmpT2zB = this._lc('c2FzDKbjA', {parent:component,parentTop:layout,state:'stuAdTF'});
}else { 
let elgrx6v = eo('div');
let cndN9sW = component.newVideo;
this.setState('stnoucF', cndN9sW);
let cndOJVp = component.updateVideo;
this.setState('st92eBj', cndOJVp);
let cndPECh = !(cndN9sW||cndOJVp);
this.setState('sthUAlL', cndPECh);
if (cndN9sW) { 
let cmpRIMQ = this._lc('cJ6uq1B4l', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'stnoucF'});
}else if (cndOJVp) { 
let cmpMIbg = this._lc('c5B2PovNW', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'st92eBj'});
}else { 
let elX5Uqy = eo('h1');
text(component.course.title);
ec('h1');
let elvBI8L = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let iim6tu = section.id+ index;
let cmp26xf = this._lc('csae3bgwR', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elVuaoc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let elmFPjb = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVuaoc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elQY8lg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let elFz_G7 = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQY8lg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let el6pZtL = ev('hr');
let el6qZy2 = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpHR8O = this._lc('c5p0zPQBG', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'sthUAlL'});
let elszxzM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let el19n5g = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elszxzM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'sthUAlL',insideLoop:true,index:"" +iim6tu});
}
let el3RH2U = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elfEAnC = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3RH2U;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndQWi4 = component.newSection;
this.setState('stf85kU', cndQWi4);
if (cndQWi4) { 
let cmpyowH = this._lc('c6rPM7kcG', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'stf85kU'});
}let cndbkGm = component.editSection;
this.setState('stwkpVY', cndbkGm);
if (cndbkGm) { 
let cmp5Zho = this._lc('cbySWLRig', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'stwkpVY'});
}let cnd_3Lw = component.deleteSection;
this.setState('sttl8ha', cnd_3Lw);
if (cnd_3Lw) { 
let cmpCc2h = this._lc('cLaGLRnnE', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'sttl8ha'});
}
                    this.isReadyToGo();
                }
        });