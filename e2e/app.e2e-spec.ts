import { PlayNgPage } from './app.po';

describe('play-ng App', () => {
  let page: PlayNgPage;

  beforeEach(() => {
    page = new PlayNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
