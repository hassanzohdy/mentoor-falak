_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cEH_2NkIx:'flk-spinner',cqAuM2QC0:'flk-time-ago',cRbWBTu5l:'flk-facebook-share',cUCp7iTW2:'gold-icon',cLLWo04mV:'gold-icon',cVJaqlXcu:'markdown-input',cMCnarRUE:'markdown-input',c72yJrW79:'moderate-track',cZNFGdsDg:'gold-icon',cXPzBhvI1:'gold-icon',cwR575a7g:'flk-alert',c163IOQmv:'flk-spinner',cnUs21qEV:'layout'},
                render: function (component) {
                    let cmpCQQo = this._lc('cnUs21qEV', {parent:component,content:(layout) => {let cndnhJn = Is.empty(component.track);
this.setState('stAKg49', cndnhJn);
let cndUtI8 = !(cndnhJn);
this.setState('stxq6V6', cndUtI8);
if (cndnhJn) { 
let cmp9b2z = this._lc('cEH_2NkIx', {parent:component,parentTop:layout,state:'stAKg49'});
}else { 
let elujjCq = eo('div',null,null,`class`,`row oneTrack`);
let elXEyZh = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let elf78Kz = eo('header',null,null,`class`,`trackImage`);
let elXSaJ5 = eo('div',null,null,`class`,`media`);
let eluM4f4 = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let elnDvFr = eo('div',null,null,`class`,`media-body`);
let eljYja2 = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let elxotPC = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elFK7k4 = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmpvMln = this._lc('cqAuM2QC0', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'stxq6V6'});
ec('small');
let cmpAgwc = this._lc('cRbWBTu5l', {parent:component,parentTop:layout,state:'stxq6V6'});
ec('div');
ec('div');
ec('header');
let elLg2sx = eo('section',null,null,`class`,`trackTasks`);
let cnday__ = component.suggestTopic === false;
this.setState('stm6e4U', cnday__);
let cndprxX = !(cnday__);
this.setState('stdGSiN', cndprxX);
if (cnday__) { 
let cndTk3b = component.topicSuggestionHasBeenSent;
this.setState('stw_3Ok', cndTk3b);
if (cndTk3b) { 
let elPkc_y = eo('p','5N2f',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let elc12tL = eo('div',null,null,`class`,`trackDescription`);
let elxfioC = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cndvvoJ = component.track.topics.length > 0;
this.setState('stGzBY_', cndvvoJ);
if (cndvvoJ) { 
let elZ87Zz = eo('header','_DUf',null,`class`,`metaInfo`);
let elSMnH5 = eo('h3','JClf',null,`class`,`text-muted bold`);
let el28dxl = eo('i','ScPf',null,`class`,`${fas('list')} mr-2 icon`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let elojq8A = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iioVlj = '15pbRoD' + i;
let el1rb5c = eo('li','jDCPBnLyD4dD' + i+iioVlj,null,`class`,`list-group-item ${cls(component.styleTopicBasedOnUserAnswer(topic))}`);
let elbwaZa = eo('i','yj6ff'+iioVlj,null,`class`,`${fas('file')} font-weight-normal topicIcon icon`);
ec('i');
let elw2uWx = eo('a','m6jff'+iioVlj,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elM0_E9 = eo('h3','z_Off'+iioVlj,null,`class`,`topicTitle`);
let elr5w1e = eo('span','m3Lff'+iioVlj,null,`class`,`title`);
text( topic.title );
ec('span');
let cndzW4T = topic.answered && topic.userAnswer;
this.setState('stn_7nh', cndzW4T);
if (cndzW4T) { 
let elnnjtq = eo('span','I95ff'+iioVlj,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1 ${cls(answerStatusClass(component.myTopicAnswer(topic).status))}`);
text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let elWJm78 = eo('p','3E2ff'+iioVlj,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let elXEhED = eo('span','tUTff'+iioVlj,null,`class`,`topicPrize`);
let cmp5Fel = this._lc('cUCp7iTW2', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iioVlj});
let cndF8ka = ! Is.empty(topic.answers);
this.setState('st7nwRI', cndF8ka);
if (cndF8ka) { 
let elkG654 = eo('div','umqff'+iioVlj,null,`title`,`${trans(`Answers`)}`);
let el110_J = eo('span','8vZff'+iioVlj,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let el9Av1r = eo('i','X0Gff'+iioVlj,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elCdYxp = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let ellJE_6 = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let elB_sJu = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpdY1s = this._lc('cLLWo04mV', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'stdGSiN'});
ec('p');
let elcyrWI = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let elG6Y7Y = eo('ul');
let elmies8 = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let elf9wDN = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let elziaif = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let elu7vhO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! elu7vhO.formHandler) {
                    window.cfrmdlr = elu7vhO.formHandler = new FormHandler(elu7vhO, component);
                } else {
                    window.cfrmdlr = elu7vhO.formHandler;
                }
            let el4444h = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elu7vhO.formHandler.getError(`title`) })}`);
let el96W7l = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elOExv4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljcxI6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elu7vhO.formHandler.addError(`title`, 'required', trans('validation.required'));}return elu7vhO.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eljcxI6.value = fval(component.suggestTopicTitle);
let cndnpoH = elu7vhO.formHandler.getError(`title`);
this.setState('stTw4xE', cndnpoH);
if (cndnpoH) { 
let elj8wYu = eo('div','hvgf',null,`class`,`alert alert-danger`);
text(elu7vhO.formHandler.getError(`title`));
ec('div');
}ec('div');
let elphPwm = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let elnf2S2 = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let cmpXwtK = this._lc('cVJaqlXcu', {parent:component,parentTop:layout,attrs:{name:`${(`shortDescription`).toInputName()}`,placeholder:`${trans(`Short description about the topic (Appears in the topics list)`)}`,type:'textarea',required:'',label:'Description'}});
let cmpMEht = this._lc('cMCnarRUE', {parent:component,parentTop:layout,attrs:{name:`${(`quest`).toInputName()}`,placeholder:`${trans(`Quest info (markdown is supported)`)}`,label:'Quest Info',type:'textarea'}});
let elb0c3w = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elu7vhO.formHandler.getError(`reward`) })}`);
let elaXQ4S = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let el2CF0D = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ely0xT_ = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elu7vhO.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elu7vhO.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndQRQ_ = elu7vhO.formHandler.getError(`reward`);
this.setState('stY8a5e', cndQRQ_);
if (cndQRQ_) { 
let elhL349 = eo('div','JShf',null,`class`,`alert alert-danger`);
text(elu7vhO.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elvUJlp = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let el6f9dv = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmp5DoQ = this._lc('c72yJrW79', {parent:component,parentTop:layout,props:{track:component.track}});
let cndSdaL = component.track.subscribed;
this.setState('stw0fOO', cndSdaL);
if (cndSdaL) { 
let elUT5gg = eo('div','ekYf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cndynsh = component.suggestTopic === false;
this.setState('st0dnef', cndynsh);
let cndNle4 = !(cndynsh);
this.setState('stz_HPM', cndNle4);
if (cndynsh) { 
let elAq2iv = eo('button','ql1f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmpybaI = this._lc('cZNFGdsDg', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'st0dnef'});
let elb_OaA = eo('strong','TQHf',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndsoAY = component.userCanSuggestNewTopics === false;
this.setState('stBYTIB', cndsoAY);
if (cndsoAY) { 
let elhV0nW = eo('small','OQif',null,`class`,`d-block yellow-text`);
let elvbImx = eo('i','Mdnf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let elhjhab = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elr1CtO = eo('div',null,null,`class`,`trackApply card`);
let elaB4e5 = eo('div',null,null,`class`,`card-body`);
let elOdKr7 = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let el7i5nH = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elFWvVW = eo('span',null,null,`class`,`trackSingleMeta`);
let elObtxG = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cnd0goe = component.track.topics.length === 1;
this.setState('st2fwE7', cnd0goe);
let cndW6AA = !(cnd0goe);
this.setState('st4V1U_', cndW6AA);
if (cnd0goe) { 
let ellHPNk = eo('span','6PCf',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let elGv8sx = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elQIvY7 = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmpag_t = this._lc('cXPzBhvI1', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cndwIQb = component.track.cost ==0;
this.setState('stVVGQL', cndwIQb);
if (cndwIQb) { 
let elZGjvr = eo('strong','28bf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cnd6g_X = component.confirmSubscribe;
this.setState('stZTZXV', cnd6g_X);
if (cnd6g_X) { 
let cmpZqMe = this._lc('cwR575a7g', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stZTZXV'});
}let elhwWkm = eo('div',null,null,`class`,`text-center`);
let cndAens = ! component.track.subscribed && ! component.isSubscribing;
this.setState('stnD4xP', cndAens);
let cndFCMu = component.isSubscribing;
this.setState('stSc6qQ', cndFCMu);
let cnd5euS = !(cndAens||cndFCMu);
this.setState('stBcHrI', cnd5euS);
if (cndAens) { 
let eliNciG = eo('button','upbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cndFCMu) { 
let cmpXmlv = this._lc('c163IOQmv', {parent:component,parentTop:layout,state:'stSc6qQ'});
}else { 
let elOyKSG = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let els7ycL = eo('i',null,null,`class`,`${fas('check')} subscribed-icon icon`);
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