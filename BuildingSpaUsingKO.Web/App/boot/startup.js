define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {
    ko.components.register('greeter', { require: 'App/components/greeter/greeting' });
    ko.components.register('home', { require: 'App/pages/home/home' });
    ko.components.register('settings', {
        template: { require: 'text!App/pages/settings/settings.html' }
    });
    ko.applyBindings({ route: router.currentRoute });
});



