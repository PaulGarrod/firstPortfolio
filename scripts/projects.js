let data = [{
	name: 'UK Covid Data',
	website: 'https://uk-covid-data.netlify.app/',
	code: 'https://github.com/PaulGarrod/UKCovidData',
	hosted: 'GitHub', 
	description1: 'Displaying real time Covid-19 data from the UK was the purpose of this site as I have family in the UK and decided I would like a place to check the current number of cases and deaths. I wanted the site up quickly and as there wasn\'t too much CSS needed, I decided to incorporate Bootstrap for the sites responsive layout as it was the simplest solution.',
	description2: 'Using Fetch API to retrieve the UK Governments current data on Covid-19 within an async function I then access the returned promise to insert the data into the website using DOM Manipulation.', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/UKCovidData',
	brief: '',
	idea: 'Utilize UK government API to have easy to find, easy to read and understand data on the current Covid pandemic.',
	challenges: [
		'Utilizing the database', 'Integrating reset password feature', 'Creating admin permissions', ''
	]
},{
	name: 'Todo Application',
	website: 'https://paulgarrod-todolist.netlify.app/',
	code: 'https://github.com/PaulGarrod/toDoList',
	hosted: 'GitHub', 
	description1: 'The to do application is made using JQuery, along with HTML and CSS. As there are some custom CSS aspects to this project, I decided there is no need for a CSS framework.',
	description2: 'Using JQuery for the functionality reduced the amount of JavaScript code needed to get the application live. Functionality includes removing a to do, highlighting completed to dos by togging css classes, creating a new to do by inserting user input and appending to the list, and the hiding of the input when the plus button is clicked.', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:jquery-mobile'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/toDoList',
	brief: '',
	idea: '',
	challenges: [
		'Incorporating Local Storage'
	]
},{
	name: 'Current Weather',
	website: 'https://current-weather-search.netlify.app/',
	code: 'https://github.com/PaulGarrod/weatherApp2',
	hosted: 'GitHub', 
	description1: 'Creating a weather checker using Javascript. The page is built fully resposive through html and css, without the use of frameworks. The data is retrieved using javascript\'s fetch api within an async function, this function is then called when needed throughout the code.',
	description2: 'Chaining on to the getData functions returned promise, I then use template literals to insert the returned data into html elements using the DOM. The background image is set using if else statements which match a corresponding image to the current weather data returned from the API. Searching for a new city is done by using the users input data as an arguement to create a new fetch request.', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/weatherApp2',
	brief: '',
	idea: '',
	challenges: [
		'Incorporating Local Storage', '', ''
	]
},{
	name: 'Phi Phi Island Travel Site',
	website: 'http://www.ppislands.com',
	code: 'https://github.com/PaulGarrod/ppislands.com',
	hosted: 'Heroku',
	description1: 'Travel information site for Phi Phi Island, Thailand. Supplimenting a Facebook group I\'m an admin for with some friends. After living on Phi Phi for over a year, I heard tourists ask the same questions over and over. So, I created an information site with relevent information about the island, travel and activities. Built in the GOORM IDE and hosted on Heroku. Created using Javascript, Node.JS, Express JS and NPM, utilizing restful routing and GitHub for version control.',
	description2: '',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:nodejs-icon'></span> </span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:npm-2'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/ppIslands',
	brief: 'Deliver travel information on Phi Phi Island to help tourists maximise their trip.',
	idea: 'Promotion of scuba diving and none party related activities with an emphasis on environmental and clean tourism.',
	challenges: [
		'Creating the show pages', 'Gathering all the images', 'Aligning the layout correctly', 'Using a blue on blue color theme'
	]
},{
	name: 'Tom Freer Photography',
	website: 'http://www.tomfreerphotography.com/',
	code: 'https://github.com/PaulGarrod/tomFreerPhotography',
	hosted: 'Heroku',
	description1: 'A photography portfolio website for a local photographer, currently designed with a simple one page layout. But built with the further expansion of his portfolio and additional show pages in mind. Built in the GOORM IDE and hosted on Heroku. Created using Javascript, Node.JS, Express JS and NPM to allow for easy expansion of the clients work when necassary. GitHub used for version control.',
	description2: '',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:nodejs-icon'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:npm-2'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/tomFreerPhotography', 
	brief: 'Simple, single page photography portfolio. No booking functions, just contact information and example photographs.',
	idea: '',
	challenges: [
		''
	]
},{
	name: 'Simple Movie Search',
	website: 'https://pgmoviesearch.herokuapp.com/',
	code: 'https://github.com/PaulGarrod/simpleMovieSearch',
	hosted: 'Heroku',
	description1: 'Utilizing a movie database API, I created a Simple Movie Search which will return any movie which includes your search term along with the movies release date. Originally created using VS Code and later migrated to GOORM IDE, hosted on Heroku.',
	description2: '',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/simpleMovieSearch', 
	challenges: [
		'Correctly integrating the API keys', 'Two', 'Three',
	]
}];

function mainProject() {
	for(var i = 0; i<data.length; i++){

		function createPortfolio(){
			let outerContainer = document.createElement('article');
			let headerRow = document.createElement('div');
			let headerCol = document.createElement('div');
			let newH2 = document.createElement('h2');
			let mainRow = document.createElement('div');
			let firstCol = document.createElement('figure');
			let newImgA = document.createElement('a');
			let newImg = document.createElement('img');
			let technology = document.createElement('p');
			let secondCol = document.createElement('figcaption');
			let newH4 = document.createElement('h4');
			let description1 = document.createElement('p');
			let description2 = document.createElement('p');
			let buttonDiv = document.createElement('div');
			let webButton = document.createElement('button');
			let webButtonA = document.createElement('a');
			let codeButton = document.createElement('button');
			let codeButtonA = document.createElement('a');
		
			outerContainer.className = 'container project-bg';
		
			// main header
			headerRow.className = 'row mt-5 mb-3';
			headerCol.className = 'col-12 text-center'
			newH2.innerHTML = `${data[i].name}`;
			
			// create grid
			mainRow.className = 'row';
			firstCol.className = 'col-md-6 p-0';
			secondCol.className = 'col-md-6';
			
			// left column
			newImgA.setAttribute('href', `${data[i].website}`)
			newImgA.setAttribute('target', '_blank')
			newImg.src = `images/portfolio/${data[i].name}.jpg`;
			newImg.className = 'resp-img';
			technology.className = 'half-size text-center';
			technology.innerHTML = `${data[i].tech}`;
			
			// right column
			newH4.innerText = 'Description';
			description1.innerText = `${data[i].description1}`;
			description2.innerText = `${data[i].description2}`;
			
			// buttons
			buttonDiv.className = 'text-center'
			webButton.className = 'text-center btn-dark btn btn-secondary m-2'
			webButtonA.setAttribute('href', `${data[i].website}`)
			webButton.innerText = 'Website'
			codeButton.className = 'text-center btn-dark btn btn-secondary m-2'
			codeButtonA.setAttribute('href', `${data[i].code}`)
			codeButton.innerText = 'Code'

			// place elements in DOM
			document.querySelector('#mainProject').appendChild(outerContainer).appendChild(headerRow).appendChild(headerCol).appendChild(newH2);
			outerContainer.appendChild(mainRow).appendChild(firstCol).appendChild(newImgA).appendChild(newImg);
			mainRow.appendChild(secondCol);
			firstCol.appendChild(technology);
			secondCol.appendChild(newH4)
			secondCol.appendChild(description1)
			secondCol.appendChild(description2)
			secondCol.appendChild(buttonDiv).appendChild(webButtonA).appendChild(webButton)
			buttonDiv.appendChild(codeButtonA).appendChild(codeButton)
		}
		createPortfolio();
	}
}
mainProject();

export {data}