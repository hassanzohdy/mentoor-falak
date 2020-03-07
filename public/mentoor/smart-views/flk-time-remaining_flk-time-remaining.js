_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let elah4xd = eo('span',null,null,`class`,`remaining-time ${ component.inputs.getAttr('class') } ${cls({'time-up': component.timeUp})}`,`title`,``);
component.timer = elah4xd;

                // let elah4xd = currentElement();

                if (! elah4xd.__rendered) {
                    elah4xd.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = elah4xd;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });