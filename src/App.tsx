import Lock from './containers/Lock/Lock';
import Calculator from './containers/Calculator/Calculator';
import Layout from './containers/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Lock/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>


      </Layout>
    </>
  );
};

export default App;
