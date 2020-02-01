_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {czBr77rEi:'flk-mdb-checkbox',cniLfnhEP:'flk-image-input',cNP2REEj7:'flk-file-input',cZJ8MRDEv:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cZJ8MRDEv', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elFRm1o = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elFRm1o.formHandler) {
                    window.cfrmdlr = elFRm1o.formHandler = new FormHandler(elFRm1o, component);
                } else {
                    window.cfrmdlr = elFRm1o.formHandler;
                }
            let elWbPnX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elWbPnX.value = fval(component.resourceType);
let cndSr7h = component.project;
this.setState('stAvb4y', cndSr7h);
let cndwsJb = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stB36eK', cndwsJb);
let cndyuSH = component.resourceType == 'email';
this.setState('stV8TmN', cndyuSH);
let cnd9a9H = component.resourceType == 'ftp';
this.setState('stjrxFw', cnd9a9H);
let cndEgzy = component.resourceType == 'website';
this.setState('stocY91', cndEgzy);
let cndW2yM = component.resourceType == 'youtube';
this.setState('stofUB1', cndW2yM);
let cnd2M0Y = component.resourceType == 'link';
this.setState('stuBX6X', cnd2M0Y);
if (cndSr7h) { 
let elQ_5de = ev('input','TtVf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elQ_5de.value = fval(component.project.id);
}let el8a9V9 = eo('div',null,null,`class`,`form-group`);
el8a9V9.cls = {'group-error': !!elFRm1o.formHandler.getError(`title`) };

            for (let className in el8a9V9.cls) {
                el8a9V9.classList.toggle(className, el8a9V9.cls[className]);
            }  
            let elslaFp = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let el9Bu82 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRniBX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`title`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elRniBX.value = fval(component.record.title);
let cnd2ZxF = elFRm1o.formHandler.getError(`title`);
this.setState('stEAoN3', cnd2ZxF);
if (cnd2ZxF) { 
let elyFWw1 = eo('div','78tf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`title`));
ec('div');
}ec('div');
let elwu_eR = eo('div',null,null,`class`,`form-group`);
elwu_eR.cls = {'group-error': !!elFRm1o.formHandler.getError(`description`) };

            for (let className in elwu_eR.cls) {
                elwu_eR.classList.toggle(className, elwu_eR.cls[className]);
            }  
            let elZEBT4 = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elpb5Ar = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elpb5Ar.value = fval(component.record.description);
ec('textarea');
ec('div');
let elbJKIC = eo('div',null,null,`class`,`pl-2`);
let cmpmi49 = this._lc('czBr77rEi', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cnd1Lp0 = component.resourceType == 'image';
this.setState('stW9uk8', cnd1Lp0);
let cndmNrb = cndwsJb;
this.setState('stchafK', cndmNrb);
let cnd5xp5 = cndyuSH;
this.setState('stdmvwO', cnd5xp5);
let cndN3VS = cnd9a9H;
this.setState('stPmEKE', cndN3VS);
let cndr3fJ = cndEgzy;
this.setState('sthOL7I', cndr3fJ);
let cnd4MQ8 = cndW2yM;
this.setState('stEGBYx', cnd4MQ8);
let cndTkRC = cnd2M0Y;
this.setState('stRhsq6', cndTkRC);
if (cnd1Lp0) { 
let cmpuTiy = this._lc('cniLfnhEP', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'stW9uk8'});
}else if (cndmNrb) { 
let elgTVvf = eo('div',null,null,`class`,`m-t-2`);
let cmpbH_3 = this._lc('cNP2REEj7', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let eliXeyB = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elAWn5b = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stchafK'});
ec('div');
}else if (cnd5xp5) { 
let elZVN83 = eo('div',null,null,`class`,`form-group`);
elZVN83.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.email.url`) };

            for (let className in elZVN83.cls) {
                elZVN83.classList.toggle(className, elZVN83.cls[className]);
            }  
            let el8oJX4 = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elpx9od = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPPjLU = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
elPPjLU.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndT6pR = elFRm1o.formHandler.getError(`settings.email.url`);
this.setState('stDLiT3', cndT6pR);
if (cndT6pR) { 
let elwR7hP = eo('div','0Nrf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elJGldZ = eo('div',null,null,`class`,`form-group`);
elJGldZ.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.email.email`) };

            for (let className in elJGldZ.cls) {
                elJGldZ.classList.toggle(className, elJGldZ.cls[className]);
            }  
            let elZuJFS = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let elbZl5V = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1OHjT = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elFRm1o.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return elFRm1o.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
el1OHjT.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cnd8UWa = elFRm1o.formHandler.getError(`settings.email.email`);
this.setState('stP1l8Z', cnd8UWa);
if (cnd8UWa) { 
let elEONCE = eo('div','kVUf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let eloSJCY = eo('div',null,null,`class`,`form-group`);
eloSJCY.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.email.password`) };

            for (let className in eloSJCY.cls) {
                eloSJCY.classList.toggle(className, eloSJCY.cls[className]);
            }  
            let elLc6nx = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elDm6HB = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzju10 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
elzju10.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cndiOwI = elFRm1o.formHandler.getError(`settings.email.password`);
this.setState('stasgPW', cndiOwI);
if (cndiOwI) { 
let el_XZvV = eo('div','TN0f',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndN3VS) { 
let elIa1EY = eo('div',null,null,`class`,`form-group`);
elIa1EY.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.ftp.host`) };

            for (let className in elIa1EY.cls) {
                elIa1EY.classList.toggle(className, elIa1EY.cls[className]);
            }  
            let elH8XE5 = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let elG5qJ4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcYUkN = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
elcYUkN.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cndG4mA = elFRm1o.formHandler.getError(`settings.ftp.host`);
this.setState('st17O6d', cndG4mA);
if (cndG4mA) { 
let elf8LNC = eo('div','RNyf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let elNM1pp = eo('div',null,null,`class`,`form-group`);
elNM1pp.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.ftp.username`) };

            for (let className in elNM1pp.cls) {
                elNM1pp.classList.toggle(className, elNM1pp.cls[className]);
            }  
            let elsslDf = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elwE032 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZ93Rj = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
elZ93Rj.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cndKQh9 = elFRm1o.formHandler.getError(`settings.ftp.username`);
this.setState('stH2ALH', cndKQh9);
if (cndKQh9) { 
let eljmhwU = eo('div','QoUf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let elfKmCU = eo('div',null,null,`class`,`form-group`);
elfKmCU.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.ftp.password`) };

            for (let className in elfKmCU.cls) {
                elfKmCU.classList.toggle(className, elfKmCU.cls[className]);
            }  
            let eleGO4o = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let ele0axi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwWPff = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
elwWPff.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cndTXWM = elFRm1o.formHandler.getError(`settings.ftp.password`);
this.setState('stzy8vy', cndTXWM);
if (cndTXWM) { 
let eljM2ap = eo('div','mErf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let ele3PHN = eo('div',null,null,`class`,`form-group`);
ele3PHN.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.ftp.protocol`) };

            for (let className in ele3PHN.cls) {
                ele3PHN.classList.toggle(className, ele3PHN.cls[className]);
            }  
            let elDsdKB = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let elrpZN4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1izxx = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
el1izxx.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndufsh = elFRm1o.formHandler.getError(`settings.ftp.protocol`);
this.setState('st26Tut', cndufsh);
if (cndufsh) { 
let el8slS8 = eo('div','M_df',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndr3fJ) { 
let elBuTCP = eo('div',null,null,`class`,`form-group`);
elBuTCP.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.website.name`) };

            for (let className in elBuTCP.cls) {
                elBuTCP.classList.toggle(className, elBuTCP.cls[className]);
            }  
            let el7BDkF = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let el6rNo0 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elR2DYJ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
elR2DYJ.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cndKydZ = elFRm1o.formHandler.getError(`settings.website.name`);
this.setState('stIQSlk', cndKydZ);
if (cndKydZ) { 
let elCnNFj = eo('div','flqf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let el1euWP = eo('div',null,null,`class`,`form-group`);
el1euWP.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.website.url`) };

            for (let className in el1euWP.cls) {
                el1euWP.classList.toggle(className, el1euWP.cls[className]);
            }  
            let el0igx3 = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let el9YnJZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUWpH_ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
elUWpH_.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cndn3It = elFRm1o.formHandler.getError(`settings.website.url`);
this.setState('st5xX7A', cndn3It);
if (cndn3It) { 
let elP0hlj = eo('div','u1Bf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let eloe_k8 = eo('div',null,null,`class`,`form-group`);
eloe_k8.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.website.username`) };

            for (let className in eloe_k8.cls) {
                eloe_k8.classList.toggle(className, eloe_k8.cls[className]);
            }  
            let elmcZpa = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let eleTfm1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKKcNu = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elKKcNu.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndboh3 = elFRm1o.formHandler.getError(`settings.website.username`);
this.setState('str_m4H', cndboh3);
if (cndboh3) { 
let elDbhkJ = eo('div','iYTf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elM7H6w = eo('div',null,null,`class`,`form-group`);
elM7H6w.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.website.password`) };

            for (let className in elM7H6w.cls) {
                elM7H6w.classList.toggle(className, elM7H6w.cls[className]);
            }  
            let eltqEeU = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let elmQYWV = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elnMY2Y = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elnMY2Y.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndSNk0 = elFRm1o.formHandler.getError(`settings.website.password`);
this.setState('st2eNlm', cndSNk0);
if (cndSNk0) { 
let elGd5fM = eo('div','SNgf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cnd4MQ8) { 
let el7I4Vl = eo('div',null,null,`class`,`form-group`);
el7I4Vl.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.youtube`) };

            for (let className in el7I4Vl.cls) {
                el7I4Vl.classList.toggle(className, el7I4Vl.cls[className]);
            }  
            let elFubCt = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elFBVYW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1WZ2B = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
el1WZ2B.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cndikpY = elFRm1o.formHandler.getError(`settings.youtube`);
this.setState('stkO_Iz', cndikpY);
if (cndikpY) { 
let elOFJrF = eo('div','GM7f',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndTkRC) { 
let elAVh0v = eo('div',null,null,`class`,`form-group`);
elAVh0v.cls = {'group-error': !!elFRm1o.formHandler.getError(`settings.link`) };

            for (let className in elAVh0v.cls) {
                elAVh0v.classList.toggle(className, elAVh0v.cls[className]);
            }  
            let elaG96N = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elUykgX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elL0SNs = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFRm1o.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return elFRm1o.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndZIsD = elFRm1o.formHandler.getError(`settings.link`);
this.setState('stKnLyY', cndZIsD);
if (cndZIsD) { 
let elBanBz = eo('div','XDPf',null,`class`,`alert alert-danger`);
text(elFRm1o.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let elFUgcc = eo('div');
let elehLWF = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });