_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let elhlvPh = ev('img',null,null,`class`,`coin-img ${ component.inputs.getAttr('class', '') } ${cls({large: component.large})}`,`src`,`${assets('images/coins.svg')}`,`alt`,`coins`);
let cnd0I1d = component.coins;
this.setState('st9VBWW', cnd0I1d);
if (cnd0I1d) { 
let elf5HPp = eo('strong','hynf',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });