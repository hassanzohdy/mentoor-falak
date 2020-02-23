_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {c8nYBGR04:'gold-icon',crj9TfbSi:'gold-icon',cl6Szf7PI:'layout'},
                render: function (component) {
                    let cmpNy2n = this._lc('cl6Szf7PI', {parent:component,content:(layout) => {let el28OH2 = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let elrnujd = eo('p');
text(`You can earn extra`);
let cmp407v = this._lc('c8nYBGR04', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let el2AmKu = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let elFARdS = eo('p');
text(`Your affiliate link is`);
let elboW8s = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndSeYR = Is.null(component.copied);
this.setState('stHwYxH', cndSeYR);
if (cndSeYR) { 
let elkaiIh = eo('button','m5Df',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elNeY6Y = eo('i','6yKf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cnduESP = component.copied;
this.setState('stLcRPr', cnduESP);
if (cnduESP) { 
let elRSRzm = eo('strong','KVhf',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let el2d72B = eo('i','xUsf',null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('strong');
}ec('p');
let elMAq_t = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let eljiIhV = eo('p');
text(`For every active user you invite who answers at least`);
let elFPP0g = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmpsy3x = this._lc('crj9TfbSi', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });