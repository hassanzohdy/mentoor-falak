_Component({
                selector: 'latest-news-top-bar',
                c: 'LatestNewsTopBar', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['goToLatest','markAsSeen'],
                children: {},
                render: function (component) {
                    let elVN1bJ = eo('section',null,null,`id`,`latest-news-bar`,`class`,`fixed-top`);
let elREbyC = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goToLatest()}]},`class`,`pointer`);
text(`Project Management System Tool Is Here`);
ec('span');
let elcxy22 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen()}]},`type`,`button`,`class`,`close-icon`);
let elnMcV9 = eo('i',null,null,`title`,``,`class`,`${fas('times')} pointer icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elnMcV9;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                text(`Close`);
ec('button');
ec('section');

                    this.isReadyToGo();
                }
        });