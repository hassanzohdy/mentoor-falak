_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {cb2uF1aQu:'latest-news-top-bar',cuxqx8xFJ:'header-section',cSoXXihIE:'sidebar',cXeufD9vx:'footer-section',cEcu_se_W:'gold-icon',cEO21VnWl:'flk-number-counter',coyQEKh83:'flk-modal',cfpK1wZSA:'live-notifications'},
                render: function (component) {
                    let el4Hhpl = eo('div',null,null,`id`,`fb-root`);
ec('div');
let elNG_vC = eo('div',null,null,`class`,` ${cls({'latest-news': Object.get(component.user, 'seen.latest')})}`,`id`,`wrapper`);
let cndpqGY = Object.get(component.user, 'seen.latest');
this.setState('st3uGOg', cndpqGY);
if (cndpqGY) { 
let cmpti4o = this._lc('cb2uF1aQu', {parent:component,state:'st3uGOg'});
}let cmpw6wI = this._lc('cuxqx8xFJ', {parent:component});
let cmpaSkM = this._lc('cSoXXihIE', {parent:component});
let elVAvGx = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let el7u4Ij = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpet0P = this._lc('cXeufD9vx', {parent:component});
ec('div');
let cndFaye = component.user.dailyReward;
this.setState('stmZ2K4', cndFaye);
if (cndFaye) { 
component.dailyRewardModal = this._lc('coyQEKh83', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let elw6NX_ = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elrgvXI = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let el5vSwJ = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let elcjPsA = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmpx27R = this._lc('cEcu_se_W', {parent:component,parentTop:flkModal,props:{large:true},state:'stmZ2K4'});
let cmpsPXR = this._lc('cEO21VnWl', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'stmZ2K4'});
ec('div');
let cndT94x = ! component.isSending;
this.setState('stITc0D', cndT94x);
let cndJuh8 = !(cndT94x);
this.setState('stEa17H', cndJuh8);
if (cndT94x) { 
let elJrDEf = eo('button','S0Lf',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let eluHExN = eo('i',null,null,`class`,`${fas('spinner')} fa-spin icon`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'stmZ2K4'});
}let cmp3iXx = this._lc('cfpK1wZSA', {parent:component});

                    this.isReadyToGo();
                }
        });