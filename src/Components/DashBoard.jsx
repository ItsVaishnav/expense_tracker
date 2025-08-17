export default function DashBoard() {
  return (
    <div className="container mt-4">
      {/* Welcome */}
      <h2 className="mb-4">Welcome back, User 👋</h2>

      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <p className="card-text fs-4">₹12,450</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">This Month</h5>
              <p className="card-text fs-4">₹3,200</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">Remaining Budget</h5>
              <p className="card-text fs-4">₹6,800</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Expenses Table */}
      <div className="card shadow">
        <div className="card-header">
          <h5 className="mb-0">Recent Expenses</h5>
        </div>
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-08-15</td>
                <td>Food</td>
                <td>Lunch at Cafe</td>
                <td>₹250</td>
              </tr>
              <tr>
                <td>2025-08-14</td>
                <td>Travel</td>
                <td>Cab Ride</td>
                <td>₹600</td>
              </tr>
              <tr>
                <td>2025-08-13</td>
                <td>Shopping</td>
                <td>Groceries</td>
                <td>₹1,200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
