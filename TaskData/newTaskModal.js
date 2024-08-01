import { LightningElement, api, track } from 'lwc';
import createTask from '@salesforce/apex/TaskDetailsController.createTask';


export default class NewTaskModal extends LightningElement {
    @api showModal = false;
     @api modalClass = "slds-modal slds-fade-in-open slds-modal_small";
    @track subject = '';
    @track dueDate = '';
    @track priority = 'Normal';

    priorityOptions = [
        { label: 'High', value: 'High' },
        { label: 'Normal', value: 'Normal' },
        { label: 'Low', value: 'Low' }
    ];

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this[field] = event.target.value;
    }

    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
 
    saveTask() {
        createTask({ subject: this.subject, dueDate: this.dueDate, priority: this.priority })
            .then(() => {
                this.closeModal();
                this.dispatchEvent(new CustomEvent('success'));
            })
            .catch(error => {
                console.error(error);
            });
    }
}