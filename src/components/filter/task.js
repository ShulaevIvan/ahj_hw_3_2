export default class Task {
  constructor(name) {
    this.name = name;
    this.pinned = false;
    this.html = this.create();
    this.wrapper = document.querySelector('.app-wrap');
    this.pinnedWrap = this.wrapper.querySelector('.pinned-wrap');
    this.allTasksWrap = this.wrapper.querySelector('.tasks-wrap');
    this.pinnedTitle = this.wrapper.querySelector('.pinnedTitle');
  }

  create() {
    const divItem = document.createElement('div');
    const divTask = document.createElement('div');
    const spanName = document.createElement('span');
    const arrow = document.createElement('button');
    divItem.classList.add('task-item');
    divTask.classList.add('task');
    arrow.classList.add('arrow-down-hide');
    spanName.textContent = this.name;
    divTask.appendChild(spanName);
    divTask.appendChild(arrow);
    divItem.appendChild(divTask);

    arrow.addEventListener('click', (e) => {
      const target = e.target; // eslint-disable-line
      if (target && target.classList.contains('arrow-down-hide')) {
        const movingTask = target.previousElementSibling.closest('.task-item');
        target.classList.remove('arrow-down-hide');
        target.classList.add('arrow-down-active');
        this.pinned = true;
        this.pinnedWrap.appendChild(movingTask);
        this.pinnedTitle = this.pinnedWrap.querySelector('.pinnedTitle');
        this.pinnedTitle.textContent = 'Pinned tasks';
      } else if (target && target.classList.contains('arrow-down-active')) {
        const movingTask = target.previousElementSibling.closest('.task-item');
        target.classList.add('arrow-down-hide');
        target.classList.remove('arrow-down-active');
        this.pinned = false;
        this.allTasksWrap.appendChild(movingTask);
        this.pinnedTitle.textContent = 'No pinned tasks';
      }
    });
    return divItem;
  }
}
