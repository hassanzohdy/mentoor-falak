_Component({
                selector: 'tag-badge',
                c: 'TagBadge', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['tag','small'],
                children: {},
                render: function (component) {
                    let elezk1Y = eo('a',null,null,`class`,`tag ${cls({small: component.small})}`,`href`,`/tags/${ seo(component.tag.name) }`);
let el2xh_w = ev('img',null,null,`src`,`${component.tag.image}`,`title`,`${component.tag.name}`,`alt`,`${component.tag.name}`);
let elRTRwP = eo('span');
text(component.tag.name);
ec('span');
ec('a');

                    this.isReadyToGo();
                }
        });