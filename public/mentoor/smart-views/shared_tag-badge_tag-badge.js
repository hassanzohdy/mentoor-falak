_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let eludt14 = eo('a',null,null,`href`,`/tags/${ seo(component.tag.name) }`,`class`,`tag`);
eludt14.cls = {small: component.small};

            for (let className in eludt14.cls) {
                eludt14.classList.toggle(className, eludt14.cls[className]);
            }  
            let elf6dQe = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let el6o9S4 = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });