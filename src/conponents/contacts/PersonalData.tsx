export default function PersonalData() {
  return (
    <div className="personal-data">
      <h1>ARTEM PUZIK</h1>
      <p>FRONTEND</p>
      <p>SOFTWARE DEVELOPER</p>
      <div className="personal-data_location">
        <img src={require("../../img/location-marker.png")} alt="geolocation" />
        <a href="https://yandex.by/maps/157/minsk/house/Zk4YcAdiSkwOQFtpfXR3dntrYw==/?ll=27.602399%2C53.867788&z=17">MINSK, BELARUS</a>
      </div>
    </div>
  );
}
