_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let el6Gkr2 = eo('a',null,null,`href`,`/tags/${ seo(component.tag.name) }`,`class`,`tag`);
el6Gkr2.cls = {small: component.small};

            for (let className in el6Gkr2.cls) {
                el6Gkr2.classList.toggle(className, el6Gkr2.cls[className]);
            }  
            let elFaPZm = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let elqbH0Q = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });