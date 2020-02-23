_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let eljfloV = ev('img',null,null,`src`,`${assets('images/coins.svg')}`,`class`,`coin-img ${ component.inputs.getAttr('class', '') }`,`alt`,`coins`);
eljfloV.cls = {large: component.large};

            for (let className in eljfloV.cls) {
                eljfloV.classList.toggle(className, eljfloV.cls[className]);
            }  
            let cndF_Qg = component.coins;
this.setState('stoaUv4', cndF_Qg);
if (cndF_Qg) { 
let elQydUO = eo('strong','IYUf',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });