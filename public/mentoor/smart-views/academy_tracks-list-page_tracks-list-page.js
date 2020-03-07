_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cUTLvEkKl:'flk-spinner',cf7sp72mL:'flk-facebook-share',cWsxge_s4:'track-card',cSOet81MW:'layout'},
                render: function (component) {
                    let cmp1BYC = this._lc('cSOet81MW', {parent:component,content:(layout) => {let cndi41R = component.isLoading;
this.setState('stCYmU9', cndi41R);
let cndA7mF = !(cndi41R);
this.setState('st8oRVz', cndA7mF);
if (cndi41R) { 
let cmpzsZa = this._lc('cUTLvEkKl', {parent:component,parentTop:layout,state:'stCYmU9'});
}else { 
let elvCBik = eo('h1');
text(`Academy`);
ec('h1');
let elpcMRj = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmpLa8m = this._lc('cf7sp72mL', {parent:component,parentTop:layout,state:'st8oRVz'});
let cndSVkz = ! Is.empty(component.tracks);
this.setState('stj1xiF', cndSVkz);
let cndKeuy = !(cndSVkz);
this.setState('stmSu_a', cndKeuy);
if (cndSVkz) { 
let eliagtu = eo('div','yrxf',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let ii7O87 = '5P41EGx' + i;
let cmpr4yN = this._lc('cWsxge_s4', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stj1xiF',insideLoop:true,index:"" +ii7O87});
}
ec('div');
}else { 
let elc3FGC = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });