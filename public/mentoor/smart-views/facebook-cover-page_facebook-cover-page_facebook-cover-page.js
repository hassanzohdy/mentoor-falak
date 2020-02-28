_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let ela8Dgl = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let elx2Dz3 = eo('div',null,null,`class`,`text-center m-t-5`);
let elANWiL = eo('div',null,null,`id`,`logo`);
let el01FRM = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elxXPNY = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elws3cu = eo('div',null,null,`id`,`icons`);
let elbzxQP = eo('h1',null,null,`class`,`icon`);
let elu17Gt = eo('i',null,null,`class`,`${fas('book-open')} icon`);
ec('i');
let elCoudZ = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let elDeUir = eo('h1',null,null,`class`,`icon`);
let elHjTPn = eo('i',null,null,`class`,`${fas('puzzle-piece')} icon`);
ec('i');
let elgeBA0 = eo('div');
text(`Think`);
ec('div');
ec('h1');
let eleCTJ1 = eo('h1',null,null,`class`,`icon`);
let elS5G9k = eo('i',null,null,`class`,`${fas('people-carry')} icon`);
ec('i');
let elnsQsg = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elzcs6E = eo('h1',null,null,`class`,`icon`);
let elIan9D = eo('i',null,null,`class`,`${fas('users-cog')} icon`);
ec('i');
let el8vLKN = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let el7aFXD = eo('h1',null,null,`class`,`icon`);
let elMX_x4 = eo('i',null,null,`class`,`${fas('book-reader')} icon`);
ec('i');
let elMHA1a = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elJDKjE = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iid2CM = 'noXzuje' + i;
let el3f4Wt = ev('img','uHLw6abS8l6Y' + i+iid2CM,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });