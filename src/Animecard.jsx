function Animecard({ anime }) {
  // Check if anime and anime.images exist before accessing nested properties
  const imageUrl = anime?.images?.jpg?.image_url;

  return <div>{imageUrl && <img src={imageUrl} alt="" />}</div>;
}

export default Animecard;
