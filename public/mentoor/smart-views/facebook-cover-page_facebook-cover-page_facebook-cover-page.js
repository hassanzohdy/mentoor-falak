_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let ellBPlE = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let el6eaV5 = eo('div',null,null,`class`,`text-center m-t-5`);
let elU6uZK = eo('div',null,null,`id`,`logo`);
let elRPvz3 = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elP5bZk = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elR1t6O = eo('div',null,null,`id`,`icons`);
let elT2qil = eo('h1',null,null,`class`,`icon`);
let elqaw2a = eo('i',null,null,`class`,`${fas('book-open') + ' icon'}`);
ec('i');
let elYiVR0 = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let eldFp28 = eo('h1',null,null,`class`,`icon`);
let elI0JBZ = eo('i',null,null,`class`,`${fas('puzzle-piece') + ' icon'}`);
ec('i');
let eliaSWw = eo('div');
text(`Think`);
ec('div');
ec('h1');
let elKLcSi = eo('h1',null,null,`class`,`icon`);
let el9czdZ = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elzCmBh = eo('div');
text(`Help`);
ec('div');
ec('h1');
let eldvQ9s = eo('h1',null,null,`class`,`icon`);
let elLZE8b = eo('i',null,null,`class`,`${fas('users-cog') + ' icon'}`);
ec('i');
let elzuqYv = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let elI7N8E = eo('h1',null,null,`class`,`icon`);
let elCUTid = eo('i',null,null,`class`,`${fas('book-reader') + ' icon'}`);
ec('i');
let elGzKVc = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elgiCvJ = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iiaJaP = 'cywzsre' + i;
let elg6OpF = ev('img','weLGlGoZcdUP' + i+iiaJaP,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });