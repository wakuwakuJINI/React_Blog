import PropTypes from "prop-types";

export default function BlogList({ contents }) {
  return (
    <ul>
      {contents.map((content, index) => {
        return <li key={index}>{content}</li>;
      })}
    </ul>
  );
}

BlogList.propTypes = {
  contents: PropTypes.array.isRequired,
};
