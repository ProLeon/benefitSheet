// inputData = {
//     contactInfo: {
//         repName: '',
//         custName: '',
//         date: '',
//     },
//     benefits: {
//         b1: '',
//         b2: '',
//         b3: '',
//         b4: '',
//         b5: '',
//         b6: '',
//     },
//     currentBillData: {
//         currentBill: '',
//         currentHomeService: '',
//         currentBillTotal: '',
//     },
//     optionOne: {
//         planTitle: '',
//         dataPrice: '',
//         lineAccessPrice: '',
//         protectionPrice: '',
//         dppPrice: '',
//         totalPrice: '',
//         priceToday: '',
//         priceDiff: '',
//         fees: ''
//     },
//     optionTwo: {
//         planTitle: '',
//         dataPrice: '',
//         lineAccessPrice: '',
//         protectionPrice: '',
//         dppPrice: '',
//         totalPrice: '',
//         priceToday: '',
//         priceDiff: '',
//         fees: ''
//     },
// }
let generatePdf = function(pdfData){

    pdfMake.createPdf(pdfData).open();
}


$('#submitData').click(function(){

    inputData = {
        contactInfo: {
            repName: $("#repName").val(),
            custName: $("#custName").val(),
            date: $("#date").val(),
        },
        benefits: {
            b1: $("#benefit1").val(),
            b2: $("#benefit2").val(),
            b3: $("#benefit3").val(),
            b4: $("#benefit4").val(),
            b5: $("#benefit5").val(),
            b6: $("#benefit6").val(),
        },
        currentBillData: {
            currentBill: $("#currentBill").val(),
            currentHomeService: $("#currentHomeService").val(),
            currentBillTotal: $("#currentBillTotal").val(),
        },
        optionOne: {
            planTitle: $("#option1PlanTitle").val(),
            dataPrice: $("#option1DataPrice").val(),
            lineAccessPrice: $("#option1LineAccessPrice").val(),
            protectionPrice: $("#option1ProtectionPrice").val(),
            dppPrice: $("#option1DppPrice").val(),
            totalPrice: $("#option1TotalPrice").val(),
            priceToday: $("#option1PriceToday").val(),
            priceDiff: $("#option1PriceDiff").val(),
            fees: $("#option1Fees").val()
        },
        optionTwo: {
            planTitle: $("#option2PlanTitle").val(),
            dataPrice: $("#option2DataPrice").val(),
            lineAccessPrice: $("#option2LineAccessPrice").val(),
            protectionPrice: $("#option2ProtectionPrice").val(),
            dppPrice: $("#option2DppPrice").val(),
            totalPrice: $("#option2TotalPrice").val(),
            priceToday: $("#option2PriceToday").val(),
            priceDiff: $("#option2PriceDiff").val(),
            fees: $("#option2Fees").val()
        },
    }
    pdfData = {
        // a string or { width: number, height: number }
          pageSize: 'letter',
      
        // by default we use portrait, you can change it to landscape if you wish
          pageOrientation: 'landscape',
      
        // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
          pageMargins: [ 40, 30, 20, 60 ],
        
          background: [
              //gray box holding the 6 benefits
              {
                  absolutePosition: {x: 40, y: 100},
                  canvas: [
                      {
                          type: 'rect',
                          x: 0,
                          y: 0,
                          w: 710,
                          h: 120,
                          r: 2,
                          color: 'lightgray',
                      },
                      
                      
                  ]
              },
              //box holding the options and their pricing
              {
                  absolutePosition: {x: 40, y: 300},
                  canvas: [
                      {
                          type: 'rect',
                          x: 0,
                          y: 0,
                          w: 710,
                          h: 150,
                          r: 2,
                      },
                      
                      
                  ]
              },
              {
                  absolutePosition: {x: 395, y: 299}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 0, y1: 1,
                      x2: 1, y2: 150,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              
              
              
          ],
          //1001
          content : [
              //text fields that will change based on input from the webpage---------------
              //CONSULTANT CUSTOMER NAME DATE INPUT FIELD
              {text: inputData.contactInfo.repName, absolutePosition: {x: 160, y: 88},fontSize: 11},
              {text: inputData.contactInfo.custName, absolutePosition: {x: 350, y: 88},fontSize: 11},
              {text: inputData.contactInfo.date, absolutePosition: {x: 695, y: 88},fontSize: 11},
              //BENEFIT INPUT FIELDS
              {text: inputData.benefits.b1, absolutePosition: {x: -320, y: 130}, style: 'inputText'},
              {text: inputData.benefits.b2, absolutePosition: {x: -320, y: 160}, style: 'inputText'},
              {text: inputData.benefits.b3, absolutePosition: {x: -320, y: 190}, style: 'inputText'},
              
              {text: inputData.benefits.b4, absolutePosition: {x: 320, y: 130}, style: 'inputText'},
              {text: inputData.benefits.b5, absolutePosition: {x: 320, y: 160}, style: 'inputText'},
              {text: inputData.benefits.b6, absolutePosition: {x: 320, y: 190}, style: 'inputText'},
              //CURRENT BILL CURRENT HOME AND TOTAL FIELDS
              {text: inputData.currentBillData.currentBill, absolutePosition: {x: -308, y: 245}, style: 'inputText'},
              {text: inputData.currentBillData.currentHomeService, absolutePosition: {x: 172, y: 245}, style: 'inputText'},
              {text: inputData.currentBillData.currentBillTotal, absolutePosition: {x: 521, y: 245}, style: 'inputText'},
              //OPTION 1 INPUT FIELTS
              {text: inputData.optionOne.planTitle, absolutePosition: {x: -275, y: 285}, style: 'inputText'},
              {text: inputData.optionOne.dataPrice, absolutePosition: {x: -275, y: 315}, style: 'inputText'},
              {text: inputData.optionOne.lineAccessPrice, absolutePosition: {x: -275, y: 345}, style: 'inputText'},
              {text: inputData.optionOne.protectionPrice, absolutePosition: {x: -275, y: 375}, style: 'inputText'},
              {text: inputData.optionOne.dppPrice, absolutePosition: {x: -275, y: 405}, style: 'inputText'},
              {text: inputData.optionOne.totalPrice, absolutePosition: {x: -275, y: 435}, style: 'inputText'},
              //OPTION 2 INPUT FIELDS
              {text: inputData.optionTwo.planTitle, absolutePosition: {x: 440, y: 285}, style: 'inputText'},
              {text: inputData.optionTwo.dataPrice, absolutePosition: {x: 440, y: 315}, style: 'inputText'},
              {text: inputData.optionTwo.lineAccessPrice, absolutePosition: {x: 440, y: 345}, style: 'inputText'},
              {text: inputData.optionTwo.protectionPrice, absolutePosition: {x: 440, y: 375}, style: 'inputText'},
              {text: inputData.optionTwo.dppPrice, absolutePosition: {x: 440, y: 405}, style: 'inputText'},
              {text: inputData.optionTwo.totalPrice, absolutePosition: {x: 440, y: 435}, style: 'inputText'},
              //TOTALS LINE OPTION 1
              {text: inputData.optionOne.priceToday, absolutePosition: {x: -160, y: 465}, style: 'inputText'},
              {text: inputData.optionOne.priceDiff, absolutePosition: {x: -340, y: 465}, style: 'inputText'},
              {text: inputData.optionOne.fees, absolutePosition: {x: -510, y: 465}, style: 'inputText'},
              //TOTALS LINE OPTION 2
              {text: inputData.optionTwo.priceToday, absolutePosition: {x: 205, y: 465}, style: 'inputText'},
              {text: inputData.optionTwo.priceDiff, absolutePosition: {x: 380, y: 465}, style: 'inputText'},
              {text: inputData.optionTwo.fees, absolutePosition: {x: 555, y: 465}, style: 'inputText'},
      
              
              //---------------------------------------------------------------------------
              //header
              {image: dataURLLogo, absolutePosition: {x: 190, y: 20},width: 400},
              //consultant / date / number / and customer name
              {text: 'Wireless Consultant :', absolutePosition: {x: 50, y: 88}, fontSize: 11},
              {text: 'Customer Name :', absolutePosition: {x: 260, y: 88}, fontSize: 11},
              {text: 'Date :', absolutePosition: {x: 660, y: 88}, fontSize: 11},
              {text: 'Store Number : 612-788-2905', absolutePosition: {x: 510, y: 88}, fontSize: 11},
              //descriptive text under totals line left column
              {text: 'One-time Sevice Fees', absolutePosition: {x: 270, y: 483}, fontSize: 10},
              {text: 'Difference Monthly', absolutePosition: {x: 170, y: 483}, fontSize: 10},
              {text: 'Price Today', absolutePosition: {x: 100, y: 483}, fontSize: 10},
              //descriptive text under totals line right column
              {text: 'One-time Sevice Fees', absolutePosition: {x: 630, y: 483}, fontSize: 10},
              {text: 'Difference Monthly', absolutePosition: {x: 530, y: 483}, fontSize: 10},
              {text: 'Price Today', absolutePosition: {x: 460, y: 483}, fontSize: 10},
              //current bill text
              {text: 'Current Verizon Bill:', absolutePosition: {x: 95, y: 248}},
              {text: 'Current Home Services:', absolutePosition: {x: 313, y: 248}},
              {text: 'Total:', absolutePosition: {x: 585, y: 248}},
              {text: '=', absolutePosition: {x: 540, y: 244}, style: 'bold', fontSize: 16},
              {text: '+', absolutePosition: {x: 285, y: 244}, style: 'bold', fontSize: 15},
               //wireless world app info
              {text: 'Download the Wireless World Mobile App today!', absolutePosition: {x: 360, y: 505}, style:'appInfo'},
              {text: 'Be the first to recieve promotions and special offers.',fontSize: 11, absolutePosition: {x: 360, y: 520}},
              {text: 'Your one click access to your Wireless Consultant.',fontSize: 11, absolutePosition: {x: 360, y: 535}},
              //app download Image
              {image: dataURLApp, absolutePosition: {x: 620, y: 505},width: 110},
              //option texts above left and right column
              {text: 'Option 1', absolutePosition: {x: 42, y: 284}, style: 'optionText'},
              {text: 'Option 2', absolutePosition: {x: 400, y: 284}, style: 'optionText'},
              //signature text
              {text: 'Signature:', absolutePosition: {x: 75, y: 537}},
              //benefit numbers left side
              {text: '1)', absolutePosition: {x: 75, y: 125}, style: 'benefitNumbers'},
              {text: '2)', absolutePosition: {x: 75, y: 155}, style: 'benefitNumbers'},
              {text: '3)', absolutePosition: {x: 75, y: 185}, style: 'benefitNumbers'},
              //benefit numbers right side
              {text: '4)', absolutePosition: {x: 395, y: 125}, style: 'benefitNumbers'},
              {text: '5)', absolutePosition: {x: 395, y: 155}, style: 'benefitNumbers'},
              {text: '6)', absolutePosition: {x: 395, y: 185}, style: 'benefitNumbers'},
              //left column pricing details
              {text: 'Data (after discount):', absolutePosition: {x: 45, y: 316}},
              {text: 'Line Access:', absolutePosition: {x: 45, y: 346}},
              {text: 'Protection:', absolutePosition: {x: 45, y: 376}},
              {text: 'DPP (after discount):', absolutePosition: {x: 45, y: 406}},
              {text: 'TOTAL PER MONTH:', style:'bold', absolutePosition: {x: 45, y: 435}},
              //right column pricing details
              {text: 'Data (after discount):', absolutePosition: {x: 400, y: 316}},
              {text: 'Line Access:', absolutePosition: {x: 400, y: 346}},
              {text: 'Protection:', absolutePosition: {x: 400, y: 376}},
              {text: 'DPP (after discount):', absolutePosition: {x: 400, y: 406}},
              {text: 'TOTAL PER MONTH:', style:'bold', absolutePosition: {x: 400, y: 435}},
              {
                  text: 'New Plan Benefits', 
                  style: 'planBenefits', 
                  absolutePosition: {x: 30, y: 100}
                  
              },
              //current bill text lines
              {
                  absolutePosition: {x: 200, y: 260}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 2, y1: 0,
                      x2: 65, y2: 0,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 440, y: 260}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 2, y1: 0,
                      x2: 65, y2: 0,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 615, y: 260}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 2, y1: 0,
                      x2: 65, y2: 0,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              //divider lines for final price section - left side
              {
                  absolutePosition: {x: 160, y: 455}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 10, y1: 0,
                      x2: 2, y2: 20,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 265, y: 455}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 10, y1: 0,
                      x2: 2, y2: 20,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              //divider lines for final price section - Right side
              {
                  absolutePosition: {x: 520, y: 455}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 10, y1: 0,
                      x2: 2, y2: 20,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 625, y: 455}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 10, y1: 0,
                      x2: 2, y2: 20,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 60, y: 45}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 300, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 60, y: 75}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 300, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 60, y: 105}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 300, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 380, y: 45}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 300, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 380, y: 75}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 300, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 380, y: 105}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 300, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              //left column lines
              {
                  absolutePosition: {x: 135, y: 260}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 135, y: 290}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 135, y: 320}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 135, y: 230}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              //right column benefits 
              {
                  absolutePosition: {x: 490, y: 260}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 490, y: 290}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 490, y: 320}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              {
                  absolutePosition: {x: 490, y: 230}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 195, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              //right column totals line
              {
                  absolutePosition: {x: 410, y: 380}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 290, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              //left column totals line
              {
                  absolutePosition: {x: 55, y: 380}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 290, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              //signature line 
              {
                  absolutePosition: {x: 90, y: 450}, 
                  canvas: [
                  
                  {
                      type: 'line',
                      x1: 40, y1: 100,
                      x2: 255, y2: 100,
                      lineWidth: 1,
                      color: 'black',
                      lineCap: 'square',
                  }
                  
              ]},
              
              
              
          ],
          styles: {
              bold: {
                  bold: true,
              },
              benefitNumbers: {
                  fontSize: 16,
              },
              header: {
                  alignment: 'center',
                  fontSize: 40
              },
              planBenefits: {
                  alignment: 'center',
                  fontSize: 18,
                  bold: true
              },
              optionText: {
                  color: 'red',
              },
              appInfo: {
                  color: 'red',
              },
              appImage: {
                  width: 12
              },
              inputText: {
                  fontSize: 12,
                  alignment: 'center'
              }
          }
      };
      
    generatePdf(pdfData);

});