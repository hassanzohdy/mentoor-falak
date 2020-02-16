_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let el_1xzO = ev('img',null,null,`src`,`${assets('images/coins.svg')}`,`class`,`coin-img ${ component.inputs.getAttr('class', '') }`,`alt`,`coins`);
el_1xzO.cls = {large: component.large};

            for (let className in el_1xzO.cls) {
                el_1xzO.classList.toggle(className, el_1xzO.cls[className]);
            }  
            let cndQZlG = component.coins;
this.setState('stVy69N', cndQZlG);
if (cndQZlG) { 
let el_xSBF = eo('strong','XGdf',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });