import { LightningElement,api, wire, track } from 'lwc';
import getWeather from '@salesforce/apex/WeatherDetailsClass.getWeather';
import { getRecord } from 'lightning/uiRecordApi';

export default class WeatherDisplay extends LightningElement {
		weatherDetails ={};
		showWeatherDetails = false;
		
		@api recordId;
		
		async connectedCallback() {
			try {
				this.weatherDetails = await getWeather({ recordId: this.recordId });
				this.showWeatherDetails = true;
				this.error = undefined;
			} catch (error) {
				this.weatherDetails = undefined;
				this.showWeatherDetails = false;
				this.error = error;
			}
		}
		
		
}