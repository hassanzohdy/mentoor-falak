_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cgOUDP4kY:'flk-spinner',cbBhj55vv:'track-card',c2OAZivYV:'layout'},
                render: function (component) {
                    let cmpivoC = this._lc('c2OAZivYV', {parent:component,content:(layout) => {let cndzvVP = component.isLoading;
this.setState('stRhIR9', cndzvVP);
let cnd2y2W = !Is.empty(component.tracks);
this.setState('st6kUgE', cnd2y2W);
let cndhW3s = !(cndzvVP||cnd2y2W);
this.setState('stC2Xtb', cndhW3s);
if (cndzvVP) { 
let cmptlPh = this._lc('cgOUDP4kY', {parent:component,parentTop:layout,state:'stRhIR9'});
}else if (cnd2y2W) { 
let el9v2nY = eo('div',null,null,`class`,`row allTracks`);
let elTkEma = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iigKM9 = '8YjTjDs' + i;
let cmpG9Is = this._lc('cbBhj55vv', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'st6kUgE',insideLoop:true,index:"" +iigKM9});
}
ec('div');
}else { 
let elyBUtF = eo('h1');
text(`No tracks yet!`);
ec('h1');
let ela0N4U = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let elStCze = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });