function modernTimesOfTag(string) {
    return string.split(" ")
    .filter(x => x.startsWith("#") && x.length > 1)
    .map(x => x.substring(1))
    .filter(x => {
        for(let el of x) {
            if(el.toLowerCase().charCodeAt(0) < 97 || el.toLowerCase().charCodeAt(0) > 122) {
                return false;
            }
        }
        return true;
    })
    .join("\n");
}
console.log(modernTimesOfTag('Nowadays everyone uses # to tag a #special word in #socialMedia'));
console.log(modernTimesOfTag('The symbol # is known #variously in English-speaking #regions as the #number sign'));