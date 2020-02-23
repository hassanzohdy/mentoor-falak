_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {cW1i7Vhmz:'flk-dropdown-list'},
                render: function (component) {
                    let el5WCLH = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let elgcYql = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5WCLH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let elNHeow = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNHeow.formHandler) {
                    window.cfrmdlr = elNHeow.formHandler = new FormHandler(elNHeow, component);
                } else {
                    window.cfrmdlr = elNHeow.formHandler;
                }
            let elpTvLG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elpTvLG.value = fval(component.course.id);
let elrU19B = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elrU19B.value = fval(component.section.id);
let elf8Eoo = eo('div',null,null,`class`,`form-group`);
elf8Eoo.cls = {'group-error': !!elNHeow.formHandler.getError(`title`) };

            for (let className in elf8Eoo.cls) {
                elf8Eoo.classList.toggle(className, elf8Eoo.cls[className]);
            }  
            let elP7r02 = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndE2HC = true;
this.setState('stScn7N', cndE2HC);
if (cndE2HC) { 
let elBkSYK = eo('span','j_cf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elP2vjV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elNHeow.formHandler.addError(`title`, 'required', trans('validation.required'));}return elNHeow.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elP2vjV.value = fval(component.video.title);
let cndqu91 = elNHeow.formHandler.getError(`title`);
this.setState('st6SpwL', cndqu91);
if (cndqu91) { 
let elMe6i9 = eo('div','Ht9f',null,`class`,`alert alert-danger`);
text(elNHeow.formHandler.getError(`title`));
ec('div');
}ec('div');
let elQaz4c = eo('div',null,null,`class`,`form-group`);
elQaz4c.cls = {'group-error': !!elNHeow.formHandler.getError(`description`) };

            for (let className in elQaz4c.cls) {
                elQaz4c.classList.toggle(className, elQaz4c.cls[className]);
            }  
            let eljFwrc = eo('label',null,null,`for`,`description`);
text(trans('Video Descrition'));
ec('label');
let elM3uBV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Descrition`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elM3uBV.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmpMSTM = this._lc('cW1i7Vhmz', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cndUfWR = component.video.type == 'youtubeUrl';
this.setState('stKq3nf', cndUfWR);
if (cndUfWR) { 
let eltKv4v = eo('div','1NLf',null,`class`,`m-t-1`);
let elcLBa0 = eo('div','Jzif',null,`class`,`form-group`);
elcLBa0.cls = {'group-error': !!elNHeow.formHandler.getError(`youtubeUrl`) };

            for (let className in elcLBa0.cls) {
                elcLBa0.classList.toggle(className, elcLBa0.cls[className]);
            }  
            let elrdU2R = eo('label','TWuf',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndjCWh = true;
this.setState('stEpZV_', cndjCWh);
if (cndjCWh) { 
let eljYuFM = eo('span','G60f',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let eltYQCA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elNHeow.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return elNHeow.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
eltYQCA.value = fval(component.video.youtubeUrl);
let cndThfc = elNHeow.formHandler.getError(`youtubeUrl`);
this.setState('st9H3yY', cndThfc);
if (cndThfc) { 
let elcR5Xy = eo('div','0Jyf',null,`class`,`alert alert-danger`);
text(elNHeow.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let el3TOpM = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let el_kQKu = eo('div',null,null,`class`,`row`);
let elmauc0 = eo('div',null,null,`class`,`col`);
let elDl7QW = eo('div',null,null,`class`,`form-group`);
elDl7QW.cls = {'group-error': !!elNHeow.formHandler.getError(`duration.minutes`) };

            for (let className in elDl7QW.cls) {
                elDl7QW.classList.toggle(className, elDl7QW.cls[className]);
            }  
            let elbvYFD = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndz7KW = true;
this.setState('st3wxhK', cndz7KW);
if (cndz7KW) { 
let elDoY1o = eo('span','pWIf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elMCHZp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elNHeow.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elNHeow.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elNHeow.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return elNHeow.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
elMCHZp.value = fval(component.video.duration.minutes);
let cnd3OpA = elNHeow.formHandler.getError(`duration.minutes`);
this.setState('stpA9kI', cnd3OpA);
if (cnd3OpA) { 
let eltKLJO = eo('div','ewqf',null,`class`,`alert alert-danger`);
text(elNHeow.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let el1a8lf = eo('div',null,null,`class`,`col`);
let el_PlsO = eo('div',null,null,`class`,`form-group`);
el_PlsO.cls = {'group-error': !!elNHeow.formHandler.getError(`duration.seconds`) };

            for (let className in el_PlsO.cls) {
                el_PlsO.classList.toggle(className, el_PlsO.cls[className]);
            }  
            let elv7NSF = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndSnVa = true;
this.setState('steQjNx', cndSnVa);
if (cndSnVa) { 
let el88SGt = eo('span','5QOf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el2CbqJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elNHeow.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elNHeow.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elNHeow.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return elNHeow.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
el2CbqJ.value = fval(component.video.duration.seconds);
let cndbl4W = elNHeow.formHandler.getError(`duration.seconds`);
this.setState('stOiJKb', cndbl4W);
if (cndbl4W) { 
let elzXxPA = eo('div','kQ7f',null,`class`,`alert alert-danger`);
text(elNHeow.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el5eq8k = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
el5eq8k.value = fval(component.video.duration.length);
let elsQj5j = eo('div',null,null,`class`,`m-t-1`);
let elUNvNv = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });