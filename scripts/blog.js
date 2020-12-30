let blogs = [{
    title: 'Lessons learnt',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'lessons.jpg',
    imgAlt: 'A book and a coffee laid on a bed.'
}, {
    title: 'Resources that helped',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'library.jpg',
    imgAlt: 'Girl sat in a library covered in books.'
}, {
    title: 'Imposter Syndrome',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'imposter.jpg',
    imgAlt: 'Two men in anonymous masks looking around.'
}, {
    title: 'My first solo project',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'firstproject.jpg',
    imgAlt: 'Vintage car shell in a garage waiting to be restored.'
}];
export {blogs};

// pretty sure this is a callback function old style - figure out how to convert to a callback! 
function blogPosts(){
    let contentContainer = document.createElement('section')
    let contentRow = document.createElement('div')
    
    contentContainer.className = 'container'
    contentRow.className = 'row'
    document.querySelector('#blogContent').appendChild(contentContainer).appendChild(contentRow)

    // create one post and replicate with forLoop
    function createPost() {
        let contentCol = document.createElement('article')
        let contentHeader = document.createElement('h4')
        let contentImgA = document.createElement('a')
        let contentImgContainer = document.createElement('figure')
        let contentImgWrapper = document.createElement('div')
        let contentImgText = document.createElement('p')
        let contentImg = document.createElement('img')

        contentCol.className = 'col-lg-3 col-md-6 col-sm-12'
        contentHeader.className = 'mb-3'
        contentHeader.innerText = `${blogs[i].title}`
        // need a link on the image?
        // contentImgA.setAttribute('href', `${blogs[i].website}`)
        // contentImgA.setAttribute('target', '_blank')
        contentImgContainer.className = 'contentImgContainer mb-5';
        contentImgWrapper.className = 'contentImgWrapper';
        contentImgText.className = 'contentImgText';
        contentImgText.innerText = 'Coming Soon!';

        contentImg.src = `images/blogs/${blogs[i].img}`;
        contentImg.className = 'blogImg';
        contentImg.setAttribute('alt', `${blogs[i].imgAlt}`)
        
        contentRow.appendChild(contentCol).appendChild(contentHeader)
        contentCol.appendChild(contentImgContainer)
        contentImgContainer.appendChild(contentImg)
        contentImgContainer.appendChild(contentImgWrapper).appendChild(contentImgText)
    }
    for(var i = 0; i<blogs.length; i++){
        createPost()
    }
}
blogPosts()