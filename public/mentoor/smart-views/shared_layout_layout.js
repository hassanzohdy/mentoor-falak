_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {cPdhfNiPM:'latest-news-top-bar',cWZPO6Xzx:'header-section',c1jvGJnff:'sidebar',cETAEWpIE:'footer-section',c3YszOTOH:'gold-icon',coiY3BtkS:'flk-number-counter',cx_eDhzIw:'flk-modal',coQDan1DP:'live-notifications'},
                render: function (component) {
                    let el0cNV1 = eo('div',null,null,`id`,`fb-root`);
ec('div');
let el9jbg7 = eo('div',null,null,`class`,` ${cls({'latest-news': Object.get(component.user, 'seen.latest')})}`,`id`,`wrapper`);
let cnd7RId = Object.get(component.user, 'seen.latest');
this.setState('stFdKcH', cnd7RId);
if (cnd7RId) { 
let cmpnsZ4 = this._lc('cPdhfNiPM', {parent:component,state:'stFdKcH'});
}let cmpSH1t = this._lc('cWZPO6Xzx', {parent:component});
let cmpawY1 = this._lc('c1jvGJnff', {parent:component});
let elwqpan = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let elgRMdn = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpueVq = this._lc('cETAEWpIE', {parent:component});
ec('div');
let cndCo6c = component.user.dailyReward;
this.setState('stYeumD', cndCo6c);
if (cndCo6c) { 
component.dailyRewardModal = this._lc('cx_eDhzIw', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let el48W5O = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elM3_bs = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let elU4i3d = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let elxWrXe = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmp67ve = this._lc('c3YszOTOH', {parent:component,parentTop:flkModal,props:{large:true},state:'stYeumD'});
let cmp5f35 = this._lc('coiY3BtkS', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'stYeumD'});
ec('div');
let cndNv6y = ! component.isSending;
this.setState('staWpj8', cndNv6y);
let cndOLGw = !(cndNv6y);
this.setState('stpRoz8', cndOLGw);
if (cndNv6y) { 
let elY4Y9F = eo('button','cFkf',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let elICVHN = eo('i',null,null,`class`,`${fas('spinner')} fa-spin icon`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'stYeumD'});
}let cmpKy6r = this._lc('coQDan1DP', {parent:component});

                    this.isReadyToGo();
                }
        });