define(
    [
        "knockout",
        "text!./settings.html",
        "../../components/models/tabbed-navigation/tabsDto",
        "../../components/models/tabbed-navigation/tabitemDto"
    ],
    function (ko, settingsTemplate) {

        var isInitialized = false;
        function settingsViewModel(params) {
            isInitialized = true;
            var self = this;
            self.tabbedNavigation = new ko.observable();
            self.selectedIndex = 0;
            var newTabs = [];
            for (var i = 0; i < 5; i++) {
                var key = 'tab' + i;
                newTabs.push(new tabitemDto(
                    "Settings " + i,
                    "/settings/" + key,
                    key == params.tab));
                if (key == params.tab) {
                    self.selectedIndex = i;
                }
            }
            var navigation = new tabsDto(newTabs, self.selectedIndex);
            self.tabbedNavigation(navigation);
            return self;
        };


        return { viewModel: settingsViewModel, template: settingsTemplate };
    });
