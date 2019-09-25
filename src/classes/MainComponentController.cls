public class MainComponentController {

    @AuraEnabled
    public static List<CustomNotes__c> getNotes() {

        return [
                SELECT  Id,
                        Name,
                        Description__c,
                        Priority__c,
                        OwnerId,
                        CreatedDate
                FROM CustomNotes__c
                WHERE OwnerId = :UserInfo.getUserId()
                ORDER BY Priority__c ASC NULLS FIRST
        ];
    }

}