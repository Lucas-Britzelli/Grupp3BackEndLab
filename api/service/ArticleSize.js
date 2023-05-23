function ArticleLength(articleText) {
    if (articleText.length < 200) {
        return 'Artikeln är kortare än 200 tecken'
    } else {
        return 'Artikeln är längre än 200 tecken'
    }
}

module.exports = ArticleLength
