public class CustomNotesController {

    @AuraEnabled
    public static void delEditNote(CustomNotes__c editNote, CustomNotes__c delNote) {

        system.debug(editNote);
        if (editNote != null && editNote.Name != '') {
            update editNote;
        }
        if (delNote != null && delNote.Name != '') {
            delete delNote;
        }

        return;
    }

}