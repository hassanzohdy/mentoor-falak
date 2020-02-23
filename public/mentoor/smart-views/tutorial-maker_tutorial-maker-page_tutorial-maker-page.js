_Component({
                selector: 'tutorial-maker-page',
                c: 'TutorialMakerPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['hasItems','currentStep','finalStep','texts','currentPage'],
                children: {cMTC8UQDX:'markdown'},
                render: function (component) {
                    let elFJeft = eo('div',null,null,`class`,`dark`);
elFJeft.cls = {items: component.hasItems};

            for (let className in elFJeft.cls) {
                elFJeft.classList.toggle(className, elFJeft.cls[className]);
            }  
            let cndcXPI = component.hasItems;
this.setState('stignuT', cndcXPI);
if (cndcXPI) { 
let el80z_h = eo('div','P_ff',null,`class`,`fb-page`);
let el9hFd_ = eo('i','3gSf',null,`class`,`${fas('facebook') + ' icon'}`);
ec('i');
let elhYnPt = eo('span','FxJf',null,`class`,``);
text(`/mentoor.io`);
ec('span');
ec('div');
}let cndOOT4 = component.hasItems;
this.setState('stS5m_6', cndOOT4);
if (cndOOT4) { 
let elFi4Ip = eo('div','pEof',null,`class`,`items-heading bold text-center white-text`);
let elgaMZX = ev('img','gajf',null,`src`,`${assets('images/en.png')}`,`class`,`sm`);
elgaMZX.cls = {gray: component.currentStep != component.finalStep};

            for (let className in elgaMZX.cls) {
                elgaMZX.classList.toggle(className, elgaMZX.cls[className]);
            }  
            let eljJbfv = eo('h1','csrf');
text(`Problem Solving`);
ec('h1');
let elvZOpk = eo('p','flsf');
text(`Find the missing number`);
ec('p');
let elXnkcO = ev('img','GH7f',null,`src`,`https://restful.mentoor.io/einstein-categories/esURtDIQPmMvZRVVFMI7DwMW7EeQKDWmKDqjqRFt.png`,`class`,`big`);
let elqvHld = eo('div','uxEf',null,`class`,`overlay`);
ec('div');
let el309f2 = eo('div','Cggf',null,`id`,`logo`);
let elhyiFj = eo('h1','i7rf',null,`id`,`m`);
text(`M`);
ec('h1');
let el3brY7 = eo('h1','6atf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
let elsCMQE = eo('h4','Knwf',null,`class`,`hashtag`);
let elO7x3q = eo('div','Eq8f');
text(`#mentoor_einstein`);
ec('div');
ec('h4');
ec('div');
}let cndleS7 = ! component.hasItems;
this.setState('stP46Km', cndleS7);
if (cndleS7) { 
let el2lNlT = eo('h1','RbZf',null,`class`,`text-center white-text`);
text(`What Is`);
ec('h1');
let el0NJz1 = eo('div','e4pf',null,`class`,`m-t-1`);
ec('div');
let elpQ0bM = eo('h1','KBgf',null,`class`,`master`);
text(`Unit testing`);
ec('h1');
let el9nln0 = eo('h1','Mj7f',null,`class`,`ar`);
text(`يعني إيه`);
ec('h1');
let el277Io = eo('div','8RPf',null,`class`,`overlay`);
ec('div');
let elXYozN = eo('h4','Bttf',null,`class`,`hashtag`);
let elWQLn1 = eo('div','FTOf');
text(`#mentoor_what_does_it_mean`);
ec('div');
ec('h4');
let elWzkRE = eo('div','SBhf',null,`id`,`logo`);
let elERUMb = eo('h1','g7Bf',null,`id`,`m`);
text(`M`);
ec('h1');
let el9U5_E = eo('h1','nuBf',null,`id`,`name`,`class`,`inline`);
text(`mentoor.io`);
ec('h1');
ec('div');
}let cnd8kYH = component.hasItems;
this.setState('st86Hus', cnd8kYH);
if (cnd8kYH) { 
let elyGPrX = eo('div','x65f',null,`class`,`p-1 text-left tutorial-content`);
let elHz3sJ = eo('div','F1Hf',null,`class`,``);
for (let page in component.texts) {
let texts = component.texts[page]; 
 let iiuQIB = 'vXjLeWV' + page;
let cndMJTR = page == component.currentPage;
this.setState('stnTLKr', cndMJTR);
if (cndMJTR) { 
let elb5XpF = eo('div','fSBff'+iiuQIB,null,`class`,`page`);
for (let i in texts) {
let statement = texts[i]; 
 let iigNr_ = '_roNVOX' + i;
let cndoqy9 = ! statement.type && component.currentStep >= statement.step;
this.setState('stvg7AN', cndoqy9);
let cndefac = statement.type == 'h1' && component.currentStep >= statement.step;
this.setState('steE97R', cndefac);
let cndRASh = statement.type == 'p' && component.currentStep >= statement.step;
this.setState('stb596t', cndRASh);
if (cndoqy9) { 
let elCYWnd = eo('div','vLrff'+iiuQIB+iigNr_,null,`class`,`p-x-2`);
let elFkqbj = eo('div','lRqff'+iiuQIB+iigNr_,null,`class`,`list`);
let elBK1te = eo('div','fBJff'+iiuQIB+iigNr_,null,`class`,`animate`);
let cmpvkKq = this._lc('cMTC8UQDX', {parent:component,props:{content:statement.text.trim()},state:'stvg7AN',insideLoop:true,index:"" +iiuQIB+iigNr_});
ec('div');

                    setTimeout(function () {
                        let $el = elBK1te;
                        
            var animator = DI.resolve('animator');
            animator.animate(elBK1te, statement.animation, 'normal');
        ;
                    }, 20);                
                ec('div');
ec('div');
}else if (cndefac) { 
let elVIJKc = eo('h1','Jckff'+iiuQIB+iigNr_,null,`class`,`animate ${ statement.className || '' }`);
let cndTpt2 = statement.icon;
this.setState('stEYCfi', cndTpt2);
if (cndTpt2) { 
let elh3VIq = eo('i','bZpff'+iiuQIB+iigNr_,null,`class`,`${fas(statement.icon) + ' icon'}`);
ec('i');
}let cndiq29 = statement.image;
this.setState('stmK7pt', cndiq29);
if (cndiq29) { 
let ela0zli = ev('img','0z1ff'+iiuQIB+iigNr_,null,`src`,`${statement.image}`);
}text( statement.text );
ec('h1');

                    setTimeout(function () {
                        let $el = elVIJKc;
                        
            var animator = DI.resolve('animator');
            animator.animate(elVIJKc, statement.animation, 'normal');
        ;
                    }, 20);                
                }else if (cndRASh) { 
let elfD_Eg = eo('p','hKMff'+iiuQIB+iigNr_,null,`class`,`animate`);
text(statement.text);
ec('p');

                    setTimeout(function () {
                        let $el = elfD_Eg;
                        
            var animator = DI.resolve('animator');
            animator.animate(elfD_Eg, statement.animation, 'normal');
        ;
                    }, 20);                
                }}
ec('div');
}}
let cndeDVS = component.currentStep == component.finalStep;
this.setState('stFsPe8', cndeDVS);
if (cndeDVS) { 
let el7_OWF = eo('h1','5qYf',null,`class`,`bold animate text-center m-t-3`);
text(`Thank you!`);
ec('h1');

                    setTimeout(function () {
                        let $el = el7_OWF;
                        
            var animator = DI.resolve('animator');
            animator.animate(el7_OWF, 'fadeIn', 'normal');
        ;
                    }, 20);                
                }ec('div');
ec('div');
}ec('div');

                    this.isReadyToGo();
                }
        });