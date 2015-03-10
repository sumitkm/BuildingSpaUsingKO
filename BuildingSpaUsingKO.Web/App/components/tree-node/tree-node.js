define(["knockout", "text!./tree-node.html", "amplify"], function (ko, treeNodeTemplate) {
    function treeNodeViewModel(params) {
        var self = this;
        self.title = ko.observable('Default');
        self.url = ko.observable('/');
        self.nodes = ko.observableArray();
        self.expanded = ko.observable(true);
        if (params.node) {
            self.title(params.node.title);
            if (params.node.expanded != null) {
                self.expanded(params.node.expanded);
            }
            self.nodes().push.apply(self.nodes(), params.node.nodes);
        }

        self.changeState = function () {
            self.expanded(!self.expanded());
        }

        self.nodeClicked = function (currentNode) {
            currentNode.expanded(!currentNode.expanded())
            var nodeName = currentNode.title();
            amplify.publish("CurrentNode-NodeClicked", nodeName);
        }

        return self;
    }
    return { viewModel: treeNodeViewModel, template: treeNodeTemplate };
});