({
    doInit: function (component, event, helper) {
        helper.getCustomNotes(component, event, helper);
    },

    handleApplicationEvent: function (component, event, helper) {
        helper.handleApplicationEvent(component, event, helper);
    }

});