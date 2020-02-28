_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let elQzBMH = eo('a',null,null,`class`,`tag ${cls({small: component.small})}`,`href`,`/tags/${ seo(component.tag.name) }`);
let eltQWk6 = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let el99gEf = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });