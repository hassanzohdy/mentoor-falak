_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {ccLOfy8ot:'flk-spinner',cNXyapZtW:'track-card',cplAvdqrc:'layout'},
                render: function (component) {
                    let cmphm4I = this._lc('cplAvdqrc', {parent:component,content:(layout) => {let cndKnAz = component.isLoading;
this.setState('stG3SGy', cndKnAz);
let cndGCP4 = !Is.empty(component.tracks);
this.setState('stZXdxc', cndGCP4);
let cndM9WA = !(cndKnAz||cndGCP4);
this.setState('stCCNJP', cndM9WA);
if (cndKnAz) { 
let cmp5o2_ = this._lc('ccLOfy8ot', {parent:component,parentTop:layout,state:'stG3SGy'});
}else if (cndGCP4) { 
let elM8Vjh = eo('div',null,null,`class`,`row allTracks`);
let el_fKEZ = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiiCxI = 'dm_refp' + i;
let cmpSYEj = this._lc('cNXyapZtW', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stZXdxc',insideLoop:true,index:"" +iiiCxI});
}
ec('div');
}else { 
let elh2Jp4 = eo('h1');
text(`No tracks yet!`);
ec('h1');
let el5pWUS = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let elMhKoL = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });