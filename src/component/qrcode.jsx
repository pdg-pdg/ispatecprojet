import React from 'react';
import { Button, QRCode, Segmented, Space } from 'antd';
import ispatecLogo from '../assets/ispatec.png';



function doDownload(url, fileName) {
  const a = document.createElement('a');
  a.download = fileName;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
const downloadCanvasQRCode = () => {
  var _a;
  const canvas =
    (_a = document.getElementById('myqrcode')) === null || _a === void 0
      ? void 0
      : _a.querySelector('canvas');
  if (canvas) {
    const url = canvas.toDataURL();
    doDownload(url, 'QRCode.png');
  }
};
const downloadSvgQRCode = () => {
  var _a;
  const svg =
    (_a = document.getElementById('myqrcode')) === null || _a === void 0
      ? void 0
      : _a.querySelector('svg');
  const svgData = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  doDownload(url, 'QRCode.svg');
};
const Qrcode = () => {
  const [renderType, setRenderType] = React.useState('canvas');
  return (
    <Space id="myqrcode" direction="vertical" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
        <h1>Partager en scannant le code</h1>
      <Segmented options={['canvas', 'svg']} value={renderType} onChange={setRenderType} />
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' , flexDirection: 'column'}}>
        <QRCode
          type={renderType}
          value="http://localhost:5173/"
          bgColor="#fff"
          style={{ marginBottom: 16, width: '100%'}}
          icon= "../assets/ispatec.png"
        />
        <Button
          type="primary"
          onClick={renderType === 'canvas' ? downloadCanvasQRCode : downloadSvgQRCode}
          style={{ alignItems: 'center', marginBottom: '21px' }}
        >
          Telecharger
        </Button>
      </div>
    </Space>
  );
};
export default Qrcode;