function getBrowser() {
    if( navigator.userAgent.indexOf("Chrome") != -1 ) {
      return "Chrome";
    } else if( navigator.userAgent.indexOf("Opera") != -1 ) {
      return "Opera";
    } else if( navigator.userAgent.indexOf("MSIE") != -1 ) {
      return "IE";
    } else if( navigator.userAgent.indexOf("Firefox") != -1 ) {
      return "Firefox";
    } else {
      return "unknown";
    }
  }


console.log(getBrowser());
 
$("#html2pdf").on('click', function(){


    html2canvas($('#benefitSheet'), {
        onclone: function (clonedDoc) {
            clonedDoc.getElementById('benefitSheet').style.display = 'block';
        }
    }).then((canvas) => {
            let imgData = canvas.toDataURL('image/png');              
            let doc = new jsPDF('l', 'mm', [215.9, 279.4]);
            doc.addImage(imgData, 'PNG', 0, 0);

            console.log(doc.output('bloburl'));
            window.open(doc.output('bloburl'), '_blank');
    })
    // html2canvas($('#benefitSheet'), {
    //     onrendered: function(canvas) {         
    //         let imgData = canvas.toDataURL('image/png');              
    //         let doc = new jsPDF({
    //             orientation: 'landscape'
    //         });
    //         doc.addImage(imgData, 'PNG', 10, 10);

    //         window.open(doc.output('bloburl'), '_blank');
    //     }
    // });
    
});