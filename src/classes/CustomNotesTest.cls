@isTest
public class CustomNotesTest {
    static testMethod void delEditTest() {

        TestDataFactory.createCustomNotes(10);

        List<CustomNotes__c> lstNotes = new List<CustomNotes__c>([SELECT Id,Name FROM CustomNotes__c]);

        CustomNotes__c editNote = new CustomNotes__c(Id=lstNotes[5].Id, Name='EditTest', Description__c='1234', Priority__c='High');

        CustomNotes__c delNote = lstNotes[9];

        CustomNotesController.delEditNote(editNote,delNote);

        List<CustomNotes__c> lstNotesAfter = new List<CustomNotes__c>([SELECT Id,Name FROM CustomNotes__c]);

        System.assertEquals(9,lstNotesAfter.size());

        System.assertEquals('EditTest',lstNotesAfter[5].Name);
    }

}