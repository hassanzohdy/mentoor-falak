_Component({
                selector: 'user-stories-board',
                c: 'UserStoriesBoard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['userStories','draggable','getResponsiveClasses','user','project','share','confirmRemoving','confirmDelete','remove'],
                children: {c8grrWYd6:'flk-time-ago',cFUHB5jHb:'markdown',cmOWpw6fT:'flk-alert'},
                render: function (component) {
                    let elVC54C = eo('div',null,null,`class`,`user-story`);
let cndpNjn = ! Is.empty(component.userStories);
this.setState('stMqUou', cndpNjn);
let cnd0pUO = !(cndpNjn);
this.setState('stCM1pF', cnd0pUO);
if (cndpNjn) { 
let elj59B6 = eo('div','aeaf',null, eventListeners, {onready:[function(e) {var $el = this;component.draggable($el)}]},`class`,`row m-0`);
for (let index in component.userStories) {
let userStory = component.userStories[index]; 
 let iiG2eV = userStory.id+ index;
let elgje5p = eo('div','4baYsCOzo4KY' + index+iiG2eV,null,`class`,`col-12`);
elgje5p.cls = component.getResponsiveClasses();

            for (let className in elgje5p.cls) {
                elgje5p.classList.toggle(className, elgje5p.cls[className]);
            }  
            let elF_0b2 = eo('div','mtHff'+iiG2eV,null,`id`,`${'user-story-' + userStory.id}`,`class`,`note item ${ userStory.color }-note`);
let el_8K8N = eo('div','78hff'+iiG2eV,null,`class`,`note_cnt`);
let cndHVuS = userStory.createdBy.id == component.user.id || component.project.isProjectManager;
this.setState('stOu_hs', cndHVuS);
if (cndHVuS) { 
let elGGciU = eo('div','xR6ff'+iiG2eV,null,`class`,`m-b-3`);
let el3HLxC = eo('div','Ilfff'+iiG2eV,null,`class`,`action-btns`);
let elRYxWJ = eo('a','AiAff'+iiG2eV,null, eventListeners, {onclick:[function(e) {var $el = this;component.share(userStory)}]},`href`,`${URLS.project(component.project, 'user-stories', userStory) + '/edit'}`,`title`,``,`class`,`btn btn-info btn-circle`);
let elqUVbS = eo('i','tZ1ff'+iiG2eV,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elRYxWJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit')}`});
        ;
                    }, 20);                
                let elZEOse = eo('button','Nlyff'+iiG2eV,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(userStory, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger btn-circle`);
let el_9wMS = eo('i','O8xff'+iiG2eV,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZEOse;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete')}`});
        ;
                    }, 20);                
                ec('div');
ec('div');
}let elDdsGJ = eo('i','Vinff'+iiG2eV,null,`class`,`${fas('thumbtack') + ' pin-icon icon'}`);
ec('i');
let elo3zZo = eo('div','Wg8ff'+iiG2eV,null,`class`,`title`);
let el_Qb1Y = eo('span','TPyff'+iiG2eV);
text(userStory.title);
ec('span');
let elUwtKI = eo('small','_H0ff'+iiG2eV,null,`class`,`created-at`);
let cmprnuH = this._lc('c8grrWYd6', {parent:component,props:{timestamp:userStory.createdAt.timestamp},insideLoop:true,index:"" +iiG2eV});
let elYcjff = ev('img','93sff'+iiG2eV,null,`src`,`${userStory.createdBy.image}`,`title`,`${userStory.createdBy.name}`,`class`,`ml-2 small circle`,`alt`,`${userStory.createdBy.name}`);

                    setTimeout(function () {
                        let $el = elYcjff;
                        
            true && tippyTooltip($el, {arrow:true,content:`${userStory.createdBy.name}`});
        ;
                    }, 20);                
                ec('small');
ec('div');
let cmpEnkv = this._lc('cFUHB5jHb', {parent:component,props:{content:userStory.scenario.readMoreWords(40)},attrs:{class:'cnt'},insideLoop:true,index:"" +iiG2eV});
let elByYS9 = eo('div','H8Yff'+iiG2eV);
let elNcBro = eo('small','oKlff'+iiG2eV);
text(userStory.type);
ec('small');
let elUfsnO = eo('a','kSHff'+iiG2eV,null,`href`,`${URLS.project(component.project, 'user-stories', userStory)}`,`class`,`float-right details-btn`);
text(`View Details`);
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elj59B6;
                        component.draggable($el);
                    }, 20);                
                }else { 
let elMb6Rk = eo('h1',null,null,`class`,`m-t-3 text-center`,`id`,`no-stories`);
text(`No Stories yet`);
ec('h1');
}ec('div');
let cnd7lLc = component.confirmDelete;
this.setState('stOGyzh', cnd7lLc);
if (cnd7lLc) { 
let cmpGDQs = this._lc('cmOWpw6fT', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stOGyzh'});
}
                    this.isReadyToGo();
                }
        });