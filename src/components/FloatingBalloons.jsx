function random(num) {
  return Math.floor(Math.random() * num);
}

function FloatingBalloonStyles() {
  const r = random(255);
  const g = random(255);
  const b = random(255);
  const marginTop = random(200);
  const marginLeft = random(50);
  const duration = random(5) + 5;
  return {
    backgroundColor: `rgba(${r},${g},${b},0.7)`,
    color: `rgba(${r},${g},${b},0.7)`,
    boxShadow: `inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7)`,
    margin: `${marginTop}px 0 0 ${marginLeft}px`,
    animation: `float ${duration}s ease-in infinite`,
  };
}

const balloons = Array(10).fill(0);

function FloatingBalloons() {
  return (
    <>
      {balloons.map((balloon, index) => {
        return (
          <div
            key={index}
            className="balloon"
            style={FloatingBalloonStyles()}
          ></div>
        );
      })}
    </>
  );
}

export default FloatingBalloons;
