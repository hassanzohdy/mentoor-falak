_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cnaavyVdp:'flk-spinner',cFZKzq_1H:'flk-facebook-share',cagQfx1vy:'track-card',c27GuNEtN:'layout'},
                render: function (component) {
                    let cmprJ_w = this._lc('c27GuNEtN', {parent:component,content:(layout) => {let cnd0gyE = component.isLoading;
this.setState('stQKTQC', cnd0gyE);
let cndH9Ft = !(cnd0gyE);
this.setState('stOWSew', cndH9Ft);
if (cnd0gyE) { 
let cmpaozf = this._lc('cnaavyVdp', {parent:component,parentTop:layout,state:'stQKTQC'});
}else { 
let elBdvUK = eo('h1');
text(`Academy`);
ec('h1');
let el1P_lQ = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmpOvSm = this._lc('cFZKzq_1H', {parent:component,parentTop:layout,state:'stOWSew'});
let cndvs1K = ! Is.empty(component.tracks);
this.setState('st7f1Yu', cndvs1K);
let cndRa_3 = !(cndvs1K);
this.setState('stwOGC4', cndRa_3);
if (cndvs1K) { 
let elZr6Bu = eo('div','_Xcf',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiTkDH = 'pbaa_vj' + i;
let cmpAXUY = this._lc('cagQfx1vy', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'st7f1Yu',insideLoop:true,index:"" +iiTkDH});
}
ec('div');
}else { 
let elV9ewB = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });