_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let eltHOnY = eo('span',null,null,`title`,``,`class`,`remaining-time ${ component.inputs.getAttr('class') }`);
component.timer = eltHOnY;
eltHOnY.cls = {'time-up': component.timeUp};

            for (let className in eltHOnY.cls) {
                eltHOnY.classList.toggle(className, eltHOnY.cls[className]);
            }  
            
                // let eltHOnY = currentElement();

                if (! eltHOnY.__rendered) {
                    eltHOnY.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = eltHOnY;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });