import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { Fab, Action } from 'react-tiny-fab';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import Style from '../styles/pages/Resume.module.scss';

const Resume: FC = () => {
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
        arrayOfAllResolvedValues.map((canvas) => canvas.toDataURL('image/jpeg'))
      );
    });
  };
  useEffect(() => {
    if (elementIds.length === captureResult.length) {
      const pdf = new jsPDF('p', 'mm', 'a4');
      for (let i = 0; i < captureResult.length; i++) {
        if (i !== 0) pdf.addPage('a4', 'p');
        pdf.addImage(captureResult[i], 'PNG', 0, 0, 0, 0);
      }
      const fileName = `CuongHo's Resume-${moment().format(
        'DDMMMyyyy_HHmm'
      )}.pdf`;
      // pdf.save(fileName);
      // setCaptureResult([]);
    }
  }, [captureResult, elementIds.length]);
  return (
    <div className={Style.App}>
      <Fab icon={<FontAwesomeIcon icon={faEnvelope} />}>
        <Action text='Download Resume' onClick={printDocument} />
        <Action text='Help' onClick={() => {}}>
          <i className='fa fa-help' />
        </Action>
      </Fab>
      {captureResult && captureResult.map((x) => <img src={x} />)}
      <FirstPage id='firstPage' />
      <SecondPage id='secondPage' />
    </div>
  );
};
export default Resume;
