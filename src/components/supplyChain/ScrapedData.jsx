import * as cheerio from 'cheerio';
import axios from 'axios';
import { useEffect } from 'react';

const ScrapedData = () => {

    async function main() {
        try {
            // Get the page content
            const { data } = await axios.get("https://www.mistcommodities.com/Index.aspx?LId=1");
            const $ = cheerio.load(data);

            // Find the table container
            const tableDiv = $('#div_CommoditiesPrices');

            // Find the table within the container
            const table = tableDiv.find('table.table2');

            // Extract table rows
            const rows = table.find('tr');

            // Extract header
            const header = [];
            rows.first().find('th').each((i, th) => {
                header.push($(th).text().trim());
            });

            // Extract data
            let data2 = [];
            rows.slice(1).each((i, row) => {
                const rowData = [];
                $(row).find('td').each((j, col) => {
                    rowData.push($(col).text().trim());
                });
                data2.push(rowData);
            });

            // Print the extracted data
            console.log(header);
            data2.forEach(row => {
                console.log(row);
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
      main();
    }, [])
    
    return (
        <div>ScrapedData</div>
    )
}

export default ScrapedData;