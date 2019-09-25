({
    searchField: function (component, event, helper) {
        helper.searchField(component, event, helper);
    },

    setSelectedRecord: function (component, event) {
        var currentId = event.currentTarget.id;
        var resultBox = component.find('resultBox');
        $A.util.removeClass(resultBox, 'slds-is-open');
        component.set("v.selectRecordName", event.currentTarget.dataset.name);
        component.set("v.selectRecordId", currentId);
        var appEvent = $A.get("e.c:newCaseEvent");
        appEvent.setParams({
            userId: currentId
        });
        appEvent.fire();
        component.find('checkbox').set("v.disabled", true);
        component.find('userinput').set("v.readonly", true);
    },

    resetData: function (component) {
        component.set("v.selectRecordName", "");
        component.set("v.selectRecordId", "");
        var appEvent = $A.get("e.c:newCaseEvent");
        appEvent.setParams({
            userId: ''
        });
        appEvent.fire();
        component.find('checkbox').set("v.disabled", false);
        component.find('userinput').set("v.readonly", false);
    },

    onCheck: function (component) {
        var check = component.get("v.check");
        if (check != '') {
            component.set("v.userIdStatusBar", $A.get("$SObjectType.CurrentUser.Id"));
            var appEvent = $A.get("e.c:newCaseEvent");
            appEvent.setParams({
                userId: $A.get("$SObjectType.CurrentUser.Id")
            });
            appEvent.fire();
            component.find('userinput').set("v.disabled", true);
        }
        if (check === '') {
            var appEvent = $A.get("e.c:newCaseEvent");
            appEvent.setParams({
                userId: ''
            });
            appEvent.fire();
            component.find('userinput').set("v.disabled", false);
        }

    },

    handleApplicationEvent: function (component, event) {
        var userId = event.getParam("userCheckBoxId");
        var resultBox = component.find('resultBox');
        $A.util.removeClass(resultBox, 'slds-is-open');
        component.set("v.selectRecordId", userId);
        component.find('userinput').set("v.readonly", true);
    }

});