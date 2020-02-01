_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {cLmSdDsKJ:'flk-dropdown-list'},
                render: function (component) {
                    let elmfAvE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let elQRimB = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmfAvE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let elsJ7yd = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elsJ7yd.formHandler) {
                    window.cfrmdlr = elsJ7yd.formHandler = new FormHandler(elsJ7yd, component);
                } else {
                    window.cfrmdlr = elsJ7yd.formHandler;
                }
            let el8H4NC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
el8H4NC.value = fval(component.course.id);
let elJ3Hrn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elJ3Hrn.value = fval(component.section.id);
let elsQ8Li = eo('div',null,null,`class`,`form-group`);
elsQ8Li.cls = {'group-error': !!elsJ7yd.formHandler.getError(`title`) };

            for (let className in elsQ8Li.cls) {
                elsQ8Li.classList.toggle(className, elsQ8Li.cls[className]);
            }  
            let elZ476y = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cndXrNC = true;
this.setState('stsg65h', cndXrNC);
if (cndXrNC) { 
let el5HUXM = eo('span','Jitf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elgZn0c = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elsJ7yd.formHandler.addError(`title`, 'required', trans('validation.required'));}return elsJ7yd.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elgZn0c.value = fval(component.video.title);
let cndzyjx = elsJ7yd.formHandler.getError(`title`);
this.setState('stoW_0n', cndzyjx);
if (cndzyjx) { 
let elZyYJ7 = eo('div','nkMf',null,`class`,`alert alert-danger`);
text(elsJ7yd.formHandler.getError(`title`));
ec('div');
}ec('div');
let elRoJcv = eo('div',null,null,`class`,`form-group`);
elRoJcv.cls = {'group-error': !!elsJ7yd.formHandler.getError(`description`) };

            for (let className in elRoJcv.cls) {
                elRoJcv.classList.toggle(className, elRoJcv.cls[className]);
            }  
            let elgMcn0 = eo('label',null,null,`for`,`description`);
text(trans('Video Descrition'));
ec('label');
let elxscy2 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Descrition`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elxscy2.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmphWeo = this._lc('cLmSdDsKJ', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cndVd9R = component.video.type == 'youtubeUrl';
this.setState('stTzCBN', cndVd9R);
if (cndVd9R) { 
let elMDC09 = eo('div','rvIf',null,`class`,`m-t-1`);
let elTnxrd = eo('div','Xctf',null,`class`,`form-group`);
elTnxrd.cls = {'group-error': !!elsJ7yd.formHandler.getError(`youtubeUrl`) };

            for (let className in elTnxrd.cls) {
                elTnxrd.classList.toggle(className, elTnxrd.cls[className]);
            }  
            let elGYLKw = eo('label','Pj7f',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndQkah = true;
this.setState('stDfMyc', cndQkah);
if (cndQkah) { 
let elR8C_q = eo('span','2IVf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el8jRxT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elsJ7yd.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return elsJ7yd.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
el8jRxT.value = fval(component.video.youtubeUrl);
let cndVqik = elsJ7yd.formHandler.getError(`youtubeUrl`);
this.setState('stFaQ17', cndVqik);
if (cndVqik) { 
let elHBorr = eo('div','fEef',null,`class`,`alert alert-danger`);
text(elsJ7yd.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let elJk1rF = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let eluSKzW = eo('div',null,null,`class`,`row`);
let el9qVe1 = eo('div',null,null,`class`,`col`);
let elLCW6e = eo('div',null,null,`class`,`form-group`);
elLCW6e.cls = {'group-error': !!elsJ7yd.formHandler.getError(`duration.minutes`) };

            for (let className in elLCW6e.cls) {
                elLCW6e.classList.toggle(className, elLCW6e.cls[className]);
            }  
            let el7LLxu = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndyMYM = true;
this.setState('stXABVO', cndyMYM);
if (cndyMYM) { 
let ellDkUw = eo('span','NLkf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elC6MGu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elsJ7yd.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elsJ7yd.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elsJ7yd.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return elsJ7yd.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
elC6MGu.value = fval(component.video.duration.minutes);
let cndxp8m = elsJ7yd.formHandler.getError(`duration.minutes`);
this.setState('stjzEAF', cndxp8m);
if (cndxp8m) { 
let el6LOTT = eo('div','Zmgf',null,`class`,`alert alert-danger`);
text(elsJ7yd.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let elrdVZZ = eo('div',null,null,`class`,`col`);
let elAbbwO = eo('div',null,null,`class`,`form-group`);
elAbbwO.cls = {'group-error': !!elsJ7yd.formHandler.getError(`duration.seconds`) };

            for (let className in elAbbwO.cls) {
                elAbbwO.classList.toggle(className, elAbbwO.cls[className]);
            }  
            let elxrB2_ = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndUK8w = true;
this.setState('stqfm9D', cndUK8w);
if (cndUK8w) { 
let elCenuc = eo('span','nBQf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elHz4DN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elsJ7yd.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elsJ7yd.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elsJ7yd.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return elsJ7yd.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
elHz4DN.value = fval(component.video.duration.seconds);
let cndj9QF = elsJ7yd.formHandler.getError(`duration.seconds`);
this.setState('st3Vpox', cndj9QF);
if (cndj9QF) { 
let el44u3O = eo('div','hEPf',null,`class`,`alert alert-danger`);
text(elsJ7yd.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elyp5ve = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
elyp5ve.value = fval(component.video.duration.length);
let el7mfFO = eo('div',null,null,`class`,`m-t-1`);
let elCLTmh = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });