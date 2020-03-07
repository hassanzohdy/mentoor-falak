_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {cfOsHsVFV:'flk-spinner',ccke1KErz:'flk-time-ago',cQvQPqYwQ:'flk-time-ago',cwCDzJzR7:'gold-icon',cLOCnJJdL:'flk-time-ago',cIb86rs5Y:'flk-time-ago',czFPtJvuY:'flk-time-ago',chSrVJb8e:'flk-time-ago',cXBn6sjj4:'flk-time-ago',cL5k2__Tf:'flk-time-ago',cMxmkAQDQ:'flk-time-ago',cVF5R0LuG:'flk-time-ago',cslxjzgyG:'flk-time-ago',cwaWyYYYs:'flk-alert'},
                render: function (component) {
                    let elqlk65 = eo('section',null,null,`class`,`panel-wrapper ${cls({ empty: Is.empty(component.user.notifications)})}`,`id`,`notifications-list`);
component.notificationContainer = elqlk65;
let el5FSyU = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndJACs = component.isLoading;
this.setState('stk7fLd', cndJACs);
let cndwXru = ! Is.empty(component.notifications);
this.setState('stbeU2N', cndwXru);
let cndmyNO = !(cndJACs||cndwXru);
this.setState('stE1xvM', cndmyNO);
if (cndJACs) { 
let cmpFxLm = this._lc('cfOsHsVFV', {parent:component,attrs:{theme:'black'},state:'stk7fLd'});
}else if (cndwXru) { 
let el_H6lb = eo('div',null,null,`class`,`list-wrapper`);
let elClw8f = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iiC0jG = 'pDbSaWA' + index;
let cnd4rMm = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('st_F8hB', cnd4rMm);
let cndzfTf = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('stpdRqI', cndzfTf);
let cndqC0q = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('stDfHv8', cndqC0q);
let cndQyy1 = notification.type == 'task';
this.setState('stTQFGN', cndQyy1);
let cndI8ae = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('stOzyqT', cndI8ae);
let cnd9iGA = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('stV1VxL', cnd9iGA);
let cndFOc2 = notification.type == 'chatRooms';
this.setState('sttBlc5', cndFOc2);
let cndkuQx = notification.type == 'post';
this.setState('stSHzR9', cndkuQx);
let cndDMk8 = notification.type == 'comment';
this.setState('staayFx', cndDMk8);
let cnd_D9i = notification.type == 'project';
this.setState('stV8zq7', cnd_D9i);
let cndTG7Z = notification.type == 'bug';
this.setState('st7rUqT', cndTG7Z);
if (cnd4rMm) { 
let el6v2l_ = eo('li','IlCff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elDVJ5T = eo('a','LTYff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elXCpBP = eo('i','2Mjff'+iiC0jG,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university')} red-text bold mr-2 fa-2x v-middle icon`);
ec('i');
text(`Your answer to`);
let elIYZZ1 = eo('strong','SKMff'+iiC0jG,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpvTeI = this._lc('ccke1KErz', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st_F8hB',insideLoop:true,index:"" +iiC0jG});
ec('a');
let elZXKIN = eo('button','xpSff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el1MULo = eo('i','iY_ff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elZXKIN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndzfTf) { 
let eln5Ty3 = eo('li','nHBff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let el9pd5o = eo('a','7YWff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let el0IEU0 = eo('i','wUsff'+iiC0jG,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university')} bold mr-2 fa-2x v-middle icon  ${cls({'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'})}`);
ec('i');
let el6mDcn = eo('span','c6Cff'+iiC0jG,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let elhq8VV = eo('span','QHvff'+iiC0jG,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndcuFo = notification.extra.status == 'new';
this.setState('stlH1uh', cndcuFo);
let cndRVNJ = notification.extra.status == 'update';
this.setState('stKS2ey', cndRVNJ);
if (cndcuFo) { 
let elF0btZ = eo('span','khiff'+iiC0jG,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndRVNJ) { 
let elbBSa6 = eo('span','dI7ff'+iiC0jG,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let elBbcBe = eo('strong','rJkff'+iiC0jG,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpcxb2 = this._lc('cQvQPqYwQ', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiC0jG});
ec('a');
let elIqQrG = eo('button','f9Off'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elJBgV4 = eo('i','8AZff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elIqQrG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndqC0q) { 
let eljDaRV = eo('li','2fuff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elowl6z = eo('a','RO7ff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elL8Eb6 = eo('span','vbiff'+iiC0jG,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elrRu3H = eo('strong','lv9ff'+iiC0jG,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmp6uJC = this._lc('cwCDzJzR7', {parent:component,props:{coins:notification.extra.lostGold},state:'stDfHv8',insideLoop:true,index:"" +iiC0jG});
let cmpghZ4 = this._lc('cLOCnJJdL', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stDfHv8',insideLoop:true,index:"" +iiC0jG});
ec('a');
let elmtD_1 = eo('button','xEtff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elE8LIl = eo('i','Jliff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elmtD_1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndQyy1) { 
let elo1Fvy = eo('li','ntUff'+iiC0jG,null,`class`,`panel-item task-item ${cls({unseen: notification.seen === false})}`);
let el9o02P = eo('a','xupff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elGm970 = eo('i','M8Uff'+iiC0jG,null,`title`,``,`class`,`${fas('tasks')} green-text bold mr-2 fa-2x v-top icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elGm970;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let elIPoMz = eo('div','Q90ff'+iiC0jG,null,`class`,`d-inline-block task-meta`);
let elCUZy5 = eo('span','I2Eff'+iiC0jG,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elMXZxu = eo('small','Y5_ff'+iiC0jG,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpZYHu = this._lc('cIb86rs5Y', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stTQFGN',insideLoop:true,index:"" +iiC0jG});
ec('div');
ec('a');
let elwIIxC = eo('button','YuVff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elw1Ot6 = eo('i','44Aff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwIIxC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndI8ae) { 
let elPxkcT = eo('li','3eZff'+iiC0jG,null,`class`,`panel-item einstein-chamber ${cls({unseen: notification.seen === false})}`);
let elry5_F = eo('a','zwbff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let elweZRG = eo('span','naMff'+iiC0jG,null,`class`,`red-text bold mr-2`);
let elBQtB4 = ev('img','sbtff'+iiC0jG,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let el1BaMy = eo('strong','UQNff'+iiC0jG,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let elpGc4a = eo('span','429ff'+iiC0jG,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmpr2T1 = this._lc('czFPtJvuY', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stOzyqT',insideLoop:true,index:"" +iiC0jG});
ec('a');
ec('li');
}else if (cnd9iGA) { 
let eldN2ZZ = eo('li','oGHff'+iiC0jG,null,`class`,`panel-item einstein-chamber ${cls({unseen: notification.seen === false})}`);
let elvuK8m = eo('a','Iv_ff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let elv8xip = eo('span','tcBff'+iiC0jG,null,`class`,`red-text bold mr-2`);
let elVbxa_ = ev('img','yclff'+iiC0jG,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let el2BVBb = eo('span','wUeff'+iiC0jG,null,`class`,`notification-text`);
let elNRtUG = eo('strong','Tzmff'+iiC0jG,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let elmglkG = eo('strong','_YJff'+iiC0jG,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let eljwnuK = eo('strong','MB4ff'+iiC0jG,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elnl0NQ = eo('span','RY7ff'+iiC0jG,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmphahR = this._lc('chSrVJb8e', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stV1VxL',insideLoop:true,index:"" +iiC0jG});
ec('a');
ec('li');
}else if (cndFOc2) { 
let elWeqMm = eo('li','ijkff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elXyQNM = eo('a','nAoff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let eliGqat = eo('i','OSIff'+iiC0jG,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments')} bold mr-2 fa-2x v-middle icon  ${cls({'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'})}`);
ec('i');
let cnd9bym = notification.extra.status;
this.setState('st91TZj', cnd9bym);
let cnd8zJm = notification.extra.newRequest;
this.setState('stSEZX4', cnd8zJm);
if (cnd9bym) { 
let cndvBbv = notification.extra.status == 'approved';
this.setState('staiMuW', cndvBbv);
let cndx7vX = notification.extra.status == 'decline';
this.setState('stwi15n', cndx7vX);
if (cndvBbv) { 
let elXFMTM = eo('i','Q8Yff'+iiC0jG,null,`class`,`${fas('check')} green-text icon`);
ec('i');
}else if (cndx7vX) { 
let elJdmPe = eo('i','yUHff'+iiC0jG,null,`class`,`${fas('times')} red-text icon`);
ec('i');
}text(`Your request to`);
let elEbAoC = eo('strong','39Vff'+iiC0jG,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cnd8zJm) { 
let elIp3ot = eo('strong','CfXff'+iiC0jG,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let el4pt1l = eo('strong','3uiff'+iiC0jG,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let elGiiNQ = eo('strong','Pz6ff'+iiC0jG,null,`class`,` ${cls({'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'})}`);
text(notification.extra.status);
ec('strong');
let cmpAF5F = this._lc('cXBn6sjj4', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiC0jG});
ec('a');
let elrhuBl = eo('button','Npfff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el3zhqF = eo('i','ewcff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elrhuBl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndkuQx) { 
let elUszwP = eo('li','ishff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let ele3HPF = eo('a','AY3ff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elbWEJp = eo('i','EWcff'+iiC0jG,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot')} bold mr-2 fa-2x v-middle icon  ${cls({'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'})}`);
ec('i');
let elC3sLL = eo('span','a1uff'+iiC0jG,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let eldIQTl = eo('strong','73_ff'+iiC0jG,null,`class`,`ml-2 ${cls({'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'})}`);
text(notification.extra.status);
ec('strong');
let cmpPD62 = this._lc('cL5k2__Tf', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stSHzR9',insideLoop:true,index:"" +iiC0jG});
ec('a');
let elhGSwt = eo('button','cF7ff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elEDwyR = eo('i','7TLff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elhGSwt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndDMk8) { 
let elpKMB6 = eo('li','Sw6ff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elamOOg = eo('a','F2lff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let elizUqw = ev('img','81Rff'+iiC0jG,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let elBWZmP = eo('div','5Hrff'+iiC0jG,null,`class`,`content`);
let elMl1rg = eo('span','eiwff'+iiC0jG);
text(notification.title);
ec('span');
let elKzwCZ = eo('small','vp8ff'+iiC0jG,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpQm13 = this._lc('cMxmkAQDQ', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'staayFx',insideLoop:true,index:"" +iiC0jG});
ec('div');
ec('a');
let el3zfLt = eo('button','YUdff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el2pmez = eo('i','MHkff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3zfLt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd_D9i) { 
let elbiC7f = eo('li','pbbff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let el6wDaR = eo('a','lZkff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elNorQg = ev('img','kEkff'+iiC0jG,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let el1yZ4n = eo('div','c0mff'+iiC0jG,null,`class`,`content`);
let cnd8P1J = notification.extra.type == 'dismissed';
this.setState('stgZeMM', cnd8P1J);
let cndGJjb = !(cnd8P1J);
this.setState('stogiwu', cndGJjb);
if (cnd8P1J) { 
let elQK9tI = eo('span','rOIff'+iiC0jG,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let elCViGi = eo('span','7wbff'+iiC0jG,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elf4RhN = eo('span','vM2ff'+iiC0jG);
text(notification.title);
ec('span');
let elLNHtm = eo('small','gGmff'+iiC0jG,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpB9Ga = this._lc('cVF5R0LuG', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiC0jG});
ec('div');
ec('a');
let el6j9o5 = eo('button','bjAff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elqiwXw = eo('i','QvQff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6j9o5;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndTG7Z) { 
let elqjIwe = eo('li','2Mcff'+iiC0jG,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let eliDPen = eo('a','FRvff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let elyIf8e = ev('img','nRNff'+iiC0jG,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elJsfj1 = eo('div','q33ff'+iiC0jG,null,`class`,`content`);
let elcBB9m = eo('span','dKwff'+iiC0jG);
text(notification.title);
ec('span');
let elGPy7i = eo('small','D9Bff'+iiC0jG,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpBCGW = this._lc('cslxjzgyG', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st7rUqT',insideLoop:true,index:"" +iiC0jG});
ec('div');
ec('a');
let elAF8bZ = eo('button','mlKff'+iiC0jG,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elA4OYe = eo('i','gguff'+iiC0jG,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elAF8bZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let el5M0SG = eo('section',null,null,`class`,`footer`);
let elywz9h = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let elttP66 = eo('i',null,null,`class`,`${fas('trash')} mr-2 icon`);
ec('i');
let elaUJFQ = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elywz9h;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elccZvE = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndYLnI = component.confirmRemoving;
this.setState('st6_4qQ', cndYLnI);
if (cndYLnI) { 
let cmpvYsK = this._lc('cwaWyYYYs', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'st6_4qQ'});
}
                    this.isReadyToGo();
                }
        });