_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {c_SLzNT7C:'gold-icon',cSOY6uwqF:'gold-icon',cwnQXBOK0:'layout'},
                render: function (component) {
                    let cmpHMYI = this._lc('cwnQXBOK0', {parent:component,content:(layout) => {let elAMrOV = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let elc1D3u = eo('p');
text(`You can earn extra`);
let cmpvf_j = this._lc('c_SLzNT7C', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let el5_WVJ = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let elA4n2l = eo('p');
text(`Your affiliate link is`);
let elxinbB = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndvwyH = Is.null(component.copied);
this.setState('styeTan', cndvwyH);
if (cndvwyH) { 
let elsXyBG = eo('button','ecIf',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let eljex8W = eo('i','9Qdf',null,`class`,`${fas('object-ungroup')} icon`);
ec('i');
text(`)`);
ec('button');
}let cndSRdv = component.copied;
this.setState('stxNeMI', cndSRdv);
if (cndSRdv) { 
let elmyiLf = eo('strong','HpHf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elJ1HZd = eo('i','ruHf',null,`class`,`${fas('check')} icon`);
ec('i');
ec('strong');
}ec('p');
let eliKHl8 = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let elGkO7O = eo('p');
text(`For every active user you invite who answers at least`);
let eljpssQ = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmp9xGc = this._lc('cSOY6uwqF', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });