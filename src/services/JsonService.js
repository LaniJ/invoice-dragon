export class JsonService {
    downloadJson(formData, tableRows) {
        const jsonDataStr = this.convertToJson(formData, tableRows);

        const blob = new Blob([jsonDataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.json";
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
    }

    convertToJson(formData, tableRows) {
        const jsonData = {
            email: formData.email,
            businessName: formData.businessName,
            formName: formData.formName,
            address: formData.address,
            city: formData.city,
            zipcode: formData.zipcode,
            phone: formData.phone,
            owner: formData.owner,
            clientName: formData.clientName,
            clientEmail: formData.clientEmail,
            clientAddress: formData.clientAddress,
            clientCity: formData.clientCity,
            clientZipcode: formData.clientZipcode,
            clientPhone: formData.clientPhone,
            date: formData.date,
            invoiceNo: formData.InvoiceNo,
            website: formData.website,
            notes: formData.notes,
            tableRows: tableRows,
        };

        const jsonDataStr = JSON.stringify(jsonData, null, 2);

        return jsonDataStr;
    }

    convertToFormData(jsonData) {}
}
