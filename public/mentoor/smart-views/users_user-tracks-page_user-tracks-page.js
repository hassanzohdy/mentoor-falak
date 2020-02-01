_Component({
                selector: 'user-tracks-page',
                c: 'UserTracksPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','tracks'],
                children: {clJU0jBYi:'flk-spinner',chnbC9vvo:'track-card',crRWrjZnT:'layout'},
                render: function (component) {
                    let cmpWvaC = this._lc('crRWrjZnT', {parent:component,content:(layout) => {let cndbyFW = component.isLoading;
this.setState('stbLBVW', cndbyFW);
let cnd7yaJ = !Is.empty(component.tracks);
this.setState('stinxqX', cnd7yaJ);
let cnd_Fpv = !(cndbyFW||cnd7yaJ);
this.setState('stfM1RM', cnd_Fpv);
if (cndbyFW) { 
let cmpgKdd = this._lc('clJU0jBYi', {parent:component,parentTop:layout,state:'stbLBVW'});
}else if (cnd7yaJ) { 
let elWlnNE = eo('div',null,null,`class`,`row allTracks`);
let el6bPcH = eo('h1',null,null,`class`,`col-12`);
text(`My tracks`);
ec('h1');
for (let i in component.tracks) {
let track = component.tracks[i]; 
 let iiUufM = 'oI9Y0mx' + i;
let cmpd6T5 = this._lc('chnbC9vvo', {parent:component,parentTop:layout,props:{track:track},attrs:{class:'col-lg-3 col-md-6'},state:'stinxqX',insideLoop:true,index:"" +iiUufM});
}
ec('div');
}else { 
let el9TY_7 = eo('h1');
text(`No tracks yet!`);
ec('h1');
let elefhn3 = eo('p',null,null,`class`,`m-t-1 font-weight-normal`);
text(`Go to`);
let elUw3mi = eo('a',null,null,`href`,`/academy`);
text(`Academy page`);
ec('a');
text(`and subscribe to some tracks!`);
ec('p');
}}});

                    this.isReadyToGo();
                }
        });