_Component({
                selector: 'flk-time-remaining',
                c: 'FlkTimeRemaining', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tooltip','title','timeUp'],
                children: {},
                render: function (component) {
                    let elm5P37 = eo('span',null,null,`class`,`remaining-time ${ component.inputs.getAttr('class') } ${cls({'time-up': component.timeUp})}`,`title`,``);
component.timer = elm5P37;

                // let elm5P37 = currentElement();

                if (! elm5P37.__rendered) {
                    elm5P37.__rendered = true;
                } else {
                    skip();
                }
            ec('span');

                    setTimeout(function () {
                        let $el = elm5P37;
                        
            component.tooltip && tippyTooltip($el, {arrow:true,content:`${component.title}`});
        ;
                    }, 20);                
                
                    this.isReadyToGo();
                }
        });