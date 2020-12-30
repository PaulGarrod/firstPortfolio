class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class='navbar fixed-top navbar-expand-md navbar-light bg-light'>
      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo01' aria-controls='navbarTogglerDemo01' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a class='navbar-brand'>Paul Garrod Web Developer</a>
          <ul class='navbar-nav mr-auto mt-2 mt-lg-0'>
              <li class='nav-item' data-toggle='collapse' data-target='.navbar-collapse.show'>
              <a class='nav-link' href='/#home'>Home</a>
              </li>
              <li class='nav-item' data-toggle='collapse' data-target='.navbar-collapse.show'>
              <a class='nav-link' href='/#aboutMe'>About Me</a>
              </li>
              <li class='nav-item' data-toggle='collapse' data-target='.navbar-collapse.show'>
              <a class='nav-link' href='/#technology'>Technology</a>
              </li>
              <li class='nav-item' data-toggle='collapse' data-target='.navbar-collapse.show'>
              <a class='nav-link' href='/#projects'>Projects</a>
              </li>
              <li class='nav-item' data-toggle='collapse' data-target='.navbar-collapse.show'>
              <a class='nav-link' href='/#contact'>Contact</a>
              </li>
          </ul>
          <ul class='navbar-nav ml-auto mt-2 mt-lg-0'>
              <li class='nav-item' data-toggle='collapse' data-target='.navbar-collapse.show'>
                  <a class='nav-link' href='/blog.html'>Blog</a>
              </li>
              <li class='nav-item' data-toggle='collapse' data-target='.navbar-collapse.show'>
              <a class='nav-link' href='resume/resume.pdf' download='Paul Garrod Resume'>Download Resume</a>
              </li>
          </ul>
      </div>
  </nav>

<!-- jumbotron here -->
<div class='jumbotron mb-0' id='indexPic'>
	<div class='container center'>
		<div class='caption'>
			<h1 class='text-center mt-2'>Paul Garrod</h1>
			<h3 class='text-center mt-2'>Web Developer</h3> 
			<p class='text-center mt-2'>Simple Mobile First Design &<br>Fully Responsive Websites</p>
		</div>
		<div class='row justify-content-center pt-3'>
			<a id='git-logo-top' href='https://github.com/PaulGarrod' target='_blank' alt='Paul Garrod GitHub profile'>
				<img src='https://img.icons8.com/doodle/48/000000/github--v1.png' class='ml-3 mr-3'/>
			</a>
			<a id='linkedin-logo-top' href='https://www.linkedin.com/in/paulgarrod/' target='_blank' alt='Paul Garrod LinkedIn profile'>
				<img src='https://img.icons8.com/doodle/48/000000/linkedin--v2.png' class='ml-3 mr-3'/>
			</a>
			<a id='twitter-logo-top' href='https://twitter.com/PGCoding' target='_blank' alt='Paul Garrod Twtter profile'>
				<img src='https://img.icons8.com/doodle/48/000000/twitter--v1.png' class='ml-3 mr-3'/>
			</a>
			<a id='email-logo-top' href='mailto:paulrgarrod@gmail.com' target='_blank' alt='Paul Garrod Twtter profile'>
			<img src='https://img.icons8.com/doodle/48/000000/email--v1.png' class='ml-3 mr-3' href='paulrgarrod@gmail.com'/>
			</a>
		</div>
		<button id='button-resume' class='btnLight btn btn-secondary m-3 text-center'>
			<a class='nav-link' href='resume/resume.pdf' download='Paul Garrod Resume'>Download Resume</a>
		</button>
  	</div>
</div>
      `;
    }
  }
  
  customElements.define('header-component', Header);