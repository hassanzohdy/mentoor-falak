_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {cqrIJkMk_:'flk-spinner',cm2b5x1Wx:'flk-time-ago',cpLGPAXUH:'flk-time-ago',cht2iKU4o:'gold-icon',croIBy7my:'flk-time-ago',cVuxQfFXK:'flk-time-ago',czfJRk2OF:'flk-time-ago',czPYwRCao:'flk-time-ago',cxao9dsKG:'flk-time-ago',c36mYf7Gs:'flk-time-ago',cpyu_n6C0:'flk-time-ago',cBz6gEtzz:'flk-time-ago',cUW4PjMc_:'flk-time-ago',c7W3rsPNu:'flk-alert'},
                render: function (component) {
                    let elG_SsC = eo('section',null,null,`class`,`panel-wrapper`,`id`,`notifications-list`);
component.notificationContainer = elG_SsC;
elG_SsC.cls = { empty: Is.empty(component.user.notifications)};

            for (let className in elG_SsC.cls) {
                elG_SsC.classList.toggle(className, elG_SsC.cls[className]);
            }  
            let el_rMTI = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndi9ni = component.isLoading;
this.setState('stwnMlD', cndi9ni);
let cndfckh = ! Is.empty(component.notifications);
this.setState('stCVWNR', cndfckh);
let cndPNmb = !(cndi9ni||cndfckh);
this.setState('stbr7fR', cndPNmb);
if (cndi9ni) { 
let cmpwXZJ = this._lc('cqrIJkMk_', {parent:component,attrs:{theme:'black'},state:'stwnMlD'});
}else if (cndfckh) { 
let elsYKBM = eo('div',null,null,`class`,`list-wrapper`);
let elPZ24o = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iiDAkI = 'SfLE8DI' + index;
let cndum1G = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stiHBmu', cndum1G);
let cnd8OrS = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('stwkjaU', cnd8OrS);
let cndmmEF = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('stewshr', cndmmEF);
let cndbmPE = notification.type == 'task';
this.setState('st7XH7G', cndbmPE);
let cndEGg2 = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('stfUqtr', cndEGg2);
let cndaUzK = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('stc5WG_', cndaUzK);
let cndLomQ = notification.type == 'chatRooms';
this.setState('stJCGZP', cndLomQ);
let cndufXH = notification.type == 'post';
this.setState('stgwCaz', cndufXH);
let cndyzeq = notification.type == 'comment';
this.setState('stcz4rL', cndyzeq);
let cndW_5N = notification.type == 'project';
this.setState('st2k6h2', cndW_5N);
let cndJd8M = notification.type == 'bug';
this.setState('st1VA11', cndJd8M);
if (cndum1G) { 
let elm5sm0 = eo('li','KhQff'+iiDAkI,null,`class`,`panel-item`);
elm5sm0.cls = {unseen: notification.seen === false};

            for (let className in elm5sm0.cls) {
                elm5sm0.classList.toggle(className, elm5sm0.cls[className]);
            }  
            let eloxiPc = eo('a','hZFff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elBER4d = eo('i','KKBff'+iiDAkI,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university') + ' red-text bold mr-2 fa-2x v-middle icon'}`);
ec('i');
text(`Your answer to`);
let elXfTp7 = eo('strong','1W2ff'+iiDAkI,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpTJhb = this._lc('cm2b5x1Wx', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stiHBmu',insideLoop:true,index:"" +iiDAkI});
ec('a');
let elimFHL = eo('button','d5bff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elHvQLn = eo('i','1gtff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elimFHL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd8OrS) { 
let elRHRcm = eo('li','zt4ff'+iiDAkI,null,`class`,`panel-item`);
elRHRcm.cls = {unseen: notification.seen === false};

            for (let className in elRHRcm.cls) {
                elRHRcm.classList.toggle(className, elRHRcm.cls[className]);
            }  
            let el70Tyr = eo('a','RZiff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let elTWz89 = eo('i','86Bff'+iiDAkI,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university') + ' bold mr-2 fa-2x v-middle icon'}`);
elTWz89.cls = {'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'};

            for (let className in elTWz89.cls) {
                elTWz89.classList.toggle(className, elTWz89.cls[className]);
            }  
            ec('i');
let el_oKU7 = eo('span','PKfff'+iiDAkI,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let elZDIdv = eo('span','et6ff'+iiDAkI,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndgs46 = notification.extra.status == 'new';
this.setState('stI2wA9', cndgs46);
let cndfZoE = notification.extra.status == 'update';
this.setState('stGJ8IP', cndfZoE);
if (cndgs46) { 
let elB422X = eo('span','hzVff'+iiDAkI,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndfZoE) { 
let elWOOqQ = eo('span','0qfff'+iiDAkI,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elpVhjn = eo('strong','21iff'+iiDAkI,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpDQvF = this._lc('cpLGPAXUH', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiDAkI});
ec('a');
let el6Rc0M = eo('button','17Dff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let eletnXT = eo('i','VSGff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6Rc0M;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndmmEF) { 
let elR1QfO = eo('li','uj2ff'+iiDAkI,null,`class`,`panel-item`);
elR1QfO.cls = {unseen: notification.seen === false};

            for (let className in elR1QfO.cls) {
                elR1QfO.classList.toggle(className, elR1QfO.cls[className]);
            }  
            let elGbd62 = eo('a','_3_ff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let el07icW = eo('span','74Dff'+iiDAkI,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let el0gJEx = eo('strong','I4Eff'+iiDAkI,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmpVAnP = this._lc('cht2iKU4o', {parent:component,props:{coins:notification.extra.lostGold},state:'stewshr',insideLoop:true,index:"" +iiDAkI});
let cmp9Sti = this._lc('croIBy7my', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stewshr',insideLoop:true,index:"" +iiDAkI});
ec('a');
let el8YVGH = eo('button','4qPff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el8ZD92 = eo('i','l3Jff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el8YVGH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndbmPE) { 
let elCYMtK = eo('li','d7off'+iiDAkI,null,`class`,`panel-item task-item`);
elCYMtK.cls = {unseen: notification.seen === false};

            for (let className in elCYMtK.cls) {
                elCYMtK.classList.toggle(className, elCYMtK.cls[className]);
            }  
            let elVCIIh = eo('a','E6Dff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elrUbvo = eo('i','MxPff'+iiDAkI,null,`title`,``,`class`,`${fas('tasks') + ' green-text bold mr-2 fa-2x v-top icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elrUbvo;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let el0F4Uw = eo('div','YVyff'+iiDAkI,null,`class`,`d-inline-block task-meta`);
let elXFZj9 = eo('span','KzXff'+iiDAkI,null,`class`,`task-title`);
text(notification.title);
ec('span');
let el99nHg = eo('small','_toff'+iiDAkI,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpWJSV = this._lc('cVuxQfFXK', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st7XH7G',insideLoop:true,index:"" +iiDAkI});
ec('div');
ec('a');
let elBlAO0 = eo('button','6dRff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elRaIQP = eo('i','0pUff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBlAO0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndEGg2) { 
let elyW72X = eo('li','Wmaff'+iiDAkI,null,`class`,`panel-item einstein-chamber`);
elyW72X.cls = {unseen: notification.seen === false};

            for (let className in elyW72X.cls) {
                elyW72X.classList.toggle(className, elyW72X.cls[className]);
            }  
            let el8Thwm = eo('a','7REff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let elyi2zV = eo('span','OKfff'+iiDAkI,null,`class`,`red-text bold mr-2`);
let elShRcH = ev('img','7EEff'+iiDAkI,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elK4btI = eo('strong','nPjff'+iiDAkI,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let elLzaeh = eo('span','1A3ff'+iiDAkI,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmph_mx = this._lc('czfJRk2OF', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stfUqtr',insideLoop:true,index:"" +iiDAkI});
ec('a');
ec('li');
}else if (cndaUzK) { 
let elVvhkh = eo('li','flEff'+iiDAkI,null,`class`,`panel-item einstein-chamber`);
elVvhkh.cls = {unseen: notification.seen === false};

            for (let className in elVvhkh.cls) {
                elVvhkh.classList.toggle(className, elVvhkh.cls[className]);
            }  
            let elqSs6f = eo('a','DhLff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let elzVw20 = eo('span','yurff'+iiDAkI,null,`class`,`red-text bold mr-2`);
let elxQ61O = ev('img','wYbff'+iiDAkI,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elGtVvK = eo('span','aWKff'+iiDAkI,null,`class`,`notification-text`);
let el0wM4J = eo('strong','FLGff'+iiDAkI,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let elNsY2M = eo('strong','iClff'+iiDAkI,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let elV7lv6 = eo('strong','aYpff'+iiDAkI,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elezz07 = eo('span','NtOff'+iiDAkI,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmphPzc = this._lc('czPYwRCao', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stc5WG_',insideLoop:true,index:"" +iiDAkI});
ec('a');
ec('li');
}else if (cndLomQ) { 
let elVxmcm = eo('li','hIHff'+iiDAkI,null,`class`,`panel-item`);
elVxmcm.cls = {unseen: notification.seen === false};

            for (let className in elVxmcm.cls) {
                elVxmcm.classList.toggle(className, elVxmcm.cls[className]);
            }  
            let elXBCY4 = eo('a','RW1ff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let elIivJw = eo('i','F5Zff'+iiDAkI,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments') + ' bold mr-2 fa-2x v-middle icon'}`);
elIivJw.cls = {'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'};

            for (let className in elIivJw.cls) {
                elIivJw.classList.toggle(className, elIivJw.cls[className]);
            }  
            ec('i');
let cnd0Mt0 = notification.extra.status;
this.setState('st92eFV', cnd0Mt0);
let cndomPA = notification.extra.newRequest;
this.setState('stk9ayH', cndomPA);
if (cnd0Mt0) { 
let cndcFi3 = notification.extra.status == 'approved';
this.setState('stunZh_', cndcFi3);
let cndC4q4 = notification.extra.status == 'decline';
this.setState('st1isdt', cndC4q4);
if (cndcFi3) { 
let el2tMLP = eo('i','FKNff'+iiDAkI,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}else if (cndC4q4) { 
let elClNIr = eo('i','pIqff'+iiDAkI,null,`class`,`${fas('times') + ' red-text icon'}`);
ec('i');
}text(`Your request to`);
let eloAKVF = eo('strong','Gmmff'+iiDAkI,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cndomPA) { 
let elnkgpP = eo('strong','YULff'+iiDAkI,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let el1nOJN = eo('strong','960ff'+iiDAkI,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let elUBfQF = eo('strong','gZWff'+iiDAkI);
elUBfQF.cls = {'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'};

            for (let className in elUBfQF.cls) {
                elUBfQF.classList.toggle(className, elUBfQF.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpq8ft = this._lc('cxao9dsKG', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiDAkI});
ec('a');
let elavlrg = eo('button','uEQff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elJe7Ju = eo('i','7w8ff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elavlrg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndufXH) { 
let elLBZRm = eo('li','bBoff'+iiDAkI,null,`class`,`panel-item`);
elLBZRm.cls = {unseen: notification.seen === false};

            for (let className in elLBZRm.cls) {
                elLBZRm.classList.toggle(className, elLBZRm.cls[className]);
            }  
            let el0fcEE = eo('a','gyRff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elczGmB = eo('i','giwff'+iiDAkI,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot') + ' bold mr-2 fa-2x v-middle icon'}`);
elczGmB.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elczGmB.cls) {
                elczGmB.classList.toggle(className, elczGmB.cls[className]);
            }  
            ec('i');
let elstUuN = eo('span','0_8ff'+iiDAkI,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let elP5Elj = eo('strong','tmpff'+iiDAkI,null,`class`,`ml-2`);
elP5Elj.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elP5Elj.cls) {
                elP5Elj.classList.toggle(className, elP5Elj.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpL0Xh = this._lc('c36mYf7Gs', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stgwCaz',insideLoop:true,index:"" +iiDAkI});
ec('a');
let elf4klV = eo('button','eSxff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el0h1qz = eo('i','R58ff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elf4klV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndyzeq) { 
let elQac8R = eo('li','xHNff'+iiDAkI,null,`class`,`panel-item`);
elQac8R.cls = {unseen: notification.seen === false};

            for (let className in elQac8R.cls) {
                elQac8R.classList.toggle(className, elQac8R.cls[className]);
            }  
            let elojvqB = eo('a','5BUff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let elOH7wL = ev('img','aSsff'+iiDAkI,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let elcUQU5 = eo('div','PpFff'+iiDAkI,null,`class`,`content`);
let elvNt6a = eo('span','8Alff'+iiDAkI);
text(notification.title);
ec('span');
let ellX9pv = eo('small','UKOff'+iiDAkI,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp7cUM = this._lc('cpyu_n6C0', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stcz4rL',insideLoop:true,index:"" +iiDAkI});
ec('div');
ec('a');
let elBXWrL = eo('button','w78ff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elSM5jS = eo('i','mxuff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBXWrL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndW_5N) { 
let elCpDoF = eo('li','0I5ff'+iiDAkI,null,`class`,`panel-item`);
elCpDoF.cls = {unseen: notification.seen === false};

            for (let className in elCpDoF.cls) {
                elCpDoF.classList.toggle(className, elCpDoF.cls[className]);
            }  
            let elZoiFZ = eo('a','3c2ff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let eldLMwm = ev('img','fFeff'+iiDAkI,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let elFmXIQ = eo('div','Yf8ff'+iiDAkI,null,`class`,`content`);
let cndr7yn = notification.extra.type == 'dismissed';
this.setState('stRnuvO', cndr7yn);
let cndqPUG = !(cndr7yn);
this.setState('st7XAsC', cndqPUG);
if (cndr7yn) { 
let elKWTK1 = eo('span','HAPff'+iiDAkI,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let el3N3ts = eo('span','HbUff'+iiDAkI,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elZq1ox = eo('span','Imrff'+iiDAkI);
text(notification.title);
ec('span');
let elvcZR3 = eo('small','NeDff'+iiDAkI,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpzbMe = this._lc('cBz6gEtzz', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiDAkI});
ec('div');
ec('a');
let elIFGpu = eo('button','oveff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elqJt5g = eo('i','Bx6ff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elIFGpu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndJd8M) { 
let elrZ4uF = eo('li','UiOff'+iiDAkI,null,`class`,`panel-item`);
elrZ4uF.cls = {unseen: notification.seen === false};

            for (let className in elrZ4uF.cls) {
                elrZ4uF.classList.toggle(className, elrZ4uF.cls[className]);
            }  
            let eltFWSX = eo('a','wG_ff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let el_8F2D = ev('img','9q1ff'+iiDAkI,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elqupYH = eo('div','pSiff'+iiDAkI,null,`class`,`content`);
let elaSM_v = eo('span','yWfff'+iiDAkI);
text(notification.title);
ec('span');
let eltxYAT = eo('small','b7Cff'+iiDAkI,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp8coN = this._lc('cUW4PjMc_', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st1VA11',insideLoop:true,index:"" +iiDAkI});
ec('div');
ec('a');
let el2iGkQ = eo('button','YpXff'+iiDAkI,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elRihhA = eo('i','8u2ff'+iiDAkI,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2iGkQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let elUwKNw = eo('section',null,null,`class`,`footer`);
let elVAOrr = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let elygh2R = eo('i',null,null,`class`,`${fas('trash') + ' mr-2 icon'}`);
ec('i');
let ele49Pw = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elVAOrr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elbjrgE = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndi5uJ = component.confirmRemoving;
this.setState('stIZMH5', cndi5uJ);
if (cndi5uJ) { 
let cmppHvx = this._lc('c7W3rsPNu', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'stIZMH5'});
}
                    this.isReadyToGo();
                }
        });