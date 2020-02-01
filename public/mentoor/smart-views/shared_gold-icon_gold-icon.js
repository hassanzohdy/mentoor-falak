_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let elbNL7S = ev('img',null,null,`src`,`${assets('images/coins.svg')}`,`class`,`coin-img ${ component.inputs.getAttr('class', '') }`,`alt`,`coins`);
elbNL7S.cls = {large: component.large};

            for (let className in elbNL7S.cls) {
                elbNL7S.classList.toggle(className, elbNL7S.cls[className]);
            }  
            let cndv_34 = component.coins;
this.setState('stV7Sa_', cndv_34);
if (cndv_34) { 
let el0p8an = eo('strong','9dff',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });