import { MyModulePage } from './app.po';

describe('my-module App', () => {
  let page: MyModulePage;

  beforeEach(() => {
    page = new MyModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
