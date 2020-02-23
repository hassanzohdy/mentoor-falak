_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cQvFVtBhh:'flk-spinner',cPoB6GkrO:'gold-icon',cztxH3Kjg:'flk-time-ago',cw_NfVStq:'gold-icon',cAOzb9b7l:'flk-time-ago',cFT4gTxwn:'gold-icon',c0aP24sGv:'flk-time-ago',c7W44gEFj:'gold-icon',ckQWRaE2F:'flk-time-ago',cewIarHDT:'gold-icon',cHlt1ODRG:'flk-time-ago'},
                render: function (component) {
                    let el0DRM9 = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let el5RVUt = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndEii1 = component.isLoading;
this.setState('sti9uGY', cndEii1);
let cndNhnx = !(cndEii1);
this.setState('stiZDZn', cndNhnx);
if (cndEii1) { 
let cmpelOX = this._lc('cQvFVtBhh', {parent:component,attrs:{theme:'white'},state:'sti9uGY'});
}else { 
let cndNWNC = ! Is.empty(component.rewards);
this.setState('stBzZIj', cndNWNC);
let cndNpbv = !(cndNWNC);
this.setState('stRqdN1', cndNpbv);
if (cndNWNC) { 
let elZIjwP = eo('ul','et2f',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iiuVWH = 'o_54_2K' + index;
let elGyxC1 = eo('li','Pw5_XTJZGPks' + index+iiuVWH,null,`class`,`panel-item row m-0`);
let elzss4P = eo('div','dYoff'+iiuVWH,null,`class`,`col-10 p-l-0`);
let cnd1A1l = reward.type == 'complement';
this.setState('stipRAc', cnd1A1l);
let cndB67C = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('stUxgUO', cndB67C);
let cndFoPB = reward.type == 'reward' && reward.for == 'academy';
this.setState('st84v5p', cndFoPB);
let cndi12h = reward.type == 'reward' && reward.for == 'post';
this.setState('strRFaX', cndi12h);
let cndoch5 = !(cnd1A1l||cndB67C||cndFoPB||cndi12h);
this.setState('st1IRxq', cndoch5);
if (cnd1A1l) { 
let elUDHnk = eo('div','2uRff'+iiuVWH);
let cndND3q = reward.for == 'complement';
this.setState('stuCbP5', cndND3q);
if (cndND3q) { 
let el5mdhx = eo('span','AFHff'+iiuVWH,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cnd_63u = reward.for == 'reportingIssue';
this.setState('stGVdXq', cnd_63u);
if (cnd_63u) { 
let eldXPu7 = eo('span','0bvff'+iiuVWH,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let elHDYDl = eo('span','7Nwff'+iiuVWH,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let elU281p = eo('span','7d7ff'+iiuVWH,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let elOCA00 = eo('div','UbDff'+iiuVWH);
let cmp8u0j = this._lc('cPoB6GkrO', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iiuVWH});
let cmpsy9s = this._lc('cztxH3Kjg', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iiuVWH});
ec('div');
ec('div');
}else if (cndB67C) { 
let elOsW4I = eo('div','95Dff'+iiuVWH,null,`class`,`einstein`);
let elAleB8 = ev('img','80iff'+iiuVWH,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let elnFojb = eo('div','7IAff'+iiuVWH,null,`class`,`d-inline-block`);
let elciIIU = eo('span','8TZff'+iiuVWH,null,`class`,`description bold ml-2 teal-text`);
let elctUL1 = eo('span','C2hff'+iiuVWH,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let el_78VK = eo('span','sCbff'+iiuVWH,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elig3rN = eo('i','DIfff'+iiuVWH,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elYhzVD = eo('div','R0pff'+iiuVWH);
let cmpJXcZ = this._lc('cw_NfVStq', {parent:component,props:{coins:reward.gold},state:'stUxgUO',insideLoop:true,index:"" +iiuVWH});
let cmpvaFi = this._lc('cAOzb9b7l', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stUxgUO',insideLoop:true,index:"" +iiuVWH});
ec('div');
ec('div');
ec('div');
}else if (cndFoPB) { 
let elCBo5j = eo('div','Ehoff'+iiuVWH,null,`class`,`academy`);
let elc6DbJ = eo('i','JaOff'+iiuVWH,null,`class`,`${fas('university') + ' fa-2x v-top icon'}`);
ec('i');
let el9aCuj = eo('div','52Qff'+iiuVWH,null,`class`,`d-inline-block`);
let elECWT2 = eo('span','38kff'+iiuVWH,null,`class`,`description bold ml-2 teal-text`);
let elnoLeW = eo('span','5Tuff'+iiuVWH,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let elDFl4o = eo('span','OOMff'+iiuVWH,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elI0sNj = eo('i','Qhcff'+iiuVWH,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let el2fLHH = eo('div','EAxff'+iiuVWH);
let cmpjDgv = this._lc('cFT4gTxwn', {parent:component,props:{coins:reward.gold},state:'st84v5p',insideLoop:true,index:"" +iiuVWH});
let cmpElXq = this._lc('c0aP24sGv', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'st84v5p',insideLoop:true,index:"" +iiuVWH});
ec('div');
ec('div');
ec('div');
}else if (cndi12h) { 
let elgU0ty = eo('div','150ff'+iiuVWH,null,`class`,`post`);
let elIOZYu = eo('i','_cXff'+iiuVWH,null,`class`,`${fas('mug-hot') + ' fa-2x v-top icon'}`);
ec('i');
let elZ6q69 = eo('div','fUlff'+iiuVWH,null,`class`,`d-inline-block`);
let elyv9sE = eo('span','aADff'+iiuVWH,null,`class`,`description bold ml-2 teal-text`);
let elFQNW7 = eo('span','RO6ff'+iiuVWH,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let el3BbXS = eo('span','yoNff'+iiuVWH);
text(`post.`);
ec('span');
ec('span');
let elE7l_g = eo('i','skjff'+iiuVWH,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elfr_yS = eo('div','REGff'+iiuVWH);
let cmpTesy = this._lc('c7W44gEFj', {parent:component,props:{coins:reward.gold},state:'strRFaX',insideLoop:true,index:"" +iiuVWH});
let cmpA4SI = this._lc('ckQWRaE2F', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'strRFaX',insideLoop:true,index:"" +iiuVWH});
ec('div');
ec('div');
ec('div');
}else { 
let elppCIG = eo('div','66Yff'+iiuVWH);
let elEfCSo = eo('div','qbJff'+iiuVWH);
text(reward.description);
ec('div');
let elfCXVn = eo('div','MPIff'+iiuVWH);
let cmpB4fL = this._lc('cewIarHDT', {parent:component,props:{coins:reward.gold},state:'st1IRxq',insideLoop:true,index:"" +iiuVWH});
let cmpngSv = this._lc('cHlt1ODRG', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'st1IRxq',insideLoop:true,index:"" +iiuVWH});
ec('div');
ec('div');
}ec('div');
let el9GWIg = eo('div','MaWff'+iiuVWH,null,`class`,`col-2 m-t-1`);
let eltpJ7S = eo('button','uNUff'+iiuVWH,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let el5Dw88 = ev('hr','HhX_XTJZGPks' + index+iiuVWH,null,`class`,`separator`);
}
ec('ul');
let elo5W88 = eo('div',null,null,`class`,`rewards-footer`);
let eluxbpQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elrpqYS = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });