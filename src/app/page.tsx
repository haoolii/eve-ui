import ButtonUsage from "@/components/ButtonUsage";
import { Table } from "@mui/joy";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto py-12">
      <div>
      {/* 日期	定投金额(USDT)	买入价格(USDT)	买入数量(--)	总计投入(USDT)	总计数量(--)	定投均价(USDT) */}
        <Table borderAxis="both">
          <thead>
            <tr>
              <th>日期</th>
              <th>定投金额(USDT)</th>
              <th>买入价格(USDT) Dates</th>
              <th>买入数量(--)</th>
              <th>总计投入(USDT)</th>
              <th>总计数量(--)</th>
              <th>定投均价(USDT)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Margaret Nguyen</th>
              <td>427311</td>
              <td>
                <time dateTime="2010-06-03">June 3, 2010</time>
              </td>
              <td>n/a</td>
              <td>0.00</td>
            </tr>
            <tr>
              <th scope="row">Edvard Galinski</th>
              <td>533175</td>
              <td>
                <time dateTime="2011-01-13">January 13, 2011</time>
              </td>
              <td>
                <time dateTime="2017-04-08">April 8, 2017</time>
              </td>
              <td>37.00</td>
            </tr>
            <tr>
              <th scope="row">Hoshi Nakamura</th>
              <td>601942</td>
              <td>
                <time dateTime="2012-07-23">July 23, 2012</time>
              </td>
              <td>n/a</td>
              <td>15.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </main>
  );
}
