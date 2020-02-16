_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let eltTJDZ = eo('div',null,null,`class`,`dark`);
let elPZUdh = eo('div',null,null,`class`,`fb-page`);
let elxSXGn = eo('i',null,null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elq1IZ_ = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let elaea8i = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elT4a6r = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let el7Fl54 = eo('h1',null,null,`class`,`master`);
let el1g6ZQ = eo('i',null,null,`class`,`${fas('tint') + ' icon icon'}`);
ec('i');
let elGGPrr = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let eloKVxN = eo('i',null,null,`class`,`${fas('shield') + ' icon'}`);
ec('i');
ec('h1');
let elTXThw = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let iix6PO = 'bGjogIx' + i;
let elvxQXr = eo('li','C17ODxBZ75aU' + i+iix6PO);
elvxQXr.cls = {active: item == component.current, done: component.done.includes(item)};

            for (let className in elvxQXr.cls) {
                elvxQXr.classList.toggle(className, elvxQXr.cls[className]);
            }  
            let cndttVb = component.done.includes(item);
this.setState('stSY744', cndttVb);
if (cndttVb) { 
let elaV3_M = eo('i','kyLff'+iix6PO,null,`class`,`${fas('check-circle') + ' icon'}`);
ec('i');
}let cndRbch = item == component.current;
this.setState('stLYmxj', cndRbch);
if (cndRbch) { 
let elD4H7R = eo('i','1edff'+iix6PO,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let eloRtQB = eo('div',null,null,`class`,`overlay`);
ec('div');
let eliZxR5 = eo('h4',null,null,`class`,`hashtag`);
let elT5Riy = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elIhsIV = eo('div',null,null,`id`,`logo`);
let elmQDP1 = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elLklNa = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });