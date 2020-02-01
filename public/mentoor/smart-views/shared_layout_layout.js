_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {cunvpL7Au:'latest-news-top-bar',cD8S0usxE:'header-section',cXM0nfXL_:'sidebar',cJ1BRU8Mm:'footer-section',cq1hIfK8D:'gold-icon',cFE3OvvZF:'flk-number-counter',c0jf1vYx2:'flk-modal',cAwNJk9uf:'live-notifications'},
                render: function (component) {
                    let elERMJ8 = eo('div',null,null,`id`,`fb-root`);
ec('div');
let elF2VZH = eo('div',null,null,`id`,`wrapper`);
elF2VZH.cls = {'latest-news': Object.get(component.user, 'seen.latest')};

            for (let className in elF2VZH.cls) {
                elF2VZH.classList.toggle(className, elF2VZH.cls[className]);
            }  
            let cndAx99 = Object.get(component.user, 'seen.latest');
this.setState('stEX4bI', cndAx99);
if (cndAx99) { 
let cmps_tv = this._lc('cunvpL7Au', {parent:component,state:'stEX4bI'});
}let cmpUbo_ = this._lc('cD8S0usxE', {parent:component});
let cmpDaGU = this._lc('cXM0nfXL_', {parent:component});
let elEaJGN = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let elClzpN = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpl6nh = this._lc('cJ1BRU8Mm', {parent:component});
ec('div');
let cnd0ih0 = component.user.dailyReward;
this.setState('stm_8kV', cnd0ih0);
if (cnd0ih0) { 
component.dailyRewardModal = this._lc('c0jf1vYx2', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let elk3sS1 = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let els2JlU = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let elQ0CNC = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let el8MYI9 = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmppDev = this._lc('cq1hIfK8D', {parent:component,parentTop:flkModal,props:{large:true},state:'stm_8kV'});
let cmpYPNC = this._lc('cFE3OvvZF', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'stm_8kV'});
ec('div');
let cndRRom = ! component.isSending;
this.setState('st_VmJD', cndRRom);
let cndbkF1 = !(cndRRom);
this.setState('stKU7O1', cndbkF1);
if (cndRRom) { 
let elodIHI = eo('button','p8rf',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let eliZ1bE = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'stm_8kV'});
}let cmp4AbX = this._lc('cAwNJk9uf', {parent:component});

                    this.isReadyToGo();
                }
        });