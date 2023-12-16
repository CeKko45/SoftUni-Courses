function editElement(refference, match, replacement) {
    const content = refference.textContent;
    const matcher = new RegExp(match, "g");
    const editedText = content.replace(matcher, replacement);
    refference.textContent = editedText;
}