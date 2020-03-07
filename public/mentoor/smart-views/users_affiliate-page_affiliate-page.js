_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {cpNO0jOFu:'gold-icon',cU_AVNduY:'gold-icon',cts2Uw5Ru:'layout'},
                render: function (component) {
                    let cmpoVg1 = this._lc('cts2Uw5Ru', {parent:component,content:(layout) => {let eldb7HH = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let elZ3ZG7 = eo('p');
text(`You can earn extra`);
let cmpJMxj = this._lc('cpNO0jOFu', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let elQWkX3 = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let elBsu8e = eo('p');
text(`Your affiliate link is`);
let elTY2m7 = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndefdb = Is.null(component.copied);
this.setState('stWPwku', cndefdb);
if (cndefdb) { 
let elEmNEh = eo('button','BeJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let el46zAf = eo('i','dk4f',null,`class`,`${fas('object-ungroup')} icon`);
ec('i');
text(`)`);
ec('button');
}let cndRxuf = component.copied;
this.setState('stZrFdd', cndRxuf);
if (cndRxuf) { 
let elsqyMz = eo('strong','goBf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elHYp1U = eo('i','WnPf',null,`class`,`${fas('check')} icon`);
ec('i');
ec('strong');
}ec('p');
let el3Rs4v = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let elp9Q2a = eo('p');
text(`For every active user you invite who answers at least`);
let elfUU_r = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmpfOAc = this._lc('cU_AVNduY', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });