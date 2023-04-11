class Blog {
    constructor(title, mediaType, isArabic) {
        this.title = title
        this.mediaType = mediaType
        this.isArabic = isArabic
        this.date = new Date()

        this.htmlPage =
            /*html */
            `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <!-- Primary Meta Tags -->
            <title>##blog_page_title</title>
            <meta name="title" content="##blog_page_title">
            <meta name="description" content="##blog_page_description">
            <meta name="keywords" content="##blog_page_keywords">
            <meta name="robots" content="index, follow">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="language" content="English">
            <meta name="revisit-after" content="1 days">
            <meta name="author" content="Mahmoud Mashoun">
        
            <!-- Open Graph / Facebook -->
            <meta property="og:type" content="website">
            <meta property="og:url" content="##blog_page_url">
            <meta property="og:title" content="##blog_page_title">
            <meta property="og:description" content="##blog_page_description">
            <meta property="og:image" content="##blog_thubnail">
        
            <!-- Twitter -->
            <meta property="twitter:card" content="summary_large_image">
            <meta property="twitter:url" content="##blog_page_url">
            <meta property="twitter:title" content="##blog_page_title">
            <meta property="twitter:description" content="##blog_page_description">
            <meta property="twitter:image" content="##blog_thubnail">
        
        
            <!-- Styles -->
            <link rel="shortcut icon" href="https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa"
                type="image/x-icon">
            <link rel="stylesheet" href="../css/main.css">
            <link rel="stylesheet" href="../css/responsive.css">
            <link rel="stylesheet" href="../css/animations.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <!-- Swiper -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
        
            <!-- AOS -->
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
            <!-- Day js -->
            <script src="https://cdn.jsdelivr.net/npm/dayjs@1.10.6/dayjs.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/dayjs@1.10.6/plugin/relativeTime.min.js"></script>
            <!-- VUE JS -->
            <script src="https://unpkg.com/vue@3/dist/vue.global.prod.js"></script>
            <script>
                function removeInvalidChars() {
                var elements = document.getElementsByTagName('*');
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    for (var j = 0; j < element.childNodes.length; j++) {
                    var node = element.childNodes[j];
                    if (node.nodeType === 3) {
                        var text = node.nodeValue;
                        var replacedText = text.replaceAll(/�/g,'');
                        if (replacedText !== text) {
                        element.replaceChild(document.createTextNode(replacedText), node);
                        }
                    }
                    }
                }
                }
                window.onload = function() {
                removeInvalidChars();
                };
            </script>
        
        </head>
        
        <body id="app" class="bg-body">
            <header class="bg-light shadow-sm w-100 p-3 pop">
                <div class="container d-flex align-items-center gap-1">
                    <a :href="env('/blogs/')"><i class="bi bi-grid-fill"></i></a>
                    <i class="bi bi-chevron-compact-right"></i>
                    <h6 :class="'m-0 text-secondary fs-6 text-fade '+font('pop')" :dir="dir">##blog_page_title</h6>
                </div>
            </header>
            <main class="container mt-1 mb-5">
                <div class="row justify-content-center">
                    <article class="col-12 col-lg-6 px-2 py-3">
                        <div class="rounded shadow-sm p-3 bg-light">
                            <!-- blog header -->
                            <section
                                class="bg-light d-flex align-items-center justify-content-between px-2 py-3 shadow-sm rounded">
                                <a :href="env('/')" class="d-flex justify-content-start align-items-center gap-2">
                                    <img src="https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa"
                                        alt="profile pic" class="img-fluid rounded-pill shadow skeleton" width="40" height="40">
                                    <div class="d-flex flex-column">
                                        <h1 class="fs-5 text-secondary m-0 pop"> <strong>Mahmoud Mashoun</strong> </h1>
                                        <h6 class="fs-xsmall pop text-secondary">Full Stack Web Dev.</h6>
                                    </div>
                                </a>
                                <div class="d-flex align-items-center gap-2">
                                    <i class="bi bi-three-dots-vertical fs-5 text-secondary" data-bs-toggle="dropdown"></i>
        
                                    <ul class="dropdown-menu shadow-sm p-2 pop bg-abyad">
                                        <div class="scale-in-center">
                                            <li><a class="dropdown-item" :href="env('/')">Home Page</a></li>
                                            <li><a class="dropdown-item" href="#experience">Work Experience</a></li>
                                            <li><a class="dropdown-item" href="/blogs">Blogs & FAQs</a></li>
                                            <li><a class="dropdown-item" href="/terms_and_conditions">Terms & Conditions</a>
                                            </li>
                                            <li><a class="dropdown-item" href="/privacy_policy">Privacy Policy</a></li>
                                            <li><a class="dropdown-item" href="#contact">Contact</a></li>
                                            <li>
                                                <a href="" class="mt-1 rounded border p-2 text d-flex align-items-center gap-2">
                                                    <i class="material-symbols-outlined">
                                                        video_call
                                                    </i>
                                                    <span>Schedule a meeting</span>
                                                </a>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </section>
        
                            <!--blog embed-->
        
                            <!--swiper-->

                            <!-- blog body-->
                            <section class="mt-3 d-flex flex-column gap-3">
                                <h1 :class="'fs-1 bebas text-gradient '+font('bebas')" :dir="dir">##blog_page_title</h1>
                                <p :class="'fs-6 pop text-secondary text-justify cap '+font('pop')" :dir="dir">##blog_article</p>
                            </section>
                            <hr>
        
                            <!-- blog footer -->
                            <footer class="d-flex gap-2 align-items-center justify-content-between">
                                <div class="text d-flex gap-2 align-items-center text-secondary fs-xsmall">
                                    <!-- <i class="bi bi-clock"></i> -->
                                    <time class="m-0 pop">{{timo('##blog_date')}}</time>
                                </div>
                                <div class="d-flex align-items-center gap-3">
                                    <div class="dropup dropup">
                                        <i class="bi bi-share-fill fs-6 text-secondary" @click="shareBlog('##blog_page_title','##blog_page_url')"></i>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    </article>
        
                    <!--comment-section-->
        
                </div>
            </main>
        
            <footer-section id="contact"></footer-section>
        
            <!-- ********** JAVASCRIPT ********** -->
        
            <script src="../js/vue.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossorigin="anonymous"></script>
        
            <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
            <script>
                var swiper = new Swiper('.swiper', {
                    spaceBetween: 20,
                    zoom: true,
                    grabCursor: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            </script>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script src="https://unpkg.com/@grammarly/editor-sdk?clientId=client_8HqGf8c32GzkCc52Lw3Ayo"></script>
        </body>
        
        </html>`
    }
    async getPage() {
        var copyBlogHtml = this.htmlPage

        // embed media is true
        // replace meta tags
        if (this.isArabic) {
            copyBlogHtml = copyBlogHtml.replaceAll('<html lang="en">', '<html lang="ar">')
            copyBlogHtml = copyBlogHtml.replaceAll('text-fade', 'text-fade-arb')
        }
        copyBlogHtml = copyBlogHtml.replaceAll('##blog_page_title', this.title)
        copyBlogHtml = copyBlogHtml.replaceAll('##blog_page_description', this.seoDescription)
        copyBlogHtml = copyBlogHtml.replace('##blog_page_keywords', this.seoKeywords)
        copyBlogHtml = copyBlogHtml.replace('##blog_date', this.date)
        copyBlogHtml = copyBlogHtml.replaceAll('##blog_page_url', `https://mashoun.github.io/app/blogs/${(this.title).replaceAll(' ', '-')}.html`)

        if (this.mediaType) {
            // replace embed section
            copyBlogHtml = copyBlogHtml.replaceAll('##blog_thubnail', )
            copyBlogHtml = copyBlogHtml.replaceAll('<!--blog embed-->', `<section class="mt-3">${this.embed}</section>`)
        }
        else {
            copyBlogHtml = copyBlogHtml.replaceAll('##blog_thubnail', this.images[0].src)
            copyBlogHtml = copyBlogHtml.replaceAll('<!--swiper-->', `<swiper :imgs='${JSON.stringify(this.images)}'></swiper>`)

        }

        // replace blog article
        copyBlogHtml = copyBlogHtml.replaceAll('##blog_article', `${this.compile('article')}`)

        // replace comment section 
        copyBlogHtml = copyBlogHtml.replaceAll('<!--comment-section-->', `<comments :api="API" index="${this.github.index}"></comments>`)

        // Copy the text inside the text field
        // navigator.clipboard.writeText(copyBlogHtml);

        return copyBlogHtml
    }

    // setters
    setArticle(article) { this.article = article; return this }

    setSEO(description, keywords) { this.seoDescription = description; this.seoKeywords = keywords; return this }

    embed(code) { this.embed = code; return this }

    setThubnail(thubnail) { this.thubnail = thubnail; return this }

    addSlides(slides) { this.slides = JSON.stringify(slides); return this }



}

export default Blog