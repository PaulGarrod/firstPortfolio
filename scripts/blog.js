let blogs = [{
    title: 'Lessons learnt',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'lessons.jpg'
}, {
    title: 'Resources that helped',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'library.jpg'
}, {
    title: 'Imposter Syndrome',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'imposter.jpg'
}, {
    title: 'My first solo project',
    date: '20th September 2020',
    category: 'Code Newbie',
    contentIntro: 'My euthoria upon completing the legendary Colt Steele\'s Web Developer Bootcamp course on Udemy, was short lived. As soon as I began to work on my first solo website, I realised I had no idea what I was doing and even worse, I had no Idea where to start!',
    contentBody: '',
    contentEnd: '',
    img: 'firstproject.jpg'
}];
export {blogs};

function blogHeader() {

    let headContainer = document.createElement('div')
    let headRow = document.createElement('div')
    let headCol = document.createElement('div')
    let header = document.createElement('h2')
    headContainer.className = 'container mt-5 mb-3'
    headRow.className = 'row'
    headCol.className = 'col-12 text-center'
    header.innerText = 'Paul Garrod\'s Blog'
    document.querySelector('#blogHeader').appendChild(headContainer).appendChild(headRow).appendChild(headCol).appendChild(header)
    // let newPara = document.createElement('p');
    // newPara.innerText = `${blogs[0].content}`;
    // document.querySelector('#blogtester').appendChild(newPara);
}

blogHeader()

// pretty sure this is a callback function old style - figure out how to convert to a callback! 

function blogPosts(){
    let contentContainer = document.createElement('div')
    contentContainer.className = 'container'
    let contentRow = document.createElement('div')
    contentRow.className = 'row'
    document.querySelector('#blogContent').appendChild(contentContainer).appendChild(contentRow)

    // create one post and replicate with forLoop
    function createPost() {
        let contentCol = document.createElement('div')
        let contentHeader = document.createElement('h4')
        let contentImgA = document.createElement('a')
        let contentImgContainer = document.createElement('div')
        let contentImgWrapper = document.createElement('div')
        let contentImgText = document.createElement('div')
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