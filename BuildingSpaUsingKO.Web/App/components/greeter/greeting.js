define(["knockout", "text!./greeting.html", "amplify"], function (ko, greeterTemplate) {

    function greeterViewModel(params) {
        var self = this;
        self.greeting = ko.observable(params.name);
        self.date = ko.observable(new Date());
        amplify.subscribe("CurrentNode-NodeClicked", this, setGreeting);
        return self;
    }

    function setGreeting(value) {
        this.greeting(value);
    }

    function dispose() {
        amplify.unsubscribe("CurrentNode-NodeClicked", setGreeting);
    }
    return { viewModel: greeterViewModel, template: greeterTemplate };
});