_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {ctL8xkRRl:'flk-spinner',caJ44cNIX:'gold-icon',c9IRKrfak:'flk-time-ago',cfO3qAabp:'gold-icon',cp3rBTfEp:'flk-time-ago',cLfpoSL1K:'gold-icon',cmWm3Joi1:'flk-time-ago',cs0R2oDWH:'gold-icon',cz0pn7y9m:'flk-time-ago',c5zp07HS0:'gold-icon',c8HHAiK4_:'flk-time-ago'},
                render: function (component) {
                    let el641aU = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elDfzx_ = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndC18w = component.isLoading;
this.setState('st9hJv1', cndC18w);
let cndxQjs = !(cndC18w);
this.setState('st9Epu2', cndxQjs);
if (cndC18w) { 
let cmpuhD3 = this._lc('ctL8xkRRl', {parent:component,attrs:{theme:'white'},state:'st9hJv1'});
}else { 
let cndvqB4 = ! Is.empty(component.rewards);
this.setState('st8Alhw', cndvqB4);
let cndcMAY = !(cndvqB4);
this.setState('stmzIaM', cndcMAY);
if (cndvqB4) { 
let el5OVeN = eo('ul','_0vf',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iiDgTC = 'eV7JehV' + index;
let elyqNpD = eo('li','iekiJO0l941G' + index+iiDgTC,null,`class`,`panel-item row m-0`);
let elf0tqG = eo('div','joyff'+iiDgTC,null,`class`,`col-10 p-l-0`);
let cndwOq1 = reward.type == 'complement';
this.setState('stkm4o7', cndwOq1);
let cndaK04 = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('stKp0MJ', cndaK04);
let cndmow3 = reward.type == 'reward' && reward.for == 'academy';
this.setState('stmrfLN', cndmow3);
let cndI0Gl = reward.type == 'reward' && reward.for == 'post';
this.setState('stNhpMm', cndI0Gl);
let cndr2AI = !(cndwOq1||cndaK04||cndmow3||cndI0Gl);
this.setState('stVGE6d', cndr2AI);
if (cndwOq1) { 
let eljDCDl = eo('div','keKff'+iiDgTC);
let cndsc4y = reward.for == 'complement';
this.setState('stcRQO3', cndsc4y);
if (cndsc4y) { 
let elmcla8 = eo('span','bPxff'+iiDgTC,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cndQN4d = reward.for == 'reportingIssue';
this.setState('stLpnUL', cndQN4d);
if (cndQN4d) { 
let el3UCR8 = eo('span','Jnmff'+iiDgTC,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let elpVQiG = eo('span','hMCff'+iiDgTC,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let elFODzS = eo('span','b0Jff'+iiDgTC,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let elwMVKT = eo('div','Y9Wff'+iiDgTC);
let cmpJSST = this._lc('caJ44cNIX', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iiDgTC});
let cmpSVR1 = this._lc('c9IRKrfak', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iiDgTC});
ec('div');
ec('div');
}else if (cndaK04) { 
let eltAlcY = eo('div','9bgff'+iiDgTC,null,`class`,`einstein`);
let elVThnR = ev('img','KMSff'+iiDgTC,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let eltd4TI = eo('div','F8Off'+iiDgTC,null,`class`,`d-inline-block`);
let elNL_SA = eo('span','dEuff'+iiDgTC,null,`class`,`description bold ml-2 teal-text`);
let elynumB = eo('span','vIRff'+iiDgTC,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let el5GvsQ = eo('span','p5_ff'+iiDgTC,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elA1y5T = eo('i','O7_ff'+iiDgTC,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elY1p5e = eo('div','ioAff'+iiDgTC);
let cmp_EzM = this._lc('cfO3qAabp', {parent:component,props:{coins:reward.gold},state:'stKp0MJ',insideLoop:true,index:"" +iiDgTC});
let cmpvmDM = this._lc('cp3rBTfEp', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stKp0MJ',insideLoop:true,index:"" +iiDgTC});
ec('div');
ec('div');
ec('div');
}else if (cndmow3) { 
let elsBFjP = eo('div','u3mff'+iiDgTC,null,`class`,`academy`);
let elXAP8T = eo('i','e1Jff'+iiDgTC,null,`class`,`${fas('university') + ' fa-2x v-top icon'}`);
ec('i');
let eldGrXt = eo('div','CSvff'+iiDgTC,null,`class`,`d-inline-block`);
let el7q2Wg = eo('span','ob4ff'+iiDgTC,null,`class`,`description bold ml-2 teal-text`);
let el0tKil = eo('span','i0Tff'+iiDgTC,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let el_XTSt = eo('span','QjTff'+iiDgTC,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elP2bo6 = eo('i','9qvff'+iiDgTC,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elNvDdU = eo('div','a2Gff'+iiDgTC);
let cmpz0DR = this._lc('cLfpoSL1K', {parent:component,props:{coins:reward.gold},state:'stmrfLN',insideLoop:true,index:"" +iiDgTC});
let cmpqQfQ = this._lc('cmWm3Joi1', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stmrfLN',insideLoop:true,index:"" +iiDgTC});
ec('div');
ec('div');
ec('div');
}else if (cndI0Gl) { 
let elf3evB = eo('div','13jff'+iiDgTC,null,`class`,`post`);
let eluVin_ = eo('i','Syaff'+iiDgTC,null,`class`,`${fas('mug-hot') + ' fa-2x v-top icon'}`);
ec('i');
let elAgtmB = eo('div','aM2ff'+iiDgTC,null,`class`,`d-inline-block`);
let elPOx30 = eo('span','qtvff'+iiDgTC,null,`class`,`description bold ml-2 teal-text`);
let elKTRtM = eo('span','_Z4ff'+iiDgTC,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let elQI5DT = eo('span','RV4ff'+iiDgTC);
text(`post.`);
ec('span');
ec('span');
let elAHcqp = eo('i','XBQff'+iiDgTC,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elDDfr9 = eo('div','VYkff'+iiDgTC);
let cmpFsWh = this._lc('cs0R2oDWH', {parent:component,props:{coins:reward.gold},state:'stNhpMm',insideLoop:true,index:"" +iiDgTC});
let cmp4bEj = this._lc('cz0pn7y9m', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stNhpMm',insideLoop:true,index:"" +iiDgTC});
ec('div');
ec('div');
ec('div');
}else { 
let eldrVxJ = eo('div','4Z4ff'+iiDgTC);
let ellEaCU = eo('div','iGYff'+iiDgTC);
text(reward.description);
ec('div');
let elwAfCF = eo('div','LBaff'+iiDgTC);
let cmpZcXj = this._lc('c5zp07HS0', {parent:component,props:{coins:reward.gold},state:'stVGE6d',insideLoop:true,index:"" +iiDgTC});
let cmpcKy4 = this._lc('c8HHAiK4_', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stVGE6d',insideLoop:true,index:"" +iiDgTC});
ec('div');
ec('div');
}ec('div');
let el0t_nt = eo('div','2N8ff'+iiDgTC,null,`class`,`col-2 m-t-1`);
let elOMrxC = eo('button','yg_ff'+iiDgTC,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elb1MeM = ev('hr','5KpiJO0l941G' + index+iiDgTC,null,`class`,`separator`);
}
ec('ul');
let elD0wci = eo('div',null,null,`class`,`rewards-footer`);
let elZtTsg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elWnPDQ = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });