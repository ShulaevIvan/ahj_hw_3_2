import FilterTask from '../components/filter/filter';

window.addEventListener('DOMContentLoaded', () => {
  const filterTask = new FilterTask('.app-wrap');
  filterTask.addInput();
});
