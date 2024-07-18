import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";
import { fetchTotalStoreFeedInfo } from "../../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    feeds: state.feeds
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTotalStoreFeedInfo: () => { dispatch(fetchTotalStoreFeedInfo()) }
})

const SupplierCard = (props) => {

  const [supplierData, setSupplierData] = useState({
    series: [70, 30],
    options: {
      chart: {
        height: 350,
        type: 'donut',
        // events: {
        //   animationEnd: function(ctx) {
        //      ctx.toggleDataPointSelection(2)
        //   }
        // }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '80%',
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                label: 'Found Now',
                color: '#043912',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    // return 100 - b
                    return props.feeds.totalStoreFeedInfo?.totalCurrentFeedWeight || "...";
                  }, 0)
                }
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false
      },
      labels: ['', ''],
      colors: ['#1CAD99', '#EEC35EBD']
    }
  });

  useEffect(() => {
    // props.fetchTotalStoreFeedInfo();

    if (!props.feeds.isLoading && !props.feeds.errMess) {
      const totalCurrentFeedWeightPercent = Math.floor((props.feeds.totalStoreFeedInfo?.totalCurrentFeedWeight / props.feeds.totalStoreFeedInfo?.totalFeedCapacity) * 100);
      setSupplierData({ ...supplierData, series: [totalCurrentFeedWeightPercent, (100 - totalCurrentFeedWeightPercent)] });
    }
  }, [props.feeds.totalStoreFeedInfo]);

  if (props.feeds.isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal h-3/5">
        <p className="text-green-700 text-xl p-7">Loading...</p>
      </div>
    );
  }
  else if (props.feeds.errMess) {
    return (
      <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal h-3/5">
        <p className="text-red-700 text-xl p-7">{props.feeds.errMess}</p>
      </div>
    );
  }
  else {
    return (
      <div className="bg-white rounded-lg shadow-md m-3 mt-7 p-3 w-fit flex flex-col text-center gap-3 text-[#043912] font-normal h-3/5">
        <h3>Supplier</h3>

        <div>
          <p>Storage Capacity</p>
          <p>{props.feeds.totalStoreFeedInfo?.totalFeedCapacity}</p>
        </div>

        {props.feeds.totalStoreFeedInfo && <ReactApexChart options={supplierData.options} series={supplierData.series} type="donut" />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupplierCard);