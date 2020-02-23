_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {c_RKUKyPS:'gold-icon',cwgSywv6A:'gold-icon'},
                render: function (component) {
                    let elLMEW7 = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let el2IlWR = eo('div',null,null,`class`,`track-card`);
let elHqj_5 = eo('div',null,null,`class`,`card`);
let cndHoVT = component.isSubscriable();
this.setState('st8DnG9', cndHoVT);
let cnd1kgO = component.track.subscribed;
this.setState('strueQc', cnd1kgO);
let cnd3mJ2 = !(cndHoVT||cnd1kgO);
this.setState('stj0bC8', cnd3mJ2);
if (cndHoVT) { 
let elfxqNj = eo('span','GRPf',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cnd1kgO) { 
let elgFm3D = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let elrpjTA = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}else { 
let els94c8 = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let elywYzt = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('div');
}let el1Pbmx = eo('div');
let elfLfNf = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let elvPVCa = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let eln4eo6 = eo('a');
let elnp9QW = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let el9m93x = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elMWFfU = eo('span',null,null,`class`,`trackSingleMeta`);
let elzjpvG = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let el2sZSt = eo('span',null,null,`class`,`trackSingleMeta`);
let cndum8B = component.track.cost ==0;
this.setState('stJhArf', cndum8B);
if (cndum8B) { 
let elW8Vyo = eo('strong','qFnf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpwLGL = this._lc('c_RKUKyPS', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elJ9h3v = eo('div',null,null,`class`,`trackInfo`);
let elN4jVf = eo('div',null,null,`class`,`trackInfoTitle`);
let elxgif_ = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elHRviq = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let elpkDRm = eo('div',null,null,`class`,`trackInfoDescription`);
let elW86E7 = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elniZNg = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elzjBB2 = eo('span',null,null,`class`,`trackSingleMeta`);
let elOSBh4 = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let el0txSI = eo('span',null,null,`class`,`trackSingleMeta`);
let cnd4vfj = component.track.cost ==0;
this.setState('stgbjle', cnd4vfj);
if (cnd4vfj) { 
let elneRlN = eo('strong','3eRf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmp_psq = this._lc('cwgSywv6A', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let elgaWh6 = eo('div',null,null,`class`,`trackPreview`);
let el8aN5U = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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