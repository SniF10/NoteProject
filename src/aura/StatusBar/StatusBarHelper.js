({
    newNote: function (component) {
        var action = component.get("c.newNoteMethod");
        var userIdStatusBar = component.get("v.userIdStatusBar");
        if (userIdStatusBar == '') {
            action.setParams({
                newNote: component.get("v.newNote")
            });
        } else {
            action.setParams({
                newNote: component.get("v.newNote"),
                userId: component.get("v.userIdStatusBar")
            });
        }
        action.setCallback(this, function (response) {
            if (component && component.isValid()) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var newNote = response.getReturnValue();
                    var notesData = component.get("v.notesData")
                    notesData.push(newNote);
                    component.set("v.notesData", notesData);
                    alert('Note is save');
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
        component.set("v.isOpen", false);
    },

    sortPriority: function (component) {
        var selectedSort = component.get("v.sortSelect");
        var dataNotes = component.get("v.notesData");
        if (selectedSort != null && selectedSort == "Highest") {
            var priorityMap = {"High": 3, "Medium": 2, "Low": 1, undefined: 0};
            dataNotes.sort(function (a, b) {
                return priorityMap[b.Priority__c] - priorityMap[a.Priority__c]
            });
            component.set("v.sortSelect", "Lowest");
            component.set("v.sortIcon", "utility:arrowup");
        } else if (selectedSort != null && selectedSort == "Lowest") {
            var priorityMap = {"High": 3, "Medium": 2, "Low": 1, undefined: 0};
            dataNotes.sort(function (a, b) {
                return priorityMap[a.Priority__c] - priorityMap[b.Priority__c]
            });
            component.set("v.sortSelect", "Highest");
            component.set("v.sortIcon", "utility:arrowdown");
        }
        component.set("v.notesData", dataNotes);
    }
});