_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {c9Ou0wowe:'flk-dropdown-list'},
                render: function (component) {
                    let elvkbPf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let elZW0XN = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvkbPf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let elHcMDC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elHcMDC.formHandler) {
                    window.cfrmdlr = elHcMDC.formHandler = new FormHandler(elHcMDC, component);
                } else {
                    window.cfrmdlr = elHcMDC.formHandler;
                }
            let elYPVkg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elYPVkg.value = fval(component.course.id);
let elffulS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elffulS.value = fval(component.section.id);
let elo8zMv = eo('div',null,null,`class`,`form-group`);
elo8zMv.cls = {'group-error': !!elHcMDC.formHandler.getError(`title`) };

            for (let className in elo8zMv.cls) {
                elo8zMv.classList.toggle(className, elo8zMv.cls[className]);
            }  
            let elZQBd_ = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndmFoa = true;
this.setState('stanPKi', cndmFoa);
if (cndmFoa) { 
let elXn8P_ = eo('span','wvef',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elvNOvS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elHcMDC.formHandler.addError(`title`, 'required', trans('validation.required'));}return elHcMDC.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elvNOvS.value = fval(component.video.title);
let cndWkV0 = elHcMDC.formHandler.getError(`title`);
this.setState('st5MvgS', cndWkV0);
if (cndWkV0) { 
let elZfBR_ = eo('div','m9Hf',null,`class`,`alert alert-danger`);
text(elHcMDC.formHandler.getError(`title`));
ec('div');
}ec('div');
let elrbhjo = eo('div',null,null,`class`,`form-group`);
elrbhjo.cls = {'group-error': !!elHcMDC.formHandler.getError(`description`) };

            for (let className in elrbhjo.cls) {
                elrbhjo.classList.toggle(className, elrbhjo.cls[className]);
            }  
            let eleHScI = eo('label',null,null,`for`,`description`);
text(trans('Video Descrition'));
ec('label');
let elY4Dq3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Descrition`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elY4Dq3.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmpIEWv = this._lc('c9Ou0wowe', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cndf3IF = component.video.type == 'youtubeUrl';
this.setState('stUh0kh', cndf3IF);
if (cndf3IF) { 
let elxLq0e = eo('div','N7ff',null,`class`,`m-t-1`);
let elPjaYY = eo('div','xVAf',null,`class`,`form-group`);
elPjaYY.cls = {'group-error': !!elHcMDC.formHandler.getError(`youtubeUrl`) };

            for (let className in elPjaYY.cls) {
                elPjaYY.classList.toggle(className, elPjaYY.cls[className]);
            }  
            let el0Dszn = eo('label','yTGf',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndFXtc = true;
this.setState('stAg0TB', cndFXtc);
if (cndFXtc) { 
let elplLon = eo('span','ZpIf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elpV_jf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elHcMDC.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return elHcMDC.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
elpV_jf.value = fval(component.video.youtubeUrl);
let cndzkV1 = elHcMDC.formHandler.getError(`youtubeUrl`);
this.setState('stVrMEH', cndzkV1);
if (cndzkV1) { 
let elsqeNG = eo('div','oKXf',null,`class`,`alert alert-danger`);
text(elHcMDC.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let elDRR_O = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let elvoovM = eo('div',null,null,`class`,`row`);
let elS_ikz = eo('div',null,null,`class`,`col`);
let elkF9YH = eo('div',null,null,`class`,`form-group`);
elkF9YH.cls = {'group-error': !!elHcMDC.formHandler.getError(`duration.minutes`) };

            for (let className in elkF9YH.cls) {
                elkF9YH.classList.toggle(className, elkF9YH.cls[className]);
            }  
            let elnONhv = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndZLpK = true;
this.setState('stuBrsZ', cndZLpK);
if (cndZLpK) { 
let elLT3Dp = eo('span','ZJVf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elRRusc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elHcMDC.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elHcMDC.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elHcMDC.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return elHcMDC.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
elRRusc.value = fval(component.video.duration.minutes);
let cnd6idI = elHcMDC.formHandler.getError(`duration.minutes`);
this.setState('stAMcM6', cnd6idI);
if (cnd6idI) { 
let el5z6SD = eo('div','VCif',null,`class`,`alert alert-danger`);
text(elHcMDC.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let elN6Gxu = eo('div',null,null,`class`,`col`);
let elTjAbu = eo('div',null,null,`class`,`form-group`);
elTjAbu.cls = {'group-error': !!elHcMDC.formHandler.getError(`duration.seconds`) };

            for (let className in elTjAbu.cls) {
                elTjAbu.classList.toggle(className, elTjAbu.cls[className]);
            }  
            let elkIQNM = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndUODz = true;
this.setState('stMPsKO', cndUODz);
if (cndUODz) { 
let elI4q53 = eo('span','DdGf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let eltBIjA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elHcMDC.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elHcMDC.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elHcMDC.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return elHcMDC.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
eltBIjA.value = fval(component.video.duration.seconds);
let cndB_zC = elHcMDC.formHandler.getError(`duration.seconds`);
this.setState('sthxKYS', cndB_zC);
if (cndB_zC) { 
let elVWiM2 = eo('div','InEf',null,`class`,`alert alert-danger`);
text(elHcMDC.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elQ1Bkj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
elQ1Bkj.value = fval(component.video.duration.length);
let el3IWSD = eo('div',null,null,`class`,`m-t-1`);
let elXjINB = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });