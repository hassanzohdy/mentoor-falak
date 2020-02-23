_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let elkRwmO = eo('div',null,null,`class`,`dark`);
let elieTR2 = eo('div',null,null,`class`,`fb-page`);
let elJIL1A = eo('i',null,null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let eln19AK = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let elm5Cry = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elqaaQW = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let elWi2Xb = eo('h1',null,null,`class`,`master`);
let eliiWbT = eo('i',null,null,`class`,`${fas('tint') + ' icon icon'}`);
ec('i');
let el4o5d8 = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elgxU4m = eo('i',null,null,`class`,`${fas('shield') + ' icon'}`);
ec('i');
ec('h1');
let ela93Hy = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let iiqQLH = 'UkJGDRb' + i;
let elHs3Ej = eo('li','OS8aBU0cCL8a' + i+iiqQLH);
elHs3Ej.cls = {active: item == component.current, done: component.done.includes(item)};

            for (let className in elHs3Ej.cls) {
                elHs3Ej.classList.toggle(className, elHs3Ej.cls[className]);
            }  
            let cndfFKO = component.done.includes(item);
this.setState('st4WunQ', cndfFKO);
if (cndfFKO) { 
let el_VeHZ = eo('i','3kpff'+iiqQLH,null,`class`,`${fas('check-circle') + ' icon'}`);
ec('i');
}let cndSJF6 = item == component.current;
this.setState('stJl4om', cndSJF6);
if (cndSJF6) { 
let elsZ1Rs = eo('i','5WPff'+iiqQLH,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let eloVlYE = eo('div',null,null,`class`,`overlay`);
ec('div');
let elW8Uut = eo('h4',null,null,`class`,`hashtag`);
let eluqc8C = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elKhGNI = eo('div',null,null,`id`,`logo`);
let elWAZFT = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let el1UZqR = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });