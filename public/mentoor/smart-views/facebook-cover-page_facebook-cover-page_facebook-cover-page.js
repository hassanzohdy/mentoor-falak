_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let elDxXKg = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let elkNQtt = eo('div',null,null,`class`,`text-center m-t-5`);
let eladkWA = eo('div',null,null,`id`,`logo`);
let elEd7VV = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elHgLsB = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elctkUA = eo('div',null,null,`id`,`icons`);
let elv8sUU = eo('h1',null,null,`class`,`icon`);
let elXKxZC = eo('i',null,null,`class`,`${fas('book-open') + ' icon'}`);
ec('i');
let el6l2_t = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let ellfM9S = eo('h1',null,null,`class`,`icon`);
let el0Mc4S = eo('i',null,null,`class`,`${fas('puzzle-piece') + ' icon'}`);
ec('i');
let elDqMkL = eo('div');
text(`Think`);
ec('div');
ec('h1');
let elS8aN6 = eo('h1',null,null,`class`,`icon`);
let elICSLh = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let eldawDF = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elEoGUa = eo('h1',null,null,`class`,`icon`);
let elwR2zM = eo('i',null,null,`class`,`${fas('users-cog') + ' icon'}`);
ec('i');
let elv0JVx = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let el1uR68 = eo('h1',null,null,`class`,`icon`);
let el7hbml = eo('i',null,null,`class`,`${fas('book-reader') + ' icon'}`);
ec('i');
let el8qQjE = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elvCkXA = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iiEQCB = 'W0y6705' + i;
let elWeZ4b = ev('img','jkukbMwHM51A' + i+iiEQCB,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });