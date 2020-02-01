_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let el1rqg4 = eo('a',null,null,`href`,`/tags/${ seo(component.tag.name) }`,`class`,`tag`);
el1rqg4.cls = {small: component.small};

            for (let className in el1rqg4.cls) {
                el1rqg4.classList.toggle(className, el1rqg4.cls[className]);
            }  
            let elFdqb2 = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let elVJZJD = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });