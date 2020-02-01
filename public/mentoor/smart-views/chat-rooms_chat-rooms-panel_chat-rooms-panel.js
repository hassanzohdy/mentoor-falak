_Component({
                selector: 'chat-rooms-panel',
                c: 'ChatRoomsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['chatRoomsAreOpened','close','isLoading','openRoomsList','navigateToChatRoomsPage','chatRooms','openRoom','openedRoom','user','isLoadingMessages','messagesList','scrollToLastMessage','clearUnseenNotifications','formatDate','writingIsArabic','input','sendMessage','comment','openChatRooms'],
                children: {cFfAnrpsf:'flk-spinner',czuKVxrBe:'flk-spinner',cMvJliJSS:'flk-time-ago',czZ3_nv3w:'user-online',cZhJ4QiIa:'markdown',c4XiHV06f:'flk-time-ago'},
                render: function (component) {
                    let elDiw7F = eo('section',null,null,`id`,`chat-rooms-panel`);
let cndPu2X = component.chatRoomsAreOpened;
this.setState('st8Ymq8', cndPu2X);
if (cndPu2X) { 
let el1kR07 = eo('div','J7yf',null,`class`,`animate`,`id`,`chat-rooms-wrapper`);
let elbCcCR = eo('div','i7df',null,`id`,`chat-room-body`);
let elsNOak = eo('button','pguf',null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`close-btn`);
let elLr6lH = eo('i','QOAf',null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
let cndRZcx = component.isLoading;
this.setState('stVDtCB', cndRZcx);
let cnd0njx = !(cndRZcx);
this.setState('st1LJiM', cnd0njx);
if (cndRZcx) { 
let cmpHaKZ = this._lc('cFfAnrpsf', {parent:component,state:'stVDtCB'});
}else { 
let el1FJRV = eo('div',null,null,`class`,`row`,`id`,`panel-container`);
let el0ZWR3 = eo('div',null,null,`class`,`col-12 col-lg-3`,`id`,`rooms-list`);
el0ZWR3.cls = {opened: component.openRoomsList};

            for (let className in el0ZWR3.cls) {
                el0ZWR3.classList.toggle(className, el0ZWR3.cls[className]);
            }  
            let elh2YEI = eo('div',null,null,`id`,`heading`);
let elJQEwc = ev('img',null,null,`src`,`${FAVICON}`,`id`,`logo`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let elvgWIF = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.navigateToChatRoomsPage()}]},`id`,`heading-text`);
text(`Chat rooms list`);
ec('h3');
let elZrdM9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = false;}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`d-sm-none close-btn`);
let elBbvtT = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
ec('div');
for (let i in component.chatRooms) {
let room = component.chatRooms[i]; 
 let iiMHoj = 'BUG_a85' + i;
let elsAqrT = eo('button','IwmJTif659bx' + i+iiMHoj,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoom(room)}]},`class`,`room-btn`,`type`,`button`);
elsAqrT.cls = {active: component.openedRoom && component.openedRoom.id == room.id};

            for (let className in elsAqrT.cls) {
                elsAqrT.classList.toggle(className, elsAqrT.cls[className]);
            }  
            let elSc0X2 = ev('img','qcFff'+iiMHoj,null,`src`,`${room.image || FAVICON}`,`class`,`image`);
