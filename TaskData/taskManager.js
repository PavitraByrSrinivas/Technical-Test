import { LightningElement, wire, track } from 'lwc';
import getTasks from '@salesforce/apex/TaskDetailsController.getTasks';
import updateTaskStatus from '@salesforce/apex/TaskDetailsController.updateTaskStatus';
import { RefreshEvent } from "lightning/refresh";

export default class TaskManager extends LightningElement {
    @track taskData = [];
    @track isModalOpen = false;
    @track statusOptions = [
        { label: 'Not Started', value: 'Not Started' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Completed', value: 'Completed' },
        { label: 'Deferred', value: 'Deferred' },
    ];
    

		
@wire(getTasks)
tasks({data, error}){
		if(data){
				this.taskData = data;
		}else if(error){
				console.error(error);
		}
}
		
    handleStatusChange(event) {
        const taskId = event.target.dataset.id;
        const status = event.detail.value;
        updateTaskStatus({ taskId, status })
            .then(() => {
                console.log('Task status updated successfully');
            })
            .catch(error => {
                console.error('Error updating task status', error);
            });
				this.dispatchEvent(new RefreshEvent());
    }

    markAsCompleted(event) {
        const taskId = event.target.dataset.id;
        updateTaskStatus({ taskId, status: 'Completed' })
            .then(() => {
			   this.dispatchEvent(new RefreshEvent());
               console.log('Task marked as completed');
            })
            .catch(error => {
                console.error('Error marking task as completed', error);
            });
			this.dispatchEvent(new RefreshEvent());
			window.location.reload();
    }

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }
   
    refreshTaskList() {
        getTasks()
            .then(result => {
                this.taskData = result;
            })
            .catch(error => {
                console.error(error);
            });
    }
    
}