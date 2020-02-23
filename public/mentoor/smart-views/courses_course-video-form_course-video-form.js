_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {cpmbrzg2r:'flk-dropdown-list'},
                render: function (component) {
                    let elaPWqM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let eloCLZg = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elaPWqM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let el_Vir8 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_Vir8.formHandler) {
                    window.cfrmdlr = el_Vir8.formHandler = new FormHandler(el_Vir8, component);
                } else {
                    window.cfrmdlr = el_Vir8.formHandler;
                }
            let elWW35z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elWW35z.value = fval(component.course.id);
let elQfRTM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elQfRTM.value = fval(component.section.id);
let elGKqax = eo('div',null,null,`class`,`form-group`);
elGKqax.cls = {'group-error': !!el_Vir8.formHandler.getError(`title`) };

            for (let className in elGKqax.cls) {
                elGKqax.classList.toggle(className, elGKqax.cls[className]);
            }  
            let eliFP_3 = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndFqqC = true;
this.setState('stXPH5u', cndFqqC);
if (cndFqqC) { 
let elsn01U = eo('span','Jfzf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elhfhhm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_Vir8.formHandler.addError(`title`, 'required', trans('validation.required'));}return el_Vir8.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elhfhhm.value = fval(component.video.title);
let cndj_E1 = el_Vir8.formHandler.getError(`title`);
this.setState('stuWG8U', cndj_E1);
if (cndj_E1) { 
let elL4f6k = eo('div','ljxf',null,`class`,`alert alert-danger`);
text(el_Vir8.formHandler.getError(`title`));
ec('div');
}ec('div');
let elm9FIG = eo('div',null,null,`class`,`form-group`);
elm9FIG.cls = {'group-error': !!el_Vir8.formHandler.getError(`description`) };

            for (let className in elm9FIG.cls) {
                elm9FIG.classList.toggle(className, elm9FIG.cls[className]);
            }  
            let elBMRPg = eo('label',null,null,`for`,`description`);
text(trans('Video Descrition'));
ec('label');
let elwN1cJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Descrition`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elwN1cJ.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmpGQcP = this._lc('cpmbrzg2r', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cndMkw7 = component.video.type == 'youtubeUrl';
this.setState('stq5OFr', cndMkw7);
if (cndMkw7) { 
let elDD3JX = eo('div','4Bcf',null,`class`,`m-t-1`);
let elJmlu5 = eo('div','R8Af',null,`class`,`form-group`);
elJmlu5.cls = {'group-error': !!el_Vir8.formHandler.getError(`youtubeUrl`) };

            for (let className in elJmlu5.cls) {
                elJmlu5.classList.toggle(className, elJmlu5.cls[className]);
            }  
            let elvdLH6 = eo('label','jelf',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndo33w = true;
this.setState('stgScL0', cndo33w);
if (cndo33w) { 
let el1iL4G = eo('span','dp8f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elMc08x = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_Vir8.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return el_Vir8.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
elMc08x.value = fval(component.video.youtubeUrl);
let cndApuT = el_Vir8.formHandler.getError(`youtubeUrl`);
this.setState('st7b7Ia', cndApuT);
if (cndApuT) { 
let el8rSks = eo('div','oLRf',null,`class`,`alert alert-danger`);
text(el_Vir8.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let el9Ursj = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let el0qFPg = eo('div',null,null,`class`,`row`);
let elS07GJ = eo('div',null,null,`class`,`col`);
let els7waR = eo('div',null,null,`class`,`form-group`);
els7waR.cls = {'group-error': !!el_Vir8.formHandler.getError(`duration.minutes`) };

            for (let className in els7waR.cls) {
                els7waR.classList.toggle(className, els7waR.cls[className]);
            }  
            let elTmlW2 = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndu4mU = true;
this.setState('stulCs1', cndu4mU);
if (cndu4mU) { 
let elKaXxB = eo('span','CJmf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elnj2B3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_Vir8.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return el_Vir8.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return el_Vir8.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return el_Vir8.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
elnj2B3.value = fval(component.video.duration.minutes);
let cndkbXe = el_Vir8.formHandler.getError(`duration.minutes`);
this.setState('stAy0s1', cndkbXe);
if (cndkbXe) { 
let el5oU4o = eo('div','c1Ff',null,`class`,`alert alert-danger`);
text(el_Vir8.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let elOkgFh = eo('div',null,null,`class`,`col`);
let eluql8E = eo('div',null,null,`class`,`form-group`);
eluql8E.cls = {'group-error': !!el_Vir8.formHandler.getError(`duration.seconds`) };

            for (let className in eluql8E.cls) {
                eluql8E.classList.toggle(className, eluql8E.cls[className]);
            }  
            let el_PmWH = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndRT5U = true;
this.setState('stZMhIu', cndRT5U);
if (cndRT5U) { 
let elvbsdQ = eo('span','ueHf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elKIKVl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el_Vir8.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return el_Vir8.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return el_Vir8.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return el_Vir8.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
elKIKVl.value = fval(component.video.duration.seconds);
let cndmixg = el_Vir8.formHandler.getError(`duration.seconds`);
this.setState('st_Ihc5', cndmixg);
if (cndmixg) { 
let ell94Oc = eo('div','g_uf',null,`class`,`alert alert-danger`);
text(el_Vir8.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el94F62 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
el94F62.value = fval(component.video.duration.length);
let elG2CUw = eo('div',null,null,`class`,`m-t-1`);
let elBkIWr = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });