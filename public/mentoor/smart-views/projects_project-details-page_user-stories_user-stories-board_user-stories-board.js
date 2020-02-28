_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cjRrvLCph:'flk-time-ago',cK6BxX0wm:'markdown',cUhyAfV68:'flk-alert'},
                render: function (component) {
                    let elL81n7 = eo('div',null,null,`class`,`user-story`);
let cnd1q4M = ! Is.empty(component.userStories);
this.setState('stM2ksj', cnd1q4M);
let cndnrKm = !(cnd1q4M);
this.setState('stiptNG', cndnrKm);
if (cnd1q4M) { 
let elr3ws_ = eo('div','z7ff',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iiHzxG = userStory.id+ index;
let el7ofeJ = eo('div','4gYem3Q3mdg5' + index+iiHzxG,null,`class`,`col-12 ${cls(component.getResponsiveClasses())}`);
let elpnogQ = eo('div','2Zvff'+iiHzxG,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let elIt9BU = eo('div','qDUff'+iiHzxG,null,`class`,`note_cnt`);
let cnd7JRw = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('stSGQK0', cnd7JRw);
if (cnd7JRw) { 
let elTdGvx = eo('div','fXsff'+iiHzxG,null,`class`,`m-b-3`);
let elSHkX8 = eo('div','TB6ff'+iiHzxG,null,`class`,`action-btns`);
let el35LqZ = eo('a','Ft7ff'+iiHzxG,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elN3_vi = eo('i','7vSff'+iiHzxG,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = el35LqZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elU5J2g = eo('button','LKUff'+iiHzxG,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elvnBOB = eo('i','o8qff'+iiHzxG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elU5J2g;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let elqOkDn = eo('i','iA0ff'+iiHzxG,null,`class`,`${fas('thumbtack')} pin-icon icon`);
ec('i');
let elkwl30 = eo('div','ZnIff'+iiHzxG,null,`class`,`title`);
let elnlFIF = eo('span','I4rff'+iiHzxG);
text(userStory.title);
ec('span');
let elxA6DB = eo('small','VfPff'+iiHzxG,null,`class`,`created-at`);
let cmpSKRp = this._lc('cjRrvLCph', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iiHzxG});
let eluvfEo = ev('img','n7Bff'+iiHzxG,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = eluvfEo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmp1fTi = this._lc('cK6BxX0wm', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iiHzxG});
let elxHr6u = eo('div','Vl1ff'+iiHzxG);
let elwmVDM = eo('small','Wg3ff'+iiHzxG);
text(userStory.type);
ec('small');
let elKEgdE = eo('a','gTzff'+iiHzxG,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elr3ws_;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elveZKR = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cndZWzF = component.confirmDelete;
this.setState('stW7Hl4', cndZWzF);
if (cndZWzF) { 
let cmpjCIZ = this._lc('cUhyAfV68', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stW7Hl4'});
}
                    this.isReadyToGo();
                }
        });