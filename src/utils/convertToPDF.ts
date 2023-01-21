import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const convertToPDF = () => {
    const input = document.getElementById('templateOne')

    html2canvas(input!).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        var image = new Image()

        image.onload = function () {
            let pageWidth = image.naturalWidth
            let pageHeight = image.naturalHeight

            const pdf = new jsPDF({
                orientation: pageHeight > pageWidth ? 'portrait' : 'landscape',
                unit: 'px',
                format: [pageHeight, pageWidth],
            })

            pdf.addImage(
                imgData,
                'JPEG',
                0,
                0,
                pdf.internal.pageSize.getWidth(),
                pdf.internal.pageSize.getHeight()
            )

            pdf.save('download.pdf')
        }
        image.src = imgData
    })
}
