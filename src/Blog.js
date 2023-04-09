class Blog{
    constructor(title='Untitled Blog'){
        this.title = title
        this.date = new Date()
    }

    // getters
    generateHtmlPage(){

    }

    optimize(){

    }

    // setters
    setArticle(article){
        this.article = article
        return this;
    }

    setSeo(description,keywords){
        this.seoDescription = description
        this.keywords = keywords
        return this;
    }

    setEmbed(embed){
        this.embed = embed
        return this;
    }


}

export default Blog;