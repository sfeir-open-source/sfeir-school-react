export function computePrevious<T>(images: T[], selected: T): T {
  const selectedIndex = images.indexOf(selected);
  const previousIndex = (images.length + selectedIndex - 1) % images.length;

  return images[previousIndex];
}

export function computeNext<T>(images: T[], selected: T): T {
  const selectedIndex = images.indexOf(selected);
  const nextIndex = (selectedIndex + 1) % images.length;

  return images[nextIndex];
}
