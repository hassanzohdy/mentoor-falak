_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cLxB17piD:'flk-time-ago',cPBPAM9vo:'markdown',c2CPuwm_8:'flk-alert'},
                render: function (component) {
                    let elsffzI = eo('div',null,null,`class`,`user-story`);
let cndF5O0 = ! Is.empty(component.userStories);
this.setState('stH3sND', cndF5O0);
let cndPyyt = !(cndF5O0);
this.setState('stJPC93', cndPyyt);
if (cndF5O0) { 
let elg2B4u = eo('div','HTTf',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iidO9x = userStory.id+ index;
let eleqZjg = eo('div','E1vWE5nAKUk8' + index+iidO9x,null,`class`,`col-12`);
eleqZjg.cls = component.getResponsiveClasses();

            for (let className in eleqZjg.cls) {
                eleqZjg.classList.toggle(className, eleqZjg.cls[className]);
            }  
            let elcrJnC = eo('div','Zxrff'+iidO9x,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let elTik9q = eo('div','OoTff'+iidO9x,null,`class`,`note_cnt`);
let cndeYOq = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('stP92LB', cndeYOq);
if (cndeYOq) { 
let elTdP_I = eo('div','rgMff'+iidO9x,null,`class`,`m-b-3`);
let elEpvUM = eo('div','e7xff'+iidO9x,null,`class`,`action-btns`);
let elftO9s = eo('a','ma7ff'+iidO9x,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elWwh0N = eo('i','jCOff'+iidO9x,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elftO9s;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elQ_4yb = eo('button','PEtff'+iidO9x,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elrNyqS = eo('i','DDkff'+iidO9x,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQ_4yb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let elO53lc = eo('i','am9ff'+iidO9x,null,`class`,`${fas('thumbtack') + ' pin-icon icon'}`);
ec('i');
let els9bUV = eo('div','zM6ff'+iidO9x,null,`class`,`title`);
let elYuOQj = eo('span','JRcff'+iidO9x);
text(userStory.title);
ec('span');
let elbeIzF = eo('small','u5lff'+iidO9x,null,`class`,`created-at`);
let cmpRSqP = this._lc('cLxB17piD', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iidO9x});
let elP7Tle = ev('img','8Mhff'+iidO9x,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elP7Tle;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmp2kW3 = this._lc('cPBPAM9vo', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iidO9x});
let elIqgE7 = eo('div','SGCff'+iidO9x);
let eldUVTR = eo('small','Ov5ff'+iidO9x);
text(userStory.type);
ec('small');
let elldYMp = eo('a','wbtff'+iidO9x,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elg2B4u;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elVzkWQ = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cndWEuW = component.confirmDelete;
this.setState('st0c5M4', cndWEuW);
if (cndWEuW) { 
let cmp6cN_ = this._lc('c2CPuwm_8', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st0c5M4'});
}
                    this.isReadyToGo();
                }
        });