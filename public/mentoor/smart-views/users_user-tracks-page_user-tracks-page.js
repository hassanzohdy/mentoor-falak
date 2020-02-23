_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {c8k_v2qCb:'flk-spinner',cZoaAcRKp:'track-card',ct0R7u11y:'layout'},
                render: function (component) {
                    let cmppTss = this._lc('ct0R7u11y', {parent:component,content:(layout) => {let cndEr7V = component.isLoading;
this.setState('stq03eO', cndEr7V);
let cndAxlz = !Is.empty(component.tracks);
this.setState('stvt35C', cndAxlz);
let cndyoGZ = !(cndEr7V||cndAxlz);
this.setState('stelC5O', cndyoGZ);
if (cndEr7V) { 
let cmpj2DS = this._lc('c8k_v2qCb', {parent:component,parentTop:layout,state:'stq03eO'});
}else if (cndAxlz) { 
let elZKrFN = eo('div',null,null,`class`,`row allTracks`);
let elyIMXH = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiXC6x = 'Qm_gPN8' + i;
let cmpubKY = this._lc('cZoaAcRKp', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stvt35C',insideLoop:true,index:"" +iiXC6x});
}
ec('div');
}else { 
let el0ZoYf = eo('h1');
text(`No tracks yet!`);
ec('h1');
let elxNMtS = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let el4wwD2 = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });