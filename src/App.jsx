
import HeroPage from './HeroPage'
import CustomerVid from './CustomerVid'
import Features from './Features'
import NavigationBar from './NavigationBar'
import Pricing from './Pricing'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
function App() {

  return (
    <>
      <NavigationBar/>
      <Stack gap={3}>
        <div className='p-2'><h1>Manage Your Money like a Boss</h1></div>
        <div className='p-2'><HeroPage /></div>
        <div className='container-md'><CustomerVid /></div>
        <div className='mx-auto p-2'><Features /></div>
        <div className='p-2'><Pricing /></div >
      </Stack>
    </>
  )
}

export default App
