_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {cw4r8D18P:'markdown'},
                render: function (component) {
                    let elH1Wr5 = eo('div',null,null,`class`,`dark ${cls({items: component.hasItems})}`);
let cndsd_R = component.hasItems;
this.setState('stZYGnf', cndsd_R);
if (cndsd_R) { 
let elnj1Mf = eo('div','ySlf',null,`class`,`fb-page`);
let elah281 = eo('i','Smkf',null,`class`,`${fas('facebook')} icon`);
ec('i');
let elpOQzv = eo('span','zBRf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndkVGJ = component.hasItems;
this.setState('stNwxVV', cndkVGJ);
if (cndkVGJ) { 
let elEQCkl = eo('div','t5Af',null,`class`,`items-heading bold text-center white-text`);
let elLmCSN = ev('img','QGCf',null,`class`,`sm ${cls({gray: component.currentStep != component.finalStep})}`,`src`,`${assets('images/en.png')}`);
let elSBNwH = eo('h1','Slrf');
text(`Problem Solving`);
ec('h1');
let el7aJHF = eo('p','1PJf');
text(`Find the missing number`);
ec('p');
let elGA8oe = ev('img','QHEf',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elEJFQ_ = eo('div','u0Hf',null,`class`,`overlay`);
ec('div');
let eloLktR = eo('div','EUif',null,`id`,`logo`);
let elhdura = eo('h1','zA7f',null,`id`,`m`);
text(`M`);
ec('h1');
let eljNhun = eo('h1','m2jf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let elbkD3p = eo('h4','Mulf',null,`class`,`hashtag`);
let elDSDAF = eo('div','4JWf');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndTdSA = ! component.hasItems;
this.setState('stXL5UX', cndTdSA);
if (cndTdSA) { 
let elfm2V_ = eo('h1','u_gf',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let elK1qTV = eo('div','L6sf',null,`class`,`m-t-1`);
ec('div');
let elnfurD = eo('h1','hKUf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let elSxoaO = eo('h1','nI9f',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elo2xvu = eo('div','rznf',null,`class`,`overlay`);
ec('div');
let eltr_0t = eo('h4','kYjf',null,`class`,`hashtag`);
let el8M3Bb = eo('div','4Y7f');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elkuZBG = eo('div','sX7f',null,`id`,`logo`);
let elvUXCg = eo('h1','zhNf',null,`id`,`m`);
text(`M`);
ec('h1');
let eljcpAm = eo('h1','xktf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cnduDLD = component.hasItems;
this.setState('stZxf2P', cnduDLD);
if (cnduDLD) { 
let elSi0VU = eo('div','MeYf',null,`class`,`p-1 text-left tutorial-content`);
let el0k2IH = eo('div','EpGf',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let iin66L = 'n2iLJQd' + page;
let cndZKvz = page == component.currentPage;
this.setState('stGayYI', cndZKvz);
if (cndZKvz) { 
let elbXGXE = eo('div','2Yqff'+iin66L,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iiKR8J = 'm3a0Kww' + i;
let cnddw6g = ! statement.type && component.currentStep >= statement.step;
this.setState('stHCf3p', cnddw6g);
let cndMkKQ = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('stOFVuR', cndMkKQ);
let cndJnen = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stqID5M', cndJnen);
if (cnddw6g) { 
let eljFQQa = eo('div','hHMff'+iin66L+iiKR8J,null,`class`,`p-x-2`);
let ellV3vz = eo('div','UEKff'+iin66L+iiKR8J,null,`class`,`list`);
let ela20ZI = eo('div','Q55ff'+iin66L+iiKR8J,null,`class`,`animate`);
let cmpSnV2 = this._lc('cw4r8D18P', {parent:component,props:{content:statement.text.trim()},state:'stHCf3p',insideLoop:true,index:"" +iin66L+iiKR8J});
ec('div');

                    setTimeout(function () {
                        let $el = ela20ZI;
                        
            var animator = DI.resolve('animator');
            animator.animate(ela20ZI, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndMkKQ) { 
let elhDEvI = eo('h1','Fiyff'+iin66L+iiKR8J,null,`class`,`animate ${ statement.className || '' }`);
let cndmCIY = statement.icon;
this.setState('stey692', cndmCIY);
if (cndmCIY) { 
let elRJmgq = eo('i','cvgff'+iin66L+iiKR8J,null,`class`,`${fas(statement.icon)} icon`);
ec('i');
}let cndQES7 = statement.image;
this.setState('stzJAaE', cndQES7);
if (cndQES7) { 
let el5Wm0u = ev('img','SPNff'+iin66L+iiKR8J,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = elhDEvI;
                        
            var animator = DI.resolve('animator');
            animator.animate(elhDEvI, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndJnen) { 
let elmdwcm = eo('p','NSvff'+iin66L+iiKR8J,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = elmdwcm;
                        
            var animator = DI.resolve('animator');
            animator.animate(elmdwcm, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndfNRA = component.currentStep == component.finalStep;
this.setState('stKwHQ0', cndfNRA);
if (cndfNRA) { 
let elcW4Io = eo('h1','MSAf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = elcW4Io;
                        
            var animator = DI.resolve('animator');
            animator.animate(elcW4Io, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });