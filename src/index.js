import ReactDOM from 'react-dom/client';
import Bars from './components/Bars';
import './Style.css';

function XyloPhone() {

  return (
    <Bars />
  )
}

let reactRoot = ReactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<XyloPhone />);