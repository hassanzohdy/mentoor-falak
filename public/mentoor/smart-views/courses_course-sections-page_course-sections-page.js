_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {cJQTtwqWN:'flk-spinner',cIcrutbUA:'course-video-form',cTX6bR2y8:'course-video-form',csrBtwBck:'course-section-videos-list',cLeoQ5C3A:'flk-accordion',cbcGKXNpv:'layout',c1rsZCred:'course-section-form',cEaNkZlLe:'course-section-form',cpaOnETsB:'flk-alert'},
                render: function (component) {
                    let cmpw3Eq = this._lc('cbcGKXNpv', {parent:component,content:(layout) => {let cndUl3L = component.isLoading;
this.setState('stcY8Hl', cndUl3L);
let cndyJZj = !(cndUl3L);
this.setState('stdt2rj', cndyJZj);
if (cndUl3L) { 
let cmp2iLJ = this._lc('cJQTtwqWN', {parent:component,parentTop:layout,state:'stcY8Hl'});
}else { 
let elemMAa = eo('div');
let cndnzwM = component.newVideo;
this.setState('stwLbew', cndnzwM);
let cnd7TAf = component.updateVideo;
this.setState('stQPvLZ', cnd7TAf);
let cndNU18 = !(cndnzwM||cnd7TAf);
this.setState('stnZ2FE', cndNU18);
if (cndnzwM) { 
let cmpEeMm = this._lc('cIcrutbUA', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'stwLbew'});
}else if (cnd7TAf) { 
let cmpCOZI = this._lc('cTX6bR2y8', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'stQPvLZ'});
}else { 
let elf5ElI = eo('h1');
text(component.course.title);
ec('h1');
let elBamfs = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let ii6Ik1 = section.id+ index;
let cmpsZ2m = this._lc('cLeoQ5C3A', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let el3CMjR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let elNdqFa = eo('i',null,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3CMjR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let el6_DXx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let elmpQhV = eo('i',null,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6_DXx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let elUTx0Z = ev('hr');
let elNt4aE = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmpQu2Y = this._lc('csrBtwBck', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'stnZ2FE'});
let elDLJL9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let eldLvJZ = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDLJL9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'stnZ2FE',insideLoop:true,index:"" +ii6Ik1});
}
let elkdjOd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let el_QL2S = eo('i',null,null,`class`,`${fas('plus') + ' icon fa-2x'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elkdjOd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cnd72JH = component.newSection;
this.setState('stNyuOo', cnd72JH);
if (cnd72JH) { 
let cmpUEux = this._lc('c1rsZCred', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'stNyuOo'});
}let cnd3fiC = component.editSection;
this.setState('stF1gs4', cnd3fiC);
if (cnd3fiC) { 
let cmp7lsM = this._lc('cEaNkZlLe', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'stF1gs4'});
}let cndDy9M = component.deleteSection;
this.setState('stjnXo3', cndDy9M);
if (cndDy9M) { 
let cmpRnja = this._lc('cpaOnETsB', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'stjnXo3'});
}
                    this.isReadyToGo();
                }
        });