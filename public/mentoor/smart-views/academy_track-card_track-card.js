_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {cPI5O9ikV:'gold-icon',cx5ANyZ_V:'gold-icon'},
                render: function (component) {
                    let ela_AHw = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let elZbecz = eo('div',null,null,`class`,`track-card`);
let el2SSng = eo('div',null,null,`class`,`card`);
let cnd8F0a = component.isSubscriable();
this.setState('stnUUTj', cnd8F0a);
let cndfCXX = component.track.subscribed;
this.setState('st92y73', cndfCXX);
let cndkx9U = !(cnd8F0a||cndfCXX);
this.setState('stwhFzg', cndkx9U);
if (cnd8F0a) { 
let elZxX_3 = eo('span','WkQf',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cndfCXX) { 
let elu991U = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let elSBJS2 = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}else { 
let elgnAhE = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let elNg4gb = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('div');
}let elnP1R2 = eo('div');
let elY0W9k = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let elE53lL = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let elvuVVi = eo('a');
let elePJiO = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let el_T9uP = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let el9zUjz = eo('span',null,null,`class`,`trackSingleMeta`);
let elCqK4F = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let el3fXaH = eo('span',null,null,`class`,`trackSingleMeta`);
let cnd5qA1 = component.track.cost ==0;
this.setState('stcTyp0', cnd5qA1);
if (cnd5qA1) { 
let elsL3MX = eo('strong','QbFf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmp2cKm = this._lc('cPI5O9ikV', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let el7rVxT = eo('div',null,null,`class`,`trackInfo`);
let eleKRCO = eo('div',null,null,`class`,`trackInfoTitle`);
let elun56v = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elJV4ku = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let elt9Nh8 = eo('div',null,null,`class`,`trackInfoDescription`);
let elOjJND = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elDpnvr = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elGyQUZ = eo('span',null,null,`class`,`trackSingleMeta`);
let el8wroF = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let elKS3sM = eo('span',null,null,`class`,`trackSingleMeta`);
let cndZETJ = component.track.cost ==0;
this.setState('stobudp', cndZETJ);
if (cndZETJ) { 
let elCQARh = eo('strong','6Ljf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpNm5c = this._lc('cx5ANyZ_V', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let elm1wgX = eo('div',null,null,`class`,`trackPreview`);
let elSlM_B = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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