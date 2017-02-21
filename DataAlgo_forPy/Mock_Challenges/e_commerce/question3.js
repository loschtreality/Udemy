// Given two rectangles, determine if they overlap. The rectangles are defined as a Dictionary, for example:

// r1 = {
  // x and y coordinates of the bottom-left corner of the rectangle
 //  'x': 2 , 'y': 4,
 // Width and Height of rectangle
//   'w':5,'h':12
 // }


// If the rectangles do overlap, return the dictionary which describes the overlapping section
// Requirements
// Make sure the dictionary you output is in the same form as the input.
// Feel free to use an IDE for the code, but make sure you use paper/pencil or whiteboard to draw out your plan and logic

// Questions

  // 1. Can rectangles have negative widths and heights, describing a different rectangle shape?
  // 2. What do I return if the boxes do not overlap

const overlap_rects = (rect, box) => {
  const lateral_overlap = calculate_overlap(rect.x, rect.w, box.x, box.w)
  const vertical_overlap = calculate_overlap(rect.y, rect.h, box.y, box.h)

  const [x_overlap, w_overlap] = lateral_overlap
  const [y_overlap, h_overlap] = vertical_overlap

  return ({
      x: x_overlap,
      y: y_overlap,
      w: w_overlap,
      h: h_overlap
    })
}

const calculate_overlap = (coor1, dim1, coor2, dim2) => {
  const greater = Math.max(coor1, coor2)

  const lower = Math.min(coor1 + dim1, coor2 + dim2)

  const overlap = lower - greater

  if (greater >= lower) { return [null, null] }

  return [greater, overlap]
}

const rect = {
  w: 4,
  h: 4,
  x: 2,
  y: 4
}

const box = {
  w: 4,
  h: 4,
  x: 5,
  y: 5
}

console.log(overlap_rects(rect, box))
