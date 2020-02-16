_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {ct_rjoyJR:'latest-news-top-bar',cqFQOiIut:'header-section',cURFGXIpq:'sidebar',cUFbbrxgK:'footer-section',cRLNUic0W:'gold-icon',cZAUXaL4a:'flk-number-counter',cNgSzZuXk:'flk-modal',cPHzOVxaN:'live-notifications'},
                render: function (component) {
                    let eldwHSb = eo('div',null,null,`id`,`fb-root`);
ec('div');
let elYFOib = eo('div',null,null,`id`,`wrapper`);
elYFOib.cls = {'latest-news': Object.get(component.user, 'seen.latest')};

            for (let className in elYFOib.cls) {
                elYFOib.classList.toggle(className, elYFOib.cls[className]);
            }  
            let cndssxJ = Object.get(component.user, 'seen.latest');
this.setState('stRBbAg', cndssxJ);
if (cndssxJ) { 
let cmplM4c = this._lc('ct_rjoyJR', {parent:component,state:'stRBbAg'});
}let cmp2Nuj = this._lc('cqFQOiIut', {parent:component});
let cmpsGmj = this._lc('cURFGXIpq', {parent:component});
let el2yedV = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let elQEgIX = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmp5FOV = this._lc('cUFbbrxgK', {parent:component});
ec('div');
let cnd1jRy = component.user.dailyReward;
this.setState('st4z7C5', cnd1jRy);
if (cnd1jRy) { 
component.dailyRewardModal = this._lc('cNgSzZuXk', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let elACoGI = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elxMfD4 = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let elSz0SC = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let elpQEuR = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmpM_2_ = this._lc('cRLNUic0W', {parent:component,parentTop:flkModal,props:{large:true},state:'st4z7C5'});
let cmpeBca = this._lc('cZAUXaL4a', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'st4z7C5'});
ec('div');
let cndrHqF = ! component.isSending;
this.setState('stcBiXo', cndrHqF);
let cndxOxL = !(cndrHqF);
this.setState('stq7G35', cndxOxL);
if (cndrHqF) { 
let elqVxMN = eo('button','db7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let elkzLQG = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'st4z7C5'});
}let cmpDdlL = this._lc('cPHzOVxaN', {parent:component});

                    this.isReadyToGo();
                }
        });