_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let elTTyDT = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let el0lS_V = eo('div',null,null,`class`,`text-center m-t-5`);
let elZVqnU = eo('div',null,null,`id`,`logo`);
let elHkQ0w = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elsNqew = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elhvsWh = eo('div',null,null,`id`,`icons`);
let elTvRW4 = eo('h1',null,null,`class`,`icon`);
let el4Tm8d = eo('i',null,null,`class`,`${fas('book-open') + ' icon'}`);
ec('i');
let elv_4K7 = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let elBMB4M = eo('h1',null,null,`class`,`icon`);
let elKNqfm = eo('i',null,null,`class`,`${fas('puzzle-piece') + ' icon'}`);
ec('i');
let elKm9oZ = eo('div');
text(`Think`);
ec('div');
ec('h1');
let elmqPO5 = eo('h1',null,null,`class`,`icon`);
let elWfLlP = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let el0BiDK = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elwU2bk = eo('h1',null,null,`class`,`icon`);
let el8kJYE = eo('i',null,null,`class`,`${fas('users-cog') + ' icon'}`);
ec('i');
let elJMxzM = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let el21Og_ = eo('h1',null,null,`class`,`icon`);
let elUUxrd = eo('i',null,null,`class`,`${fas('book-reader') + ' icon'}`);
ec('i');
let elGiyrY = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elYDpuP = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iiTcT4 = 'Droi0pB' + i;
let el5vyUT = ev('img','OfsnUfXlZyWa' + i+iiTcT4,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });