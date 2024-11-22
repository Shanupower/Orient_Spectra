import React, { useEffect } from 'react';

const LSQPortalWidget = () => {
  useEffect(() => {
    // Dynamically load the script
    const script = document.createElement('script');
    script.src = "https://portal-widgets.lsqportal.com/assets/bootstrap-widget.js";
    script.dataset.widgetId = "63b83ce2-a8ae-11ef-8bcb-06998e7502ab";
    script.dataset.versionId = "5db6f073-c075-41e0-9a1b-288edad42b16";
    script.dataset.formjs = "https://forms.lsqportal.com/r21/js/lsq.form.js";
    script.dataset.url = "https://portal-widgets-test.lsqportal-test.com";
    script.onload = () => {
      if (window['___lsq-portal-widget-helpers___']) {
        window['___lsq-portal-widget-helpers___'].bootstrapLSQWidget();
      }
    };
    script.charset = "utf-8";

    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="lsq-portal-widget-63b83ce2-a8ae-11ef-8bcb-06998e7502ab-5db6f073-c075-41e0-9a1b-288edad42b16"
      className="lsq-portal-widget lsq-form-widget"
    ></div>
  );
};

export default LSQPortalWidget;
