import { render } from '@testing-library/react';

import PriortySelector from './priorty-selector';

describe('PriortySelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PriortySelector />);
    expect(baseElement).toBeTruthy();
  });
});
