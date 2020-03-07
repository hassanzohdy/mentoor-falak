_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cn9_ZQfuv:'flk-spinner',cQCWWEpYB:'track-card',cYy5uaInw:'layout'},
                render: function (component) {
                    let cmpMJ6a = this._lc('cYy5uaInw', {parent:component,content:(layout) => {let cndBiDV = component.isLoading;
this.setState('stdO4XZ', cndBiDV);
let cnd3cl1 = !Is.empty(component.tracks);
this.setState('st_oJka', cnd3cl1);
let cndkd6B = !(cndBiDV||cnd3cl1);
this.setState('stMagKU', cndkd6B);
if (cndBiDV) { 
let cmp2Yf7 = this._lc('cn9_ZQfuv', {parent:component,parentTop:layout,state:'stdO4XZ'});
}else if (cnd3cl1) { 
let el6dYmV = eo('div',null,null,`class`,`row allTracks`);
let elxiuEW = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiK5p8 = 'r6GuA5N' + i;
let cmpdMSk = this._lc('cQCWWEpYB', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'st_oJka',insideLoop:true,index:"" +iiK5p8});
}
ec('div');
}else { 
let elNGrlR = eo('h1');
text(`No tracks yet!`);
ec('h1');
let elO6490 = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let elb6elZ = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });