_Component({
                selector: 'record-audio-input',
                c: 'RecordAudioInput', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['recordSrc','data','recordKey','captureRecord','onRecording','recordData','clearRecord'],
                children: {cFlmcmemd:'flk-audio-player',cwzNEkbIz:'flk-audio-recorder'},
                render: function (component) {
                    let elsaf90 = eo('div',null,null,`class`,`form-group ${ component.inputs.getAttr('class') }`);
let cndTzl5 = component.recordSrc || component.data[component.recordKey];
this.setState('st8YKgz', cndTzl5);
if (cndTzl5) { 
let cmpJCIN = this._lc('cFlmcmemd', {parent:component,props:{src:component.recordSrc || component.data[component.recordKey]},attrs:{src:`${component.recordSrc || component.data[component.recordKey]}`},state:'st8YKgz'});
}let cmpZO5l = this._lc('cwzNEkbIz', {parent:component,events:{onrecord:function(e) {let $el = this; component.captureRecord(e)},onstart:function(e) {let $el = this; component.onRecording()}}});
let cnd3jEx = component.recordData;
this.setState('stEMovw', cnd3jEx);
if (cnd3jEx) { 
let elziaHx = eo('button','vYTf',null, eventListeners, {onclick:[function(e) {var $el = this;component.clearRecord(true)}]},`title`,`${trans(`Remove record`)}`,`type`,`button`,`class`,`btn btn-danger btn-sm remove-record-btn`);
let elYdO6K = eo('i','Omuf',null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
}ec('div');

                    this.isReadyToGo();
                }
        });