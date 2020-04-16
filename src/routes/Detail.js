import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { poster, title, year, summary, genres } = location.state;
      return (
        <section className="container">
          <div className="detail">
            <img src={poster} alt={title} title={title} />
            <div className="detail__movie">
              <div className="detail__movie__data">
                <h3 className="detail__movie__title">{title}</h3>
                <h5 className="detail__movie__year">{year}</h5>
                <ul className="detail__movie__genres">
                  {genres.map((genre, index) => (
                    <li className="genres__genre" key={index}>
                      {genre}
                    </li>
                  ))}
                </ul>
                <p className="detail__movie__summary">{summary}</p>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
