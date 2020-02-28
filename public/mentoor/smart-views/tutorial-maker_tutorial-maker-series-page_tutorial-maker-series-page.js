_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let elWReSX = eo('div',null,null,`class`,`dark`);
let eltOX1u = eo('div',null,null,`class`,`fb-page`);
let ellAc8P = eo('i',null,null,`class`,`${fas('facebook')} icon`);
ec('i');
let elDYFdh = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let eloGi3Y = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let el1Ia_x = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let el7kgON = eo('h1',null,null,`class`,`master`);
let elDIoi6 = eo('i',null,null,`class`,`${fas('tint')} icon icon`);
ec('i');
let elokaMi = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elZrqk1 = eo('i',null,null,`class`,`${fas('shield')} icon`);
ec('i');
ec('h1');
let elstPKv = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let iigyGa = '09PdJWF' + i;
let elpwVzv = eo('li','vpfFE5EnE7Co' + i+iigyGa,null,`class`,` ${cls({active: item == component.current, done: component.done.includes(item)})}`);
let cndnHIo = component.done.includes(item);
this.setState('stFDOMA', cndnHIo);
if (cndnHIo) { 
let elmIpA7 = eo('i','iw2ff'+iigyGa,null,`class`,`${fas('check-circle')} icon`);
ec('i');
}let cndW10J = item == component.current;
this.setState('stxWLPa', cndW10J);
if (cndW10J) { 
let elpE2zt = eo('i','mZ2ff'+iigyGa,null,`class`,`${fas('hand-point-right')} icon`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let el4RanW = eo('div',null,null,`class`,`overlay`);
ec('div');
let elnDarW = eo('h4',null,null,`class`,`hashtag`);
let elKt3Az = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let el23PV8 = eo('div',null,null,`id`,`logo`);
let elZRP4z = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elYIrVB = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });