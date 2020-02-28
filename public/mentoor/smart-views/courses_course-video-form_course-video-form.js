_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {cbYDVojDk:'flk-dropdown-list'},
                render: function (component) {
                    let elahXjc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let elg542S = eo('i',null,null,`class`,`${fas('arrow-left')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elahXjc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let elhmpLX = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elhmpLX.formHandler) {
                    window.cfrmdlr = elhmpLX.formHandler = new FormHandler(elhmpLX, component);
                } else {
                    window.cfrmdlr = elhmpLX.formHandler;
                }
            let elwQ6k6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elwQ6k6.value = fval(component.course.id);
let elC95GL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elC95GL.value = fval(component.section.id);
let el2s10D = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elhmpLX.formHandler.getError(`title`) })}`);
let el1wOy8 = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndLycH = true;
this.setState('stKKzhP', cndLycH);
if (cndLycH) { 
let elYETKi = eo('span','sxSf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el5TvvU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elhmpLX.formHandler.addError(`title`, 'required', trans('validation.required'));}return elhmpLX.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el5TvvU.value = fval(component.video.title);
let cndVLiO = elhmpLX.formHandler.getError(`title`);
this.setState('stR7F2i', cndVLiO);
if (cndVLiO) { 
let el0byPr = eo('div','IWYf',null,`class`,`alert alert-danger`);
text(elhmpLX.formHandler.getError(`title`));
ec('div');
}ec('div');
let elQOSwh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elhmpLX.formHandler.getError(`description`) })}`);
let elFGd1h = eo('label',null,null,`for`,`description`);
text(trans('Video Descrition'));
ec('label');
let el5kKPS = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Descrition`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el5kKPS.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmp_Twy = this._lc('cbYDVojDk', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cndWon8 = component.video.type == 'youtubeUrl';
this.setState('stAgDlW', cndWon8);
if (cndWon8) { 
let elHB9w5 = eo('div','Otaf',null,`class`,`m-t-1`);
let ellescR = eo('div','Rpzf',null,`class`,`form-group ${cls({'group-error': !!elhmpLX.formHandler.getError(`youtubeUrl`) })}`);
let eldiNYB = eo('label','wKUf',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndR7bs = true;
this.setState('stGXeAf', cndR7bs);
if (cndR7bs) { 
let elZJmMv = eo('span','j0Rf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let eluBeZ9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elhmpLX.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return elhmpLX.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
eluBeZ9.value = fval(component.video.youtubeUrl);
let cnd_GQ7 = elhmpLX.formHandler.getError(`youtubeUrl`);
this.setState('stlH9ty', cnd_GQ7);
if (cnd_GQ7) { 
let elbqmyV = eo('div','zBJf',null,`class`,`alert alert-danger`);
text(elhmpLX.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let elfIABZ = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let el0ehBO = eo('div',null,null,`class`,`row`);
let el5Jo0j = eo('div',null,null,`class`,`col`);
let elo6L8B = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elhmpLX.formHandler.getError(`duration.minutes`) })}`);
let el0TZVX = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndGdul = true;
this.setState('stOYFK7', cndGdul);
if (cndGdul) { 
let eltRIaS = eo('span','7nZf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elWFxME = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elhmpLX.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elhmpLX.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elhmpLX.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return elhmpLX.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
elWFxME.value = fval(component.video.duration.minutes);
let cndoGuo = elhmpLX.formHandler.getError(`duration.minutes`);
this.setState('stqJj_c', cndoGuo);
if (cndoGuo) { 
let elPuwyP = eo('div','uZAf',null,`class`,`alert alert-danger`);
text(elhmpLX.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let ela8T89 = eo('div',null,null,`class`,`col`);
let eldXAKz = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elhmpLX.formHandler.getError(`duration.seconds`) })}`);
let elP9BjC = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndcGiX = true;
this.setState('stAFXGx', cndcGiX);
if (cndcGiX) { 
let elL5Cdi = eo('span','5Nzf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elVxoux = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elhmpLX.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elhmpLX.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elhmpLX.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return elhmpLX.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
elVxoux.value = fval(component.video.duration.seconds);
let cnd6l2V = elhmpLX.formHandler.getError(`duration.seconds`);
this.setState('stPu3L1', cnd6l2V);
if (cnd6l2V) { 
let ellvn5A = eo('div','dgTf',null,`class`,`alert alert-danger`);
text(elhmpLX.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elWXY4T = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
elWXY4T.value = fval(component.video.duration.length);
let elisiVc = eo('div',null,null,`class`,`m-t-1`);
let elSmhkR = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });