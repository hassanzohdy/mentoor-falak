_Component({
                selector: 'chat-rooms-page',
                c: 'ChatRoomsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','openChatRoom','chatRooms','userIsMemberOf','userIsRequestingToJoin','confirmingRoom','userIsModeratorOf','getRoomRequests','openRoomRequests','currentRoom','isLoadingRequests','roomRequests','openCurrentRequestAnswer','currentRequest','approveRequest','declineRequest','openAcceptanceCriteriaModal','joiningRoom','submitAcceptanceCriteria','confirmJoin','confirmingModal','joinRoom'],
                children: {cjg2xiObc:'flk-spinner',cq8kURk6L:'gold-icon',cYUNX8ecM:'layout',cXdZ7UJI3:'chat-room-modal',cKCNgH_vA:'flk-spinner',cyXBez93C:'markdown',cjhbjS9rA:'flk-modal',cqUGbqm0x:'markdown',c6F51WsNp:'flk-modal',cGuUgln9Z:'markdown',cijTe3da0:'flk-modal'},
                render: function (component) {
                    let cmpMxRQ = this._lc('cYUNX8ecM', {parent:component,content:(layout) => {let elPA_gm = eo('h1');
text(`Chat Rooms`);
ec('h1');
let cndjfvn = component.isLoading;
this.setState('stGMDjd', cndjfvn);
let cndvtp1 = !(cndjfvn);
this.setState('sttUoBx', cndvtp1);
if (cndjfvn) { 
let cmp9WMf = this._lc('cjg2xiObc', {parent:component,parentTop:layout,state:'stGMDjd'});
}else { 
let elxPNs1 = eo('div');
let cndWqFw = component.user.id === 1;
this.setState('st2bV1x', cndWqFw);
let cndOxKQ = !(cndWqFw);
this.setState('stABJIC', cndOxKQ);
if (cndWqFw) { 
let elS249S = eo('button','PGKf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRoom = true}]},`class`,`btn btn-success bold btn-sm`);
let elCHi_h = eo('i','h0Jf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Room`);
ec('button');
}let cndfEBx = Is.empty(component.chatRooms);
this.setState('st9c7KS', cndfEBx);
let cndk0cQ = !(cndfEBx);
this.setState('stEEcai', cndk0cQ);
if (cndfEBx) { 
let elGY6gC = eo('h1','fz_f',null,`class`,`text-center m-t-3`);
text(`No chat rooms at the moment.`);
ec('h1');
}else { 
let elaUJzg = eo('span');
let elDAO6I = eo('table',null,null,`class`,`table table-bordered`);
let elEhb5k = eo('tbody');
for (let index in component.chatRooms) {
let room = component.chatRooms[index]; 
 let iiM_aF = '52LjvJQ' + index;
let elAiZN3 = eo('tr','tDqlHWG5qPDN' + index+iiM_aF,null,`class`,`room-row`);
let elcjAmb = eo('td','SqUff'+iiM_aF);
let elFb24Y = ev('img','deQff'+iiM_aF,null,`src`,`${room.image || FAVICON}`,`class`,`image`,`title`,`${room.name}`,`alt`,`${room.name}`);
let elD83aR = eo('div','hfCff'+iiM_aF,null,`class`,`meta`);
let elHECvi = eo('span','8Nvff'+iiM_aF,null,`class`,`name`);
text(room.name);
ec('span');
let eljJA1d = eo('p','tI8ff'+iiM_aF,null,`class`,`description`);
text(room.description);
ec('p');
ec('div');
ec('td');
let el3dFBU = eo('td','pQnff'+iiM_aF,null,`class`,`text-center bold v-middle text-capitalize`);
let elRj14G = eo('div','FInff'+iiM_aF,null,`class`,`teal-text`);
text(room.category);
ec('div');
let ellgBTK = eo('div','TkCff'+iiM_aF,null,`title`,`${trans(`Speaking|writing Language`)}`);
let elkB85t = eo('i','hNNff'+iiM_aF,null,`class`,`${fas('comments') + ' mr-2 v-middle grey-text icon'}`);
ec('i');
let elxQ1tC = eo('small','EtLff'+iiM_aF,null,`class`,`bold pink-text`);
text(room.language == 'all' ? 'All languages' : room.language);
ec('small');
ec('div');
ec('td');
let el4pruG = eo('td','VONff'+iiM_aF,null,`class`,`text-center v-middle`);
let elA3snV = eo('i','Iaaff'+iiM_aF,null,`class`,`${fas('users') + ' fa-2x icon'}`);
ec('i');
let elI1wwt = eo('div','I7Eff'+iiM_aF,null,`class`,`members bold`);
let elQv9LF = eo('span','2V0ff'+iiM_aF);
text(room.members.length.format());
ec('span');
text(`/`);
let cndHSR6 = room.type != 'global';
this.setState('st21LLr', cndHSR6);
let cndxzuH = !(cndHSR6);
this.setState('stDyZmX', cndxzuH);
if (cndHSR6) { 
let elZxRj5 = eo('span','BHRff'+iiM_aF);
text(room.maxMembers);
ec('span');
}else { 
let el9n3vq = eo('i','Bj_ff'+iiM_aF,null,`class`,`${fas('infinity') + ' icon'}`);
ec('i');
}ec('div');
ec('td');
let el4w8jW = eo('td','vkXff'+iiM_aF,null,`class`,`v-middle`);
let cnded9c = room.type == 'global';
this.setState('stNh1P5', cnded9c);
if (cnded9c) { 
let elEZUgA = eo('i','4Ncff'+iiM_aF,null,`title`,`${trans(`Global room`)}`,`class`,`${fas('globe-americas') + ' fa-2x blue-text icon'}`);
ec('i');
}let cnde4np = room.type == 'custom';
this.setState('stRBjnJ', cnde4np);
if (cnde4np) { 
let ellOBFa = eo('i','SIQff'+iiM_aF,null,`title`,`${trans(`Custom room`)}`,`class`,`${fas('globe-asia') + ' fa-2x pink-text icon'}`);
ec('i');
}ec('td');
let elYlSfb = eo('td','WF3ff'+iiM_aF,null,`title`,`${trans(`Requires`)}`,`class`,`text-center v-middle`);
let cndSEan = room.acceptanceCost == 0;
this.setState('stUMC_v', cndSEan);
let cnddwWS = !(cndSEan);
this.setState('str91cu', cnddwWS);
if (cndSEan) { 
let elMjcA1 = eo('span','EiPff'+iiM_aF,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}else { 
let cmpGBaw = this._lc('cq8kURk6L', {parent:component,parentTop:layout,props:{coins:room.acceptanceCost},state:'str91cu',insideLoop:true,index:"" +iiM_aF});
}ec('td');
let elXZa77 = eo('td','Q5Off'+iiM_aF,null,`class`,`text-center v-middle`);
let cndkE4l = component.user.isLoggedIn();
this.setState('sttUKqQ', cndkE4l);
let cndU64D = !(cndkE4l);
this.setState('stv_Ya9', cndU64D);
if (cndkE4l) { 
let cnd6yqe = ! component.userIsMemberOf(room) && ! component.userIsRequestingToJoin(room);
this.setState('stJJuCg', cnd6yqe);
let cnd8F2W = component.userIsRequestingToJoin(room);
this.setState('stVGzbw', cnd8F2W);
let cnd8u60 = !(cnd6yqe||cnd8F2W);
this.setState('sticRf0', cnd8u60);
if (cnd6yqe) { 
let cndJ4f_ = room.acceptanceCriteria && component.user.gold > room.acceptanceCost;
this.setState('st2hBQv', cndJ4f_);
if (cndJ4f_) { 
let el7WZHi = eo('i','o8dff'+iiM_aF,null,`title`,`${trans(`Has an acceptance criteria`)}`,`class`,`${fas('question-circle') + ' mr-2 fa-2x v-middle grey-text icon'}`);
ec('i');
}let elBEVdO = eo('button','_ZNff'+iiM_aF,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingRoom(room, index)}]}, boolAttrs, {disabled:component.user.gold < room.acceptanceCost},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`Join`);
ec('button');
let cnd4qaV = component.user.gold < room.acceptanceCost;
this.setState('stAt9Es', cnd4qaV);
if (cnd4qaV) { 
let el6LwE1 = eo('div','nAwff'+iiM_aF,null,`class`,`bold red-text`);
text(`Insufficient
                                        gold!`);
ec('div');
}}else if (cnd8F2W) { 
let elXwmSy = eo('div','Ajhff'+iiM_aF,null,`class`,`bold orange-text`);
text(`Waiting for
                                    approval`);
ec('div');
}else { 
let elwxs4S = eo('i','q5hff'+iiM_aF,null,`title`,`${trans(`Joined`)}`,`class`,`${fas('check') + ' fa-2x green-text icon'}`);
ec('i');
}}else { 
let elWmp2d = eo('a','HQaff'+iiM_aF,null,`href`,`/login`,`class`,`btn btn-sm btn-danger bold`);
let elZDOVN = eo('i','OUaff'+iiM_aF,null,`title`,`${trans(`Login to join`)}`,`class`,`${fas('lock') + ' fa-1x mr-2 icon'}`);
ec('i');
text(`Login to join`);
ec('a');
}ec('td');
let cnd3bWV = component.userIsModeratorOf(room);
this.setState('stDyvGJ', cnd3bWV);
if (cnd3bWV) { 
let elLBPEl = eo('td','5xRff'+iiM_aF,null,`class`,`text-center`);
let cndtZqe = room.requests.length > 0;
this.setState('stgHZv9', cndtZqe);
if (cndtZqe) { 
let elduV7f = eo('span','QXAff'+iiM_aF,null,`class`,`can-unlock`);
text(`!`);
ec('span');
}let cndHEN5 = room.requests.length > 0;
this.setState('stMUlTt', cndHEN5);
if (cndHEN5) { 
let el_Pzno = ev('br','An0ff'+iiM_aF);
}let elXpb7Z = eo('button','ww7ff'+iiM_aF,null, eventListeners, {onclick:[function(e) {var $el = this;component.getRoomRequests(room, index)}]},`type`,`button`,`class`,`btn bold`);
elXpb7Z.cls = {'btn-info': room.requests.length  == 0, 'btn-warning': room.requests.length > 0};

            for (let className in elXpb7Z.cls) {
                elXpb7Z.classList.toggle(className, elXpb7Z.cls[className]);
            }  
            text(`Requests`);
let cndgXaD = room.requests.length > 0;
this.setState('stEvixD', cndgXaD);
if (cndgXaD) { 
let elXsdBJ = eo('span','E5tff'+iiM_aF,null,`class`,`ml-2`);
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
let cndZGrm = component.openChatRoom;
this.setState('stXaj89', cndZGrm);
if (cndZGrm) { 
let cmphQ5w = this._lc('cXdZ7UJI3', {parent:component,events:{onclose:function(e) {let $el = this; component.openChatRoom = null},onsave:function(e) {let $el = this; component.chatRooms.push(e)}},state:'stXaj89'});
}let cndP_HK = component.openRoomRequests;
this.setState('stDC_Wj', cndP_HK);
if (cndP_HK) { 
let cmpTEGb = this._lc('cjhbjS9rA', {parent:component,events:{onclose:function(e) {let $el = this; component.openRoomRequests = false}},content:(flkModal) => {let cndluQJ = component.isLoadingRequests;
this.setState('stY6Kez', cndluQJ);
let cnd1tux = !(cndluQJ);
this.setState('stkEHJ7', cnd1tux);
if (cndluQJ) { 
let cmpksaW = this._lc('cKCNgH_vA', {parent:component,parentTop:flkModal,state:'stY6Kez'});
}else { 
let ell0qfT = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elU4WIf = eo('thead');
let elrrMro = eo('tr');
let elDyKM0 = eo('th');
text(`User`);
ec('th');
let elZb5l0 = eo('th');
text(`acceptance Criteria Answer`);
ec('th');
let el3WnBz = eo('th');
text(`Action`);
ec('th');
ec('tr');
for (let index in component.roomRequests) {
let roomRequest = component.roomRequests[index]; 
 let iiVZUU = 'fqRweAt' + index;
let elAb1Ls = eo('tr','nnOUtSQW1HcM' + index+iiVZUU);
let ell3Uq9 = eo('td','fWiff'+iiVZUU);
text(roomRequest.member.name);
ec('td');
let elAP05r = eo('td','OAZff'+iiVZUU);
let cnd_ppK = roomRequest.acceptanceCriteriaAnswer;
this.setState('stjezXY', cnd_ppK);
let cndHATF = !(cnd_ppK);
this.setState('stYSwdZ', cndHATF);
if (cnd_ppK) { 
let elwjYHv = eo('button','zGmff'+iiVZUU,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCurrentRequestAnswer = !!! component.openCurrentRequestAnswer; component.currentRequest = roomRequest}]},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`View`);
ec('button');
}else { 
let el6lzKb = eo('strong','jzHff'+iiVZUU);
text(`N/a`);
ec('strong');
}ec('td');
let elDup3C = eo('td','xiOff'+iiVZUU);
let elVGQ9V = eo('button','pvWff'+iiVZUU,null, eventListeners, {onclick:[function(e) {var $el = this;component.approveRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`Approve`);
ec('button');
let elO_Uwj = eo('button','vRuff'+iiVZUU,null, eventListeners, {onclick:[function(e) {var $el = this;component.declineRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Decline`);
ec('button');
ec('td');
ec('tr');
}
let cndcvDf = component.openCurrentRequestAnswer;
this.setState('stjk44K', cndcvDf);
if (cndcvDf) { 
let elcb4Fo = eo('tr','2nuf');
let elAqCRm = eo('td','Kacf',null,`colspan`,`3`);
let cmp6SQu = this._lc('cyXBez93C', {parent:component,parentTop:flkModal,props:{content:component.currentRequest.acceptanceCriteriaAnswer},state:'stjk44K'});
ec('td');
ec('tr');
}ec('thead');
ec('table');
}},attrs:{header:`Room Requests (${ component.currentRoom.name })`},state:'stDC_Wj'});
}let cndHXCL = component.openAcceptanceCriteriaModal;
this.setState('st8gwnZ', cndHXCL);
if (cndHXCL) { 
component.acceptanceModal = this._lc('c6F51WsNp', {parent:component,events:{onclose:function(e) {let $el = this; component.openAcceptanceCriteriaModal = false}},content:(flkModal) => {let elJf5zr = eo('h3',null,null,`class`,`bold m-b-2`);
text(`Please read the acceptance criteria and act accordingly.`);
ec('h3');
let cmp54Fr = this._lc('cqUGbqm0x', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.acceptanceCriteria},state:'st8gwnZ'});
let ellrkEf = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAcceptanceCriteria($el)}]});

                if (! ellrkEf.formHandler) {
                    window.cfrmdlr = ellrkEf.formHandler = new FormHandler(ellrkEf, component);
                } else {
                    window.cfrmdlr = ellrkEf.formHandler;
                }
            let elGcZ4E = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return ellrkEf.formHandler.addError(`acceptanceCriteriaAnswer`, 'required', trans('validation.required'));}return ellrkEf.formHandler.removeError(`acceptanceCriteriaAnswer`);}]},`name`,`${(`acceptanceCriteriaAnswer`).toInputName()}`,`placeholder`,`${trans(`Submit your answer (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteriaAnswer`);
ec('textarea');
let cndyeDV = ellrkEf.formHandler.getError(`acceptanceCriteriaAnswer`);
this.setState('stgXJOl', cndyeDV);
if (cndyeDV) { 
let el409Jp = eo('div','tAIf',null,`class`,`alert alert-danger`);
text(ellrkEf.formHandler.getError(`acceptanceCriteriaAnswer`));
ec('div');
}let elyq5j9 = eo('button',null,null,`class`,`btn btn-success bold m-t-1`);
text(`Submit`);
ec('button');
ec('form');
},attrs:{header:'Acceptance criteria'},state:'st8gwnZ'});
}let cnd_9hc = component.confirmJoin;
this.setState('stRDUfz', cnd_9hc);
if (cnd_9hc) { 
component.confirmingModal = this._lc('cijTe3da0', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmJoin = null; component.joiningRoom = null}},content:(flkModal) => {let elBHcWY = eo('h1',null,null,`class`,`m-b-1`);
text(`Please read carefully the rules below to avoid any unhappy actions.`);
ec('h1');
let cmpx60L = this._lc('cGuUgln9Z', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.rules},state:'stRDUfz'});
let eliVOvK = eo('div',null,null,`class`,`text-center m-t-1`,`id`,`confirming-btns`);
let elZ9Q8x = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close(); component.joinRoom();}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`I Agree`);
ec('button');
let eltz1B_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close()}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Cancel`);
ec('button');
ec('div');
},attrs:{header:`${ component.joiningRoom.name } room rules`},state:'stRDUfz'});
}
                    this.isReadyToGo();
                }
        });