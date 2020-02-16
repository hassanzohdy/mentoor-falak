_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {c7b90QsfX:'markdown'},
                render: function (component) {
                    let elrnxxf = eo('div',null,null,`class`,`dark`);
elrnxxf.cls = {items: component.hasItems};

            for (let className in elrnxxf.cls) {
                elrnxxf.classList.toggle(className, elrnxxf.cls[className]);
            }  
            let cndiFLC = component.hasItems;
this.setState('stqRh2s', cndiFLC);
if (cndiFLC) { 
let elkky0N = eo('div','B69f',null,`class`,`fb-page`);
let eliW5X0 = eo('i','p8tf',null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elcuAjI = eo('span','esZf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndxrbT = component.hasItems;
this.setState('stm3djx', cndxrbT);
if (cndxrbT) { 
let elFq4HG = eo('div','2pEf',null,`class`,`items-heading bold text-center white-text`);
let elHNfrY = ev('img','BXdf',null,`src`,`${assets('images/en.png')}`,`class`,`sm`);
elHNfrY.cls = {gray: component.currentStep != component.finalStep};

            for (let className in elHNfrY.cls) {
                elHNfrY.classList.toggle(className, elHNfrY.cls[className]);
            }  
            let el3sF1p = eo('h1','DTrf');
text(`Problem Solving`);
ec('h1');
let eldcZxE = eo('p','wz0f');
text(`Find the missing number`);
ec('p');
let el6Btqt = ev('img','cY6f',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elkx0TK = eo('div','4Pmf',null,`class`,`overlay`);
ec('div');
let elpFf6m = eo('div','6qpf',null,`id`,`logo`);
let eleg9xK = eo('h1','wNzf',null,`id`,`m`);
text(`M`);
ec('h1');
let el3Wb2X = eo('h1','6PGf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let eltV_LI = eo('h4','gBQf',null,`class`,`hashtag`);
let elwlKXG = eo('div','64gf');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cnd6t2e = ! component.hasItems;
this.setState('stuUUqP', cnd6t2e);
if (cnd6t2e) { 
let eltnOLq = eo('h1','Bd6f',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let elAxdF4 = eo('div','GcVf',null,`class`,`m-t-1`);
ec('div');
let eldk18w = eo('h1','m9tf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let elM_Fzg = eo('h1','wG4f',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elk4Pim = eo('div','lqUf',null,`class`,`overlay`);
ec('div');
let elaKL5h = eo('h4','TNBf',null,`class`,`hashtag`);
let eldOaCX = eo('div','FBWf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elZexL6 = eo('div','wTnf',null,`id`,`logo`);
let elMm_W5 = eo('h1','9Arf',null,`id`,`m`);
text(`M`);
ec('h1');
let el1hHyA = eo('h1','dfnf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cndveYo = component.hasItems;
this.setState('stXNkn1', cndveYo);
if (cndveYo) { 
let eldIXHU = eo('div','Tj4f',null,`class`,`p-1 text-left tutorial-content`);
let elPkL5v = eo('div','bjhf',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let ii4aVy = 'GbL5NOj' + page;
let cnd2p3n = page == component.currentPage;
this.setState('stcblAw', cnd2p3n);
if (cnd2p3n) { 
let el7YPt0 = eo('div','Iucff'+ii4aVy,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iiNn6q = 'hCc2SJW' + i;
let cndYobx = ! statement.type && component.currentStep >= statement.step;
this.setState('stLzk88', cndYobx);
let cndrkCX = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('stb8bDh', cndrkCX);
let cndD1yN = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stj1Zgv', cndD1yN);
if (cndYobx) { 
let elLVaee = eo('div','Dthff'+ii4aVy+iiNn6q,null,`class`,`p-x-2`);
let elS5N8o = eo('div','qg7ff'+ii4aVy+iiNn6q,null,`class`,`list`);
let elR6Io3 = eo('div','zlCff'+ii4aVy+iiNn6q,null,`class`,`animate`);
let cmpwXwY = this._lc('c7b90QsfX', {parent:component,props:{content:statement.text.trim()},state:'stLzk88',insideLoop:true,index:"" +ii4aVy+iiNn6q});
ec('div');

                    setTimeout(function () {
                        let $el = elR6Io3;
                        
            var animator = DI.resolve('animator');
            animator.animate(elR6Io3, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndrkCX) { 
let elJ1Jdn = eo('h1','r4hff'+ii4aVy+iiNn6q,null,`class`,`animate ${ statement.className || '' }`);
let cnd0QYL = statement.icon;
this.setState('stDcDQv', cnd0QYL);
if (cnd0QYL) { 
let el4E3RC = eo('i','aS6ff'+ii4aVy+iiNn6q,null,`class`,`${fas(statement.icon) + ' icon'}`);
ec('i');
}let cndgp4h = statement.image;
this.setState('st0hn8w', cndgp4h);
if (cndgp4h) { 
let elPWODA = ev('img','AIyff'+ii4aVy+iiNn6q,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = elJ1Jdn;
                        
            var animator = DI.resolve('animator');
            animator.animate(elJ1Jdn, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndD1yN) { 
let elzQaJi = eo('p','8p2ff'+ii4aVy+iiNn6q,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = elzQaJi;
                        
            var animator = DI.resolve('animator');
            animator.animate(elzQaJi, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndLt2b = component.currentStep == component.finalStep;
this.setState('stWcTH2', cndLt2b);
if (cndLt2b) { 
let el6a9dF = eo('h1','5Tsf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = el6a9dF;
                        
            var animator = DI.resolve('animator');
            animator.animate(el6a9dF, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });