_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {cRNtx8Qlp:'latest-news-top-bar',cJmndRtJ2:'header-section',cQQjTW_WH:'sidebar',cMkZUpGP9:'footer-section',cwGY7EmwG:'gold-icon',ctxxzK4pt:'flk-number-counter',c6K4z62T_:'flk-modal',cjSlYtlQB:'live-notifications'},
                render: function (component) {
                    let elP_qCm = eo('div',null,null,`id`,`fb-root`);
ec('div');
let elXrBCW = eo('div',null,null,`id`,`wrapper`);
elXrBCW.cls = {'latest-news': Object.get(component.user, 'seen.latest')};

            for (let className in elXrBCW.cls) {
                elXrBCW.classList.toggle(className, elXrBCW.cls[className]);
            }  
            let cndAE8W = Object.get(component.user, 'seen.latest');
this.setState('stGfea1', cndAE8W);
if (cndAE8W) { 
let cmpTmug = this._lc('cRNtx8Qlp', {parent:component,state:'stGfea1'});
}let cmpZk5l = this._lc('cJmndRtJ2', {parent:component});
let cmp9G53 = this._lc('cQQjTW_WH', {parent:component});
let elWmiwk = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let elol5Vu = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpuzVm = this._lc('cMkZUpGP9', {parent:component});
ec('div');
let cndi_yX = component.user.dailyReward;
this.setState('stI9zo3', cndi_yX);
if (cndi_yX) { 
component.dailyRewardModal = this._lc('c6K4z62T_', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let ellBkO3 = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elD9WIL = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let el8yBqB = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let el3uuwg = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmpDLfz = this._lc('cwGY7EmwG', {parent:component,parentTop:flkModal,props:{large:true},state:'stI9zo3'});
let cmpBUhj = this._lc('ctxxzK4pt', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'stI9zo3'});
ec('div');
let cndL_yF = ! component.isSending;
this.setState('stdZYM3', cndL_yF);
let cndHsLh = !(cndL_yF);
this.setState('stonhQt', cndHsLh);
if (cndL_yF) { 
let elBxKca = eo('button','sC0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let elvejOO = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'stI9zo3'});
}let cmpC2vc = this._lc('cjSlYtlQB', {parent:component});

                    this.isReadyToGo();
                }
        });