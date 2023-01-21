import html2canvas from 'html2canvas'
import { convertURIToBlob } from './convertURI2Blob'

export const html2image = async () => {
    const input = document.getElementById('templateOne')
    const canvas = await html2canvas(input!)
    const imgData = canvas.toDataURL('image/png')
    return convertURIToBlob(imgData)
}
