
function slugify(title) {
    //title = "This is an article"
    //slug = "this-is-an-article"
    slugarr=[];
    for(let i = 0; i < title.length; i++) {
        if(i > 30) break;

        let cur = title[i].toLowerCase();
        if(cur >= 'a' && cur <= 'z') slugarr.push(cur);
        else slugarr.push('-');
    }
    return slugarr.join('');
}

module.exports = slugify;
