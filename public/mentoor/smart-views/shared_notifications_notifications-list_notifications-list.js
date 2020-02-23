_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {cv2ySSDhV:'flk-spinner',cN1E3XnDa:'flk-time-ago',ca9OIerzS:'flk-time-ago',cN5en7f37:'gold-icon',cbECUSO8F:'flk-time-ago',cndOxc8Km:'flk-time-ago',cXWsuRpVi:'flk-time-ago',coodWmvS0:'flk-time-ago',cak4n1I23:'flk-time-ago',cF5ED1PtU:'flk-time-ago',cVVze725S:'flk-time-ago',cuUCTWSwD:'flk-time-ago',ckv32VK8u:'flk-time-ago',cfwlEvQcQ:'flk-alert'},
                render: function (component) {
                    let elB_c2B = eo('section',null,null,`class`,`panel-wrapper`,`id`,`notifications-list`);
component.notificationContainer = elB_c2B;
elB_c2B.cls = { empty: Is.empty(component.user.notifications)};

            for (let className in elB_c2B.cls) {
                elB_c2B.classList.toggle(className, elB_c2B.cls[className]);
            }  
            let el8rktn = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndGfKo = component.isLoading;
this.setState('stdbZ0B', cndGfKo);
let cndJQmK = ! Is.empty(component.notifications);
this.setState('stQE1BI', cndJQmK);
let cndfAuV = !(cndGfKo||cndJQmK);
this.setState('stY30RO', cndfAuV);
if (cndGfKo) { 
let cmpfcQD = this._lc('cv2ySSDhV', {parent:component,attrs:{theme:'black'},state:'stdbZ0B'});
}else if (cndJQmK) { 
let el5xT68 = eo('div',null,null,`class`,`list-wrapper`);
let el1pY11 = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iiufdl = '9Wvzymh' + index;
let cndLUye = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stg6vi0', cndLUye);
let cndBnVN = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('stFHp6m', cndBnVN);
let cnd4uiZ = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('stxfkQj', cnd4uiZ);
let cndyUdX = notification.type == 'task';
this.setState('stwG7Ij', cndyUdX);
let cndxDKQ = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('stElVJn', cndxDKQ);
let cndeKQ0 = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('stxIztF', cndeKQ0);
let cndHxXo = notification.type == 'chatRooms';
this.setState('stvUQP3', cndHxXo);
let cndKzPS = notification.type == 'post';
this.setState('st_53xa', cndKzPS);
let cndMoQW = notification.type == 'comment';
this.setState('stTzd1j', cndMoQW);
let cndNPDd = notification.type == 'project';
this.setState('stZZLsM', cndNPDd);
let cndh6wD = notification.type == 'bug';
this.setState('stXgx9c', cndh6wD);
if (cndLUye) { 
let elvHxt5 = eo('li','mqQff'+iiufdl,null,`class`,`panel-item`);
elvHxt5.cls = {unseen: notification.seen === false};

            for (let className in elvHxt5.cls) {
                elvHxt5.classList.toggle(className, elvHxt5.cls[className]);
            }  
            let elRtCjU = eo('a','KTrff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elML_T3 = eo('i','fcPff'+iiufdl,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university') + ' red-text bold mr-2 fa-2x v-middle icon'}`);
ec('i');
text(`Your answer to`);
let elNZKhB = eo('strong','R51ff'+iiufdl,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpXwab = this._lc('cN1E3XnDa', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stg6vi0',insideLoop:true,index:"" +iiufdl});
ec('a');
let elTpzy2 = eo('button','uoWff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elIVpJt = eo('i','fjFff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTpzy2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndBnVN) { 
let elAbp_d = eo('li','9Agff'+iiufdl,null,`class`,`panel-item`);
elAbp_d.cls = {unseen: notification.seen === false};

            for (let className in elAbp_d.cls) {
                elAbp_d.classList.toggle(className, elAbp_d.cls[className]);
            }  
            let elJrhm7 = eo('a','e8nff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let elqPS6f = eo('i','rYLff'+iiufdl,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university') + ' bold mr-2 fa-2x v-middle icon'}`);
elqPS6f.cls = {'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'};

            for (let className in elqPS6f.cls) {
                elqPS6f.classList.toggle(className, elqPS6f.cls[className]);
            }  
            ec('i');
let elaguIH = eo('span','hxaff'+iiufdl,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let elWm1Em = eo('span','BUmff'+iiufdl,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndyZKr = notification.extra.status == 'new';
this.setState('stcZkUv', cndyZKr);
let cndkjpB = notification.extra.status == 'update';
this.setState('stbnEcY', cndkjpB);
if (cndyZKr) { 
let elu3qt2 = eo('span','qTJff'+iiufdl,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndkjpB) { 
let elkfm7M = eo('span','Lofff'+iiufdl,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elsbOHb = eo('strong','mx_ff'+iiufdl,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmptbFp = this._lc('ca9OIerzS', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiufdl});
ec('a');
let el5mNlj = eo('button','orjff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elm4gmG = eo('i','U7eff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el5mNlj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd4uiZ) { 
let elh52rh = eo('li','IKsff'+iiufdl,null,`class`,`panel-item`);
elh52rh.cls = {unseen: notification.seen === false};

            for (let className in elh52rh.cls) {
                elh52rh.classList.toggle(className, elh52rh.cls[className]);
            }  
            let eluQR6P = eo('a','gvgff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elA0bIL = eo('span','Jclff'+iiufdl,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elyvMgi = eo('strong','VRyff'+iiufdl,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmpzHQW = this._lc('cN5en7f37', {parent:component,props:{coins:notification.extra.lostGold},state:'stxfkQj',insideLoop:true,index:"" +iiufdl});
let cmpC8mU = this._lc('cbECUSO8F', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stxfkQj',insideLoop:true,index:"" +iiufdl});
ec('a');
let elzvePZ = eo('button','ygkff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elVtnkl = eo('i','Jrvff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzvePZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndyUdX) { 
let elhD3e8 = eo('li','0DPff'+iiufdl,null,`class`,`panel-item task-item`);
elhD3e8.cls = {unseen: notification.seen === false};

            for (let className in elhD3e8.cls) {
                elhD3e8.classList.toggle(className, elhD3e8.cls[className]);
            }  
            let els4A_z = eo('a','AfEff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let eli_RkK = eo('i','sAsff'+iiufdl,null,`title`,``,`class`,`${fas('tasks') + ' green-text bold mr-2 fa-2x v-top icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eli_RkK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let elsAFY8 = eo('div','mDOff'+iiufdl,null,`class`,`d-inline-block task-meta`);
let el9VebL = eo('span','kagff'+iiufdl,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elNGim1 = eo('small','jXWff'+iiufdl,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpJ_46 = this._lc('cndOxc8Km', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stwG7Ij',insideLoop:true,index:"" +iiufdl});
ec('div');
ec('a');
let elCSagu = eo('button','EcJff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elvGXEf = eo('i','52qff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCSagu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndxDKQ) { 
let el9WCms = eo('li','yjHff'+iiufdl,null,`class`,`panel-item einstein-chamber`);
el9WCms.cls = {unseen: notification.seen === false};

            for (let className in el9WCms.cls) {
                el9WCms.classList.toggle(className, el9WCms.cls[className]);
            }  
            let elAFAz6 = eo('a','ZUkff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let elujVKY = eo('span','hzfff'+iiufdl,null,`class`,`red-text bold mr-2`);
let elHSM71 = ev('img','sNgff'+iiufdl,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let el3ipoV = eo('strong','Tgbff'+iiufdl,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let elCzlIF = eo('span','CLHff'+iiufdl,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmpy7Qm = this._lc('cXWsuRpVi', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stElVJn',insideLoop:true,index:"" +iiufdl});
ec('a');
ec('li');
}else if (cndeKQ0) { 
let elpkg8v = eo('li','jUdff'+iiufdl,null,`class`,`panel-item einstein-chamber`);
elpkg8v.cls = {unseen: notification.seen === false};

            for (let className in elpkg8v.cls) {
                elpkg8v.classList.toggle(className, elpkg8v.cls[className]);
            }  
            let elWOCGC = eo('a','P_Sff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let elsDUSv = eo('span','urrff'+iiufdl,null,`class`,`red-text bold mr-2`);
let elNh0oq = ev('img','kO2ff'+iiufdl,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let eliqURT = eo('span','dQlff'+iiufdl,null,`class`,`notification-text`);
let elv45EQ = eo('strong','inzff'+iiufdl,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let el4Z12k = eo('strong','1Dpff'+iiufdl,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let eltfZWs = eo('strong','3Mcff'+iiufdl,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elvTkys = eo('span','rt_ff'+iiufdl,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmpffCF = this._lc('coodWmvS0', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stxIztF',insideLoop:true,index:"" +iiufdl});
ec('a');
ec('li');
}else if (cndHxXo) { 
let elugTLd = eo('li','oUNff'+iiufdl,null,`class`,`panel-item`);
elugTLd.cls = {unseen: notification.seen === false};

            for (let className in elugTLd.cls) {
                elugTLd.classList.toggle(className, elugTLd.cls[className]);
            }  
            let elgXMsG = eo('a','S2fff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let elElYpS = eo('i','Jjmff'+iiufdl,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments') + ' bold mr-2 fa-2x v-middle icon'}`);
elElYpS.cls = {'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'};

            for (let className in elElYpS.cls) {
                elElYpS.classList.toggle(className, elElYpS.cls[className]);
            }  
            ec('i');
let cndS6Ja = notification.extra.status;
this.setState('stbLrjb', cndS6Ja);
let cndwiVq = notification.extra.newRequest;
this.setState('stUYbQa', cndwiVq);
if (cndS6Ja) { 
let cndLp0F = notification.extra.status == 'approved';
this.setState('stU52g_', cndLp0F);
let cndwwNN = notification.extra.status == 'decline';
this.setState('stpqIJ5', cndwwNN);
if (cndLp0F) { 
let elb8LiA = eo('i','YIUff'+iiufdl,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}else if (cndwwNN) { 
let elVtYLK = eo('i','aXTff'+iiufdl,null,`class`,`${fas('times') + ' red-text icon'}`);
ec('i');
}text(`Your request to`);
let elVl_hC = eo('strong','P6Cff'+iiufdl,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cndwiVq) { 
let elrT02Z = eo('strong','mTbff'+iiufdl,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let elIR2Kr = eo('strong','u8Eff'+iiufdl,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let elh1_Fj = eo('strong','EFRff'+iiufdl);
elh1_Fj.cls = {'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'};

            for (let className in elh1_Fj.cls) {
                elh1_Fj.classList.toggle(className, elh1_Fj.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmpRRO2 = this._lc('cak4n1I23', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiufdl});
ec('a');
let elQlIR3 = eo('button','hqNff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elj1dZD = eo('i','V5zff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQlIR3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndKzPS) { 
let elqSpl6 = eo('li','ttZff'+iiufdl,null,`class`,`panel-item`);
elqSpl6.cls = {unseen: notification.seen === false};

            for (let className in elqSpl6.cls) {
                elqSpl6.classList.toggle(className, elqSpl6.cls[className]);
            }  
            let elFFbbq = eo('a','_Wzff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elRKOza = eo('i','twaff'+iiufdl,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot') + ' bold mr-2 fa-2x v-middle icon'}`);
elRKOza.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in elRKOza.cls) {
                elRKOza.classList.toggle(className, elRKOza.cls[className]);
            }  
            ec('i');
let elwt0X2 = eo('span','S8gff'+iiufdl,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let eltKgxT = eo('strong','jhlff'+iiufdl,null,`class`,`ml-2`);
eltKgxT.cls = {'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'};

            for (let className in eltKgxT.cls) {
                eltKgxT.classList.toggle(className, eltKgxT.cls[className]);
            }  
            text(notification.extra.status);
ec('strong');
let cmphIAY = this._lc('cF5ED1PtU', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st_53xa',insideLoop:true,index:"" +iiufdl});
ec('a');
let eliFl4o = eo('button','GEaff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elpjyiZ = eo('i','AUIff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliFl4o;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndMoQW) { 
let el2N1br = eo('li','nc1ff'+iiufdl,null,`class`,`panel-item`);
el2N1br.cls = {unseen: notification.seen === false};

            for (let className in el2N1br.cls) {
                el2N1br.classList.toggle(className, el2N1br.cls[className]);
            }  
            let elCRqnw = eo('a','mVbff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let el3hVxT = ev('img','W5Nff'+iiufdl,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let elQ17SF = eo('div','9nhff'+iiufdl,null,`class`,`content`);
let eltU_7q = eo('span','nlQff'+iiufdl);
text(notification.title);
ec('span');
let elN_gPX = eo('small','rv9ff'+iiufdl,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpPKGX = this._lc('cVVze725S', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stTzd1j',insideLoop:true,index:"" +iiufdl});
ec('div');
ec('a');
let elZWcuk = eo('button','CObff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el8pv6C = eo('i','4s5ff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZWcuk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndNPDd) { 
let elXCNBH = eo('li','TjMff'+iiufdl,null,`class`,`panel-item`);
elXCNBH.cls = {unseen: notification.seen === false};

            for (let className in elXCNBH.cls) {
                elXCNBH.classList.toggle(className, elXCNBH.cls[className]);
            }  
            let elqgvw8 = eo('a','7drff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elfEjbq = ev('img','OI5ff'+iiufdl,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let eljOT_4 = eo('div','B80ff'+iiufdl,null,`class`,`content`);
let cndh32H = notification.extra.type == 'dismissed';
this.setState('sttu_I7', cndh32H);
let cndhdL5 = !(cndh32H);
this.setState('stzjiiN', cndhdL5);
if (cndh32H) { 
let elo1NaV = eo('span','6kfff'+iiufdl,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let elZUeaP = eo('span','0AEff'+iiufdl,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elZBF9c = eo('span','nPmff'+iiufdl);
text(notification.title);
ec('span');
let elaSKo4 = eo('small','jZtff'+iiufdl,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmprViU = this._lc('cuUCTWSwD', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiufdl});
ec('div');
ec('a');
let elvbFUZ = eo('button','knmff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elVvCq3 = eo('i','ZGSff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvbFUZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndh6wD) { 
let elJgA3n = eo('li','RNxff'+iiufdl,null,`class`,`panel-item`);
elJgA3n.cls = {unseen: notification.seen === false};

            for (let className in elJgA3n.cls) {
                elJgA3n.classList.toggle(className, elJgA3n.cls[className]);
            }  
            let elBDD_x = eo('a','gn1ff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let elKBmA1 = ev('img','xxTff'+iiufdl,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let el4ZxLr = eo('div','a7kff'+iiufdl,null,`class`,`content`);
let el2xqd6 = eo('span','ohhff'+iiufdl);
text(notification.title);
ec('span');
let el31XVq = eo('small','1n9ff'+iiufdl,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpwTfj = this._lc('ckv32VK8u', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stXgx9c',insideLoop:true,index:"" +iiufdl});
ec('div');
ec('a');
let elxfGrI = eo('button','R2eff'+iiufdl,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el9_DGW = eo('i','Hymff'+iiufdl,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxfGrI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let el93TMl = eo('section',null,null,`class`,`footer`);
let elHmJvb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let el_i3cJ = eo('i',null,null,`class`,`${fas('trash') + ' mr-2 icon'}`);
ec('i');
let elScM7g = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elHmJvb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elUYP9U = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndDRqZ = component.confirmRemoving;
this.setState('st0wIuD', cndDRqZ);
if (cndDRqZ) { 
let cmpO4Vq = this._lc('cfwlEvQcQ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'st0wIuD'});
}
                    this.isReadyToGo();
                }
        });