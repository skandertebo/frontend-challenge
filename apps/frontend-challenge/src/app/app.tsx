import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import TodoApp from './TodoApp';

export function App() {
  return (
    <RecoilRoot>
      <ToastContainer />
      <TodoApp />
    </RecoilRoot>
  );
}

export default App;
