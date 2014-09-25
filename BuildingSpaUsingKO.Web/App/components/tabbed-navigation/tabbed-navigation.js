define(["knockout", "underscore", "text!./tabbed-navigation.html"], function (ko, _, tabbedNavigationTemplate) {
    var isInitialized = false;
    var tabsCache = [];
    var selectedIndexCache = 0;
    function tabbedNavigationViewModel(params) {
        self = this;
        if (!isInitialized) {
            isInitialized = true;
            tabsCache = params.tabConfig().tabs;
        }
        self.tabs = ko.observableArray(tabsCache);
        self.selectedIndex = ko.observable(selectedIndexCache);
        self.selected = ko.pureComputed(function () {
            return self.tabs()[self.selectedIndex()];
        }, this);



        if (params.route) {
            selectByRoute(params.route);
        }

        function selectByRoute(params) {
            var item = _.find(self.tabs(), function (tab) {
                return tab.url == params();
            });
            if (item) {
                self.tabs()[self.selectedIndex()].isSelected = false;
                var index = self.tabs().indexOf(item);
                select(index);
            }
            return item;
        };

        function select(index)
        {
            selectedIndexCache = index;
            self.tabs()[index].isSelected = true;
            self.selectedIndex(index);
        }

        function deselect(tab) {
            tab.isSelected = false;
        }

        return self;
    };
    return { viewModel: tabbedNavigationViewModel, template: tabbedNavigationTemplate };
});
