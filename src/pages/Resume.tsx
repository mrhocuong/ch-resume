import { faBars, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toJpeg } from 'html-to-image';
import jsPDF from 'jspdf';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import { Fab, Action } from 'react-tiny-fab';
import FirstPage from '../components/FirstPage';
import SecondPage from '../components/SecondPage';
import Loading from '../components/Shared/Loading';
import Style from '../styles/pages/Resume.module.scss';

const Resume: FC = () => {
  const elementIds = ['firstPage', 'secondPage'];
  const [captureResult, setCaptureResult] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const printDocument = () => {
    setShow(true);
    for (let i = 0; i < elementIds.length; i++) {
      const elementId = elementIds[i];
      const page = document.getElementById(elementId);
      if (page) {
        page.style.margin = '0';
        const toJpegPromise = toJpeg(page, { quality: 1 });
        Promise.all([toJpegPromise]).then((arr) => {
          setCaptureResult((current) => {
            return [...arr, ...current];
          });
          page.style.margin = '1cm auto';
        });
      }
    }
  };

  useEffect(() => {
    if (elementIds.length === captureResult.length) {
      const pdf = new jsPDF('p', 'mm', 'a4');
      for (let i = 0; i < captureResult.length; i++) {
        if (i !== 0) pdf.addPage('a4', 'p');
        pdf.addImage(captureResult[i], 'PNG', 0, 0, 0, 0);
      }
      const fileName = `Cuong Ho's Resume-${moment().format(
        'DDMMMyyyy_HHmm'
      )}.pdf`;

      pdf.save(fileName);
      setCaptureResult([]);
      setShow(false);
    }
  }, [captureResult, elementIds.length]);

  return (
    <div className={Style.resume}>
      <Fab
        icon={<FontAwesomeIcon icon={faBars} />}
        mainButtonStyles={{ backgroundColor: '#313c4e' }}
      >
        <Action text='Download Resume' onClick={printDocument}>
          {<FontAwesomeIcon icon={faDownload} />}
        </Action>
      </Fab>
      <FirstPage id='firstPage' />
      <SecondPage id='secondPage' />
      <Loading show={show} />
    </div>
  );
};
export default Resume;
