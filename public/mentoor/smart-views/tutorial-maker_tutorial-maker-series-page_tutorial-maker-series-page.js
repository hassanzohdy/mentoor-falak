_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let elfYxXx = eo('div',null,null,`class`,`dark`);
let elBGUSO = eo('div',null,null,`class`,`fb-page`);
let el4VwZD = eo('i',null,null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elkXKeL = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let elzsbkC = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elvhoG8 = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let elLN4Bm = eo('h1',null,null,`class`,`master`);
let elWnMuP = eo('i',null,null,`class`,`${fas('tint') + ' icon icon'}`);
ec('i');
let elSJTJ3 = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elOoAus = eo('i',null,null,`class`,`${fas('shield') + ' icon'}`);
ec('i');
ec('h1');
let elaEkkh = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let iidByn = '0N_b20W' + i;
let el2utdC = eo('li','yfwErA40DIei' + i+iidByn);
el2utdC.cls = {active: item == component.current, done: component.done.includes(item)};

            for (let className in el2utdC.cls) {
                el2utdC.classList.toggle(className, el2utdC.cls[className]);
            }  
            let cndObLJ = component.done.includes(item);
this.setState('st4mVqQ', cndObLJ);
if (cndObLJ) { 
let el7DVCS = eo('i','X9jff'+iidByn,null,`class`,`${fas('check-circle') + ' icon'}`);
ec('i');
}let cndSG7c = item == component.current;
this.setState('stjWyLB', cndSG7c);
if (cndSG7c) { 
let elWDC7b = eo('i','g0Bff'+iidByn,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let elqMIqa = eo('div',null,null,`class`,`overlay`);
ec('div');
let elV5dbk = eo('h4',null,null,`class`,`hashtag`);
let ell5XV3 = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elaDiyu = eo('div',null,null,`id`,`logo`);
let ell87Xm = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elYdXyA = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });