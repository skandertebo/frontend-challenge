import { render } from '@testing-library/react';

import WelcomingPage from './welcoming-page';

describe('WelcomingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WelcomingPage />);
    expect(baseElement).toBeTruthy();
  });
});
