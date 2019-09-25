({
    searchField: function (component, event) {
        var currentText = event.getSource().get("v.value");
        var resultBox = component.find('resultBox');
        component.set("v.LoadingText", true);
        if (currentText.length > 0) {
            $A.util.addClass(resultBox, 'slds-is-open');
        } else {
            $A.util.removeClass(resultBox, 'slds-is-open');
        }
        var action = component.get("c.getResults");
        action.setParams({
            "value": currentText
        });

        action.setCallback(this, function (response) {
            if (component && component.isValid()) {
                var STATE = response.getState();
                if (STATE === "SUCCESS") {
                    component.set("v.searchRecords", response.getReturnValue());
                    if (component.get("v.searchRecords").length == 0) {
                        console.log('000000');
                    }
                } else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " +
                                errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
                component.set("v.LoadingText", false);
            }
        });

        $A.enqueueAction(action);
    }
});