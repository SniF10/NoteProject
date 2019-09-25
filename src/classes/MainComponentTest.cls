@isTest
public class MainComponentTest {
    static testMethod void getNotesTest(){

        TestDataFactory.createCustomNotes(10);
        MainComponentController.getNotes();

        List<CustomNotes__c> lstNotes = new List<CustomNotes__c>([
                SELECT Id,
                        Name,
                        Description__c,
                        Priority__c,
                        OwnerId,
                        CreatedDate
                FROM CustomNotes__c
                WHERE OwnerId = :userinfo.getuserid()
                ORDER BY Priority__c ASC NULLS FIRST
        ]);

        System.assertEquals(10,lstNotes.size());

    }


}