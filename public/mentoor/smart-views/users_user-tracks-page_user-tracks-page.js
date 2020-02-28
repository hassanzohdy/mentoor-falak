_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {chaswdvAN:'flk-spinner',caz4Xpr38:'track-card',cOYjCski7:'layout'},
                render: function (component) {
                    let cmpnrQr = this._lc('cOYjCski7', {parent:component,content:(layout) => {let cndD6pz = component.isLoading;
this.setState('stYkyPp', cndD6pz);
let cndb2mH = !Is.empty(component.tracks);
this.setState('stn2tN2', cndb2mH);
let cndNmep = !(cndD6pz||cndb2mH);
this.setState('stGe5Gs', cndNmep);
if (cndD6pz) { 
let cmpHtmR = this._lc('chaswdvAN', {parent:component,parentTop:layout,state:'stYkyPp'});
}else if (cndb2mH) { 
let elhoQkf = eo('div',null,null,`class`,`row allTracks`);
let elGsLCf = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiDVzw = 'rV4O4LM' + i;
let cmpV8KC = this._lc('caz4Xpr38', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stn2tN2',insideLoop:true,index:"" +iiDVzw});
}
ec('div');
}else { 
let elVVEzr = eo('h1');
text(`No tracks yet!`);
ec('h1');
let el9ugOO = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let eljcVRm = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });