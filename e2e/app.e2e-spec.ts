import { BookingAngularPage } from './app.po';

describe('booking-angular App', () => {
  let page: BookingAngularPage;

  beforeEach(() => {
    page = new BookingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
