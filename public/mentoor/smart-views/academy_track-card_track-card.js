_Component({
                selector: 'track-card',
                c: 'TrackCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isSubscriable','track'],
                children: {cq_UeCOn9:'gold-icon',c6jskldH6:'gold-icon'},
                render: function (component) {
                    let elDJ2vF = eo('div',null,null, 'style', this.__info.style || {}, eventListeners, mergeEvents({}, this.__info.events), boolAttrs, Object.merge({}, this.__info.boolAttrs || {}),...normalAttrs(Object.merge({}, this.__info.attrs || {})));
let elzxc1x = eo('div',null,null,`class`,`track-card`);
let elEtt3k = eo('div',null,null,`class`,`card`);
let cndeFOe = component.isSubscriable();
this.setState('stKRKE6', cndeFOe);
let cndRGz3 = component.track.subscribed;
this.setState('stmUq5Y', cndRGz3);
let cndtBdx = !(cndeFOe||cndRGz3);
this.setState('stk98xR', cndtBdx);
if (cndeFOe) { 
let el7Vacw = eo('span','o41f',null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right`);
text(`!`);
ec('span');
}else if (cndRGz3) { 
let elKipaf = eo('div',null,null,`title`,`${trans(`Subscribed`)}`,`class`,`purchased-wrapper top-right`);
let elKW0bC = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}else { 
let elFHj3h = eo('div',null,null,`title`,`${trans(`can-not-unlock`)}`,`class`,`unlocked top-right`);
let elgsYL1 = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('div');
}let elr3y0r = eo('div');
let elItkFk = ev('img',null,null,`src`,`${component.track.image}`,`class`,`imgTrack`);
ec('div');
let elAZuHr = eo('div',null,null,`class`,`trackInfoTitle card-body`);
let eliNiIP = eo('a');
let elnQoLZ = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
let elKc92v = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 border-top`);
let el_7Pir = eo('span',null,null,`class`,`trackSingleMeta`);
let eleNUPg = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${component.track.topics.length} Topics`);
ec('span');
let elc9R5K = eo('span',null,null,`class`,`trackSingleMeta`);
let cndNGrZ = component.track.cost ==0;
this.setState('stMUVsq', cndNGrZ);
if (cndNGrZ) { 
let el33uqc = eo('strong','d84f',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmpZ31Q = this._lc('cq_UeCOn9', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
ec('div');
let elACJyS = eo('div',null,null,`class`,`trackInfo`);
let elol1Ml = eo('div',null,null,`class`,`trackInfoTitle`);
let elLoo_5 = eo('a',null,null,`href`,`${URLS.track(component.track)}`);
let el7qxEv = eo('h4',null,null,`class`,`text-capitalize`);
text(component.track.name);
ec('h4');
ec('a');
ec('div');
let elnW4oe = eo('div',null,null,`class`,`trackInfoDescription`);
let eldLaRr = eo('p',null,null,`class`,`pt-4`);
text(component.track.description);
ec('p');
ec('div');
let elVByV_ = eo('div',null,null,`class`,`trackInfoMeta d-flex justify-content-between pt-4 pb-4`);
let eldtAgP = eo('span',null,null,`class`,`trackSingleMeta`);
let elDabg9 = eo('i',null,null,`class`,`ti ti-list`);
ec('i');
text(`${ component.track.topics.length } Topics`);
ec('span');
let elRZ2C4 = eo('span',null,null,`class`,`trackSingleMeta`);
let cndQkuj = component.track.cost ==0;
this.setState('stJUhSh', cndQkuj);
if (cndQkuj) { 
let elx8zc3 = eo('strong','OQIf',null,`class`,`pink-text`);
text(`FREE`);
ec('strong');
}let cmp7ix3 = this._lc('c6jskldH6', {parent:component,props:{coins:component.track.cost}});
ec('span');
ec('div');
let eld6Mdm = eo('div',null,null,`class`,`trackPreview`);
let elyeB09 = eo('a',null,null,`href`,`${URLS.track(component.track)}`,`class`,`btn btn-primary btn-block`);
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