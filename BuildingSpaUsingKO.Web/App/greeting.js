/// <reference path="/Scripts/bootstrap.js" />
/// <reference path="/Scripts/knockout-3.2.0beta.debug.js" />
/// <reference path="/Scripts/jquery-1.9.0.js" />
/// <reference path="/Scripts/jquery-1.9.0.intellisense.js" />

ko.components.register('greeter', {
    // The register method needs a config object with 
    // 2 properties
    template: // template is a string with the HTML template to apply
        // Here we have directly hardcoded the string we originally
        // had in index.html
        "<div class='container-fluid'>" +
            "<div> Hello <span data-bind='text: greeting'></span></div>" +
            "<div> It is <span data-bind='text: date'></span></div>" +
        "</div>",
    viewModel: function(params){ // viewModel that can be an object or function 
        greeting = ko.observable(params.name);
        date = ko.observable(new Date());
    }
});

$(function () {
    ko.applyBindings(); //We have removed the explicit reference to the viewModel
});
