_Component({
                selector: 'course-sections-page',
                c: 'CourseSectionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','newVideo','currentSection','course','updateVideo','currentVideo','editSection','index','deleteSection','newSection','removeSection'],
                children: {ceNhxd2w3:'flk-spinner',cmPLCajhf:'course-video-form',cM3yCvoBh:'course-video-form',cCBKjtMQC:'course-section-videos-list',cPjSlukXa:'flk-accordion',cpSzrqb9d:'layout',cw8nkVl6C:'course-section-form',cpSo0R1Yp:'course-section-form',cIzhXey3C:'flk-alert'},
                render: function (component) {
                    let cmpltBG = this._lc('cpSzrqb9d', {parent:component,content:(layout) => {let cndKbMe = component.isLoading;
this.setState('stiPryG', cndKbMe);
let cnd4f_s = !(cndKbMe);
this.setState('stRbBPx', cnd4f_s);
if (cndKbMe) { 
let cmpiM6V = this._lc('ceNhxd2w3', {parent:component,parentTop:layout,state:'stiPryG'});
}else { 
let eltVPY8 = eo('div');
let cnd9D4n = component.newVideo;
this.setState('stc8FG4', cnd9D4n);
let cndjNMm = component.updateVideo;
this.setState('stLj1FJ', cndjNMm);
let cnd_Y9H = !(cnd9D4n||cndjNMm);
this.setState('stXPfYO', cnd_Y9H);
if (cnd9D4n) { 
let cmpc8YZ = this._lc('cmPLCajhf', {parent:component,parentTop:layout,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.newVideo = false},onsave:function(e) {let $el = this; component.currentSection.videos.push(e)}},state:'stc8FG4'});
}else if (cndjNMm) { 
let cmpysUe = this._lc('cM3yCvoBh', {parent:component,parentTop:layout,props:{video:component.currentVideo,course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.updateVideo = false},onsave:function(e) {let $el = this; component.currentSection[index] = e}},state:'stLj1FJ'});
}else { 
let elVE3dQ = eo('h1');
text(component.course.title);
ec('h1');
let elgjDRj = eo('div',null,null,`class`,`simple-card p-0 m-t-1`);
for (let index in component.course.sections) {
let section = component.course.sections[index]; 
 let iixdZF = section.id+ index;
let cmppSxt = this._lc('cPjSlukXa', {parent:component,parentTop:layout,props:{heading:section.title},content:(flkAccordion) => {let elJYkwa = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.editSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-info btn-sm`);
let elyb7BK = eo('i',null,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elJYkwa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elLs6sd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.deleteSection = true; component.currentSection = section; component.index = index;}]},`title`,``,`type`,`button`,`class`,`btn btn-circle btn-danger btn-sm`);
let el1HTFf = eo('i',null,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elLs6sd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                let elR7eEM = ev('hr');
let elpGIws = eo('h4',null,null,`class`,`m-t-1`);
text(`Content`);
ec('h4');
let cmp_Aht = this._lc('cCBKjtMQC', {parent:component,parentTop:flkAccordion,props:{videos:section.videos},state:'stXPfYO'});
let elgVQMc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newVideo = true; component.currentSection = section}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-purple`);
let elYrXWi = eo('i',null,null,`class`,`${fas('plus')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elgVQMc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Video')}`});
        ;
                    }, 20);                
                },state:'stXPfYO',insideLoop:true,index:"" +iixdZF});
}
let elSIiLZ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.newSection = true}]},`title`,``,`type`,`button`,`class`,`m-y-2 btn btn-sm btn-success`);
let elPst1k = eo('i',null,null,`class`,`${fas('plus')} icon fa-2x`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elSIiLZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Section')}`});
        ;
                    }, 20);                
                ec('div');
}ec('div');
}}});
let cndFvah = component.newSection;
this.setState('sttALxd', cndFvah);
if (cndFvah) { 
let cmpX33b = this._lc('cw8nkVl6C', {parent:component,props:{course:component.course},events:{onclose:function(e) {let $el = this; component.newSection = false},onsave:function(e) {let $el = this; component.course.sections.push(e)}},state:'sttALxd'});
}let cndAmA7 = component.editSection;
this.setState('stGU8mL', cndAmA7);
if (cndAmA7) { 
let cmpWIIx = this._lc('cpSo0R1Yp', {parent:component,props:{course:component.course,section:component.currentSection},events:{onclose:function(e) {let $el = this; component.editSection = false},onsave:function(e) {let $el = this; component.course.sections[component.index] = e}},state:'stGU8mL'});
}let cndWCs3 = component.deleteSection;
this.setState('sti8ofE', cndWCs3);
if (cndWCs3) { 
let cmpUdTI = this._lc('cIzhXey3C', {parent:component,events:{onclose:function(e) {let $el = this; component.deleteSection = false},onconfirm:function(e) {let $el = this; component.removeSection()}},state:'sti8ofE'});
}
                    this.isReadyToGo();
                }
        });