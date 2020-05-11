import React, { Component } from "react";
import Chart from "react-apexcharts";
import * as MaterialUI from "@material-ui/core";
class StateWise extends Component {
  constructor(props) {
    super(props);
    let ds = this.props.stateWiseData;
    ds.sort((a,b)=>{
      return(b["Total Confirmed cases"] - a["Total Confirmed cases"])
    });
    this.state = {
      // chart options
      data: ds,
      series: [
        {
          name: "Cases",
          data: []
        },
        {
          name: "Recovered",
          data: []
        },
        {
          name: "Death",
          data: []
        }
      ],
      options: {
        colors: ["#032570", "#087435", "#da1414"],
        dataLabels: {
          enabled: true,
          style:{
            width:100
        }
        },
        chart: {
          type: "bar",
          height: 800,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 10,
          colors: ["#fff"]
        },
        title: {
          text: "State wise data"
        },
        xaxis: {
          categories: []
          // labels: {
          //     formatter: function (val) {
          //         return val + "K"
          //     }
          // }
        },
        yaxis: {
          title: {
            text: undefined
          }
        }
        // tooltip: {
        //     y: {
        //         formatter: function (val) {
        //             return val + "K"
        //         }
        //     }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 100
      }
    };
  }
  componentDidMount() {
    
    this.setData();
  }
  render() {
    return (
      <MaterialUI.Paper
        elevation={10}
        style={
          window.innerWidth > 800
            ? {
              width: window.innerWidth * 0.8
            }
            : {
              width: window.innerWidth
            }
        }
      >
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={window.innerWidth > 800 ? "1000" : "1000"}
         
        />
      </MaterialUI.Paper>
    );
  }

  setData = () => {
    const states = this.state.data.map(c => {
      return c["Name of State / UT"];
    });

    const totalDeaths = this.state.data.map(c => {
      const [f, b] = c["Death"].split(",");

      if (b === undefined) {
        return parseInt(f);
      } else {
        return parseInt(f + b);
      }
    });
    const discharged = this.state.data.map(c => {
      const [f, b] = c["Cured/Discharged/Migrated"].split(",");

      if (b === undefined) {
        return parseInt(f);
      } else {
        return parseInt(f + b);
      }
    });

    const totalCases = this.state.data.map(c => {


      let [f, b] = c["Total Confirmed cases"].split(",");
      let fr = 0;
      if (b === undefined) {
        fr = parseInt(f);
      } else {
        fr = parseInt(f + b);
      }
      return fr;
    });

    this.setState({
      options: {
        dataLabels: {
          enabled: true
        },
        chart: {
          type: "bar",
          height: 350,
          stacked: true
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        title: {
          text: "State wise data"
        },
       
        xaxis: {
          
          categories: states,
           
          labels: {
            
            show: true,
            align: 'right',
          
            style: {
                colors: [],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            }
          }
        },
      },
      fill: {
        opacity: 1
      },
     
      series: [
        {
          name: "Cases",
          data: totalCases
        },
        {
          name: "Recovered",
          data: discharged
        },
        {
          name: "Death",
          data: totalDeaths
        }
      ]
    });
  };
}

export default StateWise;
