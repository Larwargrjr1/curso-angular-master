import { promise } from 'protractor';
import { AppPage } from './app.po';

describe('forms App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});   
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function expect(arg0: promise.Promise<string>) {
  throw new Error('Function not implemented.');
}

