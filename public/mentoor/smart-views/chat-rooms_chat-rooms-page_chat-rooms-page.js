_Component({
                selector: 'chat-rooms-page',
                c: 'ChatRoomsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','user','openChatRoom','chatRooms','userIsMemberOf','userIsRequestingToJoin','confirmingRoom','userIsModeratorOf','getRoomRequests','openRoomRequests','currentRoom','isLoadingRequests','roomRequests','openCurrentRequestAnswer','currentRequest','approveRequest','declineRequest','openAcceptanceCriteriaModal','joiningRoom','submitAcceptanceCriteria','confirmJoin','confirmingModal','joinRoom'],
                children: {cl3IliPfl:'flk-spinner',cxKlmzjhG:'gold-icon',cgtQZP8El:'layout',cDLR8_GyR:'chat-room-modal',chZaG9t9s:'flk-spinner',cOlqLg2kv:'markdown',cO3DKDp9B:'flk-modal',cKnpzozjo:'markdown',cAMwC307W:'flk-modal',czjmbgDMI:'markdown',cnWq3LzqL:'flk-modal'},
                render: function (component) {
                    let cmpkKsg = this._lc('cgtQZP8El', {parent:component,content:(layout) => {let elnQzjJ = eo('h1');
text(`Chat Rooms`);
ec('h1');
let cndbKoy = component.isLoading;
this.setState('stT7_Gw', cndbKoy);
let cndVjrX = !(cndbKoy);
this.setState('stNh1GT', cndVjrX);
if (cndbKoy) { 
let cmpk2ru = this._lc('cl3IliPfl', {parent:component,parentTop:layout,state:'stT7_Gw'});
}else { 
let elsJ7oX = eo('div');
let cnd3Bor = component.user.id === 1;
this.setState('styvKVz', cnd3Bor);
let cndaswY = !(cnd3Bor);
this.setState('styggrU', cndaswY);
if (cnd3Bor) { 
let elObe4J = eo('button','8_wf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openChatRoom = true}]},`class`,`btn btn-success bold btn-sm`);
let elxJIZ9 = eo('i','7tFf',null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Room`);
ec('button');
}let cndoDRf = Is.empty(component.chatRooms);
this.setState('st49ikP', cndoDRf);
let cndeO9d = !(cndoDRf);
this.setState('stdrMAI', cndeO9d);
if (cndoDRf) { 
let elhhg8u = eo('h1','SWDf',null,`class`,`text-center m-t-3`);
text(`No chat rooms at the moment.`);
ec('h1');
}else { 
let elPJWRf = eo('span');
let elA0GkM = eo('table',null,null,`class`,`table table-bordered`);
let elwv_0j = eo('tbody');
for (let index in component.chatRooms) {
let room = component.chatRooms[index]; 
 let iiFIwm = 'fkM_3Eg' + index;
let elEZ4Hf = eo('tr','Ff_NvIJASZ2K' + index+iiFIwm,null,`class`,`room-row`);
let elYG2my = eo('td','VUcff'+iiFIwm);
let elmraEU = ev('img','YcRff'+iiFIwm,null,`src`,`${room.image || FAVICON}`,`class`,`image`,`title`,`${room.name}`,`alt`,`${room.name}`);
let elkEFYg = eo('div','Zcfff'+iiFIwm,null,`class`,`meta`);
let elOqjnZ = eo('span','LBZff'+iiFIwm,null,`class`,`name`);
text(room.name);
ec('span');
let elHhICV = eo('p','T_1ff'+iiFIwm,null,`class`,`description`);
text(room.description);
ec('p');
ec('div');
ec('td');
let el3UX5Y = eo('td','JS4ff'+iiFIwm,null,`class`,`text-center bold v-middle text-capitalize`);
let elK3Vzx = eo('div','5yYff'+iiFIwm,null,`class`,`teal-text`);
text(room.category);
ec('div');
let el3eP0r = eo('div','S2hff'+iiFIwm,null,`title`,`${trans(`Speaking|writing Language`)}`);
let elXBRxY = eo('i','s4Aff'+iiFIwm,null,`class`,`${fas('comments') + ' mr-2 v-middle grey-text icon'}`);
ec('i');
let elBzrvt = eo('small','Mktff'+iiFIwm,null,`class`,`bold pink-text`);
text(room.language == 'all' ? 'All languages' : room.language);
ec('small');
ec('div');
ec('td');
let elMcTTr = eo('td','OCxff'+iiFIwm,null,`class`,`text-center v-middle`);
let elTDCXQ = eo('i','tqbff'+iiFIwm,null,`class`,`${fas('users') + ' fa-2x icon'}`);
ec('i');
let el3qeNw = eo('div','cEIff'+iiFIwm,null,`class`,`members bold`);
let elLF784 = eo('span','BCnff'+iiFIwm);
text(room.members.length.format());
ec('span');
text(`/`);
let cndreuq = room.type != 'global';
this.setState('sta95kb', cndreuq);
let cndI_5g = !(cndreuq);
this.setState('stZwIog', cndI_5g);
if (cndreuq) { 
let eleCypF = eo('span','6v3ff'+iiFIwm);
text(room.maxMembers);
ec('span');
}else { 
let el0mypo = eo('i','4Vfff'+iiFIwm,null,`class`,`${fas('infinity') + ' icon'}`);
ec('i');
}ec('div');
ec('td');
let el3hSyM = eo('td','M9Sff'+iiFIwm,null,`class`,`v-middle`);
let cndkEHN = room.type == 'global';
this.setState('stUX6Gb', cndkEHN);
if (cndkEHN) { 
let el2xt_C = eo('i','ndWff'+iiFIwm,null,`title`,`${trans(`Global room`)}`,`class`,`${fas('globe-americas') + ' fa-2x blue-text icon'}`);
ec('i');
}let cnd0OnR = room.type == 'custom';
this.setState('stxBTjO', cnd0OnR);
if (cnd0OnR) { 
let el2vof1 = eo('i','yx1ff'+iiFIwm,null,`title`,`${trans(`Custom room`)}`,`class`,`${fas('globe-asia') + ' fa-2x pink-text icon'}`);
ec('i');
}ec('td');
let elKd80_ = eo('td','fs1ff'+iiFIwm,null,`title`,`${trans(`Requires`)}`,`class`,`text-center v-middle`);
let cndjXr_ = room.acceptanceCost == 0;
this.setState('sthHjhI', cndjXr_);
let cndv2ri = !(cndjXr_);
this.setState('stHUkGV', cndv2ri);
if (cndjXr_) { 
let el_Jum7 = eo('span','F0cff'+iiFIwm,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}else { 
let cmpVcny = this._lc('cxKlmzjhG', {parent:component,parentTop:layout,props:{coins:room.acceptanceCost},state:'stHUkGV',insideLoop:true,index:"" +iiFIwm});
}ec('td');
let elCf0aF = eo('td','8Abff'+iiFIwm,null,`class`,`text-center v-middle`);
let cndZfr4 = component.user.isLoggedIn();
this.setState('stsgXYC', cndZfr4);
let cndx1Lp = !(cndZfr4);
this.setState('stGdVUF', cndx1Lp);
if (cndZfr4) { 
let cndHtGb = ! component.userIsMemberOf(room) && ! component.userIsRequestingToJoin(room);
this.setState('stRIFcP', cndHtGb);
let cnd_4b3 = component.userIsRequestingToJoin(room);
this.setState('stYxgyB', cnd_4b3);
let cndGDC8 = !(cndHtGb||cnd_4b3);
this.setState('stSF9sA', cndGDC8);
if (cndHtGb) { 
let cndf8rU = room.acceptanceCriteria && component.user.gold > room.acceptanceCost;
this.setState('stq8mgx', cndf8rU);
if (cndf8rU) { 
let elqUD4i = eo('i','c38ff'+iiFIwm,null,`title`,`${trans(`Has an acceptance criteria`)}`,`class`,`${fas('question-circle') + ' mr-2 fa-2x v-middle grey-text icon'}`);
ec('i');
}let elx03yX = eo('button','Ef8ff'+iiFIwm,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingRoom(room, index)}]}, boolAttrs, {disabled:component.user.gold < room.acceptanceCost},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`Join`);
ec('button');
let cnd2YBF = component.user.gold < room.acceptanceCost;
this.setState('steYGJU', cnd2YBF);
if (cnd2YBF) { 
let ellkRgn = eo('div','tOCff'+iiFIwm,null,`class`,`bold red-text`);
text(`Insufficient
                                        gold!`);
ec('div');
}}else if (cnd_4b3) { 
let elpSn9P = eo('div','11Vff'+iiFIwm,null,`class`,`bold orange-text`);
text(`Waiting for
                                    approval`);
ec('div');
}else { 
let elUMNPF = eo('i','3bCff'+iiFIwm,null,`title`,`${trans(`Joined`)}`,`class`,`${fas('check') + ' fa-2x green-text icon'}`);
ec('i');
}}else { 
let elj7PFB = eo('a','HXRff'+iiFIwm,null,`href`,`/login`,`class`,`btn btn-sm btn-danger bold`);
let elEbEbk = eo('i','48Nff'+iiFIwm,null,`title`,`${trans(`Login to join`)}`,`class`,`${fas('lock') + ' fa-1x mr-2 icon'}`);
ec('i');
text(`Login to join`);
ec('a');
}ec('td');
let cndReNn = component.userIsModeratorOf(room);
this.setState('stv7DbM', cndReNn);
if (cndReNn) { 
let elPT_HP = eo('td','YUFff'+iiFIwm,null,`class`,`text-center`);
let cndI2Vu = room.requests.length > 0;
this.setState('stIuhBM', cndI2Vu);
if (cndI2Vu) { 
let elCmfQI = eo('span','fEpff'+iiFIwm,null,`class`,`can-unlock`);
text(`!`);
ec('span');
}let cnd_zR_ = room.requests.length > 0;
this.setState('st7fZBG', cnd_zR_);
if (cnd_zR_) { 
let elUWJGL = ev('br','xB6ff'+iiFIwm);
}let elEtgjb = eo('button','TB1ff'+iiFIwm,null, eventListeners, {onclick:[function(e) {var $el = this;component.getRoomRequests(room, index)}]},`type`,`button`,`class`,`btn bold`);
elEtgjb.cls = {'btn-info': room.requests.length  == 0, 'btn-warning': room.requests.length > 0};

            for (let className in elEtgjb.cls) {
                elEtgjb.classList.toggle(className, elEtgjb.cls[className]);
            }  
            text(`Requests`);
let cndkYbN = room.requests.length > 0;
this.setState('st6R0Lh', cndkYbN);
if (cndkYbN) { 
let elKGLWX = eo('span','5lsff'+iiFIwm,null,`class`,`ml-2`);
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
let cndPNw3 = component.openChatRoom;
this.setState('stV_OTh', cndPNw3);
if (cndPNw3) { 
let cmpFHfC = this._lc('cDLR8_GyR', {parent:component,events:{onclose:function(e) {let $el = this; component.openChatRoom = null},onsave:function(e) {let $el = this; component.chatRooms.push(e)}},state:'stV_OTh'});
}let cnd5xRB = component.openRoomRequests;
this.setState('st5Yjxt', cnd5xRB);
if (cnd5xRB) { 
let cmpjOjQ = this._lc('cO3DKDp9B', {parent:component,events:{onclose:function(e) {let $el = this; component.openRoomRequests = false}},content:(flkModal) => {let cndPocv = component.isLoadingRequests;
this.setState('st2Sbig', cndPocv);
let cndIw03 = !(cndPocv);
this.setState('st6saMi', cndIw03);
if (cndPocv) { 
let cmpyIaA = this._lc('chZaG9t9s', {parent:component,parentTop:flkModal,state:'st2Sbig'});
}else { 
let eli9t8a = eo('table',null,null,`class`,`table table-bordered m-t-2`);
let elEa8Bu = eo('thead');
let elm9LyW = eo('tr');
let elGl7Xp = eo('th');
text(`User`);
ec('th');
let elR83La = eo('th');
text(`acceptance Criteria Answer`);
ec('th');
let elgR98B = eo('th');
text(`Action`);
ec('th');
ec('tr');
for (let index in component.roomRequests) {
let roomRequest = component.roomRequests[index]; 
 let iiHdg0 = '_sBNT9C' + index;
let elLYLBK = eo('tr','yFOcdCjtZNQx' + index+iiHdg0);
let el2PGnr = eo('td','RZcff'+iiHdg0);
text(roomRequest.member.name);
ec('td');
let elu3KLb = eo('td','1Ayff'+iiHdg0);
let cndbQF4 = roomRequest.acceptanceCriteriaAnswer;
this.setState('st5qjF9', cndbQF4);
let cndPBlv = !(cndbQF4);
this.setState('st4VgUB', cndPBlv);
if (cndbQF4) { 
let elF0WGM = eo('button','CLdff'+iiHdg0,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCurrentRequestAnswer = !!! component.openCurrentRequestAnswer; component.currentRequest = roomRequest}]},`type`,`button`,`class`,`btn btn-info btn-sm bold`);
text(`View`);
ec('button');
}else { 
let el0q0zJ = eo('strong','Mzjff'+iiHdg0);
text(`N/a`);
ec('strong');
}ec('td');
let elS9LhZ = eo('td','Z9Pff'+iiHdg0);
let elx73Cy = eo('button','_QMff'+iiHdg0,null, eventListeners, {onclick:[function(e) {var $el = this;component.approveRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`Approve`);
ec('button');
let ellQ_8V = eo('button','43off'+iiHdg0,null, eventListeners, {onclick:[function(e) {var $el = this;component.declineRequest(roomRequest, index)}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Decline`);
ec('button');
ec('td');
ec('tr');
}
let cnd81pm = component.openCurrentRequestAnswer;
this.setState('stZOSWl', cnd81pm);
if (cnd81pm) { 
let eljCptV = eo('tr','q7Bf');
let el9ThBn = eo('td','XrHf',null,`colspan`,`3`);
let cmpIqjz = this._lc('cOlqLg2kv', {parent:component,parentTop:flkModal,props:{content:component.currentRequest.acceptanceCriteriaAnswer},state:'stZOSWl'});
ec('td');
ec('tr');
}ec('thead');
ec('table');
}},attrs:{header:`Room Requests (${ component.currentRoom.name })`},state:'st5Yjxt'});
}let cndUN9X = component.openAcceptanceCriteriaModal;
this.setState('stRprSm', cndUN9X);
if (cndUN9X) { 
component.acceptanceModal = this._lc('cAMwC307W', {parent:component,events:{onclose:function(e) {let $el = this; component.openAcceptanceCriteriaModal = false}},content:(flkModal) => {let elcvLRd = eo('h3',null,null,`class`,`bold m-b-2`);
text(`Please read the acceptance criteria and act accordingly.`);
ec('h3');
let cmpCKFJ = this._lc('cKnpzozjo', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.acceptanceCriteria},state:'stRprSm'});
let el0C_Ra = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitAcceptanceCriteria($el)}]});

                if (! el0C_Ra.formHandler) {
                    window.cfrmdlr = el0C_Ra.formHandler = new FormHandler(el0C_Ra, component);
                } else {
                    window.cfrmdlr = el0C_Ra.formHandler;
                }
            let elbgaTj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0C_Ra.formHandler.addError(`acceptanceCriteriaAnswer`, 'required', trans('validation.required'));}return el0C_Ra.formHandler.removeError(`acceptanceCriteriaAnswer`);}]},`name`,`${(`acceptanceCriteriaAnswer`).toInputName()}`,`placeholder`,`${trans(`Submit your answer (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`acceptanceCriteriaAnswer`);
ec('textarea');
let cndDh7L = el0C_Ra.formHandler.getError(`acceptanceCriteriaAnswer`);
this.setState('stzfNTi', cndDh7L);
if (cndDh7L) { 
let elwKLcC = eo('div','ZJXf',null,`class`,`alert alert-danger`);
text(el0C_Ra.formHandler.getError(`acceptanceCriteriaAnswer`));
ec('div');
}let elMAMec = eo('button',null,null,`class`,`btn btn-success bold m-t-1`);
text(`Submit`);
ec('button');
ec('form');
},attrs:{header:'Acceptance criteria'},state:'stRprSm'});
}let cndErw5 = component.confirmJoin;
this.setState('stEcdjd', cndErw5);
if (cndErw5) { 
component.confirmingModal = this._lc('cnWq3LzqL', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmJoin = null; component.joiningRoom = null}},content:(flkModal) => {let el0n0vc = eo('h1',null,null,`class`,`m-b-1`);
text(`Please read carefully the rules below to avoid any unhappy actions.`);
ec('h1');
let cmp9aq5 = this._lc('czjmbgDMI', {parent:component,parentTop:flkModal,props:{content:component.joiningRoom.rules},state:'stEcdjd'});
let elrt2Of = eo('div',null,null,`class`,`text-center m-t-1`,`id`,`confirming-btns`);
let elgRpps = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close(); component.joinRoom();}]},`type`,`button`,`class`,`btn btn-success btn-sm bold`);
text(`I Agree`);
ec('button');
let elrQko1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmingModal.close()}]},`type`,`button`,`class`,`btn btn-danger btn-sm bold`);
text(`Cancel`);
ec('button');
ec('div');
},attrs:{header:`${ component.joiningRoom.name } room rules`},state:'stEcdjd'});
}
                    this.isReadyToGo();
                }
        });