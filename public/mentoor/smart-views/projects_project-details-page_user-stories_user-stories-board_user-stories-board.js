_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cFkDwjup0:'flk-time-ago',csnGNtWRZ:'markdown',cslKxwR7d:'flk-alert'},
                render: function (component) {
                    let elyyJtJ = eo('div',null,null,`class`,`user-story`);
let cndC8WL = ! Is.empty(component.userStories);
this.setState('st4NHN3', cndC8WL);
let cndK9b3 = !(cndC8WL);
this.setState('stvEufd', cndK9b3);
if (cndC8WL) { 
let elg4Hb1 = eo('div','c76f',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iitNKe = userStory.id+ index;
let elZcp1W = eo('div','vDWzY4vgByGK' + index+iitNKe,null,`class`,`col-12`);
elZcp1W.cls = component.getResponsiveClasses();

            for (let className in elZcp1W.cls) {
                elZcp1W.classList.toggle(className, elZcp1W.cls[className]);
            }  
            let elx4hjX = eo('div','BOEff'+iitNKe,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let elaiqub = eo('div','jqsff'+iitNKe,null,`class`,`note_cnt`);
let cnd370E = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('strSRLo', cnd370E);
if (cnd370E) { 
let elP2b8s = eo('div','G58ff'+iitNKe,null,`class`,`m-b-3`);
let elh7ftW = eo('div','gbnff'+iitNKe,null,`class`,`action-btns`);
let el8b3mz = eo('a','Tw_ff'+iitNKe,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elCXtqK = eo('i','pveff'+iitNKe,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = el8b3mz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elegzRa = eo('button','94Zff'+iitNKe,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elKFjWg = eo('i','zQWff'+iitNKe,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elegzRa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let elY_W2R = eo('i','kzvff'+iitNKe,null,`class`,`${fas('thumbtack') + ' pin-icon icon'}`);
ec('i');
let elFSNOF = eo('div','ROpff'+iitNKe,null,`class`,`title`);
let elObzGs = eo('span','KdYff'+iitNKe);
text(userStory.title);
ec('span');
let elE2zLD = eo('small','BS4ff'+iitNKe,null,`class`,`created-at`);
let cmpLzps = this._lc('cFkDwjup0', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iitNKe});
let elQinXs = ev('img','oC1ff'+iitNKe,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elQinXs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmpITib = this._lc('csnGNtWRZ', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iitNKe});
let elkpRdd = eo('div','5hDff'+iitNKe);
let elZvyes = eo('small','tZoff'+iitNKe);
text(userStory.type);
ec('small');
let elceWFo = eo('a','XKqff'+iitNKe,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elg4Hb1;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elgG8w6 = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cndfj2n = component.confirmDelete;
this.setState('stJZiZy', cndfj2n);
if (cndfj2n) { 
let cmpEiAj = this._lc('cslKxwR7d', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stJZiZy'});
}
                    this.isReadyToGo();
                }
        });