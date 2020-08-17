import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import { fade, makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  }
}));

const Chart = ({ data: dataProp, labels, className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'This year',
        backgroundColor: theme.palette.secondary.main,
        data: dataProp.thisYear,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5
      },
      {
        label: 'Last year',
        backgroundColor: fade(theme.palette.secondary.main, 0.25),
        data: dataProp.lastYear,
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cornerRadius: 20,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 20,
            fontColor: theme.palette.text.secondary,
            fontSize: 12,
            beginAtZero: true,
            min: 1,
            maxTicksLimit: 5,
            callback: value => {
              switch (value) {
                case 1:
                  return '😡Rude';
                case 2:
                  return '🤨Informal';
                case 3:
                  return '🙂Casual';
                case 4:
                  return '😇Polite';
                case 5:
                  return '👩🏽‍✈️Formal';
              }
            }
          }
        }
      ]
    },
    tooltips: {
      custom: function(tooltip) {
        if (!tooltip) return;
        // disable displaying the color box;
        tooltip.displayColors = false;
      },
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 10,
      yPadding: 10,
      xPadding: 10,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.background.dark,
      titleFontColor: theme.palette.text.primary,
      bodyFontSize: 18,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
      callbacks: {
        title: () => {},
        label: tooltipItem => {
          switch (tooltipItem.yLabel) {
            case 1:
              return '😡Rude';
            case 2:
              return '🤨Informal';
            case 3:
              return '🙂Casual';
            case 4:
              return '😇Polite';
            case 5:
              return '👩🏽‍✈️Formal';
          }
        }
      }
    }
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Bar data={data} options={options} />
    </div>
  );
};

Chart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default Chart;
