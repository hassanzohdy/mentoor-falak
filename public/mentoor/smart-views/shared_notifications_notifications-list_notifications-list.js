_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {cVaoyMBLS:'flk-spinner',cDzmasfb8:'flk-time-ago',ck38N_eOc:'flk-time-ago',cNkvYsVM_:'gold-icon',cx4cXy8Ce:'flk-time-ago',cpzKO941h:'flk-time-ago',caeK451I8:'flk-time-ago',cuiJCsue2:'flk-time-ago',cI3Qt7Kkv:'flk-time-ago',cPCEPl33a:'flk-time-ago',cRQnpe_qD:'flk-time-ago',cDd1vFb3Z:'flk-time-ago',cNYUjrFJU:'flk-time-ago',cXL55juPp:'flk-alert'},
                render: function (component) {
                    let elMc02B = eo('section',null,null,`class`,`panel-wrapper ${cls({ empty: Is.empty(component.user.notifications)})}`,`id`,`notifications-list`);
component.notificationContainer = elMc02B;
let elhdfZZ = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cnd1OEt = component.isLoading;
this.setState('stycSLA', cnd1OEt);
let cndw4lO = ! Is.empty(component.notifications);
this.setState('stexMo0', cndw4lO);
let cndmg5T = !(cnd1OEt||cndw4lO);
this.setState('stP5m_y', cndmg5T);
if (cnd1OEt) { 
let cmpHKPb = this._lc('cVaoyMBLS', {parent:component,attrs:{theme:'black'},state:'stycSLA'});
}else if (cndw4lO) { 
let elrhv59 = eo('div',null,null,`class`,`list-wrapper`);
let elhrl12 = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iiomxi = 'FLZ8XZO' + index;
let cndKS3T = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stYYmjq', cndKS3T);
let cndEW3v = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('stEwu8L', cndEW3v);
let cnduB4L = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('stxfpWM', cnduB4L);
let cndLe85 = notification.type == 'task';
this.setState('stXsZnZ', cndLe85);
let cndfNNn = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('stPKGdP', cndfNNn);
let cndI_tK = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('stUvIza', cndI_tK);
let cndlhxQ = notification.type == 'chatRooms';
this.setState('stHQ3v4', cndlhxQ);
let cndmfi3 = notification.type == 'post';
this.setState('stGTGno', cndmfi3);
let cnd314Y = notification.type == 'comment';
this.setState('stuXMeD', cnd314Y);
let cndl2hp = notification.type == 'project';
this.setState('steJp64', cndl2hp);
let cndm680 = notification.type == 'bug';
this.setState('stC6y50', cndm680);
if (cndKS3T) { 
let elphcDx = eo('li','msYff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elKv7CA = eo('a','nxBff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elpnnJu = eo('i','yJhff'+iiomxi,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university')} red-text bold mr-2 fa-2x v-middle icon`);
ec('i');
text(`Your answer to`);
let elGQyqg = eo('strong','yQiff'+iiomxi,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpV9BO = this._lc('cDzmasfb8', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stYYmjq',insideLoop:true,index:"" +iiomxi});
ec('a');
let eljGg4z = eo('button','AJqff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elQlxue = eo('i','QzAff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljGg4z;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndEW3v) { 
let elUtVFA = eo('li','nFuff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let eloeVYR = eo('a','R7Jff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let elCjvT6 = eo('i','Aoyff'+iiomxi,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university')} bold mr-2 fa-2x v-middle icon  ${cls({'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'})}`);
ec('i');
let elaEMHj = eo('span','5wOff'+iiomxi,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let elT46f5 = eo('span','abhff'+iiomxi,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndmLrp = notification.extra.status == 'new';
this.setState('stblrDf', cndmLrp);
let cndGCjc = notification.extra.status == 'update';
this.setState('stuoVGD', cndGCjc);
if (cndmLrp) { 
let el7fhpq = eo('span','Yqcff'+iiomxi,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndGCjc) { 
let elfPlmI = eo('span','40sff'+iiomxi,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elFBN6o = eo('strong','EE9ff'+iiomxi,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpxmr5 = this._lc('ck38N_eOc', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiomxi});
ec('a');
let elfKGFk = eo('button','0ROff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let eltE3Ma = eo('i','I_sff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfKGFk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnduB4L) { 
let elsxCP1 = eo('li','bavff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elrHGLO = eo('a','Okhff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elnbOO4 = eo('span','6W8ff'+iiomxi,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elM9aKj = eo('strong','of6ff'+iiomxi,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmpHYpC = this._lc('cNkvYsVM_', {parent:component,props:{coins:notification.extra.lostGold},state:'stxfpWM',insideLoop:true,index:"" +iiomxi});
let cmp5acC = this._lc('cx4cXy8Ce', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stxfpWM',insideLoop:true,index:"" +iiomxi});
ec('a');
let el6zPZU = eo('button','yP_ff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elZwTYS = eo('i','jq2ff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6zPZU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndLe85) { 
let el13zTj = eo('li','UbFff'+iiomxi,null,`class`,`panel-item task-item ${cls({unseen: notification.seen === false})}`);
let elNAiyd = eo('a','BQTff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elKzj6s = eo('i','fyJff'+iiomxi,null,`title`,``,`class`,`${fas('tasks')} green-text bold mr-2 fa-2x v-top icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elKzj6s;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let elgCjv4 = eo('div','Ng_ff'+iiomxi,null,`class`,`d-inline-block task-meta`);
let elqtvp3 = eo('span','OsSff'+iiomxi,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elXy5gB = eo('small','jo_ff'+iiomxi,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpxnMu = this._lc('cpzKO941h', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stXsZnZ',insideLoop:true,index:"" +iiomxi});
ec('div');
ec('a');
let elhhKLi = eo('button','Q2off'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elId7Oq = eo('i','lGjff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elhhKLi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndfNNn) { 
let el9ieNY = eo('li','Dp6ff'+iiomxi,null,`class`,`panel-item einstein-chamber ${cls({unseen: notification.seen === false})}`);
let eldJ3A9 = eo('a','E1kff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let eljv2Bh = eo('span','Ysyff'+iiomxi,null,`class`,`red-text bold mr-2`);
let elqGYfG = ev('img','2ZSff'+iiomxi,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elzVCS3 = eo('strong','T_hff'+iiomxi,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let elL2rBc = eo('span','mQNff'+iiomxi,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmpsA2e = this._lc('caeK451I8', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stPKGdP',insideLoop:true,index:"" +iiomxi});
ec('a');
ec('li');
}else if (cndI_tK) { 
let elGMU24 = eo('li','LXtff'+iiomxi,null,`class`,`panel-item einstein-chamber ${cls({unseen: notification.seen === false})}`);
let elvudLB = eo('a','_hkff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let elCOYJA = eo('span','KcXff'+iiomxi,null,`class`,`red-text bold mr-2`);
let elzFI15 = ev('img','Svwff'+iiomxi,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let eltlEYJ = eo('span','mVdff'+iiomxi,null,`class`,`notification-text`);
let elR9Evm = eo('strong','6oKff'+iiomxi,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let el542Ar = eo('strong','Jidff'+iiomxi,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let eluVC1p = eo('strong','dPnff'+iiomxi,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elatTFr = eo('span','UNEff'+iiomxi,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmp1ilb = this._lc('cuiJCsue2', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stUvIza',insideLoop:true,index:"" +iiomxi});
ec('a');
ec('li');
}else if (cndlhxQ) { 
let elYvImL = eo('li','CvRff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elxwjOZ = eo('a','eIXff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let elBiTzp = eo('i','lyAff'+iiomxi,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments')} bold mr-2 fa-2x v-middle icon  ${cls({'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'})}`);
ec('i');
let cnd8CbX = notification.extra.status;
this.setState('stHcN12', cnd8CbX);
let cndl8CJ = notification.extra.newRequest;
this.setState('st9f1iT', cndl8CJ);
if (cnd8CbX) { 
let cnd7Fmt = notification.extra.status == 'approved';
this.setState('stpeYWZ', cnd7Fmt);
let cndEnC_ = notification.extra.status == 'decline';
this.setState('stEB6dS', cndEnC_);
if (cnd7Fmt) { 
let elTHvpK = eo('i','r8vff'+iiomxi,null,`class`,`${fas('check')} green-text icon`);
ec('i');
}else if (cndEnC_) { 
let eldbL0T = eo('i','uMXff'+iiomxi,null,`class`,`${fas('times')} red-text icon`);
ec('i');
}text(`Your request to`);
let elsVO3I = eo('strong','DXnff'+iiomxi,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cndl8CJ) { 
let el_Jxo1 = eo('strong','Lnaff'+iiomxi,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let eltlh_t = eo('strong','T2Tff'+iiomxi,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let elsKMhN = eo('strong','okGff'+iiomxi,null,`class`,` ${cls({'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'})}`);
text(notification.extra.status);
ec('strong');
let cmp2xzJ = this._lc('cI3Qt7Kkv', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiomxi});
ec('a');
let elJpQkY = eo('button','pvIff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elDNC4j = eo('i','bovff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elJpQkY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndmfi3) { 
let elBarn1 = eo('li','ta5ff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let el4Gv86 = eo('a','YvBff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let el9VIRl = eo('i','OMzff'+iiomxi,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot')} bold mr-2 fa-2x v-middle icon  ${cls({'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'})}`);
ec('i');
let el4hRFj = eo('span','Y1rff'+iiomxi,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let elwmpqZ = eo('strong','1z9ff'+iiomxi,null,`class`,`ml-2 ${cls({'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'})}`);
text(notification.extra.status);
ec('strong');
let cmpB9zH = this._lc('cPCEPl33a', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stGTGno',insideLoop:true,index:"" +iiomxi});
ec('a');
let elB37SG = eo('button','qF0ff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elx4CvU = eo('i','Hd_ff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elB37SG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd314Y) { 
let elFMH7f = eo('li','tVoff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elyoEvT = eo('a','wXiff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let elc0Bis = ev('img','SNQff'+iiomxi,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let elxffb6 = eo('div','jZDff'+iiomxi,null,`class`,`content`);
let elEPFCp = eo('span','Eqlff'+iiomxi);
text(notification.title);
ec('span');
let elinqf2 = eo('small','qYXff'+iiomxi,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpkdkK = this._lc('cRQnpe_qD', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stuXMeD',insideLoop:true,index:"" +iiomxi});
ec('div');
ec('a');
let elbr1_s = eo('button','MYdff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elSzK6s = eo('i','Qv1ff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elbr1_s;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndl2hp) { 
let el2gsCy = eo('li','7Gcff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let ellYda9 = eo('a','xkfff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elHCelw = ev('img','hkJff'+iiomxi,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let elKRhcn = eo('div','_Wrff'+iiomxi,null,`class`,`content`);
let cndd_3_ = notification.extra.type == 'dismissed';
this.setState('stThSqJ', cndd_3_);
let cndw4MR = !(cndd_3_);
this.setState('stky3qX', cndw4MR);
if (cndd_3_) { 
let elsdHmA = eo('span','CMqff'+iiomxi,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let el0jBbg = eo('span','bp9ff'+iiomxi,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elMKyYi = eo('span','z6Dff'+iiomxi);
text(notification.title);
ec('span');
let elsvdp3 = eo('small','lAVff'+iiomxi,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpCmw8 = this._lc('cDd1vFb3Z', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiomxi});
ec('div');
ec('a');
let elUwmYz = eo('button','tTJff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elIPH9P = eo('i','_xtff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUwmYz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndm680) { 
let elM_CBG = eo('li','Z4xff'+iiomxi,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elwIm0a = eo('a','veWff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let elKWmLW = ev('img','5Xiff'+iiomxi,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elqtdRt = eo('div','K6iff'+iiomxi,null,`class`,`content`);
let els1sK0 = eo('span','AGhff'+iiomxi);
text(notification.title);
ec('span');
let el1eI39 = eo('small','1vPff'+iiomxi,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp8Z7f = this._lc('cNYUjrFJU', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stC6y50',insideLoop:true,index:"" +iiomxi});
ec('div');
ec('a');
let elCRwoe = eo('button','40sff'+iiomxi,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elbdJEF = eo('i','DI5ff'+iiomxi,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCRwoe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let el4d6tN = eo('section',null,null,`class`,`footer`);
let elrBIyR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let elovqdx = eo('i',null,null,`class`,`${fas('trash')} mr-2 icon`);
ec('i');
let elB82gf = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elrBIyR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elBdi2s = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndDEPd = component.confirmRemoving;
this.setState('stqJ0Yk', cndDEPd);
if (cndDEPd) { 
let cmpZdt2 = this._lc('cXL55juPp', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'stqJ0Yk'});
}
                    this.isReadyToGo();
                }
        });