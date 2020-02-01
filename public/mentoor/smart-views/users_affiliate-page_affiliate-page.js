_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {c3UEx3W9z:'gold-icon',c002di48e:'gold-icon',cGiZy4Hpu:'layout'},
                render: function (component) {
                    let cmpQKsK = this._lc('cGiZy4Hpu', {parent:component,content:(layout) => {let elcR6bK = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let elkVuQu = eo('p');
text(`You can earn extra`);
let cmp1GDH = this._lc('c3UEx3W9z', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let elghVEE = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let elZnmqR = eo('p');
text(`Your affiliate link is`);
let elnZyJk = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndxdhy = Is.null(component.copied);
this.setState('strSJim', cndxdhy);
if (cndxdhy) { 
let elNCr0F = eo('button','IR7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let el4fzJX = eo('i','bagf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndlv5k = component.copied;
this.setState('stemp26', cndlv5k);
if (cndlv5k) { 
let elRN7Nl = eo('strong','MoTf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elOIM7e = eo('i','iJyf',null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('strong');
}ec('p');
let elkwhR0 = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let elWkziA = eo('p');
text(`For every active user you invite who answers at least`);
let elvvG4O = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmp4Lno = this._lc('c002di48e', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });