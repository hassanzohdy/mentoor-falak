_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {c2eQI3Plz:'flk-spinner',c7uXKJrph:'flk-time-ago',cjupoTzbt:'flk-facebook-share',cNkMcptiw:'gold-icon',cYHW2KRdp:'gold-icon',cckzhl5vy:'moderate-track',cI_RRBIsL:'gold-icon',cWa2F68oD:'gold-icon',c1AcJL32h:'flk-alert',cZymkvZNF:'flk-spinner',co8_92to3:'layout'},
                render: function (component) {
                    let cmpCbF5 = this._lc('co8_92to3', {parent:component,content:(layout) => {let cndnaYm = Is.empty(component.track);
this.setState('stxAuZ3', cndnaYm);
let cndn6jA = !(cndnaYm);
this.setState('stowX2f', cndn6jA);
if (cndnaYm) { 
let cmpTEoZ = this._lc('c2eQI3Plz', {parent:component,parentTop:layout,state:'stxAuZ3'});
}else { 
let elQq5MH = eo('div',null,null,`class`,`row oneTrack`);
let elhIJWd = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let el_Mldi = eo('header',null,null,`class`,`trackImage`);
let elxyT9K = eo('div',null,null,`class`,`media`);
let elps6h5 = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let elJ74eF = eo('div',null,null,`class`,`media-body`);
let el7m8fk = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let elxHH3v = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let el9As3U = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmpKTUI = this._lc('c7uXKJrph', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'stowX2f'});
ec('small');
let cmpImIf = this._lc('cjupoTzbt', {parent:component,parentTop:layout,state:'stowX2f'});
ec('div');
ec('div');
ec('header');
let elOZpWB = eo('section',null,null,`class`,`trackTasks`);
let cndQssB = component.suggestTopic === false;
this.setState('stzGJlT', cndQssB);
let cndE_Jb = !(cndQssB);
this.setState('stxazSN', cndE_Jb);
if (cndQssB) { 
let cndmP4G = component.topicSuggestionHasBeenSent;
this.setState('stGtbV8', cndmP4G);
if (cndmP4G) { 
let elYfZUW = eo('p','7yFf',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let el2yXvj = eo('div',null,null,`class`,`trackDescription`);
let elazgvc = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cndSjZA = component.track.topics.length > 0;
this.setState('stF8eYl', cndSjZA);
if (cndSjZA) { 
let el35FnT = eo('header','Ixlf',null,`class`,`metaInfo`);
let eloOiID = eo('h3','XYrf',null,`class`,`text-muted bold`);
let ellqYpJ = eo('i','tXff',null,`class`,`${fas('list') + ' mr-2 icon'}`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let elZwxRm = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iiIW9h = 'dj1y1UQ' + i;
let elBTpey = eo('li','WaHNuC_N9VvJ' + i+iiIW9h,null,`class`,`list-group-item`);
elBTpey.cls = component.styleTopicBasedOnUserAnswer(topic);

            for (let className in elBTpey.cls) {
                elBTpey.classList.toggle(className, elBTpey.cls[className]);
            }  
            let elqP_5d = eo('i','yzxff'+iiIW9h,null,`class`,`${fas('file') + ' font-weight-normal topicIcon icon'}`);
ec('i');
let elh2Zsw = eo('a','tiGff'+iiIW9h,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elA0Yeq = eo('h3','FzJff'+iiIW9h,null,`class`,`topicTitle`);
let elzwokc = eo('span','NMdff'+iiIW9h,null,`class`,`title`);
text( topic.title );
ec('span');
let cnd8em1 = topic.answered && topic.userAnswer;
this.setState('stA6K1H', cnd8em1);
if (cnd8em1) { 
let elXToC0 = eo('span','MVgff'+iiIW9h,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elXToC0.cls = answerStatusClass(component.myTopicAnswer(topic).status);

            for (let className in elXToC0.cls) {
                elXToC0.classList.toggle(className, elXToC0.cls[className]);
            }  
            text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let elITCCa = eo('p','eNcff'+iiIW9h,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let elSeB7h = eo('span','EeJff'+iiIW9h,null,`class`,`topicPrize`);
let cmpEqyo = this._lc('cNkMcptiw', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iiIW9h});
let cndNNXt = ! Is.empty(topic.answers);
this.setState('stvu1tR', cndNNXt);
if (cndNNXt) { 
let elgVYfe = eo('div','2Ddff'+iiIW9h,null,`title`,`${trans(`Answers`)}`);
let elAgi7n = eo('span','qx1ff'+iiIW9h,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let elfduPM = eo('i','xI7ff'+iiIW9h,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elXvc57 = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let elK2_9H = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let elIFNxp = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpzcaI = this._lc('cYHW2KRdp', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'stxazSN'});
ec('p');
let elNZlDf = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let elnI2tX = eo('ul');
let elZ9I9v = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let el4q8PJ = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let elaWkkm = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let ell9H8P = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! ell9H8P.formHandler) {
                    window.cfrmdlr = ell9H8P.formHandler = new FormHandler(ell9H8P, component);
                } else {
                    window.cfrmdlr = ell9H8P.formHandler;
                }
            let elGzmSt = eo('div',null,null,`class`,`form-group`);
elGzmSt.cls = {'group-error': !!ell9H8P.formHandler.getError(`title`) };

            for (let className in elGzmSt.cls) {
                elGzmSt.classList.toggle(className, elGzmSt.cls[className]);
            }  
            let elUxWjy = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elEzu14 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elq8VyH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ell9H8P.formHandler.addError(`title`, 'required', trans('validation.required'));}return ell9H8P.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elq8VyH.value = fval(component.suggestTopicTitle);
let cnd5c7D = ell9H8P.formHandler.getError(`title`);
this.setState('stpK0o2', cnd5c7D);
if (cnd5c7D) { 
let eleEIJh = eo('div','1_Af',null,`class`,`alert alert-danger`);
text(ell9H8P.formHandler.getError(`title`));
ec('div');
}ec('div');
let elE7BkK = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let elB5lFD = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let elmAqOn = eo('div',null,null,`class`,`form-group`);
elmAqOn.cls = {'group-error': !!ell9H8P.formHandler.getError(`shortDescription`) };

            for (let className in elmAqOn.cls) {
                elmAqOn.classList.toggle(className, elmAqOn.cls[className]);
            }  
            let elOtLAF = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short description about the topic (Appears in the topics list)'));
let elyoMFV = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDguS8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return ell9H8P.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return ell9H8P.formHandler.removeError(`shortDescription`);}]},`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description about the topic (Appears in the topics list)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
ec('textarea');
let cndqlzS = ell9H8P.formHandler.getError(`shortDescription`);
this.setState('st6A1T8', cndqlzS);
if (cndqlzS) { 
let el2NMjQ = eo('div','UE9f',null,`class`,`alert alert-danger`);
text(ell9H8P.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elNzI2D = eo('div',null,null,`class`,`form-group`);
elNzI2D.cls = {'group-error': !!ell9H8P.formHandler.getError(`quest`) };

            for (let className in elNzI2D.cls) {
                elNzI2D.classList.toggle(className, elNzI2D.cls[className]);
            }  
            let elQuRQz = eo('label',null,null,`for`,`quest`);
text(trans('Quest info (markdown is supported)'));
let elgZltI = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmaKBD = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return ell9H8P.formHandler.addError(`quest`, 'required', trans('validation.required'));}return ell9H8P.formHandler.removeError(`quest`);}]},`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest info (markdown is supported)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`quest`);
ec('textarea');
let cnd9Tos = ell9H8P.formHandler.getError(`quest`);
this.setState('stShJ9I', cnd9Tos);
if (cnd9Tos) { 
let elTArlH = eo('div','Nrkf',null,`class`,`alert alert-danger`);
text(ell9H8P.formHandler.getError(`quest`));
ec('div');
}ec('div');
let el2xHJU = eo('div',null,null,`class`,`form-group`);
el2xHJU.cls = {'group-error': !!ell9H8P.formHandler.getError(`reward`) };

            for (let className in el2xHJU.cls) {
                el2xHJU.classList.toggle(className, el2xHJU.cls[className]);
            }  
            let elTfmyY = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let el8KfbM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGJEYh = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return ell9H8P.formHandler.addError(`reward`, 'required', trans('validation.required'));}return ell9H8P.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndn3e4 = ell9H8P.formHandler.getError(`reward`);
this.setState('stpkBK5', cndn3e4);
if (cndn3e4) { 
let elvcDuC = eo('div','JCYf',null,`class`,`alert alert-danger`);
text(ell9H8P.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elGd8KH = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let elDr7Qb = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmpcUUN = this._lc('cckzhl5vy', {parent:component,parentTop:layout,props:{track:component.track}});
let cndpUxP = component.track.subscribed;
this.setState('steVhqp', cndpUxP);
if (cndpUxP) { 
let elOu7QB = eo('div','BTSf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cndo_VJ = component.suggestTopic === false;
this.setState('stfRnE2', cndo_VJ);
let cndMMrM = !(cndo_VJ);
this.setState('stN_sVz', cndMMrM);
if (cndo_VJ) { 
let elEfEjr = eo('button','VEUf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmp7uVx = this._lc('cI_RRBIsL', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'stfRnE2'});
let elgDiT5 = eo('strong','5mwf',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndrQPw = component.userCanSuggestNewTopics === false;
this.setState('stKaJ9C', cndrQPw);
if (cndrQPw) { 
let elpm9Gx = eo('small','9Frf',null,`class`,`d-block yellow-text`);
let el0gstq = eo('i','1x4f',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let elz1joq = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elNgkii = eo('div',null,null,`class`,`trackApply card`);
let elWLnzb = eo('div',null,null,`class`,`card-body`);
let elmcJcM = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let elLMAJF = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elAEYGm = eo('span',null,null,`class`,`trackSingleMeta`);
let elV2mN6 = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndpg2N = component.track.topics.length === 1;
this.setState('stlCtyr', cndpg2N);
let cndmckX = !(cndpg2N);
this.setState('st1Kzdi', cndmckX);
if (cndpg2N) { 
let ele_CSJ = eo('span','DNhf',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let elu8kh_ = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elgAs8D = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmpD6U8 = this._lc('cWa2F68oD', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cndDl5a = component.track.cost ==0;
this.setState('strPhoK', cndDl5a);
if (cndDl5a) { 
let el6L43Y = eo('strong','gZ5f',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndTSj3 = component.confirmSubscribe;
this.setState('stP6EUa', cndTSj3);
if (cndTSj3) { 
let cmp32fO = this._lc('c1AcJL32h', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stP6EUa'});
}let el9tjBN = eo('div',null,null,`class`,`text-center`);
let cnd4N6C = ! component.track.subscribed && ! component.isSubscribing;
this.setState('st23v5G', cnd4N6C);
let cndLaDr = component.isSubscribing;
this.setState('stHePI3', cndLaDr);
let cnd2orp = !(cnd4N6C||cndLaDr);
this.setState('stzjqWE', cnd2orp);
if (cnd4N6C) { 
let elOQGCL = eo('button','q7Rf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cndLaDr) { 
let cmp_tqA = this._lc('cZymkvZNF', {parent:component,parentTop:layout,state:'stHePI3'});
}else { 
let elAMxMd = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elDVnB3 = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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