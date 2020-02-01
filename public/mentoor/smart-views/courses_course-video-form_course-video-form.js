_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {cdUzakrnI:'flk-dropdown-list'},
                render: function (component) {
                    let elVjXRy = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let elRMdBu = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVjXRy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let el3EJWS = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el3EJWS.formHandler) {
                    window.cfrmdlr = el3EJWS.formHandler = new FormHandler(el3EJWS, component);
                } else {
                    window.cfrmdlr = el3EJWS.formHandler;
                }
            let elVEnb8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elVEnb8.value = fval(component.course.id);
let elwMvh3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elwMvh3.value = fval(component.section.id);
let elViQRh = eo('div',null,null,`class`,`form-group`);
elViQRh.cls = {'group-error': !!el3EJWS.formHandler.getError(`title`) };

            for (let className in elViQRh.cls) {
                elViQRh.classList.toggle(className, elViQRh.cls[className]);
            }  
            let elTQlqr = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndn2xm = true;
this.setState('stJaiNG', cndn2xm);
if (cndn2xm) { 
let elhtFS6 = eo('span','NKPf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elTPpQX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el3EJWS.formHandler.addError(`title`, 'required', trans('validation.required'));}return el3EJWS.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elTPpQX.value = fval(component.video.title);
let cndvQTD = el3EJWS.formHandler.getError(`title`);
this.setState('stNpFIY', cndvQTD);
if (cndvQTD) { 
let elElvW_ = eo('div','rYOf',null,`class`,`alert alert-danger`);
text(el3EJWS.formHandler.getError(`title`));
ec('div');
}ec('div');
let elDNIz_ = eo('div',null,null,`class`,`form-group`);
elDNIz_.cls = {'group-error': !!el3EJWS.formHandler.getError(`description`) };

            for (let className in elDNIz_.cls) {
                elDNIz_.classList.toggle(className, elDNIz_.cls[className]);
            }  
            let elWXfky = eo('label',null,null,`for`,`description`);
text(trans('Video Descrition'));
ec('label');
let el96KMH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Descrition`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el96KMH.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmpPy1z = this._lc('cdUzakrnI', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cndtOz_ = component.video.type == 'youtubeUrl';
this.setState('stKK8WE', cndtOz_);
if (cndtOz_) { 
let el1vxUO = eo('div','R0tf',null,`class`,`m-t-1`);
let elc6Fm1 = eo('div','9nvf',null,`class`,`form-group`);
elc6Fm1.cls = {'group-error': !!el3EJWS.formHandler.getError(`youtubeUrl`) };

            for (let className in elc6Fm1.cls) {
                elc6Fm1.classList.toggle(className, elc6Fm1.cls[className]);
            }  
            let el94spY = eo('label','qqIf',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cnd9Yqn = true;
this.setState('st1jO6h', cnd9Yqn);
if (cnd9Yqn) { 
let elM0CC1 = eo('span','jhtf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elEmPWa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el3EJWS.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return el3EJWS.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
elEmPWa.value = fval(component.video.youtubeUrl);
let cndKIjP = el3EJWS.formHandler.getError(`youtubeUrl`);
this.setState('stWr_aF', cndKIjP);
if (cndKIjP) { 
let elNLCXN = eo('div','kPRf',null,`class`,`alert alert-danger`);
text(el3EJWS.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let elOSqYF = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let elo4abm = eo('div',null,null,`class`,`row`);
let elicnWa = eo('div',null,null,`class`,`col`);
let elMzpMD = eo('div',null,null,`class`,`form-group`);
elMzpMD.cls = {'group-error': !!el3EJWS.formHandler.getError(`duration.minutes`) };

            for (let className in elMzpMD.cls) {
                elMzpMD.classList.toggle(className, elMzpMD.cls[className]);
            }  
            let elAQYWp = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndJ39H = true;
this.setState('st0dTtU', cndJ39H);
if (cndJ39H) { 
let el9FtPy = eo('span','Bv8f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elm5QYQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el3EJWS.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return el3EJWS.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return el3EJWS.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return el3EJWS.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
elm5QYQ.value = fval(component.video.duration.minutes);
let cndyM6u = el3EJWS.formHandler.getError(`duration.minutes`);
this.setState('stWsOZa', cndyM6u);
if (cndyM6u) { 
let elrIZtY = eo('div','z79f',null,`class`,`alert alert-danger`);
text(el3EJWS.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let elIsv3w = eo('div',null,null,`class`,`col`);
let eluPqLp = eo('div',null,null,`class`,`form-group`);
eluPqLp.cls = {'group-error': !!el3EJWS.formHandler.getError(`duration.seconds`) };

            for (let className in eluPqLp.cls) {
                eluPqLp.classList.toggle(className, eluPqLp.cls[className]);
            }  
            let elR_Rqg = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndtPiP = true;
this.setState('stSbDi3', cndtPiP);
if (cndtPiP) { 
let elRsMu0 = eo('span','FD2f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elW9Fv9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el3EJWS.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return el3EJWS.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return el3EJWS.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return el3EJWS.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
elW9Fv9.value = fval(component.video.duration.seconds);
let cndTAVU = el3EJWS.formHandler.getError(`duration.seconds`);
this.setState('stH_adv', cndTAVU);
if (cndTAVU) { 
let elD9b29 = eo('div','hcWf',null,`class`,`alert alert-danger`);
text(el3EJWS.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elq6bFq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
elq6bFq.value = fval(component.video.duration.length);
let elkT_Ha = eo('div',null,null,`class`,`m-t-1`);
let elSOSsn = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });