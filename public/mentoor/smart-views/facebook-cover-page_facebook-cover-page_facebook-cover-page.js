_Component({
                selector: 'facebook-cover-page',
                c: 'FacebookCoverPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['images'],
                children: {},
                render: function (component) {
                    let elz0cav = ev('link',null,null,`href`,`https://fonts.googleapis.com/css?family=Montserrat:900&display=swap`,`rel`,`stylesheet`);
let elyA4KM = eo('div',null,null,`class`,`text-center m-t-5`);
let el21pQ1 = eo('div',null,null,`id`,`logo`);
let elqqUqz = eo('h1',null,null,`id`,`m`);
text(`M`);
ec('h1');
let elNwuHh = eo('h1',null,null,`id`,`name`,`class`,``);
text(`mentoor.io`);
ec('h1');
ec('div');
let elAUXp8 = eo('div',null,null,`id`,`icons`);
let elLDSEP = eo('h1',null,null,`class`,`icon`);
let el1tXfT = eo('i',null,null,`class`,`${fas('book-open') + ' icon'}`);
ec('i');
let elymif8 = eo('div');
text(`Learn`);
ec('div');
ec('h1');
let elhxevm = eo('h1',null,null,`class`,`icon`);
let el_A4j_ = eo('i',null,null,`class`,`${fas('puzzle-piece') + ' icon'}`);
ec('i');
let el9pnSh = eo('div');
text(`Think`);
ec('div');
ec('h1');
let elBsYln = eo('h1',null,null,`class`,`icon`);
let elZWoW4 = eo('i',null,null,`class`,`${fas('people-carry') + ' icon'}`);
ec('i');
let elSjwBu = eo('div');
text(`Help`);
ec('div');
ec('h1');
let elB2B84 = eo('h1',null,null,`class`,`icon`);
let elDn8mv = eo('i',null,null,`class`,`${fas('users-cog') + ' icon'}`);
ec('i');
let elauWs9 = eo('div');
text(`Team up`);
ec('div');
ec('h1');
let elHS2JD = eo('h1',null,null,`class`,`icon`);
let elKpvO0 = eo('i',null,null,`class`,`${fas('book-reader') + ' icon'}`);
ec('i');
let elm2fJz = eo('div');
text(`Teach`);
ec('div');
ec('h1');
ec('div');
let elvcE0W = eo('div',null,null,`id`,`techs`);
for (let i in component.images) {
let image = component.images[i]; 
 let iiKxYl = 'Xp6J4xH' + i;
let elQEX30 = ev('img','WxkS6o2kvc5L' + i+iiKxYl,null,`src`,`${image}`);
}
ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });