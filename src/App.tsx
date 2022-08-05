import Style from './styles/App.module.scss';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';

function App() {
  const [img, setImg] = useState('');

  const printDocument = () => {
    const firstPage = document.getElementById('firstPage');
    if (firstPage) {
      html2canvas(firstPage, {
        allowTaint: true,
        backgroundColor: null,
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/jpeg', 1);
        setImg(imgData);
        if (imgData) {
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0, 0, 0);
          pdf.save('download.pdf');
        }
      });
    }
  };

  return (
    <div className={Style.App}>
      <button onClick={printDocument}>Print</button>
      {/* {img && <img src={img} />} */}
      <FirstPage id='firstPage' />
      <SecondPage id='secondPage' />
    </div>
  );
}

export default App;
