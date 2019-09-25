@isTest
public class TestDataFactory {

    public static List<CustomNotes__c> createCustomNotes(Integer numNotes) {
        List<CustomNotes__c> notesList = new List<CustomNotes__c>();

        for (Integer i = 0; i < numNotes; i++) {
            CustomNotes__c note = new CustomNotes__c(Name = 'Test Account' + i, Description__c = 'Test Description' + i, Priority__c = 'High');
            notesList.add(note);
        }
        insert notesList;

        return notesList;
    }

    public static List<User> createUsers(Integer numUsers) {
        List<User> usersList = new List<User>();
        Profile p = [   SELECT Id
                        FROM Profile
                        WHERE Name = 'Standard User'];
        for (Integer i = 0; i < numUsers; i++) {
            User userTest = new User(Alias = 'standt' + i, Email = i + 'standarduser@testorg.com',
                    EmailEncodingKey = 'UTF-8', LastName = 'Testing' + i, LanguageLocaleKey = 'en_US',
                    LocaleSidKey = 'en_US', ProfileId = p.Id,
                    TimeZoneSidKey = 'America/Los_Angeles', UserName = i + 'standarduser@testorg.com');
            usersList.add(userTest);
        }
        insert usersList;

        return usersList;
    }

}