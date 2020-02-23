_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let elsAUNV = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let el379K2 = eo('div',null,null,`class`,`text-center m-t-5`);
let elL9g46 = eo('div',null,null,`id`,`logo`);
let elQYfIv = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elb3OHI = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elNdlK5 = eo('div',null,null,`id`,`icons`);
let elAGByr = eo('h1',null,null,`class`,`icon`);
let eluRZ6U = eo('i',null,null,`class`,`${fas('book-open') + ' icon'}`);
ec('i');
let elSNFi8 = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let el8g05B = eo('h1',null,null,`class`,`icon`);
let elB4ces = eo('i',null,null,`class`,`${fas('puzzle-piece') + ' icon'}`);
ec('i');
let elUoF9m = eo('div');
text(`Think`);
ec('div');
ec('h1');
let elvo_ob = eo('h1',null,null,`class`,`icon`);
let elZBtkO = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let el8EOve = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elb5mQS = eo('h1',null,null,`class`,`icon`);
let el2yiiM = eo('i',null,null,`class`,`${fas('users-cog') + ' icon'}`);
ec('i');
let el_rwPW = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let elSJTNL = eo('h1',null,null,`class`,`icon`);
let elaHdG8 = eo('i',null,null,`class`,`${fas('book-reader') + ' icon'}`);
ec('i');
let el84oFo = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elrnAVf = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iic609 = 'ZrssYzG' + i;
let elvfyGR = ev('img','arjEnrU4AZuN' + i+iic609,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });