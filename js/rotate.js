function rotate() {
  const carousels = document.querySelectorAll(
    ".people-carousel, .people-carousel2, .people-carousel3, .people-carousel4"
  );

  carousels.forEach((carousel) => {
    const positions = ["front", "right", "back", "left"];
    const imgs = carousel.querySelectorAll("img");

    imgs.forEach((img) => {
      positions.forEach((pos) => img.classList.remove(pos));
    });

    imgs.forEach((img, i) => {
      const currentClass = positions.find((pos) => img.classList.contains(pos));
      const newClass = positions[(i + 1) % positions.length];
      img.classList.add(newClass);
    });
  });
}

// 2秒ごとに回転
setInterval(rotateClockwise, 2000);
