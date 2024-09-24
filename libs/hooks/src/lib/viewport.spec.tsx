import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useViewport from './viewport';

describe('useViewport', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useViewport());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
