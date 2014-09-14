define(
    [
        "knockout",
        "text!./settings.html",
        "underscore", 
        "../../components/models/tabbed-navigation/tabsNavigationConfig",
        "../../components/models/tabbed-navigation/tabitemConfig"
    ],
    function (ko, settingsTemplate, _) {
        var isInitialized = false;
        var tabsNavigationInstance = null;
        function settingsViewModel(params) {
            var self = this;
            self.tabbedNavigation = new ko.observable();
            if (!isInitialized) {
                isInitialized = true;
                tabsNavigationInstance = init(params);
            }
            self.tabbedNavigation(tabsNavigationInstance);
            self.route = new ko.observable();
            if (params.tab) {
                self.route(params.request_);
            }
            return self;
        };

        function init(params) {
            var newTabs = [];
            for (var i = 0; i < 5; i++) {
                var key = 'tab' + i;
                newTabs.push(new tabitemConfig(
                    "Settings " + i,
                    "/settings/" + key,
                    key == params.tab,
                    'greeter'));
            }
            tabsNavigationInstance = new tabsNavigationConfig(newTabs, 0);
            return tabsNavigationInstance;
        }


        return { viewModel: settingsViewModel, template: settingsTemplate };
    });
