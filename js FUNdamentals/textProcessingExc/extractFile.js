function extractFile(data) {
    let file = data.substring(data.lastIndexOf("\\") + 1);
    let name = file.substring(0, file.lastIndexOf("."));
    let extension = file.substring(file.lastIndexOf(".") + 1,);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.dud.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');