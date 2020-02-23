_Component({
                selector: 'rewards-panel',
                c: 'RewardsPanel', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','rewards','redeemReward','redeemAll'],
                children: {cVismP7Kp:'flk-spinner',cI2mqwURe:'gold-icon',cD2QfTNKc:'flk-time-ago',cCYyMdDn_:'gold-icon',cEdXk1XK6:'flk-time-ago',checxinqz:'gold-icon',cF_87afjL:'flk-time-ago',cat8AH4JG:'gold-icon',cEBzyBUqQ:'flk-time-ago',c3ddE8IrR:'gold-icon',cj4konPn0:'flk-time-ago'},
                render: function (component) {
                    let el1hItw = eo('section',null,null,`class`,`panel-wrapper dark`,`id`,`rewards-panel`);
let elwGNje = eo('span',null,null,`class`,`arrow-up`);
ec('span');
let cndiMef = component.isLoading;
this.setState('stwdsU1', cndiMef);
let cndpFVc = !(cndiMef);
this.setState('stmOUXd', cndpFVc);
if (cndiMef) { 
let cmpZH6B = this._lc('cVismP7Kp', {parent:component,attrs:{theme:'white'},state:'stwdsU1'});
}else { 
let cndqHCG = ! Is.empty(component.rewards);
this.setState('sts7erS', cndqHCG);
let cndmKmw = !(cndqHCG);
this.setState('stSjEj5', cndmKmw);
if (cndqHCG) { 
let elIk77U = eo('ul','nO4f',null,`class`,`list`);
for (let index in component.rewards) {
let reward = component.rewards[index]; 
 let iixaw5 = 'PqPkHW2' + index;
let elZinHl = eo('li','NNksQhx4TSPw' + index+iixaw5,null,`class`,`panel-item row m-0`);
let ele0CaU = eo('div','Rw7ff'+iixaw5,null,`class`,`col-10 p-l-0`);
let cndq2Yx = reward.type == 'complement';
this.setState('stD0zna', cndq2Yx);
let cndIpaZ = reward.type == 'reward' && reward.for == 'puzzle';
this.setState('stl7ocf', cndIpaZ);
let cndWIIN = reward.type == 'reward' && reward.for == 'academy';
this.setState('stGNvAk', cndWIIN);
let cnd009v = reward.type == 'reward' && reward.for == 'post';
this.setState('stfiOLE', cnd009v);
let cndmk97 = !(cndq2Yx||cndIpaZ||cndWIIN||cnd009v);
this.setState('stUgRUX', cndmk97);
if (cndq2Yx) { 
let els8_Z0 = eo('div','rNXff'+iixaw5);
let cnd_wYg = reward.for == 'complement';
this.setState('stCFUlA', cnd_wYg);
if (cnd_wYg) { 
let elmljXS = eo('span','BiTff'+iixaw5,null,`class`,`reward-type`);
text(`[Complement]`);
ec('span');
}let cnd9ICv = reward.for == 'reportingIssue';
this.setState('strXR94', cnd9ICv);
if (cnd9ICv) { 
let elLTnZM = eo('span','0_vff'+iixaw5,null,`class`,`reward-type purple-text`);
text(`[Reporting
                                    Issue]`);
ec('span');
}let elyyy1R = eo('span','pauff'+iixaw5,null,`class`,`auto mx-1`);
text(`This is a small complement for`);
ec('span');
let ell7MrC = eo('span','Pnvff'+iixaw5,null,`class`,`description bold orange-text`);
text(reward.description);
ec('span');
text(`.`);
let elvrDU2 = eo('div','Nunff'+iixaw5);
let cmp9WOu = this._lc('cI2mqwURe', {parent:component,props:{coins:reward.gold},insideLoop:true,index:"" +iixaw5});
let cmpRHGo = this._lc('cD2QfTNKc', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},insideLoop:true,index:"" +iixaw5});
ec('div');
ec('div');
}else if (cndIpaZ) { 
let elFiaJc = eo('div','rY4ff'+iixaw5,null,`class`,`einstein`);
let elUSCR3 = ev('img','LE7ff'+iixaw5,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-img`);
let elqQk_A = eo('div','OQrff'+iixaw5,null,`class`,`d-inline-block`);
let eljAfBo = eo('span','kcGff'+iixaw5,null,`class`,`description bold ml-2 teal-text`);
let elZ2scN = eo('span','_gRff'+iixaw5,null,`class`,`orange-text`);
text(`[${ reward.settings.puzzle.category.name }]`);
ec('span');
let eljEOPs = eo('span','Aliff'+iixaw5,null,`class`,`ml-2`);
text(reward.settings.puzzle.title);
ec('span');
ec('span');
let elvVnu_ = eo('i','W7nff'+iixaw5,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elrJLO2 = eo('div','ZNfff'+iixaw5);
let cmp0r2t = this._lc('cCYyMdDn_', {parent:component,props:{coins:reward.gold},state:'stl7ocf',insideLoop:true,index:"" +iixaw5});
let cmpjj8S = this._lc('cEdXk1XK6', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stl7ocf',insideLoop:true,index:"" +iixaw5});
ec('div');
ec('div');
ec('div');
}else if (cndWIIN) { 
let elk64Vo = eo('div','S5gff'+iixaw5,null,`class`,`academy`);
let elHUnM3 = eo('i','doxff'+iixaw5,null,`class`,`${fas('university') + ' fa-2x v-top icon'}`);
ec('i');
let eloATiU = eo('div','8Leff'+iixaw5,null,`class`,`d-inline-block`);
let elLj1eF = eo('span','W6fff'+iixaw5,null,`class`,`description bold ml-2 teal-text`);
let elw9LwQ = eo('span','Sx0ff'+iixaw5,null,`class`,`yellow-text`);
text(`[${ reward.settings.track.name }]`);
ec('span');
let elX6wxf = eo('span','QwYff'+iixaw5,null,`class`,`ml-2`);
text(reward.settings.topic.title);
ec('span');
ec('span');
let elvDWBJ = eo('i','Gnvff'+iixaw5,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elFYKmE = eo('div','Agjff'+iixaw5);
let cmpgLzG = this._lc('checxinqz', {parent:component,props:{coins:reward.gold},state:'stGNvAk',insideLoop:true,index:"" +iixaw5});
let cmpapAb = this._lc('cF_87afjL', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stGNvAk',insideLoop:true,index:"" +iixaw5});
ec('div');
ec('div');
ec('div');
}else if (cnd009v) { 
let elPV3VZ = eo('div','pMmff'+iixaw5,null,`class`,`post`);
let elff8l5 = eo('i','HC6ff'+iixaw5,null,`class`,`${fas('mug-hot') + ' fa-2x v-top icon'}`);
ec('i');
let el0H_7E = eo('div','JMjff'+iixaw5,null,`class`,`d-inline-block`);
let ell3FAZ = eo('span','H1vff'+iixaw5,null,`class`,`description bold ml-2 teal-text`);
let elMlh4g = eo('span','7odff'+iixaw5,null,`class`,`mx-2`);
text(reward.settings.post.title);
ec('span');
let elUknfZ = eo('span','ebnff'+iixaw5);
text(`post.`);
ec('span');
ec('span');
let elHjqcL = eo('i','Ks9ff'+iixaw5,null,`class`,`${fas('check') + ' green-text success-icon icon'}`);
ec('i');
let elRE8N6 = eo('div','Ajiff'+iixaw5);
let cmpEu7e = this._lc('cat8AH4JG', {parent:component,props:{coins:reward.gold},state:'stfiOLE',insideLoop:true,index:"" +iixaw5});
let cmpRnUw = this._lc('cEBzyBUqQ', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stfiOLE',insideLoop:true,index:"" +iixaw5});
ec('div');
ec('div');
ec('div');
}else { 
let elHedrW = eo('div','k81ff'+iixaw5);
let elnfmS9 = eo('div','Gb_ff'+iixaw5);
text(reward.description);
ec('div');
let elz0hAQ = eo('div','Vihff'+iixaw5);
let cmpg7HW = this._lc('c3ddE8IrR', {parent:component,props:{coins:reward.gold},state:'stUgRUX',insideLoop:true,index:"" +iixaw5});
let cmpeNGl = this._lc('cj4konPn0', {parent:component,props:{timestamp:reward.createdAt.timestamp},attrs:{class:'created-at'},state:'stUgRUX',insideLoop:true,index:"" +iixaw5});
ec('div');
ec('div');
}ec('div');
let elVa7nt = eo('div','fC0ff'+iixaw5,null,`class`,`col-2 m-t-1`);
let eldW2fy = eo('button','Ii8ff'+iixaw5,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemReward(reward, index)}]},`class`,`collect-btn`);
text(`Collect`);
ec('button');
ec('div');
ec('li');
let elHG9u8 = ev('hr','HO3sQhx4TSPw' + index+iixaw5,null,`class`,`separator`);
}
ec('ul');
let elC9AAL = eo('div',null,null,`class`,`rewards-footer`);
let elT17CU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemAll()}]},`class`,`collect-btn redeem-all-btn`);
text(`Redeem All`);
ec('button');
ec('div');
}else { 
let elCCTdr = eo('div',null,null,`class`,`no-results`);
text(`You rewards yet.`);
ec('div');
}}ec('section');

                    this.isReadyToGo();
                }
        });