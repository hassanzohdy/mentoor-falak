_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {ce7Lb9r2o:'flk-spinner',cCf4uGR_G:'course-video-form',cks6dNYSJ:'course-video-form',chbf6SRW0:'course-section-videos-list',c4h7puX0T:'flk-accordion',cQOjUxhVh:'layout',cR1017Dvc:'course-section-form',c_ZMVGfGG:'course-section-form',c1nHymsET:'flk-alert'},
                render: function (component) {
                    let cmpnn3t = this._lc('cQOjUxhVh', {parent:component,content:(layout) => {let cndHXJR = component.isLoading;
this.setState('stsES2z', cndHXJR);
let cndnTAq = !(cndHXJR);
this.setState('sttc0Vl', cndnTAq);
if (cndHXJR) { 
let cmp9AAL = this._lc('ce7Lb9r2o', {parent:component,parentTop:layout,state:'stsES2z'});
}else { 
let elP1zL9 = eo('div');
let cndOOdU = component.newVideo;
this.setState('sty0N8i', cndOOdU);
let cndMQWz = component.updateVideo;
this.setState('st8zOKH', cndMQWz);
let cndQULY = !(cndOOdU||cndMQWz);
this.setState('stAJ5Ch', cndQULY);
if (cndOOdU) { 
let cmpZOcA = this._lc('cCf4uGR_G', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'sty0N8i'});
}else if (cndMQWz) { 
let cmp29GD = this._lc('cks6dNYSJ', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'st8zOKH'});
}else { 
let elr3eQo = eo('h1');
text(component.course.title);
ec('h1');
let elg9CnR = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let iiXQy1 = section.id+ index;
let cmpXFG9 = this._lc('c4h7puX0T', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elFPOCX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let elhTRK5 = eo('i',null,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elFPOCX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let el1fcjw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let elpROEi = eo('i',null,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1fcjw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let elyo1vJ = ev('hr');
let elGBJ01 = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpW3E5 = this._lc('chbf6SRW0', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'stAJ5Ch'});
let elpFz37 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let elmF4CW = eo('i',null,null,`class`,`${fas('plus')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpFz37;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'stAJ5Ch',insideLoop:true,index:"" +iiXQy1});
}
let el615C7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elyErek = eo('i',null,null,`class`,`${fas('plus')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el615C7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndnl2O = component.newSection;
this.setState('stTwjor', cndnl2O);
if (cndnl2O) { 
let cmpm4SO = this._lc('cR1017Dvc', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'stTwjor'});
}let cndOBqi = component.editSection;
this.setState('stKUit2', cndOBqi);
if (cndOBqi) { 
let cmpiNkT = this._lc('c_ZMVGfGG', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'stKUit2'});
}let cndF9eF = component.deleteSection;
this.setState('stzGbbj', cndF9eF);
if (cndF9eF) { 
let cmpFF_E = this._lc('c1nHymsET', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'stzGbbj'});
}
                    this.isReadyToGo();
                }
        });