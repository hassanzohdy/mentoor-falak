_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {cSeI0uQXk:'latest-news-top-bar',cj_xT5Za4:'header-section',cAtQOJCKP:'sidebar',cBfiC9ccI:'footer-section',cg4cpAaQU:'gold-icon',cB7o9QeTT:'flk-number-counter',cRBdKj5TA:'flk-modal',cKcAk7GTV:'live-notifications'},
                render: function (component) {
                    let elmbiGR = eo('div',null,null,`id`,`fb-root`);
ec('div');
let el5DZpN = eo('div',null,null,`id`,`wrapper`);
el5DZpN.cls = {'latest-news': Object.get(component.user, 'seen.latest')};

            for (let className in el5DZpN.cls) {
                el5DZpN.classList.toggle(className, el5DZpN.cls[className]);
            }  
            let cndy9ZJ = Object.get(component.user, 'seen.latest');
this.setState('stpLRkn', cndy9ZJ);
if (cndy9ZJ) { 
let cmpMXzm = this._lc('cSeI0uQXk', {parent:component,state:'stpLRkn'});
}let cmpiIw7 = this._lc('cj_xT5Za4', {parent:component});
let cmpsVZA = this._lc('cAtQOJCKP', {parent:component});
let elFUFLU = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let elKBFci = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpRZul = this._lc('cBfiC9ccI', {parent:component});
ec('div');
let cndSyxd = component.user.dailyReward;
this.setState('stlmwTN', cndSyxd);
if (cndSyxd) { 
component.dailyRewardModal = this._lc('cRBdKj5TA', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let elumYTh = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elWUFF8 = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let elHzbyp = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let elpZl9p = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmpcVg_ = this._lc('cg4cpAaQU', {parent:component,parentTop:flkModal,props:{large:true},state:'stlmwTN'});
let cmplaBw = this._lc('cB7o9QeTT', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'stlmwTN'});
ec('div');
let cndfcyx = ! component.isSending;
this.setState('stasHqP', cndfcyx);
let cndlWAL = !(cndfcyx);
this.setState('stXhRTv', cndlWAL);
if (cndfcyx) { 
let elqhnAS = eo('button','iWrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let elh7UT3 = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'stlmwTN'});
}let cmp7W1a = this._lc('cKcAk7GTV', {parent:component});

                    this.isReadyToGo();
                }
        });