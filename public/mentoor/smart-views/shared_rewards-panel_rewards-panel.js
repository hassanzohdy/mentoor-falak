_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cj4bxgwZ5:'flk-spinner',copYOPYwJ:'gold-icon',cKCnXZsnA:'flk-time-ago',cAq3Jqn0q:'gold-icon',cyNfcBYJp:'flk-time-ago',cBjTCqsU5:'gold-icon',cABNdRU3A:'flk-time-ago',cjoMqHNdb:'gold-icon',cKH2LOwJR:'flk-time-ago',cr_wsAmyB:'gold-icon',cEcrfEKMQ:'flk-time-ago'},
                render: function (component) {
                    let el7xwSI = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elhQU0i = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndunKS = component.isLoading;
this.setState('stma0Uy', cndunKS);
let cnd1Azf = !(cndunKS);
this.setState('stjHJfo', cnd1Azf);
if (cndunKS) { 
let cmpXGCS = this._lc('cj4bxgwZ5', {parent:component,attrs:{theme:'white'},state:'stma0Uy'});
}else { 
let cndlWMf = ! Is.empty(component.rewards);
this.setState('stEeH7a', cndlWMf);
let cnd4GpM = !(cndlWMf);
this.setState('stOLqiM', cnd4GpM);
if (cndlWMf) { 
let elZM0TH = eo('ul','S5Ff',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iigkX3 = 'lwqhdb4' + index;
let el_2BrA = eo('li','bsVwwa6BE__v' + index+iigkX3,null,`class`,`panel-item row m-0`);
let elqt8_i = eo('div','02rff'+iigkX3,null,`class`,`col-10 p-l-0`);
let cndG3uf = reward.type == 'complement';
this.setState('stlrfsc', cndG3uf);
let cndtXaI = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('st90NV0', cndtXaI);
let cndycyn = reward.type == 'reward' && reward.for == 'academy';
this.setState('st176Re', cndycyn);
let cndQPlU = reward.type == 'reward' && reward.for == 'post';
this.setState('sti48rS', cndQPlU);
let cndnHhl = !(cndG3uf||cndtXaI||cndycyn||cndQPlU);
this.setState('stGAqFZ', cndnHhl);
if (cndG3uf) { 
let elCskTO = eo('div','bBeff'+iigkX3);
let cndaenk = reward.for == 'complement';
this.setState('stzTXFP', cndaenk);
if (cndaenk) { 
let elJWxTI = eo('span','PfOff'+iigkX3,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cndgsfg = reward.for == 'reportingIssue';
this.setState('st8c4bv', cndgsfg);
if (cndgsfg) { 
let el7yV2B = eo('span','qbpff'+iigkX3,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let elfDK8F = eo('span','1UOff'+iigkX3,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let el5nqCG = eo('span','VsAff'+iigkX3,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let el0g1le = eo('div','rngff'+iigkX3);
let cmpRzmG = this._lc('copYOPYwJ', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iigkX3});
let cmpgNIN = this._lc('cKCnXZsnA', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iigkX3});
ec('div');
ec('div');
}else if (cndtXaI) { 
let elTnwaC = eo('div','5EYff'+iigkX3,null,`class`,`einstein`);
let elIPSo4 = ev('img','O6Uff'+iigkX3,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let elrKApP = eo('div','tn7ff'+iigkX3,null,`class`,`d-inline-block`);
let elgdsgV = eo('span','1uCff'+iigkX3,null,`class`,`description bold ml-2 teal-text`);
let elXW40o = eo('span','Hqgff'+iigkX3,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let eluy7FS = eo('span','riQff'+iigkX3,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let eleqMXf = eo('i','TvRff'+iigkX3,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let elkY7PU = eo('div','XVHff'+iigkX3);
let cmpDUGj = this._lc('cAq3Jqn0q', {parent:component,props:{coins:reward.gold},state:'st90NV0',insideLoop:true,index:"" +iigkX3});
let cmpoTki = this._lc('cyNfcBYJp', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'st90NV0',insideLoop:true,index:"" +iigkX3});
ec('div');
ec('div');
ec('div');
}else if (cndycyn) { 
let elplRRy = eo('div','zpwff'+iigkX3,null,`class`,`academy`);
let elwq5cG = eo('i','zDWff'+iigkX3,null,`class`,`${fas('university')} fa-2x v-top icon`);
ec('i');
let elARbSP = eo('div','PHNff'+iigkX3,null,`class`,`d-inline-block`);
let elQACtR = eo('span','sfXff'+iigkX3,null,`class`,`description bold ml-2 teal-text`);
let elrCr5t = eo('span','fqgff'+iigkX3,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let elRSDzm = eo('span','7eKff'+iigkX3,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elnF_WB = eo('i','g7hff'+iigkX3,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let elbW3jZ = eo('div','x9Hff'+iigkX3);
let cmpz0wt = this._lc('cBjTCqsU5', {parent:component,props:{coins:reward.gold},state:'st176Re',insideLoop:true,index:"" +iigkX3});
let cmppV7H = this._lc('cABNdRU3A', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'st176Re',insideLoop:true,index:"" +iigkX3});
ec('div');
ec('div');
ec('div');
}else if (cndQPlU) { 
let elmQq3F = eo('div','Gadff'+iigkX3,null,`class`,`post`);
let ellkao0 = eo('i','VCWff'+iigkX3,null,`class`,`${fas('mug-hot')} fa-2x v-top icon`);
ec('i');
let elpeosi = eo('div','m8Bff'+iigkX3,null,`class`,`d-inline-block`);
let el5xbMK = eo('span','58Hff'+iigkX3,null,`class`,`description bold ml-2 teal-text`);
let el03TzX = eo('span','3OPff'+iigkX3,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let elSuvmx = eo('span','CC2ff'+iigkX3);
text(`post.`);
ec('span');
ec('span');
let elARjMH = eo('i','UMxff'+iigkX3,null,`class`,`${fas('check')} green-text success-icon icon`);
ec('i');
let elDVFjU = eo('div','BHuff'+iigkX3);
let cmpOJcU = this._lc('cjoMqHNdb', {parent:component,props:{coins:reward.gold},state:'sti48rS',insideLoop:true,index:"" +iigkX3});
let cmp_6qc = this._lc('cKH2LOwJR', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'sti48rS',insideLoop:true,index:"" +iigkX3});
ec('div');
ec('div');
ec('div');
}else { 
let elWXZmS = eo('div','aZUff'+iigkX3);
let el3p8_d = eo('div','ldWff'+iigkX3);
text(reward.description);
ec('div');
let elyg9cc = eo('div','BMDff'+iigkX3);
let cmpkRrp = this._lc('cr_wsAmyB', {parent:component,props:{coins:reward.gold},state:'stGAqFZ',insideLoop:true,index:"" +iigkX3});
let cmpNAP7 = this._lc('cEcrfEKMQ', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stGAqFZ',insideLoop:true,index:"" +iigkX3});
ec('div');
ec('div');
}ec('div');
let elJnufG = eo('div','OGWff'+iigkX3,null,`class`,`col-2 m-t-1`);
let elyYxd0 = eo('button','F0Eff'+iigkX3,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elOCvIB = ev('hr','ENEwwa6BE__v' + index+iigkX3,null,`class`,`separator`);
}
ec('ul');
let elY49pq = eo('div',null,null,`class`,`rewards-footer`);
let el6813B = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elEf0Lg = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });