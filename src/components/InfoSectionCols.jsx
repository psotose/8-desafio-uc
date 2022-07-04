
const InfoSectionCols = () => {
  return (
    <div className="detail-columns">
      <div className="detail-columns__container detail-columns__container-border">
        <i className="fa fa-users fa-3x detail-columns__icon"></i>
        <h5>MANAGEMENT</h5>
        <p className="detail-columns__p"> It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem
          Ipsum passages, and more.
        </p>
      </div>
      <div className="detail-columns__container detail-columns__container-border">
        <i className="detail-columns__icon fas fa-chart-bar fa-3x"></i>
        <h5>PLANNING</h5>
        <p className="detail-columns__p">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
          those
          interested. Sections 1.10.32 and 1.10.33
        </p>
      </div>
      <div className="detail-columns__container detail-columns__container-border">
        <i className="detail-columns__icon fab fa-stumbleupon-circle fa-3x"></i>
        <h5>MARKETING</h5>
        <p className="detail-columns__p">The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
          line in
          section 1.10.32
        </p>
      </div>
      <div className="detail-columns__container">
        <i className="detail-columns__icon far fa-file-word fa-3x"></i>
        <h5>REPORTS</h5>
        <p className="detail-columns__p">There are many variations of passages of Lorem Ipsum available, but the
          majority have
          suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
          believable.
        </p>
      </div>
    </div>
  )
};

export default InfoSectionCols;