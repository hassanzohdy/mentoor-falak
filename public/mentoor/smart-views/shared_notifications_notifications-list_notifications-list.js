_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {cqGeQus1y:'flk-spinner',cS82Gn6z0:'flk-time-ago',c3k3cLu5u:'flk-time-ago',cqndT4N9Z:'gold-icon',cK6hOj5sq:'flk-time-ago',cP8RMOZXT:'flk-time-ago',cKPTfyXCn:'flk-time-ago',cCPQMYMVP:'flk-time-ago',ckGsbttgS:'flk-time-ago',clSc5vjGS:'flk-time-ago',cLSGbWm1N:'flk-time-ago',cyNAJ3u33:'flk-time-ago',cM2Yq8g0f:'flk-time-ago',cn_0LTokd:'flk-alert'},
                render: function (component) {
                    let elQxtEP = eo('section',null,null,`class`,`panel-wrapper`,`id`,`notifications-list`);
component.notificationContainer = elQxtEP;
elQxtEP.cls = { empty: Is.empty(component.user.notifications)};

            for (let className in elQxtEP.cls) {
                elQxtEP.classList.toggle(className, elQxtEP.cls[className]);
            }  
            let el6Xn48 = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndGFoP = component.isLoading;
this.setState('stAcs4C', cndGFoP);
let cndItW6 = ! Is.empty(component.notifications);
this.setState('st8dmHZ', cndItW6);
let cndYiaO = !(cndGFoP||cndItW6);
this.setState('stFSr7V', cndYiaO);
if (cndGFoP) { 
let cmpG6fU = this._lc('cqGeQus1y', {parent:component,attrs:{theme:'black'},state:'stAcs4C'});
}else if (cndItW6) { 
let eljjQMK = eo('div',null,null,`class`,`list-wrapper`);
let elbX3RS = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iiSySt = 'BtrRU88' + index;
let cndkx_X = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stPWQod', cndkx_X);
let cnd9Bs4 = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('stq6j0p', cnd9Bs4);
let cndJ_Pf = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('st0eTFF', cndJ_Pf);
let cndcPyB = notification.type == 'task';
this.setState('stN9oom', cndcPyB);
let cndp2qM = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('sttm1s2', cndp2qM);
let cndGxby = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('strDviN', cndGxby);
let cndQDIS = notification.type == 'chatRooms';
this.setState('stP4Hmr', cndQDIS);
let cndhPdc = notification.type == 'post';
this.setState('stlUt2_', cndhPdc);
let cnd9ULb = notification.type == 'comment';
this.setState('stVXJu7', cnd9ULb);
let cnd1fI9 = notification.type == 'project';
this.setState('stdzc3T', cnd1fI9);
let cnd17A_ = notification.type == 'bug';
this.setState('styofJL', cnd17A_);
if (cndkx_X) { 
let eliTCtx = eo('li','Lwqff'+iiSySt,null,`class`,`panel-item`);
eliTCtx.cls = {unseen: notification.seen === false};

            for (let className in eliTCtx.cls) {
                eliTCtx.classList.toggle(className, eliTCtx.cls[className]);
            }  
            let elgbYrW = eo('a','E3gff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elfGXfu = eo('i','_Z4ff'+iiSySt,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university') + ' red-text bold mr-2 fa-2x v-middle icon'}`);
ec('i');
text(`Your answer to`);
let eloQVqd = eo('strong','FlVff'+iiSySt,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpGhts = this._lc('cS82Gn6z0', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stPWQod',insideLoop:true,index:"" +iiSySt});
ec('a');
let elqptWw = eo('button','1bRff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elLZ7og = eo('i','e3gff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elqptWw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd9Bs4) { 
let elQWk2F = eo('li','uNFff'+iiSySt,null,`class`,`panel-item`);
elQWk2F.cls = {unseen: notification.seen === false};

            for (let className in elQWk2F.cls) {
                elQWk2F.classList.toggle(className, elQWk2F.cls[className]);
            }  
            let el6JjHl = eo('a','WdIff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let elZzCrN = eo('i','fY1ff'+iiSySt,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university') + ' bold mr-2 fa-2x v-middle icon'}`);
elZzCrN.cls = {'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'};

            for (let className in elZzCrN.cls) {
                elZzCrN.classList.toggle(className, elZzCrN.cls[className]);
            }  
            ec('i');
let elITI5Q = eo('span','stuff'+iiSySt,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let eloGYkG = eo('span','K3Vff'+iiSySt,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndgNWX = notification.extra.status == 'new';
this.setState('stB8v_4', cndgNWX);
let cnd6MNz = notification.extra.status == 'update';
this.setState('stMTTga', cnd6MNz);
if (cndgNWX) { 
let eldyvD_ = eo('span','E7Gff'+iiSySt,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cnd6MNz) { 
let elVW1rB = eo('span','m82ff'+iiSySt,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elRfMvH = eo('strong','6V9ff'+iiSySt,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpq17w = this._lc('c3k3cLu5u', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiSySt});
ec('a');
let el3w2yd = eo('button','3bJff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el8OiDy = eo('i','7JMff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3w2yd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndJ_Pf) { 
let elalGor = eo('li','acpff'+iiSySt,null,`class`,`panel-item`);
elalGor.cls = {unseen: notification.seen === false};

            for (let className in elalGor.cls) {
                elalGor.classList.toggle(className, elalGor.cls[className]);
            }  
            let elBVmB_ = eo('a','I1zff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let el5HdyB = eo('span','TiQff'+iiSySt,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elYGMgU = eo('strong','0Yyff'+iiSySt,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmpksOd = this._lc('cqndT4N9Z', {parent:component,props:{coins:notification.extra.lostGold},state:'st0eTFF',insideLoop:true,index:"" +iiSySt});
let cmpmUWg = this._lc('cK6hOj5sq', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st0eTFF',insideLoop:true,index:"" +iiSySt});
ec('a');
let el9uis4 = eo('button','cImff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elVgsFj = eo('i','3eDff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9uis4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndcPyB) { 
let elr4xe6 = eo('li','CTYff'+iiSySt,null,`class`,`panel-item task-item`);
elr4xe6.cls = {unseen: notification.seen === false};

            for (let className in elr4xe6.cls) {
                elr4xe6.classList.toggle(className, elr4xe6.cls[className]);
            }  
            let elT0p7q = eo('a','MkZff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elkjOi9 = eo('i','576ff'+iiSySt,null,`title`,``,`class`,`${fas('tasks') + ' green-text bold mr-2 fa-2x v-top icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elkjOi9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let elf_brP = eo('div','7G9ff'+iiSySt,null,`class`,`d-inline-block task-meta`);
let elXZDe4 = eo('span','c_fff'+iiSySt,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elypFUJ = eo('small','dCNff'+iiSySt,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpUlKL = this._lc('cP8RMOZXT', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stN9oom',insideLoop:true,index:"" +iiSySt});
ec('div');
ec('a');
let elPIvdn = eo('button','HW4ff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elSILmK = eo('i','4wQff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPIvdn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndp2qM) { 
let el_27kA = eo('li','iuPff'+iiSySt,null,`class`,`panel-item einstein-chamber`);
el_27kA.cls = {unseen: notification.seen === false};

            for (let className in el_27kA.cls) {
                el_27kA.classList.toggle(className, el_27kA.cls[className]);
            }  
            let elr6EdF = eo('a','K1Gff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let elCaKg2 = eo('span','0Cnff'+iiSySt,null,`class`,`red-text bold mr-2`);
let el7HLK5 = ev('img','a44ff'+iiSySt,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elE2IxK = eo('strong','H6Lff'+iiSySt,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let el3bIBn = eo('span','k4Qff'+iiSySt,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmpGstz = this._lc('cKPTfyXCn', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'sttm1s2',insideLoop:true,index:"" +iiSySt});
ec('a');
ec('li');
}else if (cndGxby) { 
let elRi_gz = eo('li','5cpff'+iiSySt,null,`class`,`panel-item einstein-chamber`);
elRi_gz.cls = {unseen: notification.seen === false};

            for (let className in elRi_gz.cls) {
                elRi_gz.classList.toggle(className, elRi_gz.cls[className]);
            }  
            let elrQggI = eo('a','6o6ff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let elEQa7_ = eo('span','iFMff'+iiSySt,null,`class`,`red-text bold mr-2`);
let elYrriL = ev('img','XB_ff'+iiSySt,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let el4_lwa = eo('span','JK_ff'+iiSySt,null,`class`,`notification-text`);
let elEv3iH = eo('strong','BKTff'+iiSySt,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let ela9nau = eo('strong','HR1ff'+iiSySt,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let elwCZXj = eo('strong','5pIff'+iiSySt,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elAkaJE = eo('span','A8Aff'+iiSySt,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmpX6Mb = this._lc('cCPQMYMVP', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'strDviN',insideLoop:true,index:"" +iiSySt});
ec('a');
ec('li');
}else if (cndQDIS) { 
let elIgimB = eo('li','lzpff'+iiSySt,null,`class`,`panel-item`);
elIgimB.cls = {unseen: notification.seen === false};

            for (let className in elIgimB.cls) {
                elIgimB.classList.toggle(className, elIgimB.cls[className]);
            }  
            let elAGC5Y = eo('a','oyCff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let elzDd3B = eo('i','Svvff'+iiSySt,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments') + ' bold mr-2 fa-2x v-middle icon'}`);
elzDd3B.cls = {'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'};

            for (let className in elzDd3B.cls) {
                elzDd3B.classList.toggle(className, elzDd3B.cls[className]);
            }  
            ec('i');
let cnd7ZDc = notification.extra.status;
this.setState('stFQLUP', cnd7ZDc);
let cnd6_hc = notification.extra.newRequest;
this.setState('stnl4I_', cnd6_hc);
if (cnd7ZDc) { 
let cndwmoi = notification.extra.status == 'approved';
this.setState('st2NgMv', cndwmoi);
let cnd93pb = notification.extra.status == 'decline';
this.setState('stwhvyT', cnd93pb);
if (cndwmoi) { 
let elWulNY = eo('i','0LOff'+iiSySt,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}else if (cnd93pb) { 
let ele_ye0 = eo('i','PD_ff'+iiSySt,null,`class`,`${fas('times') + ' red-text icon'}`);
ec('i');
}text(`Your request to`);
let elCT4ez = eo('strong','5Krff'+iiSySt,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cnd6_hc) { 
let elqLsNc = eo('strong','Ipnff'+iiSySt,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let el7kZJF = eo('strong','OWXff'+iiSySt,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let el6PlY1 = eo('strong','apIff'+iiSySt);
el6PlY1.cls = {'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'};

            for (let className in el6PlY1.cls) {
                el6PlY1.classList.toggle(className, el6PlY1.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpuZsY = this._lc('ckGsbttgS', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiSySt});
ec('a');
let elmv67E = eo('button','Ft5ff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elKgMYC = eo('i','HLrff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmv67E;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndhPdc) { 
let elaLBqg = eo('li','ryqff'+iiSySt,null,`class`,`panel-item`);
elaLBqg.cls = {unseen: notification.seen === false};

            for (let className in elaLBqg.cls) {
                elaLBqg.classList.toggle(className, elaLBqg.cls[className]);
            }  
            let elhzQK6 = eo('a','WTQff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elvkUQq = eo('i','oI3ff'+iiSySt,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot') + ' bold mr-2 fa-2x v-middle icon'}`);
elvkUQq.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elvkUQq.cls) {
                elvkUQq.classList.toggle(className, elvkUQq.cls[className]);
            }  
            ec('i');
let elxeu5U = eo('span','Bl3ff'+iiSySt,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let el8do3n = eo('strong','E5Sff'+iiSySt,null,`class`,`ml-2`);
el8do3n.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in el8do3n.cls) {
                el8do3n.classList.toggle(className, el8do3n.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpYYh1 = this._lc('clSc5vjGS', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stlUt2_',insideLoop:true,index:"" +iiSySt});
ec('a');
let elpiabc = eo('button','KMqff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elHZCwh = eo('i','ymAff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpiabc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd9ULb) { 
let elAu9_i = eo('li','exIff'+iiSySt,null,`class`,`panel-item`);
elAu9_i.cls = {unseen: notification.seen === false};

            for (let className in elAu9_i.cls) {
                elAu9_i.classList.toggle(className, elAu9_i.cls[className]);
            }  
            let elbyq_R = eo('a','d8jff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let elQuEQy = ev('img','PCiff'+iiSySt,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let elpGo0x = eo('div','0jxff'+iiSySt,null,`class`,`content`);
let elC7dER = eo('span','Izrff'+iiSySt);
text(notification.title);
ec('span');
let el1uZoF = eo('small','lDFff'+iiSySt,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpdUDv = this._lc('cLSGbWm1N', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stVXJu7',insideLoop:true,index:"" +iiSySt});
ec('div');
ec('a');
let elXYZgx = eo('button','EDpff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elqRne_ = eo('i','Fyeff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXYZgx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd1fI9) { 
let elyl3Zi = eo('li','QhNff'+iiSySt,null,`class`,`panel-item`);
elyl3Zi.cls = {unseen: notification.seen === false};

            for (let className in elyl3Zi.cls) {
                elyl3Zi.classList.toggle(className, elyl3Zi.cls[className]);
            }  
            let elOMSin = eo('a','W8Uff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elSNZB_ = ev('img','24Qff'+iiSySt,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let el2hZ0E = eo('div','GYEff'+iiSySt,null,`class`,`content`);
let cnd5jOs = notification.extra.type == 'dismissed';
this.setState('stwee7d', cnd5jOs);
let cndELGQ = !(cnd5jOs);
this.setState('sthsyGl', cndELGQ);
if (cnd5jOs) { 
let eldn2Ak = eo('span','TXQff'+iiSySt,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let elgXn_u = eo('span','uFuff'+iiSySt,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elwN2lU = eo('span','_j3ff'+iiSySt);
text(notification.title);
ec('span');
let elFfM57 = eo('small','ebQff'+iiSySt,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp_Tvp = this._lc('cyNAJ3u33', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiSySt});
ec('div');
ec('a');
let eljBEMl = eo('button','VxAff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elBHP0n = eo('i','oPIff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eljBEMl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd17A_) { 
let elpzzwM = eo('li','FIuff'+iiSySt,null,`class`,`panel-item`);
elpzzwM.cls = {unseen: notification.seen === false};

            for (let className in elpzzwM.cls) {
                elpzzwM.classList.toggle(className, elpzzwM.cls[className]);
            }  
            let elCFQOn = eo('a','1HXff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let elQ13VV = ev('img','is3ff'+iiSySt,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elCPV7O = eo('div','3Cbff'+iiSySt,null,`class`,`content`);
let elkxao_ = eo('span','Y6Kff'+iiSySt);
text(notification.title);
ec('span');
let el6yQL5 = eo('small','iMoff'+iiSySt,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmphuJS = this._lc('cM2Yq8g0f', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'styofJL',insideLoop:true,index:"" +iiSySt});
ec('div');
ec('a');
let elRd35G = eo('button','rsaff'+iiSySt,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let eltKtza = eo('i','HbNff'+iiSySt,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRd35G;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let elWjigR = eo('section',null,null,`class`,`footer`);
let eleb2MO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let el97CaI = eo('i',null,null,`class`,`${fas('trash') + ' mr-2 icon'}`);
ec('i');
let elTeiMi = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = eleb2MO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elfHbkC = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndLrUH = component.confirmRemoving;
this.setState('stwcuJa', cndLrUH);
if (cndLrUH) { 
let cmpil2m = this._lc('cn_0LTokd', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'stwcuJa'});
}
                    this.isReadyToGo();
                }
        });