tabsNavigationConfig = function (tabitems, selectedIndex) {
    self = this;
    self.tabs = [];
    for (var i = 0; i < tabitems.length ; i++) {
        self.tabs.push(tabitems[i]);
        if (i == selectedIndex) {
            self.tabs[i].isSelected = true;
        }
    }
    return self;
}
