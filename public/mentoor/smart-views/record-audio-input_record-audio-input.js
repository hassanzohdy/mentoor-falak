_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {cipv0DUNg:'flk-audio-player',cdrtv5etz:'flk-audio-recorder'},
                render: function (component) {
                    let elWAfkr = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cndJk02 = component.recordSrc || component.data[component.recordKey];
this.setState('stq2Q6T', cndJk02);
if (cndJk02) { 
let cmpiIxf = this._lc('cipv0DUNg', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'stq2Q6T'});
}let cmps5uG = this._lc('cdrtv5etz', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cndHdhD = component.recordData;
this.setState('stWKYSu', cndHdhD);
if (cndHdhD) { 
let elOLjHP = eo('button','kiSf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elpWvRm = eo('i','ZSaf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });