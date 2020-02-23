_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {cVlyv1QbB:'markdown'},
                render: function (component) {
                    let elkHg2g = eo('div',null,null,`class`,`dark`);
elkHg2g.cls = {items: component.hasItems};

            for (let className in elkHg2g.cls) {
                elkHg2g.classList.toggle(className, elkHg2g.cls[className]);
            }  
            let cndL3Oh = component.hasItems;
this.setState('stl5l_g', cndL3Oh);
if (cndL3Oh) { 
let elUgs5h = eo('div','Evlf',null,`class`,`fb-page`);
let elGiyuv = eo('i','smvf',null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let el0NkkC = eo('span','Frrf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndWCiq = component.hasItems;
this.setState('st7oJde', cndWCiq);
if (cndWCiq) { 
let elMfjDZ = eo('div','AXZf',null,`class`,`items-heading bold text-center white-text`);
let elBIdPJ = ev('img','t_ef',null,`src`,`${assets('images/en.png')}`,`class`,`sm`);
elBIdPJ.cls = {gray: component.currentStep != component.finalStep};

            for (let className in elBIdPJ.cls) {
                elBIdPJ.classList.toggle(className, elBIdPJ.cls[className]);
            }  
            let elCuqs4 = eo('h1','5Kdf');
text(`Problem Solving`);
ec('h1');
let elhzxoT = eo('p','rAmf');
text(`Find the missing number`);
ec('p');
let elfn2tu = ev('img','Nzvf',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elFTPNe = eo('div','sgFf',null,`class`,`overlay`);
ec('div');
let elg0buh = eo('div','Hnyf',null,`id`,`logo`);
let elRcUaM = eo('h1','HTTf',null,`id`,`m`);
text(`M`);
ec('h1');
let elP0m8v = eo('h1','ujMf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let elx_blx = eo('h4','Qe9f',null,`class`,`hashtag`);
let ell1kJu = eo('div','G7If');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndzJfQ = ! component.hasItems;
this.setState('stuWE61', cndzJfQ);
if (cndzJfQ) { 
let el9DFIu = eo('h1','KZkf',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let elDymIC = eo('div','oDBf',null,`class`,`m-t-1`);
ec('div');
let elDBiIB = eo('h1','3Ycf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let elWTy1h = eo('h1','Cy0f',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elPrGaV = eo('div','UwEf',null,`class`,`overlay`);
ec('div');
let elAvuex = eo('h4','rgLf',null,`class`,`hashtag`);
let elhSEKl = eo('div','3slf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elayr67 = eo('div','Bp4f',null,`id`,`logo`);
let elvwkkn = eo('h1','7gsf',null,`id`,`m`);
text(`M`);
ec('h1');
let elkfILy = eo('h1','OORf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cndsnhF = component.hasItems;
this.setState('stfXqzQ', cndsnhF);
if (cndsnhF) { 
let elJT40x = eo('div','ab6f',null,`class`,`p-1 text-left tutorial-content`);
let elq4Csj = eo('div','m5yf',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let ii_HJG = 'tTd_7nK' + page;
let cnd0pSx = page == component.currentPage;
this.setState('stspOMW', cnd0pSx);
if (cnd0pSx) { 
let elixVi2 = eo('div','dfKff'+ii_HJG,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iis8AW = 'hFQJ0QL' + i;
let cnd4Bju = ! statement.type && component.currentStep >= statement.step;
this.setState('stHRaM3', cnd4Bju);
let cndtBOv = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('st28fPj', cndtBOv);
let cndRZYg = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stT55S9', cndRZYg);
if (cnd4Bju) { 
let elSUDCs = eo('div','v76ff'+ii_HJG+iis8AW,null,`class`,`p-x-2`);
let elSOxlz = eo('div','yEmff'+ii_HJG+iis8AW,null,`class`,`list`);
let elnyTYE = eo('div','pfcff'+ii_HJG+iis8AW,null,`class`,`animate`);
let cmpV6Sp = this._lc('cVlyv1QbB', {parent:component,props:{content:statement.text.trim()},state:'stHRaM3',insideLoop:true,index:"" +ii_HJG+iis8AW});
ec('div');

                    setTimeout(function () {
                        let $el = elnyTYE;
                        
            var animator = DI.resolve('animator');
            animator.animate(elnyTYE, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndtBOv) { 
let elKqj4G = eo('h1','PmIff'+ii_HJG+iis8AW,null,`class`,`animate ${ statement.className || '' }`);
let cndkia1 = statement.icon;
this.setState('stymLjk', cndkia1);
if (cndkia1) { 
let ellgR0K = eo('i','vsRff'+ii_HJG+iis8AW,null,`class`,`${fas(statement.icon) + ' icon'}`);
ec('i');
}let cnd51rF = statement.image;
this.setState('stSFVxA', cnd51rF);
if (cnd51rF) { 
let elmt7Uv = ev('img','Aniff'+ii_HJG+iis8AW,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = elKqj4G;
                        
            var animator = DI.resolve('animator');
            animator.animate(elKqj4G, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndRZYg) { 
let elC6ZJX = eo('p','NFHff'+ii_HJG+iis8AW,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = elC6ZJX;
                        
            var animator = DI.resolve('animator');
            animator.animate(elC6ZJX, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndgMrf = component.currentStep == component.finalStep;
this.setState('stB53nq', cndgMrf);
if (cndgMrf) { 
let elUuTCr = eo('h1','YVEf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = elUuTCr;
                        
            var animator = DI.resolve('animator');
            animator.animate(elUuTCr, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });