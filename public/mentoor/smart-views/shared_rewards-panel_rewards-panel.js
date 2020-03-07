_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cjT8vUp0c:'flk-spinner',ch9hvwZ0U:'gold-icon',cAtc4dUPS:'flk-time-ago',c0IEucuG5:'gold-icon',cpYiQnsXb:'flk-time-ago',cuYHjciXn:'gold-icon',cpx08JC_P:'flk-time-ago',copcSYjjD:'gold-icon',cxrMFFPHZ:'flk-time-ago',c_VH2QTlK:'gold-icon',cU5NGy7Vp:'flk-time-ago'},
                render: function (component) {
                    let elOyuJ_ = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elc3JBw = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndzIFR = component.isLoading;
this.setState('stAVhG0', cndzIFR);
let cndwiZd = !(cndzIFR);
this.setState('stv1Rr7', cndwiZd);
if (cndzIFR) { 
let cmp6Utp = this._lc('cjT8vUp0c', {parent:component,attrs:{theme:'white'},state:'stAVhG0'});
}else { 
let cndVmaC = ! Is.empty(component.rewards);
this.setState('stOeULp', cndVmaC);
let cndK0vE = !(cndVmaC);
this.setState('st9ANOR', cndK0vE);
if (cndVmaC) { 
let elNv2Wz = eo('ul','H6Kf',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iiRU7I = 'GG2RBsa' + index;
let eljf1dz = eo('li','nVl_bnRJK5ok' + index+iiRU7I,null,`class`,`panel-item row m-0`);
let elsFEtB = eo('div','wvSff'+iiRU7I,null,`class`,`col-10 p-l-0`);
let cndwXYY = reward.type == 'complement';
this.setState('stEFPfX', cndwXYY);
let cndgs_9 = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('stIx1LS', cndgs_9);
let cnd7nAX = reward.type == 'reward' && reward.for == 'academy';
this.setState('stc54OU', cnd7nAX);
let cndmNYx = reward.type == 'reward' && reward.for == 'post';
this.setState('stoK3bl', cndmNYx);
let cndHsxc = !(cndwXYY||cndgs_9||cnd7nAX||cndmNYx);
this.setState('stpryQ2', cndHsxc);
if (cndwXYY) { 
let el4wiWj = eo('div','iO5ff'+iiRU7I);
let cndLkhZ = reward.for == 'complement';
this.setState('sttHSMx', cndLkhZ);
if (cndLkhZ) { 
let el2LIOb = eo('span','ZgOff'+iiRU7I,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cndyoo7 = reward.for == 'reportingIssue';
this.setState('stPXix2', cndyoo7);
if (cndyoo7) { 
let elWpTdD = eo('span','4jZff'+iiRU7I,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let elIX_9n = eo('span','NeCff'+iiRU7I,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let elf5At0 = eo('span','_qMff'+iiRU7I,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let elI9RE3 = eo('div','Ve2ff'+iiRU7I);
let cmpMqga = this._lc('ch9hvwZ0U', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iiRU7I});
let cmpkkyk = this._lc('cAtc4dUPS', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iiRU7I});
ec('div');
ec('div');
}else if (cndgs_9) { 
let elgW6ba = eo('div','oDJff'+iiRU7I,null,`class`,`einstein`);
let el3N6WR = ev('img','ddWff'+iiRU7I,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let el2nfwI = eo('div','IZ1ff'+iiRU7I,null,`class`,`d-inline-block`);
let elkYgaJ = eo('span','jbEff'+iiRU7I,null,`class`,`description bold ml-2 teal-text`);
let elUlNDf = eo('span','uGHff'+iiRU7I,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let elsM5TU = eo('span','40rff'+iiRU7I,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elrJ_Kn = eo('i','i6Vff'+iiRU7I,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let elMkNXe = eo('div','qCUff'+iiRU7I);
let cmphXoI = this._lc('c0IEucuG5', {parent:component,props:{coins:reward.gold},state:'stIx1LS',insideLoop:true,index:"" +iiRU7I});
let cmpUja6 = this._lc('cpYiQnsXb', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stIx1LS',insideLoop:true,index:"" +iiRU7I});
ec('div');
ec('div');
ec('div');
}else if (cnd7nAX) { 
let el1yvCn = eo('div','cGcff'+iiRU7I,null,`class`,`academy`);
let elmnuya = eo('i','ecTff'+iiRU7I,null,`class`,`${fas('university')} fa-2x v-top icon`);
ec('i');
let elBMsON = eo('div','2uyff'+iiRU7I,null,`class`,`d-inline-block`);
let elZoUHl = eo('span','Qa5ff'+iiRU7I,null,`class`,`description bold ml-2 teal-text`);
let elLpDco = eo('span','4tmff'+iiRU7I,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let el3SRcz = eo('span','6wDff'+iiRU7I,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elUjdtF = eo('i','qmrff'+iiRU7I,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let el1mYQ3 = eo('div','OWhff'+iiRU7I);
let cmpmtOf = this._lc('cuYHjciXn', {parent:component,props:{coins:reward.gold},state:'stc54OU',insideLoop:true,index:"" +iiRU7I});
let cmpGcSZ = this._lc('cpx08JC_P', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stc54OU',insideLoop:true,index:"" +iiRU7I});
ec('div');
ec('div');
ec('div');
}else if (cndmNYx) { 
let elBCUjV = eo('div','Mejff'+iiRU7I,null,`class`,`post`);
let elCTXFR = eo('i','4Uxff'+iiRU7I,null,`class`,`${fas('mug-hot')} fa-2x v-top icon`);
ec('i');
let elAcC1G = eo('div','VpKff'+iiRU7I,null,`class`,`d-inline-block`);
let elTosF2 = eo('span','zN3ff'+iiRU7I,null,`class`,`description bold ml-2 teal-text`);
let elEes2X = eo('span','11Eff'+iiRU7I,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let elDyX2T = eo('span','VxVff'+iiRU7I);
text(`post.`);
ec('span');
ec('span');
let el406jK = eo('i','AeHff'+iiRU7I,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let eliOBb_ = eo('div','Dmnff'+iiRU7I);
let cmpbiaf = this._lc('copcSYjjD', {parent:component,props:{coins:reward.gold},state:'stoK3bl',insideLoop:true,index:"" +iiRU7I});
let cmpADuU = this._lc('cxrMFFPHZ', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stoK3bl',insideLoop:true,index:"" +iiRU7I});
ec('div');
ec('div');
ec('div');
}else { 
let elkEKbB = eo('div','Y7Off'+iiRU7I);
let elB1QRz = eo('div','_B5ff'+iiRU7I);
text(reward.description);
ec('div');
let elFuHfp = eo('div','cvvff'+iiRU7I);
let cmpPihS = this._lc('c_VH2QTlK', {parent:component,props:{coins:reward.gold},state:'stpryQ2',insideLoop:true,index:"" +iiRU7I});
let cmpCLb5 = this._lc('cU5NGy7Vp', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stpryQ2',insideLoop:true,index:"" +iiRU7I});
ec('div');
ec('div');
}ec('div');
let elgpNxh = eo('div','v7yff'+iiRU7I,null,`class`,`col-2 m-t-1`);
let ellaMLJ = eo('button','jhDff'+iiRU7I,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elHhtBK = ev('hr','ieY_bnRJK5ok' + index+iiRU7I,null,`class`,`separator`);
}
ec('ul');
let elnWPiS = eo('div',null,null,`class`,`rewards-footer`);
let elcronT = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elh8gI7 = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });