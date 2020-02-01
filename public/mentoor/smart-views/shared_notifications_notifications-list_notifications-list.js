_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {c_K8ZHhuM:'flk-spinner',cdQJoXz4U:'flk-time-ago',c8cj0Ad4U:'flk-time-ago',c7J95QZNX:'gold-icon',cB5EDIIAW:'flk-time-ago',cIqs1tFeo:'flk-time-ago',c317CH06h:'flk-time-ago',cuBnXgMzd:'flk-time-ago',cVmnOBQNo:'flk-time-ago',c5koHt8fz:'flk-time-ago',cSvPe6KvA:'flk-time-ago',cJ4kbd4mG:'flk-time-ago',cN0SfLfyW:'flk-time-ago',c_IY_i0AJ:'flk-alert'},
                render: function (component) {
                    let elCSimo = eo('section',null,null,`class`,`panel-wrapper`,`id`,`notifications-list`);
component.notificationContainer = elCSimo;
elCSimo.cls = { empty: Is.empty(component.user.notifications)};

            for (let className in elCSimo.cls) {
                elCSimo.classList.toggle(className, elCSimo.cls[className]);
            }  
            let elLDC8q = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndHTvl = component.isLoading;
this.setState('stL_pNM', cndHTvl);
let cndehp8 = ! Is.empty(component.notifications);
this.setState('stD5w7x', cndehp8);
let cndfe3F = !(cndHTvl||cndehp8);
this.setState('stvpHdj', cndfe3F);
if (cndHTvl) { 
let cmpNu_p = this._lc('c_K8ZHhuM', {parent:component,attrs:{theme:'black'},state:'stL_pNM'});
}else if (cndehp8) { 
let elEPKEk = eo('div',null,null,`class`,`list-wrapper`);
let elvdltg = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iibLtn = 'OPFLcRX' + index;
let cndFJr5 = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stesmrn', cndFJr5);
let cndSsTi = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('st_k88N', cndSsTi);
let cndnNkx = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('stcrew2', cndnNkx);
let cndEAMh = notification.type == 'task';
this.setState('stwssCd', cndEAMh);
let cndnqW9 = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('sthJqt6', cndnqW9);
let cndOsxa = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('stn54A7', cndOsxa);
let cndvsB6 = notification.type == 'chatRooms';
this.setState('stmrVh_', cndvsB6);
let cndVPpF = notification.type == 'post';
this.setState('stgWLPi', cndVPpF);
let cnd1Z8D = notification.type == 'comment';
this.setState('stL3_qb', cnd1Z8D);
let cndt3Rw = notification.type == 'project';
this.setState('stXrlL3', cndt3Rw);
let cndkyl3 = notification.type == 'bug';
this.setState('stmmBN2', cndkyl3);
if (cndFJr5) { 
let elEOZF0 = eo('li','sezff'+iibLtn,null,`class`,`panel-item`);
elEOZF0.cls = {unseen: notification.seen === false};

            for (let className in elEOZF0.cls) {
                elEOZF0.classList.toggle(className, elEOZF0.cls[className]);
            }  
            let elG9zvl = eo('a','wnGff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let el5YGoA = eo('i','m4Tff'+iibLtn,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university') + ' red-text bold mr-2 fa-2x v-middle icon'}`);
ec('i');
text(`Your answer to`);
let el8P8k9 = eo('strong','_3_ff'+iibLtn,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpiZ7L = this._lc('cdQJoXz4U', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stesmrn',insideLoop:true,index:"" +iibLtn});
ec('a');
let elbFE12 = eo('button','2w6ff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elkE_lG = eo('i','mHxff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elbFE12;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndSsTi) { 
let elHGu2_ = eo('li','UqXff'+iibLtn,null,`class`,`panel-item`);
elHGu2_.cls = {unseen: notification.seen === false};

            for (let className in elHGu2_.cls) {
                elHGu2_.classList.toggle(className, elHGu2_.cls[className]);
            }  
            let elk0UxL = eo('a','3Syff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let elIZx32 = eo('i','ZG1ff'+iibLtn,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university') + ' bold mr-2 fa-2x v-middle icon'}`);
elIZx32.cls = {'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'};

            for (let className in elIZx32.cls) {
                elIZx32.classList.toggle(className, elIZx32.cls[className]);
            }  
            ec('i');
let elZQc8m = eo('span','25Qff'+iibLtn,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let eljmEF7 = eo('span','TUYff'+iibLtn,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndgVzJ = notification.extra.status == 'new';
this.setState('stkCZY5', cndgVzJ);
let cndqlfh = notification.extra.status == 'update';
this.setState('stYOnd5', cndqlfh);
if (cndgVzJ) { 
let elDsMEC = eo('span','GfEff'+iibLtn,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndqlfh) { 
let elrwvM9 = eo('span','b4eff'+iibLtn,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elgKnth = eo('strong','PJXff'+iibLtn,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpQYRo = this._lc('c8cj0Ad4U', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iibLtn});
ec('a');
let elBjrnf = eo('button','QUMff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el0Yms3 = eo('i','wZNff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBjrnf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndnNkx) { 
let elbwahP = eo('li','srsff'+iibLtn,null,`class`,`panel-item`);
elbwahP.cls = {unseen: notification.seen === false};

            for (let className in elbwahP.cls) {
                elbwahP.classList.toggle(className, elbwahP.cls[className]);
            }  
            let elI8JT4 = eo('a','kMiff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let el5nmSF = eo('span','4Xaff'+iibLtn,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elY8E1d = eo('strong','Sbeff'+iibLtn,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmppOzJ = this._lc('c7J95QZNX', {parent:component,props:{coins:notification.extra.lostGold},state:'stcrew2',insideLoop:true,index:"" +iibLtn});
let cmpNWbo = this._lc('cB5EDIIAW', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stcrew2',insideLoop:true,index:"" +iibLtn});
ec('a');
let elCYxE_ = eo('button','Xpuff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elyOqqx = eo('i','pfVff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCYxE_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndEAMh) { 
let el7eJRI = eo('li','SIGff'+iibLtn,null,`class`,`panel-item task-item`);
el7eJRI.cls = {unseen: notification.seen === false};

            for (let className in el7eJRI.cls) {
                el7eJRI.classList.toggle(className, el7eJRI.cls[className]);
            }  
            let elVuppt = eo('a','HK_ff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let el2Le4e = eo('i','G9nff'+iibLtn,null,`title`,``,`class`,`${fas('tasks') + ' green-text bold mr-2 fa-2x v-top icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el2Le4e;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let elCLNq9 = eo('div','wo6ff'+iibLtn,null,`class`,`d-inline-block task-meta`);
let elzMvmf = eo('span','UkMff'+iibLtn,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elewUAD = eo('small','xx5ff'+iibLtn,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp0z_w = this._lc('cIqs1tFeo', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stwssCd',insideLoop:true,index:"" +iibLtn});
ec('div');
ec('a');
let elagDwc = eo('button','1xYff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elfdNWP = eo('i','GiIff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elagDwc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndnqW9) { 
let elSzLv0 = eo('li','T4Cff'+iibLtn,null,`class`,`panel-item einstein-chamber`);
elSzLv0.cls = {unseen: notification.seen === false};

            for (let className in elSzLv0.cls) {
                elSzLv0.classList.toggle(className, elSzLv0.cls[className]);
            }  
            let el69pMi = eo('a','kA3ff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let el3FrSA = eo('span','EMKff'+iibLtn,null,`class`,`red-text bold mr-2`);
let elmoFiE = ev('img','nqvff'+iibLtn,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elmvqF3 = eo('strong','MSlff'+iibLtn,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let elHXq_q = eo('span','Ocwff'+iibLtn,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmpPFBo = this._lc('c317CH06h', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'sthJqt6',insideLoop:true,index:"" +iibLtn});
ec('a');
ec('li');
}else if (cndOsxa) { 
let elXoC2c = eo('li','iKNff'+iibLtn,null,`class`,`panel-item einstein-chamber`);
elXoC2c.cls = {unseen: notification.seen === false};

            for (let className in elXoC2c.cls) {
                elXoC2c.classList.toggle(className, elXoC2c.cls[className]);
            }  
            let elSxQ1i = eo('a','RhXff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let el5EO9M = eo('span','4dmff'+iibLtn,null,`class`,`red-text bold mr-2`);
let el6SfLS = ev('img','AcIff'+iibLtn,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let eljGPPN = eo('span','E52ff'+iibLtn,null,`class`,`notification-text`);
let elvGZ8Q = eo('strong','5W8ff'+iibLtn,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let elGsG9i = eo('strong','OYcff'+iibLtn,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let elc_lzD = eo('strong','E04ff'+iibLtn,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elQWwsu = eo('span','zl7ff'+iibLtn,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmpXXRD = this._lc('cuBnXgMzd', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stn54A7',insideLoop:true,index:"" +iibLtn});
ec('a');
ec('li');
}else if (cndvsB6) { 
let elaystV = eo('li','K5Uff'+iibLtn,null,`class`,`panel-item`);
elaystV.cls = {unseen: notification.seen === false};

            for (let className in elaystV.cls) {
                elaystV.classList.toggle(className, elaystV.cls[className]);
            }  
            let elPNZHl = eo('a','nD7ff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let eldGxMY = eo('i','a8nff'+iibLtn,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments') + ' bold mr-2 fa-2x v-middle icon'}`);
eldGxMY.cls = {'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'};

            for (let className in eldGxMY.cls) {
                eldGxMY.classList.toggle(className, eldGxMY.cls[className]);
            }  
            ec('i');
let cndhHJR = notification.extra.status;
this.setState('stsk7_s', cndhHJR);
let cnduxek = notification.extra.newRequest;
this.setState('st3Ugis', cnduxek);
if (cndhHJR) { 
let cnde3vk = notification.extra.status == 'approved';
this.setState('sthtkwG', cnde3vk);
let cndjMSb = notification.extra.status == 'decline';
this.setState('stHgWA3', cndjMSb);
if (cnde3vk) { 
let elAV4iN = eo('i','rCRff'+iibLtn,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}else if (cndjMSb) { 
let elNAPMp = eo('i','Nokff'+iibLtn,null,`class`,`${fas('times') + ' red-text icon'}`);
ec('i');
}text(`Your request to`);
let elrNtyH = eo('strong','j0Iff'+iibLtn,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cnduxek) { 
let eljhCFW = eo('strong','agGff'+iibLtn,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let el7Wi2R = eo('strong','BOyff'+iibLtn,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let elTInM0 = eo('strong','Qocff'+iibLtn);
elTInM0.cls = {'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'};

            for (let className in elTInM0.cls) {
                elTInM0.classList.toggle(className, elTInM0.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmplRVO = this._lc('cVmnOBQNo', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iibLtn});
ec('a');
let el4xFMr = eo('button','ZCPff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elJU08w = eo('i','qXnff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el4xFMr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndVPpF) { 
let elL3H2m = eo('li','bz_ff'+iibLtn,null,`class`,`panel-item`);
elL3H2m.cls = {unseen: notification.seen === false};

            for (let className in elL3H2m.cls) {
                elL3H2m.classList.toggle(className, elL3H2m.cls[className]);
            }  
            let el8h_Ji = eo('a','YQIff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elG2JcE = eo('i','zVKff'+iibLtn,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot') + ' bold mr-2 fa-2x v-middle icon'}`);
elG2JcE.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elG2JcE.cls) {
                elG2JcE.classList.toggle(className, elG2JcE.cls[className]);
            }  
            ec('i');
let ell8gdN = eo('span','aXaff'+iibLtn,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let elwN7Ml = eo('strong','Ulcff'+iibLtn,null,`class`,`ml-2`);
elwN7Ml.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elwN7Ml.cls) {
                elwN7Ml.classList.toggle(className, elwN7Ml.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpwMW1 = this._lc('c5koHt8fz', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stgWLPi',insideLoop:true,index:"" +iibLtn});
ec('a');
let elVm6Q2 = eo('button','GSGff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elkMzd0 = eo('i','jT4ff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVm6Q2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd1Z8D) { 
let elHCtgk = eo('li','ognff'+iibLtn,null,`class`,`panel-item`);
elHCtgk.cls = {unseen: notification.seen === false};

            for (let className in elHCtgk.cls) {
                elHCtgk.classList.toggle(className, elHCtgk.cls[className]);
            }  
            let eloyWcu = eo('a','q_uff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let el9BENJ = ev('img','cJ8ff'+iibLtn,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let el0rZOV = eo('div','IaEff'+iibLtn,null,`class`,`content`);
let elagaxM = eo('span','i5Off'+iibLtn);
text(notification.title);
ec('span');
let elDAKnC = eo('small','9Hvff'+iibLtn,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmp5Gv5 = this._lc('cSvPe6KvA', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stL3_qb',insideLoop:true,index:"" +iibLtn});
ec('div');
ec('a');
let elNva55 = eo('button','ilVff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let eleifgN = eo('i','swSff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elNva55;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndt3Rw) { 
let el3uT_Y = eo('li','Frvff'+iibLtn,null,`class`,`panel-item`);
el3uT_Y.cls = {unseen: notification.seen === false};

            for (let className in el3uT_Y.cls) {
                el3uT_Y.classList.toggle(className, el3uT_Y.cls[className]);
            }  
            let el_rwWC = eo('a','yArff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elY06lx = ev('img','KGyff'+iibLtn,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let elFPv6F = eo('div','TI4ff'+iibLtn,null,`class`,`content`);
let cndn5kT = notification.extra.type == 'dismissed';
this.setState('stGS3LL', cndn5kT);
let cndOA9t = !(cndn5kT);
this.setState('stwm0zy', cndOA9t);
if (cndn5kT) { 
let el5XwVD = eo('span','DNcff'+iibLtn,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let elfQY0B = eo('span','rLRff'+iibLtn,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let el5VvrW = eo('span','a9Gff'+iibLtn);
text(notification.title);
ec('span');
let el71yYm = eo('small','znoff'+iibLtn,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpqU5H = this._lc('cJ4kbd4mG', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iibLtn});
ec('div');
ec('a');
let elIYp6s = eo('button','RZfff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elsjHHN = eo('i','g5yff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elIYp6s;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndkyl3) { 
let elMZItn = eo('li','RFFff'+iibLtn,null,`class`,`panel-item`);
elMZItn.cls = {unseen: notification.seen === false};

            for (let className in elMZItn.cls) {
                elMZItn.classList.toggle(className, elMZItn.cls[className]);
            }  
            let elCnHMM = eo('a','Vkqff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let elBmmOw = ev('img','wT8ff'+iibLtn,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elbaTO2 = eo('div','eQaff'+iibLtn,null,`class`,`content`);
let elnue55 = eo('span','70aff'+iibLtn);
text(notification.title);
ec('span');
let elvAn3c = eo('small','DHOff'+iibLtn,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpu1gY = this._lc('cN0SfLfyW', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stmmBN2',insideLoop:true,index:"" +iibLtn});
ec('div');
ec('a');
let elECT2A = eo('button','BuYff'+iibLtn,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elkTgKr = eo('i','xEtff'+iibLtn,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elECT2A;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let eleoa6Y = eo('section',null,null,`class`,`footer`);
let elSGfMN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let elu2I8Y = eo('i',null,null,`class`,`${fas('trash') + ' mr-2 icon'}`);
ec('i');
let el0AWbO = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elSGfMN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elMcasX = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndmcLe = component.confirmRemoving;
this.setState('st8qf5c', cndmcLe);
if (cndmcLe) { 
let cmpODDc = this._lc('c_IY_i0AJ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'st8qf5c'});
}
                    this.isReadyToGo();
                }
        });