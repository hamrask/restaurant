import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalPrintService {

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  printKot(body) {
    const url = "http://localhost:3000/printBill";
    return this.http.post(url, body);
  }

  getInvoiceTemplate() {
    const url = "/assets/html/invoice.html";
    return this.http.get(url, {responseType: "text"});
  }

  printReciept(billDetails) {
    const elementIdsToHide = [];
    console.log(billDetails, "bill details");
    this.getInvoiceTemplate().subscribe((htmlString) => {
        htmlString = htmlString.replace("[ORDER_NO]", billDetails?.orderNumber);
        htmlString = htmlString.replace(
            "[CUSTOMER_NAME]",
            billDetails?.orderMaster?.customer?.customerName
        );
        htmlString = htmlString.replace('[customerAddress]', billDetails?.orderMaster?.customer?.address);
        htmlString = htmlString.replace(
            "[CUSTOMER_MOBILE]",
            billDetails?.orderMaster?.customer?.mobile
        );
        htmlString = htmlString.replace(
            "[DATE]",
            this.datePipe.transform(billDetails?.orderMaster?.orderDate, "dd-MM-yyyy", "+0400")
        );
        htmlString = htmlString.replace(
            "[SHOPNAME]",
            billDetails?.profileDetails?.heading
        );
        htmlString = htmlString.replace(
            "[TITLE]",
            billDetails?.profileDetails?.heading2
        );
        htmlString = htmlString.replace(
          "[TITLE]",
          billDetails?.profileDetails?.heading2
      );
        htmlString = htmlString.replace(
            "[SUBTITLE1]",
            billDetails?.profileDetails?.subHeading1
        );
        htmlString = htmlString.replace(
            "[SUBTITLE2]",
             billDetails?.profileDetails?.subHeading2
        );
        if (true) {
            htmlString = htmlString.replace(
                "[IMAGE_URL]",
                "/assets/image/logo.jpg"
            );
        } else {
            elementIdsToHide.push("shoplogo");
        }
        // htmlString = htmlString.replace('[TIME]', this.datePipe.transform(billDetails?.orderMaster?.orderDate, "hh:mm:ss a"));
        const itemDetails = billDetails?.orderList;
        let itemsString;
        let subTotal = 0;
        let totalQty = 0;
        itemDetails.forEach((el) => {
            const item = `<tr>
     <td style="text-align: left;">${el.itemName}</td>
     <td>${el.quantity}</td>
     <td>${el.rate}</td>
     <td>${el.amount}</td>
     </tr>`;
            itemsString += item;
            subTotal += Number(el.amount);
            if (Number(el.quantity)) {
                totalQty += Number(el.quantity);
            }
        });
        htmlString = htmlString.replace(
            "[TOTAL_ITEMS]",
            totalQty.toString()
        );
        htmlString = htmlString.replace(
          "[PAYMENT_TYPE]",
          billDetails?.orderMaster?.paymentType
      );
        htmlString = htmlString.replace("[itemDetails]", itemsString);
        if (false) {
            htmlString = htmlString.replace(
                "[DISCOUNT]",
                Number(billDetails?.orderMaster?.discount).toFixed(2)
            );
        } else {
            elementIdsToHide.push("discountLabel");
        }
        htmlString = htmlString.replace(
            "[NETTOTAL]",
            Number(subTotal).toFixed(2)
        );
        if (false) {
            htmlString = htmlString.replace(
                "[NOTES]",
                billDetails?.orderMaster?.additionalInstructions
            );
        } else {
            elementIdsToHide.push("notelabel");
        }
        htmlString = htmlString.replace(
            "[DELIVREY_TYPE]",
            billDetails?.orderMaster?.orderType
        );
        if (false) {
            htmlString = htmlString.replace(
                "[DELIVREY_TIME]",
                billDetails?.orderMaster?.deliveryTime
            );
        } else {
            elementIdsToHide.push("deliveryTimeLabel");
        }
        htmlString = htmlString.replace("undefined", "");
        var printWindow = window.open("", "", "height=600,width=900");
        printWindow.document.write(
            `<html><head><title>${billDetails?.profileDetails?.heading}</title>`
        );
        printWindow.document.write("</head><body>");
        printWindow.document.write(htmlString);
        elementIdsToHide.forEach((data) => {
            printWindow.document.getElementById(data).style.display =
                "none";
        });
        if (billDetails?.orderMaster?.status) {
            const div = printWindow.document.createElement("h4");
            const node = printWindow.document.createElement("h4");
            const text = printWindow.document.createTextNode(
              billDetails?.orderMaster?.status
            );
            node.style.position = "absolute";
            node.style.top = "240px";
            node.style.zIndex = "-1";
            node.style.transform = "rotate(320deg)";
            node.style.color = "#c6afaf";
            node.style.fontSize = "25px";
            div.style.display = "flex";
            div.style.justifyContent = "center";
            node.appendChild(text);
            div.appendChild(node);
            printWindow.document
                .getElementById("invoice-box")
                .appendChild(div);
        }
        printWindow.document.write("</body></html>");
        printWindow.document.close();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 750);
    });
   }
}
