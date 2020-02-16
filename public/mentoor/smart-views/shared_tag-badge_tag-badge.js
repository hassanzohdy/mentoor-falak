_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let elO_U9H = eo('a',null,null,`href`,`/tags/${ seo(component.tag.name) }`,`class`,`tag`);
elO_U9H.cls = {small: component.small};

            for (let className in elO_U9H.cls) {
                elO_U9H.classList.toggle(className, elO_U9H.cls[className]);
            }  
            let elvJ39E = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let eli30D4 = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });