_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let elQ3zAL = eo('span',null,null,`class`,`remaining-time ${ component.inputs.getAttr('class') } ${cls({'time-up': component.timeUp})}`,`title`,``);
component.timer = elQ3zAL;

                // let elQ3zAL = currentElement();

                if (! elQ3zAL.__rendered) {
                    elQ3zAL.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = elQ3zAL;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });