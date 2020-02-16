_Component({
                selector: 'chat-rooms-panel',
                c: 'ChatRoomsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['chatRoomsAreOpened','close','isLoading','openRoomsList','navigateToChatRoomsPage','chatRooms','openRoom','openedRoom','user','isLoadingMessages','messagesList','scrollToLastMessage','clearUnseenNotifications','formatDate','writingIsArabic','input','sendMessage','comment','openChatRooms'],
                children: {cQlCa9nEz:'flk-spinner',cj25Qc56J:'flk-spinner',cyAsQzWMC:'flk-time-ago',ci2gFu6nm:'user-online',cBw0bmWHr:'markdown',cbEXumoNw:'flk-time-ago'},
                render: function (component) {
                    let eloz75b = eo('section',null,null,`id`,`chat-rooms-panel`);
let cndZiSU = component.chatRoomsAreOpened;
this.setState('steHPXh', cndZiSU);
if (cndZiSU) { 
let elBkMK_ = eo('div','rxkf',null,`class`,`animate`,`id`,`chat-rooms-wrapper`);
let el2Tn6J = eo('div','E3_f',null,`id`,`chat-room-body`);
let elYvnsI = eo('button','FGvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`close-btn`);
let elgOiOR = eo('i','hTSf',null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
let cndW9aQ = component.isLoading;
this.setState('stHEtgo', cndW9aQ);
let cndJyKp = !(cndW9aQ);
this.setState('stQTx5O', cndJyKp);
if (cndW9aQ) { 
let cmpKKvC = this._lc('cQlCa9nEz', {parent:component,state:'stHEtgo'});
}else { 
let el6LBq7 = eo('div',null,null,`class`,`row`,`id`,`panel-container`);
let elkgHaM = eo('div',null,null,`class`,`col-12 col-lg-3`,`id`,`rooms-list`);
elkgHaM.cls = {opened: component.openRoomsList};

            for (let className in elkgHaM.cls) {
                elkgHaM.classList.toggle(className, elkgHaM.cls[className]);
            }  
            let elyqxAN = eo('div',null,null,`id`,`heading`);
let elj35Hq = ev('img',null,null,`src`,`${FAVICON}`,`id`,`logo`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let elSsyNq = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.navigateToChatRoomsPage()}]},`id`,`heading-text`);
text(`Chat rooms list`);
ec('h3');
let el3t18Y = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = false;}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`d-sm-none close-btn`);
let elcCcOl = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
ec('div');
for (let i in component.chatRooms) {
let room = component.chatRooms[i]; 
 let iiA0Ep = 'kVTiLQY' + i;
let el25Mpv = eo('button','PQ0AF4wlMv5e' + i+iiA0Ep,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoom(room)}]},`class`,`room-btn`,`type`,`button`);
el25Mpv.cls = {active: component.openedRoom && component.openedRoom.id == room.id};

            for (let className in el25Mpv.cls) {
                el25Mpv.classList.toggle(className, el25Mpv.cls[className]);
            }  
            let elS_xee = ev('img','YeRff'+iiA0Ep,null,`src`,`${room.image || FAVICON}`,`class`,`image`);
