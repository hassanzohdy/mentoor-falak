_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let elPF8cl = eo('span',null,null,`title`,``,`class`,`remaining-time ${ component.inputs.getAttr('class') }`);
component.timer = elPF8cl;
elPF8cl.cls = {'time-up': component.timeUp};

            for (let className in elPF8cl.cls) {
                elPF8cl.classList.toggle(className, elPF8cl.cls[className]);
            }  
            
                // let elPF8cl = currentElement();

                if (! elPF8cl.__rendered) {
                    elPF8cl.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = elPF8cl;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });