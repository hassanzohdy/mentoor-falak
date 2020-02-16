_Component({
                selector: 'track-details-page',
                c: 'TrackDetailsPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['track','suggestTopic','topicSuggestionHasBeenSent','styleTopicBasedOnUserAnswer','myTopicAnswer','getTopicReward','openSuggestionSection','userCanSuggestNewTopics','confirmSubscribe','subscribeToTrack','isSubscribing','suggestNewTopic','suggestTopicTitle','isValidForm','isSubmittingTopicSuggestion'],
                children: {cXWVlzhxs:'flk-spinner',cYqRexQRk:'flk-time-ago',cTN5SeWuP:'flk-facebook-share',cEiqo08cv:'gold-icon',cEfxdiNep:'gold-icon',cfpsXUjt7:'moderate-track',cS8wdC854:'gold-icon',cLgxCXfQK:'gold-icon',crkvw4Ihu:'flk-alert',chPeSGoB2:'flk-spinner',cPnuSUyBP:'layout'},
                render: function (component) {
                    let cmpZYdH = this._lc('cPnuSUyBP', {parent:component,content:(layout) => {let cndr2VL = Is.empty(component.track);
this.setState('stWmRbH', cndr2VL);
let cndPUO7 = !(cndr2VL);
this.setState('stnUqWC', cndPUO7);
if (cndr2VL) { 
let cmpSqQt = this._lc('cXWVlzhxs', {parent:component,parentTop:layout,state:'stWmRbH'});
}else { 
let elLtBoJ = eo('div',null,null,`class`,`row oneTrack`);
let elDYFbY = eo('section',null,null,`class`,`col-lg-9 col-md-8 order-12 order-sm-1`);
let eliqWue = eo('header',null,null,`class`,`trackImage`);
let el3d08g = eo('div',null,null,`class`,`media`);
let el4PRKE = ev('img',null,null,`src`,`${component.track.image}`,`class`,`align-self-center mr-3`,`alt`,`track.name`);
let elelom8 = eo('div',null,null,`class`,`media-body`);
let elx1ajE = eo('h2',null,null,`class`,`mt-0 text-capitalize bold`);
text(trans(component.track.name));
ec('h2');
let eldh6S_ = eo('small',null,null,`class`,`text-muted d-block mt-2`);
let elS3cVG = eo('i',null,null,`class`,`ti ti-time`);
ec('i');
let cmp1Rmh = this._lc('cYqRexQRk', {parent:component,parentTop:layout,props:{timestamp:component.track.createdAt.timestamp},state:'stnUqWC'});
ec('small');
let cmpckgX = this._lc('cTN5SeWuP', {parent:component,parentTop:layout,state:'stnUqWC'});
ec('div');
ec('div');
ec('header');
let elAiYiE = eo('section',null,null,`class`,`trackTasks`);
let cndRu_j = component.suggestTopic === false;
this.setState('stuIAGk', cndRu_j);
let cndh5pc = !(cndRu_j);
this.setState('st_1B4x', cndh5pc);
if (cndRu_j) { 
let cndj6rZ = component.topicSuggestionHasBeenSent;
this.setState('stDYHH8', cndj6rZ);
if (cndj6rZ) { 
let eliyywP = eo('p','phYf',null,`class`,`green-text bold m-t-1`);
text(`Thank you for your efforts, we'll check it and see what you sent!.`);
ec('p');
}let elFO7E2 = eo('div',null,null,`class`,`trackDescription`);
let elwO2bC = eo('p');
text(trans(component.track.description));
ec('p');
ec('div');
let cndEmwC = component.track.topics.length > 0;
this.setState('stn95Dy', cndEmwC);
if (cndEmwC) { 
let el3pS0B = eo('header','Rerf',null,`class`,`metaInfo`);
let elZHDKp = eo('h3','PlXf',null,`class`,`text-muted bold`);
let elno5kI = eo('i','Gxyf',null,`class`,`${fas('list') + ' mr-2 icon'}`);
ec('i');
text(`Topics list`);
ec('h3');
ec('header');
}let elXlXdq = eo('ul',null,null,`class`,`list-group`);
for (let i in component.track.topics) {
let topic = component.track.topics[i]; 
 let iiltyt = 'rlMsJAy' + i;
let elBf1yF = eo('li','M0jOiv4HXp6O' + i+iiltyt,null,`class`,`list-group-item`);
elBf1yF.cls = component.styleTopicBasedOnUserAnswer(topic);

            for (let className in elBf1yF.cls) {
                elBf1yF.classList.toggle(className, elBf1yF.cls[className]);
            }  
            let elerBBB = eo('i','Mwlff'+iiltyt,null,`class`,`${fas('file') + ' font-weight-normal topicIcon icon'}`);
ec('i');
let el_tiyA = eo('a','zGNff'+iiltyt,null,`href`,`${URLS.topic(topic, component.track)}`,`class`,`topicTitleLink`);
let elSAXqJ = eo('h3','3tEff'+iiltyt,null,`class`,`topicTitle`);
let elTkWHk = eo('span','3shff'+iiltyt,null,`class`,`title`);
text( topic.title );
ec('span');
let cndrSLU = topic.answered && topic.userAnswer;
this.setState('st4xPZo', cndrSLU);
if (cndrSLU) { 
let elQBzx_ = eo('span','5e0ff'+iiltyt,null,`class`,`text-capitalize badge align-bottom ml-3 mb-1`);
elQBzx_.cls = answerStatusClass(component.myTopicAnswer(topic).status);

            for (let className in elQBzx_.cls) {
                elQBzx_.classList.toggle(className, elQBzx_.cls[className]);
            }  
            text( component.myTopicAnswer(topic).status );
ec('span');
}ec('h3');
ec('a');
let elNkM_Z = eo('p','_Gbff'+iiltyt,null,`class`,`description`);
text(topic.shortDescription);
ec('p');
let el0vMON = eo('span','7eGff'+iiltyt,null,`class`,`topicPrize`);
let cmpuODY = this._lc('cEiqo08cv', {parent:component,parentTop:layout,props:{coins:component.getTopicReward(topic)},insideLoop:true,index:"" +iiltyt});
let cndCqaS = ! Is.empty(topic.answers);
this.setState('stt9xsP', cndCqaS);
if (cndCqaS) { 
let el88JxH = eo('div','_xUff'+iiltyt,null,`title`,`${trans(`Answers`)}`);
let eljCTfF = eo('span','bLhff'+iiltyt,null,`class`,`bold mr-2`);
text(topic.answers.length);
ec('span');
let elWFOwe = eo('i','Ql5ff'+iiltyt,null,`class`,`far fa-comments`);
ec('i');
ec('div');
}ec('span');
ec('li');
}
ec('ul');
}else { 
let elm0cPO = eo('h1',null,null,`class`,`m-v-1 bold`);
text(`Topic suggestion`);
ec('h1');
let el9YaO_ = eo('p');
text(`You can suggest a topic to be included in the track topics list.`);
ec('p');
let elc2SGp = eo('p');
text(`Once the form is submitted, it will be previewed and checked.
    If the suggestion is approved, you'll receive`);
let cmptGEe = this._lc('cEfxdiNep', {parent:component,parentTop:layout,props:{coins:component.track.suggestTopic.reward},state:'st_1B4x'});
ec('p');
let el33_Q3 = eo('h3',null,null,`class`,`m-b-1 bold`);
text(`Notes before writing.`);
ec('h3');
let elHRX7G = eo('ul');
let el6SL8S = eo('li');
text(`Make sure the topic is not listed in the topics list.`);
ec('li');
let el1KxJW = eo('li');
text(`The topic MUST BE related to the track objectives only.`);
ec('li');
let elS_MGg = eo('li');
text(`The topic MUST BE the same level as the track, for example if the track is for beginners DO NOT add an advanced topic..`);
ec('li');
ec('ul');
let elf_eYu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.suggestNewTopic($el)}]});

                if (! elf_eYu.formHandler) {
                    window.cfrmdlr = elf_eYu.formHandler = new FormHandler(elf_eYu, component);
                } else {
                    window.cfrmdlr = elf_eYu.formHandler;
                }
            let elfWcs0 = eo('div',null,null,`class`,`form-group`);
elfWcs0.cls = {'group-error': !!elf_eYu.formHandler.getError(`title`) };

            for (let className in elfWcs0.cls) {
                elfWcs0.classList.toggle(className, elfWcs0.cls[className]);
            }  
            let eldbQ8D = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elxUXj0 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elgPnNU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.suggestTopicTitle = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elf_eYu.formHandler.addError(`title`, 'required', trans('validation.required'));}return elf_eYu.formHandler.removeError(`title`);}]},`value`,`${fval(component.suggestTopicTitle)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elgPnNU.value = fval(component.suggestTopicTitle);
let cnd8Jgp = elf_eYu.formHandler.getError(`title`);
this.setState('stoz7nj', cnd8Jgp);
if (cnd8Jgp) { 
let elGCyUA = eo('div','6ykf',null,`class`,`alert alert-danger`);
text(elf_eYu.formHandler.getError(`title`));
ec('div');
}ec('div');
let elNJqwV = ev('input',null,null,`name`,`${(`slug`).toInputName()}`,`type`,`hidden`,`value`,`${ seo(component.suggestTopicTitle) }`);
let elZgImk = ev('input',null,null,`name`,`${(`display`).toInputName()}`,`type`,`hidden`,`value`,`1`);
let elTpSsq = eo('div',null,null,`class`,`form-group`);
elTpSsq.cls = {'group-error': !!elf_eYu.formHandler.getError(`shortDescription`) };

            for (let className in elTpSsq.cls) {
                elTpSsq.classList.toggle(className, elTpSsq.cls[className]);
            }  
            let elejmDh = eo('label',null,null,`for`,`shortDescription`);
text(trans('Short description about the topic (Appears in the topics list)'));
let elOmzBA = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elv_kxa = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elf_eYu.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elf_eYu.formHandler.removeError(`shortDescription`);}]},`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description about the topic (Appears in the topics list)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`shortDescription`);
ec('textarea');
let cndWv0M = elf_eYu.formHandler.getError(`shortDescription`);
this.setState('stGDvgA', cndWv0M);
if (cndWv0M) { 
let el3EWkm = eo('div','NZqf',null,`class`,`alert alert-danger`);
text(elf_eYu.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let el2zOaF = eo('div',null,null,`class`,`form-group`);
el2zOaF.cls = {'group-error': !!elf_eYu.formHandler.getError(`quest`) };

            for (let className in el2zOaF.cls) {
                el2zOaF.classList.toggle(className, el2zOaF.cls[className]);
            }  
            let elBic06 = eo('label',null,null,`for`,`quest`);
text(trans('Quest info (markdown is supported)'));
let elnYasW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6QEKE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elf_eYu.formHandler.addError(`quest`, 'required', trans('validation.required'));}return elf_eYu.formHandler.removeError(`quest`);}]},`name`,`${(`quest`).toInputName()}`,`placeholder`,`${trans(`Quest info (markdown is supported)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`quest`);
ec('textarea');
let cndSLNe = elf_eYu.formHandler.getError(`quest`);
this.setState('stJPBSM', cndSLNe);
if (cndSLNe) { 
let elEZrpY = eo('div','GdXf',null,`class`,`alert alert-danger`);
text(elf_eYu.formHandler.getError(`quest`));
ec('div');
}ec('div');
let elXxFLL = eo('div',null,null,`class`,`form-group`);
elXxFLL.cls = {'group-error': !!elf_eYu.formHandler.getError(`reward`) };

            for (let className in elXxFLL.cls) {
                elXxFLL.classList.toggle(className, elXxFLL.cls[className]);
            }  
            let elnFp0P = eo('label',null,null,`for`,`reward`);
text(trans('Suggesting reward'));
let ely6i5x = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elt2wwX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elf_eYu.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elf_eYu.formHandler.removeError(`reward`);}]},`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`i.e 15000`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
let cndkZ2G = elf_eYu.formHandler.getError(`reward`);
this.setState('st49CAH', cndkZ2G);
if (cndkZ2G) { 
let el3p9o1 = eo('div','ZC6f',null,`class`,`alert alert-danger`);
text(elf_eYu.formHandler.getError(`reward`));
ec('div');
}ec('div');
let elCW6Yh = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSubmittingTopicSuggestion},`class`,`btn btn-secondary`);
text(`Send`);
ec('button');
ec('form');
}ec('section');
ec('section');
let elIxdnr = eo('div',null,null,`class`,`col-lg-3 col-md-4 order-1 order-sm-12`);
let cmpZzEI = this._lc('cfpsXUjt7', {parent:component,parentTop:layout,props:{track:component.track}});
let cndWY_0 = component.track.subscribed;
this.setState('st2FE6e', cndWY_0);
if (cndWY_0) { 
let elzFKWf = eo('div','poYf',null,`class`,`text-center bold`);
text(`Suggest a topic`);
let cndjv96 = component.suggestTopic === false;
this.setState('stwUC3b', cndjv96);
let cndfzN0 = !(cndjv96);
this.setState('st2Jw8e', cndfzN0);
if (cndjv96) { 
let elT3Oq1 = eo('button','X3Qf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openSuggestionSection()}]},`type`,`button`,`class`,`suggest-topic-btn`);
let cmpFaXf = this._lc('cS8wdC854', {parent:component,parentTop:layout,attrs:{class:'suggest-gold-icon'},state:'stwUC3b'});
let elLNhTJ = eo('strong','gh2f',null,`class`,`number-font`);
text(`+${ component.track.suggestTopic.reward.format() }`);
ec('strong');
let cndQaWu = component.userCanSuggestNewTopics === false;
this.setState('st24KBZ', cndQaWu);
if (cndQaWu) { 
let elCPQqr = eo('small','1G_f',null,`class`,`d-block yellow-text`);
let elX3QqV = eo('i','wV3f',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Requires ${ component.track.suggestTopic.requires } approved answers.`);
ec('small');
}ec('button');
}else { 
let elZwS5K = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.suggestTopic = false}]},`class`,`d-block blue-text bold m-auto`,`type`,`button`);
text(`Back`);
ec('button');
}ec('div');
}let elRhOHz = eo('div',null,null,`class`,`trackApply card`);
let eljCboX = eo('div',null,null,`class`,`card-body`);
let elKS6Ay = eo('div',null,null,`class`,`card-title bold`);
text(`Track summary`);
ec('div');
let elVgfW_ = eo('div',null,null,`class`,`trackMeta d-flex justify-content-between pt-4 pb-4`);
let elmhadf = eo('span',null,null,`class`,`trackSingleMeta`);
let elUAXAQ = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(component.track.topics.length);
let cndG71a = component.track.topics.length === 1;
this.setState('st_pLsQ', cndG71a);
let cndFdAD = !(cndG71a);
this.setState('styG7MN', cndFdAD);
if (cndG71a) { 
let elHI5mO = eo('span','HN1f',null,`class`,`m-l-1`);
text(`Topic`);
ec('span');
}else { 
let el290RR = eo('span',null,null,`class`,`m-l-1`);
text(`Topics`);
ec('span');
}ec('span');
let el2vHzA = eo('span',null,null,`title`,`${trans(`Cost`)}`,`class`,`trackSingleMeta`);
let cmpukwn = this._lc('cLgxCXfQK', {parent:component,parentTop:layout,props:{coins:component.track.cost}});
let cndOuEp = component.track.cost ==0;
this.setState('styhuUc', cndOuEp);
if (cndOuEp) { 
let elcCOAL = eo('strong','W8pf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('span');
ec('div');
let cndWAgF = component.confirmSubscribe;
this.setState('stYBXdu', cndWAgF);
if (cndWAgF) { 
let cmp0DYj = this._lc('crkvw4Ihu', {parent:component,parentTop:layout,events:{onconfirm:function(e) {let $el = this; component.subscribeToTrack()},onclose:function(e) {let $el = this; component.confirmSubscribe = false;}},attrs:{message:`Are you sure you want to subscribe to ${ component.track.name }`},state:'stYBXdu'});
}let elzSFse = eo('div',null,null,`class`,`text-center`);
let cndYqry = ! component.track.subscribed && ! component.isSubscribing;
this.setState('steWTXH', cndYqry);
let cnd7lXe = component.isSubscribing;
this.setState('stSA1GN', cnd7lXe);
let cndUbd4 = !(cndYqry||cnd7lXe);
this.setState('stEnnzS', cndUbd4);
if (cndYqry) { 
let elmKl9X = eo('button','Xilf',null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmSubscribe = true}]},`class`,`btn btn-primary text-uppercase`);
text(trans('subscribe'));
ec('button');
}else if (cnd7lXe) { 
let cmpYDJk = this._lc('chPeSGoB2', {parent:component,parentTop:layout,state:'stSA1GN'});
}else { 
let el9ODF9 = eo('div',null,null,`title`,`${trans(`subscribed`)}`,`class`,`text-center`);
let el1dEVY = eo('i',null,null,`class`,`${fas('check') + ' subscribed-icon icon'}`);
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