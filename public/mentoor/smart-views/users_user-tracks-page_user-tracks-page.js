_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {cxpvOvJBh:'flk-spinner',cazgmGPCN:'track-card',cRHJ1VmgE:'layout'},
                render: function (component) {
                    let cmpKHlL = this._lc('cRHJ1VmgE', {parent:component,content:(layout) => {let cndCpeX = component.isLoading;
this.setState('stC6eA_', cndCpeX);
let cndnQKo = !Is.empty(component.tracks);
this.setState('st9JuEi', cndnQKo);
let cndriga = !(cndCpeX||cndnQKo);
this.setState('stvXpO1', cndriga);
if (cndCpeX) { 
let cmp3sA4 = this._lc('cxpvOvJBh', {parent:component,parentTop:layout,state:'stC6eA_'});
}else if (cndnQKo) { 
let elzl5MQ = eo('div',null,null,`class`,`row allTracks`);
let elO58uf = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let ii2fd7 = '3KL7qPq' + i;
let cmpBYUH = this._lc('cazgmGPCN', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'st9JuEi',insideLoop:true,index:"" +ii2fd7});
}
ec('div');
}else { 
let elhg5lE = eo('h1');
text(`No tracks yet!`);
ec('h1');
let el0I0NW = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let elfporX = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });