_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let elHzpPb = ev('img',null,null,`class`,`coin-img ${ component.inputs.getAttr('class', '') } ${cls({large: component.large})}`,`src`,`${assets('images/coins.svg')}`,`alt`,`coins`);
let cndJrbM = component.coins;
this.setState('st7UJX1', cndJrbM);
if (cndJrbM) { 
let eli8GiG = eo('strong','MXVf',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });