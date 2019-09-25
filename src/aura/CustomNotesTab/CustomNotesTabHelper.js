({

    saveEdit: function (component) {
        var action = component.get("c.delEditNote");
        action.setParams({
            editNote: component.get("v.tabNotesData")
        });
        action.setCallback(this, function (response) {
            if (component && component.isValid()) {
                var state = response.getState();
                if (state === "SUCCESS") {
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
        component.set("v.editModal", false);
    },

    deleteNote: function (component) {
        var action = component.get("c.delEditNote");
        action.setParams({
            delNote: component.get("v.tabNotesData")
        });
        action.setCallback(this, function (response) {
            if (component && component.isValid()) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.set('v.tabNotesData', response.getReturnValue());
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
        var appEvent = $A.get("e.c:notesData");
        appEvent.setParams({
            delNoteEvent: component.get("v.tabNotesData")
        });
        appEvent.fire();
        component.set("v.editModal", false);
    }


});