_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {c_qofNOEW:'gold-icon',c_P7m9WWc:'gold-icon',cgMme_aE1:'layout'},
                render: function (component) {
                    let cmp0JkN = this._lc('cgMme_aE1', {parent:component,content:(layout) => {let elsNMST = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let elOYLzt = eo('p');
text(`You can earn extra`);
let cmpQ1Z6 = this._lc('c_qofNOEW', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let elzTW2x = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let el4OInt = eo('p');
text(`Your affiliate link is`);
let elgB3HM = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndvE_Z = Is.null(component.copied);
this.setState('stoQ3DJ', cndvE_Z);
if (cndvE_Z) { 
let els50cr = eo('button','1B7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elNNcEY = eo('i','MH7f',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndY6w5 = component.copied;
this.setState('stP_H0n', cndY6w5);
if (cndY6w5) { 
let elmWQX6 = eo('strong','uYqf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let eljQSuQ = eo('i','2Upf',null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('strong');
}ec('p');
let elKp7aA = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let els_hah = eo('p');
text(`For every active user you invite who answers at least`);
let el1pp8B = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmpEtwJ = this._lc('c_P7m9WWc', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });