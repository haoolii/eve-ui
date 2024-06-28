import ButtonUsage from "@/components/ButtonUsage";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Table,
} from "@mui/joy";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto py-12 px-10">
      <div className="mb-12">
        <Grid container columnSpacing={4} rowSpacing={2}>
          <Grid xs={6}>
            <FormControl>
              <FormLabel>定投币种</FormLabel>
              <Input placeholder="定投币种" />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl>
              <FormLabel>定投金额</FormLabel>
              <Input placeholder="定投金额" />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl>
              <FormLabel>开始时间</FormLabel>
              <Input placeholder="开始时间" />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Grid>
          <Grid xs={6}>
            <FormControl>
              <FormLabel>结束时间</FormLabel>
              <Input placeholder="结束时间" />
              {/* <FormHelperText>This is a helper text.</FormHelperText> */}
            </FormControl>
          </Grid>
        </Grid>
      </div>
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
              <th scope="row">2021-01-01</th>
              <td>1000</td>
              <td>28921.07</td>
              <td>0.034576</td>
              <td>1000</td>
              <td>0.034576</td>
              <td>28921.07</td>
            </tr>
            <tr>
              <th scope="row">2021-01-01</th>
              <td>1000</td>
              <td>28921.07</td>
              <td>0.034576</td>
              <td>1000</td>
              <td>0.034576</td>
              <td>28921.07</td>
            </tr>
            <tr>
              <th scope="row">2021-01-01</th>
              <td>1000</td>
              <td>28921.07</td>
              <td>0.034576</td>
              <td>1000</td>
              <td>0.034576</td>
              <td>28921.07</td>
            </tr>
            <tr>
              <th scope="row">2021-01-01</th>
              <td>1000</td>
              <td>28921.07</td>
              <td>0.034576</td>
              <td>1000</td>
              <td>0.034576</td>
              <td>28921.07</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </main>
  );
}
