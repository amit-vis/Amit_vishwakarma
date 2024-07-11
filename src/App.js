import './App.css';
import { MultiStep } from './componentes/Multistep';
import Navigation from './componentes/navigation';
import { FormProvider } from './context/formcontext';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Navigation/>
        <MultiStep/>
      </FormProvider>
    </div>
  );
}

export default App;
