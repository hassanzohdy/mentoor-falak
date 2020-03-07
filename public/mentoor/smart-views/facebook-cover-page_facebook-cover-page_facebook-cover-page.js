_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let elEI3T6 = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let elxNat5 = eo('div',null,null,`class`,`text-center m-t-5`);
let elHjf93 = eo('div',null,null,`id`,`logo`);
let elLmfDD = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elvfYlT = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elaWHIb = eo('div',null,null,`id`,`icons`);
let elVxHiK = eo('h1',null,null,`class`,`icon`);
let elg3Px8 = eo('i',null,null,`class`,`${fas('book-open')} icon`);
ec('i');
let elHw0aZ = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let eljVGG0 = eo('h1',null,null,`class`,`icon`);
let el8odho = eo('i',null,null,`class`,`${fas('puzzle-piece')} icon`);
ec('i');
let eltO1Hh = eo('div');
text(`Think`);
ec('div');
ec('h1');
let elo1GZB = eo('h1',null,null,`class`,`icon`);
let eldBbCY = eo('i',null,null,`class`,`${fas('people-carry')} icon`);
ec('i');
let elw_Kto = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elNDGXQ = eo('h1',null,null,`class`,`icon`);
let elf0kNl = eo('i',null,null,`class`,`${fas('users-cog')} icon`);
ec('i');
let elevRA8 = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let ellIpcG = eo('h1',null,null,`class`,`icon`);
let elkp9fZ = eo('i',null,null,`class`,`${fas('book-reader')} icon`);
ec('i');
let el2jUuc = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elxB64D = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iiNtkR = 'BCVuRFf' + i;
let elJuc8p = ev('img','sgD6359I5ihP' + i+iiNtkR,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });