_Component({
                selector: 'layout',
                c: 'LayoutWrapper', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','redeem','isSending','redeemDailyLoginReward'],
                children: {cG9__ugsy:'latest-news-top-bar',cXrGdoW1r:'header-section',c3nNSuflk:'sidebar',c9gSW54UK:'footer-section',cbZYPNeq0:'gold-icon',cabXPtZWN:'flk-number-counter',cD0rrRKO3:'flk-modal',cJVaks0ZX:'live-notifications'},
                render: function (component) {
                    let elVYHQH = eo('div',null,null,`id`,`fb-root`);
ec('div');
let elqApX4 = eo('div',null,null,`id`,`wrapper`);
elqApX4.cls = {'latest-news': Object.get(component.user, 'seen.latest')};

            for (let className in elqApX4.cls) {
                elqApX4.classList.toggle(className, elqApX4.cls[className]);
            }  
            let cndtwup = Object.get(component.user, 'seen.latest');
this.setState('stscNTZ', cndtwup);
if (cndtwup) { 
let cmp81eb = this._lc('cG9__ugsy', {parent:component,state:'stscNTZ'});
}let cmpiXoa = this._lc('cXrGdoW1r', {parent:component});
let cmpB2H1 = this._lc('c3nNSuflk', {parent:component});
let elAeI8A = eo('main',null,null,`role`,`main`,`class`,`${ component.inputs.getOption('class', '') }`);
let elcP9xu = eo('div',null,null,`class`,`container-fluid`);

        if (this.hasContent()) {
            this.content();
        }ec('div');
ec('main');
let cmpgDkT = this._lc('c9gSW54UK', {parent:component});
ec('div');
let cndNrCr = component.user.dailyReward;
this.setState('stueLgw', cndNrCr);
if (cndNrCr) { 
component.dailyRewardModal = this._lc('cD0rrRKO3', {parent:component,props:{esc:false,backdrop:false,closeBtn:false},content:(flkModal) => {let elnwd4X = eo('section',null,null,`class`,`text-center comic-font daily-login-reward`);
let elm_nwV = eo('h1',null,null,`class`,`m-t-1 m-b-2`);
text(`Daily login Reward`);
ec('h1');
let eltTOsC = eo('p',null,null,`class`,`reward-note`);
text(`Every day you login to the application, you'll receive a good random reward!`);
ec('p');
let elbfAiW = eo('div',null,null,`class`,`m-t-0 m-b-2`);
let cmpxzr3 = this._lc('cbZYPNeq0', {parent:component,parentTop:flkModal,props:{large:true},state:'stueLgw'});
let cmpe3Cd = this._lc('cabXPtZWN', {parent:component,parentTop:flkModal,props:{number:component.user.dailyReward},events:{onfinish:function(e) {let $el = this; component.redeem = true}},attrs:{class:'d-inline-block'},state:'stueLgw'});
ec('div');
let cnd6wI6 = ! component.isSending;
this.setState('stytUuP', cnd6wI6);
let cnda9Pv = !(cnd6wI6);
this.setState('stW3L8Z', cnda9Pv);
if (cnd6wI6) { 
let elF_Jls = eo('button','Trhf',null, eventListeners, {onclick:[function(e) {var $el = this;component.redeemDailyLoginReward()}]}, boolAttrs, {disabled:component.redeem === false},`class`,`btn comic-btn green`);
text(`Redeem`);
ec('button');
}else { 
let elp3FCK = eo('i',null,null,`class`,`${fas('spinner') + ' fa-spin icon'}`);
ec('i');
}ec('section');
},attrs:{theme:'dark'},state:'stueLgw'});
}let cmp9Xfv = this._lc('cJVaks0ZX', {parent:component});

                    this.isReadyToGo();
                }
        });