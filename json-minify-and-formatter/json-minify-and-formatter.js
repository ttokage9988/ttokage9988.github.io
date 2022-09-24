function oneline() {
    var jsonText = document.getElementById('ta-input-text');
    var s = jsonText.value.replace(/[ \t\r\n\\]/g, "");
    var textArea = document.getElementById('ta-input-text');
    textArea.value = s;
}

function format() {
    var jsonText = document.getElementById('ta-input-text');
    if (jsonText == null) return;
    var s = jsonText.value.replace(/[ \t\r\n\\]/g, "");
    var json = JSON.parse(s);
    var textArea = document.getElementById('ta-input-text');
    textArea.value = JSON.stringify(json, null, "    ");
}

function onelineEscape() {
    var jsonText = document.getElementById('ta-input-text');
    var s = jsonText.value.replace(/[ \t\r\n\\]/g, "")
        .replace(/[\"]/g, "\\\"");
    var textArea = document.getElementById('ta-input-text');
    textArea.value = s;
}

function copyInputTextArea() {
    var jsonText = document.getElementById('ta-input-text');
    if (navigator.clipboard) {
        navigator.clipboard.writeText(jsonText.value);
    }
}