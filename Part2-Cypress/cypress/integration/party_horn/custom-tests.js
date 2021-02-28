describe('Party Horn Test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  //test 1: If volume input changes then slider changes
  it('test 1: If volume input changes then slider changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  //test 2: If slider changes then volume input changes
  it('test 2: If slider changes then volume input changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  //test 3: slider changes then volume changes
  it('test 3: slider changes then volume changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  //test 4: image and sound paths change when button is clicked
  it('test 4: image and sound paths change when button is clicked', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  //test 5: volume image changes when volume increase
  it('test 5: volume image changes when volume increase', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });

    //if volume is 1-33 then image = 1
    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    //if volume = 34-66 then image = 2
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });

    // if volume = 67-100 then image = 3
    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
    cy.get('#volume-number').clear().type('100');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  //test 6: button is disabled when textbox input is empty or a non-number
  it('test 6: button is disabled when textbox input is empty or a non-number', () => {
    //textbox is empty
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
    //textbox entry is not a number
    cy.get('#volume-number').clear().type('non-number');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  //test 7: error given when typing a number outside range for volume input
  it('test 7: error given when typing a number outside range for volume input', () => {
    //volume = -1
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number:invalid').should('exist');
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be greater than or equal to 0.');
    });
    //volume beyond limit
    cy.get('#volume-number').clear().type('120');
    cy.get('#volume-number:invalid').should('exist');
    cy.get('#volume-number').then(($el) => {
      expect($el[0].validationMessage).to.eq('Value must be less than or equal to 100.');
    });
  });
});
