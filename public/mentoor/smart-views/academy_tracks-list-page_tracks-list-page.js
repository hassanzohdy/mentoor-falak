_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cmsTisrft:'flk-spinner',cgUvvGCQ9:'flk-facebook-share',cXmxK7hNo:'track-card',cflmryyBi:'layout'},
                render: function (component) {
                    let cmpEv0s = this._lc('cflmryyBi', {parent:component,content:(layout) => {let cndVm8q = component.isLoading;
this.setState('stlMzjJ', cndVm8q);
let cndWW3L = !(cndVm8q);
this.setState('stZrsIH', cndWW3L);
if (cndVm8q) { 
let cmpOV6m = this._lc('cmsTisrft', {parent:component,parentTop:layout,state:'stlMzjJ'});
}else { 
let el5ffZb = eo('h1');
text(`Academy`);
ec('h1');
let elRb9Tt = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmpxYM7 = this._lc('cgUvvGCQ9', {parent:component,parentTop:layout,state:'stZrsIH'});
let cndgDQx = ! Is.empty(component.tracks);
this.setState('stL6cIG', cndgDQx);
let cnd9v8c = !(cndgDQx);
this.setState('stCq3Gk', cnd9v8c);
if (cndgDQx) { 
let elfXT7A = eo('div','9Aef',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let ii6yf3 = 'vVODmWO' + i;
let cmpwClp = this._lc('cXmxK7hNo', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stL6cIG',insideLoop:true,index:"" +ii6yf3});
}
ec('div');
}else { 
let elkMQCE = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });