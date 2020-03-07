_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cMj8T6ZUC:'flk-spinner',cqtR6tLHQ:'track-card',cF2BMP8RZ:'layout'},
                render: function (component) {
                    let cmpDibu = this._lc('cF2BMP8RZ', {parent:component,content:(layout) => {let cndomuE = component.isLoading;
this.setState('stwY3BL', cndomuE);
let cnd1s8o = !Is.empty(component.tracks);
this.setState('st4qACg', cnd1s8o);
let cnd84RX = !(cndomuE||cnd1s8o);
this.setState('st69sq7', cnd84RX);
if (cndomuE) { 
let cmpn9To = this._lc('cMj8T6ZUC', {parent:component,parentTop:layout,state:'stwY3BL'});
}else if (cnd1s8o) { 
let elGVMyT = eo('div',null,null,`class`,`row allTracks`);
let elLlQET = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let ii_unp = 'OvtY_DB' + i;
let cmpXg31 = this._lc('cqtR6tLHQ', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'st4qACg',insideLoop:true,index:"" +ii_unp});
}
ec('div');
}else { 
let elI1iMI = eo('h1');
text(`No tracks yet!`);
ec('h1');
let el_fyrt = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let elTpYzv = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });