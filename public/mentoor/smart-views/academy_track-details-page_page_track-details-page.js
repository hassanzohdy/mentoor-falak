_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cm3KltV2t:'flk-spinner',cIjzVYPdE:'flk-time-ago',cLZIQs7E0:'flk-facebook-share',cuOD2dThV:'gold-icon',cw8JKxDot:'gold-icon',cXDx4WPHn:'markdown-input',cZPvbTe6N:'markdown-input',cd7laxiE7:'moderate-track',ctV6PNB8I:'gold-icon',chW9bABjd:'gold-icon',cYf17Ep7L:'flk-alert',c_jLCwq1u:'flk-spinner',cezTbRfMs:'layout'},
                render: function (component) {
                    let cmpNtEK = this._lc('cezTbRfMs', {parent:component,content:(layout) => {let cndUEu9 = Is.empty(component.track);
this.setState('stcvJ5r', cndUEu9);
let cnduULb = !(cndUEu9);
this.setState('sty5Yzr', cnduULb);
if (cndUEu9) { 
let cmpW7dL = this._lc('cm3KltV2t', {parent:component,parentTop:layout,state:'stcvJ5r'});
}else { 
let elhUhcH = eo('div',null,null,`class`,`row oneTrack`);
let el9LpBj = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let elnfyJa = eo('header',null,null,`class`,`trackImage`);
let elwf2OV = eo('div',null,null,`class`,`media`);
let elGL5Ue = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let eltTMAM = eo('div',null,null,`class`,`media-body`);
let elyDLV6 = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let elI7iqh = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elYs_2S = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmpuaUc = this._lc('cIjzVYPdE', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'sty5Yzr'});
ec('small');
let cmppe7W = this._lc('cLZIQs7E0', {parent:component,parentTop:layout,state:'sty5Yzr'});
ec('div');
ec('div');
ec('header');
let elNh_tr = eo('section',null,null,`class`,`trackTasks`);
let cndtqOp = component.suggestTopic === false;
this.setState('stdy6Lh', cndtqOp);
let cndOF14 = !(cndtqOp);
this.setState('stkgG9k', cndOF14);
if (cndtqOp) { 
let cndCp7d = component.topicSuggestionHasBeenSent;
this.setState('stdw5yf', cndCp7d);
if (cndCp7d) { 
let elJP52K = eo('p','_dnf',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let elzZWz2 = eo('div',null,null,`class`,`trackDescription`);
let elaruiE = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cndMcA3 = component.track.topics.length > 0;
this.setState('sty4eVI', cndMcA3);
if (cndMcA3) { 
let elUKA2K = eo('header','CV0f',null,`class`,`metaInfo`);
let el31Jej = eo('h3','vNSf',null,`class`,`text-muted bold`);
let elGRall = eo('i','VTcf',null,`class`,`${fas('list') + ' mr-2 icon'}`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let el8U0x9 = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iimP40 = 'K4lh46m' + i;
let elzpYtO = eo('li','Bb9baPQzV7aq' + i+iimP40,null,`class`,`list-group-item`);
elzpYtO.cls = component.styleTopicBasedOnUserAnswer(topic);

            for (let className in elzpYtO.cls) {
                elzpYtO.classList.toggle(className, elzpYtO.cls[className]);
            }  
            let elldb8d = eo('i','itxff'+iimP40,null,`class`,`${fas('file') + ' font-weight-normal topicIcon icon'}`);
ec('i');
let elXQ74p = eo('a','7Fcff'+iimP40,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elSQO8w = eo('h3','0zlff'+iimP40,null,`class`,`topicTitle`);
let elcr00T = eo('span','sjCff'+iimP40,null,`class`,`title`);
text( topic.title );
ec('span');
let cndNM1W = topic.answered && topic.userAnswer;
this.setState('stdjLTB', cndNM1W);
if (cndNM1W) { 
let elC94LS = eo('span','wSNff'+iimP40,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elC94LS.cls = answerStatusClass(component.myTopicAnswer(topic).status);

            for (let className in elC94LS.cls) {
                elC94LS.classList.toggle(className, elC94LS.cls[className]);
            }  
            text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let elXTDfg = eo('p','qYyff'+iimP40,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let elcRArH = eo('span','ahgff'+iimP40,null,`class`,`topicPrize`);
let cmpr04C = this._lc('cuOD2dThV', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iimP40});
let cndaqLH = ! Is.empty(topic.answers);
this.setState('st62onv', cndaqLH);
if (cndaqLH) { 
let elqLKYG = eo('div','uC7ff'+iimP40,null,`title`,`${trans(`Answers`)}`);
let elEjhlN = eo('span','nDlff'+iimP40,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let eljaSLC = eo('i','CwPff'+iimP40,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elAIdAN = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let elSRPg8 = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let elhInAH = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpgQ7O = this._lc('cw8JKxDot', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'stkgG9k'});
ec('p');
let elxp0SD = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let elR1UVV = eo('ul');
let el_IFmn = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let eljSV3z = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let elXwN3H = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let elTReop = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! elTReop.formHandler) {
                    window.cfrmdlr = elTReop.formHandler = new FormHandler(elTReop, component);
                } else {
                    window.cfrmdlr = elTReop.formHandler;
                }
            let elKqd8y = eo('div',null,null,`class`,`form-group`);
elKqd8y.cls = {'group-error': !!elTReop.formHandler.getError(`title`) };

            for (let className in elKqd8y.cls) {
                elKqd8y.classList.toggle(className, elKqd8y.cls[className]);
            }  
            let elMegVz = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let eleEu4o = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eln3Np6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTReop.formHandler.addError(`title`, 'required', trans('validation.required'));}return elTReop.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eln3Np6.value = fval(component.suggestTopicTitle);
let cndsJz0 = elTReop.formHandler.getError(`title`);
this.setState('stneT9O', cndsJz0);
if (cndsJz0) { 
let elaMCOW = eo('div','Wfpf',null,`class`,`alert alert-danger`);
text(elTReop.formHandler.getError(`title`));
ec('div');
}ec('div');
let elgglxF = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let eltZE0T = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let cmpH75k = this._lc('cXDx4WPHn', {parent:component,parentTop:layout,attrs:{name:`${(`shortDescription`).toInputName()}`,placeholder:`${trans(`Short description about the topic (Appears in the topics list)`)}`,type:'textarea',required:'',label:'Description'}});
let cmpUMAg = this._lc('cZPvbTe6N', {parent:component,parentTop:layout,attrs:{name:`${(`quest`).toInputName()}`,placeholder:`${trans(`Quest info (markdown is supported)`)}`,label:'Quest Info',type:'textarea'}});
let elmv0TF = eo('div',null,null,`class`,`form-group`);
elmv0TF.cls = {'group-error': !!elTReop.formHandler.getError(`reward`) };

            for (let className in elmv0TF.cls) {
                elmv0TF.classList.toggle(className, elmv0TF.cls[className]);
            }  
            let eluMTxd = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let ellkBIY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHABE4 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTReop.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elTReop.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndkxMz = elTReop.formHandler.getError(`reward`);
this.setState('stZBhSi', cndkxMz);
if (cndkxMz) { 
let elpLw3x = eo('div','V0yf',null,`class`,`alert alert-danger`);
text(elTReop.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elGlrfp = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let elCX_I7 = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmpvqlP = this._lc('cd7laxiE7', {parent:component,parentTop:layout,props:{track:component.track}});
let cnd7Nes = component.track.subscribed;
this.setState('st1rl2x', cnd7Nes);
if (cnd7Nes) { 
let el_1rU7 = eo('div','QPHf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cnds0Qq = component.suggestTopic === false;
this.setState('stjKcmr', cnds0Qq);
let cndXN8E = !(cnds0Qq);
this.setState('stfPjWe', cndXN8E);
if (cnds0Qq) { 
let elDcEdp = eo('button','i1pf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmpMViT = this._lc('ctV6PNB8I', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'stjKcmr'});
let elwdyEV = eo('strong','0nbf',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndVYff = component.userCanSuggestNewTopics === false;
this.setState('stV9pRs', cndVYff);
if (cndVYff) { 
let elGjsMz = eo('small','tT6f',null,`class`,`d-block yellow-text`);
let el9Pxk0 = eo('i','HBqf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let elwJCeZ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let eld7xQE = eo('div',null,null,`class`,`trackApply card`);
let elVkd4Q = eo('div',null,null,`class`,`card-body`);
let elTlSS1 = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let elFpvVY = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elx0LS7 = eo('span',null,null,`class`,`trackSingleMeta`);
let elmbadi = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndOrm4 = component.track.topics.length === 1;
this.setState('stdoOy7', cndOrm4);
let cndjn4f = !(cndOrm4);
this.setState('stfC9SL', cndjn4f);
if (cndOrm4) { 
let elTWwom = eo('span','nquf',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let elHnV_x = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elbWGL2 = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmp1LP3 = this._lc('chW9bABjd', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cnd_7ji = component.track.cost ==0;
this.setState('st2xw_Z', cnd_7ji);
if (cnd_7ji) { 
let elGism1 = eo('strong','zFxf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndzQ8B = component.confirmSubscribe;
this.setState('stbHtGT', cndzQ8B);
if (cndzQ8B) { 
let cmppMDl = this._lc('cYf17Ep7L', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stbHtGT'});
}let elh6q_P = eo('div',null,null,`class`,`text-center`);
let cndP4r8 = ! component.track.subscribed && ! component.isSubscribing;
this.setState('st8UEFr', cndP4r8);
let cnd3yHC = component.isSubscribing;
this.setState('stjUPnz', cnd3yHC);
let cndoUGJ = !(cndP4r8||cnd3yHC);
this.setState('stoHsZn', cndoUGJ);
if (cndP4r8) { 
let elC9Pz4 = eo('button','JwNf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cnd3yHC) { 
let cmp3SZM = this._lc('c_jLCwq1u', {parent:component,parentTop:layout,state:'stjUPnz'});
}else { 
let el2eII2 = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let el2INkv = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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