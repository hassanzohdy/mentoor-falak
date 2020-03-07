_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {ccMIdI_Vf:'gold-icon',c1Jq1dxhV:'gold-icon'},
                render: function (component) {
                    let elEMmus = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let ello5NP = eo('div',null,null,`class`,`track-card`);
let el70Ikx = eo('div',null,null,`class`,`card`);
let cndFSgr = component.isSubscriable();
this.setState('st5m1Kn', cndFSgr);
let cndAfd7 = component.track.subscribed;
this.setState('stV4ck2', cndAfd7);
let cndfwr6 = !(cndFSgr||cndAfd7);
this.setState('stt7vbQ', cndfwr6);
if (cndFSgr) { 
let eleBPgE = eo('span','Aqyf',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cndAfd7) { 
let el18DQF = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let el8iucD = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}else { 
let elSIV4Z = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let elJD7bs = eo('i',null,null,`class`,`${fas('lock')} lock-icon icon`);
ec('i');
ec('div');
}let ellWFkI = eo('div');
let el91u2A = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let elWoPAn = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let elCfTgx = eo('a');
let elLAylP = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let elZOFbl = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elcdBXY = eo('span',null,null,`class`,`trackSingleMeta`);
let eljHyU0 = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let elPp8ZT = eo('span',null,null,`class`,`trackSingleMeta`);
let cndLfUJ = component.track.cost ==0;
this.setState('stL0dGE', cndLfUJ);
if (cndLfUJ) { 
let elQMQS7 = eo('strong','LyQf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmph3fS = this._lc('ccMIdI_Vf', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elNB7tK = eo('div',null,null,`class`,`trackInfo`);
let eli1f_v = eo('div',null,null,`class`,`trackInfoTitle`);
let elbxnD1 = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elVABSv = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let elL_HNA = eo('div',null,null,`class`,`trackInfoDescription`);
let eltyXDc = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elLUgrG = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elcl_5K = eo('span',null,null,`class`,`trackSingleMeta`);
let elRB8Ot = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let elrUe9Y = eo('span',null,null,`class`,`trackSingleMeta`);
let cndQAdU = component.track.cost ==0;
this.setState('st5qqT2', cndQAdU);
if (cndQAdU) { 
let elKsNKy = eo('strong','5qpf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpcFpB = this._lc('c1Jq1dxhV', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let elNqL8g = eo('div',null,null,`class`,`trackPreview`);
let elipKuA = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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