_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cJgXLomUM:'flk-time-ago',c2YDVI5eg:'markdown',cuEPs2ofd:'flk-alert'},
                render: function (component) {
                    let elIhnwv = eo('div',null,null,`class`,`user-story`);
let cndmN1I = ! Is.empty(component.userStories);
this.setState('st1nVYy', cndmN1I);
let cndZr8z = !(cndmN1I);
this.setState('stY25je', cndZr8z);
if (cndmN1I) { 
let elvZCCI = eo('div','Lg7f',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let ii4BbA = userStory.id+ index;
let eleUqb_ = eo('div','ZFdhYv4P6BzG' + index+ii4BbA,null,`class`,`col-12`);
eleUqb_.cls = component.getResponsiveClasses();

            for (let className in eleUqb_.cls) {
                eleUqb_.classList.toggle(className, eleUqb_.cls[className]);
            }  
            let elWjU0a = eo('div','Ds0ff'+ii4BbA,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let elxAVa1 = eo('div','E4iff'+ii4BbA,null,`class`,`note_cnt`);
let cnd5KvZ = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('stWuPBY', cnd5KvZ);
if (cnd5KvZ) { 
let elHO3A3 = eo('div','TSvff'+ii4BbA,null,`class`,`m-b-3`);
let elPpJRG = eo('div','ZhUff'+ii4BbA,null,`class`,`action-btns`);
let elUhk2F = eo('a','5VOff'+ii4BbA,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elzXE4m = eo('i','OWFff'+ii4BbA,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elUhk2F;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let eluEkk1 = eo('button','k0Cff'+ii4BbA,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elKu19z = eo('i','mq9ff'+ii4BbA,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eluEkk1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let elxJjMu = eo('i','HUwff'+ii4BbA,null,`class`,`${fas('thumbtack') + ' pin-icon icon'}`);
ec('i');
let elMJq11 = eo('div','_Mnff'+ii4BbA,null,`class`,`title`);
let elJ82JS = eo('span','7bDff'+ii4BbA);
text(userStory.title);
ec('span');
let elRqRsU = eo('small','EbOff'+ii4BbA,null,`class`,`created-at`);
let cmpZQ1r = this._lc('cJgXLomUM', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +ii4BbA});
let elx4gu6 = ev('img','7nxff'+ii4BbA,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elx4gu6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmp68bF = this._lc('c2YDVI5eg', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +ii4BbA});
let elecruc = eo('div','fDFff'+ii4BbA);
let elv3snu = eo('small','4ttff'+ii4BbA);
text(userStory.type);
ec('small');
let elWC22S = eo('a','i8Hff'+ii4BbA,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elvZCCI;
                        component.draggable($el);
                    }, 20);                
                }else { 
let el9wFWj = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cndHI35 = component.confirmDelete;
this.setState('stra6Si', cndHI35);
if (cndHI35) { 
let cmp3U0K = this._lc('cuEPs2ofd', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stra6Si'});
}
                    this.isReadyToGo();
                }
        });