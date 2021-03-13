let data = [{
	name: 'UK Covid Data',
	website: 'https://uk-covid-data.netlify.app/',
	code: 'https://github.com/PaulGarrod/UKCovidData',
	hosted: 'GitHub', 
	description: 'I wanted to create a site which provides honest real time data on both cases and deaths in the UK. Utilizing Fetch API to retrieve the UK Governments current data on Covid-19. I then created asynchronous functions using async await to retrieve the data, with promise chaining used to display the data. Incorporating Bootstrap for the sites responsive layout was the simple solution.',
	description2: '', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/UKCovidData',
	brief: '',
	idea: 'Utilize UK government API to have easy to find, easy to read and understand data on the current Covid pandemic.',
	challenges: [
		'Utilizing the database', 'Integrating reset password feature', 'Creating admin permissions', ''
	],
	doItDifferently: ''
},{
	name: 'Todo Application',
	website: 'https://paulgarrod-todolist.netlify.app/',
	code: 'https://github.com/PaulGarrod/toDoList',
	hosted: 'GitHub', 
	description: 'Create a todo application. Use local storage to maintain list.',
	description2: '', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/UKCovidData',
	brief: '',
	idea: '',
	challenges: [
		'Incorporating Local Storage', '', ''
	],
	doItDifferently: ''
},{
	name: 'Phi Phi Island Travel Site',
	website: 'http://www.ppislands.com',
	code: 'https://github.com/PaulGarrod/ppislands.com',
	hosted: 'Heroku',
	description: 'Travel information site for Phi Phi Island, Thailand. Supplimenting a Facebook group I\'m an admin for with some friends. After living on Phi Phi for over a year, I heard tourists ask the same questions over and over. So, I created an information site with relevent information about the island, travel and activities. Built in the GOORM IDE and hosted on Heroku. Created using Javascript, Node.JS, Express JS and NPM, utilizing restful routing and GitHub for version control.',
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
	description: 'A photography portfolio website for a local photographer, currently designed with a simple one page layout. But built with the further expansion of his portfolio and additional show pages in mind. Built in the GOORM IDE and hosted on Heroku. Created using Javascript, Node.JS, Express JS and NPM to allow for easy expansion of the clients work when necassary. GitHub used for version control.',
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
	description: 'Utilizing a movie database API, I created a Simple Movie Search which will return any movie which includes your search term along with the movies release date. Originally created using VS Code and later migrated to GOORM IDE, hosted on Heroku.',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:heroku-icon'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/simpleMovieSearch', 
	challenges: [
		'Correctly integrating the API keys', 'Two', 'Three',
	]
}];
export {data};

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
			let description = document.createElement('p');
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
			description.innerText = `${data[i].description}`;
			
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
			secondCol.appendChild(description)
			secondCol.appendChild(buttonDiv).appendChild(webButtonA).appendChild(webButton)
			buttonDiv.appendChild(codeButtonA).appendChild(codeButton)
		}
		createPortfolio()
	}
}
mainProject();
