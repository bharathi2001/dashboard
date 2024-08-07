import "./Dashboard.css";
import customers from "../assets/people.json";
import customersFeedback from "../assets/customersFeedback.json";
import ReactApexChart from 'react-apexcharts';
import Barchart from './Barchart';

const StarRating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => {
                let starColor;
                if (index < Math.floor(rating)) {
                    starColor = '#FFA500'; // Full star
                } else {
                    starColor = '#E4E5E9'; // Empty star
                }
                return (
                    <span key={index} style={{ color: starColor, fontSize: '2rem' }}>
                        ★
                    </span>
                );
            })}
        </div>
    );
};

const Dashboard = () => {
    const state = {
        series: [70],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: '50%',
                    }
                },
            },
            labels: ['Goal Completed'],
        },
    }
    return (
        <div className="dashboard">
            <h2 className="dashboard-head">
                Dashboard
            </h2>
            <div className="row mt-5 dashboard-body">
                <div className="col col-lg-8 col-md-10 col-xs-10 d-flex justify-content-between card-div common-div">
                    <div className="card dashboard-cards bg-dark mx-2 p-2">
                        <div className="card-body">
                            <img className='cards-images' src={require('../assets/images/orders.jpg')} height='50px' width='50px' />
                            <small>Total Orders</small>
                            <div className="d-flex justify-content-between mt-2">
                                <h2 className="card-percent">75</h2>
                                <div className="card-percent text-success mt-2"><b>&#9650;&nbsp;3%</b></div>
                            </div>
                        </div>
                    </div>
                    <div className="card dashboard-cards bg-dark mx-2 p-2">
                        <div className="card-body">
                            <img className='cards-images' src={require('../assets/images/delivered.jpg')} height='50px' width='50px' />
                            <small>Total Delivered</small>
                            <div className="d-flex justify-content-between mt-2">
                                <h2 className="card-percent">70</h2>
                                <div className="card-percent text-danger mt-2"><b>&#9660;&nbsp;3%</b></div>
                            </div>
                        </div>
                    </div>
                    <div className="card dashboard-cards bg-dark mx-2 p-2">
                        <div className="card-body">
                            <img className='cards-images' src={require('../assets/images/cancelled.jpg')} height='50px' width='50px' />
                            <small>Total Cancelled</small>
                            <div className="d-flex justify-content-between mt-2">
                                <h2 className="card-percent">05</h2>
                                <div className="card-percent text-success mt-2"><b>&#9650;&nbsp;3%</b></div>
                            </div>
                        </div>
                    </div>
                    <div className="card dashboard-cards bg-dark mx-2 p-2">
                        <div className="card-body">
                            <img className='cards-images' src={require('../assets/images/revenue.jpg')} height='50px' width='50px' />
                            <small>Total Revenue</small>
                            <div className="d-flex justify-content-between mt-2">
                                <h2 className="card-percent">$12k</h2>
                                <div className="card-percent text-danger mt-2"><b>&#9660;&nbsp;3%</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-10 col-xs-10 mx-3 bg-dark d-flex profit-div common-div">
                    <div className="d-flex flex-column ms-2 mt-4">
                        <small>Net profit</small>
                        <h3 className="mt-3">$&nbsp;6759.25</h3>
                        <div className="card-percent text-success mt-2"><b>&#9650;&nbsp;3%</b></div>
                    </div>
                    <div className="circle-div">
                        {/* <div className="circle mt-4 ms-5"></div> */}
                        <div className="circle-chart">
                            <div id="chart">
                                <ReactApexChart options={state.options} series={state.series} type="radialBar" height={230} />
                            </div>
                            <div id="html-dist"></div>
                        </div>
                        <small className="ms-2 circle-caption">The values has been rounded off</small>
                    </div>
                </div>
            </div>
            <div className="row mt-5 card-div activity-div">
                <div className="col col-lg-8 col-sm-10 mx-3 p-3 bg-dark customer-table common-div">
                    <div className="m-2">
                        <h3 className="activity-head">Activity</h3>
                        <select className="select-activity">
                            <option>Weekly</option>
                            <option>monthly</option>
                        </select>
                        <Barchart />
                    </div>
                </div>
                <div className="col col-lg-3 col-sm-10 ms-4 px-5 py-3 bg-dark activity common-div">
                    <div>
                        <img src={require('../assets/images/goals.jpg')} className="activity-cards-img me-3" />
                        <span>Goals</span>
                        <div className="gt-lt mt-3"><span>&gt;</span></div>
                    </div>
                    <div className="mt-3">
                        <img src={require('../assets/images/dishes.jpg')} className="activity-cards-img me-3" />
                        <span>Popular Dishes</span>
                        <div className="gt-lt mt-3"><span>&gt;</span></div>
                    </div>
                    <div className="mt-3">
                        <img src={require('../assets/images/menus.jpg')} className="activity-cards-img me-3" />
                        <span>Menus</span>
                        <div className="gt-lt mt-3"><span>&gt;</span></div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 table-reviews">
                <div className="col col-12 col-lg-8 col-md-10 col-sm-10 mx-4 bg-dark p-4 customer-table common-div">
                    <h4>Recent Orders</h4>
                    <table class="table table-hover table-dark mt-1">
                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Order No.</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) =>
                                <tr>
                                    <td><img src={customer.imgUrl} className="table-imges" /> {customer.customerName}</td>
                                    <td>{customer.orderNumber}</td>
                                    <td>${customer.amount}</td>
                                    <td><div className={customer.status.toLocaleLowerCase()}>{customer.status} </div></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col col-lg-3 col-md-10 col-sm-10 ms-4 px-5 bg-dark profit-div common-div">
                    <h4 className="mt-3">Customer's Feedback</h4>
                    {customersFeedback.map((feedback) =>
                        <div>
                            <h6><img src={feedback.imgUrl} className="table-imges" />&nbsp;{feedback.customerName}</h6>
                            <StarRating rating={feedback.rating} />
                            <p className="feedback">{feedback.review}</p>
                            <hr />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Dashboard;