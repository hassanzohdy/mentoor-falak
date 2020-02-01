_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {ccm7GwjN6:'markdown'},
                render: function (component) {
                    let elAB5Ug = eo('div',null,null,`class`,`dark`);
elAB5Ug.cls = {items: component.hasItems};

            for (let className in elAB5Ug.cls) {
                elAB5Ug.classList.toggle(className, elAB5Ug.cls[className]);
            }  
            let cnd0mXZ = component.hasItems;
this.setState('stRiJay', cnd0mXZ);
if (cnd0mXZ) { 
let elce1qy = eo('div','ZLqf',null,`class`,`fb-page`);
let elcL9a1 = eo('i','h53f',null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elIeNxv = eo('span','yDXf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndGejQ = component.hasItems;
this.setState('stAats_', cndGejQ);
if (cndGejQ) { 
let elZH__Q = eo('div','omjf',null,`class`,`items-heading bold text-center white-text`);
let el0M62t = ev('img','Ex4f',null,`src`,`${assets('images/en.png')}`,`class`,`sm`);
el0M62t.cls = {gray: component.currentStep != component.finalStep};

            for (let className in el0M62t.cls) {
                el0M62t.classList.toggle(className, el0M62t.cls[className]);
            }  
            let elsiG9F = eo('h1','v7df');
text(`Problem Solving`);
ec('h1');
let ellbXFK = eo('p','SRsf');
text(`Find the missing number`);
ec('p');
let elriQHl = ev('img','Eyyf',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elkYCrO = eo('div','Wx5f',null,`class`,`overlay`);
ec('div');
let elUepts = eo('div','a8yf',null,`id`,`logo`);
let elQlWEN = eo('h1','GaAf',null,`id`,`m`);
text(`M`);
ec('h1');
let elK_j2m = eo('h1','IC4f',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let elaXbCg = eo('h4','wUvf',null,`class`,`hashtag`);
let elwSA2q = eo('div','6Crf');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndN4AV = ! component.hasItems;
this.setState('stBGeUD', cndN4AV);
if (cndN4AV) { 
let elJFKI5 = eo('h1','UbSf',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let elWmmdI = eo('div','xxRf',null,`class`,`m-t-1`);
ec('div');
let el_8Suk = eo('h1','PAgf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let elD_jHF = eo('h1','MLwf',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elcgOvH = eo('div','27Tf',null,`class`,`overlay`);
ec('div');
let elaOhGE = eo('h4','J2If',null,`class`,`hashtag`);
let elALKqb = eo('div','P3Gf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elBHhsr = eo('div','kwkf',null,`id`,`logo`);
let elgAvJF = eo('h1','7Zvf',null,`id`,`m`);
text(`M`);
ec('h1');
let elUeGkd = eo('h1','ZP_f',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cndlsYU = component.hasItems;
this.setState('stVSw7h', cndlsYU);
if (cndlsYU) { 
let eleMpNM = eo('div','MdHf',null,`class`,`p-1 text-left tutorial-content`);
let elcxfwM = eo('div','N91f',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let iiBKJS = 'Zr3_mUR' + page;
let cnd0SR9 = page == component.currentPage;
this.setState('stzZn10', cnd0SR9);
if (cnd0SR9) { 
let elyQ2gR = eo('div','sWDff'+iiBKJS,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let ii9Rq_ = 'cfvaPad' + i;
let cndYf9O = ! statement.type && component.currentStep >= statement.step;
this.setState('st_CCLu', cndYf9O);
let cndJJI9 = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('stl5JIQ', cndJJI9);
let cndVxI5 = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stQVJQV', cndVxI5);
if (cndYf9O) { 
let elsi99N = eo('div','eliff'+iiBKJS+ii9Rq_,null,`class`,`p-x-2`);
let ela4hu6 = eo('div','VNvff'+iiBKJS+ii9Rq_,null,`class`,`list`);
let els7JSz = eo('div','_ccff'+iiBKJS+ii9Rq_,null,`class`,`animate`);
let cmp1OPV = this._lc('ccm7GwjN6', {parent:component,props:{content:statement.text.trim()},state:'st_CCLu',insideLoop:true,index:"" +iiBKJS+ii9Rq_});
ec('div');

                    setTimeout(function () {
                        let $el = els7JSz;
                        
            var animator = DI.resolve('animator');
            animator.animate(els7JSz, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndJJI9) { 
let els7uIE = eo('h1','cjcff'+iiBKJS+ii9Rq_,null,`class`,`animate ${ statement.className || '' }`);
let cndBg1N = statement.icon;
this.setState('stMaYza', cndBg1N);
if (cndBg1N) { 
let elj64FZ = eo('i','RrAff'+iiBKJS+ii9Rq_,null,`class`,`${fas(statement.icon) + ' icon'}`);
ec('i');
}let cndy1aZ = statement.image;
this.setState('stMQNoF', cndy1aZ);
if (cndy1aZ) { 
let elovWmF = ev('img','tf9ff'+iiBKJS+ii9Rq_,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = els7uIE;
                        
            var animator = DI.resolve('animator');
            animator.animate(els7uIE, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndVxI5) { 
let el3CRx_ = eo('p','wYfff'+iiBKJS+ii9Rq_,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = el3CRx_;
                        
            var animator = DI.resolve('animator');
            animator.animate(el3CRx_, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndUyzJ = component.currentStep == component.finalStep;
this.setState('stKuMZT', cndUyzJ);
if (cndUyzJ) { 
let eljiq2l = eo('h1','VTYf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = eljiq2l;
                        
            var animator = DI.resolve('animator');
            animator.animate(eljiq2l, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });