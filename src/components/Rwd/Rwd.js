import React from "react";

export default function Rwd() {
  return (
    <div>
      <p className="text-center">
        <b>Responsive color Palette</b>
      </p>
      <div className="container">
        <div className="row">
          <div className=" col-12 col-sm-8 col-md-6 col-lg-2 col-xl-3 mb-3">
            <div className="bg-primary p-3">
              <p className="color">Primary </p>
            </div>
          </div>
          <div className=" col-12 col-sm-4 col-md-6 col-lg-2 col-xl-5 mb-3">
            <div className="bg-secondary p-3 ">
              <p className="color">Secondary</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-2 col-lg-3 col-xl-2 mb-3">
            <div className="bg-success  p-3">
              <p className="color">Success</p>
            </div>
          </div>
          <div className="col-12 col-sm-8 col-md-10 col-lg-3 col-xl-2 mb-3">
            <div className="bg-info p-3">
              <p className="color">Info</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-10 col-lg-7 col-xl-5 mb-3">
            <div className="bg-warning p-3">
              <p className="color"> Warning</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-2 col-lg-2 col-xl-7 mb-3">
            <div className="bg-danger p-3">
              <p className="color">Danger</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
