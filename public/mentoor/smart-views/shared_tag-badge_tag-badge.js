_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let elUCAy_ = eo('a',null,null,`href`,`/tags/${ seo(component.tag.name) }`,`class`,`tag`);
elUCAy_.cls = {small: component.small};

            for (let className in elUCAy_.cls) {
                elUCAy_.classList.toggle(className, elUCAy_.cls[className]);
            }  
            let elYrZuc = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let elQmKVC = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });