_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cW_CZpfkv:'flk-time-ago',c7X2aPmkx:'markdown',cBfBINRtM:'flk-alert'},
                render: function (component) {
                    let eljT6YY = eo('div',null,null,`class`,`user-story`);
let cndHRDg = ! Is.empty(component.userStories);
this.setState('stc0X5a', cndHRDg);
let cndn54O = !(cndHRDg);
this.setState('stTiWFv', cndn54O);
if (cndHRDg) { 
let elYye4M = eo('div','dv5f',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iiWCor = userStory.id+ index;
let el7XAxp = eo('div','EpBsqrCo7yOL' + index+iiWCor,null,`class`,`col-12 ${cls(component.getResponsiveClasses())}`);
let el4EbMz = eo('div','cqyff'+iiWCor,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let eloG88Y = eo('div','AfEff'+iiWCor,null,`class`,`note_cnt`);
let cndoL2r = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('styNJC4', cndoL2r);
if (cndoL2r) { 
let elf0m6z = eo('div','mo1ff'+iiWCor,null,`class`,`m-b-3`);
let el3NgcC = eo('div','Nerff'+iiWCor,null,`class`,`action-btns`);
let elvVGZ4 = eo('a','ZXqff'+iiWCor,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elqRfG2 = eo('i','FgTff'+iiWCor,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elvVGZ4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elG3ctX = eo('button','00_ff'+iiWCor,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elxfK54 = eo('i','GcMff'+iiWCor,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elG3ctX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let eletCEu = eo('i','vOyff'+iiWCor,null,`class`,`${fas('thumbtack')} pin-icon icon`);
ec('i');
let elj0s92 = eo('div','TIQff'+iiWCor,null,`class`,`title`);
let elT8YZn = eo('span','7zrff'+iiWCor);
text(userStory.title);
ec('span');
let eldJ_qv = eo('small','eXBff'+iiWCor,null,`class`,`created-at`);
let cmpyn6m = this._lc('cW_CZpfkv', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iiWCor});
let eleJeBg = ev('img','aQRff'+iiWCor,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = eleJeBg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmpu5_7 = this._lc('c7X2aPmkx', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iiWCor});
let elCkXh_ = eo('div','74Bff'+iiWCor);
let elcxqpZ = eo('small','4rgff'+iiWCor);
text(userStory.type);
ec('small');
let elPCAET = eo('a','nvLff'+iiWCor,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elYye4M;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elJhmqj = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cnd6Rxk = component.confirmDelete;
this.setState('st8Y5PG', cnd6Rxk);
if (cnd6Rxk) { 
let cmpBB6x = this._lc('cBfBINRtM', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st8Y5PG'});
}
                    this.isReadyToGo();
                }
        });