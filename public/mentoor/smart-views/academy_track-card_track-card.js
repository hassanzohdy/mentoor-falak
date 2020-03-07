_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {c1PuQ4xrG:'gold-icon',cq3cJKSY1:'gold-icon'},
                render: function (component) {
                    let elKAI9e = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let eljoMO6 = eo('div',null,null,`class`,`track-card`);
let elEtP_B = eo('div',null,null,`class`,`card`);
let cndAldr = component.isSubscriable();
this.setState('stuETkv', cndAldr);
let cndtb07 = component.track.subscribed;
this.setState('stpiiNx', cndtb07);
let cndVO01 = !(cndAldr||cndtb07);
this.setState('stVqoxo', cndVO01);
if (cndAldr) { 
let elnMC3U = eo('span','7aSf',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cndtb07) { 
let elV7PF5 = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let eloTqgd = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}else { 
let elGiE5D = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let el8UJj6 = eo('i',null,null,`class`,`${fas('lock')} lock-icon icon`);
ec('i');
ec('div');
}let elJvqJf = eo('div');
let el8U04o = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let elpy8qT = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let elNL3Kw = eo('a');
let elbm6ca = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let elExp3p = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let eluFlZ2 = eo('span',null,null,`class`,`trackSingleMeta`);
let el1fJXc = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let elS66PG = eo('span',null,null,`class`,`trackSingleMeta`);
let cndERgs = component.track.cost ==0;
this.setState('sto6ZGD', cndERgs);
if (cndERgs) { 
let ela1zb0 = eo('strong','Sf_f',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpp0qX = this._lc('c1PuQ4xrG', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elg3Xq7 = eo('div',null,null,`class`,`trackInfo`);
let elJJqhx = eo('div',null,null,`class`,`trackInfoTitle`);
let elu9cuX = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elxsVQ7 = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let eliZXAE = eo('div',null,null,`class`,`trackInfoDescription`);
let elVdgJn = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elBvUbd = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let el5sjR_ = eo('span',null,null,`class`,`trackSingleMeta`);
let el41wsN = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let eldGJZm = eo('span',null,null,`class`,`trackSingleMeta`);
let cnd8Wt1 = component.track.cost ==0;
this.setState('stiB_hl', cnd8Wt1);
if (cnd8Wt1) { 
let elhgxpW = eo('strong','PAWf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpHupG = this._lc('cq3cJKSY1', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let elxERLe = eo('div',null,null,`class`,`trackPreview`);
let elOcd4D = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
text(trans('Preview this track'));
ec('a');
ec('div');
ec('div');
ec('div');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });