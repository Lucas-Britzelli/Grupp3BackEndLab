function ArticleLength() {
    if (ArticleLength.length < 200) {
        return 'Artikeln är kortare än 200 tecken'
    } else {
        throw 'Artikeln är längre än 200 tecken'
    }
}

module.exports = ArticleLength
