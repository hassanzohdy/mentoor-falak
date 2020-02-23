_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {c0H4zyyeZ:'flk-spinner',cGXCUHs2M:'flk-time-ago',cFgE6dKOh:'flk-time-ago',cMcb80oxF:'gold-icon',cmBN964j8:'flk-time-ago',cdz6TeJ1_:'flk-time-ago',cENJkiJDq:'flk-time-ago',cTQ1a7nsT:'flk-time-ago',cUt1M0WhC:'flk-time-ago',cCXmtFF_B:'flk-time-ago',cKtReH1Ex:'flk-time-ago',cfL8XpZeA:'flk-time-ago',cTmr2OMfQ:'flk-time-ago',ciYrltKE1:'flk-alert'},
                render: function (component) {
                    let el5wS0f = eo('section',null,null,`class`,`panel-wrapper`,`id`,`notifications-list`);
component.notificationContainer = el5wS0f;
el5wS0f.cls = { empty: Is.empty(component.user.notifications)};

            for (let className in el5wS0f.cls) {
                el5wS0f.classList.toggle(className, el5wS0f.cls[className]);
            }  
            let elVGLgk = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndujKO = component.isLoading;
this.setState('stmweoM', cndujKO);
let cndiNQZ = ! Is.empty(component.notifications);
this.setState('st1578Z', cndiNQZ);
let cnd7_8n = !(cndujKO||cndiNQZ);
this.setState('st5HZbk', cnd7_8n);
if (cndujKO) { 
let cmpb2pp = this._lc('c0H4zyyeZ', {parent:component,attrs:{theme:'black'},state:'stmweoM'});
}else if (cndiNQZ) { 
let el66fer = eo('div',null,null,`class`,`list-wrapper`);
let eloSYzf = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let ii0Wcx = 'TlbBzt1' + index;
let cndq8sh = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stSD1WL', cndq8sh);
let cndKSb6 = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('stlqfH5', cndKSb6);
let cndTMON = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('stg05V2', cndTMON);
let cndQ7jp = notification.type == 'task';
this.setState('stvntOd', cndQ7jp);
let cndUObY = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('stuajPm', cndUObY);
let cnd10ow = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('stlIhwA', cnd10ow);
let cndzveW = notification.type == 'chatRooms';
this.setState('stYcjer', cndzveW);
let cndoToa = notification.type == 'post';
this.setState('stc563U', cndoToa);
let cndGrij = notification.type == 'comment';
this.setState('stN1HWO', cndGrij);
let cndJbj8 = notification.type == 'project';
this.setState('st549i5', cndJbj8);
let cndPoSa = notification.type == 'bug';
this.setState('stk4GEc', cndPoSa);
if (cndq8sh) { 
let eldzN4f = eo('li','v5Lff'+ii0Wcx,null,`class`,`panel-item`);
eldzN4f.cls = {unseen: notification.seen === false};

            for (let className in eldzN4f.cls) {
                eldzN4f.classList.toggle(className, eldzN4f.cls[className]);
            }  
            let eln_i7o = eo('a','atiff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elxHtr2 = eo('i','7oYff'+ii0Wcx,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university') + ' red-text bold mr-2 fa-2x v-middle icon'}`);
ec('i');
text(`Your answer to`);
let eli56s0 = eo('strong','HEzff'+ii0Wcx,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpjhzi = this._lc('cGXCUHs2M', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stSD1WL',insideLoop:true,index:"" +ii0Wcx});
ec('a');
let el7c0FG = eo('button','Cagff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elC655n = eo('i','81xff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7c0FG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndKSb6) { 
let elRXXyg = eo('li','cedff'+ii0Wcx,null,`class`,`panel-item`);
elRXXyg.cls = {unseen: notification.seen === false};

            for (let className in elRXXyg.cls) {
                elRXXyg.classList.toggle(className, elRXXyg.cls[className]);
            }  
            let elfkTAy = eo('a','R4lff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let el8d2rE = eo('i','rb5ff'+ii0Wcx,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university') + ' bold mr-2 fa-2x v-middle icon'}`);
el8d2rE.cls = {'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'};

            for (let className in el8d2rE.cls) {
                el8d2rE.classList.toggle(className, el8d2rE.cls[className]);
            }  
            ec('i');
let elTZean = eo('span','Wtkff'+ii0Wcx,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let elHu9XZ = eo('span','HUlff'+ii0Wcx,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndvzbI = notification.extra.status == 'new';
this.setState('stByvwD', cndvzbI);
let cndDJtT = notification.extra.status == 'update';
this.setState('sttZq2j', cndDJtT);
if (cndvzbI) { 
let elN34Qe = eo('span','t9_ff'+ii0Wcx,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndDJtT) { 
let elnvZDi = eo('span','sYGff'+ii0Wcx,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elyFunw = eo('strong','mj8ff'+ii0Wcx,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpy1dP = this._lc('cFgE6dKOh', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +ii0Wcx});
ec('a');
let elLyHwc = eo('button','Sl8ff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elz9q__ = eo('i','jt9ff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elLyHwc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndTMON) { 
let el0xr2O = eo('li','kRfff'+ii0Wcx,null,`class`,`panel-item`);
el0xr2O.cls = {unseen: notification.seen === false};

            for (let className in el0xr2O.cls) {
                el0xr2O.classList.toggle(className, el0xr2O.cls[className]);
            }  
            let el3lbWw = eo('a','mfUff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let el9JuOV = eo('span','E0lff'+ii0Wcx,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elfRTWL = eo('strong','Jsyff'+ii0Wcx,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmpGISj = this._lc('cMcb80oxF', {parent:component,props:{coins:notification.extra.lostGold},state:'stg05V2',insideLoop:true,index:"" +ii0Wcx});
let cmpw8NC = this._lc('cmBN964j8', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stg05V2',insideLoop:true,index:"" +ii0Wcx});
ec('a');
let el9V89L = eo('button','05kff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let eli0Y9s = eo('i','sf6ff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9V89L;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndQ7jp) { 
let elRknF9 = eo('li','0v_ff'+ii0Wcx,null,`class`,`panel-item task-item`);
elRknF9.cls = {unseen: notification.seen === false};

            for (let className in elRknF9.cls) {
                elRknF9.classList.toggle(className, elRknF9.cls[className]);
            }  
            let eliuJ4Z = eo('a','HC3ff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let el7O8Ti = eo('i','lRhff'+ii0Wcx,null,`title`,``,`class`,`${fas('tasks') + ' green-text bold mr-2 fa-2x v-top icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el7O8Ti;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let elngE_q = eo('div','VA5ff'+ii0Wcx,null,`class`,`d-inline-block task-meta`);
let elTPbEC = eo('span','DBtff'+ii0Wcx,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elH5YH3 = eo('small','RLPff'+ii0Wcx,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpq735 = this._lc('cdz6TeJ1_', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stvntOd',insideLoop:true,index:"" +ii0Wcx});
ec('div');
ec('a');
let el7GySZ = eo('button','7bNff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elSMRps = eo('i','IFaff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7GySZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndUObY) { 
let els7bXW = eo('li','IVfff'+ii0Wcx,null,`class`,`panel-item einstein-chamber`);
els7bXW.cls = {unseen: notification.seen === false};

            for (let className in els7bXW.cls) {
                els7bXW.classList.toggle(className, els7bXW.cls[className]);
            }  
            let elokQzg = eo('a','Sq5ff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let elwFsPy = eo('span','0JSff'+ii0Wcx,null,`class`,`red-text bold mr-2`);
let elXZygd = ev('img','1Ugff'+ii0Wcx,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elfPxQj = eo('strong','roUff'+ii0Wcx,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let elFae85 = eo('span','hLRff'+ii0Wcx,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmpkNPY = this._lc('cENJkiJDq', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stuajPm',insideLoop:true,index:"" +ii0Wcx});
ec('a');
ec('li');
}else if (cnd10ow) { 
let elp0OZg = eo('li','7O5ff'+ii0Wcx,null,`class`,`panel-item einstein-chamber`);
elp0OZg.cls = {unseen: notification.seen === false};

            for (let className in elp0OZg.cls) {
                elp0OZg.classList.toggle(className, elp0OZg.cls[className]);
            }  
            let elYhf8K = eo('a','OfJff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let elawL3k = eo('span','udEff'+ii0Wcx,null,`class`,`red-text bold mr-2`);
let elI1FJd = ev('img','deyff'+ii0Wcx,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elnoSQH = eo('span','L3kff'+ii0Wcx,null,`class`,`notification-text`);
let elCk2ie = eo('strong','Kskff'+ii0Wcx,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let eln_CBD = eo('strong','gi5ff'+ii0Wcx,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let elWIuhB = eo('strong','pEgff'+ii0Wcx,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let eldA8TM = eo('span','Bc3ff'+ii0Wcx,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmpEVCG = this._lc('cTQ1a7nsT', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stlIhwA',insideLoop:true,index:"" +ii0Wcx});
ec('a');
ec('li');
}else if (cndzveW) { 
let elOq1o7 = eo('li','ESaff'+ii0Wcx,null,`class`,`panel-item`);
elOq1o7.cls = {unseen: notification.seen === false};

            for (let className in elOq1o7.cls) {
                elOq1o7.classList.toggle(className, elOq1o7.cls[className]);
            }  
            let elo7VRq = eo('a','8ydff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let elUx0F_ = eo('i','BQfff'+ii0Wcx,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments') + ' bold mr-2 fa-2x v-middle icon'}`);
elUx0F_.cls = {'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'};

            for (let className in elUx0F_.cls) {
                elUx0F_.classList.toggle(className, elUx0F_.cls[className]);
            }  
            ec('i');
let cndnYZQ = notification.extra.status;
this.setState('st_xtsk', cndnYZQ);
let cndYE8m = notification.extra.newRequest;
this.setState('stVQ3bK', cndYE8m);
if (cndnYZQ) { 
let cndef3F = notification.extra.status == 'approved';
this.setState('stAb1FE', cndef3F);
let cndMbN1 = notification.extra.status == 'decline';
this.setState('stltz1d', cndMbN1);
if (cndef3F) { 
let elxPM9I = eo('i','8Wkff'+ii0Wcx,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}else if (cndMbN1) { 
let eliHBQ_ = eo('i','ovOff'+ii0Wcx,null,`class`,`${fas('times') + ' red-text icon'}`);
ec('i');
}text(`Your request to`);
let elN_bKK = eo('strong','5yWff'+ii0Wcx,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cndYE8m) { 
let el5tL0v = eo('strong','rJvff'+ii0Wcx,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let elIKlEv = eo('strong','tDWff'+ii0Wcx,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let elcJ46g = eo('strong','RjKff'+ii0Wcx);
elcJ46g.cls = {'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'};

            for (let className in elcJ46g.cls) {
                elcJ46g.classList.toggle(className, elcJ46g.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpFSaf = this._lc('cUt1M0WhC', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +ii0Wcx});
ec('a');
let elDxJmM = eo('button','sYKff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elsr9ld = eo('i','xWBff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDxJmM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndoToa) { 
let elgj5cY = eo('li','OUPff'+ii0Wcx,null,`class`,`panel-item`);
elgj5cY.cls = {unseen: notification.seen === false};

            for (let className in elgj5cY.cls) {
                elgj5cY.classList.toggle(className, elgj5cY.cls[className]);
            }  
            let el6PT6q = eo('a','GbQff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elRM76e = eo('i','GEpff'+ii0Wcx,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot') + ' bold mr-2 fa-2x v-middle icon'}`);
elRM76e.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elRM76e.cls) {
                elRM76e.classList.toggle(className, elRM76e.cls[className]);
            }  
            ec('i');
let elYaA9u = eo('span','kWUff'+ii0Wcx,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let eljxkjm = eo('strong','XC2ff'+ii0Wcx,null,`class`,`ml-2`);
eljxkjm.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in eljxkjm.cls) {
                eljxkjm.classList.toggle(className, eljxkjm.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmp7PGa = this._lc('cCXmtFF_B', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stc563U',insideLoop:true,index:"" +ii0Wcx});
ec('a');
let elerXhv = eo('button','F5sff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elltWvH = eo('i','hjkff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elerXhv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndGrij) { 
let elFSdR4 = eo('li','Xxcff'+ii0Wcx,null,`class`,`panel-item`);
elFSdR4.cls = {unseen: notification.seen === false};

            for (let className in elFSdR4.cls) {
                elFSdR4.classList.toggle(className, elFSdR4.cls[className]);
            }  
            let elMLwBB = eo('a','Wo8ff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let elvXprY = ev('img','Qm_ff'+ii0Wcx,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let elfpR6p = eo('div','Drxff'+ii0Wcx,null,`class`,`content`);
let elHgTO7 = eo('span','9noff'+ii0Wcx);
text(notification.title);
ec('span');
let elqvTIZ = eo('small','ay6ff'+ii0Wcx,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp18h5 = this._lc('cKtReH1Ex', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stN1HWO',insideLoop:true,index:"" +ii0Wcx});
ec('div');
ec('a');
let ellRQoq = eo('button','6pRff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elxAnvn = eo('i','6oPff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ellRQoq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndJbj8) { 
let elzYhbx = eo('li','9AJff'+ii0Wcx,null,`class`,`panel-item`);
elzYhbx.cls = {unseen: notification.seen === false};

            for (let className in elzYhbx.cls) {
                elzYhbx.classList.toggle(className, elzYhbx.cls[className]);
            }  
            let eljqa65 = eo('a','u9Jff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elRK27y = ev('img','o1Off'+ii0Wcx,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let elVlCpN = eo('div','44rff'+ii0Wcx,null,`class`,`content`);
let cnddNJ5 = notification.extra.type == 'dismissed';
this.setState('stVRUmj', cnddNJ5);
let cndj8z0 = !(cnddNJ5);
this.setState('st97cBS', cndj8z0);
if (cnddNJ5) { 
let elOiB3X = eo('span','yTgff'+ii0Wcx,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let elTn12j = eo('span','pzTff'+ii0Wcx,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elkmjWL = eo('span','P73ff'+ii0Wcx);
text(notification.title);
ec('span');
let elxNDTR = eo('small','ygaff'+ii0Wcx,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpS6dI = this._lc('cfL8XpZeA', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +ii0Wcx});
ec('div');
ec('a');
let elPvQyO = eo('button','JGLff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elL7Z6E = eo('i','ku8ff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPvQyO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndPoSa) { 
let ely5yMt = eo('li','Aahff'+ii0Wcx,null,`class`,`panel-item`);
ely5yMt.cls = {unseen: notification.seen === false};

            for (let className in ely5yMt.cls) {
                ely5yMt.classList.toggle(className, ely5yMt.cls[className]);
            }  
            let elwTa23 = eo('a','XvOff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let elqsXUM = ev('img','_pZff'+ii0Wcx,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elW1txV = eo('div','RGTff'+ii0Wcx,null,`class`,`content`);
let elqrCHb = eo('span','ndRff'+ii0Wcx);
text(notification.title);
ec('span');
let el6W7H4 = eo('small','KuAff'+ii0Wcx,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpW2xC = this._lc('cTmr2OMfQ', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stk4GEc',insideLoop:true,index:"" +ii0Wcx});
ec('div');
ec('a');
let elovhph = eo('button','seCff'+ii0Wcx,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elAADCk = eo('i','AW1ff'+ii0Wcx,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elovhph;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let elPgV2t = eo('section',null,null,`class`,`footer`);
let elmkxTg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let elbeHJo = eo('i',null,null,`class`,`${fas('trash') + ' mr-2 icon'}`);
ec('i');
let elz1u_c = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elmkxTg;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elZcPNj = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cnd5Kvu = component.confirmRemoving;
this.setState('stOwbQO', cnd5Kvu);
if (cnd5Kvu) { 
let cmp46mR = this._lc('ciYrltKE1', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'stOwbQO'});
}
                    this.isReadyToGo();
                }
        });