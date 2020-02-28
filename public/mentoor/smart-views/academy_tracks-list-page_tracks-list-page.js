_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {clSDSTyj3:'flk-spinner',c4_AOmy2U:'flk-facebook-share',cQmRiQgbr:'track-card',cxt5443lE:'layout'},
                render: function (component) {
                    let cmpaRlR = this._lc('cxt5443lE', {parent:component,content:(layout) => {let cndE3nR = component.isLoading;
this.setState('stKyl2S', cndE3nR);
let cndZhLk = !(cndE3nR);
this.setState('stmxUUf', cndZhLk);
if (cndE3nR) { 
let cmpbnyM = this._lc('clSDSTyj3', {parent:component,parentTop:layout,state:'stKyl2S'});
}else { 
let elSf8yo = eo('h1');
text(`Academy`);
ec('h1');
let elOeT6q = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmp2P8B = this._lc('c4_AOmy2U', {parent:component,parentTop:layout,state:'stmxUUf'});
let cndTHwu = ! Is.empty(component.tracks);
this.setState('stnxDb4', cndTHwu);
let cndLfik = !(cndTHwu);
this.setState('stDp1ho', cndLfik);
if (cndTHwu) { 
let elp3fR8 = eo('div','x3Mf',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let ii0276 = 'P197HZw' + i;
let cmpcyLG = this._lc('cQmRiQgbr', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stnxDb4',insideLoop:true,index:"" +ii0276});
}
ec('div');
}else { 
let elEzt9n = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });