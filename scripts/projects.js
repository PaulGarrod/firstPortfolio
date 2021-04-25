let data = [{
	name: 'UK Covid Data',
	website: 'https://uk-covid-data.netlify.app/',
	code: 'https://github.com/PaulGarrod/UKCovidData',
	description1: 'Displaying up to date Covid-19 Data from the UK Government\'s API. Creating this site because I\'m originally from the UK and my family still live in the UK, this site gives me an easy snapshot of the Covid numbers in the UK. The site is simple, because I want the data to be the focus, this also lead me to utilize bootstrap for the sites responsiveness as there is limited CSS needed for the site.',
	description2: 'Using Fetch API to retreive the data. Using an async function I then access the returned promise to insert into the website using DOM Manipulation. With the drop down menu it is possible to access the data from past dates and compare the figures to the most recent days data.', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:bootstrap'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/UKCovidData'
},{
	name: 'Todo Application',
	website: 'https://paulgarrod-todolist.netlify.app/',
	code: 'https://github.com/PaulGarrod/toDoList',
	description1: 'Incorporating local storage to allow users to store their to dos and have access to their list after they leave the application. Functionality created with JQuery, style and responsive elements created with CSS, without the use of a CSS Framework.',
	description2: 'Functionality includes creating, highlighting and deleting to dos, plus the ability to flag important todos. Ability to reorder list and bring the flagged items to the top. The input options can be hidden by clicking the plus icon at the top.', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:jquery-mobile'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/toDoList'
},{
	name: 'Current Weather',
	website: 'https://current-weather-search.netlify.app/',
	code: 'https://github.com/PaulGarrod/weatherApp2',
	description1: 'Utilizing Fetch API to retreive current weather data, which is accessed and appended to the DOM. The default city is set to Wellington, but the search input allows you to search for any city in the world. All functionality is created with javaScrit. No CSS framework is used for styling or responsiveness.',
	description2: 'The background image is set using if else statements which match a corresponding image to the current weather data returned from the API. Background image has a transparent overlay to highlight the header text.', 
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/weatherApp2'
},{
	name: 'Card Battle Rock Singer',
	website: 'https://rock-singer-battle.netlify.app/',
	code: 'https://github.com/PaulGarrod/singerFightCardGame',
	description1: 'Using React to create a simple card battle game. Cards are based on Rock Singers, and include experience and intimidation scores.',
	description2: 'Purpose of this project was to use react components and props together.',
	tech:
		"<span class='iconify m-3' data-icon='logos:html-5'></span> <span class='iconify m-3' data-icon='logos:css-3'></span> <span class='iconify m-3' data-icon='logos:react'></span> <span class='iconify m-3' data-icon='logos:javascript'></span> <span class='iconify m-3' data-icon='logos:netlify'></span> <span class='iconify m-3' data-icon='logos:github-icon'></span>"
	,
	codeLink: 'https://github.com/PaulGarrod/singerFightCardGame'
}
];

export {data}

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
			webButton.innerText = 'The Website'
			codeButton.className = 'text-center btn-dark btn btn-secondary m-2'
			codeButtonA.setAttribute('href', `${data[i].code}`)
			codeButton.innerText = 'The Code'

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
