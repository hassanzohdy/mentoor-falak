_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {c1nbxITwZ:'flk-spinner',cE7_yaQlG:'flk-time-ago',c2Y1qnQXM:'flk-time-ago',c3hECt3Rw:'gold-icon',ctCqw6wUs:'flk-time-ago',crxCvxfIS:'flk-time-ago',c0L1Yzt0b:'flk-time-ago',cyF8fiDwL:'flk-time-ago',crE__zokz:'flk-time-ago',cNV_bv5DF:'flk-time-ago',cbx72ls5o:'flk-time-ago',cDRZbGHA5:'flk-time-ago',cIooUTPMo:'flk-time-ago',c9jZWMkSQ:'flk-alert'},
                render: function (component) {
                    let el2QJY6 = eo('section',null,null,`class`,`panel-wrapper`,`id`,`notifications-list`);
component.notificationContainer = el2QJY6;
el2QJY6.cls = { empty: Is.empty(component.user.notifications)};

            for (let className in el2QJY6.cls) {
                el2QJY6.classList.toggle(className, el2QJY6.cls[className]);
            }  
            let eltR2yj = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndwB1z = component.isLoading;
this.setState('stPGaAg', cndwB1z);
let cndyJDB = ! Is.empty(component.notifications);
this.setState('stncd5t', cndyJDB);
let cnd8ITk = !(cndwB1z||cndyJDB);
this.setState('stutP7Q', cnd8ITk);
if (cndwB1z) { 
let cmpX3mW = this._lc('c1nbxITwZ', {parent:component,attrs:{theme:'black'},state:'stPGaAg'});
}else if (cndyJDB) { 
let elSmEel = eo('div',null,null,`class`,`list-wrapper`);
let elWMDuA = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iiI_T2 = 'dFRm3bD' + index;
let cndVqaH = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stSVTht', cndVqaH);
let cndJvvk = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('st_GUEn', cndJvvk);
let cndhgOQ = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('stduxye', cndhgOQ);
let cndZJjn = notification.type == 'task';
this.setState('stm8Gti', cndZJjn);
let cnds4uC = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('st82cDg', cnds4uC);
let cndEiaw = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('sthezK_', cndEiaw);
let cndyTF1 = notification.type == 'chatRooms';
this.setState('st1wZAq', cndyTF1);
let cnd59v7 = notification.type == 'post';
this.setState('stKzQcY', cnd59v7);
let cnd_5DG = notification.type == 'comment';
this.setState('stvvHLi', cnd_5DG);
let cndo8Vc = notification.type == 'project';
this.setState('stlc6Fr', cndo8Vc);
let cndBG_p = notification.type == 'bug';
this.setState('st1CB9y', cndBG_p);
if (cndVqaH) { 
let elAZQPV = eo('li','U9nff'+iiI_T2,null,`class`,`panel-item`);
elAZQPV.cls = {unseen: notification.seen === false};

            for (let className in elAZQPV.cls) {
                elAZQPV.classList.toggle(className, elAZQPV.cls[className]);
            }  
            let elbjel6 = eo('a','JnQff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elO0twH = eo('i','lAmff'+iiI_T2,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university') + ' red-text bold mr-2 fa-2x v-middle icon'}`);
ec('i');
text(`Your answer to`);
let elK2wxZ = eo('strong','F7mff'+iiI_T2,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmp7rsm = this._lc('cE7_yaQlG', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stSVTht',insideLoop:true,index:"" +iiI_T2});
ec('a');
let ely9ojn = eo('button','nb9ff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elTy4Gd = eo('i','FWVff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ely9ojn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndJvvk) { 
let eluUNgI = eo('li','gQVff'+iiI_T2,null,`class`,`panel-item`);
eluUNgI.cls = {unseen: notification.seen === false};

            for (let className in eluUNgI.cls) {
                eluUNgI.classList.toggle(className, eluUNgI.cls[className]);
            }  
            let el9aFXZ = eo('a','24Sff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let elnkovx = eo('i','1Skff'+iiI_T2,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university') + ' bold mr-2 fa-2x v-middle icon'}`);
elnkovx.cls = {'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'};

            for (let className in elnkovx.cls) {
                elnkovx.classList.toggle(className, elnkovx.cls[className]);
            }  
            ec('i');
let elCq4K4 = eo('span','PBUff'+iiI_T2,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let elxaC0m = eo('span','JgFff'+iiI_T2,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cnd0msV = notification.extra.status == 'new';
this.setState('st44vcd', cnd0msV);
let cndofJq = notification.extra.status == 'update';
this.setState('st27_py', cndofJq);
if (cnd0msV) { 
let elpMr2y = eo('span','n4iff'+iiI_T2,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndofJq) { 
let elKd8N7 = eo('span','O5qff'+iiI_T2,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elmVlHl = eo('strong','qUzff'+iiI_T2,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpLVvL = this._lc('c2Y1qnQXM', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiI_T2});
ec('a');
let elGEI87 = eo('button','KH4ff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elAnaDf = eo('i','ANJff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGEI87;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndhgOQ) { 
let elsPuDD = eo('li','aR1ff'+iiI_T2,null,`class`,`panel-item`);
elsPuDD.cls = {unseen: notification.seen === false};

            for (let className in elsPuDD.cls) {
                elsPuDD.classList.toggle(className, elsPuDD.cls[className]);
            }  
            let elaI8gw = eo('a','0ooff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let el7D_Pi = eo('span','717ff'+iiI_T2,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elQotpr = eo('strong','14_ff'+iiI_T2,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmpemWt = this._lc('c3hECt3Rw', {parent:component,props:{coins:notification.extra.lostGold},state:'stduxye',insideLoop:true,index:"" +iiI_T2});
let cmpsBTw = this._lc('ctCqw6wUs', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stduxye',insideLoop:true,index:"" +iiI_T2});
ec('a');
let elj_FRJ = eo('button','1vpff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el_LPBX = eo('i','8Gkff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elj_FRJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndZJjn) { 
let elAUYPP = eo('li','ZREff'+iiI_T2,null,`class`,`panel-item task-item`);
elAUYPP.cls = {unseen: notification.seen === false};

            for (let className in elAUYPP.cls) {
                elAUYPP.classList.toggle(className, elAUYPP.cls[className]);
            }  
            let el5xoK2 = eo('a','4GMff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elQuwz2 = eo('i','5reff'+iiI_T2,null,`title`,``,`class`,`${fas('tasks') + ' green-text bold mr-2 fa-2x v-top icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elQuwz2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let el1wBzY = eo('div','PiFff'+iiI_T2,null,`class`,`d-inline-block task-meta`);
let elrnP0E = eo('span','JCYff'+iiI_T2,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elgJZFY = eo('small','eghff'+iiI_T2,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpNCUa = this._lc('crxCvxfIS', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stm8Gti',insideLoop:true,index:"" +iiI_T2});
ec('div');
ec('a');
let elAQ5dW = eo('button','b0nff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elGNH82 = eo('i','Wikff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elAQ5dW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnds4uC) { 
let elX8y9A = eo('li','7p8ff'+iiI_T2,null,`class`,`panel-item einstein-chamber`);
elX8y9A.cls = {unseen: notification.seen === false};

            for (let className in elX8y9A.cls) {
                elX8y9A.classList.toggle(className, elX8y9A.cls[className]);
            }  
            let eljZeMt = eo('a','azGff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let el202vm = eo('span','tyIff'+iiI_T2,null,`class`,`red-text bold mr-2`);
let elYS3ft = ev('img','NRcff'+iiI_T2,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elDHUGt = eo('strong','XCGff'+iiI_T2,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let el08F0T = eo('span','oM2ff'+iiI_T2,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmpCd2f = this._lc('c0L1Yzt0b', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st82cDg',insideLoop:true,index:"" +iiI_T2});
ec('a');
ec('li');
}else if (cndEiaw) { 
let elDsMVd = eo('li','whLff'+iiI_T2,null,`class`,`panel-item einstein-chamber`);
elDsMVd.cls = {unseen: notification.seen === false};

            for (let className in elDsMVd.cls) {
                elDsMVd.classList.toggle(className, elDsMVd.cls[className]);
            }  
            let eloerm4 = eo('a','_LQff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let eleJ7nf = eo('span','st8ff'+iiI_T2,null,`class`,`red-text bold mr-2`);
let elyaSoX = ev('img','FZwff'+iiI_T2,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elLaiyy = eo('span','owCff'+iiI_T2,null,`class`,`notification-text`);
let elZLPBh = eo('strong','mpyff'+iiI_T2,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let elktisq = eo('strong','BC6ff'+iiI_T2,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let elnxKMf = eo('strong','6s8ff'+iiI_T2,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elVKnoO = eo('span','St1ff'+iiI_T2,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmp5rsZ = this._lc('cyF8fiDwL', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'sthezK_',insideLoop:true,index:"" +iiI_T2});
ec('a');
ec('li');
}else if (cndyTF1) { 
let el2AbR6 = eo('li','vUWff'+iiI_T2,null,`class`,`panel-item`);
el2AbR6.cls = {unseen: notification.seen === false};

            for (let className in el2AbR6.cls) {
                el2AbR6.classList.toggle(className, el2AbR6.cls[className]);
            }  
            let elk9S2Z = eo('a','tCxff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let elO3UQM = eo('i','BC7ff'+iiI_T2,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments') + ' bold mr-2 fa-2x v-middle icon'}`);
elO3UQM.cls = {'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'};

            for (let className in elO3UQM.cls) {
                elO3UQM.classList.toggle(className, elO3UQM.cls[className]);
            }  
            ec('i');
let cndL1RL = notification.extra.status;
this.setState('stOF0k1', cndL1RL);
let cndmVEE = notification.extra.newRequest;
this.setState('st4yNjR', cndmVEE);
if (cndL1RL) { 
let cndekpK = notification.extra.status == 'approved';
this.setState('std6TD4', cndekpK);
let cnd8Qfs = notification.extra.status == 'decline';
this.setState('stFLEBa', cnd8Qfs);
if (cndekpK) { 
let eltXUsB = eo('i','V40ff'+iiI_T2,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}else if (cnd8Qfs) { 
let ellLCKg = eo('i','JKDff'+iiI_T2,null,`class`,`${fas('times') + ' red-text icon'}`);
ec('i');
}text(`Your request to`);
let elWPnsT = eo('strong','Vlaff'+iiI_T2,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cndmVEE) { 
let elpH80d = eo('strong','86Mff'+iiI_T2,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let elQgnes = eo('strong','DX5ff'+iiI_T2,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let el9H3Qt = eo('strong','1FQff'+iiI_T2);
el9H3Qt.cls = {'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'};

            for (let className in el9H3Qt.cls) {
                el9H3Qt.classList.toggle(className, el9H3Qt.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpBxr5 = this._lc('crE__zokz', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiI_T2});
ec('a');
let el3tP5W = eo('button','d4Kff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elxkXgi = eo('i','5HZff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3tP5W;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd59v7) { 
let elj5NnC = eo('li','YwKff'+iiI_T2,null,`class`,`panel-item`);
elj5NnC.cls = {unseen: notification.seen === false};

            for (let className in elj5NnC.cls) {
                elj5NnC.classList.toggle(className, elj5NnC.cls[className]);
            }  
            let elyfMUy = eo('a','LDRff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elnnwvT = eo('i','uRWff'+iiI_T2,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot') + ' bold mr-2 fa-2x v-middle icon'}`);
elnnwvT.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elnnwvT.cls) {
                elnnwvT.classList.toggle(className, elnnwvT.cls[className]);
            }  
            ec('i');
let eliIORR = eo('span','C4rff'+iiI_T2,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let elIj8gj = eo('strong','7Ltff'+iiI_T2,null,`class`,`ml-2`);
elIj8gj.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elIj8gj.cls) {
                elIj8gj.classList.toggle(className, elIj8gj.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpvyfd = this._lc('cNV_bv5DF', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stKzQcY',insideLoop:true,index:"" +iiI_T2});
ec('a');
let elIlhVn = eo('button','Dhhff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elBOYPM = eo('i','c0Hff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elIlhVn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd_5DG) { 
let elR4VzO = eo('li','Y37ff'+iiI_T2,null,`class`,`panel-item`);
elR4VzO.cls = {unseen: notification.seen === false};

            for (let className in elR4VzO.cls) {
                elR4VzO.classList.toggle(className, elR4VzO.cls[className]);
            }  
            let elTMwgF = eo('a','JFzff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let elOijQk = ev('img','37Bff'+iiI_T2,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let el70LjI = eo('div','vxLff'+iiI_T2,null,`class`,`content`);
let elfOAPa = eo('span','J2pff'+iiI_T2);
text(notification.title);
ec('span');
let eladHAs = eo('small','ScHff'+iiI_T2,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp1Y6W = this._lc('cbx72ls5o', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stvvHLi',insideLoop:true,index:"" +iiI_T2});
ec('div');
ec('a');
let el87lRs = eo('button','_Kdff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elpImjj = eo('i','4DWff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el87lRs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndo8Vc) { 
let elYgZsZ = eo('li','Id4ff'+iiI_T2,null,`class`,`panel-item`);
elYgZsZ.cls = {unseen: notification.seen === false};

            for (let className in elYgZsZ.cls) {
                elYgZsZ.classList.toggle(className, elYgZsZ.cls[className]);
            }  
            let elR1Voo = eo('a','YIIff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elZulZ1 = ev('img','tmkff'+iiI_T2,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let eldzXDp = eo('div','tFgff'+iiI_T2,null,`class`,`content`);
let cndCXcS = notification.extra.type == 'dismissed';
this.setState('stw1B9Y', cndCXcS);
let cndElSy = !(cndCXcS);
this.setState('stEEnI_', cndElSy);
if (cndCXcS) { 
let el8Y_cI = eo('span','s8Kff'+iiI_T2,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let elN7Sk0 = eo('span','IFUff'+iiI_T2,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elLaIyA = eo('span','DZ3ff'+iiI_T2);
text(notification.title);
ec('span');
let el7nyzW = eo('small','56Dff'+iiI_T2,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpMkv3 = this._lc('cDRZbGHA5', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiI_T2});
ec('div');
ec('a');
let elOYc4b = eo('button','jf2ff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elaaKM0 = eo('i','7wsff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elOYc4b;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndBG_p) { 
let elK5ynn = eo('li','Xkhff'+iiI_T2,null,`class`,`panel-item`);
elK5ynn.cls = {unseen: notification.seen === false};

            for (let className in elK5ynn.cls) {
                elK5ynn.classList.toggle(className, elK5ynn.cls[className]);
            }  
            let elouzKQ = eo('a','i_jff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let el6nTpQ = ev('img','yKmff'+iiI_T2,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elYV2ub = eo('div','zguff'+iiI_T2,null,`class`,`content`);
let elDTps3 = eo('span','pt1ff'+iiI_T2);
text(notification.title);
ec('span');
let el1erxH = eo('small','qoyff'+iiI_T2,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpQVRi = this._lc('cIooUTPMo', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st1CB9y',insideLoop:true,index:"" +iiI_T2});
ec('div');
ec('a');
let elMLYXU = eo('button','V2xff'+iiI_T2,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elhGYAv = eo('i','kBqff'+iiI_T2,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elMLYXU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let elw9yID = eo('section',null,null,`class`,`footer`);
let elTkLWy = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let elQExKw = eo('i',null,null,`class`,`${fas('trash') + ' mr-2 icon'}`);
ec('i');
let eliC9f5 = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elTkLWy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elLx007 = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndrBhi = component.confirmRemoving;
this.setState('stAC3cE', cndrBhi);
if (cndrBhi) { 
let cmplJHy = this._lc('c9jZWMkSQ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'stAC3cE'});
}
                    this.isReadyToGo();
                }
        });