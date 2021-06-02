import React from 'react'

const Bar = ({name, value}) => {
    return (
        <div className="row align-items-center">
            <div className="col-2">
              <span className="badge bg-info text-dark">{name}</span>
            </div>
            <div className="col-8">
              <div
                style={{ height: "10px", backgroundColor: "rgba(255,0,0,0.1)" }}
              >
                <div
                  className="mh-100"
                  style={{
                    width: `${value}px`,
                    height: "10px",
                    backgroundColor: "rgba(255,0,0,1)",
                  }}
                ></div>
              </div>
            </div>
            <div className="col-2">
              <span className="badge rounded-pill bg-danger">{value}</span>
            </div>
          </div>
    )
}

export default Bar
