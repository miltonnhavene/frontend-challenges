function startProgress() {
    let startValue = parseInt(document.getElementById("start-value").value);
    let endValue = parseInt(document.getElementById("end-value").value);

    if (startValue < 0 || startValue > 100 || endValue < 0 || endValue > 100) {
        alert("Os valores devem estar entre 0 e 100.");
        return;
    }

    if (startValue > endValue) {
        alert("O valor inicial não pode ser maior que o final.");
        return;
    }

    let progressBar = document.getElementById("progress-bar");
    let progressText = document.getElementById("progress-text");

    let currentProgress = startValue;
    progressBar.style.width = currentProgress + "%";
    progressText.innerText = currentProgress + "%";

    let interval = setInterval(() => {
        if (currentProgress >= endValue) {
            clearInterval(interval);
        } else {
            currentProgress++;
            progressBar.style.width = currentProgress + "%";
            progressText.innerText = currentProgress + "%";
        }
    }, 30); // Controla a velocidade da animação
}
