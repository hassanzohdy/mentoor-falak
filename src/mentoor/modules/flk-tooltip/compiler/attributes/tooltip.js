const Attribute = require(ATTRIBUTE_CLASS_PATH);

class TooltipAttribute extends Attribute {
    /**
     * {@inheritDoc}
     */
    init() {
        this.forcePull('tooltip');

        if (!this.has('title') && !this.has('[title]')) return;

        let title = this.has('title') ? this.forcePull('title') : this.forcePullDynamic('[title]');

        // override any title manipulations
        this.set('title', '');

        // options list
        let options = {
            arrow: true,
            content: title,
        };

        if (this.has('position')) {
            options.placement = this.forcePull('position');
        } else if (this.has('[position]')) {
            options.placement = this.forcePullDynamic('[position]');
        }
        
        if (this.has('size')) {
            options.size = this.forcePull('size');
        } else if (this.has('[size]')) {
            options.size = this.forcePullDynamic('[size]');
        }
        
        // TODO: add theme options
        // @see: https://atomiks.github.io/tippyjs/themes/
        if (this.has('theme')) {
            options.theme = this.forcePull('theme');
        } else if (this.has('[theme]')) {
            options.theme = this.forcePullDynamic('[theme]');
        }

        let themeStyle = `https://unpkg.com/tippy.js@4/themes/%s.css`.sprintf(options.theme);

        resources.externals.css.common.push(themeStyle);

        if (this.has('[arrow]') && this.forcePull('[arrow]') == 'false') {
            options.arrow = false;
        }

        this.tag.declareVariable();

        this.tag.onElementReady(`
            tippy($el, ${flatten(options)});
        `);
    }

    /**
     * {@inheritDoc}
     */
    build() { }
}

module.exports = {
    attr: 'tooltip',// it will be passed to the constructor
    handler: TooltipAttribute,
};