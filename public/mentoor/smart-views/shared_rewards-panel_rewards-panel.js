_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cxo_I5mFR:'flk-spinner',c3rN_n81r:'gold-icon',c0nv8azTr:'flk-time-ago',clkO3X2Fi:'gold-icon',cP48g1LOd:'flk-time-ago',caWwfscc4:'gold-icon',c5POGu0vf:'flk-time-ago',c11PFjhkv:'gold-icon',cX9NKhd5U:'flk-time-ago',cSyrdeUPH:'gold-icon',czSgyMOIK:'flk-time-ago'},
                render: function (component) {
                    let eli0MFh = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elvJ2Hj = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndjZzF = component.isLoading;
this.setState('stWM8Xl', cndjZzF);
let cndS0WF = !(cndjZzF);
this.setState('stkf3Es', cndS0WF);
if (cndjZzF) { 
let cmp1fPz = this._lc('cxo_I5mFR', {parent:component,attrs:{theme:'white'},state:'stWM8Xl'});
}else { 
let cnd1BDP = ! Is.empty(component.rewards);
this.setState('stBMepq', cnd1BDP);
let cndgjcC = !(cnd1BDP);
this.setState('stM3NJ_', cndgjcC);
if (cnd1BDP) { 
let elBOYDX = eo('ul','i3Vf',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iiFrRx = '4pmBpBD' + index;
let el0amJd = eo('li','1P3gadqzJpAU' + index+iiFrRx,null,`class`,`panel-item row m-0`);
let elC4CsV = eo('div','4J5ff'+iiFrRx,null,`class`,`col-10 p-l-0`);
let cndEAIH = reward.type == 'complement';
this.setState('stTe_m1', cndEAIH);
let cndgdx4 = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('st5RqnM', cndgdx4);
let cndu18A = reward.type == 'reward' && reward.for == 'academy';
this.setState('stxPoGI', cndu18A);
let cndGuWR = reward.type == 'reward' && reward.for == 'post';
this.setState('st0qKqG', cndGuWR);
let cnd_Asa = !(cndEAIH||cndgdx4||cndu18A||cndGuWR);
this.setState('stRad61', cnd_Asa);
if (cndEAIH) { 
let eljSAJx = eo('div','xV_ff'+iiFrRx);
let cndVI2r = reward.for == 'complement';
this.setState('stJGdM_', cndVI2r);
if (cndVI2r) { 
let elE_qCM = eo('span','sf7ff'+iiFrRx,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cndhTjT = reward.for == 'reportingIssue';
this.setState('strcJCK', cndhTjT);
if (cndhTjT) { 
let elnhn7O = eo('span','6WHff'+iiFrRx,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let el8Pg5G = eo('span','yApff'+iiFrRx,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let el7D0i1 = eo('span','3c6ff'+iiFrRx,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let elJmy_9 = eo('div','LgYff'+iiFrRx);
let cmpnm22 = this._lc('c3rN_n81r', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iiFrRx});
let cmpuYnn = this._lc('c0nv8azTr', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iiFrRx});
ec('div');
ec('div');
}else if (cndgdx4) { 
let elhHlIN = eo('div','gd3ff'+iiFrRx,null,`class`,`einstein`);
let elpKTQl = ev('img','H6Gff'+iiFrRx,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let elHOmGz = eo('div','bfuff'+iiFrRx,null,`class`,`d-inline-block`);
let elbNR1k = eo('span','mjFff'+iiFrRx,null,`class`,`description bold ml-2 teal-text`);
let el90woe = eo('span','6wsff'+iiFrRx,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let elFqeVK = eo('span','Tmbff'+iiFrRx,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elSVRos = eo('i','xRSff'+iiFrRx,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elhRsJL = eo('div','QmZff'+iiFrRx);
let cmpqwrx = this._lc('clkO3X2Fi', {parent:component,props:{coins:reward.gold},state:'st5RqnM',insideLoop:true,index:"" +iiFrRx});
let cmpiiRs = this._lc('cP48g1LOd', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'st5RqnM',insideLoop:true,index:"" +iiFrRx});
ec('div');
ec('div');
ec('div');
}else if (cndu18A) { 
let elBktUK = eo('div','3Ktff'+iiFrRx,null,`class`,`academy`);
let el02EA8 = eo('i','m8qff'+iiFrRx,null,`class`,`${fas('university') + ' fa-2x v-top icon'}`);
ec('i');
let elIxbUW = eo('div','Tujff'+iiFrRx,null,`class`,`d-inline-block`);
let elUkMt8 = eo('span','MBOff'+iiFrRx,null,`class`,`description bold ml-2 teal-text`);
let eld2LE1 = eo('span','Qioff'+iiFrRx,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let eldc0AL = eo('span','mPvff'+iiFrRx,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elN44s3 = eo('i','vUYff'+iiFrRx,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elGSca2 = eo('div','ESEff'+iiFrRx);
let cmpBaan = this._lc('caWwfscc4', {parent:component,props:{coins:reward.gold},state:'stxPoGI',insideLoop:true,index:"" +iiFrRx});
let cmpZ9pB = this._lc('c5POGu0vf', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stxPoGI',insideLoop:true,index:"" +iiFrRx});
ec('div');
ec('div');
ec('div');
}else if (cndGuWR) { 
let el9dozZ = eo('div','M5lff'+iiFrRx,null,`class`,`post`);
let ellnULM = eo('i','QDXff'+iiFrRx,null,`class`,`${fas('mug-hot') + ' fa-2x v-top icon'}`);
ec('i');
let eltTOSz = eo('div','Foqff'+iiFrRx,null,`class`,`d-inline-block`);
let elGo9yg = eo('span','8z7ff'+iiFrRx,null,`class`,`description bold ml-2 teal-text`);
let elwyQR2 = eo('span','6k5ff'+iiFrRx,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let elrQrgR = eo('span','iYUff'+iiFrRx);
text(`post.`);
ec('span');
ec('span');
let elqPeAf = eo('i','Ol8ff'+iiFrRx,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elJphp6 = eo('div','FQ9ff'+iiFrRx);
let cmp_n4C = this._lc('c11PFjhkv', {parent:component,props:{coins:reward.gold},state:'st0qKqG',insideLoop:true,index:"" +iiFrRx});
let cmpF0Qk = this._lc('cX9NKhd5U', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'st0qKqG',insideLoop:true,index:"" +iiFrRx});
ec('div');
ec('div');
ec('div');
}else { 
let elrHVF5 = eo('div','eO2ff'+iiFrRx);
let el8ySiV = eo('div','iCKff'+iiFrRx);
text(reward.description);
ec('div');
let elySEQS = eo('div','xoFff'+iiFrRx);
let cmpD3sU = this._lc('cSyrdeUPH', {parent:component,props:{coins:reward.gold},state:'stRad61',insideLoop:true,index:"" +iiFrRx});
let cmpg4Sh = this._lc('czSgyMOIK', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stRad61',insideLoop:true,index:"" +iiFrRx});
ec('div');
ec('div');
}ec('div');
let elAavwp = eo('div','vFLff'+iiFrRx,null,`class`,`col-2 m-t-1`);
let eluzG06 = eo('button','nRzff'+iiFrRx,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elqRzqW = ev('hr','W8SgadqzJpAU' + index+iiFrRx,null,`class`,`separator`);
}
ec('ul');
let elkBTgB = eo('div',null,null,`class`,`rewards-footer`);
let elNFdLF = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elmkain = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });