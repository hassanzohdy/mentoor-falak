_Component({
                selector: 'tutorial-maker-series-page',
                c: 'TutorialMakerSeriesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['series','current','done'],
                children: {},
                render: function (component) {
                    let eliUnum = eo('div',null,null,`class`,`dark`);
let el_WTBn = eo('div',null,null,`class`,`fb-page`);
let elrND1R = eo('i',null,null,`class`,`${fas('facebook')} icon`);
ec('i');
let el3AFSV = eo('span',null,null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
let eldF04Q = eo('h1',null,null,`class`,`text-center white-text m-b-4`,`id`,`main-text`);
text(`Functional Programming`);
ec('h1');
let elZkSR7 = eo('div',null,null,`class`,`m-t-1`);
ec('div');
let elnqMOc = eo('h1',null,null,`class`,`master`);
let elvR6Mt = eo('i',null,null,`class`,`${fas('tint')} icon icon`);
ec('i');
let el458gK = eo('div',null,null,`class`,`m-t-8`);
ec('div');
text(`Pure functions`);
let elYWJyO = eo('i',null,null,`class`,`${fas('shield')} icon`);
ec('i');
ec('h1');
let eldEgXu = eo('ul',null,null,`id`,`series-list`);
for (let i in component.series) {
let item = component.series[i]; 
 let ii8pHV = 'bBzfxNM' + i;
let elOrFM1 = eo('li','n7SPAqpyLq7l' + i+ii8pHV,null,`class`,` ${cls({active: item == component.current, done: component.done.includes(item)})}`);
let cndyyJP = component.done.includes(item);
this.setState('st3ygKw', cndyyJP);
if (cndyyJP) { 
let elCxhqK = eo('i','NZkff'+ii8pHV,null,`class`,`${fas('check-circle')} icon`);
ec('i');
}let cndtvGb = item == component.current;
this.setState('st9eWyf', cndtvGb);
if (cndtvGb) { 
let elAXZ6e = eo('i','yd5ff'+ii8pHV,null,`class`,`${fas('hand-point-right')} icon`);
ec('i');
}text( item );
ec('li');
}
ec('ul');
let elb1ypm = eo('div',null,null,`class`,`overlay`);
ec('div');
let elT41Ag = eo('h4',null,null,`class`,`hashtag`);
let elHjnjc = eo('div');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let el7NAri = eo('div',null,null,`id`,`logo`);
let elg_5Y1 = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elpQMhi = eo('h1',null,null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });