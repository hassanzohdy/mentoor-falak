_Component({
                selector: 'flk-accordion',
                c: 'FlkAccordion', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isExpanded','toggle','panel'],
                children: {},
                render: function (component) {
                    let elvHDh5 = eo('div',null,null,`class`,`flk-accordion`);
elvHDh5.cls = {expanded: component.isExpanded};

            for (let className in elvHDh5.cls) {
                elvHDh5.classList.toggle(className, elvHDh5.cls[className]);
            }  
            let elr21tg = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggle()}]},`class`,`accordion-heading`);
text( component.inputs.getOption('heading') );
let cndLGYF = ! component.isExpanded;
this.setState('stUC3QN', cndLGYF);
let cndgMOp = !(cndLGYF);
this.setState('stw6mbo', cndgMOp);
if (cndLGYF) { 
let elgOhC6 = eo('span','pTgf',null,`class`,`icon`);
text(`+`);
ec('span');
}else { 
let elPzEXu = eo('span',null,null,`class`,`icon`);
text(`x`);
ec('span');
}ec('h2');
let elMI4uX = eo('div',null,null, eventListeners, {onready:[function(e) {var $el = this;component.panel = $el}]},`class`,`accordion-body`);

        if (this.hasContent()) {
            this.content();
        }ec('div');

                    setTimeout(function () {
                        let $el = elMI4uX;
                        component.panel = $el;
                    }, 20);                
                ec('div');

                    this.isReadyToGo();
                }
        });