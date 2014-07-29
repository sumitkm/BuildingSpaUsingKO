define(['jquery', 'knockout', 'bootstrap'], function ($, ko) {
    
    ko.components.register('greeter', { require: 'App/components/greeter/greeting' });


    ko.applyBindings();
});