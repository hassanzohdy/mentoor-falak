_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {cDWV2cSPl:'flk-audio-player',c2kfJ5gQs:'flk-audio-recorder'},
                render: function (component) {
                    let elhjxzu = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cndXocP = component.recordSrc || component.data[component.recordKey];
this.setState('stGYIeP', cndXocP);
if (cndXocP) { 
let cmpOxm1 = this._lc('cDWV2cSPl', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'stGYIeP'});
}let cmp1Zzl = this._lc('c2kfJ5gQs', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cndSPIz = component.recordData;
this.setState('stRJIMc', cndSPIz);
if (cndSPIz) { 
let eleR1Jt = eo('button','_eyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let el4IlJH = eo('i','kKJf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });