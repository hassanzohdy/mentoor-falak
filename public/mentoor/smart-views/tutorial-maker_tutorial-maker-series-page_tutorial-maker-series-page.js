_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let eldyT_L = eo('div',null,null,`class`,`dark`);
let eldIoxR = eo('div',null,null,`class`,`fb-page`);
let eldDlZY = eo('i',null,null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elcadx8 = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let elqeupU = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elcc_d_ = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let elFWE1H = eo('h1',null,null,`class`,`master`);
let elJX1qJ = eo('i',null,null,`class`,`${fas('tint') + ' icon icon'}`);
ec('i');
let elX6rQx = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elzJZVH = eo('i',null,null,`class`,`${fas('shield') + ' icon'}`);
ec('i');
ec('h1');
let elntNJa = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let iizQ48 = 'pggKBZH' + i;
let elONu3S = eo('li','6eETztxLNg8F' + i+iizQ48);
elONu3S.cls = {active: item == component.current, done: component.done.includes(item)};

            for (let className in elONu3S.cls) {
                elONu3S.classList.toggle(className, elONu3S.cls[className]);
            }  
            let cndjIIv = component.done.includes(item);
this.setState('stjKJyw', cndjIIv);
if (cndjIIv) { 
let elhhwJR = eo('i','tM0ff'+iizQ48,null,`class`,`${fas('check-circle') + ' icon'}`);
ec('i');
}let cndThpB = item == component.current;
this.setState('stFAgwF', cndThpB);
if (cndThpB) { 
let elhFXy0 = eo('i','XDIff'+iizQ48,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let elMdGi_ = eo('div',null,null,`class`,`overlay`);
ec('div');
let eloCkj8 = eo('h4',null,null,`class`,`hashtag`);
let elivfhG = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elOZwLC = eo('div',null,null,`id`,`logo`);
let elec15H = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elSn6NS = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });