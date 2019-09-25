public class NewCaseController {

    @AuraEnabled
    public static List<User> getResults(String value) {

        String search = '%' + value + '%';

        return [
                SELECT Id,Name
                FROM User
                WHERE Name LIKE :search
        ];
    }

}