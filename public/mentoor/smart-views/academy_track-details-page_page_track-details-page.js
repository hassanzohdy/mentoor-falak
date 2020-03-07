_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cGg7NnOhw:'flk-spinner',cBzMFNzdZ:'flk-time-ago',cNQcoClFW:'flk-facebook-share',cvZ94nlqt:'gold-icon',c2UWg7M2B:'gold-icon',cwVDQUAmg:'markdown-input',cwlU86qAn:'markdown-input',cjnKlOyp2:'moderate-track',cUuBuxuVn:'gold-icon',cofYZEiX7:'gold-icon',cAH2ja3il:'flk-alert',co7X8aKds:'flk-spinner',cZUO0ZxeR:'layout'},
                render: function (component) {
                    let cmpTzgM = this._lc('cZUO0ZxeR', {parent:component,content:(layout) => {let cndXjXo = Is.empty(component.track);
this.setState('st1GpMU', cndXjXo);
let cndb0nT = !(cndXjXo);
this.setState('st6ZUJp', cndb0nT);
if (cndXjXo) { 
let cmpH0Ds = this._lc('cGg7NnOhw', {parent:component,parentTop:layout,state:'st1GpMU'});
}else { 
let elbRygf = eo('div',null,null,`class`,`row oneTrack`);
let el0_0dG = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let elLhqal = eo('header',null,null,`class`,`trackImage`);
let elpWMGD = eo('div',null,null,`class`,`media`);
let elgeRVo = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let elvFInL = eo('div',null,null,`class`,`media-body`);
let el2sS20 = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let elW8Ybq = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let el6AkFS = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmpgkXx = this._lc('cBzMFNzdZ', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'st6ZUJp'});
ec('small');
let cmp31ni = this._lc('cNQcoClFW', {parent:component,parentTop:layout,state:'st6ZUJp'});
ec('div');
ec('div');
ec('header');
let elrbYCq = eo('section',null,null,`class`,`trackTasks`);
let cndBTR0 = component.suggestTopic === false;
this.setState('stCd3iB', cndBTR0);
let cnd137e = !(cndBTR0);
this.setState('stL1A3V', cnd137e);
if (cndBTR0) { 
let cndpFIk = component.topicSuggestionHasBeenSent;
this.setState('sticovP', cndpFIk);
if (cndpFIk) { 
let elWwEri = eo('p','ByVf',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let elestUo = eo('div',null,null,`class`,`trackDescription`);
let elGE8TF = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cndREf0 = component.track.topics.length > 0;
this.setState('st8t8gW', cndREf0);
if (cndREf0) { 
let elELWHF = eo('header','PNpf',null,`class`,`metaInfo`);
let elbExWU = eo('h3','Y4xf',null,`class`,`text-muted bold`);
let elImXhh = eo('i','CEMf',null,`class`,`${fas('list')} mr-2 icon`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let elQvabV = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iisqis = 'qN5vVxW' + i;
let elPrbe5 = eo('li','4IZD8iDW6xG3' + i+iisqis,null,`class`,`list-group-item ${cls(component.styleTopicBasedOnUserAnswer(topic))}`);
let elmCkCD = eo('i','ix3ff'+iisqis,null,`class`,`${fas('file')} font-weight-normal topicIcon icon`);
ec('i');
let elwBZEZ = eo('a','V2Gff'+iisqis,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let el35kx0 = eo('h3','ENxff'+iisqis,null,`class`,`topicTitle`);
let elANi_W = eo('span','Wq0ff'+iisqis,null,`class`,`title`);
text( topic.title );
ec('span');
let cnd5o8h = topic.answered && topic.userAnswer;
this.setState('st0PHsL', cnd5o8h);
if (cnd5o8h) { 
let elZhNgx = eo('span','hdDff'+iisqis,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1 ${cls(answerStatusClass(component.myTopicAnswer(topic).status))}`);
text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let el7jLKL = eo('p','8MLff'+iisqis,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let el1XAsw = eo('span','3YOff'+iisqis,null,`class`,`topicPrize`);
let cmpDXN6 = this._lc('cvZ94nlqt', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iisqis});
let cndrE96 = ! Is.empty(topic.answers);
this.setState('stEf25M', cndrE96);
if (cndrE96) { 
let eld3fic = eo('div','J0Gff'+iisqis,null,`title`,`${trans(`Answers`)}`);
let el6SRDz = eo('span','WLPff'+iisqis,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let elH86Th = eo('i','UrSff'+iisqis,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elixK2F = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let elU875F = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let eltX_BH = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmpY0km = this._lc('c2UWg7M2B', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'stL1A3V'});
ec('p');
let el3uU9y = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let el88NXA = eo('ul');
let elXUlR3 = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let elRXzLR = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let el9pJSz = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let el_64Ug = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! el_64Ug.formHandler) {
                    window.cfrmdlr = el_64Ug.formHandler = new FormHandler(el_64Ug, component);
                } else {
                    window.cfrmdlr = el_64Ug.formHandler;
                }
            let elNR0iB = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_64Ug.formHandler.getError(`title`) })}`);
let el8bcbu = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elggg2N = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eli4MrV = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_64Ug.formHandler.addError(`title`, 'required', trans('validation.required'));}return el_64Ug.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eli4MrV.value = fval(component.suggestTopicTitle);
let cndb7vb = el_64Ug.formHandler.getError(`title`);
this.setState('stg_NmH', cndb7vb);
if (cndb7vb) { 
let elyw78R = eo('div','_i2f',null,`class`,`alert alert-danger`);
text(el_64Ug.formHandler.getError(`title`));
ec('div');
}ec('div');
let elJlxbi = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let el1GXX_ = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let cmp7RWu = this._lc('cwVDQUAmg', {parent:component,parentTop:layout,attrs:{name:`${(`shortDescription`).toInputName()}`,placeholder:`${trans(`Short description about the topic (Appears in the topics list)`)}`,type:'textarea',required:'',label:'Description'}});
let cmpTwUo = this._lc('cwlU86qAn', {parent:component,parentTop:layout,attrs:{name:`${(`quest`).toInputName()}`,placeholder:`${trans(`Quest info (markdown is supported)`)}`,label:'Quest Info',type:'textarea'}});
let elJdcRi = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_64Ug.formHandler.getError(`reward`) })}`);
let elOBKFk = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let elZNUjF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elONC_A = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_64Ug.formHandler.addError(`reward`, 'required', trans('validation.required'));}return el_64Ug.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndTI0X = el_64Ug.formHandler.getError(`reward`);
this.setState('stH5Ygh', cndTI0X);
if (cndTI0X) { 
let elUKNXs = eo('div','hmsf',null,`class`,`alert alert-danger`);
text(el_64Ug.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elcUcsl = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let elH2Cf6 = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmpw2LL = this._lc('cjnKlOyp2', {parent:component,parentTop:layout,props:{track:component.track}});
let cndOlOl = component.track.subscribed;
this.setState('stcorNU', cndOlOl);
if (cndOlOl) { 
let elvFUiR = eo('div','_8Nf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cndYEzM = component.suggestTopic === false;
this.setState('stnZmeS', cndYEzM);
let cndd50O = !(cndYEzM);
this.setState('stfjDwY', cndd50O);
if (cndYEzM) { 
let elMCam9 = eo('button','jOOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmp6GQx = this._lc('cUuBuxuVn', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'stnZmeS'});
let elpCBrW = eo('strong','lcFf',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndCPac = component.userCanSuggestNewTopics === false;
this.setState('stSq2k_', cndCPac);
if (cndCPac) { 
let ele6SkQ = eo('small','UeOf',null,`class`,`d-block yellow-text`);
let elo5L_P = eo('i','Zq1f',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let eliH4gu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elXI1JC = eo('div',null,null,`class`,`trackApply card`);
let elkRaUF = eo('div',null,null,`class`,`card-body`);
let elc9iqZ = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let elqoSn7 = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elU7RvE = eo('span',null,null,`class`,`trackSingleMeta`);
let elWyG7N = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndz97D = component.track.topics.length === 1;
this.setState('stbcoyG', cndz97D);
let cndds2Y = !(cndz97D);
this.setState('stkRCId', cndds2Y);
if (cndz97D) { 
let elCr7y_ = eo('span','C5_f',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let elOE8Hg = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let elYO9PM = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmpzS1m = this._lc('cofYZEiX7', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cndkSAh = component.track.cost ==0;
this.setState('stnxhFv', cndkSAh);
if (cndkSAh) { 
let elBAbV1 = eo('strong','ESYf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndim4F = component.confirmSubscribe;
this.setState('stIewOd', cndim4F);
if (cndim4F) { 
let cmp5u4d = this._lc('cAH2ja3il', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stIewOd'});
}let elu5RRX = eo('div',null,null,`class`,`text-center`);
let cndyMNR = ! component.track.subscribed && ! component.isSubscribing;
this.setState('stLaUuT', cndyMNR);
let cndrFiP = component.isSubscribing;
this.setState('stYHDNo', cndrFiP);
let cndDM_8 = !(cndyMNR||cndrFiP);
this.setState('stpOCnW', cndDM_8);
if (cndyMNR) { 
let elDKBs7 = eo('button','Ruzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cndrFiP) { 
let cmpG8im = this._lc('co7X8aKds', {parent:component,parentTop:layout,state:'stYHDNo'});
}else { 
let elMe7nG = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let elY75Bk = eo('i',null,null,`class`,`${fas('check')} subscribed-icon icon`);
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