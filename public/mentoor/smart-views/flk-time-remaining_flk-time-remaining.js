_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let el_0LGd = eo('span',null,null,`title`,``,`class`,`remaining-time ${ component.inputs.getAttr('class') }`);
component.timer = el_0LGd;
el_0LGd.cls = {'time-up': component.timeUp};

            for (let className in el_0LGd.cls) {
                el_0LGd.classList.toggle(className, el_0LGd.cls[className]);
            }  
            
                // let el_0LGd = currentElement();

                if (! el_0LGd.__rendered) {
                    el_0LGd.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = el_0LGd;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });