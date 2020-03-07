_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {cneteOeAe:'flk-dropdown-list'},
                render: function (component) {
                    let el1Mw_z = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let eled0j2 = eo('i',null,null,`class`,`${fas('arrow-left')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1Mw_z;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let el_rf9k = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_rf9k.formHandler) {
                    window.cfrmdlr = el_rf9k.formHandler = new FormHandler(el_rf9k, component);
                } else {
                    window.cfrmdlr = el_rf9k.formHandler;
                }
            let elnZP0R = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elnZP0R.value = fval(component.course.id);
let elZfOAV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elZfOAV.value = fval(component.section.id);
let elN7Xq9 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_rf9k.formHandler.getError(`title`) })}`);
let el9Ziiy = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndJqiJ = true;
this.setState('stkITK2', cndJqiJ);
if (cndJqiJ) { 
let elJ5W3Z = eo('span','ATMf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let eleCQyV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_rf9k.formHandler.addError(`title`, 'required', trans('validation.required'));}return el_rf9k.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eleCQyV.value = fval(component.video.title);
let cndVQRN = el_rf9k.formHandler.getError(`title`);
this.setState('std_g07', cndVQRN);
if (cndVQRN) { 
let elXr9mH = eo('div','0qmf',null,`class`,`alert alert-danger`);
text(el_rf9k.formHandler.getError(`title`));
ec('div');
}ec('div');
let elwn129 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_rf9k.formHandler.getError(`description`) })}`);
let elF0eDj = eo('label',null,null,`for`,`description`);
text(trans('Video Description'));
ec('label');
let el2NqPp = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el2NqPp.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmpOxcz = this._lc('cneteOeAe', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cndQGvH = component.video.type == 'youtubeUrl';
this.setState('sti816P', cndQGvH);
if (cndQGvH) { 
let elSsRsW = eo('div','wGIf',null,`class`,`m-t-1`);
let el46_EF = eo('div','Vgyf',null,`class`,`form-group ${cls({'group-error': !!el_rf9k.formHandler.getError(`youtubeUrl`) })}`);
let elfuKCj = eo('label','0ILf',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndwHGI = true;
this.setState('strkL7F', cndwHGI);
if (cndwHGI) { 
let eljJ5fp = eo('span','V_5f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el3iydV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_rf9k.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return el_rf9k.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
el3iydV.value = fval(component.video.youtubeUrl);
let cndTpug = el_rf9k.formHandler.getError(`youtubeUrl`);
this.setState('stOF5fU', cndTpug);
if (cndTpug) { 
let elQqdb1 = eo('div','9Zyf',null,`class`,`alert alert-danger`);
text(el_rf9k.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let elToOTP = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let elH8EwE = eo('div',null,null,`class`,`row`);
let elGNmEB = eo('div',null,null,`class`,`col`);
let el2d0he = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_rf9k.formHandler.getError(`duration.minutes`) })}`);
let elujlcc = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndGs6Q = true;
this.setState('ste2rxB', cndGs6Q);
if (cndGs6Q) { 
let elLm6T8 = eo('span','sscf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elgbwIT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_rf9k.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return el_rf9k.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return el_rf9k.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return el_rf9k.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
elgbwIT.value = fval(component.video.duration.minutes);
let cndwZRJ = el_rf9k.formHandler.getError(`duration.minutes`);
this.setState('stKjXvQ', cndwZRJ);
if (cndwZRJ) { 
let elcVImp = eo('div','mqff',null,`class`,`alert alert-danger`);
text(el_rf9k.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let elqSUW2 = eo('div',null,null,`class`,`col`);
let el3X2xP = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_rf9k.formHandler.getError(`duration.seconds`) })}`);
let elXWHJj = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndOQ91 = true;
this.setState('stLDMjW', cndOQ91);
if (cndOQ91) { 
let eloSsLu = eo('span','kCaf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let eljm5gT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_rf9k.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return el_rf9k.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return el_rf9k.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return el_rf9k.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
eljm5gT.value = fval(component.video.duration.seconds);
let cndNeow = el_rf9k.formHandler.getError(`duration.seconds`);
this.setState('stuyQGq', cndNeow);
if (cndNeow) { 
let el5IeNp = eo('div','VQWf',null,`class`,`alert alert-danger`);
text(el_rf9k.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elpckr9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
elpckr9.value = fval(component.video.duration.length);
let eltdsLo = eo('div',null,null,`class`,`m-t-1`);
let elBWHnI = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });