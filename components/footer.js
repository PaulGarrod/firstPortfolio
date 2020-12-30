class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class='custom-shape-divider-top-1599365442' id='contact-bg'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                <path d='M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z' class='shape-fill'></path>
            </svg>
        </div>
        
        <footer class='container-fluid' id='contact-bg'>
            <div class='row'>
                <div class='col-12'>
                    <h1 class='text-center pt-3'>Let's Connect</h1>
                </div>
            </div>	
            <div class='row justify-content-center pb-5'>
                <a class='git-logo' href='https://github.com/PaulGarrod' target='_blank' alt='Paul Garrod GitHub profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/github--v1.png' class='ml-3 mr-3'/>
                </a>
                <a class='linkedin-logo' href='https://www.linkedin.com/in/paulgarrod/' target='_blank' alt='Paul Garrod LinkedIn profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/linkedin--v2.png' class='ml-3 mr-3'/>
                </a>
                <a class='twitter-logo'  href='https://twitter.com/PGCoding' target='_blank' alt='Paul Garrod Twtter profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/twitter--v1.png' class='ml-3 mr-3'/>
                </a>
                <a class='email-logo' href='mailto:paulrgarrod@gmail.com' target='_blank' alt='Paul Garrod Twtter profile'>
                    <img src='https://img.icons8.com/doodle/48/000000/email--v1.png' class='ml-3 mr-3' href='paulrgarrod@gmail.com'/>
                </a>
            </div>
        </footer>
  
        <footer class='text-center'>
            <p class='text-center m-0'>
                Thanks for taking the time to browse my little corner of the internet.
            </p>
            <a href="https://icons8.com">Icons by Icons8</a>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);