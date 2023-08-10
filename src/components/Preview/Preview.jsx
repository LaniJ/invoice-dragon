import styles from "./preview.module.scss";
import { Document, PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from "react";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template2";
import Template3 from "./Templates/Template3";
import Template4 from "./Templates/Template4";

const PDF = ({ template, rows, currencySymbol, formName, logo, logoUpdated, email, businessName, address, city, zipcode, phone, owner, clientName, clientEmail, clientAddress, clientCity, clientZipcode, clientPhone, date, InvoiceNo, website, notes, totalAmount }) => {

  return (
    <Document
      author={owner}
      keywords="invoice, receipt"
      subject={`${businessName} Invoice`}
      title={`${clientName} ${formName} `}
    >
      {template === 'template1' &&
        <Template1
          logo={logo}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          phone={phone}
          email={email}
          city={city}
          zipcode={zipcode}
          website={website}
        />
      }
      {template === 'template2' &&
        <Template2
          logo={logo}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          phone={phone}
          email={email}
          city={city}
          zipcode={zipcode}
          website={website}
        />
      }
      {template === 'template3' &&
        <Template3
          logo={logo}
          logoUpdated={logoUpdated}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          city={city}
          zipcode={zipcode}
          email={email}
          phone={phone}
          website={website}
        />
      }
      {template === 'template4' &&
        <Template4
          logo={logo}
          formName={formName}
          businessName={businessName}
          InvoiceNo={InvoiceNo}
          date={date}
          clientName={clientName}
          clientEmail={clientEmail}
          clientAddress={clientAddress}
          clientCity={clientCity}
          clientZipcode={clientZipcode}
          clientPhone={clientPhone}
          rows={rows}
          currencySymbol={currencySymbol}
          totalAmount={totalAmount}
          notes={notes}
          owner={owner}
          address={address}
          city={city}
          zipcode={zipcode}
          phone={phone}
          email={email}
          website={website}
        />
      }
    </Document>
  );
}

const PDFView = ({ template, rows, currencySymbol, formName, logo, logoUpdated, email, businessName, address, city, zipcode, phone, owner, clientName, clientAddress, clientEmail, clientCity, clientZipcode, clientPhone, date, InvoiceNo, website, notes }) => {

  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const [totalAmount, setTotalAmount] = useState(null);

  const handleTotalCalculation = () => {
    let sum = 0;
    rows.forEach(row => {
      sum += parseFloat(row.amount);
    })
    setTotalAmount(numberWithCommas(sum.toFixed(2)))
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    handleTotalCalculation();
  }, [])

  const pdf = (
    <PDF
      template={template}
      rows={rows}
      email={email}
      businessName={businessName}
      formName={formName}
      logo={logo}
      logoUpdated={logoUpdated}
      address={address}
      city={city}
      zipcode={zipcode}
      phone={phone}
      owner={owner}
      clientName={clientName}
      clientEmail={clientEmail}
      clientAddress={clientAddress}
      clientCity={clientCity}
      clientZipcode={clientZipcode}
      clientPhone={clientPhone}
      date={date}
      InvoiceNo={InvoiceNo}
      website={website}
      notes={notes}
      currencySymbol={currencySymbol}
      totalAmount={totalAmount}
    />
  );

  return (
    <>
      <PDFViewer className={styles.full}>
        {pdf}
      </PDFViewer>
    </>
  );
}

export default PDFView;
export { PDF };