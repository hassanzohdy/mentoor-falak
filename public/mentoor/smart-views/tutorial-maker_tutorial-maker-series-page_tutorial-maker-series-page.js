_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let elc9RZz = eo('div',null,null,`class`,`dark`);
let elQCNe3 = eo('div',null,null,`class`,`fb-page`);
let elZrZGw = eo('i',null,null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elb2qqo = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let eloPy33 = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elrGUDI = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let elWYFTJ = eo('h1',null,null,`class`,`master`);
let elVIVkb = eo('i',null,null,`class`,`${fas('tint') + ' icon icon'}`);
ec('i');
let elYEUSn = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elVnvE2 = eo('i',null,null,`class`,`${fas('shield') + ' icon'}`);
ec('i');
ec('h1');
let el2qvzv = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let iioAUF = 'H6851q5' + i;
let elz53_z = eo('li','ih8JOeJbeGSM' + i+iioAUF);
elz53_z.cls = {active: item == component.current, done: component.done.includes(item)};

            for (let className in elz53_z.cls) {
                elz53_z.classList.toggle(className, elz53_z.cls[className]);
            }  
            let cndTcWI = component.done.includes(item);
this.setState('stQuBdR', cndTcWI);
if (cndTcWI) { 
let elRPRKY = eo('i','SNDff'+iioAUF,null,`class`,`${fas('check-circle') + ' icon'}`);
ec('i');
}let cnd2ys7 = item == component.current;
this.setState('st2IESq', cnd2ys7);
if (cnd2ys7) { 
let elcUnn2 = eo('i','sHhff'+iioAUF,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let ellCcLg = eo('div',null,null,`class`,`overlay`);
ec('div');
let elsLmLh = eo('h4',null,null,`class`,`hashtag`);
let elZUmE2 = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elSRo31 = eo('div',null,null,`id`,`logo`);
let el2BYKO = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elb7yKM = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });