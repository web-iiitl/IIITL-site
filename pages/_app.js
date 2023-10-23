import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SSRProvider } from 'react-bootstrap';
export default function App({ Component, pageProps }) {
  
    return (
      <SSRProvider>
     <Component {...pageProps} />
     <style jsx global>{`
        body {
          background:#E5E7E5; 
        }
      `}</style>
  </SSRProvider>
    )
  
  
}
