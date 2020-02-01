_Component({
                selector: 'gold-icon',
                c: 'GoldIcon', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['large','coins','textColor'],
                children: {},
                render: function (component) {
                    let elnGO8l = ev('img',null,null,`src`,`${assets('images/coins.svg')}`,`class`,`coin-img ${ component.inputs.getAttr('class', '') }`,`alt`,`coins`);
elnGO8l.cls = {large: component.large};

            for (let className in elnGO8l.cls) {
                elnGO8l.classList.toggle(className, elnGO8l.cls[className]);
            }  
            let cndAzwa = component.coins;
this.setState('stU4SQv', cndAzwa);
if (cndAzwa) { 
let elBr4NK = eo('strong','7jlf',null,`class`,`${ component.textColor }`);
text(component.coins.format());
ec('strong');
}
                    this.isReadyToGo();
                }
        });