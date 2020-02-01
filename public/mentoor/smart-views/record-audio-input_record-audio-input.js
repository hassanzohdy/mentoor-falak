_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {c39x2ZaaK:'flk-audio-player',cmOogXrkC:'flk-audio-recorder'},
                render: function (component) {
                    let elNCSD2 = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cndmg6u = component.recordSrc || component.data[component.recordKey];
this.setState('stdHdAE', cndmg6u);
if (cndmg6u) { 
let cmp8iEN = this._lc('c39x2ZaaK', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'stdHdAE'});
}let cmpqVgW = this._lc('cmOogXrkC', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cndHzK3 = component.recordData;
this.setState('stAsvDJ', cndHzK3);
if (cndHzK3) { 
let elaGy6h = eo('button','MIxf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elQFrMc = eo('i','D4Gf',null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });