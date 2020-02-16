_Component({
                selector: 'einstein-chamber-page',
                c: 'EinsteinChamberPage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','puzzle'],
                children: {cnQQhj1mj:'flk-spinner',coaWT1KK5:'layout'},
                render: function (component) {
                    let cmpeulB = this._lc('coaWT1KK5', {parent:component,content:(layout) => {let elPyEln = eo('div');
let el9wqiT = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elHUJXo = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
let elbnVCD = eo('a',null,null,`title`,`${trans(`Shop`)}`,`href`,`/einstein-chamber/shop`,`class`,`m-l-1`);
let elZdKu0 = eo('span',null,null,`class`,`shopping-cart`);
ec('span');
ec('a');
let elNVNPR = eo('a',null,null,`title`,`${trans(`Help`)}`,`href`,`/einstein-chamber/unlock`);
let elC1nKJ = eo('i',null,null,`class`,`${fas('question-circle') + ' fa-2x ml-2 v-middle icon'}`);
ec('i');
ec('a');
let cndyRoN = component.isLoading;
this.setState('stVl2N5', cndyRoN);
let cndAloT = ! component.puzzle;
this.setState('stBtmBe', cndAloT);
if (cndyRoN) { 
let cmpCrRv = this._lc('cnQQhj1mj', {parent:component,parentTop:layout,state:'stVl2N5'});
}else if (cndAloT) { 
let elQykli = eo('h1',null,null,`class`,`m-t-1 text-center`);
text(`No more available puzzles at the moment, please check again later!`);
ec('h1');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });