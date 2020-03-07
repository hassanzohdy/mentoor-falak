_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {cWG5hF3eb:'flk-audio-player',cVU1w_FAR:'flk-audio-recorder'},
                render: function (component) {
                    let elSkaU8 = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cndVHhV = component.recordSrc || component.data[component.recordKey];
this.setState('stesMXD', cndVHhV);
if (cndVHhV) { 
let cmpHw5L = this._lc('cWG5hF3eb', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'stesMXD'});
}let cmpX1GZ = this._lc('cVU1w_FAR', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cndvvir = component.recordData;
this.setState('stgQevv', cndvvir);
if (cndvvir) { 
let elcq08S = eo('button','0zyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elGp0rX = eo('i','0k3f',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });