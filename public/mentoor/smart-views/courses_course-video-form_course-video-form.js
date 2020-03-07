_Component({
                selector: 'course-video-form',
                c: 'CourseVideoForm', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['event','submit','course','section','video','videoTypes','calculateVideoLength','isSending'],
                children: {cIOM97ctm:'flk-dropdown-list'},
                render: function (component) {
                    let elpVnt7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.event('close')()}]},`title`,``,`type`,`button`);
let el96E8q = eo('i',null,null,`class`,`${fas('arrow-left')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpVnt7;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Back')}`});
        ;
                    }, 20);                
                let elBOxeB = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elBOxeB.formHandler) {
                    window.cfrmdlr = elBOxeB.formHandler = new FormHandler(elBOxeB, component);
                } else {
                    window.cfrmdlr = elBOxeB.formHandler;
                }
            let elKDN3l = ev('input',null,null, eventListeners, {oninput:[function(e) {component.course.id = this.value;}]},`value`,`${fval(component.course.id)}`,`name`,`${(`course`).toInputName()}`,`type`,`hidden`);
elKDN3l.value = fval(component.course.id);
let elx0qu4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.section.id = this.value;}]},`value`,`${fval(component.section.id)}`,`name`,`${(`section`).toInputName()}`,`type`,`hidden`);
elx0qu4.value = fval(component.section.id);
let elZn13j = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elBOxeB.formHandler.getError(`title`) })}`);
let elQpCIp = eo('label',null,null,`for`,`title`);
text(trans('Video Title'));
let cnddNyx = true;
this.setState('stW34W4', cnddNyx);
if (cnddNyx) { 
let elxPYcA = eo('span','P4Uf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elbgXAo = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.title = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elBOxeB.formHandler.addError(`title`, 'required', trans('validation.required'));}return elBOxeB.formHandler.removeError(`title`);}]},`value`,`${fval(component.video.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Video Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elbgXAo.value = fval(component.video.title);
let cndEIuT = elBOxeB.formHandler.getError(`title`);
this.setState('stF9jNN', cndEIuT);
if (cndEIuT) { 
let elPCB48 = eo('div','1O_f',null,`class`,`alert alert-danger`);
text(elBOxeB.formHandler.getError(`title`));
ec('div');
}ec('div');
let elByBg3 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elBOxeB.formHandler.getError(`description`) })}`);
let eliNYsh = eo('label',null,null,`for`,`description`);
text(trans('Video Description'));
ec('label');
let elcY7z9 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.video.description = this.value;}]},`value`,`${fval(component.video.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Video Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elcY7z9.value = fval(component.video.description);
ec('textarea');
ec('div');
let cmpLDjg = this._lc('cIOM97ctm', {parent:component,props:{items:component.videoTypes,value:component.video.type,required:true},events:{onselect:function(e) {let $el = this; component.video.type = e.value}},attrs:{name:`${(`type`).toInputName()}`,label:'Video Type',heading:'Video Type'}});
let cnde0cD = component.video.type == 'youtubeUrl';
this.setState('stjs4iD', cnde0cD);
if (cnde0cD) { 
let elE_Bzb = eo('div','Qjyf',null,`class`,`m-t-1`);
let elhOKzu = eo('div','PK1f',null,`class`,`form-group ${cls({'group-error': !!elBOxeB.formHandler.getError(`youtubeUrl`) })}`);
let elmDk3l = eo('label','o89f',null,`for`,`youtubeUrl`);
text(trans('Youtube Url'));
let cndV6_k = true;
this.setState('stR6m4A', cndV6_k);
if (cndV6_k) { 
let elQpkHD = eo('span','BjSf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el3Ve0P = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.youtubeUrl = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elBOxeB.formHandler.addError(`youtubeUrl`, 'required', trans('validation.required'));}return elBOxeB.formHandler.removeError(`youtubeUrl`);}]},`value`,`${fval(component.video.youtubeUrl)}`,`name`,`${(`youtubeUrl`).toInputName()}`,`placeholder`,`${trans(`Youtube Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`youtubeUrl`);
el3Ve0P.value = fval(component.video.youtubeUrl);
let cndmDjV = elBOxeB.formHandler.getError(`youtubeUrl`);
this.setState('st4vGcs', cndmDjV);
if (cndmDjV) { 
let elsmfix = eo('div','FYmf',null,`class`,`alert alert-danger`);
text(elBOxeB.formHandler.getError(`youtubeUrl`));
ec('div');
}ec('div');
ec('div');
}let elDPjaC = eo('h3',null,null,`class`,`m-t-1`);
text(`Video Length`);
ec('h3');
let elB1pZh = eo('div',null,null,`class`,`row`);
let elYAWDq = eo('div',null,null,`class`,`col`);
let elgmrxY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elBOxeB.formHandler.getError(`duration.minutes`) })}`);
let elkLPcC = eo('label',null,null,`for`,`duration-minutes`);
text(trans('Minutes'));
let cndGA6b = true;
this.setState('stybVS3', cndGA6b);
if (cndGA6b) { 
let elnTIDQ = eo('span','1rIf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let ellMxVx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.minutes = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elBOxeB.formHandler.addError(`duration.minutes`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elBOxeB.formHandler.addError(`duration.minutes`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elBOxeB.formHandler.addError(`duration.minutes`, 'max', trans('validation.max', 59));}return elBOxeB.formHandler.removeError(`duration.minutes`);}]},`value`,`${fval(component.video.duration.minutes)}`,`name`,`${(`duration.minutes`).toInputName()}`,`placeholder`,`${trans(`Minutes`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-minutes`);
ellMxVx.value = fval(component.video.duration.minutes);
let cnd4hXv = elBOxeB.formHandler.getError(`duration.minutes`);
this.setState('staqtlx', cnd4hXv);
if (cnd4hXv) { 
let el9UYIK = eo('div','AwLf',null,`class`,`alert alert-danger`);
text(elBOxeB.formHandler.getError(`duration.minutes`));
ec('div');
}ec('div');
ec('div');
let elAVE0X = eo('div',null,null,`class`,`col`);
let elL2c4T = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elBOxeB.formHandler.getError(`duration.seconds`) })}`);
let elj_Ig0 = eo('label',null,null,`for`,`duration-seconds`);
text(trans('Seconds'));
let cndtVBi = true;
this.setState('stAdKV8', cndtVBi);
if (cndtVBi) { 
let ellpGUg = eo('span','fJdf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elHKCgO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.seconds = this.value;},function(e) {var $el = this;component.calculateVideoLength()},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elBOxeB.formHandler.addError(`duration.seconds`, 'required', trans('validation.required'));}else if (value && Number(value) < 0) {return elBOxeB.formHandler.addError(`duration.seconds`, 'min', trans('validation.min', 0));}else if (value && Number(value) > 59) {return elBOxeB.formHandler.addError(`duration.seconds`, 'max', trans('validation.max', 59));}return elBOxeB.formHandler.removeError(`duration.seconds`);}]},`value`,`${fval(component.video.duration.seconds)}`,`name`,`${(`duration.seconds`).toInputName()}`,`placeholder`,`${trans(`Seconds`)}`,`type`,`number`,`class`,`form-control`,`id`,`duration-seconds`);
elHKCgO.value = fval(component.video.duration.seconds);
let cndcF59 = elBOxeB.formHandler.getError(`duration.seconds`);
this.setState('stpQpF8', cndcF59);
if (cndcF59) { 
let elOboCb = eo('div','ixXf',null,`class`,`alert alert-danger`);
text(elBOxeB.formHandler.getError(`duration.seconds`));
ec('div');
}ec('div');
ec('div');
ec('div');
let ell2hx3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.video.duration.length = this.value;}]},`value`,`${fval(component.video.duration.length)}`,`name`,`${(`duration.length`).toInputName()}`,`type`,`hidden`);
ell2hx3.value = fval(component.video.duration.length);
let el8QzsQ = eo('div',null,null,`class`,`m-t-1`);
let elHeaGJ = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn bold btn-primary`);
text(`Save`);
ec('button');
ec('div');
ec('form');

                    this.isReadyToGo();
                }
        });