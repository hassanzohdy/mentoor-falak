_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let elsWN_M = eo('div',null,null,`class`,`dark`);
let elCW6gL = eo('div',null,null,`class`,`fb-page`);
let elXkTyG = eo('i',null,null,`class`,`${fas('facebook')} icon`);
ec('i');
let el0fjKc = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let elOuf7J = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elInODK = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let elpKDzK = eo('h1',null,null,`class`,`master`);
let elHdty7 = eo('i',null,null,`class`,`${fas('tint')} icon icon`);
ec('i');
let elzUtpf = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elBWO5P = eo('i',null,null,`class`,`${fas('shield')} icon`);
ec('i');
ec('h1');
let elEWlit = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let iichzf = 'BY9wOWJ' + i;
let elJSwPV = eo('li','SDvyeNnBxqpj' + i+iichzf,null,`class`,` ${cls({active: item == component.current, done: component.done.includes(item)})}`);
let cnd5RIn = component.done.includes(item);
this.setState('st0OoIY', cnd5RIn);
if (cnd5RIn) { 
let elrL_A2 = eo('i','D8mff'+iichzf,null,`class`,`${fas('check-circle')} icon`);
ec('i');
}let cndBoX4 = item == component.current;
this.setState('stG0FBj', cndBoX4);
if (cndBoX4) { 
let el749O5 = eo('i','Tm5ff'+iichzf,null,`class`,`${fas('hand-point-right')} icon`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let elZIh_U = eo('div',null,null,`class`,`overlay`);
ec('div');
let elUjeFY = eo('h4',null,null,`class`,`hashtag`);
let eleKbYN = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elY4GYR = eo('div',null,null,`id`,`logo`);
let elR85_k = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elvmPpg = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });