define(["knockout", "text!./tabbed-navigation.html"], function (ko, tabbedNavigationTemplate) {
    function tabbedNavigationViewModel(params) {
        self = this;
        if (params.tabConfig() != 1) {
            self.tabs = ko.observableArray(params.tabConfig().tabs);

            self.selectedIndex = ko.observable(params.tabConfig().selectedTabIndex);
            self.select = function (index) {
                self.selectedTabIndex = index;
                self.tabs[i - 1].isSelected = true;
            }
        }
        return self;
    };
    return { viewModel: tabbedNavigationViewModel, template: tabbedNavigationTemplate };
});
