_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {czMEgDdgj:'flk-audio-player',co70JyErx:'flk-audio-recorder'},
                render: function (component) {
                    let el2RFJd = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cndPPMH = component.recordSrc || component.data[component.recordKey];
this.setState('stdFjj9', cndPPMH);
if (cndPPMH) { 
let cmphGRR = this._lc('czMEgDdgj', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'stdFjj9'});
}let cmpkIBN = this._lc('co70JyErx', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cndUL0E = component.recordData;
this.setState('stOLQ9z', cndUL0E);
if (cndUL0E) { 
let elATURi = eo('button','RABf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let eli2bLB = eo('i','BD1f',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });