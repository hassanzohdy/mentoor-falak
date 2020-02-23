_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let elXDuco = ev('img',null,null,`src`,`${assets('images/coins.svg')}`,`class`,`coin-img ${ component.inputs.getAttr('class', '') }`,`alt`,`coins`);
elXDuco.cls = {large: component.large};

            for (let className in elXDuco.cls) {
                elXDuco.classList.toggle(className, elXDuco.cls[className]);
            }  
            let cndVuhg = component.coins;
this.setState('stcuPOE', cndVuhg);
if (cndVuhg) { 
let el5Twpz = eo('strong','aoCf',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });