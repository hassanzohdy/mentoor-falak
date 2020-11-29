class Sidebar {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor(user, router, shareable) {
        this.user = user;
        this.router = router;
        this.shareable = shareable;
        this.toggleMenu = false;
    }

    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {}   

    toggle() {
        this.toggleMenu = !this.toggleMenu;

        this.shareable.share('sidebarToggled', this.toggleMenu);
        
        $(this.element).fadeToggle();
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}

    /**
     * Check if the given route is the current route
     * 
     * @param {string} currentRoute 
     * @param {bool} exact 
     */
    activeLink(currentRoute, exact = true, except = null) {
        if (currentRoute == '/' || exact === true) return this.router.route() === currentRoute;

        if (exact == STARTING_WITH_ROUTE && except && currentRoute != this.router.route()) return false; 

        return this.router.route().startsWith(currentRoute);
    }

    closeSidebarNav(e) {
        if (!e.target.matches('.nav-link') && $(e.target).parents('a').length == 0) return;

        setTimeout(() => {
            this.toggle();
        }, 100);
    }
}

const STARTING_WITH_ROUTE = false;

DI.register({
    class: Sidebar,
    alias: 'sidebar',
});