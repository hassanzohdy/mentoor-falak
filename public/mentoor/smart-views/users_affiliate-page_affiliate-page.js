_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {cFP87wLxD:'gold-icon',cIUfB_ikF:'gold-icon',cdkt8w_kP:'layout'},
                render: function (component) {
                    let cmpJahR = this._lc('cdkt8w_kP', {parent:component,content:(layout) => {let elVCBJ6 = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let elOg4hM = eo('p');
text(`You can earn extra`);
let cmpV9gk = this._lc('cFP87wLxD', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let ellDznZ = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let el1nl9q = eo('p');
text(`Your affiliate link is`);
let elT_8yO = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndIimh = Is.null(component.copied);
this.setState('stIkTlt', cndIimh);
if (cndIimh) { 
let el9McUg = eo('button','PCmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elfoulb = eo('i','bC4f',null,`class`,`${fas('object-ungroup')} icon`);
ec('i');
text(`)`);
ec('button');
}let cndm3sR = component.copied;
this.setState('st1E0Ze', cndm3sR);
if (cndm3sR) { 
let elMVzqz = eo('strong','RE5f',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elS_ZDS = eo('i','NjXf',null,`class`,`${fas('check')} icon`);
ec('i');
ec('strong');
}ec('p');
let elLTtnK = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let elIukT0 = eo('p');
text(`For every active user you invite who answers at least`);
let el9K_Uk = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmpRW3P = this._lc('cIUfB_ikF', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });