_Component({
                selector: 'chat-rooms-page',
                c: 'ChatRoomsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','openChatRoom','chatRooms','userIsMemberOf','userIsRequestingToJoin','confirmingRoom','userIsModeratorOf','getRoomRequests','openRoomRequests','currentRoom','isLoadingRequests','roomRequests','openCurrentRequestAnswer','currentRequest','approveRequest','declineRequest','openAcceptanceCriteriaModal','joiningRoom','submitAcceptanceCriteria','confirmJoin','confirmingModal','joinRoom'],
                children: {cM6UV31NX:'flk-spinner',cDsH7PukF:'gold-icon',ctED0rWdy:'layout',cmV8IiVil:'chat-room-modal',c3wZn0vgm:'flk-spinner',cQBtZF8bY:'markdown',cuV_bv1Fb:'flk-modal',cQ6r8v9yd:'markdown',cOzjNIN_o:'flk-modal',chRQcAFYt:'markdown',cqLwH4rIb:'flk-modal'},
                render: function (component) {
                    let cmpERsX = this._lc('ctED0rWdy', {parent:component,content:(layout) => {let elNEJkY = eo('h1');
text(`Chat Rooms`);
ec('h1');
let cndyOxx = component.isLoading;
this.setState('stTJ4k0', cndyOxx);
let cndkCOP = !(cndyOxx);
this.setState('stywCDF', cndkCOP);
if (cndyOxx) { 
let cmpJwm1 = this._lc('cM6UV31NX', {parent:component,parentTop:layout,state:'stTJ4k0'});
}else { 
let elMjPxJ = eo('div');
let cndlBoN = component.user.id === 1;
this.setState('stuidXT', cndlBoN);
let cndMGus = !(cndlBoN);
this.setState('stQjZUS', cndMGus);
if (cndlBoN) { 
let elqU_84 = eo('button','0FSf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRoom = true}]},`class`,`btn btn-success bold btn-sm`);
let elM8Y4l = eo('i','sqlf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Room`);
ec('button');
}let cndAaf9 = Is.empty(component.chatRooms);
this.setState('stF6CSt', cndAaf9);
let cndjT3O = !(cndAaf9);
this.setState('st_WOaq', cndjT3O);
if (cndAaf9) { 
let el3K02g = eo('h1','NjAf',null,`class`,`text-center m-t-3`);
text(`No chat rooms at the moment.`);
ec('h1');
}else { 
let elvz0GU = eo('span');
let elTG_EL = eo('table',null,null,`class`,`table table-bordered`);
let elFhATa = eo('tbody');
for (let index in component.chatRooms) {
let room = component.chatRooms[index]; 
 let iiXe5V = 'LWScokp' + index;
let elHNkh1 = eo('tr','4MisFHDYK8iE' + index+iiXe5V,null,`class`,`room-row`);
let el3PKaI = eo('td','Zkqff'+iiXe5V);
let eliAWaf = ev('img','xzNff'+iiXe5V,null,`src`,`${room.image || FAVICON}`,`class`,`image`,`title`,`${room.name}`,`alt`,`${room.name}`);
let elgFtpB = eo('div','A9eff'+iiXe5V,null,`class`,`meta`);
let elVFgTY = eo('span','agKff'+iiXe5V,null,`class`,`name`);
text(room.name);
ec('span');
let elHyaiB = eo('p','pcOff'+iiXe5V,null,`class`,`description`);
text(room.description);
ec('p');
ec('div');
ec('td');
let elXqo1A = eo('td','lxgff'+iiXe5V,null,`class`,`text-center bold v-middle text-capitalize`);
let eloGkG1 = eo('div','Ljfff'+iiXe5V,null,`class`,`teal-text`);
text(room.category);
ec('div');
let elozgtZ = eo('div','wVhff'+iiXe5V,null,`title`,`${trans(`Speaking|writing Language`)}`);
let el2RwHs = eo('i','f7gff'+iiXe5V,null,`class`,`${fas('comments') + ' mr-2 v-middle grey-text icon'}`);
ec('i');
let elqqAjE = eo('small','fmvff'+iiXe5V,null,`class`,`bold pink-text`);
text(room.language == 'all' ? 'All languages' : room.language);
ec('small');
ec('div');
ec('td');
let el2Q7Oa = eo('td','Kteff'+iiXe5V,null,`class`,`text-center v-middle`);
let elzibV7 = eo('i','Eqgff'+iiXe5V,null,`class`,`${fas('users') + ' fa-2x icon'}`);
ec('i');
let elHLGG4 = eo('div','014ff'+iiXe5V,null,`class`,`members bold`);
let elaJiYZ = eo('span','GXnff'+iiXe5V);
text(room.members.length.format());
ec('span');
text(`/`);
let cndLl4Y = room.type != 'global';
this.setState('st3Umql', cndLl4Y);
let cndKLwM = !(cndLl4Y);
this.setState('steSnr9', cndKLwM);
if (cndLl4Y) { 
let el1LmfX = eo('span','DHIff'+iiXe5V);
text(room.maxMembers);
ec('span');
}else { 
let elAXC55 = eo('i','hmOff'+iiXe5V,null,`class`,`${fas('infinity') + ' icon'}`);
ec('i');
}ec('div');
ec('td');
let elQTAg0 = eo('td','Qxfff'+iiXe5V,null,`class`,`v-middle`);
let cndWGeA = room.type == 'global';
this.setState('stplZBh', cndWGeA);
if (cndWGeA) { 
let elarkRH = eo('i','gDGff'+iiXe5V,null,`title`,`${trans(`Global room`)}`,`class`,`${fas('globe-americas') + ' fa-2x blue-text icon'}`);
ec('i');
}let cndAlUY = room.type == 'custom';
this.setState('stiW9G0', cndAlUY);
if (cndAlUY) { 
let el4GId0 = eo('i','YpXff'+iiXe5V,null,`title`,`${trans(`Custom room`)}`,`class`,`${fas('globe-asia') + ' fa-2x pink-text icon'}`);
ec('i');
}ec('td');
let elQ2jCE = eo('td','70Rff'+iiXe5V,null,`title`,`${trans(`Requires`)}`,`class`,`text-center v-middle`);
let cndSym8 = room.acceptanceCost == 0;
this.setState('stnyZWY', cndSym8);
let cndNbLY = !(cndSym8);
this.setState('stNaGZb', cndNbLY);
if (cndSym8) { 
let elqg1Vd = eo('span','1L7ff'+iiXe5V,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}else { 
let cmpMjIT = this._lc('cDsH7PukF', {parent:component,parentTop:layout,props:{coins:room.acceptanceCost},state:'stNaGZb',insideLoop:true,index:"" +iiXe5V});
}ec('td');
let eljMsg1 = eo('td','vMcff'+iiXe5V,null,`class`,`text-center v-middle`);
let cnd_cmB = component.user.isLoggedIn();
this.setState('stJUdzJ', cnd_cmB);
let cnd4HrT = !(cnd_cmB);
this.setState('striCUg', cnd4HrT);
if (cnd_cmB) { 
let cndGve5 = ! component.userIsMemberOf(room) && ! component.userIsRequestingToJoin(room);
this.setState('stxDynI', cndGve5);
let cndkBYV = component.userIsRequestingToJoin(room);
this.setState('stm2SQR', cndkBYV);
let cnd4jdi = !(cndGve5||cndkBYV);
this.setState('stgsvrf', cnd4jdi);
if (cndGve5) { 
let cndX1ro = room.acceptanceCriteria && component.user.gold > room.acceptanceCost;
this.setState('st5yhbe', cndX1ro);
if (cndX1ro) { 
let el9T7_W = eo('i','1dHff'+iiXe5V,null,`title`,`${trans(`Has an acceptance criteria`)}`,`class`,`${fas('question-circle') + ' mr-2 fa-2x v-middle grey-text icon'}`);
ec('i');
}let elqRVQp = eo('button','DbRff'+iiXe5V,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingRoom(room, index)}]}, boolAttrs, {disabled:component.user.gold < room.acceptanceCost},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`Join`);
ec('button');
let cndmMgv = component.user.gold < room.acceptanceCost;
this.setState('st74Gx3', cndmMgv);
if (cndmMgv) { 
let elTG_Uq = eo('div','uKcff'+iiXe5V,null,`class`,`bold red-text`);
text(`Insufficient
                                        gold!`);
ec('div');
}}else if (cndkBYV) { 
let elW8GEJ = eo('div','q2qff'+iiXe5V,null,`class`,`bold orange-text`);
text(`Waiting for
                                    approval`);
ec('div');
}else { 
let elswW2Z = eo('i','2GKff'+iiXe5V,null,`title`,`${trans(`Joined`)}`,`class`,`${fas('check') + ' fa-2x green-text icon'}`);
ec('i');
}}else { 
let elkCh2N = eo('a','JULff'+iiXe5V,null,`href`,`/login`,`class`,`btn btn-sm btn-danger bold`);
let elRQjBV = eo('i','5G9ff'+iiXe5V,null,`title`,`${trans(`Login to join`)}`,`class`,`${fas('lock') + ' fa-1x mr-2 icon'}`);
ec('i');
text(`Login to join`);
ec('a');
}ec('td');
let cndomXr = component.userIsModeratorOf(room);
this.setState('stBZ0tS', cndomXr);
if (cndomXr) { 
let elWRZjC = eo('td','UEPff'+iiXe5V,null,`class`,`text-center`);
let cndrrgY = room.requests.length > 0;
this.setState('strM3H6', cndrrgY);
if (cndrrgY) { 
let elRfKQc = eo('span','K1sff'+iiXe5V,null,`class`,`can-unlock`);
text(`!`);
ec('span');
}let cndyWjx = room.requests.length > 0;
this.setState('stffkIv', cndyWjx);
if (cndyWjx) { 
let el2_bMG = ev('br','PMrff'+iiXe5V);
}let el771ih = eo('button','Yaeff'+iiXe5V,null, eventListeners, {onclick:[function(e) {var $el = this;component.getRoomRequests(room, index)}]},`type`,`button`,`class`,`btn bold`);
el771ih.cls = {'btn-info': room.requests.length  == 0, 'btn-warning': room.requests.length > 0};

            for (let className in el771ih.cls) {
                el771ih.classList.toggle(className, el771ih.cls[className]);
            }  
            text(`Requests`);
let cndfTjx = room.requests.length > 0;
this.setState('st8QdqT', cndfTjx);
if (cndfTjx) { 
let elcAmLY = eo('span','zNzff'+iiXe5V,null,`class`,`ml-2`);
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
let cndAi7S = component.openChatRoom;
this.setState('stUqVmm', cndAi7S);
if (cndAi7S) { 
let cmpyWuV = this._lc('cmV8IiVil', {parent:component,events:{onclose:function(e) {let $el = this; component.openChatRoom = null},onsave:function(e) {let $el = this; component.chatRooms.push(e)}},state:'stUqVmm'});
}let cndDVv2 = component.openRoomRequests;
this.setState('stQBbje', cndDVv2);
if (cndDVv2) { 
let cmpHIfX = this._lc('cuV_bv1Fb', {parent:component,events:{onclose:function(e) {let $el = this; component.openRoomRequests = false}},content:(flkModal) => {let cnd5nY0 = component.isLoadingRequests;
this.setState('st_CFCD', cnd5nY0);
let cnduysn = !(cnd5nY0);
this.setState('stVEdMg', cnduysn);
if (cnd5nY0) { 
let cmpr5S_ = this._lc('c3wZn0vgm', {parent:component,parentTop:flkModal,state:'st_CFCD'});
}else { 
let eljR_lU = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let el7ldcJ = eo('thead');
let elMOzwC = eo('tr');
let elHruq0 = eo('th');
text(`User`);
ec('th');
let eljXgER = eo('th');
text(`acceptance Criteria Answer`);
ec('th');
let elYfrjY = eo('th');
text(`Action`);
ec('th');
ec('tr');
for (let index in component.roomRequests) {
let roomRequest = component.roomRequests[index]; 
 let ii_mUq = 'ad_sWGs' + index;
let eljsIDV = eo('tr','uEUMf8fCYiYM' + index+ii_mUq);
let elT2JUD = eo('td','741ff'+ii_mUq);
text(roomRequest.member.name);
ec('td');
let el2rQcD = eo('td','frYff'+ii_mUq);
let cndpnu4 = roomRequest.acceptanceCriteriaAnswer;
this.setState('st7SzYH', cndpnu4);
let cndiThW = !(cndpnu4);
this.setState('strf6HV', cndiThW);
if (cndpnu4) { 
let el9g9ji = eo('button','dViff'+ii_mUq,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCurrentRequestAnswer = !!! component.openCurrentRequestAnswer; component.currentRequest = roomRequest}]},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`View`);
ec('button');
}else { 
let elJIpwV = eo('strong','zTlff'+ii_mUq);
text(`N/a`);
ec('strong');
}ec('td');
let elC5Knd = eo('td','gduff'+ii_mUq);
let elMyeUA = eo('button','VMuff'+ii_mUq,null, eventListeners, {onclick:[function(e) {var $el = this;component.approveRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`Approve`);
ec('button');
let elvSyDg = eo('button','p67ff'+ii_mUq,null, eventListeners, {onclick:[function(e) {var $el = this;component.declineRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Decline`);
ec('button');
ec('td');
ec('tr');
}
let cnd_5Uh = component.openCurrentRequestAnswer;
this.setState('st8dWsz', cnd_5Uh);
if (cnd_5Uh) { 
let elYV_9x = eo('tr','T9Of');
let elzz_kq = eo('td','nLZf',null,`colspan`,`3`);
let cmpaFX1 = this._lc('cQBtZF8bY', {parent:component,parentTop:flkModal,props:{content:component.currentRequest.acceptanceCriteriaAnswer},state:'st8dWsz'});
ec('td');
ec('tr');
}ec('thead');
ec('table');
}},attrs:{header:`Room Requests (${ component.currentRoom.name })`},state:'stQBbje'});
}let cndYCYz = component.openAcceptanceCriteriaModal;
this.setState('st01lGT', cndYCYz);
if (cndYCYz) { 
component.acceptanceModal = this._lc('cOzjNIN_o', {parent:component,events:{onclose:function(e) {let $el = this; component.openAcceptanceCriteriaModal = false}},content:(flkModal) => {let elPWhsK = eo('h3',null,null,`class`,`bold m-b-2`);
text(`Please read the acceptance criteria and act accordingly.`);
ec('h3');
let cmpE_Ia = this._lc('cQ6r8v9yd', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.acceptanceCriteria},state:'st01lGT'});
let elLnKAl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAcceptanceCriteria($el)}]});

                if (! elLnKAl.formHandler) {
                    window.cfrmdlr = elLnKAl.formHandler = new FormHandler(elLnKAl, component);
                } else {
                    window.cfrmdlr = elLnKAl.formHandler;
                }
            let elTh8jr = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elLnKAl.formHandler.addError(`acceptanceCriteriaAnswer`, 'required', trans('validation.required'));}return elLnKAl.formHandler.removeError(`acceptanceCriteriaAnswer`);}]},`name`,`${(`acceptanceCriteriaAnswer`).toInputName()}`,`placeholder`,`${trans(`Submit your answer (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteriaAnswer`);
ec('textarea');
let cndq7aG = elLnKAl.formHandler.getError(`acceptanceCriteriaAnswer`);
this.setState('stHBTfE', cndq7aG);
if (cndq7aG) { 
let el35H9F = eo('div','yvrf',null,`class`,`alert alert-danger`);
text(elLnKAl.formHandler.getError(`acceptanceCriteriaAnswer`));
ec('div');
}let elTVDIn = eo('button',null,null,`class`,`btn btn-success bold m-t-1`);
text(`Submit`);
ec('button');
ec('form');
},attrs:{header:'Acceptance criteria'},state:'st01lGT'});
}let cndpcf7 = component.confirmJoin;
this.setState('std6GBJ', cndpcf7);
if (cndpcf7) { 
component.confirmingModal = this._lc('cqLwH4rIb', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmJoin = null; component.joiningRoom = null}},content:(flkModal) => {let elU5Nl3 = eo('h1',null,null,`class`,`m-b-1`);
text(`Please read carefully the rules below to avoid any unhappy actions.`);
ec('h1');
let cmps4jR = this._lc('chRQcAFYt', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.rules},state:'std6GBJ'});
let elPBxb0 = eo('div',null,null,`class`,`text-center m-t-1`,`id`,`confirming-btns`);
let elpTjw1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close(); component.joinRoom();}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`I Agree`);
ec('button');
let el0r9eP = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close()}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Cancel`);
ec('button');
ec('div');
},attrs:{header:`${ component.joiningRoom.name } room rules`},state:'std6GBJ'});
}
                    this.isReadyToGo();
                }
        });