class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    
    this.registerListeners();
  }

  registerListeners() {
    this.formEl.onsubmit = event => 
      this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274',
      name: 'rocketseat.com.br',
      description: 'Tire sua ideia do papel e dê vida à sua startup',
      html_url: 'https://github.com/RocketSeat/rocketseat.com.br',
    });

    console.log(this.repositories);
  }
}

new App();
