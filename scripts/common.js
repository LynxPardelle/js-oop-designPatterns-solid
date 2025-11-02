// Common JavaScript functions for all pages

function toggleSolution(solutionId) {
    const solution = document.getElementById(solutionId);
    if (solution) {
        solution.classList.toggle('show');
    }
}

function clearOutput(outputId) {
    const output = document.getElementById(outputId);
    if (output) {
        output.innerHTML = '';
    }
}
