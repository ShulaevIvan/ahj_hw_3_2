import Task from './task';
import Popup from '../popup/popup';

export default class FilterTask {
  constructor(wrapTag) {
    this.wrapper = document.querySelector(wrapTag);
    this.allTasksWrap = this.wrapper.querySelector('.tasks-wrap');
    this.pinnedWrap = this.wrapper.querySelector('.pinned-wrap');
    this.input = this.wrapper.querySelector('.input-filter');
    this.pinnedItems = 0;
    this.allTasks = [];
    this.popup = new Popup();
  }

  addInput() {
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.input.value !== '') {
        const taskItem = new Task(this.input.value);
        this.addTask(taskItem);
        this.filter(this.input.value);
        this.input.value = '';
      } else if (e.key === 'Enter' && this.input.value === '' && this.allTasks.length > 0) {
        this.filter(this.input.value, true);
      } else if (e.key === 'Enter' && this.input.value === '' && this.allTasks.length === 0) {
        this.popup.show();
      }
    });
  }

  addTask(taskItem) {
    this.allTasks.push(taskItem);
    this.allTasks.forEach((item) => {
      if (!item.pinned) {
        this.allTasksWrap.appendChild(item.html);
      }
    });
  }

  filter(value, all = false) {
    if (all) {
      this.allTasks.forEach((item) => {
        item.html.classList.remove('task-hide');
      });
      return;
    }

    this.allTasks.forEach((item) => {
      if (!item.pinned) {
        const check = this.containsText(item.name, value);
        item.html.classList.add('task-hide');
        if (check) item.html.classList.remove('task-hide');
      }
    });
  }

  containsText(data, search) {
    this.clean = search.trim().toLowerCase();
    return data.toLowerCase().includes(this.clean);
  }
}
