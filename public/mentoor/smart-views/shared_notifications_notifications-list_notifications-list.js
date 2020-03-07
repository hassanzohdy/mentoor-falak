_Component({
                selector: 'notifications-list',
                c: 'NotificationsList', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','isLoading','notifications','confirmRemoving','removeAllNotifications','removeNotification','markAsSeen','commentUrl','imageUrl'],
                children: {ck7Ej2m8A:'flk-spinner',cwOANE1yU:'flk-time-ago',cWMZPSZ4q:'flk-time-ago',ccbmeT94d:'gold-icon',chQxZxSlk:'flk-time-ago',cP8D0j_vB:'flk-time-ago',cqWcj6_C_:'flk-time-ago',cmJuFM8Xw:'flk-time-ago',cGO6sE9FD:'flk-time-ago',cYNZN0orI:'flk-time-ago',ccgFhPAZH:'flk-time-ago',cqocOsajH:'flk-time-ago',c4MKBzUYu:'flk-time-ago',cD2EkLdgR:'flk-alert'},
                render: function (component) {
                    let elt2vVh = eo('section',null,null,`class`,`panel-wrapper ${cls({ empty: Is.empty(component.user.notifications)})}`,`id`,`notifications-list`);
component.notificationContainer = elt2vVh;
let elrIIkH = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndMkmC = component.isLoading;
this.setState('staM7aq', cndMkmC);
let cndz83L = ! Is.empty(component.notifications);
this.setState('stB8P2b', cndz83L);
let cndAPZS = !(cndMkmC||cndz83L);
this.setState('st3rRf5', cndAPZS);
if (cndMkmC) { 
let cmpx6tp = this._lc('ck7Ej2m8A', {parent:component,attrs:{theme:'black'},state:'staM7aq'});
}else if (cndz83L) { 
let elC80cI = eo('div',null,null,`class`,`list-wrapper`);
let elEumaJ = eo('ul',null,null,`class`,`list`);
for (let index in component.notifications) {
let notification = component.notifications[index]; 
 let iiNIYH = 'qWMAYcC' + index;
let cnd6NvA = notification.type == 'answer' && notification.extra.status == 'rejected';
this.setState('stJnZFW', cnd6NvA);
let cndCE7C = notification.type == 'answer' && ['new', 'update'].includes(notification.extra.status);
this.setState('st8AECS', cndCE7C);
let cndbJL8 = notification.type == 'task' && notification.extra.status == 'failed';
this.setState('st74tuO', cndbJL8);
let cndi25e = notification.type == 'task';
this.setState('stSZyeH', cndi25e);
let cndCE0K = notification.type == 'einstein' && notification.extra.status == 'rejected';
this.setState('stZ3JWQ', cndCE0K);
let cndHhgm = notification.type == 'einstein' && notification.extra.status == 'pending';
this.setState('stZFYtO', cndHhgm);
let cndlxQ6 = notification.type == 'chatRooms';
this.setState('st2zqha', cndlxQ6);
let cnd5o56 = notification.type == 'post';
this.setState('stUP6eN', cnd5o56);
let cndQsm6 = notification.type == 'comment';
this.setState('stQyuN3', cndQsm6);
let cndzMiI = notification.type == 'project';
this.setState('stwTh7W', cndzMiI);
let cndqaPJ = notification.type == 'bug';
this.setState('stlXiAC', cndqaPJ);
if (cnd6NvA) { 
let elenIX9 = eo('li','1khff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elR1S7p = eo('a','Iprff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.topic(notification.extra.topic)}`);
let elpIDQ0 = eo('i','u0kff'+iiNIYH,null,`title`,`${trans(`Rejected`)}`,`class`,`${fas('university')} red-text bold mr-2 fa-2x v-middle icon`);
ec('i');
text(`Your answer to`);
let elqvnVn = eo('strong','VRWff'+iiNIYH,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`has been rejected.`);
let cmpL3fZ = this._lc('cwOANE1yU', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stJnZFW',insideLoop:true,index:"" +iiNIYH});
ec('a');
let ela5B_4 = eo('button','XpUff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elAloD2 = eo('i','HY1ff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ela5B_4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndCE7C) { 
let el8yCxa = eo('li','awLff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elOClqo = eo('a','Yfuff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/academy/answers`);
let elgXzR2 = eo('i','mAZff'+iiNIYH,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('university')} bold mr-2 fa-2x v-middle icon  ${cls({'blue-text': notification.extra.status == 'update', 'green-text': notification.extra.status == 'new'})}`);
ec('i');
let elm4cTE = eo('span','VWHff'+iiNIYH,null,`class`,`mx-1 mr-3 pink-text`);
text(notification.extra.by.name);
ec('span');
let elrsKmb = eo('span','U0Kff'+iiNIYH,null,`class`,`mr-2`);
text(`has`);
ec('span');
let cndyCfH = notification.extra.status == 'new';
this.setState('stxWDsw', cndyCfH);
let cndlKdS = notification.extra.status == 'update';
this.setState('stDc4gb', cndlKdS);
if (cndyCfH) { 
let elvqKg_ = eo('span','go1ff'+iiNIYH,null,`class`,`mr-2`);
text(`submitted new`);
ec('span');
}else if (cndlKdS) { 
let elggohA = eo('span','zXfff'+iiNIYH,null,`class`,`mr-2`);
text(`updated`);
ec('span');
}text(`answer to`);
let el47EfB = eo('strong','Pa5ff'+iiNIYH,null,`class`,`teal-text mx-2`);
text(`${ notification.extra.topic.title }
            [${ notification.extra.topic.track.name }]`);
ec('strong');
text(`.`);
let cmpskHK = this._lc('cWMZPSZ4q', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiNIYH});
ec('a');
let el7hEZv = eo('button','G1Iff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elRI67x = eo('i','LqMff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7hEZv;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndbJL8) { 
let elofiLF = eo('li','o5Uff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elVdPcV = eo('a','X8off'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elsCtDw = eo('span','tX9ff'+iiNIYH,null,`class`,`red-text bold mr-2`);
text(`[Failed]`);
ec('span');
text(`You didn't deliver`);
let elwKxxM = eo('strong','n0eff'+iiNIYH,null,`class`,`teal-text mx-2`);
text( notification.extra.title );
ec('strong');
text(`in time, thus you lost`);
let cmpdSUa = this._lc('ccbmeT94d', {parent:component,props:{coins:notification.extra.lostGold},state:'st74tuO',insideLoop:true,index:"" +iiNIYH});
let cmpxcI2 = this._lc('chQxZxSlk', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'st74tuO',insideLoop:true,index:"" +iiNIYH});
ec('a');
let elnCliT = eo('button','3cLff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el9NSmE = eo('i','IYiff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elnCliT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndi25e) { 
let elZIVrr = eo('li','GNRff'+iiNIYH,null,`class`,`panel-item task-item ${cls({unseen: notification.seen === false})}`);
let eloEk8N = eo('a','Nueff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/tasks/${ notification.extra.id }`);
let elZchwQ = eo('i','MSbff'+iiNIYH,null,`title`,``,`class`,`${fas('tasks')} green-text bold mr-2 fa-2x v-top icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elZchwQ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('New Task')}`});
        ;
                    }, 20);                
                let elCeoLB = eo('div','68sff'+iiNIYH,null,`class`,`d-inline-block task-meta`);
let el5e4Ro = eo('span','LBBff'+iiNIYH,null,`class`,`task-title`);
text(notification.title);
ec('span');
let elRRQKV = eo('small','V9jff'+iiNIYH,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmps9bU = this._lc('cP8D0j_vB', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stSZyeH',insideLoop:true,index:"" +iiNIYH});
ec('div');
ec('a');
let elnsvX3 = eo('button','YfMff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elWgjji = eo('i','vBLff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elnsvX3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndCE0K) { 
let el4oXfS = eo('li','uoXff'+iiNIYH,null,`class`,`panel-item einstein-chamber ${cls({unseen: notification.seen === false})}`);
let elCV8lr = eo('a','VAgff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/einstein-chamber/puzzles/${ notification.extra.puzzle.id }`);
let elT_uPF = eo('span','m50ff'+iiNIYH,null,`class`,`red-text bold mr-2`);
let el4WbUJ = ev('img','Xtnff'+iiNIYH,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elOM6yG = eo('strong','Pzzff'+iiNIYH,null,`class`,`teal-text mx-2`);
text(`[${ notification.extra.puzzle.category.name }]
            ${ notification.extra.puzzle.title }`);
ec('strong');
let el4snwO = eo('span','sKCff'+iiNIYH,null,`class`,`red-text`);
text(`has been rejected.`);
ec('span');
let cmp4P0X = this._lc('cqWcj6_C_', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stZ3JWQ',insideLoop:true,index:"" +iiNIYH});
ec('a');
ec('li');
}else if (cndHhgm) { 
let elSqb_l = eo('li','S6mff'+iiNIYH,null,`class`,`panel-item einstein-chamber ${cls({unseen: notification.seen === false})}`);
let elYXXAh = eo('a','uSYff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/admin/einstein/answers`);
let el8Emrh = eo('span','4PAff'+iiNIYH,null,`class`,`red-text bold mr-2`);
let elwIUmh = ev('img','aKwff'+iiNIYH,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
ec('span');
let elyEc0z = eo('span','2sbff'+iiNIYH,null,`class`,`notification-text`);
let elbWXE4 = eo('strong','igkff'+iiNIYH,null,`class`,`mx-2 teal-text`);
text(`[${ notification.extra.puzzle.category.name }]`);
ec('strong');
let elrHcdz = eo('strong','0Fzff'+iiNIYH,null,`class`,`mx-2`);
text(`${ notification.extra.by.name } has answered`);
ec('strong');
let elh5x9z = eo('strong','a3qff'+iiNIYH,null,`class`,`teal-text mx-2`);
text( notification.extra.puzzle.title );
ec('strong');
let elsizVm = eo('span','F21ff'+iiNIYH,null,`class`,`blue-text`);
text(`and waiting for preview.`);
ec('span');
ec('span');
let cmpdTka = this._lc('cmJuFM8Xw', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stZFYtO',insideLoop:true,index:"" +iiNIYH});
ec('a');
ec('li');
}else if (cndlxQ6) { 
let elA33CF = eo('li','4Zhff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elgVNvN = eo('a','3HZff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/chat-rooms`);
let elgsSh4 = eo('i','D_Qff'+iiNIYH,null,`title`,`${notification.extra.status}`,`class`,`${fas('comments')} bold mr-2 fa-2x v-middle icon  ${cls({'orange-text': notification.extra.newRequest === true, 'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'declined'})}`);
ec('i');
let cndN9_A = notification.extra.status;
this.setState('stW1fS6', cndN9_A);
let cndq57x = notification.extra.newRequest;
this.setState('st_6stD', cndq57x);
if (cndN9_A) { 
let cndYX7w = notification.extra.status == 'approved';
this.setState('stlK2Kq', cndYX7w);
let cnd12F3 = notification.extra.status == 'decline';
this.setState('stByMLL', cnd12F3);
if (cndYX7w) { 
let elHMxPy = eo('i','MFaff'+iiNIYH,null,`class`,`${fas('check')} green-text icon`);
ec('i');
}else if (cnd12F3) { 
let eldnW_D = eo('i','wEWff'+iiNIYH,null,`class`,`${fas('times')} red-text icon`);
ec('i');
}text(`Your request to`);
let elPedHZ = eo('strong','N8vff'+iiNIYH,null,`class`,`grey-text mx-2`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`has been .`);
}else if (cndq57x) { 
let elVvqJk = eo('strong','WFyff'+iiNIYH,null,`class`,`mx-2 purple-text`);
text(notification.extra.member.name);
ec('strong');
text(`asked to join`);
let elGEqyP = eo('strong','weaff'+iiNIYH,null,`class`,`mx-2 green-text`);
text(notification.extra.chatRoom.name);
ec('strong');
text(`room.`);
}let elWUV81 = eo('strong','GXcff'+iiNIYH,null,`class`,` ${cls({'red-text': notification.extra.status == 'declined', 'green-text': notification.extra.status == 'approved'})}`);
text(notification.extra.status);
ec('strong');
let cmpqQgr = this._lc('cGO6sE9FD', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiNIYH});
ec('a');
let elwgtlU = eo('button','zwsff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el3mVSN = eo('i','hdWff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwgtlU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cnd5o56) { 
let elPwGhe = eo('li','pLvff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let el3PB9o = eo('a','TlSff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.post(notification.extra.post)}`);
let elFc_vR = eo('i','6FIff'+iiNIYH,null,`title`,`${notification.extra.status.capitalize()}`,`class`,`${fas('mug-hot')} bold mr-2 fa-2x v-middle icon  ${cls({'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'})}`);
ec('i');
let el2xPu8 = eo('span','C1Nff'+iiNIYH,null,`class`,`mr-2 teal-text`);
text(notification.extra.post.title);
ec('span');
text(`has been`);
let elqA4u6 = eo('strong','BiRff'+iiNIYH,null,`class`,`ml-2 ${cls({'green-text': notification.extra.status == 'approved', 'red-text': notification.extra.status == 'rejected'})}`);
text(notification.extra.status);
ec('strong');
let cmpoyOO = this._lc('cYNZN0orI', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stUP6eN',insideLoop:true,index:"" +iiNIYH});
ec('a');
let elWPtNH = eo('button','1jeff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elAZivJ = eo('i','lP_ff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elWPtNH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndQsm6) { 
let elucpuS = eo('li','_5vff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let el4MmR4 = eo('a','9sKff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${component.commentUrl(notification.extra)}`);
let elUp4ub = ev('img','lEXff'+iiNIYH,null,`src`,`${component.imageUrl(Object.get(notification.extra.project, 'image', '')) || FAVICON}`,`class`,`image`);
let el8YVhp = eo('div','EWSff'+iiNIYH,null,`class`,`content`);
let el57H5P = eo('span','geuff'+iiNIYH);
text(notification.title);
ec('span');
let eliZEPf = eo('small','QB9ff'+iiNIYH,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpqViX = this._lc('ccgFhPAZH', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stQyuN3',insideLoop:true,index:"" +iiNIYH});
ec('div');
ec('a');
let elcFj7T = eo('button','c2Jff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let el8nQFy = eo('i','ZUHff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elcFj7T;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndzMiI) { 
let elOp4gm = eo('li','kSZff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elVS2iG = eo('a','DQdff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`/projects/${ notification.extra.project.id }`);
let elbvX_P = ev('img','fwbff'+iiNIYH,null,`src`,`${notification.extra.project.image || FAVICON}`,`class`,`image`);
let elptQ0L = eo('div','qiAff'+iiNIYH,null,`class`,`content`);
let cndpbMo = notification.extra.type == 'dismissed';
this.setState('styWUSu', cndpbMo);
let cndbM03 = !(cndpbMo);
this.setState('steke0z', cndbM03);
if (cndpbMo) { 
let el9FW9f = eo('span','3aAff'+iiNIYH,null,`class`,`red-text bold mr-2`);
text(`[DISMISSED]`);
ec('span');
}else { 
let el5QgU9 = eo('span','VuEff'+iiNIYH,null,`class`,`green-text bold mr-2`);
text(`[NEW]`);
ec('span');
}let elax27Y = eo('span','MZ7ff'+iiNIYH);
text(notification.title);
ec('span');
let elErGzH = eo('small','ZX4ff'+iiNIYH,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmpeXc6 = this._lc('cqocOsajH', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},insideLoop:true,index:"" +iiNIYH});
ec('div');
ec('a');
let elTxZed = eo('button','0VPff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let elObcmX = eo('i','Cwjff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTxZed;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}else if (cndqaPJ) { 
let elzUGpt = eo('li','2wIff'+iiNIYH,null,`class`,`panel-item ${cls({unseen: notification.seen === false})}`);
let elBW_3x = eo('a','gUGff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen(notification)}]},`href`,`${URLS.project(notification.extra.project, 'bugs', notification.extra)}`);
let el_l3DW = ev('img','Zfgff'+iiNIYH,null,`src`,`${apiImageUrl(notification.extra.project.image) || FAVICON}`,`class`,`image`);
let elPwIY1 = eo('div','WE9ff'+iiNIYH,null,`class`,`content`);
let elWohge = eo('span','jelff'+iiNIYH);
text(notification.title);
ec('span');
let el9WCWW = eo('small','Q4Iff'+iiNIYH,null,`class`,`d-block`);
text(notification.description);
ec('small');
let cmprgNv = this._lc('c4MKBzUYu', {parent:component,props:{timestamp:notification.createdAt.timestamp},attrs:{class:'time'},state:'stlXiAC',insideLoop:true,index:"" +iiNIYH});
ec('div');
ec('a');
let elCAXBy = eo('button','66_ff'+iiNIYH,null, eventListeners, {onclick:[function(e) {var $el = this;component.removeNotification(notification, index)}]},`title`,``,`class`,`remove-btn`);
let eltV4lg = eo('i','NAzff'+iiNIYH,null,`class`,`${fas('times')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elCAXBy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove Notification')}`});
        ;
                    }, 20);                
                ec('li');
}}
ec('ul');
let elGz_Mw = eo('section',null,null,`class`,`footer`);
let elMHtBK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving = true}]},`title`,``,`class`,`remove-all-btn`);
let elXEvlI = eo('i',null,null,`class`,`${fas('trash')} mr-2 icon`);
ec('i');
let elJgU_k = eo('span');
text(`Remove All`);
ec('span');
ec('button');

                    setTimeout(function () {
                        let $el = elMHtBK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove All Notifications')}`});
        ;
                    }, 20);                
                ec('section');
ec('div');
}else { 
let elwLVbl = eo('div',null,null,`class`,`no-results`);
text(`You don't have any notifications yet.`);
ec('div');
}ec('section');
let cndQM3n = component.confirmRemoving;
this.setState('stTChnd', cndQM3n);
if (cndQM3n) { 
let cmpSXH6 = this._lc('cD2EkLdgR', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmRemoving = null},onconfirm:function(e) {let $el = this; component.removeAllNotifications()}},state:'stTChnd'});
}
                    this.isReadyToGo();
                }
        });