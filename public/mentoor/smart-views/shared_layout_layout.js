_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {cKnqiq3F2:'latest-news-top-bar',cPfsL2qHI:'header-section',c30FSSF1H:'sidebar',cn5hvhiAu:'footer-section',ckOMygQzy:'gold-icon',cI9uBKuw4:'flk-number-counter',c58Xtg2Eb:'flk-modal',clept2FPO:'live-notifications'},
                render: function (component) {
                    let elEoq0f = eo('div',null,null,`id`,`fb-root`);
ec('div');
let elDS0JG = eo('div',null,null,`class`,` ${cls({'latest-news': Object.get(component.user, 'seen.latest')})}`,`id`,`wrapper`);
let cndj96g = Object.get(component.user, 'seen.latest');
this.setState('stQwciL', cndj96g);
if (cndj96g) { 
let cmpGZTk = this._lc('cKnqiq3F2', {parent:component,state:'stQwciL'});
}let cmpGvnC = this._lc('cPfsL2qHI', {parent:component});
let cmpNIwu = this._lc('c30FSSF1H', {parent:component});
let elghMuM = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let elPzcEo = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpCKwv = this._lc('cn5hvhiAu', {parent:component});
ec('div');
let cndBzAv = component.user.dailyReward;
this.setState('sts7KIJ', cndBzAv);
if (cndBzAv) { 
component.dailyRewardModal = this._lc('c58Xtg2Eb', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let elTeVDj = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elvarKm = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let elQtcl6 = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let el1mVKv = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmpxzAe = this._lc('ckOMygQzy', {parent:component,parentTop:flkModal,props:{large:true},state:'sts7KIJ'});
let cmp5y57 = this._lc('cI9uBKuw4', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'sts7KIJ'});
ec('div');
let cndQG7K = ! component.isSending;
this.setState('stud9OP', cndQG7K);
let cnd1ulO = !(cndQG7K);
this.setState('stEBc6b', cnd1ulO);
if (cndQG7K) { 
let elhehe9 = eo('button','fl3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let elD2X8i = eo('i',null,null,`class`,`${fas('spinner')} fa-spin icon`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'sts7KIJ'});
}let cmpOPjL = this._lc('clept2FPO', {parent:component});

                    this.isReadyToGo();
                }
        });