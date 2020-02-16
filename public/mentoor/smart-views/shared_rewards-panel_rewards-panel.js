_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cMgT0IflX:'flk-spinner',cNmWsUHcm:'gold-icon',cr1yO57AG:'flk-time-ago',cOZGWH2lY:'gold-icon',cHgB8HbUw:'flk-time-ago',crIbejN7D:'gold-icon',cXRgc_81N:'flk-time-ago',cMuhfMeWh:'gold-icon',cdV_VgCeS:'flk-time-ago',cJ4dWfjmP:'gold-icon',c_84XH2Sd:'flk-time-ago'},
                render: function (component) {
                    let eleuyT8 = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elLwDcP = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndmH_N = component.isLoading;
this.setState('st4JN0q', cndmH_N);
let cndXqcZ = !(cndmH_N);
this.setState('stlCIjI', cndXqcZ);
if (cndmH_N) { 
let cmpZoiC = this._lc('cMgT0IflX', {parent:component,attrs:{theme:'white'},state:'st4JN0q'});
}else { 
let cndBUGx = ! Is.empty(component.rewards);
this.setState('stIdEZY', cndBUGx);
let cndxqne = !(cndBUGx);
this.setState('sthVq3v', cndxqne);
if (cndBUGx) { 
let elFaQkw = eo('ul','C7Nf',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let ii6clH = 'Frow_63' + index;
let eldEfC4 = eo('li','jdYoX91_VVhV' + index+ii6clH,null,`class`,`panel-item row m-0`);
let eluToZD = eo('div','Vgyff'+ii6clH,null,`class`,`col-10 p-l-0`);
let cndviHb = reward.type == 'complement';
this.setState('stgRtwU', cndviHb);
let cnd29_O = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('stWg4BW', cnd29_O);
let cndHCta = reward.type == 'reward' && reward.for == 'academy';
this.setState('stUoYL0', cndHCta);
let cnd62pu = reward.type == 'reward' && reward.for == 'post';
this.setState('stTZl1v', cnd62pu);
let cnd8xUW = !(cndviHb||cnd29_O||cndHCta||cnd62pu);
this.setState('st5NF7_', cnd8xUW);
if (cndviHb) { 
let el62VEI = eo('div','AqUff'+ii6clH);
let cndMwVY = reward.for == 'complement';
this.setState('stH0N5y', cndMwVY);
if (cndMwVY) { 
let elirMMc = eo('span','AeQff'+ii6clH,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cndsvF3 = reward.for == 'reportingIssue';
this.setState('stTuOmj', cndsvF3);
if (cndsvF3) { 
let elbNikS = eo('span','Cavff'+ii6clH,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let el7qKrP = eo('span','FS5ff'+ii6clH,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let elcyWwC = eo('span','GFYff'+ii6clH,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let eljB7my = eo('div','icoff'+ii6clH);
let cmpkmCD = this._lc('cNmWsUHcm', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +ii6clH});
let cmpROv4 = this._lc('cr1yO57AG', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +ii6clH});
ec('div');
ec('div');
}else if (cnd29_O) { 
let elDjQ1w = eo('div','z26ff'+ii6clH,null,`class`,`einstein`);
let el99jK3 = ev('img','Z_Aff'+ii6clH,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let elEniNa = eo('div','qzOff'+ii6clH,null,`class`,`d-inline-block`);
let elu9A47 = eo('span','Ylxff'+ii6clH,null,`class`,`description bold ml-2 teal-text`);
let el1Av68 = eo('span','Twtff'+ii6clH,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let elOenTA = eo('span','wZJff'+ii6clH,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elu_9aN = eo('i','Pmlff'+ii6clH,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elrZD25 = eo('div','Bxwff'+ii6clH);
let cmp9y_l = this._lc('cOZGWH2lY', {parent:component,props:{coins:reward.gold},state:'stWg4BW',insideLoop:true,index:"" +ii6clH});
let cmpCgiP = this._lc('cHgB8HbUw', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stWg4BW',insideLoop:true,index:"" +ii6clH});
ec('div');
ec('div');
ec('div');
}else if (cndHCta) { 
let elcwbPS = eo('div','LIEff'+ii6clH,null,`class`,`academy`);
let elfoZQH = eo('i','0DTff'+ii6clH,null,`class`,`${fas('university') + ' fa-2x v-top icon'}`);
ec('i');
let el2gdbk = eo('div','SvWff'+ii6clH,null,`class`,`d-inline-block`);
let elc_jnF = eo('span','Lf_ff'+ii6clH,null,`class`,`description bold ml-2 teal-text`);
let elVR47E = eo('span','h8mff'+ii6clH,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let elCMfzB = eo('span','Jvyff'+ii6clH,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elvX4Vb = eo('i','w07ff'+ii6clH,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let el_881s = eo('div','xyAff'+ii6clH);
let cmpQ0FL = this._lc('crIbejN7D', {parent:component,props:{coins:reward.gold},state:'stUoYL0',insideLoop:true,index:"" +ii6clH});
let cmp6kbU = this._lc('cXRgc_81N', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stUoYL0',insideLoop:true,index:"" +ii6clH});
ec('div');
ec('div');
ec('div');
}else if (cnd62pu) { 
let elfTqE7 = eo('div','HGgff'+ii6clH,null,`class`,`post`);
let elRBMTd = eo('i','C_mff'+ii6clH,null,`class`,`${fas('mug-hot') + ' fa-2x v-top icon'}`);
ec('i');
let elX6UpX = eo('div','rIcff'+ii6clH,null,`class`,`d-inline-block`);
let elmcFSX = eo('span','Jwqff'+ii6clH,null,`class`,`description bold ml-2 teal-text`);
let elcoSl3 = eo('span','Cisff'+ii6clH,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let elvnSJV = eo('span','Ml_ff'+ii6clH);
text(`post.`);
ec('span');
ec('span');
let ele3lmy = eo('i','Wdpff'+ii6clH,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elNRApA = eo('div','ZIuff'+ii6clH);
let cmp52kH = this._lc('cMuhfMeWh', {parent:component,props:{coins:reward.gold},state:'stTZl1v',insideLoop:true,index:"" +ii6clH});
let cmpRsI_ = this._lc('cdV_VgCeS', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stTZl1v',insideLoop:true,index:"" +ii6clH});
ec('div');
ec('div');
ec('div');
}else { 
let eli_LCv = eo('div','36Qff'+ii6clH);
let eldyKvt = eo('div','IoWff'+ii6clH);
text(reward.description);
ec('div');
let elnRTXr = eo('div','25Pff'+ii6clH);
let cmp5a6U = this._lc('cJ4dWfjmP', {parent:component,props:{coins:reward.gold},state:'st5NF7_',insideLoop:true,index:"" +ii6clH});
let cmpJuhE = this._lc('c_84XH2Sd', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'st5NF7_',insideLoop:true,index:"" +ii6clH});
ec('div');
ec('div');
}ec('div');
let elMc68z = eo('div','yQNff'+ii6clH,null,`class`,`col-2 m-t-1`);
let el4Ra3x = eo('button','Av7ff'+ii6clH,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elYdG5H = ev('hr','WPGoX91_VVhV' + index+ii6clH,null,`class`,`separator`);
}
ec('ul');
let elM3iin = eo('div',null,null,`class`,`rewards-footer`);
let elhoCT2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elFoqaL = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });