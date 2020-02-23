_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let elzWZlh = eo('span',null,null,`title`,``,`class`,`remaining-time ${ component.inputs.getAttr('class') }`);
component.timer = elzWZlh;
elzWZlh.cls = {'time-up': component.timeUp};

            for (let className in elzWZlh.cls) {
                elzWZlh.classList.toggle(className, elzWZlh.cls[className]);
            }  
            
                // let elzWZlh = currentElement();

                if (! elzWZlh.__rendered) {
                    elzWZlh.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = elzWZlh;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });