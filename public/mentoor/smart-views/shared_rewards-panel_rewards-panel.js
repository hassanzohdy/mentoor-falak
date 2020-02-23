_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cwu9lbBLS:'flk-spinner',cCergHqpV:'gold-icon',cGyQf8xrU:'flk-time-ago',c0CY8bj_n:'gold-icon',c1P2XOvSG:'flk-time-ago',cm4IETgIV:'gold-icon',cJQ4zDfj6:'flk-time-ago',c10QIjB5N:'gold-icon',c1WgIv_7K:'flk-time-ago',cDl_3QXKA:'gold-icon',cu_UYdm6n:'flk-time-ago'},
                render: function (component) {
                    let el6IdKT = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elvDPE5 = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndbvI3 = component.isLoading;
this.setState('stuB8nM', cndbvI3);
let cndzont = !(cndbvI3);
this.setState('stmiOHI', cndzont);
if (cndbvI3) { 
let cmpSfvl = this._lc('cwu9lbBLS', {parent:component,attrs:{theme:'white'},state:'stuB8nM'});
}else { 
let cndBb62 = ! Is.empty(component.rewards);
this.setState('stjmGda', cndBb62);
let cndsvHr = !(cndBb62);
this.setState('stYmSuG', cndsvHr);
if (cndBb62) { 
let elA3nrs = eo('ul','ATEf',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iiStD9 = 'b3K90NE' + index;
let elhCgc4 = eo('li','4PPumyRkg2Rj' + index+iiStD9,null,`class`,`panel-item row m-0`);
let elX292g = eo('div','2UAff'+iiStD9,null,`class`,`col-10 p-l-0`);
let cnd6hqE = reward.type == 'complement';
this.setState('stl9jpz', cnd6hqE);
let cnd2YIp = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('std94ow', cnd2YIp);
let cndYxHr = reward.type == 'reward' && reward.for == 'academy';
this.setState('stvLKOE', cndYxHr);
let cndjrhf = reward.type == 'reward' && reward.for == 'post';
this.setState('ststjLT', cndjrhf);
let cnd4bPJ = !(cnd6hqE||cnd2YIp||cndYxHr||cndjrhf);
this.setState('stV7Bnv', cnd4bPJ);
if (cnd6hqE) { 
let elBv0pl = eo('div','Kw2ff'+iiStD9);
let cnd3ayv = reward.for == 'complement';
this.setState('stb2XXY', cnd3ayv);
if (cnd3ayv) { 
let elGtS6U = eo('span','tCaff'+iiStD9,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cnduN4H = reward.for == 'reportingIssue';
this.setState('stE4Njp', cnduN4H);
if (cnduN4H) { 
let elQk8kH = eo('span','WEZff'+iiStD9,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let elCI4pj = eo('span','25Zff'+iiStD9,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let elLtFVm = eo('span','HVtff'+iiStD9,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let elAOjVm = eo('div','nArff'+iiStD9);
let cmpm_er = this._lc('cCergHqpV', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iiStD9});
let cmp7LZw = this._lc('cGyQf8xrU', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iiStD9});
ec('div');
ec('div');
}else if (cnd2YIp) { 
let elx2N9H = eo('div','fCFff'+iiStD9,null,`class`,`einstein`);
let el_qYL5 = ev('img','f2_ff'+iiStD9,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let elCdz4I = eo('div','_sqff'+iiStD9,null,`class`,`d-inline-block`);
let elHakmo = eo('span','he2ff'+iiStD9,null,`class`,`description bold ml-2 teal-text`);
let elWFl6R = eo('span','WqEff'+iiStD9,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let elg6W50 = eo('span','bXoff'+iiStD9,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elDg8Oy = eo('i','XCyff'+iiStD9,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elr16EO = eo('div','kzJff'+iiStD9);
let cmpyYSQ = this._lc('c0CY8bj_n', {parent:component,props:{coins:reward.gold},state:'std94ow',insideLoop:true,index:"" +iiStD9});
let cmpHLso = this._lc('c1P2XOvSG', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'std94ow',insideLoop:true,index:"" +iiStD9});
ec('div');
ec('div');
ec('div');
}else if (cndYxHr) { 
let el19e5X = eo('div','nUnff'+iiStD9,null,`class`,`academy`);
let elkCvmV = eo('i','mtuff'+iiStD9,null,`class`,`${fas('university') + ' fa-2x v-top icon'}`);
ec('i');
let elRaMWM = eo('div','UCtff'+iiStD9,null,`class`,`d-inline-block`);
let elOpddB = eo('span','iO7ff'+iiStD9,null,`class`,`description bold ml-2 teal-text`);
let elglI0H = eo('span','RgCff'+iiStD9,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let el1DRTj = eo('span','82nff'+iiStD9,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let el8EJqO = eo('i','uycff'+iiStD9,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elU0mpU = eo('div','r4hff'+iiStD9);
let cmp3Ych = this._lc('cm4IETgIV', {parent:component,props:{coins:reward.gold},state:'stvLKOE',insideLoop:true,index:"" +iiStD9});
let cmpU_T3 = this._lc('cJQ4zDfj6', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stvLKOE',insideLoop:true,index:"" +iiStD9});
ec('div');
ec('div');
ec('div');
}else if (cndjrhf) { 
let elfg1K0 = eo('div','i6Lff'+iiStD9,null,`class`,`post`);
let el3z6KX = eo('i','iU9ff'+iiStD9,null,`class`,`${fas('mug-hot') + ' fa-2x v-top icon'}`);
ec('i');
let el00lqE = eo('div','Wixff'+iiStD9,null,`class`,`d-inline-block`);
let elpli9J = eo('span','oa2ff'+iiStD9,null,`class`,`description bold ml-2 teal-text`);
let elS41YO = eo('span','RsFff'+iiStD9,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let el6VZph = eo('span','QClff'+iiStD9);
text(`post.`);
ec('span');
ec('span');
let elTLppm = eo('i','rZeff'+iiStD9,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elctvU3 = eo('div','ALvff'+iiStD9);
let cmp0Av6 = this._lc('c10QIjB5N', {parent:component,props:{coins:reward.gold},state:'ststjLT',insideLoop:true,index:"" +iiStD9});
let cmpIAzT = this._lc('c1WgIv_7K', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'ststjLT',insideLoop:true,index:"" +iiStD9});
ec('div');
ec('div');
ec('div');
}else { 
let elVsteX = eo('div','Cosff'+iiStD9);
let eliMftk = eo('div','1uRff'+iiStD9);
text(reward.description);
ec('div');
let elbd7XD = eo('div','oBWff'+iiStD9);
let cmppbgg = this._lc('cDl_3QXKA', {parent:component,props:{coins:reward.gold},state:'stV7Bnv',insideLoop:true,index:"" +iiStD9});
let cmprFln = this._lc('cu_UYdm6n', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stV7Bnv',insideLoop:true,index:"" +iiStD9});
ec('div');
ec('div');
}ec('div');
let elJR1iC = eo('div','Sezff'+iiStD9,null,`class`,`col-2 m-t-1`);
let elKVgdM = eo('button','k09ff'+iiStD9,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elk2aYU = ev('hr','D5IumyRkg2Rj' + index+iiStD9,null,`class`,`separator`);
}
ec('ul');
let elgNsk2 = eo('div',null,null,`class`,`rewards-footer`);
let elJzONK = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let el8OrRB = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });