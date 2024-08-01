# Technical-Test

Task 1: REST API Integration
1. Create new custom objects and provide necessary access-
   Location__c - Fields (Name, Latitude__c, Longitude__c)
   WeatherInfo__c - Fields (Description__c, Humidity__c, Maximum_Temp__c, Minimum_Temp__c, Pressure__c, Temperature__c)
2. Subscribe to OpenWeatherMap API and get the API key.
3. Create Remote site setting record for the OpenWeatherMap API URL.
4. Clone new apex class - WeatherDetailsClass.apxc.
5. Clone LWC - weatherDisplay and place the component on the Location page layout.
6. Test for each of the Location if the Weather data is displaying correctly. Along with that check if WeatherInfo records are getting created/updated for each of the Location viewed.


Task 2: Lightning Web Component Development for Task
1. Clone apex class - TaskDetailsController.apxc.
2. Clone LWC - taskManager and newTaskModal.
3. Place the LWC taskManager on the Home page.
4. Test if the logged in user's tasks are visible on the component. Check if we are able to update the Status.
5. Click on the button 'Mark as complete' and check if the Status is being updated.
6. Click on New Task button and try creating new tasks and check if the new tasks are being displayed in the Task list as well.
