_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {cGq6V2ozC:'markdown'},
                render: function (component) {
                    let el5i7h7 = eo('div',null,null,`class`,`dark ${cls({items: component.hasItems})}`);
let cnd2lp4 = component.hasItems;
this.setState('sthWKE4', cnd2lp4);
if (cnd2lp4) { 
let elyOEV1 = eo('div','OEsf',null,`class`,`fb-page`);
let elqPISq = eo('i','Gpmf',null,`class`,`${fas('facebook')} icon`);
ec('i');
let elYn68b = eo('span','RYNf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndcm5E = component.hasItems;
this.setState('stXX3uB', cndcm5E);
if (cndcm5E) { 
let elvNudF = eo('div','5Wbf',null,`class`,`items-heading bold text-center white-text`);
let elrEdDV = ev('img','Z4if',null,`class`,`sm ${cls({gray: component.currentStep != component.finalStep})}`,`src`,`${assets('images/en.png')}`);
let elRogwz = eo('h1','YKsf');
text(`Problem Solving`);
ec('h1');
let el97MIk = eo('p','77of');
text(`Find the missing number`);
ec('p');
let el3_M9z = ev('img','dNUf',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elAHqy7 = eo('div','HMSf',null,`class`,`overlay`);
ec('div');
let el3ot0N = eo('div','5ZYf',null,`id`,`logo`);
let el5RJm8 = eo('h1','G6Yf',null,`id`,`m`);
text(`M`);
ec('h1');
let elZGfbb = eo('h1','cpZf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let elrnJ9g = eo('h4','nXUf',null,`class`,`hashtag`);
let elg8F4m = eo('div','3Skf');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndCJAY = ! component.hasItems;
this.setState('stEC8AU', cndCJAY);
if (cndCJAY) { 
let elzy1ug = eo('h1','ABef',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let el6H_N1 = eo('div','UOOf',null,`class`,`m-t-1`);
ec('div');
let elSrHTr = eo('h1','GoHf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let elHRXdO = eo('h1','5nff',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elGUbMb = eo('div','dmRf',null,`class`,`overlay`);
ec('div');
let el26e0B = eo('h4','sNCf',null,`class`,`hashtag`);
let el3hEje = eo('div','chQf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elS_niJ = eo('div','rxKf',null,`id`,`logo`);
let elsv_Ne = eo('h1','56Sf',null,`id`,`m`);
text(`M`);
ec('h1');
let eleAhFW = eo('h1','WYtf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cndEvou = component.hasItems;
this.setState('stVYAa5', cndEvou);
if (cndEvou) { 
let elaYbsG = eo('div','1Plf',null,`class`,`p-1 text-left tutorial-content`);
let elIkBS5 = eo('div','8lyf',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let iiYtyU = 'SEnlfE8' + page;
let cndyk9M = page == component.currentPage;
this.setState('stTscz7', cndyk9M);
if (cndyk9M) { 
let elugAA7 = eo('div','Pb9ff'+iiYtyU,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iiV7WM = 'kiJLPhc' + i;
let cndOIRY = ! statement.type && component.currentStep >= statement.step;
this.setState('st_4dxz', cndOIRY);
let cndjBhM = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('st7j6Qm', cndjBhM);
let cndKQBh = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('st4C2So', cndKQBh);
if (cndOIRY) { 
let elpaU2S = eo('div','QkLff'+iiYtyU+iiV7WM,null,`class`,`p-x-2`);
let el4oQwJ = eo('div','GJ8ff'+iiYtyU+iiV7WM,null,`class`,`list`);
let elo9cuH = eo('div','r_Zff'+iiYtyU+iiV7WM,null,`class`,`animate`);
let cmpCNR0 = this._lc('cGq6V2ozC', {parent:component,props:{content:statement.text.trim()},state:'st_4dxz',insideLoop:true,index:"" +iiYtyU+iiV7WM});
ec('div');

                    setTimeout(function () {
                        let $el = elo9cuH;
                        
            var animator = DI.resolve('animator');
            animator.animate(elo9cuH, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndjBhM) { 
let elQGh42 = eo('h1','lgLff'+iiYtyU+iiV7WM,null,`class`,`animate ${ statement.className || '' }`);
let cndRECm = statement.icon;
this.setState('stnq7XW', cndRECm);
if (cndRECm) { 
let elhOz5G = eo('i','LYaff'+iiYtyU+iiV7WM,null,`class`,`${fas(statement.icon)} icon`);
ec('i');
}let cnd7hyZ = statement.image;
this.setState('st7cDxu', cnd7hyZ);
if (cnd7hyZ) { 
let el3pXJa = ev('img','Zseff'+iiYtyU+iiV7WM,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = elQGh42;
                        
            var animator = DI.resolve('animator');
            animator.animate(elQGh42, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndKQBh) { 
let eleT2HK = eo('p','DeLff'+iiYtyU+iiV7WM,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = eleT2HK;
                        
            var animator = DI.resolve('animator');
            animator.animate(eleT2HK, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndrX0x = component.currentStep == component.finalStep;
this.setState('stgucC0', cndrX0x);
if (cndrX0x) { 
let elgFJe8 = eo('h1','JkKf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = elgFJe8;
                        
            var animator = DI.resolve('animator');
            animator.animate(elgFJe8, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });