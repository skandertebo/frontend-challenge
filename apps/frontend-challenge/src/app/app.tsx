import { Header } from '@my-org/ui-shared';
import { RecoilRoot } from 'recoil';

export function App() {
  return (
    <RecoilRoot>
      <Header title="Todo App" />
      <h1>Todo App</h1>
    </RecoilRoot>
  );
}

export default App;
