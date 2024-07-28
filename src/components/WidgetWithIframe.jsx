import React, { useEffect, useRef } from "react";

const WidgetWithIframe = ({ src }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      const checkElement = () => {
        const iframeDocument = iframeRef.current.contentDocument;
        if (iframeDocument) {
          const targetElement = iframeDocument.querySelector(
            ".leaflet-control-layers.leaflet-control-layers-expanded.leaflet-control"
          );
          if (targetElement) {
            targetElement.classList.add("minimized");
          } else {
            // Если элемент еще не найден, повторить проверку через 200 мс
            setTimeout(checkElement, 200);
          }
        }
      };

      checkElement();
    };

    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", handleLoad);
    }

    // Очистить event listener при размонтировании компонента
    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <div className="widget">
      <iframe ref={iframeRef} className="widgetIframe" src={src} title="Трек">
        Ваш браузер не поддерживает фреймы!
      </iframe>
    </div>
  );
};

export default WidgetWithIframe;
