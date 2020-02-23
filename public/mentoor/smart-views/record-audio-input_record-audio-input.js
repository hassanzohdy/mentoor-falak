_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {crBz_hxCC:'flk-audio-player',ckpLLIEB8:'flk-audio-recorder'},
                render: function (component) {
                    let elGKBeu = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cndtAc8 = component.recordSrc || component.data[component.recordKey];
this.setState('stBDJ9k', cndtAc8);
if (cndtAc8) { 
let cmpp5KP = this._lc('crBz_hxCC', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'stBDJ9k'});
}let cmpGUo2 = this._lc('ckpLLIEB8', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cndsYPg = component.recordData;
this.setState('st_4wF9', cndsYPg);
if (cndsYPg) { 
let elv8YXB = eo('button','Lzef',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let eleTge1 = eo('i','kW_f',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });