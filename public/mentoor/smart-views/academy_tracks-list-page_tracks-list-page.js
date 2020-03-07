_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cffzIreri:'flk-spinner',c1qnDIYzd:'flk-facebook-share',cRCeDRjxL:'track-card',cXssT2phX:'layout'},
                render: function (component) {
                    let cmpT80I = this._lc('cXssT2phX', {parent:component,content:(layout) => {let cnd0aKA = component.isLoading;
this.setState('stenjnQ', cnd0aKA);
let cndWVj6 = !(cnd0aKA);
this.setState('sts21J0', cndWVj6);
if (cnd0aKA) { 
let cmpNfNW = this._lc('cffzIreri', {parent:component,parentTop:layout,state:'stenjnQ'});
}else { 
let elfYFeu = eo('h1');
text(`Academy`);
ec('h1');
let elErVYC = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmpvMAt = this._lc('c1qnDIYzd', {parent:component,parentTop:layout,state:'sts21J0'});
let cndnith = ! Is.empty(component.tracks);
this.setState('st7CFon', cndnith);
let cndcAn0 = !(cndnith);
this.setState('st4dZoN', cndcAn0);
if (cndnith) { 
let elCUneJ = eo('div','srZf',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iioanG = 'eDHyJhD' + i;
let cmpTFgm = this._lc('cRCeDRjxL', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'st7CFon',insideLoop:true,index:"" +iioanG});
}
ec('div');
}else { 
let eljyZig = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });