_Component({
                selector: 'chat-rooms-panel',
                c: 'ChatRoomsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['chatRoomsAreOpened','close','isLoading','openRoomsList','navigateToChatRoomsPage','chatRooms','openRoom','openedRoom','user','isLoadingMessages','messagesList','scrollToLastMessage','clearUnseenNotifications','formatDate','writingIsArabic','input','sendMessage','comment','openChatRooms'],
                children: {c1xQ0RNLw:'flk-spinner',cDX8ziTPK:'flk-spinner',cjIQ7kGem:'flk-time-ago',cL91EPJeT:'user-online',cxITrFVAp:'markdown',cCEtsRHRJ:'flk-time-ago'},
                render: function (component) {
                    let elW43C2 = eo('section',null,null,`id`,`chat-rooms-panel`);
let cnduFY0 = component.chatRoomsAreOpened;
this.setState('stOPp6y', cnduFY0);
if (cnduFY0) { 
let elMkEfp = eo('div','lCHf',null,`class`,`animate`,`id`,`chat-rooms-wrapper`);
let elymjK4 = eo('div','kFWf',null,`id`,`chat-room-body`);
let elGTXpR = eo('button','cpUf',null, eventListeners, {onclick:[function(e) {var $el = this;component.close()}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`close-btn`);
let elBPgeV = eo('i','7Gff',null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
let cnd1uyV = component.isLoading;
this.setState('st79iVx', cnd1uyV);
let cndjdOK = !(cnd1uyV);
this.setState('stszm2g', cndjdOK);
if (cnd1uyV) { 
let cmpFQmm = this._lc('c1xQ0RNLw', {parent:component,state:'st79iVx'});
}else { 
let eluAWsZ = eo('div',null,null,`class`,`row`,`id`,`panel-container`);
let elLrOCV = eo('div',null,null,`class`,`col-12 col-lg-3`,`id`,`rooms-list`);
elLrOCV.cls = {opened: component.openRoomsList};

            for (let className in elLrOCV.cls) {
                elLrOCV.classList.toggle(className, elLrOCV.cls[className]);
            }  
            let elUQla1 = eo('div',null,null,`id`,`heading`);
let elf55Ex = ev('img',null,null,`src`,`${FAVICON}`,`id`,`logo`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let elO7xZ6 = eo('h3',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.navigateToChatRoomsPage()}]},`id`,`heading-text`);
text(`Chat rooms list`);
ec('h3');
let el19tSd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = false;}]},`title`,`${trans(`Close`)}`,`type`,`button`,`class`,`d-sm-none close-btn`);
let el8Xko9 = eo('i',null,null,`class`,`${fas('times') + ' icon'}`);
ec('i');
ec('button');
ec('div');
for (let i in component.chatRooms) {
let room = component.chatRooms[i]; 
 let ii83FG = '6SGeqFH' + i;
let el0N0FL = eo('button','5b9da0AMsPae' + i+ii83FG,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoom(room)}]},`class`,`room-btn`,`type`,`button`);
el0N0FL.cls = {active: component.openedRoom && component.openedRoom.id == room.id};

            for (let className in el0N0FL.cls) {
                el0N0FL.classList.toggle(className, el0N0FL.cls[className]);
            }  
            let elQ_HHy = ev('img','aT1ff'+ii83FG,null,`src`,`${room.image || FAVICON}`,`class`,`image`);
let eliQnQk = eo('span','oRFff'+ii83FG,null,`class`,`name`);
text(room.name);
ec('span');
let cndURiu = component.user.unseenRoomsNotifications.rooms[room.id] > 0;
this.setState('staBw3b', cndURiu);
if (cndURiu) { 
let elA_C_E = eo('span','09pff'+ii83FG,null,`class`,`badge badge-success unseen`);
text(component.user.unseenRoomsNotifications.rooms[room.id]);
ec('span');
}ec('button');
}
ec('div');
let cndoA3T = component.openedRoom;
this.setState('stZdSuZ', cndoA3T);
let cnda5I8 = !(cndoA3T);
this.setState('stxMRpr', cnda5I8);
if (cndoA3T) { 
let elQQ8fS = eo('div','52Hf',null,`class`,`content-container col-12 col-lg-9`);
let ellH60A = eo('div','4umf',null,`class`,`chat-body`);
let elpQZZu = eo('section','CVPf',null,`class`,`head`);
let el5X3FO = eo('button','ws4f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let el7TKND = eo('i','qkRf',null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let ellCRgf = ev('img','Y7Lf',null,`src`,`${component.openedRoom.image || FAVICON}`,`class`,`image`,`title`,`${component.openedRoom.name}`,`alt`,`${component.openedRoom.name}`);
let elQ7DHK = eo('div','LkNf',null,`class`,`d-inline-block m-l-2`);
text(component.openedRoom.name);
ec('div');
ec('section');
let cndZsTJ = component.isLoadingMessages;
this.setState('stw_1vu', cndZsTJ);
let cndiQXq = !(cndZsTJ);
this.setState('stVoCqV', cndiQXq);
if (cndZsTJ) { 
let elQ158s = eo('div','6sGf',null,`class`,`text-center m-t-10`);
let cmpCi5q = this._lc('cDX8ziTPK', {parent:component,state:'stw_1vu'});
ec('div');
}else { 
let elUGN0b = eo('div',null,null, eventListeners, {onready:[function(e) {var $el = this;component.messagesList = $el; component.scrollToLastMessage();}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}]},`class`,`messages-list`);
for (let i in component.openedRoom.messages) {
let message = component.openedRoom.messages[i]; 
 let iiAffC = 'YoH7YIw' + i;
let cndvNxj = message.sender.id == 0;
this.setState('stHaUgy', cndvNxj);
let cndyiGM = !(cndvNxj);
this.setState('stsiaSF', cndyiGM);
if (cndvNxj) { 
let elOWUWk = eo('div','Qzfff'+iiAffC,null,`class`,`system-message`);
let elftQnT = eo('span','F_9ff'+iiAffC,null,`class`,`message`);
text(message.message);
ec('span');
let cmpyu4S = this._lc('cjIQ7kGem', {parent:component,props:{timestamp:message.createdAt.timestamp},state:'stHaUgy',insideLoop:true,index:"" +iiAffC});
ec('div');
}else { 
let elrtK_B = eo('div','r5Hff'+iiAffC,null,`title`,`${message.createdAt.format}`,`class`,`room-message`);
elrtK_B.cls = {sender: component.user.id == message.sender.id};

            for (let className in elrtK_B.cls) {
                elrtK_B.classList.toggle(className, elrtK_B.cls[className]);
            }  
            let elssH_w = eo('div','KEgff'+iiAffC,null,`class`,`user`);
let elGCvUO = ev('img','g0sff'+iiAffC,null,`src`,`${message.sender.image}`,`class`,`u-image`,`title`,`${message.sender.name}`,`alt`,`${message.sender.name}`);
let elPiF9C = eo('div','AE4ff'+iiAffC,null,`class`,`info`);
let elU5JTN = eo('div','ZFqff'+iiAffC,null,`class`,`u-name d-inline-block`);
text(message.sender.name);
ec('div');
let cmpIVn4 = this._lc('cL91EPJeT', {parent:component,props:{id:message.sender.id},attrs:{id:`${message.sender.id}`},state:'stsiaSF',insideLoop:true,index:"" +iiAffC});
ec('div');
ec('div');
let elnDydf = eo('div','tVFff'+iiAffC,null,`class`,`message-body`);
let elEuKur = eo('p','_pOff'+iiAffC,null,`class`,`message-content`);
elEuKur.cls = {ar: message.message.startsWithArabic()};

            for (let className in elEuKur.cls) {
                elEuKur.classList.toggle(className, elEuKur.cls[className]);
            }  
            let cmpxl78 = this._lc('cxITrFVAp', {parent:component,props:{content:message.message},state:'stsiaSF',insideLoop:true,index:"" +iiAffC});
ec('p');
let cmpnRdN = this._lc('cCEtsRHRJ', {parent:component,props:{timestamp:message.createdAt.timestamp},attrs:{class:'gray-text created-at'},state:'stsiaSF',insideLoop:true,index:"" +iiAffC});
ec('div');
ec('div');
}let el4_6tj = eo('div','VwGNGpkqxVCh' + i+iiAffC,null,`class`,`separator`);
ec('div');
}
ec('div');

                    setTimeout(function () {
                        let $el = elUGN0b;
                        component.messagesList = $el; component.scrollToLastMessage();;
                    }, 20);                
                }ec('div');
let elYuLTG = eo('div',null,null,`class`,`message-input-wrapper`);
let elllhTI = ev('img',null,null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elJJKrT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.input = this.value;},function(e) {var $el = this;component.writingIsArabic = $el.value.startsWithArabic()}],onclick:[function(e) {var $el = this;component.clearUnseenNotifications()}],onkeydown:[function(e) {var $el = this;component.sendMessage($el, event)}]},`value`,`${fval(component.input)}`,`placeholder`,`${trans(`Send a message... (markdown)`)}`,`type`,`textarea`,`class`,`message-input`);
elJJKrT.cls = {ar: !!component.writingIsArabic};

            for (let className in elJJKrT.cls) {
                elJJKrT.classList.toggle(className, elJJKrT.cls[className]);
            }  
            elJJKrT.value = fval(component.input);
ec('textarea');

                    setTimeout(function () {
                        let $el = elJJKrT;
                        
            if (true && ! elJJKrT.focused) {
                elJJKrT.setSelectionRange(elJJKrT.value.length, elJJKrT.value.length)
                elJJKrT.focused = true;
                elJJKrT.focus();
            }
        ;
                    }, 20);                
                ec('div');
ec('div');
}else { 
let elrm02G = eo('div',null,null,`class`,`content-container col-12 col-lg-9`);
let elpexj0 = eo('section',null,null,`class`,`head`);
let eltzRTJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openRoomsList = true}]},`type`,`button`,`class`,`toggle-btn d-sm-none`);
let elNtxgx = eo('i',null,null,`class`,`${fas('bars') + ' icon'}`);
ec('i');
ec('button');
let elGquZx = ev('img',null,null,`src`,`${FAVICON}`,`class`,`image`,`title`,`${trans('site-name')}`,`alt`,`${trans('site-name')}`);
let elk_Ui2 = eo('div',null,null,`class`,`d-inline-block m-l-1`);
text(trans('site-name'));
ec('div');
ec('section');
let elbCvOM = eo('h1',null,null,`class`,`welcome-msg`);
let el5wZMF = eo('div');
text(`Welcome to chat rooms`);
ec('div');
let elPQblx = eo('div');
text(`Click on any chat room on the left to open.`);
ec('div');
ec('h1');
ec('div');
}ec('div');
}ec('div');
ec('div');

                    setTimeout(function () {
                        let $el = elMkEfp;
                        
            var animator = DI.resolve('animator');
            animator.animate(elMkEfp, 'fadeIn', 'fast');
        ;
                    }, 20);                
                }let elz2WUS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRooms()}]},`type`,`button`,`id`,`messenger-btn`);
let cndzoBw = component.user.unseenRoomsNotifications.total > 0;
this.setState('stQlZNx', cndzoBw);
if (cndzoBw) { 
let ely5_vN = eo('span','VChf',null,`title`,`${component.user.unseenRoomsNotifications.total == 1 ? 'You have new message' : component.user.unseenRoomsNotifications.total + ' new messages'}`,`class`,`badge badge-danger unseen`);
text(component.user.unseenRoomsNotifications.total);
ec('span');
}let elgyyuK = eo('i',null,null,`class`,`${fab('facebook-messenger') + ' icon'}`);
ec('i');
ec('button');
ec('section');

                    this.isReadyToGo();
                }
        });