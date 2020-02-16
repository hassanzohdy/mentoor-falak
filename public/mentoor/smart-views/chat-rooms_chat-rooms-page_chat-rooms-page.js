_Component({
                selector: 'chat-rooms-page',
                c: 'ChatRoomsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','openChatRoom','chatRooms','userIsMemberOf','userIsRequestingToJoin','confirmingRoom','userIsModeratorOf','getRoomRequests','openRoomRequests','currentRoom','isLoadingRequests','roomRequests','openCurrentRequestAnswer','currentRequest','approveRequest','declineRequest','openAcceptanceCriteriaModal','joiningRoom','submitAcceptanceCriteria','confirmJoin','confirmingModal','joinRoom'],
                children: {cWPVnuOjF:'flk-spinner',cdULu6ifK:'gold-icon',cwcfys0zP:'layout',cYuQTt6W8:'chat-room-modal',chPn10AxV:'flk-spinner',cw7BQF8dN:'markdown',cc11XWLlp:'flk-modal',cIkewPMI0:'markdown',c4tLbO8nJ:'flk-modal',cOc65Imvl:'markdown',c3bUAfkDf:'flk-modal'},
                render: function (component) {
                    let cmpqtpN = this._lc('cwcfys0zP', {parent:component,content:(layout) => {let elv_7iM = eo('h1');
text(`Chat Rooms`);
ec('h1');
let cndU8Mt = component.isLoading;
this.setState('st4P3Fh', cndU8Mt);
let cndk16T = !(cndU8Mt);
this.setState('stGF7ES', cndk16T);
if (cndU8Mt) { 
let cmpbGbr = this._lc('cWPVnuOjF', {parent:component,parentTop:layout,state:'st4P3Fh'});
}else { 
let el2Ydy2 = eo('div');
let cndRV3Y = component.user.id === 1;
this.setState('st0f16M', cndRV3Y);
let cndyLoM = !(cndRV3Y);
this.setState('stxWkxR', cndyLoM);
if (cndRV3Y) { 
let elgQPfg = eo('button','J9mf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRoom = true}]},`class`,`btn btn-success bold btn-sm`);
let elbgsX0 = eo('i','dcFf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Room`);
ec('button');
}let cndNExH = Is.empty(component.chatRooms);
this.setState('stBlXp8', cndNExH);
let cndqVJ9 = !(cndNExH);
this.setState('stgyRGD', cndqVJ9);
if (cndNExH) { 
let eleSu6X = eo('h1','Pupf',null,`class`,`text-center m-t-3`);
text(`No chat rooms at the moment.`);
ec('h1');
}else { 
let elHhuPQ = eo('span');
let elq_1aN = eo('table',null,null,`class`,`table table-bordered`);
let elbCVFm = eo('tbody');
for (let index in component.chatRooms) {
let room = component.chatRooms[index]; 
 let iiUQeE = 'ardFZV6' + index;
let el9xYGH = eo('tr','S9yGVSpbFszF' + index+iiUQeE,null,`class`,`room-row`);
let elHSny6 = eo('td','tZ8ff'+iiUQeE);
let elk4aUL = ev('img','2Xoff'+iiUQeE,null,`src`,`${room.image || FAVICON}`,`class`,`image`,`title`,`${room.name}`,`alt`,`${room.name}`);
let elOPdxT = eo('div','TZBff'+iiUQeE,null,`class`,`meta`);
let elkSxqH = eo('span','l6qff'+iiUQeE,null,`class`,`name`);
text(room.name);
ec('span');
let elfGgbP = eo('p','SLHff'+iiUQeE,null,`class`,`description`);
text(room.description);
ec('p');
ec('div');
ec('td');
let elj2ePe = eo('td','Lqtff'+iiUQeE,null,`class`,`text-center bold v-middle text-capitalize`);
let eltxSSA = eo('div','LUaff'+iiUQeE,null,`class`,`teal-text`);
text(room.category);
ec('div');
let elhoc3P = eo('div','bhoff'+iiUQeE,null,`title`,`${trans(`Speaking|writing Language`)}`);
let el2Olv7 = eo('i','GxZff'+iiUQeE,null,`class`,`${fas('comments') + ' mr-2 v-middle grey-text icon'}`);
ec('i');
let eloLASZ = eo('small','hUNff'+iiUQeE,null,`class`,`bold pink-text`);
text(room.language == 'all' ? 'All languages' : room.language);
ec('small');
ec('div');
ec('td');
let elItfXC = eo('td','EW4ff'+iiUQeE,null,`class`,`text-center v-middle`);
let elejRlH = eo('i','85lff'+iiUQeE,null,`class`,`${fas('users') + ' fa-2x icon'}`);
ec('i');
let elhBMHC = eo('div','YjBff'+iiUQeE,null,`class`,`members bold`);
let elg4aqf = eo('span','abTff'+iiUQeE);
text(room.members.length.format());
ec('span');
text(`/`);
let cndcyzP = room.type != 'global';
this.setState('stihiUL', cndcyzP);
let cndueOO = !(cndcyzP);
this.setState('stlS7qU', cndueOO);
if (cndcyzP) { 
let el708xO = eo('span','tcnff'+iiUQeE);
text(room.maxMembers);
ec('span');
}else { 
let el8bqBJ = eo('i','6cqff'+iiUQeE,null,`class`,`${fas('infinity') + ' icon'}`);
ec('i');
}ec('div');
ec('td');
let elbs4IB = eo('td','jkRff'+iiUQeE,null,`class`,`v-middle`);
let cndJfHA = room.type == 'global';
this.setState('stCJe8F', cndJfHA);
if (cndJfHA) { 
let elGMfw0 = eo('i','9Q9ff'+iiUQeE,null,`title`,`${trans(`Global room`)}`,`class`,`${fas('globe-americas') + ' fa-2x blue-text icon'}`);
ec('i');
}let cnd3ycF = room.type == 'custom';
this.setState('stSIoFT', cnd3ycF);
if (cnd3ycF) { 
let elqu5PL = eo('i','gOMff'+iiUQeE,null,`title`,`${trans(`Custom room`)}`,`class`,`${fas('globe-asia') + ' fa-2x pink-text icon'}`);
ec('i');
}ec('td');
let elgRCHj = eo('td','BvWff'+iiUQeE,null,`title`,`${trans(`Requires`)}`,`class`,`text-center v-middle`);
let cndZXFE = room.acceptanceCost == 0;
this.setState('stSc7_7', cndZXFE);
let cndroti = !(cndZXFE);
this.setState('stpYsvR', cndroti);
if (cndZXFE) { 
let elbOPuU = eo('span','cTWff'+iiUQeE,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}else { 
let cmp7FOG = this._lc('cdULu6ifK', {parent:component,parentTop:layout,props:{coins:room.acceptanceCost},state:'stpYsvR',insideLoop:true,index:"" +iiUQeE});
}ec('td');
let elGQym1 = eo('td','OGWff'+iiUQeE,null,`class`,`text-center v-middle`);
let cndxGEu = component.user.isLoggedIn();
this.setState('stui7Ua', cndxGEu);
let cnd5efZ = !(cndxGEu);
this.setState('stp_6tr', cnd5efZ);
if (cndxGEu) { 
let cnd1Vv3 = ! component.userIsMemberOf(room) && ! component.userIsRequestingToJoin(room);
this.setState('st8qIRy', cnd1Vv3);
let cndcvw0 = component.userIsRequestingToJoin(room);
this.setState('stw0cYM', cndcvw0);
let cndi3ZD = !(cnd1Vv3||cndcvw0);
this.setState('stIZgd7', cndi3ZD);
if (cnd1Vv3) { 
let cndwDs5 = room.acceptanceCriteria && component.user.gold > room.acceptanceCost;
this.setState('stjh9bg', cndwDs5);
if (cndwDs5) { 
let elneKky = eo('i','SlYff'+iiUQeE,null,`title`,`${trans(`Has an acceptance criteria`)}`,`class`,`${fas('question-circle') + ' mr-2 fa-2x v-middle grey-text icon'}`);
ec('i');
}let ely0l_F = eo('button','Ie5ff'+iiUQeE,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingRoom(room, index)}]}, boolAttrs, {disabled:component.user.gold < room.acceptanceCost},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`Join`);
ec('button');
let cndkK3H = component.user.gold < room.acceptanceCost;
this.setState('stRs_Si', cndkK3H);
if (cndkK3H) { 
let elMeJAg = eo('div','86Yff'+iiUQeE,null,`class`,`bold red-text`);
text(`Insufficient
                                        gold!`);
ec('div');
}}else if (cndcvw0) { 
let elIaALl = eo('div','Y0dff'+iiUQeE,null,`class`,`bold orange-text`);
text(`Waiting for
                                    approval`);
ec('div');
}else { 
let elNg58z = eo('i','FeMff'+iiUQeE,null,`title`,`${trans(`Joined`)}`,`class`,`${fas('check') + ' fa-2x green-text icon'}`);
ec('i');
}}else { 
let elltufI = eo('a','PRNff'+iiUQeE,null,`href`,`/login`,`class`,`btn btn-sm btn-danger bold`);
let elk1kTZ = eo('i','52Tff'+iiUQeE,null,`title`,`${trans(`Login to join`)}`,`class`,`${fas('lock') + ' fa-1x mr-2 icon'}`);
ec('i');
text(`Login to join`);
ec('a');
}ec('td');
let cndj6XQ = component.userIsModeratorOf(room);
this.setState('stTBzBF', cndj6XQ);
if (cndj6XQ) { 
let elcnULf = eo('td','JAlff'+iiUQeE,null,`class`,`text-center`);
let cnd9fHu = room.requests.length > 0;
this.setState('strbd2A', cnd9fHu);
if (cnd9fHu) { 
let el_PchP = eo('span','v0pff'+iiUQeE,null,`class`,`can-unlock`);
text(`!`);
ec('span');
}let cndM7Vy = room.requests.length > 0;
this.setState('stqBK52', cndM7Vy);
if (cndM7Vy) { 
let el7nKv4 = ev('br','UfBff'+iiUQeE);
}let elBLLSL = eo('button','vYtff'+iiUQeE,null, eventListeners, {onclick:[function(e) {var $el = this;component.getRoomRequests(room, index)}]},`type`,`button`,`class`,`btn bold`);
elBLLSL.cls = {'btn-info': room.requests.length  == 0, 'btn-warning': room.requests.length > 0};

            for (let className in elBLLSL.cls) {
                elBLLSL.classList.toggle(className, elBLLSL.cls[className]);
            }  
            text(`Requests`);
let cndBEGF = room.requests.length > 0;
this.setState('stcoXkR', cndBEGF);
if (cndBEGF) { 
let elEEb7F = eo('span','sBoff'+iiUQeE,null,`class`,`ml-2`);
text('(' + room.requests.length + ')');
ec('span');
}ec('button');
ec('td');
}ec('tr');
}
ec('tbody');
ec('table');
ec('span');
}ec('div');
}}});
let cndPxCn = component.openChatRoom;
this.setState('stvxykS', cndPxCn);
if (cndPxCn) { 
let cmpmY4h = this._lc('cYuQTt6W8', {parent:component,events:{onclose:function(e) {let $el = this; component.openChatRoom = null},onsave:function(e) {let $el = this; component.chatRooms.push(e)}},state:'stvxykS'});
}let cndekIa = component.openRoomRequests;
this.setState('stiCDiT', cndekIa);
if (cndekIa) { 
let cmp8Bfd = this._lc('cc11XWLlp', {parent:component,events:{onclose:function(e) {let $el = this; component.openRoomRequests = false}},content:(flkModal) => {let cndnxdT = component.isLoadingRequests;
this.setState('stNzg_s', cndnxdT);
let cnd9w2e = !(cndnxdT);
this.setState('stZGbdA', cnd9w2e);
if (cndnxdT) { 
let cmpKI1H = this._lc('chPn10AxV', {parent:component,parentTop:flkModal,state:'stNzg_s'});
}else { 
let elqSVDl = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elxXLkL = eo('thead');
let eltKpvI = eo('tr');
let elhf8aR = eo('th');
text(`User`);
ec('th');
let elO8_UK = eo('th');
text(`acceptance Criteria Answer`);
ec('th');
let el0X1of = eo('th');
text(`Action`);
ec('th');
ec('tr');
for (let index in component.roomRequests) {
let roomRequest = component.roomRequests[index]; 
 let iix3fC = 'q1kMppE' + index;
let elMrC4q = eo('tr','cOTMUfu6MfPC' + index+iix3fC);
let eldNwxo = eo('td','oaiff'+iix3fC);
text(roomRequest.member.name);
ec('td');
let elovbi8 = eo('td','7IRff'+iix3fC);
let cndhPli = roomRequest.acceptanceCriteriaAnswer;
this.setState('stcrP8o', cndhPli);
let cndj0bG = !(cndhPli);
this.setState('stawBpA', cndj0bG);
if (cndhPli) { 
let elr4mpX = eo('button','Irbff'+iix3fC,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCurrentRequestAnswer = !!! component.openCurrentRequestAnswer; component.currentRequest = roomRequest}]},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`View`);
ec('button');
}else { 
let elxlVK2 = eo('strong','2Gkff'+iix3fC);
text(`N/a`);
ec('strong');
}ec('td');
let elCmpOg = eo('td','Kwrff'+iix3fC);
let elBfRfG = eo('button','AF0ff'+iix3fC,null, eventListeners, {onclick:[function(e) {var $el = this;component.approveRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`Approve`);
ec('button');
let elfYpT2 = eo('button','_Zqff'+iix3fC,null, eventListeners, {onclick:[function(e) {var $el = this;component.declineRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Decline`);
ec('button');
ec('td');
ec('tr');
}
let cndED5x = component.openCurrentRequestAnswer;
this.setState('stgRG7G', cndED5x);
if (cndED5x) { 
let ellbU1s = eo('tr','38lf');
let elPI3WU = eo('td','dT3f',null,`colspan`,`3`);
let cmpxpp8 = this._lc('cw7BQF8dN', {parent:component,parentTop:flkModal,props:{content:component.currentRequest.acceptanceCriteriaAnswer},state:'stgRG7G'});
ec('td');
ec('tr');
}ec('thead');
ec('table');
}},attrs:{header:`Room Requests (${ component.currentRoom.name })`},state:'stiCDiT'});
}let cndebET = component.openAcceptanceCriteriaModal;
this.setState('stIykMN', cndebET);
if (cndebET) { 
component.acceptanceModal = this._lc('c4tLbO8nJ', {parent:component,events:{onclose:function(e) {let $el = this; component.openAcceptanceCriteriaModal = false}},content:(flkModal) => {let ell2NtB = eo('h3',null,null,`class`,`bold m-b-2`);
text(`Please read the acceptance criteria and act accordingly.`);
ec('h3');
let cmpV2Hn = this._lc('cIkewPMI0', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.acceptanceCriteria},state:'stIykMN'});
let eltnl5s = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAcceptanceCriteria($el)}]});

                if (! eltnl5s.formHandler) {
                    window.cfrmdlr = eltnl5s.formHandler = new FormHandler(eltnl5s, component);
                } else {
                    window.cfrmdlr = eltnl5s.formHandler;
                }
            let elSfTMC = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eltnl5s.formHandler.addError(`acceptanceCriteriaAnswer`, 'required', trans('validation.required'));}return eltnl5s.formHandler.removeError(`acceptanceCriteriaAnswer`);}]},`name`,`${(`acceptanceCriteriaAnswer`).toInputName()}`,`placeholder`,`${trans(`Submit your answer (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteriaAnswer`);
ec('textarea');
let cndJiwj = eltnl5s.formHandler.getError(`acceptanceCriteriaAnswer`);
this.setState('stiY8f0', cndJiwj);
if (cndJiwj) { 
let elC832q = eo('div','zhUf',null,`class`,`alert alert-danger`);
text(eltnl5s.formHandler.getError(`acceptanceCriteriaAnswer`));
ec('div');
}let elZqCiV = eo('button',null,null,`class`,`btn btn-success bold m-t-1`);
text(`Submit`);
ec('button');
ec('form');
},attrs:{header:'Acceptance criteria'},state:'stIykMN'});
}let cndMUPc = component.confirmJoin;
this.setState('stg2Tn5', cndMUPc);
if (cndMUPc) { 
component.confirmingModal = this._lc('c3bUAfkDf', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmJoin = null; component.joiningRoom = null}},content:(flkModal) => {let elR5bKm = eo('h1',null,null,`class`,`m-b-1`);
text(`Please read carefully the rules below to avoid any unhappy actions.`);
ec('h1');
let cmp3SsQ = this._lc('cOc65Imvl', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.rules},state:'stg2Tn5'});
let el5KUpx = eo('div',null,null,`class`,`text-center m-t-1`,`id`,`confirming-btns`);
let elRTmm2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close(); component.joinRoom();}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`I Agree`);
ec('button');
let elu3Htd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close()}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Cancel`);
ec('button');
ec('div');
},attrs:{header:`${ component.joiningRoom.name } room rules`},state:'stg2Tn5'});
}
                    this.isReadyToGo();
                }
        });