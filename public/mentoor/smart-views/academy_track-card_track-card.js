_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {cD7lRKeeP:'gold-icon',cfE06J2BJ:'gold-icon'},
                render: function (component) {
                    let el9vY3W = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let elM4MQD = eo('div',null,null,`class`,`track-card`);
let elles8E = eo('div',null,null,`class`,`card`);
let cndLOkP = component.isSubscriable();
this.setState('steaHKC', cndLOkP);
let cndLPI7 = component.track.subscribed;
this.setState('stPluAG', cndLPI7);
let cndCbPn = !(cndLOkP||cndLPI7);
this.setState('stO5R2g', cndCbPn);
if (cndLOkP) { 
let elEbQIE = eo('span','6b7f',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cndLPI7) { 
let elRBtus = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let elZ7MiY = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}else { 
let el7y7kW = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let elYjlpd = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('div');
}let elfJS17 = eo('div');
let el7qJbX = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let ell2Wvq = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let elDXekz = eo('a');
let el6LEYq = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let eln6p_r = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elZLw9t = eo('span',null,null,`class`,`trackSingleMeta`);
let elm0bdT = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let eltNmVj = eo('span',null,null,`class`,`trackSingleMeta`);
let cndWmng = component.track.cost ==0;
this.setState('sti5CiN', cndWmng);
if (cndWmng) { 
let elUhHNV = eo('strong','nQLf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpxXSb = this._lc('cD7lRKeeP', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elxwt0e = eo('div',null,null,`class`,`trackInfo`);
let elgS5Hs = eo('div',null,null,`class`,`trackInfoTitle`);
let elRKrCr = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elO6Hne = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let el49UEC = eo('div',null,null,`class`,`trackInfoDescription`);
let eltQs00 = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elDaYkn = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elRbQux = eo('span',null,null,`class`,`trackSingleMeta`);
let elYQuIY = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let ellYkEW = eo('span',null,null,`class`,`trackSingleMeta`);
let cndlUtl = component.track.cost ==0;
this.setState('stYoLgl', cndlUtl);
if (cndlUtl) { 
let elkqMIb = eo('strong','2Dxf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpxqfv = this._lc('cfE06J2BJ', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let el8UANe = eo('div',null,null,`class`,`trackPreview`);
let elyMAw3 = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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