import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const convertToPDF = () => {
    const input = document.getElementById('templateOne')
    html2canvas(input!).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF()
        pdf.addImage(imgData, 'JPEG', 0, 0, 200, 200)
        pdf.save('download.pdf')
    })
}
