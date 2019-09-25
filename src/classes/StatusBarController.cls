public class StatusBarController {

    @AuraEnabled
    public static CustomNotes__c newNoteMethod(CustomNotes__c newNote, String userId) {

        system.debug(newNote);
        system.debug(userId);
        if (newNote != null && newNote.Name != '') {
            insert newNote;
        }
        if (userId != null) {
            Case newCase = new Case(OwnerId = userId, Status = 'New', Origin = 'Phone');
            insert newCase;
        }

        Id newNoteId = newNote.Id;

        return [
                SELECT Id,
                        Name,
                        Description__c,
                        Priority__c,
                        OwnerId,
                        CreatedDate
                FROM CustomNotes__c
                WHERE Id = :newNoteId
        ];
    }

}