let elxksAO = eo('span','Fxgff'+iiA0Ep,null,`class`,`name`);
text(room.name);
ec('span');
let cnd0FwU = component.user.unseenRoomsNotifications.rooms[room.id] > 0;
this.setState('st7CcE0', cnd0FwU);
if (cnd0FwU) { 
let elHwCjs = eo('span','GGKff'+iiA0Ep,null,`class`,`badge badge-success unseen`);
text(component.user.unseenRoomsNotifications.rooms[room.id]);
ec('span');
}ec('button');
}
ec('div');
let cndrPB_ = component.openedRoom;
this.setState('stoRE1G', cndrPB_);
let cnd44rS = !(cndrPB_);
this.setState('stTAEMK', cnd44rS);
if (cndrPB_) { 
let elLIsL9 = eo('div','lW1f',null,`class`,`content-container col-12 col-lg-9`);
let el1Y3gE = eo('div','F0Xf',null,`class`,`chat-body`);
let elBcdha = eo('section','JJhf',null,`class`,`head`);
let elVV7ib = eo('button','HErf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let elszPoZ = eo('i','3Acf',null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let eloi8Nf = ev('img','4Qmf',null,`src`,`${component.openedRoom.image || FAVICON}`,`class`,`image`,`title`,`${component.openedRoom.name}`,`alt`,`${component.openedRoom.name}`);
let elMRxA8 = eo('div','FDPf',null,`class`,`d-inline-block m-l-2`);
text(component.openedRoom.name);
ec('div');
ec('section');
let cndn1MH = component.isLoadingMessages;
this.setState('stUFXT_', cndn1MH);
let cnddJvU = !(cndn1MH);
this.setState('stRHxLE', cnddJvU);
if (cndn1MH) { 
let elw392X = eo('div','G7Sf',null,`class`,`text-center m-t-10`);
let cmpiNtJ = this._lc('cj25Qc56J', {parent:component,state:'stUFXT_'});
ec('div');
}else { 
let elJJWPE = eo('div',null,null, eventListeners, {onready:[function(e) {var $el = this;component.messagesList = $el; component.scrollToLastMessage();}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}]},`class`,`messages-list`);
for (let i in component.openedRoom.messages) {
let message = component.openedRoom.messages[i]; 
 let iiEIUc = 'nT94Gn4' + i;
let cndd3ug = message.sender.id == 0;
this.setState('stv4qt2', cndd3ug);
let cndUMg6 = !(cndd3ug);
this.setState('stCvs_3', cndUMg6);
if (cndd3ug) { 
let elvXlJr = eo('div','sa8ff'+iiEIUc,null,`class`,`system-message`);
let elJsZtB = eo('span','uydff'+iiEIUc,null,`class`,`message`);
text(message.message);
ec('span');
let cmpeFIe = this._lc('cyAsQzWMC', {parent:component,props:{timestamp:message.createdAt.timestamp},state:'stv4qt2',insideLoop:true,index:"" +iiEIUc});
ec('div');
}else { 
let elxyI7n = eo('div','xQsff'+iiEIUc,null,`title`,`${message.createdAt.format}`,`class`,`room-message`);
elxyI7n.cls = {sender: component.user.id == message.sender.id};

            for (let className in elxyI7n.cls) {
                elxyI7n.classList.toggle(className, elxyI7n.cls[className]);
            }  
            let elVtv9i = eo('div','NqXff'+iiEIUc,null,`class`,`user`);
let elB3NRx = ev('img','X3Jff'+iiEIUc,null,`src`,`${message.sender.image}`,`class`,`u-image`,`title`,`${message.sender.name}`,`alt`,`${message.sender.name}`);
let elPdw7C = eo('div','nb7ff'+iiEIUc,null,`class`,`info`);
let elaI9dF = eo('div','uxzff'+iiEIUc,null,`class`,`u-name d-inline-block`);
text(message.sender.name);
ec('div');
let cmpY0QG = this._lc('ci2gFu6nm', {parent:component,props:{id:message.sender.id},attrs:{id:`${message.sender.id}`},state:'stCvs_3',insideLoop:true,index:"" +iiEIUc});
ec('div');
ec('div');
let elEo3lA = eo('div','KPKff'+iiEIUc,null,`class`,`message-body`);
let elzuMbO = eo('p','eXhff'+iiEIUc,null,`class`,`message-content`);
elzuMbO.cls = {ar: message.message.startsWithArabic()};

            for (let className in elzuMbO.cls) {
                elzuMbO.classList.toggle(className, elzuMbO.cls[className]);
            }  
            let cmpn04w = this._lc('cBw0bmWHr', {parent:component,props:{content:message.message},state:'stCvs_3',insideLoop:true,index:"" +iiEIUc});
ec('p');
let cmpiVoB = this._lc('cbEXumoNw', {parent:component,props:{timestamp:message.createdAt.timestamp},attrs:{class:'gray-text created-at'},state:'stCvs_3',insideLoop:true,index:"" +iiEIUc});
ec('div');
ec('div');
}let el78Fuk = eo('div','UqOKMk2GxbAn' + i+iiEIUc,null,`class`,`separator`);
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elJJWPE;
                        component.messagesList = $el; component.scrollToLastMessage();;
                    }, 20);                
                }ec('div');
let elmtzdx = eo('div',null,null,`class`,`message-input-wrapper`);
let elu6DF2 = ev('img',null,null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elWv2SZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.input = this.value;},function(e) {var $el = this;component.writingIsArabic = $el.value.startsWithArabic()}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}],onkeydown:[function(e) {var $el = this;component.sendMessage($el, event)}]},`value`,`${fval(component.input)}`,`placeholder`,`${trans(`Send a message... (markdown)`)}`,`type`,`textarea`,`class`,`message-input`);
elWv2SZ.cls = {ar: !!component.writingIsArabic};

            for (let className in elWv2SZ.cls) {
                elWv2SZ.classList.toggle(className, elWv2SZ.cls[className]);
            }  
            elWv2SZ.value = fval(component.input);
ec('textarea');

                    setTimeout(function () {
                        let $el = elWv2SZ;
                        
            if (true && ! elWv2SZ.focused) {
                elWv2SZ.setSelectionRange(elWv2SZ.value.length, elWv2SZ.value.length)
                elWv2SZ.focused = true;
                elWv2SZ.focus();
            }
        ;
                    }, 20);                
                ec('div');
ec('div');
}else { 
let elFkGty = eo('div',null,null,`class`,`content-container col-12 col-lg-9`);
let elNKtnR = eo('section',null,null,`class`,`head`);
let elZjWgk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let elbLZhd = eo('i',null,null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let eloEEOi = ev('img',null,null,`src`,`${FAVICON}`,`class`,`image`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let elSOszY = eo('div',null,null,`class`,`d-inline-block m-l-1`);
text(trans('site-name'));
ec('div');
ec('section');
let el1v19Q = eo('h1',null,null,`class`,`welcome-msg`);
let elwcUl6 = eo('div');
text(`Welcome to chat rooms`);
ec('div');
let elLowv2 = eo('div');
text(`Click on any chat room on the left to open.`);
ec('div');
ec('h1');
ec('div');
}ec('div');
}ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elBkMK_;
                        
            var animator = DI.resolve('animator');
            animator.animate(elBkMK_, 'fadeIn', 'fast');
        ;
                    }, 20);                
                }let el3dso2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRooms()}]},`type`,`button`,`id`,`messenger-btn`);
let cndrri1 = component.user.unseenRoomsNotifications.total > 0;
this.setState('stnF5qN', cndrri1);
if (cndrri1) { 
let el1ibBz = eo('span','fSRf',null,`title`,`${component.user.unseenRoomsNotifications.total == 1 ? 'You have new message' : component.user.unseenRoomsNotifications.total + ' new messages'}`,`class`,`badge badge-danger unseen`);
text(component.user.unseenRoomsNotifications.total);
ec('span');
}let elwcaR1 = eo('i',null,null,`class`,`${fab('facebook-messenger') + ' icon'}`);
ec('i');
ec('button');
ec('section');

                    this.isReadyToGo();
                }
        });