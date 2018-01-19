import { JlAppPage } from './app.po';

describe('jl-app App', () => {
  let page: JlAppPage;

  beforeEach(() => {
    page = new JlAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
