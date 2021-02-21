import React from 'react';

import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { dataSource } from '../../utils/chartData';
import { OffersSvg } from '../../assets/svg';

import './styles.scss';

ReactFusioncharts.fcRoot(FusionCharts, Charts, FusionTheme);

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart__heading">
        <span>
          <OffersSvg />
        </span>

        <h2>Number of deals per offer</h2>
      </div>

      <ReactFusioncharts
        type="column2d"
        width="100%"
        height="400"
        dataFormat="JSON"
        dataSource={dataSource}
        className="chart__area"
      />
    </div>
  );
};

export default Chart;
