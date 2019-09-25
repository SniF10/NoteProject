({

    editOpen: function (component) {
        component.set("v.editModal", true);
    },

    editClose: function (component) {
        component.set("v.editModal", false);
    },

    saveEdit: function (component, event, helper) {
        helper.saveEdit(component, event, helper);
    },

    deleteNote: function (component, event, helper) {
        var check = confirm("Are you sure?");
        if (check === true) {
            helper.deleteNote(component, event, helper);
        }
    }

});