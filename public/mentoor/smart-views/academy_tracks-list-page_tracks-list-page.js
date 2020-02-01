_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cO2JBz25F:'flk-spinner',cwbtBdSYe:'flk-facebook-share',cD8PN6d6I:'track-card',cLUzYmbtQ:'layout'},
                render: function (component) {
                    let cmpjDW4 = this._lc('cLUzYmbtQ', {parent:component,content:(layout) => {let cnd3DWL = component.isLoading;
this.setState('stolqlW', cnd3DWL);
let cndlc9l = !(cnd3DWL);
this.setState('stRMp9e', cndlc9l);
if (cnd3DWL) { 
let cmpGgtF = this._lc('cO2JBz25F', {parent:component,parentTop:layout,state:'stolqlW'});
}else { 
let elUn8hF = eo('h1');
text(`Academy`);
ec('h1');
let elGOVcs = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmp8BHR = this._lc('cwbtBdSYe', {parent:component,parentTop:layout,state:'stRMp9e'});
let cndpn_y = ! Is.empty(component.tracks);
this.setState('stMhV5S', cndpn_y);
let cndcIjm = !(cndpn_y);
this.setState('stiMmjm', cndcIjm);
if (cndpn_y) { 
let elTxTHA = eo('div','UEzf',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiHV9Y = 'AntMOBJ' + i;
let cmpzGGv = this._lc('cD8PN6d6I', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stMhV5S',insideLoop:true,index:"" +iiHV9Y});
}
ec('div');
}else { 
let elKX3C6 = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });