_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cx5qdNfNc:'flk-spinner',cHvRafxaF:'flk-time-ago',csQN7rR4S:'flk-facebook-share',cVMYiYSZQ:'gold-icon',c6NtBmwfa:'gold-icon',cEqK0yBV5:'moderate-track',cRrWs4VGT:'gold-icon',c8DnYDxen:'gold-icon',chjSeg5pP:'flk-alert',c4KQ_I4Vx:'flk-spinner',cCPBwCg07:'layout'},
                render: function (component) {
                    let cmpNq2J = this._lc('cCPBwCg07', {parent:component,content:(layout) => {let cndeQgx = Is.empty(component.track);
this.setState('stVKd9N', cndeQgx);
let cndIzVy = !(cndeQgx);
this.setState('stmXmTb', cndIzVy);
if (cndeQgx) { 
let cmpJogO = this._lc('cx5qdNfNc', {parent:component,parentTop:layout,state:'stVKd9N'});
}else { 
let elyhcXi = eo('div',null,null,`class`,`row oneTrack`);
let elPGMXG = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let elz3azY = eo('header',null,null,`class`,`trackImage`);
let ele81TC = eo('div',null,null,`class`,`media`);
let elel0ep = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let elFmPxc = eo('div',null,null,`class`,`media-body`);
let elF7ExS = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let elvHgkC = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elQiOWj = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmpS7um = this._lc('cHvRafxaF', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'stmXmTb'});
ec('small');
let cmprLrv = this._lc('csQN7rR4S', {parent:component,parentTop:layout,state:'stmXmTb'});
ec('div');
ec('div');
ec('header');
let elk0eJe = eo('section',null,null,`class`,`trackTasks`);
let cnd0vat = component.suggestTopic === false;
this.setState('stZmF1_', cnd0vat);
let cnd2KO6 = !(cnd0vat);
this.setState('stZGbyH', cnd2KO6);
if (cnd0vat) { 
let cndLbcg = component.topicSuggestionHasBeenSent;
this.setState('stU6NRI', cndLbcg);
if (cndLbcg) { 
let ela4gcl = eo('p','yOzf',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let elJCMjL = eo('div',null,null,`class`,`trackDescription`);
let elFsbhJ = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cnd2E3O = component.track.topics.length > 0;
this.setState('st9EnoK', cnd2E3O);
if (cnd2E3O) { 
let el2Mclk = eo('header','DYvf',null,`class`,`metaInfo`);
let elJnibW = eo('h3','GM7f',null,`class`,`text-muted bold`);
let elX9MCw = eo('i','BCrf',null,`class`,`${fas('list') + ' mr-2 icon'}`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let elyl4zK = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iiuAc5 = 'chrv2dr' + i;
let elV1wOn = eo('li','7X22vaN3DG1r' + i+iiuAc5,null,`class`,`list-group-item`);
elV1wOn.cls = component.styleTopicBasedOnUserAnswer(topic);

            for (let className in elV1wOn.cls) {
                elV1wOn.classList.toggle(className, elV1wOn.cls[className]);
            }  
            let elYbDDj = eo('i','5zPff'+iiuAc5,null,`class`,`${fas('file') + ' font-weight-normal topicIcon icon'}`);
ec('i');
let elxPeMw = eo('a','N86ff'+iiuAc5,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elWRNqh = eo('h3','bcuff'+iiuAc5,null,`class`,`topicTitle`);
let elX693V = eo('span','Crgff'+iiuAc5,null,`class`,`title`);
text( topic.title );
ec('span');
let cndQdZo = topic.answered && topic.userAnswer;
this.setState('stVE9nv', cndQdZo);
if (cndQdZo) { 
let elpr5nj = eo('span','Uksff'+iiuAc5,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elpr5nj.cls = answerStatusClass(component.myTopicAnswer(topic).status);

            for (let className in elpr5nj.cls) {
                elpr5nj.classList.toggle(className, elpr5nj.cls[className]);
            }  
            text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let elTJI9n = eo('p','AYkff'+iiuAc5,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let elV0O1F = eo('span','VyGff'+iiuAc5,null,`class`,`topicPrize`);
let cmpTtg_ = this._lc('cVMYiYSZQ', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iiuAc5});
let cndqH4x = ! Is.empty(topic.answers);
this.setState('stRgm5Q', cndqH4x);
if (cndqH4x) { 
let elAs8UR = eo('div','1Sgff'+iiuAc5,null,`title`,`${trans(`Answers`)}`);
let elddTza = eo('span','u9zff'+iiuAc5,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let el4VGN_ = eo('i','Adgff'+iiuAc5,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elmUhcj = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let elN8Zvb = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let el_mmss = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpi7uI = this._lc('c6NtBmwfa', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'stZGbyH'});
ec('p');
let el0E7dW = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let el9HY4i = eo('ul');
let elQbb6H = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let eleR44q = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let elhTqAs = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let elDH0pK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! elDH0pK.formHandler) {
                    window.cfrmdlr = elDH0pK.formHandler = new FormHandler(elDH0pK, component);
                } else {
                    window.cfrmdlr = elDH0pK.formHandler;
                }
            let elcG0RL = eo('div',null,null,`class`,`form-group`);
elcG0RL.cls = {'group-error': !!elDH0pK.formHandler.getError(`title`) };

            for (let className in elcG0RL.cls) {
                elcG0RL.classList.toggle(className, elcG0RL.cls[className]);
            }  
            let el5vllD = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elgGBoC = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8HT4r = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDH0pK.formHandler.addError(`title`, 'required', trans('validation.required'));}return elDH0pK.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el8HT4r.value = fval(component.suggestTopicTitle);
let cndmooJ = elDH0pK.formHandler.getError(`title`);
this.setState('stj9Onx', cndmooJ);
if (cndmooJ) { 
let elIXkX6 = eo('div','uMpf',null,`class`,`alert alert-danger`);
text(elDH0pK.formHandler.getError(`title`));
ec('div');
}ec('div');
let elLL2Qk = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let elBiams = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let elAdBu9 = eo('div',null,null,`class`,`form-group`);
elAdBu9.cls = {'group-error': !!elDH0pK.formHandler.getError(`shortDescription`) };

            for (let className in elAdBu9.cls) {
                elAdBu9.classList.toggle(className, elAdBu9.cls[className]);
            }  
            let elIFRX2 = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short description about the topic (Appears in the topics list)'));
let elL4vkf = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elrYNVS = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDH0pK.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elDH0pK.formHandler.removeError(`shortDescription`);}]},`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description about the topic (Appears in the topics list)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
ec('textarea');
let cndasKb = elDH0pK.formHandler.getError(`shortDescription`);
this.setState('stLq1fk', cndasKb);
if (cndasKb) { 
let elWCXHh = eo('div','OsSf',null,`class`,`alert alert-danger`);
text(elDH0pK.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elH0zOK = eo('div',null,null,`class`,`form-group`);
elH0zOK.cls = {'group-error': !!elDH0pK.formHandler.getError(`quest`) };

            for (let className in elH0zOK.cls) {
                elH0zOK.classList.toggle(className, elH0zOK.cls[className]);
            }  
            let el0nTDr = eo('label',null,null,`for`,`quest`);
text(trans('Quest info (markdown is supported)'));
let elbf3wQ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCECFM = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDH0pK.formHandler.addError(`quest`, 'required', trans('validation.required'));}return elDH0pK.formHandler.removeError(`quest`);}]},`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest info (markdown is supported)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`quest`);
ec('textarea');
let cndBVh6 = elDH0pK.formHandler.getError(`quest`);
this.setState('stp8MXB', cndBVh6);
if (cndBVh6) { 
let elfad89 = eo('div','nwIf',null,`class`,`alert alert-danger`);
text(elDH0pK.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elRpIen = eo('div',null,null,`class`,`form-group`);
elRpIen.cls = {'group-error': !!elDH0pK.formHandler.getError(`reward`) };

            for (let className in elRpIen.cls) {
                elRpIen.classList.toggle(className, elRpIen.cls[className]);
            }  
            let elEjCL5 = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let elesxRD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elji2K6 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDH0pK.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elDH0pK.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndmtTw = elDH0pK.formHandler.getError(`reward`);
this.setState('stTn9Bv', cndmtTw);
if (cndmtTw) { 
let el_5AGL = eo('div','_rYf',null,`class`,`alert alert-danger`);
text(elDH0pK.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elW8lnx = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let el8cQFG = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmp9TyV = this._lc('cEqK0yBV5', {parent:component,parentTop:layout,props:{track:component.track}});
let cndVv8Y = component.track.subscribed;
this.setState('stAy_aw', cndVv8Y);
if (cndVv8Y) { 
let elTOmss = eo('div','Ydtf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cndtomB = component.suggestTopic === false;
this.setState('st8LVSj', cndtomB);
let cndTRMD = !(cndtomB);
this.setState('stshQZf', cndTRMD);
if (cndtomB) { 
let eldpu4D = eo('button','VCRf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmpSbuq = this._lc('cRrWs4VGT', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'st8LVSj'});
let elEMahf = eo('strong','FfOf',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndYJSP = component.userCanSuggestNewTopics === false;
this.setState('stqQGtK', cndYJSP);
if (cndYJSP) { 
let ely38rU = eo('small','Vhkf',null,`class`,`d-block yellow-text`);
let elvG93Y = eo('i','LE9f',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let el9trKK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elWYmf_ = eo('div',null,null,`class`,`trackApply card`);
let eliOHK0 = eo('div',null,null,`class`,`card-body`);
let elfeMG8 = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let elrnidJ = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elQdF6S = eo('span',null,null,`class`,`trackSingleMeta`);
let eljmWcy = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndXTSh = component.track.topics.length === 1;
this.setState('stdrOdv', cndXTSh);
let cndJSIh = !(cndXTSh);
this.setState('stNzZv5', cndJSIh);
if (cndXTSh) { 
let elkDHnZ = eo('span','06Gf',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let el1eoa4 = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elfXiHl = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmpprD2 = this._lc('c8DnYDxen', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cndozxg = component.track.cost ==0;
this.setState('st36KFT', cndozxg);
if (cndozxg) { 
let elaTVpH = eo('strong','M8Wf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndWotd = component.confirmSubscribe;
this.setState('stiiiXT', cndWotd);
if (cndWotd) { 
let cmpXHk7 = this._lc('chjSeg5pP', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stiiiXT'});
}let eloy7Z9 = eo('div',null,null,`class`,`text-center`);
let cndpmOR = ! component.track.subscribed && ! component.isSubscribing;
this.setState('stF3hsh', cndpmOR);
let cnd93O8 = component.isSubscribing;
this.setState('stUiXnJ', cnd93O8);
let cndx_zp = !(cndpmOR||cnd93O8);
this.setState('sthOkDO', cndx_zp);
if (cndpmOR) { 
let elq8Wzf = eo('button','vlKf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cnd93O8) { 
let cmpoDEq = this._lc('c4KQ_I4Vx', {parent:component,parentTop:layout,state:'stUiXnJ'});
}else { 
let elVfO5y = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elJHxw1 = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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