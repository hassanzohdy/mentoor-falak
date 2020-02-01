_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {cffiq0RPq:'gold-icon',cWPFzMF2D:'gold-icon',cmqXN8mc4:'layout'},
                render: function (component) {
                    let cmped2u = this._lc('cmqXN8mc4', {parent:component,content:(layout) => {let elVLZVz = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let eliAlub = eo('p');
text(`You can earn extra`);
let cmpa6In = this._lc('cffiq0RPq', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let elNYESQ = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let eltVNUN = eo('p');
text(`Your affiliate link is`);
let elIovU7 = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndN2Y2 = Is.null(component.copied);
this.setState('stv4fyB', cndN2Y2);
if (cndN2Y2) { 
let elHXpwC = eo('button','VaEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elpO_fz = eo('i','267f',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndlPdx = component.copied;
this.setState('stVJblp', cndlPdx);
if (cndlPdx) { 
let elhRqHr = eo('strong','Yhjf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let el__vLx = eo('i','Jp8f',null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('strong');
}ec('p');
let elpX2ap = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let el4z5li = eo('p');
text(`For every active user you invite who answers at least`);
let elAnsRx = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmp7j7j = this._lc('cWPFzMF2D', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });