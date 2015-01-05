define(['jquery', 'knockout', './router', 'app', 'bootstrap', 'knockout-projections'], function ($, ko, router) {
    ko.components.register(app.components.greeter.name, { require: app.components.greeter.template });
    ko.components.register(app.components.tabitem.name, { require: app.components.tabitem.template });
    ko.components.register(app.components.tabbedNavigation.name, { require: app.components.tabbedNavigation.template });

    ko.components.register(app.components.treeNode.name, { require: app.components.treeNode.template });
    ko.components.register(app.components.tree.name, { require: app.components.tree.template });

    ko.components.register(app.pages.home.name, { require: app.pages.home.template });
    ko.components.register(app.pages.docs.name, { require: app.pages.docs.template });
    ko.components.register(app.pages.settings.name, { require: app.pages.settings.template });
    ko.applyBindings({ route: router.currentRoute });
});



