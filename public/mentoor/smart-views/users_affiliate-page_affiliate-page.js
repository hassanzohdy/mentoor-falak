_Component({
                selector: 'affiliate-page',
                c: 'AffiliatePage', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['affiliateUrl','copied','copyUrl','requiredAnswers','affiliateReward'],
                children: {cvvnXD2qP:'gold-icon',ceTQ3K8eN:'gold-icon',cB5XjeVvD:'layout'},
                render: function (component) {
                    let cmpyHhJ = this._lc('cB5XjeVvD', {parent:component,content:(layout) => {let el04mpa = eo('h1',null,null,`class`,`m-b-1`);
text(`Affiliate Program`);
ec('h1');
let eleKJS_ = eo('p');
text(`You can earn extra`);
let cmpwsAv = this._lc('cvvnXD2qP', {parent:component,parentTop:layout});
text(`by inviting your friend to register to the application through an invitation link.`);
ec('p');
let elA_mwo = eo('h1',null,null,`class`,`m-b-1`);
text(`Where to get my affiliate url`);
ec('h1');
let elVfscc = eo('p');
text(`Your affiliate link is`);
let elZaa3l = eo('a',null,null,`class`,`bold teal-text mx-2`,`target`,`_blank`,`href`,`${ component.affiliateUrl }`);
text(component.affiliateUrl);
ec('a');
let cndyoxA = Is.null(component.copied);
this.setState('styQRY8', cndyoxA);
if (cndyoxA) { 
let el9oOUC = eo('button','bq_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.copyUrl()}]},`title`,`${trans(`Copy`)}`,`class`,`text-primary`,`type`,`button`);
text(`(`);
let elQmXWC = eo('i','HeEf',null,`class`,`${fas('object-ungroup') + ' icon'}`);
ec('i');
text(`)`);
ec('button');
}let cndA5b5 = component.copied;
this.setState('st5AN4n', cndA5b5);
if (cndA5b5) { 
let el0cD3G = eo('strong','0j6f',null,`title`,`${trans(`Copied`)}`,`class`,`green-text ml-2`);
let elYhBe_ = eo('i','tLdf',null,`class`,`${fas('check') + ' icon'}`);
ec('i');
ec('strong');
}ec('p');
let eltqxVi = eo('h1',null,null,`class`,`m-b-1`);
text(`What do i get in return`);
ec('h1');
let elsYsOr = eo('p');
text(`For every active user you invite who answers at least`);
let eluoH4S = eo('strong',null,null,`class`,`ml-2 pink-text`);
text(`${ component.requiredAnswers } answers`);
ec('strong');
text(`,
        You get`);
let cmpJO4Z = this._lc('ceTQ3K8eN', {parent:component,parentTop:layout,props:{coins:component.affiliateReward}});
ec('p');
}});

                    this.isReadyToGo();
                }
        });