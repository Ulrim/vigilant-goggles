import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// 이 예는 두 개의 다른 화면을 렌더링하는 방법을 보여 준다.
//(또는 다른 컨텍스트에 있는 동일한 화면)
// 어떻게 거기에 도착했느냐에 따라.
//
// 색상을 클릭하고 전체 화면을 표시한 다음 "방문
// 갤러리"를 클릭하고 색을 클릭하십시오. URL 및 구성 요소 기록
// 예전과 같았지만 이제 우리는 모달 안에서 그들을 본다.
// 이전 화면 위에.

class ModalSwitch extends Component {
// '스위치/'에 알려 줄 위치를 '스위치/'에 전달할 수 있다.
// 라우터의 현재 위치를 무시하고 위치 사용
// 대신 프로펠러.
//
// 또한 "위치 상태"를 사용하여 앱에 사용자에게 알릴 수 있다.
// '/img/2'로 가고 싶다.
// 메인 페이지, 갤러리 뒤에 표시
//
// 보통 "/img/2"는 "/"에서 갤러리와 일치하지 않는다.
// 두 화면을 렌더링하려면 이전 화면을 저장하십시오.
// 위치 및 스위치로 전달하여 위치를
//는/img/2임에도 불구하고 여전히 '/'이다.
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if ( 
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
        console.log(this.previousLocation);
      this.previousLocation = this.props.location;
    }
  }
  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          {<Route exact path="/" component={Home} />}
          {/* <Route path="/gallery" component={Gallery} />
          <Route path="/img/:id" component={ImageView} /> */}
        </Switch>
        {/* <Route path="/about" component={Modal} /> */}
        {isModal ? <Route path="/about" component={Modal} /> : null}
      </div>
    );
  }
}

// const IMAGES = [
//   { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
//   { id: 1, title: "Lime Green", color: "LimeGreen" },
//   { id: 2, title: "Tomato", color: "Tomato" },
//   { id: 3, title: "Seven Ate Nine", color: "#789" },
//   { id: 4, title: "Crimson", color: "Crimson" }
// ];

// function Thumbnail({ color }) {
//   return (
//     <div
//       style={{
//         width: 50,
//         height: 50,
//         background: color
//       }}
//     />
//   );
// }

// function Image({ color }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 400,
//         background: color
//       }}
//     />
//   );
// }

function Home() {
  return (
    <div>
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <Link to={{
          pathname : "/about",
          state: { modal : true }
          }}>하하</Link>
      {/* <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul> */}
    </div>
  );
}

// function Gallery() {
//   return (
//     <div>
//       {IMAGES.map(i => (
//         <Link
//           key={i.id}
//           to={{
//             pathname: `/img/${i.id}`,
//             // this is the trick!
//             state: { modal: true }
//           }}
//         >
//           <Thumbnail color={i.color} />
//           <p>{i.title}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// function ImageView({ match }) {
//   let image = IMAGES[parseInt(match.params.id, 10)];

//   if (!image) return <div>Image not found</div>;

//   return (
//     <div>
//       <h1>{image.title}</h1>
//       <Image color={image.color} />
//     </div>
//   );
// }

function Modal({ history }) {

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>하하 </h1>
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}

function ModalGallery() {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  );
}

export default ModalGallery;
