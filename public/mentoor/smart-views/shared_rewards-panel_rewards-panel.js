_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cCJeG1uQ6:'flk-spinner',cZU1HKeYa:'gold-icon',cedDcBWEn:'flk-time-ago',caeBeNxmA:'gold-icon',c5kOlggro:'flk-time-ago',cb_vQHKJZ:'gold-icon',c140DbSkI:'flk-time-ago',c10pmMod6:'gold-icon',cBdVBrBi4:'flk-time-ago',cMtk7UeeO:'gold-icon',cIUDRpgET:'flk-time-ago'},
                render: function (component) {
                    let elRjQwI = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elGoTSK = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndAP8_ = component.isLoading;
this.setState('st2DR5k', cndAP8_);
let cndEIJT = !(cndAP8_);
this.setState('stHJzxA', cndEIJT);
if (cndAP8_) { 
let cmpWooq = this._lc('cCJeG1uQ6', {parent:component,attrs:{theme:'white'},state:'st2DR5k'});
}else { 
let cndwsu9 = ! Is.empty(component.rewards);
this.setState('stCcOTv', cndwsu9);
let cndNIsK = !(cndwsu9);
this.setState('stDeNjM', cndNIsK);
if (cndwsu9) { 
let elihy08 = eo('ul','HOzf',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iikZF_ = 'Nd8_yYX' + index;
let elDr12J = eo('li','UcQy82lqtJx2' + index+iikZF_,null,`class`,`panel-item row m-0`);
let elOjUAa = eo('div','J4Gff'+iikZF_,null,`class`,`col-10 p-l-0`);
let cndQmZ_ = reward.type == 'complement';
this.setState('stsVk4R', cndQmZ_);
let cndGRZA = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('stRSuBE', cndGRZA);
let cndYLER = reward.type == 'reward' && reward.for == 'academy';
this.setState('stMokJQ', cndYLER);
let cndZHd_ = reward.type == 'reward' && reward.for == 'post';
this.setState('stDQbRQ', cndZHd_);
let cndJooe = !(cndQmZ_||cndGRZA||cndYLER||cndZHd_);
this.setState('stb9YpP', cndJooe);
if (cndQmZ_) { 
let eltNkpP = eo('div','oCmff'+iikZF_);
let cndU9qb = reward.for == 'complement';
this.setState('strM_nD', cndU9qb);
if (cndU9qb) { 
let elkEZvx = eo('span','MPjff'+iikZF_,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cndlYu1 = reward.for == 'reportingIssue';
this.setState('stWwxFJ', cndlYu1);
if (cndlYu1) { 
let elqZXTq = eo('span','ec0ff'+iikZF_,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let elLqe9V = eo('span','M_pff'+iikZF_,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let elUmA7i = eo('span','iRCff'+iikZF_,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let el6owC7 = eo('div','SiXff'+iikZF_);
let cmp64Ac = this._lc('cZU1HKeYa', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iikZF_});
let cmpEUoD = this._lc('cedDcBWEn', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iikZF_});
ec('div');
ec('div');
}else if (cndGRZA) { 
let eljwddG = eo('div','NwXff'+iikZF_,null,`class`,`einstein`);
let elil3Dw = ev('img','Vm_ff'+iikZF_,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let eljDNcj = eo('div','8QUff'+iikZF_,null,`class`,`d-inline-block`);
let elGenhL = eo('span','XYcff'+iikZF_,null,`class`,`description bold ml-2 teal-text`);
let elu2CvC = eo('span','zNXff'+iikZF_,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let elBmew5 = eo('span','2jpff'+iikZF_,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elnhlm4 = eo('i','u8rff'+iikZF_,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let eluwvcE = eo('div','qJaff'+iikZF_);
let cmpQL8C = this._lc('caeBeNxmA', {parent:component,props:{coins:reward.gold},state:'stRSuBE',insideLoop:true,index:"" +iikZF_});
let cmpkB_9 = this._lc('c5kOlggro', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stRSuBE',insideLoop:true,index:"" +iikZF_});
ec('div');
ec('div');
ec('div');
}else if (cndYLER) { 
let elDdlxu = eo('div','j5wff'+iikZF_,null,`class`,`academy`);
let elXQ5yu = eo('i','fjOff'+iikZF_,null,`class`,`${fas('university')} fa-2x v-top icon`);
ec('i');
let el43Kr3 = eo('div','8Kjff'+iikZF_,null,`class`,`d-inline-block`);
let elbLLMH = eo('span','Qa_ff'+iikZF_,null,`class`,`description bold ml-2 teal-text`);
let elks7tb = eo('span','RGRff'+iikZF_,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let elg93vA = eo('span','yY_ff'+iikZF_,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elQ5pSI = eo('i','ZMaff'+iikZF_,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let elnWhDC = eo('div','UOGff'+iikZF_);
let cmpEDjl = this._lc('cb_vQHKJZ', {parent:component,props:{coins:reward.gold},state:'stMokJQ',insideLoop:true,index:"" +iikZF_});
let cmpNzJ3 = this._lc('c140DbSkI', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stMokJQ',insideLoop:true,index:"" +iikZF_});
ec('div');
ec('div');
ec('div');
}else if (cndZHd_) { 
let elEdBQl = eo('div','6M9ff'+iikZF_,null,`class`,`post`);
let elcVasE = eo('i','dlxff'+iikZF_,null,`class`,`${fas('mug-hot')} fa-2x v-top icon`);
ec('i');
let el3NEcQ = eo('div','SGFff'+iikZF_,null,`class`,`d-inline-block`);
let elEjk5p = eo('span','easff'+iikZF_,null,`class`,`description bold ml-2 teal-text`);
let elytplq = eo('span','dPzff'+iikZF_,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let elIZohw = eo('span','kCrff'+iikZF_);
text(`post.`);
ec('span');
ec('span');
let elyzC27 = eo('i','yLnff'+iikZF_,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let elzO1cw = eo('div','O5uff'+iikZF_);
let cmpiZP5 = this._lc('c10pmMod6', {parent:component,props:{coins:reward.gold},state:'stDQbRQ',insideLoop:true,index:"" +iikZF_});
let cmpuJ1B = this._lc('cBdVBrBi4', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stDQbRQ',insideLoop:true,index:"" +iikZF_});
ec('div');
ec('div');
ec('div');
}else { 
let elFkc52 = eo('div','w6xff'+iikZF_);
let elJS0vC = eo('div','RS9ff'+iikZF_);
text(reward.description);
ec('div');
let elVh84J = eo('div','4PLff'+iikZF_);
let cmpEocc = this._lc('cMtk7UeeO', {parent:component,props:{coins:reward.gold},state:'stb9YpP',insideLoop:true,index:"" +iikZF_});
let cmpivWB = this._lc('cIUDRpgET', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stb9YpP',insideLoop:true,index:"" +iikZF_});
ec('div');
ec('div');
}ec('div');
let elVZUi6 = eo('div','Czdff'+iikZF_,null,`class`,`col-2 m-t-1`);
let ellDSnQ = eo('button','2Reff'+iikZF_,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elP99kz = ev('hr','qDNy82lqtJx2' + index+iikZF_,null,`class`,`separator`);
}
ec('ul');
let elXWAND = eo('div',null,null,`class`,`rewards-footer`);
let elW_gaX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elLQELE = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });