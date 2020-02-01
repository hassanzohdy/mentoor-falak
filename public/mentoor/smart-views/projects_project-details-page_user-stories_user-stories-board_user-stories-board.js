_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {cHKbHmK13:'flk-time-ago',cVMFlET6n:'markdown',cbO5JfztZ:'flk-alert'},
                render: function (component) {
                    let el2Htji = eo('div',null,null,`class`,`user-story`);
let cndPMIF = ! Is.empty(component.userStories);
this.setState('stR3C6Y', cndPMIF);
let cndXFKM = !(cndPMIF);
this.setState('st9affw', cndXFKM);
if (cndPMIF) { 
let elxA8lm = eo('div','tT6f',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iiI6C9 = userStory.id+ index;
let ellu4e7 = eo('div','ggAy5GfleWN3' + index+iiI6C9,null,`class`,`col-12`);
ellu4e7.cls = component.getResponsiveClasses();

            for (let className in ellu4e7.cls) {
                ellu4e7.classList.toggle(className, ellu4e7.cls[className]);
            }  
            let elxJmdU = eo('div','ALqff'+iiI6C9,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let elfEp3T = eo('div','fCEff'+iiI6C9,null,`class`,`note_cnt`);
let cndrnyP = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('stJ484t', cndrnyP);
if (cndrnyP) { 
let el1jIBK = eo('div','ZQQff'+iiI6C9,null,`class`,`m-b-3`);
let el6d7ZX = eo('div','miFff'+iiI6C9,null,`class`,`action-btns`);
let elcuMb3 = eo('a','oR4ff'+iiI6C9,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elnruXY = eo('i','k6Vff'+iiI6C9,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elcuMb3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elyjBgo = eo('button','3tXff'+iiI6C9,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let elA6waI = eo('i','tNuff'+iiI6C9,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elyjBgo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let elASaEX = eo('i','v2rff'+iiI6C9,null,`class`,`${fas('thumbtack') + ' pin-icon icon'}`);
ec('i');
let elr4GKn = eo('div','piHff'+iiI6C9,null,`class`,`title`);
let elPTH2V = eo('span','YCMff'+iiI6C9);
text(userStory.title);
ec('span');
let elkFlAm = eo('small','sRyff'+iiI6C9,null,`class`,`created-at`);
let cmpQWtP = this._lc('cHKbHmK13', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iiI6C9});
let elFt0ZJ = ev('img','rSDff'+iiI6C9,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elFt0ZJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmpkK9D = this._lc('cVMFlET6n', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iiI6C9});
let elRnW1e = eo('div','CwPff'+iiI6C9);
let ellkb0e = eo('small','O1Nff'+iiI6C9);
text(userStory.type);
ec('small');
let elL2on8 = eo('a','fSaff'+iiI6C9,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elxA8lm;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elmmqWY = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cndb1Jb = component.confirmDelete;
this.setState('st9wCtB', cndb1Jb);
if (cndb1Jb) { 
let cmpbq3B = this._lc('cbO5JfztZ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st9wCtB'});
}
                    this.isReadyToGo();
                }
        });