_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {ceArDbsJc:'gold-icon',cosfuxva9:'gold-icon'},
                render: function (component) {
                    let elfvCCL = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let elmSrL_ = eo('div',null,null,`class`,`track-card`);
let elGuK3f = eo('div',null,null,`class`,`card`);
let cndxB_n = component.isSubscriable();
this.setState('styOxp3', cndxB_n);
let cndBAej = component.track.subscribed;
this.setState('stQDLQh', cndBAej);
let cndSm4J = !(cndxB_n||cndBAej);
this.setState('stEyBer', cndSm4J);
if (cndxB_n) { 
let elIbIze = eo('span','Zwuf',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cndBAej) { 
let eli0fad = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let el26fhM = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}else { 
let el5ygbZ = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let elemuIZ = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('div');
}let elIWjdj = eo('div');
let elG6RqC = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let eliWzlU = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let elMRANk = eo('a');
let elUQq86 = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let elts7lh = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let elxTGYD = eo('span',null,null,`class`,`trackSingleMeta`);
let elMRqtn = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let elj6DZQ = eo('span',null,null,`class`,`trackSingleMeta`);
let cndXAp0 = component.track.cost ==0;
this.setState('stg30FC', cndXAp0);
if (cndXAp0) { 
let elel8IR = eo('strong','euEf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpXOSE = this._lc('ceArDbsJc', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elrJyIl = eo('div',null,null,`class`,`trackInfo`);
let elnxdXQ = eo('div',null,null,`class`,`trackInfoTitle`);
let elcopYi = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let elhnL4k = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let elH_NaI = eo('div',null,null,`class`,`trackInfoDescription`);
let elIbp0d = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let ellfJJT = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let elW6WPF = eo('span',null,null,`class`,`trackSingleMeta`);
let el7U0nA = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let el1azRv = eo('span',null,null,`class`,`trackSingleMeta`);
let cndgm9j = component.track.cost ==0;
this.setState('sttHoGN', cndgm9j);
if (cndgm9j) { 
let eldThs8 = eo('strong','YnMf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpatSa = this._lc('cosfuxva9', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let elFT7Qn = eo('div',null,null,`class`,`trackPreview`);
let elLG4HT = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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