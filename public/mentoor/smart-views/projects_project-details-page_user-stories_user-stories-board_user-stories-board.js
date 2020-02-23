_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cy7BbbDwu:'flk-time-ago',cO9qEHz81:'markdown',cxO8gGmfI:'flk-alert'},
                render: function (component) {
                    let elRxmrB = eo('div',null,null,`class`,`user-story`);
let cndxQRq = ! Is.empty(component.userStories);
this.setState('stXC3e6', cndxQRq);
let cndvX7D = !(cndxQRq);
this.setState('ststvy7', cndvX7D);
if (cndxQRq) { 
let elDBp9z = eo('div','N9Rf',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iilq1p = userStory.id+ index;
let el06GX7 = eo('div','i_pY0KrjY0NP' + index+iilq1p,null,`class`,`col-12`);
el06GX7.cls = component.getResponsiveClasses();

            for (let className in el06GX7.cls) {
                el06GX7.classList.toggle(className, el06GX7.cls[className]);
            }  
            let elqoC4z = eo('div','Xhtff'+iilq1p,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let eldv6Jb = eo('div','fZqff'+iilq1p,null,`class`,`note_cnt`);
let cndRCs_ = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('stD_brZ', cndRCs_);
if (cndRCs_) { 
let elOkZjm = eo('div','dXjff'+iilq1p,null,`class`,`m-b-3`);
let elxRRwR = eo('div','qynff'+iilq1p,null,`class`,`action-btns`);
let elnM_i4 = eo('a','ljTff'+iilq1p,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elztUW6 = eo('i','1wKff'+iilq1p,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elnM_i4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elpbC9b = eo('button','UuVff'+iilq1p,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elW3if6 = eo('i','MQvff'+iilq1p,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpbC9b;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let elC9zHP = eo('i','kQ2ff'+iilq1p,null,`class`,`${fas('thumbtack') + ' pin-icon icon'}`);
ec('i');
let elODRw5 = eo('div','4mpff'+iilq1p,null,`class`,`title`);
let elmiOR3 = eo('span','xKwff'+iilq1p);
text(userStory.title);
ec('span');
let el_THi5 = eo('small','6Erff'+iilq1p,null,`class`,`created-at`);
let cmp6NKe = this._lc('cy7BbbDwu', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iilq1p});
let eljYcMt = ev('img','Nxpff'+iilq1p,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = eljYcMt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmp7auH = this._lc('cO9qEHz81', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iilq1p});
let eloq2TX = eo('div','zHEff'+iilq1p);
let elCNg4q = eo('small','osCff'+iilq1p);
text(userStory.type);
ec('small');
let elPVOfn = eo('a','B25ff'+iilq1p,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elDBp9z;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elHyUnx = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cndoFPn = component.confirmDelete;
this.setState('stvUOUq', cndoFPn);
if (cndoFPn) { 
let cmpqM9b = this._lc('cxO8gGmfI', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stvUOUq'});
}
                    this.isReadyToGo();
                }
        });