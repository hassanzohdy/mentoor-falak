_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {cwoEGrGEu:'gold-icon',cpTbKUBJw:'gold-icon'},
                render: function (component) {
                    let elHqkuT = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let elAMpdL = eo('div',null,null,`class`,`track-card`);
let elHwpue = eo('div',null,null,`class`,`card`);
let cndq7V1 = component.isSubscriable();
this.setState('stcmjsE', cndq7V1);
let cndifXF = component.track.subscribed;
this.setState('stKhFMw', cndifXF);
let cndAdI0 = !(cndq7V1||cndifXF);
this.setState('stnQlOG', cndAdI0);
if (cndq7V1) { 
let elp8w7F = eo('span','SDCf',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cndifXF) { 
let elyxpLh = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let elA1aZq = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}else { 
let elIhfVx = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let elwZAIl = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('div');
}let elSCZJ_ = eo('div');
let elJk7_6 = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let elVKEU0 = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let el3tBFa = eo('a');
let elCzJvM = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let elZW15B = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elyTXEe = eo('span',null,null,`class`,`trackSingleMeta`);
let elfZOUC = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let ely0pJg = eo('span',null,null,`class`,`trackSingleMeta`);
let cndTWkO = component.track.cost ==0;
this.setState('stm1k0s', cndTWkO);
if (cndTWkO) { 
let eln3qKk = eo('strong','nSsf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpBTwE = this._lc('cwoEGrGEu', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elPwIcD = eo('div',null,null,`class`,`trackInfo`);
let el3zqyC = eo('div',null,null,`class`,`trackInfoTitle`);
let elpxAOR = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elCeHBA = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let elPmFp6 = eo('div',null,null,`class`,`trackInfoDescription`);
let ellQgih = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elj2C5m = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elTsdHq = eo('span',null,null,`class`,`trackSingleMeta`);
let el_Yyd1 = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let elghnBf = eo('span',null,null,`class`,`trackSingleMeta`);
let cndtAZT = component.track.cost ==0;
this.setState('stnLgx0', cndtAZT);
if (cndtAZT) { 
let elSJQB5 = eo('strong','r0kf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpaQAT = this._lc('cpTbKUBJw', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let el1gnUl = eo('div',null,null,`class`,`trackPreview`);
let elULcN9 = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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