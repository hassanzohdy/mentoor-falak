_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {ck0rXDjsX:'flk-spinner',ccT82KKwz:'track-card',c78S0PAh9:'layout'},
                render: function (component) {
                    let cmpXvlh = this._lc('c78S0PAh9', {parent:component,content:(layout) => {let cndJAET = component.isLoading;
this.setState('stWrS00', cndJAET);
let cndWBQl = !Is.empty(component.tracks);
this.setState('st0v1mW', cndWBQl);
let cndp9ZQ = !(cndJAET||cndWBQl);
this.setState('stYbpvl', cndp9ZQ);
if (cndJAET) { 
let cmpWRl3 = this._lc('ck0rXDjsX', {parent:component,parentTop:layout,state:'stWrS00'});
}else if (cndWBQl) { 
let elnI_Kh = eo('div',null,null,`class`,`row allTracks`);
let eluNXRp = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let ii3ExW = '4GfSy13' + i;
let cmpKDlX = this._lc('ccT82KKwz', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'st0v1mW',insideLoop:true,index:"" +ii3ExW});
}
ec('div');
}else { 
let elTU607 = eo('h1');
text(`No tracks yet!`);
ec('h1');
let elLAPDb = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let elGotVh = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });