_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cOpyhgXdZ:'flk-spinner',cRaExUMsr:'flk-facebook-share',cxOKpOvLF:'track-card',cJNhJFjoc:'layout'},
                render: function (component) {
                    let cmp1LZC = this._lc('cJNhJFjoc', {parent:component,content:(layout) => {let cndFrs_ = component.isLoading;
this.setState('stmiYTf', cndFrs_);
let cndkp7Z = !(cndFrs_);
this.setState('stCO6eU', cndkp7Z);
if (cndFrs_) { 
let cmpBrlb = this._lc('cOpyhgXdZ', {parent:component,parentTop:layout,state:'stmiYTf'});
}else { 
let elmyxZA = eo('h1');
text(`Academy`);
ec('h1');
let elToBkh = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmpMvI1 = this._lc('cRaExUMsr', {parent:component,parentTop:layout,state:'stCO6eU'});
let cndhfL1 = ! Is.empty(component.tracks);
this.setState('stQkYC6', cndhfL1);
let cndgseo = !(cndhfL1);
this.setState('stUrhHO', cndgseo);
if (cndhfL1) { 
let el2IdtR = eo('div','Wlof',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let ii9qeI = '1l3idVV' + i;
let cmptmXj = this._lc('cxOKpOvLF', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stQkYC6',insideLoop:true,index:"" +ii9qeI});
}
ec('div');
}else { 
let elpUiyG = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });