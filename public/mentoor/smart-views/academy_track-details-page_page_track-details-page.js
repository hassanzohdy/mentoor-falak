_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cTmLvA2at:'flk-spinner',cmOgcmj03:'flk-time-ago',c4KXIQqWJ:'flk-facebook-share',c0Q6yqzWl:'gold-icon',cTbx4LR3t:'gold-icon',cTseFAVxi:'markdown-input',cFfmfySil:'markdown-input',c_epLwv6C:'moderate-track',cm9TANGwo:'gold-icon',c_Pg05G6t:'gold-icon',cWUGj9VZN:'flk-alert',c8xMfxSoF:'flk-spinner',cHFg8cuqb:'layout'},
                render: function (component) {
                    let cmpM1Au = this._lc('cHFg8cuqb', {parent:component,content:(layout) => {let cndoHr8 = Is.empty(component.track);
this.setState('stjRMlE', cndoHr8);
let cndG36r = !(cndoHr8);
this.setState('stLJwgf', cndG36r);
if (cndoHr8) { 
let cmpnZRZ = this._lc('cTmLvA2at', {parent:component,parentTop:layout,state:'stjRMlE'});
}else { 
let elbVcCa = eo('div',null,null,`class`,`row oneTrack`);
let elI4_ta = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let elOZAOV = eo('header',null,null,`class`,`trackImage`);
let elCyWoG = eo('div',null,null,`class`,`media`);
let elRByjp = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let el2dBiC = eo('div',null,null,`class`,`media-body`);
let eliEsym = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let elt7i45 = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elXaCsR = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmp3fVs = this._lc('cmOgcmj03', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'stLJwgf'});
ec('small');
let cmpBe3f = this._lc('c4KXIQqWJ', {parent:component,parentTop:layout,state:'stLJwgf'});
ec('div');
ec('div');
ec('header');
let elRRHf_ = eo('section',null,null,`class`,`trackTasks`);
let cndKWog = component.suggestTopic === false;
this.setState('stEu0Cj', cndKWog);
let cndpvgI = !(cndKWog);
this.setState('stBWLrK', cndpvgI);
if (cndKWog) { 
let cndISND = component.topicSuggestionHasBeenSent;
this.setState('stZZPii', cndISND);
if (cndISND) { 
let elQ1M9d = eo('p','QPff',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let elvtYOC = eo('div',null,null,`class`,`trackDescription`);
let elSwcpo = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cndLpd3 = component.track.topics.length > 0;
this.setState('stzaaWx', cndLpd3);
if (cndLpd3) { 
let el7qTs7 = eo('header','Slcf',null,`class`,`metaInfo`);
let eloY9TG = eo('h3','_hWf',null,`class`,`text-muted bold`);
let elgjB7Z = eo('i','Ylvf',null,`class`,`${fas('list')} mr-2 icon`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let elNhfX5 = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iiCU2T = 'yPTYob5' + i;
let elS1uSR = eo('li','l9cwLMVGRob6' + i+iiCU2T,null,`class`,`list-group-item ${cls(component.styleTopicBasedOnUserAnswer(topic))}`);
let elJZrxk = eo('i','hk2ff'+iiCU2T,null,`class`,`${fas('file')} font-weight-normal topicIcon icon`);
ec('i');
let elPNURc = eo('a','A4Vff'+iiCU2T,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elUTX_E = eo('h3','7Kuff'+iiCU2T,null,`class`,`topicTitle`);
let eljJi20 = eo('span','Rpaff'+iiCU2T,null,`class`,`title`);
text( topic.title );
ec('span');
let cndYUtf = topic.answered && topic.userAnswer;
this.setState('stvKdiy', cndYUtf);
if (cndYUtf) { 
let elwy82d = eo('span','sivff'+iiCU2T,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1 ${cls(answerStatusClass(component.myTopicAnswer(topic).status))}`);
text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let el7WoYN = eo('p','Rybff'+iiCU2T,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let elO2c_j = eo('span','KKjff'+iiCU2T,null,`class`,`topicPrize`);
let cmpeavX = this._lc('c0Q6yqzWl', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iiCU2T});
let cndIaDG = ! Is.empty(topic.answers);
this.setState('stn7C3F', cndIaDG);
if (cndIaDG) { 
let elN6CwC = eo('div','2Xoff'+iiCU2T,null,`title`,`${trans(`Answers`)}`);
let eltwEvi = eo('span','JKkff'+iiCU2T,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let elK6RCb = eo('i','bvYff'+iiCU2T,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elPEUB9 = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let elHbeqy = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let elf6H7_ = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpoi25 = this._lc('cTbx4LR3t', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'stBWLrK'});
ec('p');
let elhtWa2 = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let elosHJX = eo('ul');
let elsrU0N = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let el99LSJ = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let elqnKRu = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let elCZu3N = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! elCZu3N.formHandler) {
                    window.cfrmdlr = elCZu3N.formHandler = new FormHandler(elCZu3N, component);
                } else {
                    window.cfrmdlr = elCZu3N.formHandler;
                }
            let el12tZM = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elCZu3N.formHandler.getError(`title`) })}`);
let elCpuFf = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let el4vKWf = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFQuxv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCZu3N.formHandler.addError(`title`, 'required', trans('validation.required'));}return elCZu3N.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elFQuxv.value = fval(component.suggestTopicTitle);
let cnd5Zsf = elCZu3N.formHandler.getError(`title`);
this.setState('st45Q5Q', cnd5Zsf);
if (cnd5Zsf) { 
let elRRkdk = eo('div','Usuf',null,`class`,`alert alert-danger`);
text(elCZu3N.formHandler.getError(`title`));
ec('div');
}ec('div');
let elwiAVO = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let elOr2KM = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let cmpKNES = this._lc('cTseFAVxi', {parent:component,parentTop:layout,attrs:{name:`${(`shortDescription`).toInputName()}`,placeholder:`${trans(`Short description about the topic (Appears in the topics list)`)}`,type:'textarea',required:'',label:'Description'}});
let cmpnVdH = this._lc('cFfmfySil', {parent:component,parentTop:layout,attrs:{name:`${(`quest`).toInputName()}`,placeholder:`${trans(`Quest info (markdown is supported)`)}`,label:'Quest Info',type:'textarea'}});
let elyM4ZW = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elCZu3N.formHandler.getError(`reward`) })}`);
let el1kxhA = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let eltFBYQ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elL9ZCD = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCZu3N.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elCZu3N.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndZ1Oz = elCZu3N.formHandler.getError(`reward`);
this.setState('stnG8Qd', cndZ1Oz);
if (cndZ1Oz) { 
let elFaheF = eo('div','gfPf',null,`class`,`alert alert-danger`);
text(elCZu3N.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elPVrsz = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let elzipHT = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmphx1u = this._lc('c_epLwv6C', {parent:component,parentTop:layout,props:{track:component.track}});
let cndaavv = component.track.subscribed;
this.setState('st9NkO_', cndaavv);
if (cndaavv) { 
let elvCz8u = eo('div','YYnf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cndht7m = component.suggestTopic === false;
this.setState('st0LDlw', cndht7m);
let cndaJKl = !(cndht7m);
this.setState('sthbV08', cndaJKl);
if (cndht7m) { 
let elkZ47W = eo('button','gYkf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmpQWZ3 = this._lc('cm9TANGwo', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'st0LDlw'});
let elOVUXq = eo('strong','Dt_f',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndT4Be = component.userCanSuggestNewTopics === false;
this.setState('stRgmeI', cndT4Be);
if (cndT4Be) { 
let elB0WJv = eo('small','Ydkf',null,`class`,`d-block yellow-text`);
let elEIlww = eo('i','4hPf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let el7LxVu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elH8vVD = eo('div',null,null,`class`,`trackApply card`);
let el8B9Ap = eo('div',null,null,`class`,`card-body`);
let el5TP0h = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let eliAzaT = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elVyNEL = eo('span',null,null,`class`,`trackSingleMeta`);
let elkMVgV = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndSUzX = component.track.topics.length === 1;
this.setState('stZkP4U', cndSUzX);
let cnd05cS = !(cndSUzX);
this.setState('stpVfTg', cnd05cS);
if (cndSUzX) { 
let elVgTw6 = eo('span','He1f',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let ele9RBW = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elBIbLQ = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmpn8py = this._lc('c_Pg05G6t', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cnd11xX = component.track.cost ==0;
this.setState('stWK6VV', cnd11xX);
if (cnd11xX) { 
let el6g8f_ = eo('strong','uuhf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndcW5z = component.confirmSubscribe;
this.setState('stjldWp', cndcW5z);
if (cndcW5z) { 
let cmpCJe5 = this._lc('cWUGj9VZN', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stjldWp'});
}let ellXZuA = eo('div',null,null,`class`,`text-center`);
let cndm4A8 = ! component.track.subscribed && ! component.isSubscribing;
this.setState('stPO54I', cndm4A8);
let cndEqKZ = component.isSubscribing;
this.setState('stDQ14c', cndEqKZ);
let cndcitI = !(cndm4A8||cndEqKZ);
this.setState('stDQ0VU', cndcitI);
if (cndm4A8) { 
let elB4Mys = eo('button','Czrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cndEqKZ) { 
let cmpx2Fy = this._lc('c8xMfxSoF', {parent:component,parentTop:layout,state:'stDQ14c'});
}else { 
let eloXgcE = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elWi_YB = eo('i',null,null,`class`,`${fas('check')} subscribed-icon icon`);
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