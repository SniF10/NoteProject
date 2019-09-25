@isTest
public class StatusBarTest {
    static testMethod void noteCaseInsertTest() {


        CustomNotes__c newNote = new CustomNotes__c( Name='Test Account', Description__c='Test Description' , Priority__c='High');

        User user = [   SELECT Id
                        FROM User LIMIT 1];

        String userId= user.id;

        StatusBarController.newNoteMethod(newNote, userId);

        List<CustomNotes__c> lstNotes =[SELECT id
                                        FROM CustomNotes__c
                                        WHERE id=: newNote.id];

        List<Case> lstCases =[  SELECT id
                                FROM Case
                                WHERE Ownerid=: userId];


        system.assertEquals(1,lstNotes.size());

        system.assertEquals(1,lstCases.size());

        Boolean isError = false;

        try {
            CustomNotes__c newNoteErr = new CustomNotes__c(Name = 'Test Account', Description__c='Test Description' , Priority__c='1234');

            String userIdErr= '0052v00000YYTSJAA5';

            StatusBarController.newNoteMethod(newNoteErr, userIdErr);

        } catch(DmlException e) {
            isError = true;
            System.debug('The following exception has occurred: ' + e.getMessage());
        }

        system.assertEquals(isError,true);


    }

}