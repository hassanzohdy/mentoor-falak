_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let elev0b3 = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let elEA9zE = eo('div',null,null,`class`,`text-center m-t-5`);
let el7lrRI = eo('div',null,null,`id`,`logo`);
let elVYjJX = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let el3wOVW = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elKkZ5_ = eo('div',null,null,`id`,`icons`);
let ell5bfv = eo('h1',null,null,`class`,`icon`);
let elqHO0V = eo('i',null,null,`class`,`${fas('book-open')} icon`);
ec('i');
let elzIVws = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let elMrTjb = eo('h1',null,null,`class`,`icon`);
let ellplYN = eo('i',null,null,`class`,`${fas('puzzle-piece')} icon`);
ec('i');
let elJOrXu = eo('div');
text(`Think`);
ec('div');
ec('h1');
let ellG9x8 = eo('h1',null,null,`class`,`icon`);
let elqObM8 = eo('i',null,null,`class`,`${fas('people-carry')} icon`);
ec('i');
let el2Cd05 = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elhvB9I = eo('h1',null,null,`class`,`icon`);
let elujbd1 = eo('i',null,null,`class`,`${fas('users-cog')} icon`);
ec('i');
let elbjSqX = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let eluS6CA = eo('h1',null,null,`class`,`icon`);
let elhKPGq = eo('i',null,null,`class`,`${fas('book-reader')} icon`);
ec('i');
let el_lry_ = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elsE68c = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iiHZcO = 'scvIxnn' + i;
let elVM9fi = ev('img','Kw8TsNqfPNKe' + i+iiHZcO,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });