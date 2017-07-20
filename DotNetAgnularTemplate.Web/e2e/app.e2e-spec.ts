import { DotNetAgnularTemplate.WebPage } from './app.po';

describe('dot-net-agnular-template.web App', () => {
  let page: DotNetAgnularTemplate.WebPage;

  beforeEach(() => {
    page = new DotNetAgnularTemplate.WebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
