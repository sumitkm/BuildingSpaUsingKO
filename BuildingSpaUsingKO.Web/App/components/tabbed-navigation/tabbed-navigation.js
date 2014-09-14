define(["knockout", "underscore", "text!./tabbed-navigation.html"], function (ko, _, tabbedNavigationTemplate) {
    var isInitialized = false;
    var tabsCache = [];
    function tabbedNavigationViewModel(params) {
        self = this;
        self.tabs = ko.observableArray(tabsCache);
        self.selectedIndex = ko.observable(0);
        self.selected = ko.pureComputed(function () {
            return self.tabs()[self.selectedIndex()];
        }, this);

        if (!isInitialized) {
            isInitialized = true;
            tabsCache = params.tabConfig().tabs;
            self.tabs = ko.observableArray(tabsCache);
        }

        if (params.route) {
            selectByName(params.route);
        }

        function selectByName(params) {
            var item = _.find(self.tabs(), function (tab) {
                return tab.url == params();
            });
            if (item) {
                _.each(self.tabs(), deselect);
                var index = self.tabs().indexOf(item);
                self.tabs()[index].isSelected = true;
                self.selectedIndex(index);
            }
            return item;
        };

        function deselect(tab) {
            tab.isSelected = false;
        }

        return self;
    };
    return { viewModel: tabbedNavigationViewModel, template: tabbedNavigationTemplate };
});
