export const saveDocument = (linkPdf) => {
  fetch(linkPdf).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "pdf_house";
      alink.click();
    });
  });
};