let el02DNa = eo('span','6yzff'+iiMHoj,null,`class`,`name`);
text(room.name);
ec('span');
let cndS9bT = component.user.unseenRoomsNotifications.rooms[room.id] > 0;
this.setState('stbuutY', cndS9bT);
if (cndS9bT) { 
let elxneSD = eo('span','s6mff'+iiMHoj,null,`class`,`badge badge-success unseen`);
text(component.user.unseenRoomsNotifications.rooms[room.id]);
ec('span');
}ec('button');
}
ec('div');
let cndpLBN = component.openedRoom;
this.setState('st22L1I', cndpLBN);
let cnd96sB = !(cndpLBN);
this.setState('stOZIRs', cnd96sB);
if (cndpLBN) { 
let elJJJOD = eo('div','W4Mf',null,`class`,`content-container col-12 col-lg-9`);
let elLXAfT = eo('div','0gZf',null,`class`,`chat-body`);
let ellrZAq = eo('section','MfPf',null,`class`,`head`);
let elROflv = eo('button','fvvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let eltymqv = eo('i','jsEf',null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let elzm5Gc = ev('img','7wRf',null,`src`,`${component.openedRoom.image || FAVICON}`,`class`,`image`,`title`,`${component.openedRoom.name}`,`alt`,`${component.openedRoom.name}`);
let elzV1rs = eo('div','o1ff',null,`class`,`d-inline-block m-l-2`);
text(component.openedRoom.name);
ec('div');
ec('section');
let cndhkcA = component.isLoadingMessages;
this.setState('stpniL7', cndhkcA);
let cndyhdA = !(cndhkcA);
this.setState('stYUXeT', cndyhdA);
if (cndhkcA) { 
let elLKfiK = eo('div','8WCf',null,`class`,`text-center m-t-10`);
let cmpbnDY = this._lc('czuKVxrBe', {parent:component,state:'stpniL7'});
ec('div');
}else { 
let elzrVJY = eo('div',null,null, eventListeners, {onready:[function(e) {var $el = this;component.messagesList = $el; component.scrollToLastMessage();}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}]},`class`,`messages-list`);
for (let i in component.openedRoom.messages) {
let message = component.openedRoom.messages[i]; 
 let iipT6N = 'yHA1n7z' + i;
let cndudLh = message.sender.id == 0;
this.setState('stbPQMC', cndudLh);
let cnd2_rE = !(cndudLh);
this.setState('stNjeLE', cnd2_rE);
if (cndudLh) { 
let el1ZO4l = eo('div','FR3ff'+iipT6N,null,`class`,`system-message`);
let elvNRGs = eo('span','2AYff'+iipT6N,null,`class`,`message`);
text(message.message);
ec('span');
let cmpwTcA = this._lc('cMvJliJSS', {parent:component,props:{timestamp:message.createdAt.timestamp},state:'stbPQMC',insideLoop:true,index:"" +iipT6N});
ec('div');
}else { 
let elhrTpM = eo('div','jToff'+iipT6N,null,`title`,`${message.createdAt.format}`,`class`,`room-message`);
elhrTpM.cls = {sender: component.user.id == message.sender.id};

            for (let className in elhrTpM.cls) {
                elhrTpM.classList.toggle(className, elhrTpM.cls[className]);
            }  
            let elE5Jyg = eo('div','D7Rff'+iipT6N,null,`class`,`user`);
let elirIA0 = ev('img','8R4ff'+iipT6N,null,`src`,`${message.sender.image}`,`class`,`u-image`,`title`,`${message.sender.name}`,`alt`,`${message.sender.name}`);
let elB75uw = eo('div','tA8ff'+iipT6N,null,`class`,`info`);
let elIUHqn = eo('div','olNff'+iipT6N,null,`class`,`u-name d-inline-block`);
text(message.sender.name);
ec('div');
let cmpDtGq = this._lc('czZ3_nv3w', {parent:component,props:{id:message.sender.id},attrs:{id:`${message.sender.id}`},state:'stNjeLE',insideLoop:true,index:"" +iipT6N});
ec('div');
ec('div');
let elnZkCO = eo('div','sbWff'+iipT6N,null,`class`,`message-body`);
let elACeys = eo('p','EhLff'+iipT6N,null,`class`,`message-content`);
elACeys.cls = {ar: message.message.startsWithArabic()};

            for (let className in elACeys.cls) {
                elACeys.classList.toggle(className, elACeys.cls[className]);
            }  
            let cmpo9iM = this._lc('cZhJ4QiIa', {parent:component,props:{content:message.message},state:'stNjeLE',insideLoop:true,index:"" +iipT6N});
ec('p');
let cmpywpm = this._lc('c4XiHV06f', {parent:component,props:{timestamp:message.createdAt.timestamp},attrs:{class:'gray-text created-at'},state:'stNjeLE',insideLoop:true,index:"" +iipT6N});
ec('div');
ec('div');
}let elbWrpN = eo('div','72bUjTxSqIYg' + i+iipT6N,null,`class`,`separator`);
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elzrVJY;
                        component.messagesList = $el; component.scrollToLastMessage();;
                    }, 20);                
                }ec('div');
let elCYCXd = eo('div',null,null,`class`,`message-input-wrapper`);
let elgJfNc = ev('img',null,null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elhxbwu = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.input = this.value;},function(e) {var $el = this;component.writingIsArabic = $el.value.startsWithArabic()}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}],onkeydown:[function(e) {var $el = this;component.sendMessage($el, event)}]},`value`,`${fval(component.input)}`,`placeholder`,`${trans(`Send a message... (markdown)`)}`,`type`,`textarea`,`class`,`message-input`);
elhxbwu.cls = {ar: !!component.writingIsArabic};

            for (let className in elhxbwu.cls) {
                elhxbwu.classList.toggle(className, elhxbwu.cls[className]);
            }  
            elhxbwu.value = fval(component.input);
ec('textarea');

                    setTimeout(function () {
                        let $el = elhxbwu;
                        
            if (true && ! elhxbwu.focused) {
                elhxbwu.setSelectionRange(elhxbwu.value.length, elhxbwu.value.length)
                elhxbwu.focused = true;
                elhxbwu.focus();
            }
        ;
                    }, 20);                
                ec('div');
ec('div');
}else { 
let elgpLaF = eo('div',null,null,`class`,`content-container col-12 col-lg-9`);
let el0yzMH = eo('section',null,null,`class`,`head`);
let elZK1B4 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let elcEzCi = eo('i',null,null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let elViu8E = ev('img',null,null,`src`,`${FAVICON}`,`class`,`image`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let el94gEI = eo('div',null,null,`class`,`d-inline-block m-l-1`);
text(trans('site-name'));
ec('div');
ec('section');
let el8XXdJ = eo('h1',null,null,`class`,`welcome-msg`);
let elCrMXJ = eo('div');
text(`Welcome to chat rooms`);
ec('div');
let el19vCn = eo('div');
text(`Click on any chat room on the left to open.`);
ec('div');
ec('h1');
ec('div');
}ec('div');
}ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = el1kR07;
                        
            var animator = DI.resolve('animator');
            animator.animate(el1kR07, 'fadeIn', 'fast');
        ;
                    }, 20);                
                }let elTEZ32 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRooms()}]},`type`,`button`,`id`,`messenger-btn`);
let cnd6CMl = component.user.unseenRoomsNotifications.total > 0;
this.setState('sts7kSg', cnd6CMl);
if (cnd6CMl) { 
let el497zD = eo('span','UrPf',null,`title`,`${component.user.unseenRoomsNotifications.total == 1 ? 'You have new message' : component.user.unseenRoomsNotifications.total + ' new messages'}`,`class`,`badge badge-danger unseen`);
text(component.user.unseenRoomsNotifications.total);
ec('span');
}let elL0171 = eo('i',null,null,`class`,`${fab('facebook-messenger') + ' icon'}`);
ec('i');
ec('button');
ec('section');

                    this.isReadyToGo();
                }
        });