
tabsDto = function (tabitems, selectedIndex) {
    self = this;
    self.tabs = [];
    self.selectedTabIndex = selectedIndex;
    for (var i = 0; i < tabitems.length ; i++) {
        self.tabs.push(tabitems[i]);
    }

    return self;
}
