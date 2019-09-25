@isTest
public class NewCaseTest {
    static testMethod void searchTest() {

        String value = 'test';

        NewCaseController.getResults(value);

        String search = '%' + value + '%';

        TestDataFactory.createUsers(1);

        List<User> lstUsers = new List<User>([
                SELECT  Id,
                        Name
                FROM User
                WHERE Name LIKE :search
        ]);

        System.assertEquals(1, lstUsers.size());
    }

}