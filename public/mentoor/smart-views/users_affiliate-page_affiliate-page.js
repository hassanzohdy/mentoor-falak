_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {cdaNu5Tll:'gold-icon',cSWd_X7XD:'gold-icon',cYq4Ybtj8:'layout'},
                render: function (component) {
                    let cmpyaoo = this._lc('cYq4Ybtj8', {parent:component,content:(layout) => {let elUi6RQ = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let elGDzty = eo('p');
text(`You can earn extra`);
let cmphpZd = this._lc('cdaNu5Tll', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let elQ3S1Q = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let el1iJ9O = eo('p');
text(`Your affiliate link is`);
let elAYd0A = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndSFOi = Is.null(component.copied);
this.setState('stFix5J', cndSFOi);
if (cndSFOi) { 
let eln7qK5 = eo('button','wpff',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let el69Vrz = eo('i','sWCf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndxN02 = component.copied;
this.setState('stM3k_d', cndxN02);
if (cndxN02) { 
let elWEbVh = eo('strong','WkQf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elU1P8p = eo('i','s7Af',null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('strong');
}ec('p');
let elNXUqb = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let el1PhwT = eo('p');
text(`For every active user you invite who answers at least`);
let eljjN_b = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmpTYCe = this._lc('cSWd_X7XD', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });