_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {coRWG_7Mv:'gold-icon',c6QF7HGQy:'gold-icon'},
                render: function (component) {
                    let elTqqbE = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let el5QKe5 = eo('div',null,null,`class`,`track-card`);
let eli_Xqe = eo('div',null,null,`class`,`card`);
let cndfgA_ = component.isSubscriable();
this.setState('stSwZNv', cndfgA_);
let cnday9g = component.track.subscribed;
this.setState('stmNGSs', cnday9g);
let cndzBIF = !(cndfgA_||cnday9g);
this.setState('stQPCf9', cndzBIF);
if (cndfgA_) { 
let elsugsm = eo('span','XjSf',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cnday9g) { 
let elU2VSn = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let el4jlI0 = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}else { 
let elCrGU_ = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let el4iyF9 = eo('i',null,null,`class`,`${fas('lock')} lock-icon icon`);
ec('i');
ec('div');
}let elI71Ik = eo('div');
let elVipnx = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let elqQICG = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let el4cmGr = eo('a');
let elwSbYN = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let el0c1iw = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elh3c2b = eo('span',null,null,`class`,`trackSingleMeta`);
let el1Q2EV = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let elYQGUL = eo('span',null,null,`class`,`trackSingleMeta`);
let cnd9fl8 = component.track.cost ==0;
this.setState('stdGFLO', cnd9fl8);
if (cnd9fl8) { 
let eldTIVg = eo('strong','LUsf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmp8jwZ = this._lc('coRWG_7Mv', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elGWbP2 = eo('div',null,null,`class`,`trackInfo`);
let elZbgSC = eo('div',null,null,`class`,`trackInfoTitle`);
let elDRvxG = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elC_tnZ = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let elo89qQ = eo('div',null,null,`class`,`trackInfoDescription`);
let elI0ZiA = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elg1moQ = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elNRPvE = eo('span',null,null,`class`,`trackSingleMeta`);
let elG1hnO = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let elxolNy = eo('span',null,null,`class`,`trackSingleMeta`);
let cndYiHl = component.track.cost ==0;
this.setState('stRkYmS', cndYiHl);
if (cndYiHl) { 
let el2gnlS = eo('strong','cWUf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpZ8Gy = this._lc('c6QF7HGQy', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let el4QVfC = eo('div',null,null,`class`,`trackPreview`);
let elrwuHq = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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