_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {cqmMTyGCh:'markdown'},
                render: function (component) {
                    let elBRh1A = eo('div',null,null,`class`,`dark ${cls({items: component.hasItems})}`);
let cndVOYh = component.hasItems;
this.setState('stYAxj3', cndVOYh);
if (cndVOYh) { 
let elYYhib = eo('div','aTNf',null,`class`,`fb-page`);
let ellsdhs = eo('i','Vdef',null,`class`,`${fas('facebook')} icon`);
ec('i');
let eljGexB = eo('span','LcLf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndlepu = component.hasItems;
this.setState('stXlvKy', cndlepu);
if (cndlepu) { 
let elwteWv = eo('div','bBxf',null,`class`,`items-heading bold text-center white-text`);
let elsrxeg = ev('img','hVzf',null,`class`,`sm ${cls({gray: component.currentStep != component.finalStep})}`,`src`,`${assets('images/en.png')}`);
let elZ8iUr = eo('h1','U47f');
text(`Problem Solving`);
ec('h1');
let elZLaxc = eo('p','TGQf');
text(`Find the missing number`);
ec('p');
let elEU6LH = ev('img','uvrf',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elGcGPG = eo('div','S8Sf',null,`class`,`overlay`);
ec('div');
let el_9Pd2 = eo('div','I5sf',null,`id`,`logo`);
let elRt8Wo = eo('h1','ysUf',null,`id`,`m`);
text(`M`);
ec('h1');
let elDs6TV = eo('h1','d1Vf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let el7dxZE = eo('h4','Stkf',null,`class`,`hashtag`);
let el6S7hA = eo('div','Kzpf');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndWCZd = ! component.hasItems;
this.setState('stfgdLm', cndWCZd);
if (cndWCZd) { 
let el8Tj_W = eo('h1','r0bf',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let elwXIx6 = eo('div','v2vf',null,`class`,`m-t-1`);
ec('div');
let el9CevN = eo('h1','DBXf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let elNZ9KM = eo('h1','Jepf',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let elkRP9x = eo('div','orCf',null,`class`,`overlay`);
ec('div');
let elfb5e5 = eo('h4','DYtf',null,`class`,`hashtag`);
let eler4JI = eo('div','9pzf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elmXMD4 = eo('div','sfJf',null,`id`,`logo`);
let el1OzKF = eo('h1','zRff',null,`id`,`m`);
text(`M`);
ec('h1');
let elR1RVD = eo('h1','BFVf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cndwijV = component.hasItems;
this.setState('stVT0g2', cndwijV);
if (cndwijV) { 
let elXFqWN = eo('div','fejf',null,`class`,`p-1 text-left tutorial-content`);
let eli29sJ = eo('div','VaVf',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let iibjuN = 'mPNsfID' + page;
let cnd7ruw = page == component.currentPage;
this.setState('stfEIry', cnd7ruw);
if (cnd7ruw) { 
let elG7ZgS = eo('div','ozZff'+iibjuN,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iin97c = 'r2ypwRt' + i;
let cndh652 = ! statement.type && component.currentStep >= statement.step;
this.setState('stsvbg7', cndh652);
let cndPZbr = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('stKWPV3', cndPZbr);
let cndtYhr = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stlK8wL', cndtYhr);
if (cndh652) { 
let el6Xnkd = eo('div','XnFff'+iibjuN+iin97c,null,`class`,`p-x-2`);
let elahBuP = eo('div','S4dff'+iibjuN+iin97c,null,`class`,`list`);
let ellOO_C = eo('div','DP7ff'+iibjuN+iin97c,null,`class`,`animate`);
let cmpJVDz = this._lc('cqmMTyGCh', {parent:component,props:{content:statement.text.trim()},state:'stsvbg7',insideLoop:true,index:"" +iibjuN+iin97c});
ec('div');

                    setTimeout(function () {
                        let $el = ellOO_C;
                        
            var animator = DI.resolve('animator');
            animator.animate(ellOO_C, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndPZbr) { 
let el9b9sg = eo('h1','Tzoff'+iibjuN+iin97c,null,`class`,`animate ${ statement.className || '' }`);
let cnd24Xf = statement.icon;
this.setState('stwhZlr', cnd24Xf);
if (cnd24Xf) { 
let elfeovz = eo('i','TbCff'+iibjuN+iin97c,null,`class`,`${fas(statement.icon)} icon`);
ec('i');
}let cndgn8F = statement.image;
this.setState('stU5Fi1', cndgn8F);
if (cndgn8F) { 
let eljkexe = ev('img','HYfff'+iibjuN+iin97c,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = el9b9sg;
                        
            var animator = DI.resolve('animator');
            animator.animate(el9b9sg, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndtYhr) { 
let elsAhQW = eo('p','LN2ff'+iibjuN+iin97c,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = elsAhQW;
                        
            var animator = DI.resolve('animator');
            animator.animate(elsAhQW, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndU_ya = component.currentStep == component.finalStep;
this.setState('stKOKtB', cndU_ya);
if (cndU_ya) { 
let elXXeLX = eo('h1','iTDf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = elXXeLX;
                        
            var animator = DI.resolve('animator');
            animator.animate(elXXeLX, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });