_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {ccWvEqkyq:'flk-audio-player',ca8B7WD8g:'flk-audio-recorder'},
                render: function (component) {
                    let elp_s8l = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cnd6Da9 = component.recordSrc || component.data[component.recordKey];
this.setState('st6n6Ah', cnd6Da9);
if (cnd6Da9) { 
let cmpj71M = this._lc('ccWvEqkyq', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'st6n6Ah'});
}let cmpUJXa = this._lc('ca8B7WD8g', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cnddPH1 = component.recordData;
this.setState('st942Z9', cnddPH1);
if (cnddPH1) { 
let el1mzi0 = eo('button','VJef',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elYwyA3 = eo('i','1akf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });