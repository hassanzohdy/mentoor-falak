_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let elbf5rh = ev('img',null,null,`class`,`coin-img ${ component.inputs.getAttr('class', '') } ${cls({large: component.large})}`,`src`,`${assets('images/coins.svg')}`,`alt`,`coins`);
let cndrhQS = component.coins;
this.setState('stPg3bZ', cndrhQS);
if (cndrhQS) { 
let elp12RK = eo('strong','Wqqf',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });