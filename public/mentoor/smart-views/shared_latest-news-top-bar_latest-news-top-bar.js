_Component({
                selector: 'latest-news-top-bar',
                c: 'LatestNewsTopBar', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['goToLatest','markAsSeen'],
                children: {},
                render: function (component) {
                    let el3mTUJ = eo('section',null,null,`id`,`latest-news-bar`,`class`,`fixed-top`);
let elTBSF2 = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goToLatest()}]},`class`,`pointer`);
text(`Project Management System Tool Is Here`);
ec('span');
let elwcjdo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen()}]},`type`,`button`,`class`,`close-icon`);
let elERwaV = eo('i',null,null,`title`,``,`class`,`${fas('times') + ' pointer icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elERwaV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                text(`Close`);
ec('button');
ec('section');

                    this.isReadyToGo();
                }
        });