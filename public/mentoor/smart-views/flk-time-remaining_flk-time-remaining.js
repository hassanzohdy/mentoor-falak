_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let elIAnlR = eo('span',null,null,`title`,``,`class`,`remaining-time ${ component.inputs.getAttr('class') }`);
component.timer = elIAnlR;
elIAnlR.cls = {'time-up': component.timeUp};

            for (let className in elIAnlR.cls) {
                elIAnlR.classList.toggle(className, elIAnlR.cls[className]);
            }  
            
                // let elIAnlR = currentElement();

                if (! elIAnlR.__rendered) {
                    elIAnlR.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = elIAnlR;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });