_Component({
                selector: 'tracks-list-page',
                c: 'TracksListPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cXcjswfS0:'flk-spinner',cUPJWRo3K:'flk-facebook-share',cRm3tO7vy:'track-card',csn0I8_cJ:'layout'},
                render: function (component) {
                    let cmp7PEW = this._lc('csn0I8_cJ', {parent:component,content:(layout) => {let cnd4xMk = component.isLoading;
this.setState('stQilnF', cnd4xMk);
let cndNGn4 = !(cnd4xMk);
this.setState('stnPJl7', cndNGn4);
if (cnd4xMk) { 
let cmp7jgZ = this._lc('cXcjswfS0', {parent:component,parentTop:layout,state:'stQilnF'});
}else { 
let elOjaD_ = eo('h1');
text(`Academy`);
ec('h1');
let elA8Git = eo('p');
text(`Here you'll learn how to enhance your search, how to write, read English amd Code.`);
ec('p');
let cmpBqMj = this._lc('cUPJWRo3K', {parent:component,parentTop:layout,state:'stnPJl7'});
let cnde_3q = ! Is.empty(component.tracks);
this.setState('stE0PIc', cnde_3q);
let cndVWXu = !(cnde_3q);
this.setState('stQudbM', cndVWXu);
if (cnde_3q) { 
let elqF82a = eo('div','6H6f',null,`class`,`row allTracks`);
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iifAqZ = '1vWL7t5' + i;
let cmp4vQ1 = this._lc('cRm3tO7vy', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stE0PIc',insideLoop:true,index:"" +iifAqZ});
}
ec('div');
}else { 
let elUGJx6 = eo('h1',null,null,`class`,`bold text-center`);
text(`No tracks yet!`);
ec('h1');
}}}});

                    this.isReadyToGo();
                }
        });