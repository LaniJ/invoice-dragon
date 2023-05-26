import { useState } from 'react';
import InvoiceTemplate from "../components/InvoiceTemplate/InvoiceTemplate";
import Dropdown from '../components/Dropdown/Dropdown';
import styles from '@/styles/Home.module.scss';
import Form from "../components/Form/Form";
import Header from '@/components/Header/Header';
import logoP from '../assets/images/placeholder-image.png';
import Previewed from "../components/Preview/Preview";



const Templates = () => {
  // const [service, setService] = useState('invoice');

  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({formName: 'Invoice'});
  const [rows, setRows] = useState(Array(1).fill({id: 0, quantity: 1, amount: '0.00'}));
  const [logo, setLogo] = useState(logoP);
  const [logoUpdated, setLogoUpdated] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState('$');
  const [currencyCode, setCurrencyCode] = useState('USD');
  const [template, setTemplate] = useState(null);
  const [templateSelected, setTemplateSelected] = useState(false);

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
    if (e.target.value) setTemplateSelected(true);

    setTimeout(() => {
      window.scroll({
        top: 500,
        behavior: "smooth",
      });
    }, 400)

  }

  const handleLogoUpdate = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLogo(reader.result);
        setLogoUpdated(true);
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleFormChange = (name, value) => {
    setFormData({
      ...formData, [name]: value
    })
  };
  const handleToggle = () => {
    setShowPreview(!showPreview);
  }

  // Table Functions
  const handleTableUpdate = (e, id, amount) => {
    setRows((prevRows) => {
      const updateTable = [...prevRows];
      const currentRowIndex = updateTable.findIndex((row) => row.id === id);
      updateTable[currentRowIndex] = { ...updateTable[currentRowIndex], [e.target.name]: e.target.value }
      if ( amount !== undefined) {
        updateTable[currentRowIndex].amount = amount;
      }
      if (e.target.name === 'rate' || e.target.name === 'quantity' ) {
        updateTable[currentRowIndex][e.target.name] = Number(e.target.value);
      }
      return updateTable;
    });
  }
  const handleRowAdd = () => {
    const lastId = rows.length ? rows[rows.length - 1].id : 0;
    setRows((prevRows) => [...prevRows, {id: lastId + 1, quantity: 1, amount: '0.00'}]);
  }

  const handleRowRemove = (id) => {
    setRows((prevRows) => prevRows.filter(item => item.id !== id));
  }
  const handleCurrencyModify = (curr) => {
    setCurrencyCode(curr.code)
    setCurrencySymbol(curr.symbol);
  }

  return ( 
    <div className={styles.template__wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <InvoiceTemplate
          changeTemplate={handleTemplateChange}
        />
        {templateSelected && <div className={styles.template__section}>
          <div className={styles.main__section}>
            {!showPreview && <Form
              prefill={formData}
              rows={rows}
              logo={logo}
              updateLogo={handleLogoUpdate}
              logoUpdated={logoUpdated}
              currencySymbol={currencySymbol}
              onFormMod={handleFormChange}
              onPreviewToggle={handleToggle}
              onRowAdd={handleRowAdd}
              onRowRemove={handleRowRemove}
              onTableUpdate={handleTableUpdate}
              />}
            
            {showPreview && <Previewed 
              {...formData}
              rows={rows}
              logo={logo}
              template={template}
              currencySymbol={currencySymbol}
              onPreviewToggle={handleToggle}
            />}
          </div>
          <div className={styles.action__section}>
            <div className={styles.actions}>
              ACTIONS
              <br />
              <br />
              <button className={styles.action__btn} onClick={handleToggle}>{showPreview ? 'Back to Edit' : 'Preview Invoice'}</button>
              <br />
              <br />
              <Dropdown
                currencyCode={currencyCode}
                currencySymbol={currencySymbol}
                onCurrencyModify={handleCurrencyModify}
              />
            </div>
          </div>
        </div>}
      </div>
    </div>
   );
}
 
export default Templates;