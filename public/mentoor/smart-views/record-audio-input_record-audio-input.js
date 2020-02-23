_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {cmiZ_w1CZ:'flk-audio-player',cbY15DrMD:'flk-audio-recorder'},
                render: function (component) {
                    let el2rIF6 = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cnddWNA = component.recordSrc || component.data[component.recordKey];
this.setState('stMidIe', cnddWNA);
if (cnddWNA) { 
let cmpZWuX = this._lc('cmiZ_w1CZ', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'stMidIe'});
}let cmpteyK = this._lc('cbY15DrMD', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cnd84P3 = component.recordData;
this.setState('st8RQ1R', cnd84P3);
if (cnd84P3) { 
let el2RuOk = eo('button','B5qf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elMYx2q = eo('i','ENtf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });