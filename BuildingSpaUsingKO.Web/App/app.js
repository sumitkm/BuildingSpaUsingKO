app = {
    components: {
        greeter: {
            name: 'greeter',
            template: 'App/components/greeter/greeting'
        },
        tabitem: {
            name: 'tabitem',
            template: 'App/components/tabitem/tabitem'
        },
        tabbedNavigation: {
            name: 'tabbed-navigation',
            template: 'App/components/tabbed-navigation/tabbed-navigation'
        }
    },
    pages: {
        home: {
            name: 'home',
            template: 'App/pages/home/home'
        },
        settings: {
            name: 'settings',
            template: 'App/pages/settings/settings'
        }
    }
}
