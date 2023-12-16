function solve() {

  // capture elements
  const textArea = document.getElementById("input");
  const textAreaValue = textArea.value;
  const result = document.getElementById("output");

  // preping data

  const sentencesArr = textAreaValue.split(".")
  .filter((s) => s !== "")
  .map((s) => s + ".");

  const paragraphLimit = Math.ceil(sentencesArr.length / 3);

  for(let i = 0; i < paragraphLimit; i++) {
    const joinedSentences = sentencesArr.splice(0, 3).join("");
    result.innerHTML += `<p>${joinedSentences}</p>`;
  }
}