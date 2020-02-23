_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {ciV0WqTRE:'flk-spinner',cwEIEI_Ti:'flk-facebook-share',cm0twUGJa:'track-card',cAT26ERgH:'layout'},
                render: function (component) {
                    let cmpBRuw = this._lc('cAT26ERgH', {parent:component,content:(layout) => {let cndX2n3 = component.isLoading;
this.setState('stdtZZ1', cndX2n3);
let cnd6KyU = !(cndX2n3);
this.setState('stnOAtH', cnd6KyU);
if (cndX2n3) { 
let cmpsl5r = this._lc('ciV0WqTRE', {parent:component,parentTop:layout,state:'stdtZZ1'});
}else { 
let elxkunr = eo('h1');
text(`Academy`);
ec('h1');
let el8X5_G = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmprZfV = this._lc('cwEIEI_Ti', {parent:component,parentTop:layout,state:'stnOAtH'});
let cndLHbt = ! Is.empty(component.tracks);
this.setState('sts7m4r', cndLHbt);
let cnd4y9L = !(cndLHbt);
this.setState('st37EuT', cnd4y9L);
if (cndLHbt) { 
let elHowaf = eo('div','UK8f',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiaUuP = 'BVXYZrg' + i;
let cmpiZrG = this._lc('cm0twUGJa', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'sts7m4r',insideLoop:true,index:"" +iiaUuP});
}
ec('div');
}else { 
let el4mjcA = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });