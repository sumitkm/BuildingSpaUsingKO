/// <reference path="/Scripts/bootstrap.js" />
/// <reference path="/Scripts/knockout-3.2.0beta.debug.js" />
/// <reference path="/Scripts/jquery-1.9.0.js" />
/// <reference path="/Scripts/jquery-1.9.0.intellisense.js" />

//ko.components.register('greeter', {
//    // The register method needs a config object with 
//    // 2 properties
//    template: // template is a string with the HTML template to apply
//        // Here we have directly hardcoded the string we originally
//        // had in index.html
//        "<div class='container-fluid'>" +
//            "<div> Hello <span data-bind='text: greeting'></span></div>" +
//            "<div> It is <span data-bind='text: date'></span></div>" +
//        "</div>",
//    viewModel: function (params) { // viewModel that can be an object or function 
//        var self = this;
//        self.greeting = ko.observable(params.name);
//        self.date = ko.observable(new Date());
//        return self;
//    }
//});

//$(function () {
//    ko.applyBindings(); //We have removed the explicit reference to the viewModel
//});


define(["knockout", "text!./greeting.html"], function (ko, greeterTemplate) {

    function greeterViewModel(params) {
        var self = this;
        self.greeting = ko.observable(params.name);
        self.date = ko.observable(new Date());
        return self;
    }
    return { viewModel: greeterViewModel, template: greeterTemplate };
});