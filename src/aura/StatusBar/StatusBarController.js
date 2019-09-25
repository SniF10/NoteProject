({
    newNote: function (component, event, helper) {
        var newNoteName = component.get("v.newNote.Name");

        if (newNoteName == '') {
            alert("Enter Note Name");
        } else {
            helper.newNote(component, event, helper);
        }
    },

    openModal: function (component) {
        component.set("v.isOpen", true);
    },

    closeModal: function (component) {
        component.set("v.newNote.Name", '');
        component.set("v.newNote.Description__c", '');
        component.set("v.newNote.Priority__c", '');
        component.set("v.isOpen", false);
    },

    sortPriority: function (component, event, helper) {
        helper.sortPriority(component, event, helper);
    },

    handleApplicationEvent: function (component, event) {
        var userIdStatusBar = event.getParam("userId");
        component.set("v.userIdStatusBar", userIdStatusBar);

    }
});