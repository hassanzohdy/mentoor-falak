_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {cmRbs0Du_:'markdown'},
                render: function (component) {
                    let elizXDO = eo('div',null,null,`class`,`dark`);
elizXDO.cls = {items: component.hasItems};

            for (let className in elizXDO.cls) {
                elizXDO.classList.toggle(className, elizXDO.cls[className]);
            }  
            let cndj3xh = component.hasItems;
this.setState('stc5e1Y', cndj3xh);
if (cndj3xh) { 
let ell6Alp = eo('div','W6df',null,`class`,`fb-page`);
let elth3Ya = eo('i','wnbf',null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elUBwZi = eo('span','Vf_f',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndZdGG = component.hasItems;
this.setState('stxDb5R', cndZdGG);
if (cndZdGG) { 
let eljbDCM = eo('div','QLxf',null,`class`,`items-heading bold text-center white-text`);
let elT2_wP = ev('img','ek_f',null,`src`,`${assets('images/en.png')}`,`class`,`sm`);
elT2_wP.cls = {gray: component.currentStep != component.finalStep};

            for (let className in elT2_wP.cls) {
                elT2_wP.classList.toggle(className, elT2_wP.cls[className]);
            }  
            let elbJmQi = eo('h1','OUKf');
text(`Problem Solving`);
ec('h1');
let elN1z2e = eo('p','kw6f');
text(`Find the missing number`);
ec('p');
let elqib4I = ev('img','v0gf',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elvIOB7 = eo('div','padf',null,`class`,`overlay`);
ec('div');
let elCJPFa = eo('div','OITf',null,`id`,`logo`);
let ellIq5V = eo('h1','udHf',null,`id`,`m`);
text(`M`);
ec('h1');
let elBwpBH = eo('h1','ehzf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let elI9LL7 = eo('h4','Ygif',null,`class`,`hashtag`);
let elc5Dbz = eo('div','u_Pf');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndKWu5 = ! component.hasItems;
this.setState('stxgp80', cndKWu5);
if (cndKWu5) { 
let elk49Gk = eo('h1','YL3f',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let el2mgeD = eo('div','cX0f',null,`class`,`m-t-1`);
ec('div');
let ellXSBA = eo('h1','L_6f',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let eleU7xX = eo('h1','CHff',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elHjGzB = eo('div','uxWf',null,`class`,`overlay`);
ec('div');
let elWzHUY = eo('h4','5WKf',null,`class`,`hashtag`);
let elk5GZh = eo('div','pbEf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let eluXHRD = eo('div','OfIf',null,`id`,`logo`);
let elJC8sB = eo('h1','MRuf',null,`id`,`m`);
text(`M`);
ec('h1');
let elzLOb2 = eo('h1','PLuf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cndyZ8e = component.hasItems;
this.setState('st4qi5C', cndyZ8e);
if (cndyZ8e) { 
let elfLNPk = eo('div','JgTf',null,`class`,`p-1 text-left tutorial-content`);
let elV_XNn = eo('div','QZ8f',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let iiaLRk = 'tQhWGCt' + page;
let cnd9drj = page == component.currentPage;
this.setState('stoNvRh', cnd9drj);
if (cnd9drj) { 
let elrY3u6 = eo('div','nsxff'+iiaLRk,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iiidG0 = 'kAGFXWO' + i;
let cndg8UY = ! statement.type && component.currentStep >= statement.step;
this.setState('stOZFpC', cndg8UY);
let cndCJZQ = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('sty9tQB', cndCJZQ);
let cnd2ntD = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stoB8Mo', cnd2ntD);
if (cndg8UY) { 
let elAHVYB = eo('div','YCMff'+iiaLRk+iiidG0,null,`class`,`p-x-2`);
let elpgyce = eo('div','r3rff'+iiaLRk+iiidG0,null,`class`,`list`);
let elLSHMf = eo('div','kETff'+iiaLRk+iiidG0,null,`class`,`animate`);
let cmpklIc = this._lc('cmRbs0Du_', {parent:component,props:{content:statement.text.trim()},state:'stOZFpC',insideLoop:true,index:"" +iiaLRk+iiidG0});
ec('div');

                    setTimeout(function () {
                        let $el = elLSHMf;
                        
            var animator = DI.resolve('animator');
            animator.animate(elLSHMf, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndCJZQ) { 
let elaONW9 = eo('h1','PZDff'+iiaLRk+iiidG0,null,`class`,`animate ${ statement.className || '' }`);
let cndI0UZ = statement.icon;
this.setState('sthHMS_', cndI0UZ);
if (cndI0UZ) { 
let elRGk6J = eo('i','cfRff'+iiaLRk+iiidG0,null,`class`,`${fas(statement.icon) + ' icon'}`);
ec('i');
}let cndoQ5b = statement.image;
this.setState('stx6I7_', cndoQ5b);
if (cndoQ5b) { 
let elEV2hj = ev('img','YAWff'+iiaLRk+iiidG0,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = elaONW9;
                        
            var animator = DI.resolve('animator');
            animator.animate(elaONW9, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cnd2ntD) { 
let elCcBtk = eo('p','DCAff'+iiaLRk+iiidG0,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = elCcBtk;
                        
            var animator = DI.resolve('animator');
            animator.animate(elCcBtk, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndcvIb = component.currentStep == component.finalStep;
this.setState('strpawD', cndcvIb);
if (cndcvIb) { 
let elUsJ7L = eo('h1','PFyf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = elUsJ7L;
                        
            var animator = DI.resolve('animator');
            animator.animate(elUsJ7L, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });