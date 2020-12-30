class Head extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <!-- Bootstrap CSS -->
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossorigin='anonymous'>
        <!-- update google fonts -->
        <link href='https://fonts.googleapis.com/css2?family=Philosopher&family=Roboto&display=swap' rel='stylesheet'>
        <!-- ICONS -->
        <script src='https://kit.fontawesome.com/9e866e3193.js' crossorigin='anonymous'></script>
        <title>Paul Garrod Web Developer</title>
        <link rel="shortcut icon" type="image/png" href="/images/favicon.png" />
      `;
    }
  }
  
  customElements.define('head-component', Head);