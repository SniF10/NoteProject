({
    getCustomNotes: function (component) {
        var action = component.get("c.getNotes");
        action.setCallback(this, function (response) {
            if (component && component.isValid()) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    component.set('v.notesData', response.getReturnValue());
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
        component.set("v.isOpen", false);
    },

    handleApplicationEvent: function (component, event) {
        var delNoteEvent = event.getParam("delNoteEvent");
        var notesData = component.get("v.notesData");
        if (delNoteEvent != null) {
            for (var i = 0; i < notesData.length; i++) {
                if (notesData[i].Id === delNoteEvent.Id) {
                    notesData.splice(i, 1);
                    component.set("v.notesData", notesData);
                }
            }
        }
    }
});