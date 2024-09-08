document.addEventListener('DOMContentLoaded', function () {
    const tasks = document.querySelectorAll('.task');
    const progressBar = document.getElementById('progress-bar');
    const progressPercentage = document.getElementById('progress-percentage');

    tasks.forEach(task => {
        task.addEventListener('change', updateProgress);
    });

    function updateProgress() {
        const totalTasks = tasks.length;
        const completedTasks = document.querySelectorAll('.task:checked').length;
        const progress = (completedTasks / totalTasks) * 100;

        progressBar.value = progress;
        progressPercentage.textContent = `${Math.round(progress)}%`;
    }
    
});