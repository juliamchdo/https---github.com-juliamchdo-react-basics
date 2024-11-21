import "./style.css";

export const Button = (props) => {
  const { text, loadMorePosts, disabled } = props;

  return (
    <button className="button" onClick={loadMorePosts} disabled={disabled}>
      {text}
    </button>
  );
};
