import html2pdf from "html2pdf.js";
export const downloadAsPDF = (elementId, filename = "CareerNest_CV") => {
  const element = document.getElementById(elementId);
  html2pdf().set({ margin: 0.5, filename: `${filename}.pdf`, html2canvas: { scale: 2 } }).from(element).save();
};
