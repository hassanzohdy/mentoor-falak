_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {clc47UoB0:'markdown'},
                render: function (component) {
                    let elD6JdU = eo('div',null,null,`class`,`dark`);
elD6JdU.cls = {items: component.hasItems};

            for (let className in elD6JdU.cls) {
                elD6JdU.classList.toggle(className, elD6JdU.cls[className]);
            }  
            let cndZe4e = component.hasItems;
this.setState('stdV1dJ', cndZe4e);
if (cndZe4e) { 
let elHVOz0 = eo('div','8Lrf',null,`class`,`fb-page`);
let elcaYlV = eo('i','PjFf',null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elTGKZB = eo('span','VxFf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cnd0RG7 = component.hasItems;
this.setState('stysZqu', cnd0RG7);
if (cnd0RG7) { 
let elUGatm = eo('div','aN1f',null,`class`,`items-heading bold text-center white-text`);
let elLtR7h = ev('img','CYif',null,`src`,`${assets('images/en.png')}`,`class`,`sm`);
elLtR7h.cls = {gray: component.currentStep != component.finalStep};

            for (let className in elLtR7h.cls) {
                elLtR7h.classList.toggle(className, elLtR7h.cls[className]);
            }  
            let elmis_k = eo('h1','mwFf');
text(`Problem Solving`);
ec('h1');
let elZsmED = eo('p','grnf');
text(`Find the missing number`);
ec('p');
let eljBHZ1 = ev('img','ZG0f',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let ell1OuK = eo('div','Eh8f',null,`class`,`overlay`);
ec('div');
let el3hSnO = eo('div','5g4f',null,`id`,`logo`);
let elUxs71 = eo('h1','cqEf',null,`id`,`m`);
text(`M`);
ec('h1');
let elRiiw5 = eo('h1','T79f',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let el0nDZV = eo('h4','G9yf',null,`class`,`hashtag`);
let elYMrhO = eo('div','B41f');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndQZ6L = ! component.hasItems;
this.setState('stbeGI3', cndQZ6L);
if (cndQZ6L) { 
let elUVMjS = eo('h1','y8cf',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let ellIYXv = eo('div','udzf',null,`class`,`m-t-1`);
ec('div');
let elP4ODv = eo('h1','EARf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let elBPN6h = eo('h1','f5Cf',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elxlYQW = eo('div','ehHf',null,`class`,`overlay`);
ec('div');
let el5Rt7b = eo('h4','jdif',null,`class`,`hashtag`);
let el4CZx1 = eo('div','GpAf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elZtn4q = eo('div','k3Of',null,`id`,`logo`);
let elZYDzZ = eo('h1','6vUf',null,`id`,`m`);
text(`M`);
ec('h1');
let elJaRP_ = eo('h1','nMnf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cndU1wA = component.hasItems;
this.setState('stxMe4m', cndU1wA);
if (cndU1wA) { 
let elz6Joe = eo('div','Jtdf',null,`class`,`p-1 text-left tutorial-content`);
let elgpoeK = eo('div','4Glf',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let ii0DRb = 'iOf9lQl' + page;
let cndyD32 = page == component.currentPage;
this.setState('stoeKm8', cndyD32);
if (cndyD32) { 
let eldz9dG = eo('div','ATrff'+ii0DRb,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iiXinf = 'SeU4lIr' + i;
let cnd6vc3 = ! statement.type && component.currentStep >= statement.step;
this.setState('stCTC45', cnd6vc3);
let cndHzSm = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('st66EbW', cndHzSm);
let cndfWUK = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stTNy9b', cndfWUK);
if (cnd6vc3) { 
let elQPnY9 = eo('div','iZUff'+ii0DRb+iiXinf,null,`class`,`p-x-2`);
let el_T8aj = eo('div','gqFff'+ii0DRb+iiXinf,null,`class`,`list`);
let el8L_Du = eo('div','SNdff'+ii0DRb+iiXinf,null,`class`,`animate`);
let cmpKCZ6 = this._lc('clc47UoB0', {parent:component,props:{content:statement.text.trim()},state:'stCTC45',insideLoop:true,index:"" +ii0DRb+iiXinf});
ec('div');

                    setTimeout(function () {
                        let $el = el8L_Du;
                        
            var animator = DI.resolve('animator');
            animator.animate(el8L_Du, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndHzSm) { 
let elwYrQe = eo('h1','Uvvff'+ii0DRb+iiXinf,null,`class`,`animate ${ statement.className || '' }`);
let cndISh3 = statement.icon;
this.setState('st6YWfd', cndISh3);
if (cndISh3) { 
let elJwS69 = eo('i','5Isff'+ii0DRb+iiXinf,null,`class`,`${fas(statement.icon) + ' icon'}`);
ec('i');
}let cnd4SwK = statement.image;
this.setState('stYSH_y', cnd4SwK);
if (cnd4SwK) { 
let eljqliD = ev('img','rzXff'+ii0DRb+iiXinf,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = elwYrQe;
                        
            var animator = DI.resolve('animator');
            animator.animate(elwYrQe, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndfWUK) { 
let eltajaG = eo('p','Fvhff'+ii0DRb+iiXinf,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = eltajaG;
                        
            var animator = DI.resolve('animator');
            animator.animate(eltajaG, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cnd1CBS = component.currentStep == component.finalStep;
this.setState('stJyBH8', cnd1CBS);
if (cnd1CBS) { 
let elnsdBf = eo('h1','jRXf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = elnsdBf;
                        
            var animator = DI.resolve('animator');
            animator.animate(elnsdBf, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });