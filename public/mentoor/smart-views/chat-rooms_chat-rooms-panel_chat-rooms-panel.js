_Component({
                selector: 'chat-rooms-panel',
                c: 'ChatRoomsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['chatRoomsAreOpened','close','isLoading','openRoomsList','navigateToChatRoomsPage','chatRooms','openRoom','openedRoom','user','isLoadingMessages','messagesList','scrollToLastMessage','clearUnseenNotifications','formatDate','writingIsArabic','input','sendMessage','comment','openChatRooms'],
                children: {c8gapCBlj:'flk-spinner',c7B0NOFPS:'flk-spinner',cbODGmtXQ:'flk-time-ago',c5pUfmCws:'user-online',cNXXQtjLc:'markdown',cJXN20XcT:'flk-time-ago'},
                render: function (component) {
                    let elFzXxn = eo('section',null,null,`id`,`chat-rooms-panel`);
let cnd2OFr = component.chatRoomsAreOpened;
this.setState('stKEHaR', cnd2OFr);
if (cnd2OFr) { 
let elJGEx_ = eo('div','7tXf',null,`class`,`animate`,`id`,`chat-rooms-wrapper`);
let elNpdEm = eo('div','aVFf',null,`id`,`chat-room-body`);
let elgExCp = eo('button','Nayf',null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`close-btn`);
let elggL7m = eo('i','w1Jf',null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
let cnda8Bj = component.isLoading;
this.setState('stRXLXJ', cnda8Bj);
let cnd807e = !(cnda8Bj);
this.setState('stZpwNT', cnd807e);
if (cnda8Bj) { 
let cmpgdmb = this._lc('c8gapCBlj', {parent:component,state:'stRXLXJ'});
}else { 
let elwqhMt = eo('div',null,null,`class`,`row`,`id`,`panel-container`);
let el8mS6A = eo('div',null,null,`class`,`col-12 col-lg-3`,`id`,`rooms-list`);
el8mS6A.cls = {opened: component.openRoomsList};

            for (let className in el8mS6A.cls) {
                el8mS6A.classList.toggle(className, el8mS6A.cls[className]);
            }  
            let elYE37P = eo('div',null,null,`id`,`heading`);
let elvvDdq = ev('img',null,null,`src`,`${FAVICON}`,`id`,`logo`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let elXs3Hh = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.navigateToChatRoomsPage()}]},`id`,`heading-text`);
text(`Chat rooms list`);
ec('h3');
let elZ_KAj = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = false;}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`d-sm-none close-btn`);
let elQ4PbL = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
ec('div');
for (let i in component.chatRooms) {
let room = component.chatRooms[i]; 
 let ii0cBw = 'ZaWM7oy' + i;
let el8oJhS = eo('button','7JgGnipbT5Ru' + i+ii0cBw,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoom(room)}]},`class`,`room-btn`,`type`,`button`);
el8oJhS.cls = {active: component.openedRoom && component.openedRoom.id == room.id};

            for (let className in el8oJhS.cls) {
                el8oJhS.classList.toggle(className, el8oJhS.cls[className]);
            }  
            let elojbMd = ev('img','QHyff'+ii0cBw,null,`src`,`${room.image || FAVICON}`,`class`,`image`);
let elibMNk = eo('span','211ff'+ii0cBw,null,`class`,`name`);
text(room.name);
ec('span');
let cnd3eA5 = component.user.unseenRoomsNotifications.rooms[room.id] > 0;
this.setState('stKKmmn', cnd3eA5);
if (cnd3eA5) { 
let el1vxLp = eo('span','s85ff'+ii0cBw,null,`class`,`badge badge-success unseen`);
text(component.user.unseenRoomsNotifications.rooms[room.id]);
ec('span');
}ec('button');
}
ec('div');
let cndWmVy = component.openedRoom;
this.setState('st2w6Af', cndWmVy);
let cnd43jB = !(cndWmVy);
this.setState('st7LzK1', cnd43jB);
if (cndWmVy) { 
let ellE4fB = eo('div','Nlmf',null,`class`,`content-container col-12 col-lg-9`);
let els8NKi = eo('div','Dy9f',null,`class`,`chat-body`);
let elZtIvw = eo('section','1xzf',null,`class`,`head`);
let elDnBZR = eo('button','4nOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let el_9coo = eo('i','j3wf',null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let elkO65T = ev('img','qwcf',null,`src`,`${component.openedRoom.image || FAVICON}`,`class`,`image`,`title`,`${component.openedRoom.name}`,`alt`,`${component.openedRoom.name}`);
let el1VxhY = eo('div','Jj_f',null,`class`,`d-inline-block m-l-2`);
text(component.openedRoom.name);
ec('div');
ec('section');
let cndj7XX = component.isLoadingMessages;
this.setState('stVQayv', cndj7XX);
let cnde6z3 = !(cndj7XX);
this.setState('stCOZrS', cnde6z3);
if (cndj7XX) { 
let elK7lhm = eo('div','CB4f',null,`class`,`text-center m-t-10`);
let cmpLfor = this._lc('c7B0NOFPS', {parent:component,state:'stVQayv'});
ec('div');
}else { 
let elGolsR = eo('div',null,null, eventListeners, {onready:[function(e) {var $el = this;component.messagesList = $el; component.scrollToLastMessage();}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}]},`class`,`messages-list`);
for (let i in component.openedRoom.messages) {
let message = component.openedRoom.messages[i]; 
 let iibQYC = 'v0HaIAw' + i;
let cnd5hGW = message.sender.id == 0;
this.setState('st3MC36', cnd5hGW);
let cndFCIr = !(cnd5hGW);
this.setState('stRHUlq', cndFCIr);
if (cnd5hGW) { 
let elaJKL4 = eo('div','G_1ff'+iibQYC,null,`class`,`system-message`);
let elENkuL = eo('span','Ikqff'+iibQYC,null,`class`,`message`);
text(message.message);
ec('span');
let cmpvKZX = this._lc('cbODGmtXQ', {parent:component,props:{timestamp:message.createdAt.timestamp},state:'st3MC36',insideLoop:true,index:"" +iibQYC});
ec('div');
}else { 
let el1MXq3 = eo('div','jx1ff'+iibQYC,null,`title`,`${message.createdAt.format}`,`class`,`room-message`);
el1MXq3.cls = {sender: component.user.id == message.sender.id};

            for (let className in el1MXq3.cls) {
                el1MXq3.classList.toggle(className, el1MXq3.cls[className]);
            }  
            let eltkRPb = eo('div','FYHff'+iibQYC,null,`class`,`user`);
let elh0S5c = ev('img','rOKff'+iibQYC,null,`src`,`${message.sender.image}`,`class`,`u-image`,`title`,`${message.sender.name}`,`alt`,`${message.sender.name}`);
let elbCnKt = eo('div','Od4ff'+iibQYC,null,`class`,`info`);
let elFDDUs = eo('div','h2xff'+iibQYC,null,`class`,`u-name d-inline-block`);
text(message.sender.name);
ec('div');
let cmpAejh = this._lc('c5pUfmCws', {parent:component,props:{id:message.sender.id},attrs:{id:`${message.sender.id}`},state:'stRHUlq',insideLoop:true,index:"" +iibQYC});
ec('div');
ec('div');
let elD5t35 = eo('div','ky5ff'+iibQYC,null,`class`,`message-body`);
let elJd6t3 = eo('p','INpff'+iibQYC,null,`class`,`message-content`);
elJd6t3.cls = {ar: message.message.startsWithArabic()};

            for (let className in elJd6t3.cls) {
                elJd6t3.classList.toggle(className, elJd6t3.cls[className]);
            }  
            let cmpcw9q = this._lc('cNXXQtjLc', {parent:component,props:{content:message.message},state:'stRHUlq',insideLoop:true,index:"" +iibQYC});
ec('p');
let cmpjwAk = this._lc('cJXN20XcT', {parent:component,props:{timestamp:message.createdAt.timestamp},attrs:{class:'gray-text created-at'},state:'stRHUlq',insideLoop:true,index:"" +iibQYC});
ec('div');
ec('div');
}let elYBHzM = eo('div','H1sbau4gD50q' + i+iibQYC,null,`class`,`separator`);
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elGolsR;
                        component.messagesList = $el; component.scrollToLastMessage();;
                    }, 20);                
                }ec('div');
let elwOPw3 = eo('div',null,null,`class`,`message-input-wrapper`);
let elMS3r3 = ev('img',null,null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elgNuA0 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.input = this.value;},function(e) {var $el = this;component.writingIsArabic = $el.value.startsWithArabic()}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}],onkeydown:[function(e) {var $el = this;component.sendMessage($el, event)}]},`value`,`${fval(component.input)}`,`placeholder`,`${trans(`Send a message... (markdown)`)}`,`type`,`textarea`,`class`,`message-input`);
elgNuA0.cls = {ar: !!component.writingIsArabic};

            for (let className in elgNuA0.cls) {
                elgNuA0.classList.toggle(className, elgNuA0.cls[className]);
            }  
            elgNuA0.value = fval(component.input);
ec('textarea');

                    setTimeout(function () {
                        let $el = elgNuA0;
                        
            if (true && ! elgNuA0.focused) {
                elgNuA0.setSelectionRange(elgNuA0.value.length, elgNuA0.value.length)
                elgNuA0.focused = true;
                elgNuA0.focus();
            }
        ;
                    }, 20);                
                ec('div');
ec('div');
}else { 
let elTEvZ4 = eo('div',null,null,`class`,`content-container col-12 col-lg-9`);
let elgLkDr = eo('section',null,null,`class`,`head`);
let elO9imA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let elilaMA = eo('i',null,null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let elnFIEz = ev('img',null,null,`src`,`${FAVICON}`,`class`,`image`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let elZ9rSO = eo('div',null,null,`class`,`d-inline-block m-l-1`);
text(trans('site-name'));
ec('div');
ec('section');
let elKV_GJ = eo('h1',null,null,`class`,`welcome-msg`);
let elu4aYS = eo('div');
text(`Welcome to chat rooms`);
ec('div');
let elq_8ec = eo('div');
text(`Click on any chat room on the left to open.`);
ec('div');
ec('h1');
ec('div');
}ec('div');
}ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elJGEx_;
                        
            var animator = DI.resolve('animator');
            animator.animate(elJGEx_, 'fadeIn', 'fast');
        ;
                    }, 20);                
                }let el8oc5B = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRooms()}]},`type`,`button`,`id`,`messenger-btn`);
let cndpsjR = component.user.unseenRoomsNotifications.total > 0;
this.setState('stYjp1P', cndpsjR);
if (cndpsjR) { 
let elu22dK = eo('span','6VKf',null,`title`,`${component.user.unseenRoomsNotifications.total == 1 ? 'You have new message' : component.user.unseenRoomsNotifications.total + ' new messages'}`,`class`,`badge badge-danger unseen`);
text(component.user.unseenRoomsNotifications.total);
ec('span');
}let eljQr26 = eo('i',null,null,`class`,`${fab('facebook-messenger') + ' icon'}`);
ec('i');
ec('button');
ec('section');

                    this.isReadyToGo();
                }
        });