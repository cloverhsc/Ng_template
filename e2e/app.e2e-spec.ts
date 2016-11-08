import { NGTemplatePage } from './app.po';

describe('ng-template App', function() {
  let page: NGTemplatePage;

  beforeEach(() => {
    page = new NGTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
