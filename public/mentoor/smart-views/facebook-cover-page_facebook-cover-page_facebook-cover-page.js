_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let elzn2yT = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let elrbUJB = eo('div',null,null,`class`,`text-center m-t-5`);
let el1k1QH = eo('div',null,null,`id`,`logo`);
let el6_fYg = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elnw9XP = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elYUKxh = eo('div',null,null,`id`,`icons`);
let elxIF5X = eo('h1',null,null,`class`,`icon`);
let elBGaQf = eo('i',null,null,`class`,`${fas('book-open') + ' icon'}`);
ec('i');
let elYGW8R = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let eloFfke = eo('h1',null,null,`class`,`icon`);
let elLSNt4 = eo('i',null,null,`class`,`${fas('puzzle-piece') + ' icon'}`);
ec('i');
let els5W_b = eo('div');
text(`Think`);
ec('div');
ec('h1');
let elzZE1s = eo('h1',null,null,`class`,`icon`);
let elGdJpJ = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elrzc1s = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elXUAi2 = eo('h1',null,null,`class`,`icon`);
let ell5aw3 = eo('i',null,null,`class`,`${fas('users-cog') + ' icon'}`);
ec('i');
let elbRqUq = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let elbnf9F = eo('h1',null,null,`class`,`icon`);
let elPmfFT = eo('i',null,null,`class`,`${fas('book-reader') + ' icon'}`);
ec('i');
let elPruQF = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let el2W1xI = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let ii68u6 = 'ErZGgz7' + i;
let elnvqaQ = ev('img','FdtpFbMPM6Y9' + i+ii68u6,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });