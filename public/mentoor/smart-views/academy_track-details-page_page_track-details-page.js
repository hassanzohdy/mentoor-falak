_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cvkgHva3D:'flk-spinner',cff_eHJG4:'flk-time-ago',cUUEauI32:'flk-facebook-share',c1uNPpyYY:'gold-icon',cZnVUKRX5:'gold-icon',cA_7lmmPI:'markdown-input',ct_uHq5dx:'markdown-input',cvvKqRbWG:'moderate-track',c4rMkp_br:'gold-icon',cAhlCqBmP:'gold-icon',cXydYTOBw:'flk-alert',csJgY78P6:'flk-spinner',ccipyiXWc:'layout'},
                render: function (component) {
                    let cmpynCl = this._lc('ccipyiXWc', {parent:component,content:(layout) => {let cnd2zsc = Is.empty(component.track);
this.setState('stOEseM', cnd2zsc);
let cndc28P = !(cnd2zsc);
this.setState('sthYVl4', cndc28P);
if (cnd2zsc) { 
let cmpSoje = this._lc('cvkgHva3D', {parent:component,parentTop:layout,state:'stOEseM'});
}else { 
let elC3pUE = eo('div',null,null,`class`,`row oneTrack`);
let elWo71c = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let ellzXqf = eo('header',null,null,`class`,`trackImage`);
let el_vZbl = eo('div',null,null,`class`,`media`);
let elx25gW = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let el2oK4D = eo('div',null,null,`class`,`media-body`);
let elnuAL4 = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let elnUnTg = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let el4A0jz = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmp_Q2B = this._lc('cff_eHJG4', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'sthYVl4'});
ec('small');
let cmpp39Y = this._lc('cUUEauI32', {parent:component,parentTop:layout,state:'sthYVl4'});
ec('div');
ec('div');
ec('header');
let elx34P3 = eo('section',null,null,`class`,`trackTasks`);
let cndhy7n = component.suggestTopic === false;
this.setState('stqNBog', cndhy7n);
let cndMyB5 = !(cndhy7n);
this.setState('stvy9Nc', cndMyB5);
if (cndhy7n) { 
let cndGfkO = component.topicSuggestionHasBeenSent;
this.setState('stm05r5', cndGfkO);
if (cndGfkO) { 
let elJ2_gq = eo('p','W9Nf',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let el0vKmZ = eo('div',null,null,`class`,`trackDescription`);
let elVlTEY = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cndN3KE = component.track.topics.length > 0;
this.setState('stuUb8R', cndN3KE);
if (cndN3KE) { 
let elTU8ip = eo('header','DKpf',null,`class`,`metaInfo`);
let elxz62m = eo('h3','TZ7f',null,`class`,`text-muted bold`);
let el38Kfp = eo('i','g95f',null,`class`,`${fas('list') + ' mr-2 icon'}`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let el9qQUm = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iiLY_z = 'CL6pRwk' + i;
let el4qcTE = eo('li','GWNMLr9vW292' + i+iiLY_z,null,`class`,`list-group-item`);
el4qcTE.cls = component.styleTopicBasedOnUserAnswer(topic);

            for (let className in el4qcTE.cls) {
                el4qcTE.classList.toggle(className, el4qcTE.cls[className]);
            }  
            let elz2xyp = eo('i','39Hff'+iiLY_z,null,`class`,`${fas('file') + ' font-weight-normal topicIcon icon'}`);
ec('i');
let eluJ2gC = eo('a','q3pff'+iiLY_z,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elgyl0T = eo('h3','qDUff'+iiLY_z,null,`class`,`topicTitle`);
let el0PZJr = eo('span','sx7ff'+iiLY_z,null,`class`,`title`);
text( topic.title );
ec('span');
let cndbhVi = topic.answered && topic.userAnswer;
this.setState('stbo8Pn', cndbhVi);
if (cndbhVi) { 
let elNCsjX = eo('span','bG1ff'+iiLY_z,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elNCsjX.cls = answerStatusClass(component.myTopicAnswer(topic).status);

            for (let className in elNCsjX.cls) {
                elNCsjX.classList.toggle(className, elNCsjX.cls[className]);
            }  
            text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let elV0Vow = eo('p','Rtnff'+iiLY_z,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let elWSlzD = eo('span','RYPff'+iiLY_z,null,`class`,`topicPrize`);
let cmpUUxA = this._lc('c1uNPpyYY', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iiLY_z});
let cndHoSH = ! Is.empty(topic.answers);
this.setState('stqAnoH', cndHoSH);
if (cndHoSH) { 
let el_2Ypn = eo('div','EXAff'+iiLY_z,null,`title`,`${trans(`Answers`)}`);
let elDZiS0 = eo('span','povff'+iiLY_z,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let elpDEHd = eo('i','rikff'+iiLY_z,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elLLxNy = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let elGiW2B = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let elR9v8T = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpKEqz = this._lc('cZnVUKRX5', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'stvy9Nc'});
ec('p');
let el_Kqeu = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let elC5MDt = eo('ul');
let el6skuW = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let elhWwbv = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let el84BKj = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let elypCfK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! elypCfK.formHandler) {
                    window.cfrmdlr = elypCfK.formHandler = new FormHandler(elypCfK, component);
                } else {
                    window.cfrmdlr = elypCfK.formHandler;
                }
            let elguLGU = eo('div',null,null,`class`,`form-group`);
elguLGU.cls = {'group-error': !!elypCfK.formHandler.getError(`title`) };

            for (let className in elguLGU.cls) {
                elguLGU.classList.toggle(className, elguLGU.cls[className]);
            }  
            let elzaMGV = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elDwPq6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmNpXV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elypCfK.formHandler.addError(`title`, 'required', trans('validation.required'));}return elypCfK.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elmNpXV.value = fval(component.suggestTopicTitle);
let cndZzbo = elypCfK.formHandler.getError(`title`);
this.setState('stMuZgw', cndZzbo);
if (cndZzbo) { 
let el4CkPY = eo('div','recf',null,`class`,`alert alert-danger`);
text(elypCfK.formHandler.getError(`title`));
ec('div');
}ec('div');
let elgZQ1I = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let elczy4y = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let cmpVxbV = this._lc('cA_7lmmPI', {parent:component,parentTop:layout,attrs:{name:`${(`shortDescription`).toInputName()}`,placeholder:`${trans(`Short description about the topic (Appears in the topics list)`)}`,type:'textarea',required:'',label:'Description'}});
let cmpIfLR = this._lc('ct_uHq5dx', {parent:component,parentTop:layout,attrs:{name:`${(`quest`).toInputName()}`,placeholder:`${trans(`Quest info (markdown is supported)`)}`,label:'Quest Info',type:'textarea'}});
let elauFbJ = eo('div',null,null,`class`,`form-group`);
elauFbJ.cls = {'group-error': !!elypCfK.formHandler.getError(`reward`) };

            for (let className in elauFbJ.cls) {
                elauFbJ.classList.toggle(className, elauFbJ.cls[className]);
            }  
            let elvfj51 = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let elPAfHu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elULqR4 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elypCfK.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elypCfK.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndpbN2 = elypCfK.formHandler.getError(`reward`);
this.setState('stv5H8U', cndpbN2);
if (cndpbN2) { 
let elKQnmG = eo('div','_5Nf',null,`class`,`alert alert-danger`);
text(elypCfK.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elLAL89 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let elKHp24 = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmpY1fj = this._lc('cvvKqRbWG', {parent:component,parentTop:layout,props:{track:component.track}});
let cnd9hbC = component.track.subscribed;
this.setState('stYzISt', cnd9hbC);
if (cnd9hbC) { 
let elzWlO6 = eo('div','iU_f',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cnd6AYF = component.suggestTopic === false;
this.setState('stvyHMF', cnd6AYF);
let cndf03E = !(cnd6AYF);
this.setState('st3yXzB', cndf03E);
if (cnd6AYF) { 
let elwvcm2 = eo('button','j87f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmpa3lp = this._lc('c4rMkp_br', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'stvyHMF'});
let elZOSdj = eo('strong','JHUf',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndC5se = component.userCanSuggestNewTopics === false;
this.setState('stK2I74', cndC5se);
if (cndC5se) { 
let elMXvUF = eo('small','Fnbf',null,`class`,`d-block yellow-text`);
let elwIuwO = eo('i','A8Of',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let el5vDIY = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elintx3 = eo('div',null,null,`class`,`trackApply card`);
let eltlC12 = eo('div',null,null,`class`,`card-body`);
let elPBMhC = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let elB4iJu = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let el6GzLu = eo('span',null,null,`class`,`trackSingleMeta`);
let elSwA5C = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndq5jb = component.track.topics.length === 1;
this.setState('stuhkrv', cndq5jb);
let cndwU0x = !(cndq5jb);
this.setState('stRlqF8', cndwU0x);
if (cndq5jb) { 
let ellL2CH = eo('span','quMf',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let elRAcXl = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elEbOMQ = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmp3WP8 = this._lc('cAhlCqBmP', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cnd82vF = component.track.cost ==0;
this.setState('stTOZzc', cnd82vF);
if (cnd82vF) { 
let el_uNeg = eo('strong','TFUf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndzoUz = component.confirmSubscribe;
this.setState('stBMmn0', cndzoUz);
if (cndzoUz) { 
let cmpuOgp = this._lc('cXydYTOBw', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stBMmn0'});
}let elJgtmL = eo('div',null,null,`class`,`text-center`);
let cndQtKI = ! component.track.subscribed && ! component.isSubscribing;
this.setState('sth6Bmq', cndQtKI);
let cndTiT3 = component.isSubscribing;
this.setState('stD_r9a', cndTiT3);
let cnd4p5d = !(cndQtKI||cndTiT3);
this.setState('stHYNMe', cnd4p5d);
if (cndQtKI) { 
let elWQRsT = eo('button','Oerf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cndTiT3) { 
let cmpJR8h = this._lc('csJgY78P6', {parent:component,parentTop:layout,state:'stD_r9a'});
}else { 
let elgUM6O = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elNbDuM = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
}}});

                    this.isReadyToGo();
                }
        });