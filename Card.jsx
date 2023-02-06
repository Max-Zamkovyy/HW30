const Card = (props) => {
  const {
    img,
    caption,
    title,
    author,
    students,
    level,
    rating,
    duration,
    modules,
  } = props;

  return (
    <div class="container">
      <img class="img" src={img} alt={caption} />
      <div class="level">
        <p class="level-one">{level}</p>
      </div>
      <div class="card">
        <p class="title">{title}</p>
        <div class="kurs-info">
          <p>{author}</p>
          <p>{rating}</p>
        </div>
        <div class="info">
          <p>{students} Students</p>
          <p>{modules} Modul</p>
          <p>{duration} hour</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
