_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cW7yV1GGu:'flk-time-ago',caEjErpIl:'markdown',cJZQjUPDf:'flk-alert'},
                render: function (component) {
                    let elpXhDG = eo('div',null,null,`class`,`user-story`);
let cndfH_Y = ! Is.empty(component.userStories);
this.setState('stYjdS5', cndfH_Y);
let cndFysz = !(cndfH_Y);
this.setState('stMpNyX', cndFysz);
if (cndfH_Y) { 
let elUD7Y_ = eo('div','0Luf',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iiprb8 = userStory.id+ index;
let elRBgrR = eo('div','GGYKDSpWoVl3' + index+iiprb8,null,`class`,`col-12 ${cls(component.getResponsiveClasses())}`);
let elYWWrc = eo('div','1BCff'+iiprb8,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let eltYyr0 = eo('div','NaNff'+iiprb8,null,`class`,`note_cnt`);
let cndCeaj = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('stW_KEO', cndCeaj);
if (cndCeaj) { 
let el5eGDx = eo('div','q52ff'+iiprb8,null,`class`,`m-b-3`);
let elanYiM = eo('div','3iAff'+iiprb8,null,`class`,`action-btns`);
let elYCuUW = eo('a','7YMff'+iiprb8,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elxM1yz = eo('i','Yyoff'+iiprb8,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elYCuUW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let el8_CBs = eo('button','XDHff'+iiprb8,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elQAWQa = eo('i','7Hpff'+iiprb8,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8_CBs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let el7raup = eo('i','r8wff'+iiprb8,null,`class`,`${fas('thumbtack')} pin-icon icon`);
ec('i');
let elIbDU5 = eo('div','_3Pff'+iiprb8,null,`class`,`title`);
let elI9TN6 = eo('span','0b2ff'+iiprb8);
text(userStory.title);
ec('span');
let elqyUjg = eo('small','9zfff'+iiprb8,null,`class`,`created-at`);
let cmp5iiL = this._lc('cW7yV1GGu', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iiprb8});
let el71Cjb = ev('img','AHiff'+iiprb8,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = el71Cjb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmpbi9D = this._lc('caEjErpIl', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iiprb8});
let elIqQuE = eo('div','aP7ff'+iiprb8);
let elzbg8N = eo('small','ZQJff'+iiprb8);
text(userStory.type);
ec('small');
let el5F3IN = eo('a','eZsff'+iiprb8,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elUD7Y_;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elSmXR6 = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cnduxYv = component.confirmDelete;
this.setState('stDGFPc', cnduxYv);
if (cnduxYv) { 
let cmpa77m = this._lc('cJZQjUPDf', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stDGFPc'});
}
                    this.isReadyToGo();
                }
        });