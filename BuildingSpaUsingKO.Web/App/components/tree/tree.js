define([
    "knockout",
    "text!./tree.html"], function (ko, treeTemplate) {
        function treeViewModel(params) {
            var self = this;
            self.title = ko.observable('');
            self.nodes = ko.observableArray([]);

            if (params.data) {
                self.title(params.data.title);
                self.nodes().push.apply(self.nodes(), params.data.nodes);
            }
            return self;
        }
        return { viewModel: treeViewModel, template: treeTemplate };
    });