import Style from './styles/App.module.scss';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useEffect, useState } from 'react';
import moment from 'moment';

function App() {
  const elementIds = ['firstPage', 'secondPage'];
  const [captureResult, setCaptureResult] = useState<string[]>([]);

  const printDocument = () => {
    const promiseArray = [];
    for (let i = 0; i < elementIds.length; i++) {
      const elementId = elementIds[i];
      const page = document.getElementById(elementId);
      if (page) {
        var promiseWait = html2canvas(page, {
          allowTaint: true,
          backgroundColor: null,
        });
        promiseArray.push(promiseWait);
      }
    }
    Promise.all(promiseArray).then((arrayOfAllResolvedValues) => {
      setCaptureResult(
        arrayOfAllResolvedValues.map((canvas) =>
          canvas.toDataURL('image/jpeg', 1)
        )
      );
    });
  };
  useEffect(() => {
    if (elementIds.length === captureResult.length) {
      const pdf = new jsPDF();

      for (let i = 0; i < captureResult.length; i++) {
        if (i !== 0) pdf.addPage();
        pdf.addImage(captureResult[i], 'PNG', 0, 0, 0, 0);
      }
      const fileName = `CuongHo's Resume-${moment().format(
        'DDMMMyyyy_HHmm'
      )}.pdf`;
      pdf.save(fileName);
      setCaptureResult([]);
    }
  }, [captureResult, elementIds.length]);
  return (
    <div className={Style.App}>
      <button onClick={printDocument}>Print</button>
      <FirstPage id='firstPage' />
      <SecondPage id='secondPage' />
    </div>
  );
}

export default App;
