import { useState } from 'react';
import CVForm from '../components/CVForm';
import CVTemplate1 from '../components/CVTemplate1';
import CVTemplateBiodata from '../components/CVTemplateBiodata';
import TemplateSelector from '../components/TemplateSelector';
import { downloadAsPDF } from '../utils/pdf';

export default function CreatePage() {
  const [cvData, setCvData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("modern");

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Build Your CV / Bio-data</h2>
      <TemplateSelector selected={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
      <CVForm onGenerate={setCvData} selectedTemplate={selectedTemplate} />
      {cvData && (
        <>
          <div id="cv-preview" className="my-8 border p-4 bg-white">
            {selectedTemplate === "modern" && <CVTemplate1 data={cvData} />}
            {selectedTemplate === "biodata" && <CVTemplateBiodata data={cvData} />}
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => downloadAsPDF('cv-preview')}>
            Download PDF
          </button>
        </>
      )}
    </div>
  );
}
