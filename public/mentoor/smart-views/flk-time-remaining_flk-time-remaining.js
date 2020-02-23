_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let el_pBE0 = eo('span',null,null,`title`,``,`class`,`remaining-time ${ component.inputs.getAttr('class') }`);
component.timer = el_pBE0;
el_pBE0.cls = {'time-up': component.timeUp};

            for (let className in el_pBE0.cls) {
                el_pBE0.classList.toggle(className, el_pBE0.cls[className]);
            }  
            
                // let el_pBE0 = currentElement();

                if (! el_pBE0.__rendered) {
                    el_pBE0.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = el_pBE0;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });