_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {caIx3xxyf:'flk-dropdown-list'},
                render: function (component) {
                    let elwzZXm = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let elSJj4S = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwzZXm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let elM57Tc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elM57Tc.formHandler) {
                    window.cfrmdlr = elM57Tc.formHandler = new FormHandler(elM57Tc, component);
                } else {
                    window.cfrmdlr = elM57Tc.formHandler;
                }
            let elPnAnN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elPnAnN.value = fval(component.course.id);
let elSk0JC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elSk0JC.value = fval(component.section.id);
let el1jb7P = eo('div',null,null,`class`,`form-group`);
el1jb7P.cls = {'group-error': !!elM57Tc.formHandler.getError(`title`) };

            for (let className in el1jb7P.cls) {
                el1jb7P.classList.toggle(className, el1jb7P.cls[className]);
            }  
            let el0uYMq = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndBeFU = true;
this.setState('st1XzKB', cndBeFU);
if (cndBeFU) { 
let elCCmNw = eo('span','CT8f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el46DGh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elM57Tc.formHandler.addError(`title`, 'required', trans('validation.required'));}return elM57Tc.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el46DGh.value = fval(component.video.title);
let cndvEaF = elM57Tc.formHandler.getError(`title`);
this.setState('stK2W6j', cndvEaF);
if (cndvEaF) { 
let ellrdeA = eo('div','Zypf',null,`class`,`alert alert-danger`);
text(elM57Tc.formHandler.getError(`title`));
ec('div');
}ec('div');
let elN5Ubi = eo('div',null,null,`class`,`form-group`);
elN5Ubi.cls = {'group-error': !!elM57Tc.formHandler.getError(`description`) };

            for (let className in elN5Ubi.cls) {
                elN5Ubi.classList.toggle(className, elN5Ubi.cls[className]);
            }  
            let elSBpBO = eo('label',null,null,`for`,`description`);
text(trans('Video Descrition'));
ec('label');
let elQSDm7 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Descrition`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elQSDm7.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmpEHwn = this._lc('caIx3xxyf', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cnd1rwv = component.video.type == 'youtubeUrl';
this.setState('stLNm_N', cnd1rwv);
if (cnd1rwv) { 
let el1mb70 = eo('div','Omef',null,`class`,`m-t-1`);
let elG5U3p = eo('div','kvAf',null,`class`,`form-group`);
elG5U3p.cls = {'group-error': !!elM57Tc.formHandler.getError(`youtubeUrl`) };

            for (let className in elG5U3p.cls) {
                elG5U3p.classList.toggle(className, elG5U3p.cls[className]);
            }  
            let elGqDLK = eo('label','0YCf',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndkaTy = true;
this.setState('stQMEJX', cndkaTy);
if (cndkaTy) { 
let el2QV_w = eo('span','egWf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el4h9jW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elM57Tc.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return elM57Tc.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
el4h9jW.value = fval(component.video.youtubeUrl);
let cndPRVY = elM57Tc.formHandler.getError(`youtubeUrl`);
this.setState('stnzwk8', cndPRVY);
if (cndPRVY) { 
let elF1qJE = eo('div','HRXf',null,`class`,`alert alert-danger`);
text(elM57Tc.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let elBscVO = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let el01gsm = eo('div',null,null,`class`,`row`);
let elevQfD = eo('div',null,null,`class`,`col`);
let elBAA8j = eo('div',null,null,`class`,`form-group`);
elBAA8j.cls = {'group-error': !!elM57Tc.formHandler.getError(`duration.minutes`) };

            for (let className in elBAA8j.cls) {
                elBAA8j.classList.toggle(className, elBAA8j.cls[className]);
            }  
            let el89d1b = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndRiOY = true;
this.setState('stVTy0x', cndRiOY);
if (cndRiOY) { 
let elzKfbH = eo('span','xqFf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let eldKJFx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elM57Tc.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elM57Tc.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elM57Tc.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return elM57Tc.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
eldKJFx.value = fval(component.video.duration.minutes);
let cndjjlZ = elM57Tc.formHandler.getError(`duration.minutes`);
this.setState('sta6wfY', cndjjlZ);
if (cndjjlZ) { 
let elJuDrz = eo('div','e4cf',null,`class`,`alert alert-danger`);
text(elM57Tc.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let el7Xo9v = eo('div',null,null,`class`,`col`);
let el6PkbJ = eo('div',null,null,`class`,`form-group`);
el6PkbJ.cls = {'group-error': !!elM57Tc.formHandler.getError(`duration.seconds`) };

            for (let className in el6PkbJ.cls) {
                el6PkbJ.classList.toggle(className, el6PkbJ.cls[className]);
            }  
            let elmxtBO = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndnptm = true;
this.setState('staNbte', cndnptm);
if (cndnptm) { 
let el3uERE = eo('span','E88f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elhgOgW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elM57Tc.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elM57Tc.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elM57Tc.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return elM57Tc.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
elhgOgW.value = fval(component.video.duration.seconds);
let cndYhjg = elM57Tc.formHandler.getError(`duration.seconds`);
this.setState('st09bBD', cndYhjg);
if (cndYhjg) { 
let el30TWI = eo('div','4Nyf',null,`class`,`alert alert-danger`);
text(elM57Tc.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elhSqg7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
elhSqg7.value = fval(component.video.duration.length);
let elj_iLE = eo('div',null,null,`class`,`m-t-1`);
let elgez0T = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });