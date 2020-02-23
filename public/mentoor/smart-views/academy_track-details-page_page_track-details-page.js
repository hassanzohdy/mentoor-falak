_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cmn_pMjDT:'flk-spinner',c_TYubzS3:'flk-time-ago',cElvQUCgF:'flk-facebook-share',cEPQ0VZl1:'gold-icon',cq2FjwOlp:'gold-icon',cCRmXXLyF:'markdown-input',cTQ4PKLwC:'markdown-input',c9usQnbxD:'moderate-track',cX5nNx3Zl:'gold-icon',czEUPMiTZ:'gold-icon',cs2IB4QD6:'flk-alert',c_FCWgXNv:'flk-spinner',cwEBy5elY:'layout'},
                render: function (component) {
                    let cmpFP1K = this._lc('cwEBy5elY', {parent:component,content:(layout) => {let cnd0GD6 = Is.empty(component.track);
this.setState('stjQt_t', cnd0GD6);
let cndOdKp = !(cnd0GD6);
this.setState('stL7hVf', cndOdKp);
if (cnd0GD6) { 
let cmpM7xw = this._lc('cmn_pMjDT', {parent:component,parentTop:layout,state:'stjQt_t'});
}else { 
let eltyR2e = eo('div',null,null,`class`,`row oneTrack`);
let elNBcEm = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let elnl77d = eo('header',null,null,`class`,`trackImage`);
let elunKRZ = eo('div',null,null,`class`,`media`);
let elpnrUs = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let eluib9V = eo('div',null,null,`class`,`media-body`);
let eleOWjY = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let el_WeGL = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elh_cHS = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmpFP6V = this._lc('c_TYubzS3', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'stL7hVf'});
ec('small');
let cmp0hGU = this._lc('cElvQUCgF', {parent:component,parentTop:layout,state:'stL7hVf'});
ec('div');
ec('div');
ec('header');
let elOZ6_B = eo('section',null,null,`class`,`trackTasks`);
let cndpbXY = component.suggestTopic === false;
this.setState('sto6NOI', cndpbXY);
let cndme3L = !(cndpbXY);
this.setState('st45jAL', cndme3L);
if (cndpbXY) { 
let cndSNu6 = component.topicSuggestionHasBeenSent;
this.setState('stjSTxh', cndSNu6);
if (cndSNu6) { 
let elCc30t = eo('p','jtBf',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let elYNhb0 = eo('div',null,null,`class`,`trackDescription`);
let elziDji = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cnd5jtY = component.track.topics.length > 0;
this.setState('stYhEtR', cnd5jtY);
if (cnd5jtY) { 
let elbOYjC = eo('header','fdwf',null,`class`,`metaInfo`);
let elFrrsU = eo('h3','XEBf',null,`class`,`text-muted bold`);
let el5zTUi = eo('i','vIff',null,`class`,`${fas('list') + ' mr-2 icon'}`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let el2Fdas = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iiekAE = 'hbBP481' + i;
let elw5m06 = eo('li','ttxLjwBIeDp_' + i+iiekAE,null,`class`,`list-group-item`);
elw5m06.cls = component.styleTopicBasedOnUserAnswer(topic);

            for (let className in elw5m06.cls) {
                elw5m06.classList.toggle(className, elw5m06.cls[className]);
            }  
            let el8aPYW = eo('i','goVff'+iiekAE,null,`class`,`${fas('file') + ' font-weight-normal topicIcon icon'}`);
ec('i');
let el5M5IW = eo('a','ehQff'+iiekAE,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elwQFN3 = eo('h3','mFHff'+iiekAE,null,`class`,`topicTitle`);
let elbR95F = eo('span','v9cff'+iiekAE,null,`class`,`title`);
text( topic.title );
ec('span');
let cndkXjk = topic.answered && topic.userAnswer;
this.setState('stp6EhM', cndkXjk);
if (cndkXjk) { 
let elvbISj = eo('span','b5Off'+iiekAE,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elvbISj.cls = answerStatusClass(component.myTopicAnswer(topic).status);

            for (let className in elvbISj.cls) {
                elvbISj.classList.toggle(className, elvbISj.cls[className]);
            }  
            text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let elYX859 = eo('p','lNwff'+iiekAE,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let elP_wgx = eo('span','zDqff'+iiekAE,null,`class`,`topicPrize`);
let cmpKuAd = this._lc('cEPQ0VZl1', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iiekAE});
let cndVNYD = ! Is.empty(topic.answers);
this.setState('stFU8vZ', cndVNYD);
if (cndVNYD) { 
let elK1XyP = eo('div','rPiff'+iiekAE,null,`title`,`${trans(`Answers`)}`);
let elEM6Ke = eo('span','anyff'+iiekAE,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let elRog_u = eo('i','Chlff'+iiekAE,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elhXEy3 = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let elVNSD8 = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let elQSFOZ = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpcfVY = this._lc('cq2FjwOlp', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'st45jAL'});
ec('p');
let elUhHzG = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let el8rjN4 = eo('ul');
let elgOhWH = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let elByL7o = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let el9MTO8 = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let elPCgxs = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! elPCgxs.formHandler) {
                    window.cfrmdlr = elPCgxs.formHandler = new FormHandler(elPCgxs, component);
                } else {
                    window.cfrmdlr = elPCgxs.formHandler;
                }
            let elKbzel = eo('div',null,null,`class`,`form-group`);
elKbzel.cls = {'group-error': !!elPCgxs.formHandler.getError(`title`) };

            for (let className in elKbzel.cls) {
                elKbzel.classList.toggle(className, elKbzel.cls[className]);
            }  
            let eloFqho = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elD6u_e = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1EQBg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPCgxs.formHandler.addError(`title`, 'required', trans('validation.required'));}return elPCgxs.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el1EQBg.value = fval(component.suggestTopicTitle);
let cndaCgz = elPCgxs.formHandler.getError(`title`);
this.setState('stsFV6E', cndaCgz);
if (cndaCgz) { 
let elAlv27 = eo('div','e2if',null,`class`,`alert alert-danger`);
text(elPCgxs.formHandler.getError(`title`));
ec('div');
}ec('div');
let elQFj9S = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let elcoSK2 = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let cmpCZ6v = this._lc('cCRmXXLyF', {parent:component,parentTop:layout,attrs:{name:`${(`shortDescription`).toInputName()}`,placeholder:`${trans(`Short description about the topic (Appears in the topics list)`)}`,type:'textarea',required:'',label:'Description'}});
let cmp8AiM = this._lc('cTQ4PKLwC', {parent:component,parentTop:layout,attrs:{name:`${(`quest`).toInputName()}`,placeholder:`${trans(`Quest info (markdown is supported)`)}`,label:'Quest Info',type:'textarea'}});
let elyIdMt = eo('div',null,null,`class`,`form-group`);
elyIdMt.cls = {'group-error': !!elPCgxs.formHandler.getError(`reward`) };

            for (let className in elyIdMt.cls) {
                elyIdMt.classList.toggle(className, elyIdMt.cls[className]);
            }  
            let eluARWT = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let elCNJKp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloQxk5 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPCgxs.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elPCgxs.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndsXjF = elPCgxs.formHandler.getError(`reward`);
this.setState('stRC3HZ', cndsXjF);
if (cndsXjF) { 
let elyj35S = eo('div','6FPf',null,`class`,`alert alert-danger`);
text(elPCgxs.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elaeEG2 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let elIdMin = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmpZgzD = this._lc('c9usQnbxD', {parent:component,parentTop:layout,props:{track:component.track}});
let cndIdyD = component.track.subscribed;
this.setState('stPmiIA', cndIdyD);
if (cndIdyD) { 
let elx3spn = eo('div','oCDf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cndXcLe = component.suggestTopic === false;
this.setState('ste3Veb', cndXcLe);
let cndrM8D = !(cndXcLe);
this.setState('stRk3xU', cndrM8D);
if (cndXcLe) { 
let eliYbR1 = eo('button','pzOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmpNW9_ = this._lc('cX5nNx3Zl', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'ste3Veb'});
let elXvzWp = eo('strong','Fpkf',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndViBI = component.userCanSuggestNewTopics === false;
this.setState('sto6CLy', cndViBI);
if (cndViBI) { 
let elhidgy = eo('small','nEwf',null,`class`,`d-block yellow-text`);
let elBjx03 = eo('i','2zEf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let eljaqur = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elqy1t2 = eo('div',null,null,`class`,`trackApply card`);
let elaHmOo = eo('div',null,null,`class`,`card-body`);
let elfuGfT = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let elD7Ceu = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elkjTLc = eo('span',null,null,`class`,`trackSingleMeta`);
let el8pBMC = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndiyWz = component.track.topics.length === 1;
this.setState('stTEKKR', cndiyWz);
let cndRR0N = !(cndiyWz);
this.setState('stawSOC', cndRR0N);
if (cndiyWz) { 
let el6PClb = eo('span','D1wf',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let el5z9c5 = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elT8sJv = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmpaCyE = this._lc('czEUPMiTZ', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cndU4dt = component.track.cost ==0;
this.setState('stFwsou', cndU4dt);
if (cndU4dt) { 
let eliaHED = eo('strong','fEBf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndf2ZW = component.confirmSubscribe;
this.setState('stmJkQR', cndf2ZW);
if (cndf2ZW) { 
let cmp10Uz = this._lc('cs2IB4QD6', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stmJkQR'});
}let elm2Z7c = eo('div',null,null,`class`,`text-center`);
let cndgLRt = ! component.track.subscribed && ! component.isSubscribing;
this.setState('stkMCuc', cndgLRt);
let cnd_hIe = component.isSubscribing;
this.setState('stkgTvP', cnd_hIe);
let cnd8ejR = !(cndgLRt||cnd_hIe);
this.setState('strnnRZ', cnd8ejR);
if (cndgLRt) { 
let elzSc1k = eo('button','ZNUf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cnd_hIe) { 
let cmpsLQI = this._lc('c_FCWgXNv', {parent:component,parentTop:layout,state:'stkgTvP'});
}else { 
let elPLRYO = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elqX6Ub = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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