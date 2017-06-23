import { MpfnTestHerokuPage } from './app.po';

describe('mpfn-test-heroku App', () => {
  let page: MpfnTestHerokuPage;

  beforeEach(() => {
    page = new MpfnTestHerokuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
