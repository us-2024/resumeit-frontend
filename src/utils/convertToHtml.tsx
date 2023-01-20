import { RightPane } from '@/components/Builder/RightPane/RightPane'
import fs from 'fs'
import ReactDOMServer from 'react-dom/server'

export const convertToHtml = () => {
    const html = ReactDOMServer.renderToString(<RightPane templateId="1" />)
    console.log(html)
    fs.writeFileSync('my.html', html)
}
