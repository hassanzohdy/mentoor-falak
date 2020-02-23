_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let el4xB8i = eo('div',null,null,`class`,`dark`);
let elqjxQo = eo('div',null,null,`class`,`fb-page`);
let el5y3xo = eo('i',null,null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let el89kZY = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let elATS_3 = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elVPEJQ = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let elJMb9R = eo('h1',null,null,`class`,`master`);
let elYD9H0 = eo('i',null,null,`class`,`${fas('tint') + ' icon icon'}`);
ec('i');
let elqrWeh = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elgtl9e = eo('i',null,null,`class`,`${fas('shield') + ' icon'}`);
ec('i');
ec('h1');
let el8wMsY = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let ii47I5 = 'Yo2qmxT' + i;
let elpNz0D = eo('li','i62CLoageA0B' + i+ii47I5);
elpNz0D.cls = {active: item == component.current, done: component.done.includes(item)};

            for (let className in elpNz0D.cls) {
                elpNz0D.classList.toggle(className, elpNz0D.cls[className]);
            }  
            let cndtYQR = component.done.includes(item);
this.setState('stI3hkt', cndtYQR);
if (cndtYQR) { 
let elYgBCG = eo('i','UNdff'+ii47I5,null,`class`,`${fas('check-circle') + ' icon'}`);
ec('i');
}let cndXS_G = item == component.current;
this.setState('stO0TS9', cndXS_G);
if (cndXS_G) { 
let el8ASR1 = eo('i','0kdff'+ii47I5,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let elaDjtB = eo('div',null,null,`class`,`overlay`);
ec('div');
let eldUaZK = eo('h4',null,null,`class`,`hashtag`);
let elDiw2Z = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elXWh11 = eo('div',null,null,`id`,`logo`);
let elAltLI = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elAQ3M0 = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });