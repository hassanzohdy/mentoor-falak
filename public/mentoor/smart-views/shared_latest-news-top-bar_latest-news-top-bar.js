_Component({
                selector: 'latest-news-top-bar',
                c: 'LatestNewsTopBar', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['goToLatest','markAsSeen'],
                children: {},
                render: function (component) {
                    let eldH5Fx = eo('section',null,null,`id`,`latest-news-bar`,`class`,`fixed-top`);
let el8N3kg = eo('span',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goToLatest()}]},`class`,`pointer`);
text(`Project Management System Tool Is Here`);
ec('span');
let elYJsEX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.markAsSeen()}]},`type`,`button`,`class`,`close-icon`);
let elT7nqJ = eo('i',null,null,`title`,``,`class`,`${fas('times') + ' pointer icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elT7nqJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Close')}`});
        ;
                    }, 20);                
                text(`Close`);
ec('button');
ec('section');

                    this.isReadyToGo();
                }
        });