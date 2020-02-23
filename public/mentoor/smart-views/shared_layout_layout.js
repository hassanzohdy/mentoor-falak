_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {ci2i4Hztk:'latest-news-top-bar',cAz6JfZgV:'header-section',c8IO2YdDO:'sidebar',czS3QgYMS:'footer-section',c59XwB_vP:'gold-icon',chZgMVJCs:'flk-number-counter',cZeBgeS42:'flk-modal',cOGyRNwsi:'live-notifications'},
                render: function (component) {
                    let el04EzG = eo('div',null,null,`id`,`fb-root`);
ec('div');
let elLd2uc = eo('div',null,null,`id`,`wrapper`);
elLd2uc.cls = {'latest-news': Object.get(component.user, 'seen.latest')};

            for (let className in elLd2uc.cls) {
                elLd2uc.classList.toggle(className, elLd2uc.cls[className]);
            }  
            let cnd8nWY = Object.get(component.user, 'seen.latest');
this.setState('stFGWPB', cnd8nWY);
if (cnd8nWY) { 
let cmpKO_P = this._lc('ci2i4Hztk', {parent:component,state:'stFGWPB'});
}let cmpKpXq = this._lc('cAz6JfZgV', {parent:component});
let cmpj_ZZ = this._lc('c8IO2YdDO', {parent:component});
let elgwRHd = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let el_ZeLU = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpVmyj = this._lc('czS3QgYMS', {parent:component});
ec('div');
let cndEqfU = component.user.dailyReward;
this.setState('st33JIa', cndEqfU);
if (cndEqfU) { 
component.dailyRewardModal = this._lc('cZeBgeS42', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let elf_cvg = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elS_u2l = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let elyupcE = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let el8uvZC = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmpgui1 = this._lc('c59XwB_vP', {parent:component,parentTop:flkModal,props:{large:true},state:'st33JIa'});
let cmpe9Sl = this._lc('chZgMVJCs', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'st33JIa'});
ec('div');
let cnd4Pfq = ! component.isSending;
this.setState('stxXt2M', cnd4Pfq);
let cndK9S1 = !(cnd4Pfq);
this.setState('stGoN8Q', cndK9S1);
if (cnd4Pfq) { 
let elouGbz = eo('button','K2Kf',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let el8dewh = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'st33JIa'});
}let cmpTWEY = this._lc('cOGyRNwsi', {parent:component});

                    this.isReadyToGo();
                }
        });