_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let elmRi37 = eo('a',null,null,`href`,`/tags/${ seo(component.tag.name) }`,`class`,`tag`);
elmRi37.cls = {small: component.small};

            for (let className in elmRi37.cls) {
                elmRi37.classList.toggle(className, elmRi37.cls[className]);
            }  
            let elfoYGJ = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let elY3HLM = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });