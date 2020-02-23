_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let el9WkcA = ev('img',null,null,`src`,`${assets('images/coins.svg')}`,`class`,`coin-img ${ component.inputs.getAttr('class', '') }`,`alt`,`coins`);
el9WkcA.cls = {large: component.large};

            for (let className in el9WkcA.cls) {
                el9WkcA.classList.toggle(className, el9WkcA.cls[className]);
            }  
            let cnduYCQ = component.coins;
this.setState('stEZOVo', cnduYCQ);
if (cnduYCQ) { 
let ellMOhU = eo('strong','hDif',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });