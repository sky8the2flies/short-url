function copyLink() {
    /* Get the text field */
    const copyText = document.getElementById('copy-text');
    const copyBtn = document.getElementById('copy-btn');
    copyText.style.display = "block";

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");
    copyText.style.display = "none";
    const beforeText = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    setTimeout(function () {
        copyBtn.textContent = beforeText;
    }, 1000);
}